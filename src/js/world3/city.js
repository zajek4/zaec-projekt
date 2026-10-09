// Scena 03 — stvarni Osijek (OpenStreetMap) u metrima: x = istok, y = gore, z = −sjever; ishodište = konkatedrala.
// Hijerarhija točnosti: konkatedrala (Higgsfield + Blender model) → Hotel Osijek (tlocrt + fotografije) →
// stvarni tlocrti i visine zgrada (OSM) → ulična svjetla duž stvarnih ulica. Engine skalira grupu s kartom,
// pa svjetla koja se vide iz visine leže točno na ulicama kroz koje kamera kasnije prolazi.
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import { glowPoints, seeded } from './lib.js';
import { buildCathedral } from './cathedral.js';
import { buildLightMap, cityUniforms, buildingMaterial, groundMaterial, surfaceMaterial, waterMaterial } from './city-look.js';

const RISE_R = 3200; // m — val izrastanja grada od konkatedrale prema rubu

/* ───────────────────────── čitanje binarnog zapisa ───────────────────────── */
function parse(buf) {
  const H = new Int32Array(buf, 0, 13);
  const D = new Int16Array(buf, 52);
  let o = 0;
  const read = (count, heads) => {
    const out = [];
    for (let i = 0; i < count; i++) {
      const h = [];
      for (let k = 0; k < heads; k++) h.push(D[o++]);
      const n = D[o++];
      const r = new Float32Array(n * 2);
      for (let k = 0; k < n; k++) { r[k * 2] = D[o++] / 2; r[k * 2 + 1] = D[o++] / 2; }
      out.push({ h, r });
    }
    return out;
  };
  // zgrada s dvorištem: unutarnji prstenovi (CW) slijede odmah iza nje, vrsta | 8
  const buildings = [];
  for (const b of read(H[1], 2)) {
    if (b.h[1] & 8) buildings[buildings.length - 1]?.holes.push(b.r);
    else { b.holes = []; buildings.push(b); }
  }
  return {
    buildings,
    roads: read(H[3], 1),
    water: read(H[5], 1),
    areas: read(H[7], 1),
    marks: read(H[9], 1),
  };
}

const ringArea = (r) => { let a = 0; const n = r.length / 2; for (let i = 0, j = n - 1; i < n; j = i++) a += (r[j * 2] - r[i * 2]) * (r[j * 2 + 1] + r[i * 2 + 1]); return a / 2; };
const centroid = (r) => { let x = 0, y = 0; const n = r.length / 2; for (let i = 0; i < n; i++) { x += r[i * 2]; y += r[i * 2 + 1]; } return [x / n, y / n]; };
const toV2 = (r) => { const out = []; for (let i = 0; i < r.length; i += 2) out.push(new THREE.Vector2(r[i], r[i + 1])); return out; };
function pip(x, y, r) {
  let inside = false;
  for (let i = 0, j = r.length / 2 - 1; i < r.length / 2; j = i++) {
    const xi = r[i * 2], yi = r[i * 2 + 1], xj = r[j * 2], yj = r[j * 2 + 1];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}

/**
 * Maska vode (par-nepar preko svih prstenova: rijeka minus otoci) u ćelijama od `cell` m, popunjena
 * vodoravnim linijama jednom. Provjera točke je tada jedno čitanje umjesto točke-u-poligonu po tisućama
 * vrhova (prije ~280 ms pri učitavanju na sporijem mobitelu). Vraća (x, y) → bool.
 */
function waterMask(rings, cell) {
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (const r of rings) for (let i = 0; i < r.length; i += 2) { x0 = Math.min(x0, r[i]); x1 = Math.max(x1, r[i]); y0 = Math.min(y0, r[i + 1]); y1 = Math.max(y1, r[i + 1]); }
  if (!(x1 > x0)) return () => false;
  const W = Math.ceil((x1 - x0) / cell) + 1, H = Math.ceil((y1 - y0) / cell) + 1;
  const m = new Uint8Array(W * H);
  const xs = [];
  for (let row = 0; row < H; row++) {
    const y = y0 + (row + 0.5) * cell;
    xs.length = 0;
    for (const r of rings) {
      const n = r.length / 2;
      for (let i = 0, j = n - 1; i < n; j = i++) {
        const yi = r[i * 2 + 1], yj = r[j * 2 + 1];
        if (yi > y !== yj > y) xs.push(r[i * 2] + ((r[j * 2] - r[i * 2]) * (y - yi)) / (yj - yi));
      }
    }
    xs.sort((p, q) => p - q);
    for (let k = 0; k + 1 < xs.length; k += 2) {
      const a = Math.max(0, Math.ceil((xs[k] - x0) / cell - 0.5)), b = Math.min(W - 1, Math.floor((xs[k + 1] - x0) / cell - 0.5));
      m.fill(1, row * W + a, row * W + b + 1);
    }
  }
  return (x, y) => {
    const cx = Math.floor((x - x0) / cell), cy = Math.floor((y - y0) / cell);
    return cx >= 0 && cy >= 0 && cx < W && cy < H && m[cy * W + cx] === 1;
  };
}

/** Prsten pomaknut prema unutra za d (simetrala kuta, ograničena na oštrim kutovima). Prsten je CCW (x istok, y sjever). */
function insetRing(r, d) {
  const n = r.length / 2;
  const out = new Float32Array(n * 2);
  for (let i = 0; i < n; i++) {
    const p = (i + n - 1) % n, q = (i + 1) % n;
    let e1x = r[i * 2] - r[p * 2], e1y = r[i * 2 + 1] - r[p * 2 + 1];
    let e2x = r[q * 2] - r[i * 2], e2y = r[q * 2 + 1] - r[i * 2 + 1];
    const l1 = Math.hypot(e1x, e1y) || 1, l2 = Math.hypot(e2x, e2y) || 1;
    e1x /= l1; e1y /= l1; e2x /= l2; e2y /= l2;
    // unutarnje normale (lijevo od smjera za CCW)
    let mx = -e1y - e2y, my = e1x + e2x;
    const ml = Math.hypot(mx, my);
    if (ml < 1e-4) { mx = -e1y; my = e1x; } else { mx /= ml; my /= ml; }
    const c = Math.max(0.45, mx * -e1y + my * e1x);
    out[i * 2] = r[i * 2] + (mx * d) / c;
    out[i * 2 + 1] = r[i * 2 + 1] + (my * d) / c;
  }
  return out;
}

/* ───────────────────────── gradnja geometrije ───────────────────────── */
// Jedna mreža za cijeli grad: položaj (f32), albedo + vrsta plohe (u8) i podaci o prozorima (f32 × 4).
class GeoBuf {
  constructor(cap) { this.n = 0; this.alloc(cap); }
  alloc(cap) {
    const p = new Float32Array(cap * 3), c = new Uint8Array(cap * 4), w = new Float32Array(cap * 4);
    if (this.p) { p.set(this.p); c.set(this.c); w.set(this.w); }
    this.p = p; this.c = c; this.w = w; this.cap = cap;
  }
  v(x, y, z, k, t, w) {
    if (this.n === this.cap) this.alloc(this.cap * 2);
    const i = this.n++;
    this.p[i * 3] = x; this.p[i * 3 + 1] = y; this.p[i * 3 + 2] = z;
    this.c[i * 4] = Math.min(255, k[0] * 255 + 0.5); this.c[i * 4 + 1] = Math.min(255, k[1] * 255 + 0.5); this.c[i * 4 + 2] = Math.min(255, k[2] * 255 + 0.5);
    this.c[i * 4 + 3] = t * 40;
    if (w) { this.w[i * 4] = w[0]; this.w[i * 4 + 1] = w[1]; this.w[i * 4 + 2] = w[2]; this.w[i * 4 + 3] = w[3]; }
  }
  tri(a, b, c, k, t) { this.v(a[0], a[1], a[2], k, t); this.v(b[0], b[1], b[2], k, t); this.v(c[0], c[1], c[2], k, t); }
  /** trokut okrenut prema gore (ili prema van za kosine) bez obzira na redoslijed vrhova */
  triUp(a, b, c, k, t) {
    const ux = b[0] - a[0], uz = b[2] - a[2], vx = c[0] - a[0], vz = c[2] - a[2];
    if (uz * vx - ux * vz >= 0) this.tri(a, b, c, k, t); else this.tri(a, c, b, k, t);
  }
  geometry() {
    const n = this.n;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.p.slice(0, n * 3), 3));
    g.setAttribute('aCol', new THREE.BufferAttribute(this.c.slice(0, n * 4), 4, true));
    g.setAttribute('aWin', new THREE.BufferAttribute(this.w.slice(0, n * 4), 4));
    g.computeBoundingSphere();
    return g;
  }
}

export function createCity({ lite, dataUrl, modelUrl, onLines, onModel, onLoaded, prepare }) {
  const rand = seeded(1945);
  const group = new THREE.Group();
  group.name = 'osijek';
  // zajedničke odore noćnog izgleda (karta svjetla, magla, kamera, mjesec, izrastanje, prigušenje)
  const C = cityUniforms();
  const U = C;
  const R_BUILD = lite ? 1400 : 2600;
  const R_WIN = lite ? 380 : 650;
  const R_EDGE = lite ? 600 : 1100;
  const disposables = [];
  const track = (o) => { disposables.push(o); return o; };
  let loaded = false;
  let disposed = false;
  const anchors = { cath: new THREE.Vector3(30, 99, -4), hotel: new THREE.Vector3(329, 66, -154), trg: new THREE.Vector3(105, 4, -78), drava: new THREE.Vector3(80, 4, -470) };

  /* ── tlo: tamno, mreža od 50 m koja se gubi prema rubu; ulice svijetle iz karte svjetla ── */
  const groundMat = track(groundMaterial(C));
  const ground = new THREE.Mesh(track(new THREE.CircleGeometry(5200, 64).rotateX(-Math.PI / 2)), groundMat);
  ground.position.y = -0.4;
  ground.renderOrder = -1;
  group.add(ground);

  /* ── objekti koji se pune nakon učitavanja ── */
  // stalno prozirno: prebacivanje transparent ↔ opaque mijenja shader program (prevođenje usred scrolla)
  const cityMat = track(buildingMaterial(C, { lite }));
  let buildingsMesh = null;
  const edgeU = { uRise: U.uRise, uDim: U.uDim, uLines: { value: 0.4 }, uColor: { value: new THREE.Color('#5d7ed6') } };
  const edgeMat = track(new THREE.ShaderMaterial({
    uniforms: edgeU,
    transparent: true,
    depthWrite: false,
    vertexShader: /* glsl */ `uniform float uRise; varying float vF;
      void main(){ vec3 p = position; float dR = length(p.xz); float k = clamp((uRise * ${RISE_R.toFixed(1)} - dR) / 260.0, 0.0, 1.0); p.y *= k; vF = (1.0 - smoothstep(300.0, 1100.0, dR)) * k;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); }`,
    fragmentShader: /* glsl */ `uniform vec3 uColor; uniform float uLines; varying float vF; void main(){ gl_FragColor = vec4(uColor, uLines * vF); }`,
  }));
  const riverMat = track(waterMaterial(C, { lite }));
  const areaMat = track(surfaceMaterial(C));

  let lampPts = glowPoints({ count: 1, color: '#ffae55', core: '#fff1d6', size: 0.9 });
  lampPts.points.renderOrder = 4;
  const camL = new THREE.Vector3(), dirL = new THREE.Vector3();

  /* ── konkatedrala: parametarski model iz tlocrta (OSM) i referenci (tools/cathedral) s rezervnim modelom ──
     Boje vrhova nose materijal (cigla, kamen, škriljevac, vitraj, metal). Shader dodaje sljubnice cigle izbliza,
     reflektore odozdo, topli sjaj vitraja, isticanje (uFocus) i "skener" koji zgradu pretvara u nacrt (uScan). */
  const cathU = {
    uLift: { value: 0 }, uGlow: { value: 0.5 }, uAlpha: { value: 1 }, uFocus: { value: 0 },
    uScan: { value: 200 }, uScanOn: { value: 0 }, uWin: { value: 0.3 },
  };
  function cathMaterial() {
    // dvostrano: model je zatvoren i malen (~6k trokuta), a smjer namatanja ne smije ovisiti o generatoru;
    // ravne normale (flatShading) dolaze iz derivacija pa su uvijek okrenute kameri
    const m = new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.84, metalness: 0.02, transparent: true, side: THREE.DoubleSide });
    // jedan prolaz i stalni zapis dubine: dvostruki prolaz (stražnje pa prednje plohe) bez dubine
    // bi pustio da stražnji zidovi prekriju prednje — zgrada bi izgledala prozirno
    m.forceSinglePass = true;
    m.depthWrite = true;
    m.onBeforeCompile = (sh) => {
      Object.assign(sh.uniforms, cathU);
      sh.vertexShader = sh.vertexShader
        .replace('#include <common>', '#include <common>\nattribute float aKind; uniform float uLift; varying float vH; varying float vKind; varying vec3 vLoc;')
        .replace('#include <begin_vertex>', '#include <begin_vertex>\nvH = position.y; vKind = aKind; vLoc = position; transformed.y = transformed.y * uLift - (1.0 - uLift) * 3.0;');
      sh.fragmentShader = sh.fragmentShader
        .replace('#include <common>', `#include <common>
          uniform float uGlow; uniform float uAlpha; uniform float uFocus; uniform float uScan; uniform float uScanOn; uniform float uWin;
          varying float vH; varying float vKind; varying vec3 vLoc;
          float hh(vec3 p){ return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }`)
        .replace('#include <color_fragment>', `#include <color_fragment>
          // cigla: sljubnice svakih 36 cm, vidljive tek izbliza (nestaju prije nego što bi treperile)
          if (vKind < 0.5) {
            float cy = vH / 0.36;
            float w = fwidth(cy);
            float d = abs(fract(cy + 0.5) - 0.5);
            float line = 1.0 - smoothstep(0.07, 0.07 + w, d);
            diffuseColor.rgb *= 1.0 - 0.2 * line * (1.0 - smoothstep(0.12, 0.4, w));
          }`)
        .replace('#include <dithering_fragment>', `#include <dithering_fragment>
          float glass = step(2.5, vKind) * step(vKind, 3.5);
          // ravna normala u prostoru modela (okrenuta kameri): razlikuje zid od krova i daje smjer zida.
          // Strmi gotički krov ima |n.y| ≈ 0,5, plohe šiljka i fijala ≈ 0,15 (za reflektore su zid)
          vec3 nL = normalize(cross(dFdx(vLoc), dFdy(vLoc)));
          float wall = 1.0 - smoothstep(0.22, 0.42, abs(nL.y));
          float tc = dot(vLoc.xz, normalize(vec2(-nL.z, nL.x) + 1e-5));
          // reflektori odozdo (topli) i hladna noć prema vrhu
          // iz daljine zgrada dijeli noćnu paletu grada; reflektori i toplina rastu tek kad postane motiv (uFocus)
          float flood = 1.0 - smoothstep(4.0, 78.0, vH);
          // reflektori u tlu svakih ~5,5 m: u podnožju lepeze svjetla, koje se s visinom šire i stapaju
          float pu = fract(tc / 5.5 + 0.5) - 0.5;
          float psp = 0.13 + vH * 0.018;
          float pool = exp(-pu * pu / (psp * psp));
          float fm = mix(1.0, 0.7 + 0.45 * pool, (1.0 - smoothstep(1.5, 24.0, vH)) * wall * (0.4 + 0.6 * uFocus));
          // glavni reflektori stoje na trgu ispred tornja (+x): to pročelje svjetlije, bočna i stražnja tamnija;
          // krovove svjetlo odozdo ne hvata, pa ostaju u hladnoj noći (topli zidovi, tamni krovovi)
          fm *= mix(0.3, 0.8 + 0.28 * smoothstep(-0.3, 0.9, nL.x), wall);
          float lit = clamp(flood * (0.5 + 0.5 * uGlow) * (0.3 + 0.7 * uFocus), 0.0, 1.0) * fm;
          vec3 night = mix(vec3(0.36, 0.40, 0.58), vec3(1.08, 0.88, 0.72), lit);
          gl_FragColor.rgb *= mix(vec3(1.0), night, 1.0 - glass);
          gl_FragColor.rgb += vec3(1.0, 0.5, 0.25) * uGlow * 0.05 * flood * (1.0 - glass);
          // vitraji: toplo svjetlo iznutra, olovni okviri i blaga razlika stakala (jantar, ponegdje crveno-jantarno
          // ili prigušeno plavo); okviri nestaju iz daljine prije nego što bi treperili. Sjaj oko njih je zasebna mreža
          float hw = hh(floor(vLoc * vec3(0.45, 0.2, 0.45)));
          vec2 gc = vec2(tc / 0.4, vH / 0.52);
          vec2 gw = fwidth(gc);
          vec2 gd = abs(fract(gc) - 0.5);
          vec2 ld = smoothstep(0.44 - gw, vec2(0.44), gd) * (1.0 - smoothstep(0.15, 0.45, gw));
          float hc = hh(vec3(floor(gc), 17.0 + hw * 31.0));
          vec3 sg = mix(vec3(1.0, 0.8, 0.4), vec3(1.0, 0.64, 0.26), hw) * (0.82 + 0.3 * fract(hc * 7.3));
          if (hc > 0.87) sg = vec3(0.95, 0.42, 0.24);
          else if (hc < 0.07) sg = vec3(0.32, 0.4, 0.7);
          gl_FragColor.rgb = mix(gl_FragColor.rgb, sg * (0.22 + 0.8 * uWin) * (1.0 - 0.7 * max(ld.x, ld.y)), glass);
          // zvonik iznad sata: iza žaluzina tek naslutljivo toplo svjetlo, jače pri dnu otvora. Otvori su u modelu
          // tamna "vrata" (vrsta 2 kao cigla i škriljevac): od cigle ih dijeli tama, od škriljevca topliji ton
          float bel = step(1.5, vKind) * step(vKind, 2.5) * step(vColor.r, 0.03) * step(vColor.b * 1.05, vColor.r) * step(45.8, vH) * step(vH, 60.9);
          float sl = vH / 0.46;
          float sw = fwidth(sl);
          float gap = mix(1.0 - smoothstep(0.15, 0.15 + sw, abs(fract(sl) - 0.8)), 0.3, smoothstep(0.3, 0.8, sw));
          gl_FragColor.rgb += vec3(1.0, 0.6, 0.3) * bel * gap * (0.35 + 0.65 * (1.0 - smoothstep(46.0, 59.5, vH))) * (0.03 + 0.15 * uFocus);
          // vrh tornja hvata svjetlo kad zgrada postane glavni motiv
          gl_FragColor.rgb += vec3(1.0, 0.8, 0.58) * smoothstep(58.0, 90.0, vH) * uFocus * 0.14 * (1.0 - glass);
          // skener: iznad crte ostaje samo nacrt (linije), zgrada se čisto reže; na crti tanka svjetla traka
          if (uScanOn > 0.5 && vH > uScan) discard;
          float band = exp(-pow((vH - uScan) / 0.9, 2.0)) * uScanOn;
          gl_FragColor.rgb += vec3(0.45, 0.62, 1.0) * band * 1.2;
          gl_FragColor.a *= uAlpha;`);
    };
    m.customProgramCacheKey = () => 'zaec-cath-v5';
    return m;
  }
  // sjaj vitraja: aditivni prsten oko prozora (iz modela), bez naknadne obrade slike
  const haloU = { uLift: cathU.uLift, uScan: cathU.uScan, uScanOn: cathU.uScanOn, uI: { value: 0 } };
  const haloMat = track(new THREE.ShaderMaterial({
    uniforms: haloU,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
    vertexShader: /* glsl */ `attribute vec4 aGlow; uniform float uLift; varying vec4 vG; varying float vH;
      void main(){ vG = aGlow; vH = position.y; vec3 p = position; p.y = p.y * uLift - (1.0 - uLift) * 3.0;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); }`,
    fragmentShader: /* glsl */ `uniform float uI; uniform float uScan; uniform float uScanOn; varying vec4 vG; varying float vH;
      void main(){
        float a = vG.a * vG.a * uI;
        if (uScanOn > 0.5 && vH > uScan) discard;
        if (a < 0.003) discard;
        gl_FragColor = vec4(vG.rgb * a, a);
      }`,
  }));
  let halo = null;
  let cath = null, cathMat = null, cathLines = null;
  let cathSeq = 0;
  const spire = new THREE.Vector3(33.8, 90, 1);
  // rubovi rezervnog modela (crtež i morph) računaju se tek ako pravi model ne stigne: inače bi se isti posao
  // (rubovi + izvor morpha) pri učitavanju radio dvaput
  let fallbackLines = null;
  function setCathedral(geo, isFallback, haloGeo = null, lazyLines = false) {
    const seq = ++cathSeq;
    if (!geo.attributes.aKind) geo.setAttribute('aKind', new THREE.BufferAttribute(new Float32Array(geo.attributes.position.count), 1));
    const mat = cathMaterial();
    const mesh = new THREE.Mesh(geo, mat);
    mesh.renderOrder = 1;
    // rubovi za crtež i morph (iz stvarne geometrije modela)
    const lines = lazyLines ? null : new THREE.EdgesGeometry(geo, isFallback ? 22 : 30);
    const swap = () => {
      // zakašnjeli rezervni model nikad ne zamjenjuje pravi
      if (seq !== cathSeq) { geo.dispose(); mat.dispose(); lines?.dispose(); haloGeo?.dispose(); return; }
      clearTimeout(fallbackLines?.timer);
      fallbackLines = null;
      if (cath) { group.remove(cath); cath.geometry.dispose(); cathMat.dispose(); cathLines?.dispose(); }
      if (halo) { group.remove(halo); halo.geometry.dispose(); halo = null; }
      if (haloGeo) { halo = new THREE.Mesh(haloGeo, haloMat); halo.renderOrder = 5; halo.frustumCulled = false; group.add(halo); }
      // vrh šiljka: najviša točka modela (izvor svjetlosnog snopa)
      const p = geo.attributes.position;
      let top = 0;
      for (let i = 1; i < p.count; i++) if (p.getY(i) > p.getY(top)) top = i;
      spire.set(p.getX(top), p.getY(top), p.getZ(top));
      anchors.cath.set(spire.x - 4, spire.y * 1.06, spire.z);
      cath = mesh; cathMat = mat; cathLines = lines;
      group.add(mesh);
      if (lines) onLines?.(lines, isFallback);
      else {
        const run = () => { if (seq !== cathSeq || cathLines) return; cathLines = new THREE.EdgesGeometry(geo, 22); onLines?.(cathLines, true); };
        fallbackLines = { run, timer: setTimeout(run, 6000) };
      }
      onModel?.(mesh);
    };
    // novi shader se prevodi prije zamjene (bez trzaja usred scrolla)
    if (prepare) prepare(mesh).then(swap, swap);
    else swap();
  }
  {
    // rezervni model: proceduralni (jedinice ~6 m, toranj na −x) → metri, toranj na istoku
    const g = buildCathedral();
    g.scale(-7, 7, 7);
    g.translate(2, 0, -3.8);
    g.deleteAttribute('normal');
    setCathedral(g, true, null, !!modelUrl);
  }
  if (modelUrl) {
    const loader = new GLTFLoader();
    loader.setMeshoptDecoder(MeshoptDecoder);
    loader.load(modelUrl, (gltf) => {
      // dvije mreže: zgrada i sjaj prozora (imena čvorova iz generatora; gltfpack može dodati roditelje)
      const named = (o) => { for (let p = o; p; p = p.parent) if (p.name === 'konkatedrala' || p.name === 'sjaj') return p.name; return ''; };
      let mesh = null, glow = null;
      gltf.scene.updateMatrixWorld(true);
      gltf.scene.traverse((o) => { if (!o.isMesh) return; if (named(o) === 'sjaj') glow = glow || o; else mesh = mesh || o; });
      if (!mesh) return;
      // gltfpack kvantizira atribute (KHR_mesh_quantization): prije primjene matrice čvora pretvori u float.
      // COLOR_0.a nosi vrstu materijala (0 cigla, 1 kamen, 2 škriljevac, 3 vitraj, 4 metal).
      const toFloat = (src, withKind) => {
        const geo = new THREE.BufferGeometry();
        const P = src.getAttribute('position');
        const pos = new Float32Array(P.count * 3);
        for (let i = 0; i < P.count; i++) { pos[i * 3] = P.getX(i); pos[i * 3 + 1] = P.getY(i); pos[i * 3 + 2] = P.getZ(i); }
        geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
        const C = src.getAttribute('color');
        if (C && withKind) {
          const col = new Float32Array(C.count * 3), kind = new Float32Array(C.count);
          for (let i = 0; i < C.count; i++) {
            col[i * 3] = C.getX(i); col[i * 3 + 1] = C.getY(i); col[i * 3 + 2] = C.getZ(i);
            kind[i] = C.itemSize > 3 ? Math.round(C.getW(i) * 4) : 0;
          }
          geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
          geo.setAttribute('aKind', new THREE.BufferAttribute(kind, 1));
        } else if (C) {
          const g4 = new Float32Array(C.count * 4);
          for (let i = 0; i < C.count; i++) { g4[i * 4] = C.getX(i); g4[i * 4 + 1] = C.getY(i); g4[i * 4 + 2] = C.getZ(i); g4[i * 4 + 3] = C.itemSize > 3 ? C.getW(i) : 1; }
          geo.setAttribute('aGlow', new THREE.BufferAttribute(g4, 4));
        }
        if (src.index) geo.setIndex(src.index.clone());
        return geo;
      };
      const geo = toFloat(mesh.geometry, true);
      geo.applyMatrix4(mesh.matrixWorld);
      let haloGeo = null;
      if (glow) { haloGeo = toFloat(glow.geometry, false); haloGeo.applyMatrix4(glow.matrixWorld); }
      gltf.scene.traverse((o) => { if (o.isMesh) { o.geometry.dispose(); o.material.dispose?.(); } });
      setCathedral(geo, false, haloGeo);
    }, undefined, (err) => { console.warn('[ZAEC] model konkatedrale nije učitan, koristi se rezervni', err); fallbackLines?.run(); });
  }
  // reflektor: svjetlo je stalno u sceni (dodaje ga engine u korijen), samo mu se mijenja jačina —
  // promjena broja svjetala inače prisiljava ponovno prevođenje svih osvijetljenih shadera usred scrolla
  const flood = new THREE.PointLight('#ff9a5c', 0, 32, 1.4);
  const floodLocal = new THREE.Vector3(40, 14, 30);

  /* ── Hotel Osijek: dvije staklene ploče na podiju uz Dravu (tlocrt iz OSM-a, proporcije s fotografija) ── */
  const hotel = new THREE.Group();
  const hotelU = { uRise: U.uRise, uDim: U.uDim, uAlpha: { value: 1 } };
  const hotelMat = track(new THREE.ShaderMaterial({
    uniforms: hotelU,
    transparent: true,
    vertexShader: /* glsl */ `varying vec3 vL; varying vec3 vN; varying vec3 vW; uniform float uRise;
      void main(){ vL = position; vN = normalize(mat3(modelMatrix) * normal); vec3 p = position;
        float k = clamp((uRise * ${RISE_R.toFixed(1)} - 360.0) / 260.0, 0.0, 1.0); p.y *= k;
        vec4 w = modelMatrix * vec4(p, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
    fragmentShader: /* glsl */ `uniform float uDim; uniform float uAlpha; varying vec3 vL; varying vec3 vN; varying vec3 vW;
      float h21(vec2 p){ return fract(sin(dot(p, vec2(41.3, 289.1))) * 43758.5453); }
      void main(){
        vec3 n = normalize(vN);
        float roof = step(0.6, n.y);
        float u = abs(n.x) > abs(n.z) ? vL.z : vL.x;
        vec2 cell = floor(vec2(u / 3.0, vL.y / 3.4));
        vec2 fc = fract(vec2(u / 3.0, vL.y / 3.4));
        float frame = step(0.1, fc.x) * step(0.22, fc.y) * step(fc.y, 0.9);
        float lit = step(0.72, h21(cell + floor(vL.y / 30.0))) * frame;
        vec3 v = normalize(cameraPosition - vW);
        float fres = pow(1.0 - abs(dot(n, v)), 2.0);
        // noćno staklo: tamno plavo-sivo s hladnim odsjajem neba; sobe tople, ponegdje hladni zaslon
        vec3 glass = mix(vec3(0.016, 0.026, 0.055), vec3(0.07, 0.11, 0.24), fres * 0.8 + 0.1);
        float hc = h21(cell * 1.7 + 3.0);
        vec3 wc = hc < 0.78 ? vec3(0.98, 0.72, 0.44) : vec3(0.6, 0.7, 0.95);
        vec3 c = glass * (0.6 + 0.4 * frame) + lit * wc * (0.42 + 0.3 * h21(cell + 7.0));
        c = mix(c, vec3(0.04, 0.045, 0.06), roof);
        c *= (1.0 - uDim * 0.8);
        gl_FragColor = vec4(c, uAlpha);
      }`,
  }));
  group.add(hotel);

  /* ── gradnja iz podataka ── */
  const lineSegs = [];
  async function load() {
    const buf = await (await fetch(dataUrl)).arrayBuffer();
    const d = parse(buf);
    const G = new GeoBuf(1 << 18);
    const DEG = Math.PI / 180;
    // Drava: vanjski prsten + otoci (rupe); pomoćne provjere za mostove, šetnicu i odsjaje
    const outers = d.water.filter((w) => w.h[0] === 0), inners = d.water.filter((w) => w.h[0] === 1);
    const inWater = waterMask([...outers, ...inners].map((w) => w.r), 4);
    const nearWater = (x, y, m = 45) => inWater(x + m, y) || inWater(x - m, y) || inWater(x, y + m) || inWater(x, y - m);
    const riverside = [];

    // gradska središta (Gornji grad oko konkatedrale, Tvrđa): ondje je više izloga, svjetla i prometa
    const zone = (x, y) => 0.45 + 0.55 * Math.exp(-Math.hypot(x - 112, y - 53) / 900) + 0.4 * Math.exp(-Math.hypot(x - 1550, y - 20) / 420);
    const centreK = (x, y) => Math.min(Math.hypot(x - 112, y - 53) / 900, Math.hypot(x - 1550, y - 20) / 450);

    // palete (linearni albedo): žbuka gradskih pročelja, novija gradnja, industrija; crijep, škriljevac/lim, ravni krovovi
    const PLASTER = [[0.56, 0.46, 0.3], [0.6, 0.52, 0.38], [0.5, 0.41, 0.28], [0.55, 0.5, 0.42], [0.44, 0.45, 0.42], [0.52, 0.37, 0.29], [0.41, 0.45, 0.37], [0.62, 0.58, 0.5]];
    const MODERN = [[0.36, 0.37, 0.38], [0.44, 0.43, 0.4], [0.3, 0.31, 0.33], [0.5, 0.47, 0.42]];
    const INDUS = [[0.27, 0.27, 0.28], [0.3, 0.16, 0.11], [0.34, 0.33, 0.31]];
    const TILE = [[0.4, 0.13, 0.07], [0.33, 0.11, 0.06], [0.45, 0.17, 0.09], [0.3, 0.14, 0.09], [0.38, 0.18, 0.12]];
    const SLATE = [[0.1, 0.11, 0.13], [0.13, 0.14, 0.16], [0.16, 0.15, 0.15]];
    const FLAT = [[0.09, 0.09, 0.095], [0.12, 0.12, 0.12], [0.07, 0.075, 0.08]];
    const BRICK = [0.3, 0.12, 0.08];
    const pick = (P) => P[(rand() * P.length) | 0];
    const vary = (k, a) => k.map((c) => c * (1 - a + rand() * 2 * a));
    const WSP = [0, 3.6, 3.0, 3.4, 6.0]; // razmak prozora po profilu (isti kao u shaderu)
    const shops = [];

    // zidovi s podacima o prozorima: niz prozora je centriran na svakom zidu (bez prozora na samom kutu)
    const walls = (r, n, y0, y1, k, win) => {
      for (let i = 0; i < n; i++) {
        const j = (i + 1) % n;
        const ax = r[i * 2], az = -r[i * 2 + 1], bx = r[j * 2], bz = -r[j * 2 + 1];
        let wa = null, wb = null;
        if (win) {
          const L = Math.hypot(bx - ax, bz - az), sp = WSP[win.prof];
          const nw = Math.floor(L / sp);
          if (nw >= 1) { const m = (L - nw * sp) / 2, ps = win.prof + win.seed; wa = [-m, win.top, nw * sp, ps]; wb = [L - m, win.top, nw * sp, ps]; }
        }
        G.v(ax, y0, az, k, 0, wa); G.v(bx, y0, bz, k, 0, wb); G.v(bx, y1, bz, k, 0, wb);
        G.v(ax, y0, az, k, 0, wa); G.v(bx, y1, bz, k, 0, wb); G.v(ax, y1, az, k, 0, wa);
      }
    };
    // kosina krova između vanjskog i unutarnjeg prstena
    const slope = (ro, ri, y0, y1, k, t) => {
      for (let i = 0, n = ro.length / 2; i < n; i++) {
        const j = (i + 1) % n;
        const a = [ro[i * 2], y0, -ro[i * 2 + 1]], b = [ro[j * 2], y0, -ro[j * 2 + 1]];
        const ia = [ri[i * 2], y1, -ri[i * 2 + 1]], ib = [ri[j * 2], y1, -ri[j * 2 + 1]];
        G.tri(a, b, ib, k, t);
        G.tri(a, ib, ia, k, t);
      }
    };
    const cap = (ring, y, k, t, holes = []) => {
      // ravna ploha (gleda prema gore), s dvorištima kao rupama; rezervno lepeza iz težišta ako triangulacija ne uspije
      const contour = toV2(ring);
      let tris = [];
      try { tris = THREE.ShapeUtils.triangulateShape(contour, holes.map(toV2)); } catch (e) { tris = []; }
      if (tris.length) {
        const all = holes.length ? Float32Array.from([...ring, ...holes.flatMap((q) => [...q])]) : ring;
        for (const [i0, i1, i2] of tris) G.triUp([all[i0 * 2], y, -all[i0 * 2 + 1]], [all[i1 * 2], y, -all[i1 * 2 + 1]], [all[i2 * 2], y, -all[i2 * 2 + 1]], k, t);
      } else { const [qx, qy] = centroid(ring); for (let i = 0, m = ring.length / 2; i < m; i++) { const j = (i + 1) % m; G.triUp([qx, y, -qy], [ring[j * 2], y, -ring[j * 2 + 1]], [ring[i * 2], y, -ring[i * 2 + 1]], k, t); } }
    };
    // kvadar (dimnjak, strojarnica) poravnat s osi u
    const prism = (px, py, hu, hv, ux, uy, y0, y1, k, t) => {
      const vx = -uy, vy = ux;
      const q = [px - ux * hu - vx * hv, py - uy * hu - vy * hv, px + ux * hu - vx * hv, py + uy * hu - vy * hv, px + ux * hu + vx * hv, py + uy * hu + vy * hv, px - ux * hu + vx * hv, py - uy * hu + vy * hv];
      for (let i = 0; i < 4; i++) {
        const j = (i + 1) % 4;
        const ax = q[i * 2], az = -q[i * 2 + 1], bx = q[j * 2], bz = -q[j * 2 + 1];
        G.tri([ax, y0, az], [bx, y0, bz], [bx, y1, bz], k, t);
        G.tri([ax, y0, az], [bx, y1, bz], [ax, y1, az], k, t);
      }
      G.triUp([q[0], y1, -q[1]], [q[2], y1, -q[3]], [q[4], y1, -q[5]], k, t);
      G.triUp([q[0], y1, -q[1]], [q[4], y1, -q[5]], [q[6], y1, -q[7]], k, t);
    };

    // zgrade: zidovi s prozorima + krov prema vrsti i veličini
    //  · kuće (malen, pravokutan tlocrt, nagib 38–46°): dvostrešni krov sa zabatom, poluskošeni zabat ili
    //    četverostrešni krov jednakog nagiba; dimnjaci izbliza
    //  · gradski blokovi do ~22 m: četverostrešno krovište (pomak tlocrta prema unutra) ili mansarda
    //  · visoke, stambene i poslovne zgrade, industrija: ravni krov s atikom i ponekom strojarnicom
    for (const b of d.buildings) {
      const r = b.r;
      const n = r.length / 2;
      const [cx, cy] = centroid(r);
      const dist = Math.hypot(cx, cy);
      if (dist > R_BUILD) continue;
      const h = b.h[0] / 2;
      const kind = b.h[1];
      const holes = b.holes; // dvorišta (CW: masa zgrade je i ovdje lijevo od smjera, pa zidovi i kosine gledaju u dvorište)
      let perim = 0, best = 0, ux = 1, uy = 0;
      for (const q of holes) for (let i = 0, m = q.length / 2; i < m; i++) { const j = (i + 1) % m; perim += Math.hypot(q[j * 2] - q[i * 2], q[j * 2 + 1] - q[i * 2 + 1]); }
      const area = Math.abs(ringArea(r)) - holes.reduce((s, q) => s + Math.abs(ringArea(q)), 0);
      for (let i = 0; i < n; i++) {
        const j = (i + 1) % n;
        const ex = r[j * 2] - r[i * 2], ey = r[j * 2 + 1] - r[i * 2 + 1];
        const L = Math.hypot(ex, ey);
        perim += L;
        if (L > best) { best = L; ux = ex / L; uy = ey / L; }
      }
      const vx = -uy, vy = ux;
      let u0 = 1e9, u1 = -1e9, v0 = 1e9, v1 = -1e9;
      for (let i = 0; i < n; i++) {
        const px = r[i * 2] - cx, py = r[i * 2 + 1] - cy;
        const pu = px * ux + py * uy, pv = px * vx + py * vy;
        u0 = Math.min(u0, pu); u1 = Math.max(u1, pu); v0 = Math.min(v0, pv); v1 = Math.max(v1, pv);
      }
      const Wd = v1 - v0, Ld = u1 - u0;
      const rect = area / Math.max(1, Wd * Ld) > 0.8;
      const seed = (((rand() * 997) | 0) + 0.5) / 1000; // središte razreda (vidi shader)
      // profil prozora: kuća, stambena zgrada, gradska kuća s izlozima u prizemlju (središta), hala
      let prof;
      if (kind === 3 || kind === 4 || h < 3.2) prof = 0;
      else if (kind === 5) prof = h > 9 ? 2 : 4;
      else if (kind === 2) prof = 2;
      else if (kind === 1) prof = h > 10 ? 2 : 1;
      else prof = centreK(cx, cy) < 1 && h >= 7.5 ? 3 : h > 11 ? 2 : 1;
      if (prof === 3) shops.push(r);
      // pročelja uz rijeku: njihovi prozori se ogledaju u Dravi
      if (prof && dist < 2600 && nearWater(cx, cy, 70)) riverside.push(r);
      const historic = h <= 15 && (kind === 0 || kind === 1 || kind === 3);
      const wk = vary(kind === 5 || kind === 4 ? pick(INDUS) : kind === 2 || h > 15 ? pick(MODERN) : pick(PLASTER), 0.08);
      const pitched = area < 420 && h <= 13 && n <= 10 && rect && !holes.length;
      const hipped = !pitched && h <= 22 && (kind === 0 || kind === 1 || kind === 3 || (area < 420 && h <= 13)) && area < 6000;
      const parapet = !pitched && !hipped && kind !== 4 && area > 120 ? 0.9 : 0;
      // zidovi (lokalno: x = istok, z = −sjever); kod ravnih krovova zid se nastavlja u atiku
      for (const q of [r, ...holes]) walls(q, q.length / 2, 0, h + parapet, wk, prof ? { prof, seed, top: h } : null);
      if (pitched) {
        const tile = rand() < 0.88;
        const rk = vary(tile ? pick(TILE) : pick(SLATE), 0.1), rt = tile ? 1 : 2;
        const rh = Math.min(6.5, Math.max(1.6, (Wd / 2) * Math.tan((38 + rand() * 8) * DEG)));
        const style = rand();
        const ext = style < 0.45 ? 1 : style < 0.7 ? 0.8 : Math.max(0, (Ld - Wd) / Math.max(Ld, 1));
        const mu = (u0 + u1) / 2, mv = (v0 + v1) / 2;
        const rx0 = cx + vx * mv, ry0 = cy + vy * mv;
        const ridge = (x, y) => { const q = mu + ((x - cx) * ux + (y - cy) * uy - mu) * ext; return [rx0 + ux * q, h + rh, -(ry0 + uy * q)]; };
        for (let i = 0; i < n; i++) {
          const j = (i + 1) % n;
          const a = [r[i * 2], h, -r[i * 2 + 1]], bq = [r[j * 2], h, -r[j * 2 + 1]];
          const ra = ridge(r[i * 2], r[i * 2 + 1]), rb = ridge(r[j * 2], r[j * 2 + 1]);
          const ex = r[j * 2] - r[i * 2], ey = r[j * 2 + 1] - r[i * 2 + 1];
          const end = Math.abs((ex * ux + ey * uy) / (Math.hypot(ex, ey) || 1)) < 0.35;
          // zabat: zid se nastavlja do sljemena
          if (end && ext > 0.99) { G.tri(a, bq, rb, wk, 0); continue; }
          G.tri(a, bq, rb, rk, rt);
          if (Math.hypot(ra[0] - rb[0], ra[2] - rb[2]) > 0.05) G.tri(a, rb, ra, rk, rt);
        }
        if (dist < R_WIN && rand() < 0.7 && Wd > 4) {
          const q = mu + (rand() - 0.5) * Ld * 0.5 * Math.max(ext, 0.4);
          const off = (rand() < 0.5 ? -1 : 1) * Math.min(Wd * 0.22, 0.6 + rand() * 1.1);
          const px = rx0 + ux * q + vx * off, py = ry0 + uy * q + vy * off;
          const yb = h + rh * (1 - (Math.abs(off) + 0.4) / (Wd / 2)) - 0.1;
          prism(px, py, 0.32, 0.32, ux, uy, yb, h + rh + 0.5 + rand() * 0.5, rand() < 0.6 ? BRICK : wk, 4);
        }
      } else if (hipped) {
        const sl = historic ? rand() < 0.25 : rand() < 0.6;
        const rk = vary(sl ? pick(SLATE) : pick(TILE), 0.1), rt = sl ? 2 : 1;
        const width = (2 * area) / Math.max(1, perim);
        if (sl && area > 300 && h >= 9 && dist < 1600 && rand() < 0.5) {
          // mansarda: strmi donji dio (~68°), pa blagi gornji i ravan vrh
          const d1 = Math.min(1.1, width * 0.2), r1 = 2.8;
          const in1 = [r, ...holes].map((q) => insetRing(q, d1));
          [r, ...holes].forEach((q, i) => slope(q, in1[i], h, h + r1, rk, rt));
          const d2 = Math.min(Math.max(1.5, Math.sqrt(area) * 0.12), 5, width * 0.4 - d1);
          if (d2 > 0.6) {
            const in2 = in1.map((q) => insetRing(q, d2));
            in1.forEach((q, i) => slope(q, in2[i], h + r1, h + r1 + d2 * 0.4, rk, rt));
            cap(in2[0], h + r1 + d2 * 0.4, rk.map((c) => c * 0.94), rt, in2.slice(1));
          } else cap(in1[0], h + r1, rk, rt, in1.slice(1));
        } else {
          // četverostrešno: kosine do pomaknutog tlocrta (nagib 30–42°), ravni vrh (tipično za gradske blokove)
          const dIn = Math.min(Math.max(2.2, Math.sqrt(area) * 0.2), 7, width * 0.46);
          const rh = dIn * Math.tan((30 + rand() * 12) * DEG);
          const inn = [r, ...holes].map((q) => insetRing(q, dIn));
          [r, ...holes].forEach((q, i) => slope(q, inn[i], h, h + rh, rk, rt));
          cap(inn[0], h + rh, rk.map((c) => c * 0.92), rt, inn.slice(1));
        }
      } else {
        // ravni krov; atika: gornji rub i unutarnja strana zida, ploha krova malo niže
        const rk = vary(pick(FLAT), 0.1);
        const top = h + parapet;
        if (parapet) {
          const pk = wk.map((c) => c * 0.85);
          const inn = [r, ...holes].map((q) => insetRing(q, 0.45));
          [r, ...holes].forEach((q, k) => {
            const p = inn[k];
            for (let i = 0, m = q.length / 2; i < m; i++) {
              const j = (i + 1) % m;
              const a = [q[i * 2], top, -q[i * 2 + 1]], bq = [q[j * 2], top, -q[j * 2 + 1]];
              const ia = [p[i * 2], top, -p[i * 2 + 1]], ib = [p[j * 2], top, -p[j * 2 + 1]];
              G.tri(a, ib, bq, pk, 4);
              G.tri(a, ia, ib, pk, 4);
              const ia0 = [p[i * 2], h, -p[i * 2 + 1]], ib0 = [p[j * 2], h, -p[j * 2 + 1]];
              G.tri(ib0, ia0, ia, wk, 4);
              G.tri(ib0, ia, ib, wk, 4);
            }
          });
          cap(inn[0], h, rk, 3, inn.slice(1));
        } else cap(r, h, rk, 3, holes);
        // strojarnica / izlaz na krov na većim ravnim krovovima
        if (parapet && area > 700 && !holes.length && rand() < 0.7) {
          const sx = 2 + rand() * 3, sy = 2 + rand() * 3, sh = 2.2 + rand() * 1.4;
          const ox = cx + (rand() - 0.5) * Math.sqrt(area) * 0.25, oy = cy + (rand() - 0.5) * Math.sqrt(area) * 0.25;
          prism(ox, oy, sx, sy, ux, uy, h, h + sh, FLAT[1].map((c) => c * 1.6), 4);
        }
      }
      // obrisi krovova (crtež) u blizini središta
      if (dist < R_EDGE) for (const q of [r, ...holes]) for (let i = 0, m = q.length / 2; i < m; i++) { const j = (i + 1) % m; lineSegs.push(q[i * 2], h, -q[i * 2 + 1], q[j * 2], h, -q[j * 2 + 1]); }
    }

    // Drava (vanjski prsten + otoci kao rupe): vodostaj ispod razine grada, obala kao kosina (nasip/kamena obala)
    const WL = -2.4, BANK = 9;
    const wpos = [];
    for (const o of outers) {
      const holes = inners.filter((q) => pip(q.r[0], q.r[1], o.r)).map((q) => toV2(q.r));
      const contour = toV2(o.r);
      const all = contour.concat(...holes);
      // trokuti uvijek okrenuti prema gore (redoslijed iz triangulacije ne ovisi o smjeru prstena)
      for (const [a, b, c] of THREE.ShapeUtils.triangulateShape(contour, holes)) {
        const up = (all[b].x - all[a].x) * (all[c].y - all[a].y) - (all[c].x - all[a].x) * (all[b].y - all[a].y) > 0;
        const [p, q] = up ? [b, c] : [c, b];
        wpos.push(all[a].x, WL, -all[a].y, all[p].x, WL, -all[p].y, all[q].x, WL, -all[q].y);
      }
    }
    const wg = track(new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(wpos, 3)));
    const river = new THREE.Mesh(wg, riverMat);
    river.renderOrder = 0;
    group.add(river);
    const BK = [0.075, 0.085, 0.07];
    const clipped = (x, y) => Math.abs(x) > 3390 || Math.abs(y) > 2590;
    for (const w of d.water) {
      const ring = w.r, off = insetRing(ring, -BANK), m = ring.length / 2;
      for (let i = 0; i < m; i++) {
        const j = (i + 1) % m;
        if (clipped(ring[i * 2], ring[i * 2 + 1]) && clipped(ring[j * 2], ring[j * 2 + 1])) continue;
        const a = [ring[i * 2], WL, -ring[i * 2 + 1]], b = [ring[j * 2], WL, -ring[j * 2 + 1]];
        const oa = [off[i * 2], 0.15, -off[i * 2 + 1]], ob = [off[j * 2], 0.15, -off[j * 2 + 1]];
        const k = vary(BK, 0.15);
        G.triUp(a, b, ob, k, 5);
        G.triUp(a, ob, oa, k, 5);
      }
    }
    // mostovi: samo ondje gdje stvarna cesta ili pješačka staza prelazi rijeku (OSM), s blagim lukom
    const decks = [];
    for (const rd of [...d.roads].sort((p, q) => p.h[0] - q.h[0])) {
      const c = rd.h[0];
      if (c > 2 && c !== 5) continue;
      const r = rd.r;
      let wet = 0, tot = 0;
      for (let i = 0; i < r.length / 2 - 1; i++) {
        const L = Math.hypot(r[i * 2 + 2] - r[i * 2], r[i * 2 + 3] - r[i * 2 + 1]);
        tot += L;
        if (inWater((r[i * 2] + r[i * 2 + 2]) / 2, (r[i * 2 + 1] + r[i * 2 + 3]) / 2)) wet += L;
      }
      if (wet < 60) continue;
      const mx = (r[0] + r[r.length - 2]) / 2, my = (r[1] + r[r.length - 1]) / 2;
      if (decks.some((q) => Math.hypot(q.mx - mx, q.my - my) < 30)) continue; // pločnici uz cestovni most
      decks.push({ r, c, tot, mx, my });
    }
    const DK = [0.2, 0.2, 0.21];
    for (const bd of decks) {
      const hw = bd.c <= 2 ? 8 : 2.4, arch = bd.c <= 2 ? 2.2 : 3, th = 1.6, r = bd.r;
      const pts = [];
      let acc = 0;
      for (let i = 0; i < r.length / 2 - 1; i++) {
        const ax = r[i * 2], ay = r[i * 2 + 1], bx = r[i * 2 + 2], by = r[i * 2 + 3];
        const L = Math.hypot(bx - ax, by - ay), steps = Math.max(1, Math.ceil(L / 8));
        for (let s2 = 0; s2 < steps; s2++) { const f = s2 / steps; pts.push([ax + (bx - ax) * f, ay + (by - ay) * f, (acc + L * f) / bd.tot]); }
        acc += L;
      }
      pts.push([r[r.length - 2], r[r.length - 1], 1]);
      for (let i = 0; i < pts.length - 1; i++) {
        const [px, py, pt] = pts[i], [qx, qy, qt] = pts[i + 1];
        const L = Math.hypot(qx - px, qy - py) || 1, nx = -(qy - py) / L, ny = (qx - px) / L;
        const yp = 0.6 + arch * Math.sin(Math.PI * pt), yq = 0.6 + arch * Math.sin(Math.PI * qt);
        const pl = [px + nx * hw, yp, -(py + ny * hw)], pr = [px - nx * hw, yp, -(py - ny * hw)];
        const ql = [qx + nx * hw, yq, -(qy + ny * hw)], qr = [qx - nx * hw, yq, -(qy - ny * hw)];
        G.triUp(pl, pr, qr, DK, 6);
        G.triUp(pl, qr, ql, DK, 6);
        // bočne plohe (obje strane vidljive)
        for (const [s0, s1] of [[pl, ql], [qr, pr]]) {
          const d0 = [s0[0], s0[1] - th, s0[2]], d1 = [s1[0], s1[1] - th, s1[2]];
          G.tri(s0, d0, d1, DK, 6); G.tri(s0, d1, s1, DK, 6);
          G.tri(s0, d1, d0, DK, 6); G.tri(s0, s1, d1, DK, 6);
        }
      }
    }

    buildingsMesh = new THREE.Mesh(track(G.geometry()), cityMat);
    group.add(buildingsMesh);
    const eg = track(new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(lineSegs, 3)));
    group.add(new THREE.LineSegments(eg, edgeMat));
    // točka na Dravi najbliža središtu (za oznaku)
    let bestD = 1e9;
    for (const o of outers) for (let i = 0; i < o.r.length; i += 2) { const dd = Math.hypot(o.r[i] - 60, o.r[i + 1] - 420); if (dd < bestD) { bestD = dd; anchors.drava.set(o.r[i], 4, -o.r[i + 1] - 40); } }

    // trg, parkovi, travnjaci
    const apos = [], acol = [];
    const AC = { 0: [0.085, 0.09, 0.12], 1: [0.03, 0.075, 0.06], 2: [0.035, 0.068, 0.058], 3: [0.13, 0.13, 0.15] };
    for (const a of d.areas) {
      const [cx, cy] = centroid(a.r);
      if (Math.hypot(cx, cy) > R_BUILD) continue;
      const c = AC[a.h[0]] || AC[2];
      const y = a.h[0] === 3 ? 0.25 : 0.12;
      const contour = toV2(a.r);
      for (const [i0, i1, i2] of THREE.ShapeUtils.triangulateShape(contour, [])) {
        const up = (contour[i1].x - contour[i0].x) * (contour[i2].y - contour[i0].y) - (contour[i2].x - contour[i0].x) * (contour[i1].y - contour[i0].y) > 0;
        const [p, q] = up ? [i1, i2] : [i2, i1];
        apos.push(contour[i0].x, y, -contour[i0].y, contour[p].x, y, -contour[p].y, contour[q].x, y, -contour[q].y);
        acol.push(...c, ...c, ...c);
      }
      if (a.h[0] === 3) anchors.trg.set(cx, 4, -cy);
    }
    const ag = track(new THREE.BufferGeometry());
    ag.setAttribute('position', new THREE.Float32BufferAttribute(apos, 3));
    ag.setAttribute('aCol', new THREE.Float32BufferAttribute(acol, 3));
    group.add(new THREE.Mesh(ag, areaMat));

    // ceste i staze uz samu obalu (šetnica uz Dravu): svjetla se ogledaju u rijeci
    for (const rd of d.roads) {
      const r = rd.r, m = (r.length / 4) | 0;
      rd.w = rd.h[0] >= 2 && Math.hypot(r[m * 2], r[m * 2 + 1]) < 3000 && (nearWater(r[0], r[1]) || nearWater(r[m * 2], r[m * 2 + 1]) || nearWater(r[r.length - 2], r[r.length - 1]));
    }
    // ulična svjetla duž stvarnih ulica (razmak prema rangu ceste); glavne ulice LED toplo bijelo, sporedne natrij
    const SP = lite ? [30, 34, 42, 60, 26, 0] : [20, 22, 27, 40, 17, 34];
    const TINT = [0.9, 0.8, 0.15, 0.1, 0.65, 0.5];
    const KC = [1, 0.9, 0.7, 0.45, 0.95, 0.4];
    const lamp = [], lampSize = [], lampK = [], lampT = [];
    for (const rd of d.roads) {
      const c = rd.h[0];
      const sp = SP[c];
      if (!sp) continue;
      const r = rd.r;
      if (c >= 4 && !rd.w && Math.hypot(r[0], r[1]) > (lite ? 450 : 800)) continue;
      if (rd.w && Math.hypot(r[0], r[1]) > (lite ? 1400 : 2600)) continue;
      let acc = rand() * sp;
      for (let i = 0; i < r.length / 2 - 1; i++) {
        const ax = r[i * 2], ay = r[i * 2 + 1], bx = r[i * 2 + 2], by = r[i * 2 + 3];
        const L = Math.hypot(bx - ax, by - ay);
        while (acc < L) {
          const t = acc / L, x = ax + (bx - ax) * t, y = ay + (by - ay) * t;
          lamp.push(x, 6, -y);
          lampSize.push(c <= 1 ? 1.25 : c <= 2 ? 0.95 : 0.75);
          lampK.push(KC[c] * zone(x, y) * (rd.w ? 2.4 : 1));
          lampT.push(Math.min(1, Math.max(0, TINT[c] + (rand() - 0.5) * 0.25)));
          acc += sp;
        }
        acc -= L;
      }
    }
    // svjetlo lampe na zaslonu je veće od same lampe (oreol, kao na fotografiji noćnog grada)
    lampPts = glowPoints({ count: lamp.length / 3, color: '#ff9440', core: '#ffd6a6', size: 1.7, tint: { color: '#ffd09a', core: '#fff4e6' } });
    lampPts.pos.set(lamp);
    lampPts.tint.set(lampT);
    // svaka lampa ima svoj prag paljenja: središte grada prvo, zatim prema rubu, uz slučajni raspored
    for (let i = 0; i < lampSize.length; i++) {
      lampPts.size[i] = lampSize[i];
      lampPts.alpha[i] = (0.5 + rand() * 0.4) * Math.min(1.15, 0.55 + 0.5 * lampK[i]);
      lampPts.wake[i] = 0.1 + rand() * 0.6 + 0.28 * Math.min(1, Math.hypot(lamp[i * 3], lamp[i * 3 + 2]) / 2600);
    }
    lampPts.uniforms.uMin.value = 1.3;
    lampPts.uniforms.uFall.value = 0.25; // točkasta svjetla: iz visine prigušena, ali uvijek čitljiva kao mreža ulica
    lampPts.uniforms.uMax.value = 6;
    lampPts.points.renderOrder = 4;
    lampPts.material.depthWrite = false;
    group.add(lampPts.points);
    track(lampPts.geometry); track(lampPts.material);

    // karta svjetla: ulice, lokve svjetiljki, trgovi i izlozi → tlo, pročelja i odsjaji u Dravi
    const squares = d.areas.filter((a) => a.h[0] === 0 || a.h[0] === 3).map((a) => a.r);
    // crta se izvan glavne niti; do tada tlo i pročelja koriste praznu kartu (grad je iza papira ili daleko)
    buildLightMap({ roads: d.roads.map((rd) => ({ c: rd.h[0], r: rd.r, w: rd.w })), lamps: lamp, lampK, squares, shops, riverside, zone, lite })
      .then((lm) => {
        if (disposed) { lm.dispose(); return; }
        const old = C.uLM.value;
        C.uLM.value = track(lm);
        old.dispose();
      })
      .catch((err) => console.warn('[ZAEC] karta svjetla nije nacrtana', err));

    // Hotel Osijek: orijentacija prema najduljem bridu tlocrta podija
    const hm = d.marks.find((m) => m.h[0] === 2);
    if (hm) {
      const r = hm.r;
      const [hx, hy] = centroid(r);
      let best = 0, ang = 0;
      for (let i = 0; i < r.length / 2; i++) {
        const j = (i + 1) % (r.length / 2);
        const ex = r[j * 2] - r[i * 2], ey = r[j * 2 + 1] - r[i * 2 + 1];
        const L = Math.hypot(ex, ey);
        if (L > best) { best = L; ang = Math.atan2(ey, ex); }
      }
      hotel.position.set(hx, 0, -hy);
      hotel.rotation.y = ang;
      const slab = (w, hgt, dep, x, z) => { const m = new THREE.Mesh(track(new THREE.BoxGeometry(w, hgt, dep).translate(x, hgt / 2, z)), hotelMat); hotel.add(m); return m; };
      slab(46, 7.5, 34, 0, 0); // podij s restoranom uz rijeku
      slab(30, 62, 15, -5, -4); // viša ploča
      slab(24, 56, 14, 8, 8); // niža ploča, pomaknuta
      slab(6, 6, 6, -10, -4).position.y = 62; // strojarnica i antene na krovu
      anchors.hotel.set(hx, 70, -hy);
    }
    loaded = true;
    onLoaded?.();
  }
  load().catch((err) => console.warn('[ZAEC] podaci grada nisu učitani', err));

  return {
    group,
    anchors,
    spire,
    flood,
    floodLocal,
    get cathedral() { return cath; },
    isLoaded: () => loaded,
    /** s: { alpha, rise, dim, lines, cath, glow, cathSolid, lamps, streets, wake, focus, scan, shop, time, pr, reduce, camera } */
    update(s) {
      const streets = s.streets ?? s.lamps;
      group.visible = s.alpha > 0.002 || s.lamps > 0.002 || streets > 0.002;
      flood.intensity = 0;
      if (!group.visible) return;
      U.uRise.value = s.rise;
      U.uDim.value = s.dim;
      // s umanjenim pokretom grad miruje (prozori i valići ne mijenjaju se)
      C.uTime.value = s.reduce ? 0 : s.time;
      C.uLamp.value = s.lamps;
      if (s.camera) {
        // kamera u lokalnim metrima; magla počinje malo prije točke u koju kamera gleda (dubina prostora)
        camL.copy(s.camera.position);
        group.worldToLocal(camL);
        C.uCamL.value.copy(camL);
        s.camera.getWorldDirection(dirL);
        dirL.divide(group.scale).normalize();
        const t = dirL.y < -0.03 ? camL.y / -dirL.y : Math.abs(camL.y) * 6 + 80;
        C.uFog.value.set(t * 0.85, 1 / (t * 2.6));
      }
      const solid = s.alpha;
      cityMat.uniforms.uAlpha.value = solid;
      cityMat.uniforms.uShop.value = s.shop ?? 1;
      if (buildingsMesh) buildingsMesh.visible = solid > 0.01;
      // crtež bridova je zadnji sloj detalja: tek kad je kamera blizu (inače hladna mreža preuzima toplu noć)
      edgeU.uLines.value = solid * (0.25 + 0.55 * s.lines) * (1 - s.dim * 0.75) * (s.detail ?? 1);
      groundMat.uniforms.uOpacity.value = solid * (1 - s.dim * 0.75);
      groundMat.uniforms.uGlow.value = streets * (1 - s.dim * 0.75);
      ground.visible = solid > 0.002 || streets > 0.002;
      riverMat.uniforms.uOpacity.value = Math.max(solid, s.lamps * 0.6) * (1 - s.dim * 0.6);
      areaMat.uniforms.uOpacity.value = solid * (1 - s.dim * 0.6);
      hotel.visible = solid > 0.01;
      hotelU.uAlpha.value = solid;
      // konkatedrala: isticanje, vitraji i skener (crta u metrima: od vrha šiljka do tla)
      const scanOn = s.scan > 0.001 ? 1 : 0;
      cathU.uLift.value = Math.max(0.001, s.cath);
      cathU.uGlow.value = 0.6 + s.glow;
      cathU.uFocus.value = s.focus;
      cathU.uWin.value = 0.25 + 0.75 * s.focus;
      cathU.uScanOn.value = scanOn;
      cathU.uScan.value = (spire.y + 2) * (1 - s.scan) - 1.5;
      cathU.uAlpha.value = solid * s.cathSolid;
      if (cath) cath.visible = s.cathSolid * solid > 0.01;
      // sjaj prozora raste s isticanjem; iz daljine je tek naslutljiv
      haloU.uI.value = solid * s.cathSolid * (0.12 + 0.88 * s.focus) * 0.85;
      if (halo) halo.visible = haloU.uI.value > 0.004;
      flood.intensity = 14 * s.glow * solid * s.cathSolid * (1 - 0.6 * s.scan) * (0.2 + 0.8 * s.focus);
      // Hotel Osijek je sporedno sidro: kad konkatedrala postane motiv, povlači se u pozadinu
      hotelU.uAlpha.value = solid * (1 - 0.45 * s.focus);
      lampPts.uniforms.uPR.value = s.pr;
      lampPts.uniforms.uOpacity.value = s.lamps * (1 - s.dim * 0.7);
      lampPts.uniforms.uWake.value = s.wake;
    },
    dispose() {
      disposed = true;
      clearTimeout(fallbackLines?.timer);
      disposables.forEach((o) => o.dispose?.());
      cath?.geometry.dispose(); cathMat?.dispose(); cathLines?.dispose();
    },
  };
}
