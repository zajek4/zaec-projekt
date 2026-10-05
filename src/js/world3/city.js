// Scena 03 — stvarni Osijek (OpenStreetMap) u metrima: x = istok, y = gore, z = −sjever; ishodište = konkatedrala.
// Hijerarhija točnosti: konkatedrala (Higgsfield + Blender model) → Hotel Osijek (tlocrt + fotografije) →
// stvarni tlocrti i visine zgrada (OSM) → ulična svjetla duž stvarnih ulica. Engine skalira grupu s kartom,
// pa svjetla koja se vide iz visine leže točno na ulicama kroz koje kamera kasnije prolazi.
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import { glowPoints, seeded } from './lib.js';
import { buildCathedral } from './cathedral.js';

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
  return {
    buildings: read(H[1], 2),
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

/* ───────────────────────── materijali ───────────────────────── */
function riseMaterial(params, U) {
  const m = new THREE.MeshStandardMaterial(params);
  m.onBeforeCompile = (sh) => {
    sh.uniforms.uRise = U.uRise;
    sh.uniforms.uDim = U.uDim;
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nuniform float uRise;')
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        float dR = length(position.xz);
        transformed.y *= clamp((uRise * ${RISE_R.toFixed(1)} - dR) / 260.0, 0.0, 1.0);`);
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform float uDim;')
      .replace('#include <dithering_fragment>', '#include <dithering_fragment>\ngl_FragColor.rgb *= (1.0 - uDim * 0.8);');
  };
  m.customProgramCacheKey = () => 'zaec-city-rise';
  return m;
}

export function createCity({ lite, dataUrl, modelUrl, onLines, onModel, onLoaded, prepare }) {
  const rand = seeded(1945);
  const group = new THREE.Group();
  group.name = 'osijek';
  const U = { uRise: { value: 0 }, uDim: { value: 0 } };
  const R_BUILD = lite ? 1400 : 2600;
  const R_WIN = lite ? 380 : 650;
  const R_EDGE = lite ? 600 : 1100;
  const disposables = [];
  const track = (o) => { disposables.push(o); return o; };
  let loaded = false;
  const anchors = { cath: new THREE.Vector3(30, 99, -4), hotel: new THREE.Vector3(329, 66, -154), trg: new THREE.Vector3(105, 4, -78), drava: new THREE.Vector3(80, 4, -470) };

  /* ── tlo: tamno, s mrežom od 50 m koja se gubi prema rubu ── */
  const groundU = { uOpacity: { value: 1 } };
  const ground = new THREE.Mesh(
    track(new THREE.CircleGeometry(5200, 64).rotateX(-Math.PI / 2)),
    track(new THREE.ShaderMaterial({
      uniforms: groundU,
      transparent: true,
      depthWrite: false,
      vertexShader: /* glsl */ `varying vec2 vP; void main(){ vP = position.xz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: /* glsl */ `uniform float uOpacity; varying vec2 vP;
        float grid(vec2 p, float s){ vec2 g = abs(fract(p / s - 0.5) - 0.5) / fwidth(p / s); return 1.0 - min(min(g.x, g.y), 1.0); }
        void main(){ float d = length(vP); float a = 1.0 - smoothstep(2200.0, 5000.0, d);
          vec3 c = vec3(0.028, 0.04, 0.075) + grid(vP, 50.0) * 0.018 + grid(vP, 250.0) * 0.02;
          gl_FragColor = vec4(c, a * uOpacity); }`,
    })),
  );
  ground.position.y = -0.4;
  ground.renderOrder = -1;
  group.add(ground);

  /* ── objekti koji se pune nakon učitavanja ── */
  // stalno prozirno: prebacivanje transparent ↔ opaque mijenja shader program (prevođenje usred scrolla)
  const cityMat = track(riseMaterial({ vertexColors: true, flatShading: true, roughness: 0.86, metalness: 0.04, transparent: true }, U));
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
  const riverU = { uTime: { value: 0 }, uOpacity: { value: 1 } };
  const riverMat = track(new THREE.ShaderMaterial({
    uniforms: riverU,
    transparent: true,
    depthWrite: false,
    vertexShader: /* glsl */ `varying vec2 vP; void main(){ vP = position.xz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
    fragmentShader: /* glsl */ `uniform float uTime; uniform float uOpacity; varying vec2 vP;
      void main(){
        float s = sin(vP.x * 0.045 - uTime * 0.9 + sin(vP.y * 0.08) * 1.5) * sin(vP.x * 0.013 + uTime * 0.35);
        float glint = smoothstep(0.8, 1.0, s) * 0.45;
        float fade = 1.0 - smoothstep(2600.0, 3400.0, length(vP));
        gl_FragColor = vec4(vec3(0.05, 0.11, 0.26) + glint * vec3(0.45, 0.6, 1.0), 0.97 * fade * uOpacity); }`,
  }));
  const areaMat = track(new THREE.MeshBasicMaterial({ vertexColors: true, transparent: true, depthWrite: false }));

  const lamps = glowPoints({ count: 1, color: '#ffae55', core: '#fff1d6', size: 0.9 });
  const wins = glowPoints({ count: 1, color: '#ffb35a', core: '#ffe2b0', size: 0.5 });
  lamps.points.renderOrder = 4;
  wins.points.renderOrder = 4;
  lamps.uniforms.uMin.value = 1.4;
  lamps.uniforms.uMax.value = 6;
  wins.uniforms.uMax.value = 5;
  let lampPts = lamps, winPts = wins;

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
          // reflektori odozdo (topli) i hladna noć prema vrhu
          // iz daljine zgrada dijeli noćnu paletu grada; reflektori i toplina rastu tek kad postane motiv (uFocus)
          float flood = 1.0 - smoothstep(4.0, 78.0, vH);
          float lit = clamp(flood * (0.5 + 0.5 * uGlow) * (0.3 + 0.7 * uFocus), 0.0, 1.0);
          vec3 night = mix(vec3(0.36, 0.40, 0.58), vec3(1.08, 0.88, 0.72), lit);
          gl_FragColor.rgb *= mix(vec3(1.0), night, 1.0 - glass);
          gl_FragColor.rgb += vec3(1.0, 0.5, 0.25) * uGlow * 0.05 * flood * (1.0 - glass);
          // vitraji: unutrašnjost osvijetljena, svaki prozor svoje boje
          float hw = hh(floor(vLoc * vec3(0.45, 0.2, 0.45)));
          vec3 sg = mix(vec3(1.0, 0.6, 0.26), vec3(0.95, 0.32, 0.22), step(0.55, hw));
          sg = mix(sg, vec3(0.38, 0.48, 1.0), step(0.82, hw));
          gl_FragColor.rgb = mix(gl_FragColor.rgb, sg * (0.18 + 1.05 * uWin), glass);
          // vrh tornja hvata svjetlo kad zgrada postane glavni motiv
          gl_FragColor.rgb += vec3(1.0, 0.8, 0.58) * smoothstep(58.0, 90.0, vH) * uFocus * 0.14 * (1.0 - glass);
          // skener: iznad crte zgrada postaje nacrt (prozirna), na crti tanka svjetla traka
          float above = smoothstep(uScan - 0.8, uScan + 0.8, vH) * uScanOn;
          float band = exp(-pow((vH - uScan) / 0.9, 2.0)) * uScanOn;
          gl_FragColor.rgb += vec3(0.45, 0.62, 1.0) * band * 1.2;
          gl_FragColor.a *= uAlpha * mix(1.0, 0.14, above);`);
    };
    m.customProgramCacheKey = () => 'zaec-cath-v3';
    return m;
  }
  let cath = null, cathMat = null, cathLines = null;
  let cathSeq = 0;
  const spire = new THREE.Vector3(33.8, 90, 1);
  function setCathedral(geo, isFallback) {
    const seq = ++cathSeq;
    if (!geo.attributes.aKind) geo.setAttribute('aKind', new THREE.BufferAttribute(new Float32Array(geo.attributes.position.count), 1));
    const mat = cathMaterial();
    const mesh = new THREE.Mesh(geo, mat);
    mesh.renderOrder = 1;
    // rubovi za crtež i morph (iz stvarne geometrije modela)
    const lines = new THREE.EdgesGeometry(geo, isFallback ? 22 : 30);
    const swap = () => {
      // zakašnjeli rezervni model nikad ne zamjenjuje pravi
      if (seq !== cathSeq) { geo.dispose(); mat.dispose(); lines.dispose(); return; }
      if (cath) { group.remove(cath); cath.geometry.dispose(); cathMat.dispose(); cathLines?.dispose(); }
      // vrh šiljka: najviša točka modela (izvor svjetlosnog snopa)
      const p = geo.attributes.position;
      let top = 0;
      for (let i = 1; i < p.count; i++) if (p.getY(i) > p.getY(top)) top = i;
      spire.set(p.getX(top), p.getY(top), p.getZ(top));
      anchors.cath.set(spire.x - 4, spire.y * 1.06, spire.z);
      cath = mesh; cathMat = mat; cathLines = lines;
      group.add(mesh);
      onLines?.(lines, isFallback);
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
    setCathedral(g, true);
  }
  if (modelUrl) {
    const loader = new GLTFLoader();
    loader.setMeshoptDecoder(MeshoptDecoder);
    loader.load(modelUrl, (gltf) => {
      let mesh = null;
      gltf.scene.traverse((o) => { if (o.isMesh && !mesh) mesh = o; });
      if (!mesh) return;
      mesh.updateWorldMatrix(true, false);
      // gltfpack kvantizira atribute (KHR_mesh_quantization): prije primjene matrice čvora pretvori u float.
      // COLOR_0.a nosi vrstu materijala (0 cigla, 1 kamen, 2 škriljevac, 3 vitraj, 4 metal).
      const src = mesh.geometry;
      const geo = new THREE.BufferGeometry();
      const P = src.getAttribute('position');
      const pos = new Float32Array(P.count * 3);
      for (let i = 0; i < P.count; i++) { pos[i * 3] = P.getX(i); pos[i * 3 + 1] = P.getY(i); pos[i * 3 + 2] = P.getZ(i); }
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      const C = src.getAttribute('color');
      if (C) {
        const col = new Float32Array(C.count * 3), kind = new Float32Array(C.count);
        for (let i = 0; i < C.count; i++) {
          col[i * 3] = C.getX(i); col[i * 3 + 1] = C.getY(i); col[i * 3 + 2] = C.getZ(i);
          kind[i] = C.itemSize > 3 ? Math.round(C.getW(i) * 4) : 0;
        }
        geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
        geo.setAttribute('aKind', new THREE.BufferAttribute(kind, 1));
      }
      if (src.index) geo.setIndex(src.index.clone());
      geo.applyMatrix4(mesh.matrixWorld);
      mesh.material.dispose?.();
      setCathedral(geo, false);
    }, undefined, (err) => console.warn('[ZAEC] model konkatedrale nije učitan, koristi se rezervni', err));
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
        float frame = step(0.08, fc.x) * step(0.14, fc.y);
        float lit = step(0.6, h21(cell + floor(vL.y / 30.0))) * frame;
        vec3 v = normalize(cameraPosition - vW);
        float fres = pow(1.0 - abs(dot(n, v)), 2.0);
        vec3 glass = mix(vec3(0.03, 0.08, 0.30), vec3(0.18, 0.36, 0.95), fres * 0.7 + 0.15);
        vec3 c = glass * (0.55 + 0.45 * frame) + lit * vec3(0.95, 0.78, 0.5) * 0.55;
        c = mix(c, vec3(0.05, 0.06, 0.09), roof);
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

    // zgrade: zidovi + krovovi (sljeme za manje kuće, ravni krov s vijencem za blokove)
    const pos = [], col = [];
    const winList = [];
    const wallCols = [[0.11, 0.13, 0.19], [0.13, 0.145, 0.205], [0.095, 0.11, 0.165], [0.15, 0.15, 0.19]];
    const tile = [[0.42, 0.17, 0.12], [0.36, 0.15, 0.11], [0.47, 0.2, 0.14]];
    const grey = [[0.17, 0.18, 0.21], [0.14, 0.15, 0.18]];
    const tri = (a, b, c, k) => { pos.push(a[0], a[1], a[2], b[0], b[1], b[2], c[0], c[1], c[2]); col.push(...k, ...k, ...k); };
    for (const b of d.buildings) {
      const r = b.r;
      const n = r.length / 2;
      const [cx, cy] = centroid(r);
      const dist = Math.hypot(cx, cy);
      if (dist > R_BUILD) continue;
      const h = b.h[0] / 2;
      const kind = b.h[1];
      const area = Math.abs(ringArea(r));
      const wk = wallCols[(rand() * wallCols.length) | 0].map((c) => c * (0.9 + rand() * 0.2));
      const historic = h <= 15 && (kind === 0 || kind === 1 || kind === 3);
      const rk = (historic ? tile[(rand() * tile.length) | 0] : grey[(rand() * grey.length) | 0]).map((c) => c * (0.85 + rand() * 0.3));
      // zidovi (lokalno: x = istok, z = −sjever)
      for (let i = 0; i < n; i++) {
        const j = (i + 1) % n;
        const ax = r[i * 2], az = -r[i * 2 + 1], bx = r[j * 2], bz = -r[j * 2 + 1];
        tri([ax, 0, az], [bx, 0, bz], [bx, h, bz], wk);
        tri([ax, 0, az], [bx, h, bz], [ax, h, az], wk);
      }
      // krov
      const pitched = area < 420 && h <= 13 && n <= 10;
      if (pitched) {
        // smjer najduljeg brida → sljeme
        let best = 0, ux = 1, uy = 0;
        for (let i = 0; i < n; i++) {
          const j = (i + 1) % n;
          const ex = r[j * 2] - r[i * 2], ey = r[j * 2 + 1] - r[i * 2 + 1];
          const L = Math.hypot(ex, ey);
          if (L > best) { best = L; ux = ex / L; uy = ey / L; }
        }
        const rh = Math.min(5.5, 1.6 + Math.sqrt(area) * 0.22);
        const ridge = (x, y) => { const px = x - cx, py = y - cy; const pu = px * ux + py * uy; return [cx + ux * pu * 0.62, h + rh, -(cy + uy * pu * 0.62)]; };
        for (let i = 0; i < n; i++) {
          const j = (i + 1) % n;
          const a = [r[i * 2], h, -r[i * 2 + 1]], bq = [r[j * 2], h, -r[j * 2 + 1]];
          const ra = ridge(r[i * 2], r[i * 2 + 1]), rb = ridge(r[j * 2], r[j * 2 + 1]);
          tri(a, bq, rb, rk);
          tri(a, rb, ra, rk);
        }
      } else {
        const contour = toV2(r);
        const tris = THREE.ShapeUtils.triangulateShape(contour, []);
        for (const [i0, i1, i2] of tris) tri([r[i0 * 2], h, -r[i0 * 2 + 1]], [r[i2 * 2], h, -r[i2 * 2 + 1]], [r[i1 * 2], h, -r[i1 * 2 + 1]], rk);
      }
      // obrisi krovova (crtež) i prozori u blizini središta
      if (dist < R_EDGE) for (let i = 0; i < n; i++) { const j = (i + 1) % n; lineSegs.push(r[i * 2], h, -r[i * 2 + 1], r[j * 2], h, -r[j * 2 + 1]); }
      if (dist < R_WIN && h > 4) {
        const per = Math.min(16, Math.max(1, Math.round((h * Math.sqrt(area)) / 70)));
        for (let k = 0; k < per; k++) {
          const i = (rand() * n) | 0, j = (i + 1) % n;
          const t = rand();
          const x = r[i * 2] + (r[j * 2] - r[i * 2]) * t, y = r[i * 2 + 1] + (r[j * 2 + 1] - r[i * 2 + 1]) * t;
          const ex = r[j * 2] - r[i * 2], ey = r[j * 2 + 1] - r[i * 2 + 1], L = Math.hypot(ex, ey) || 1;
          winList.push(x + (ey / L) * 0.4, 2 + rand() * Math.max(1, h - 3.5), -(y - (ex / L) * 0.4));
        }
      }
    }
    const bg = new THREE.BufferGeometry();
    bg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    bg.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
    bg.computeBoundingSphere();
    buildingsMesh = new THREE.Mesh(track(bg), cityMat);
    group.add(buildingsMesh);
    const eg = track(new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(lineSegs, 3)));
    group.add(new THREE.LineSegments(eg, edgeMat));

    // Drava (vanjski prsten + otoci kao rupe)
    const outers = d.water.filter((w) => w.h[0] === 0), inners = d.water.filter((w) => w.h[0] === 1);
    const wpos = [];
    for (const o of outers) {
      const holes = inners.filter((h) => pip(h.r[0], h.r[1], o.r)).map((h) => toV2(h.r));
      const contour = toV2(o.r);
      const all = contour.concat(...holes);
      for (const [a, b, c] of THREE.ShapeUtils.triangulateShape(contour, holes)) wpos.push(all[a].x, 0.3, -all[a].y, all[c].x, 0.3, -all[c].y, all[b].x, 0.3, -all[b].y);
    }
    const wg = track(new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(wpos, 3)));
    const river = new THREE.Mesh(wg, riverMat);
    river.renderOrder = 0;
    group.add(river);
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
        apos.push(contour[i0].x, y, -contour[i0].y, contour[i2].x, y, -contour[i2].y, contour[i1].x, y, -contour[i1].y);
        acol.push(...c, ...c, ...c);
      }
      if (a.h[0] === 3) anchors.trg.set(cx, 4, -cy);
    }
    const ag = track(new THREE.BufferGeometry());
    ag.setAttribute('position', new THREE.Float32BufferAttribute(apos, 3));
    ag.setAttribute('color', new THREE.Float32BufferAttribute(acol, 3));
    group.add(new THREE.Mesh(ag, areaMat));

    // ulična svjetla duž stvarnih ulica (razmak prema rangu ceste)
    const SP = lite ? [30, 34, 42, 60, 26, 0] : [20, 22, 27, 40, 17, 34];
    const lamp = [];
    const lampSize = [];
    for (const rd of d.roads) {
      const c = rd.h[0];
      const sp = SP[c];
      if (!sp) continue;
      const r = rd.r;
      if (c >= 4 && Math.hypot(r[0], r[1]) > (lite ? 450 : 800)) continue;
      let acc = rand() * sp;
      for (let i = 0; i < r.length / 2 - 1; i++) {
        const ax = r[i * 2], ay = r[i * 2 + 1], bx = r[i * 2 + 2], by = r[i * 2 + 3];
        const L = Math.hypot(bx - ax, by - ay);
        while (acc < L) {
          const t = acc / L;
          lamp.push(ax + (bx - ax) * t, 6, -(ay + (by - ay) * t));
          lampSize.push(c <= 1 ? 1.25 : c <= 2 ? 0.95 : 0.75);
          acc += sp;
        }
        acc -= L;
      }
    }
    // svjetlo lampe na zaslonu je veće od same lampe (oreol, kao na fotografiji noćnog grada)
    lampPts = glowPoints({ count: lamp.length / 3, color: '#ffae55', core: '#fff1d6', size: 1.7 });
    lampPts.pos.set(lamp);
    // svaka lampa ima svoj prag paljenja: središte grada prvo, zatim prema rubu, uz slučajni raspored
    for (let i = 0; i < lampSize.length; i++) {
      lampPts.size[i] = lampSize[i];
      lampPts.alpha[i] = 0.55 + rand() * 0.45;
      lampPts.wake[i] = 0.1 + rand() * 0.6 + 0.28 * Math.min(1, Math.hypot(lamp[i * 3], lamp[i * 3 + 2]) / 2600);
    }
    lampPts.uniforms.uMin.value = 1.3;
    lampPts.uniforms.uFall.value = 0.25; // točkasta svjetla: iz visine prigušena, ali uvijek čitljiva kao mreža ulica
    lampPts.uniforms.uMax.value = 6;
    lampPts.points.renderOrder = 4;
    lampPts.material.depthWrite = false;
    group.add(lampPts.points);
    track(lampPts.geometry); track(lampPts.material);

    winPts = glowPoints({ count: winList.length / 3, color: '#ffb35a', core: '#ffe2b0', size: 0.5 });
    winPts.pos.set(winList);
    for (let i = 0; i < winPts.alpha.length; i++) { winPts.alpha[i] = rand() < 0.62 ? 0.25 + rand() * 0.75 : 0; winPts.wake[i] = rand() * 0.5; }
    winPts.uniforms.uMax.value = 5;
    winPts.uniforms.uMin.value = 0.8;
    winPts.uniforms.uFall.value = 1;
    winPts.uniforms.uWake.value = 2; // svi upaljeni; aWake služi kao sjeme sporog treptanja (uFlick)
    winPts.points.renderOrder = 4;
    group.add(winPts.points);
    track(winPts.geometry); track(winPts.material);

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
    /** s: { alpha, rise, dim, lines, cath, glow, cathSolid, lamps, wake, focus, scan, win, time, pr, reduce } */
    update(s) {
      group.visible = s.alpha > 0.002 || s.lamps > 0.002;
      flood.intensity = 0;
      if (!group.visible) return;
      U.uRise.value = s.rise;
      U.uDim.value = s.dim;
      const solid = s.alpha;
      cityMat.opacity = solid;
      if (buildingsMesh) buildingsMesh.visible = solid > 0.01;
      // crtež bridova je zadnji sloj detalja: tek kad je kamera blizu (inače hladna mreža preuzima toplu noć)
      edgeU.uLines.value = solid * (0.25 + 0.55 * s.lines) * (1 - s.dim * 0.75) * (s.detail ?? 1);
      groundU.uOpacity.value = solid * (1 - s.dim * 0.75);
      riverU.uOpacity.value = Math.max(solid, s.lamps * 0.6) * (1 - s.dim * 0.6);
      riverU.uTime.value = s.time;
      areaMat.opacity = solid * (1 - s.dim * 0.6);
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
      if (cath) { cath.visible = s.cathSolid * solid > 0.01; cathMat.depthWrite = s.cathSolid > 0.6 && !scanOn; }
      flood.intensity = 14 * s.glow * solid * s.cathSolid * (1 - 0.6 * s.scan) * (0.2 + 0.8 * s.focus);
      // Hotel Osijek je sporedno sidro: kad konkatedrala postane motiv, povlači se u pozadinu
      hotelU.uAlpha.value = solid * (1 - 0.45 * s.focus);
      lampPts.uniforms.uPR.value = s.pr;
      lampPts.uniforms.uOpacity.value = s.lamps * (1 - s.dim * 0.7);
      lampPts.uniforms.uWake.value = s.wake;
      winPts.uniforms.uPR.value = s.pr;
      winPts.uniforms.uOpacity.value = solid * Math.min(1, s.rise * 1.4) * (1 - s.dim * 0.85) * (s.detail ?? 1);
      winPts.uniforms.uTime.value = s.time;
      winPts.uniforms.uFlick.value = s.reduce ? 0 : 0.6;
    },
    dispose() {
      disposables.forEach((o) => o.dispose?.());
      cath?.geometry.dispose(); cathMat?.dispose(); cathLines?.dispose();
    },
  };
}
