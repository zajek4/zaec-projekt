// Noćni izgled Osijeka: karta uličnog svjetla i shaderi za zgrade, tlo, površine i Dravu.
// Sve u lokalnim metrima grada (x = istok, y = gore, z = −sjever). Boje se računaju linearno, a na izlazu
// se pretvaraju u prikaz (gama), pa se topla svjetla miješaju fizikalno uvjerljivo.
//
// Karta svjetla (lightmap) jedna je tekstura (R8) koju crta platno pri učitavanju (u Workeru kad može): stvarne ulice prema rangu,
// svjetiljke kao lokve svjetla, trgovi i pješačke zone. Iz nje čitaju tlo (ulice svijetle odozgo), donji dijelovi
// pročelja (svjetlo ulice na zidu), izlozi i Drava (odsjaji svjetla s obale).
import * as THREE from 'three';

export const LM_R = 2600; // m — pola širine detaljne karte svjetla (oko konkatedrale)
// široka karta: cijelo izgrađeno područje Osijeka iz OSM-a (Višnjevac na zapadu do kraja Donjega grada na istoku),
// grublja (~5,5 m po pikselu); vidi se iz zraka i izvan detaljne karte. [zapad, jug, istok, sjever] u m.
export const LM_WIDE = [-6400, -3600, 5600, 2600];
// pojas uz rub detaljne karte (udio širine) u kojem se ona pretapa u široku; unutar LM_SPLIT m vrijedi samo detaljna
const LM_BAND = 0.035;
export const LM_SPLIT = Math.floor(LM_R * (1 - 2 * LM_BAND)) - 8;
const RISE_R = 3200;

/* ───────────────────────── karta svjetla ───────────────────────── */
/**
 * Crtanje karte (R8). Čista funkcija bez ičega izvan sebe: ista se pokreće u Workeru (kao tekst) ili, gdje
 * OffscreenCanvas/Worker nisu dostupni, na glavnoj niti. Crtanje 2048² platna i čitanje piksela trajalo je
 * ~150 ms na stolnom računalu (više na mobitelu) — u Workeru ne blokira scroll.
 */
function paintLightMap(cv, NX, NY, B, roads, zks, lamps, lampK, squares, shops, riverside) {
  // B = [zapad, jug, istok, sjever] u m; isti broj metara po pikselu u oba smjera
  const k = NX / (B[2] - B[0]);
  cv.width = NX;
  cv.height = NY;
  const g = cv.getContext('2d', { willReadFrequently: true });
  g.fillStyle = '#000';
  g.fillRect(0, 0, NX, NY);
  g.globalCompositeOperation = 'lighter';
  g.lineCap = 'round';
  g.lineJoin = 'round';
  // redak 0 = sjever (z = −sjever) → uv.y = (z + sjever) / (sjever − jug)
  const X = (x) => (x - B[0]) * k;
  const Y = (y) => (B[3] - y) * k;
  const path = (r, close) => {
    g.beginPath();
    g.moveTo(X(r[0]), Y(r[1]));
    for (let i = 2; i < r.length; i += 2) g.lineTo(X(r[i]), Y(r[i + 1]));
    if (close) g.closePath();
  };
  // širina (m) i jačina sjaja ulice prema rangu: glavne prometnice, sabirne, stambene, servisne, pješačke, staze
  const W = [[11, 0.2, 30, 0.07], [9, 0.17, 24, 0.06], [6.5, 0.11, 15, 0.04], [4, 0.05, 8, 0.02], [7, 0.2, 18, 0.07], [2.4, 0.035, 0, 0]];
  const white = (a) => `rgba(255,255,255,${Math.min(1, a).toFixed(4)})`;
  for (let j = 0; j < roads.length; j++) {
    const rd = roads[j];
    const w = W[rd.c];
    if (!w) continue;
    // šetnica uz Dravu: svjetla uz vodu (odsjaji u rijeci) vrijede i izvan središta
    const zk = zks[j];
    if (rd.c === 5 && zk < 0.7) continue;
    path(rd.r, false);
    if (w[2]) { g.lineWidth = w[2] * k; g.strokeStyle = white(w[3] * zk); g.stroke(); }
    g.lineWidth = w[0] * k;
    g.strokeStyle = white(w[1] * zk);
    g.stroke();
  }
  // trgovi i pješačke površine
  for (const r of squares) { path(r, true); g.fillStyle = white(0.1); g.fill(); }
  // izlozi: topla traka na pločniku uz pročelje
  g.lineWidth = 5 * k;
  for (const r of shops) { path(r, true); g.strokeStyle = white(0.07); g.stroke(); }
  // osvijetljena pročelja uz rijeku (za odsjaje u Dravi)
  g.lineWidth = 6 * k;
  for (const r of riverside) { path(r, true); g.strokeStyle = white(0.13); g.stroke(); }
  // svjetiljke: lokve svjetla (radijalni gradijent) — daju ritam ulice odozgo
  const rad = Math.max(1.2, 13 * k);
  for (let i = 0, n = lamps.length / 3; i < n; i++) {
    const x = X(lamps[i * 3]), y = Y(-lamps[i * 3 + 2]);
    if (x < -rad || y < -rad || x > NX + rad || y > NY + rad) continue;
    const a = 0.3 * lampK[i];
    const gr = g.createRadialGradient(x, y, 0, x, y, rad);
    gr.addColorStop(0, white(a));
    gr.addColorStop(0.45, white(a * 0.35));
    gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr;
    g.fillRect(x - rad, y - rad, rad * 2, rad * 2);
  }
  const img = g.getImageData(0, 0, NX, NY).data;
  const data = new Uint8Array(NX * NY);
  for (let i = 0; i < NX * NY; i++) data[i] = img[i * 4];
  return data;
}

function paintInWorker(args) {
  if (typeof OffscreenCanvas === 'undefined' || typeof Worker === 'undefined') return Promise.reject(new Error('bez OffscreenCanvas'));
  return new Promise((resolve, reject) => {
    const src = `const paint = ${paintLightMap.toString()};
onmessage = (e) => { const a = e.data; const d = paint(new OffscreenCanvas(1, 1), ...a); postMessage(d, [d.buffer]); };`;
    const url = URL.createObjectURL(new Blob([src], { type: 'text/javascript' }));
    let w;
    try { w = new Worker(url); } catch (e) { URL.revokeObjectURL(url); reject(e); return; }
    const done = () => { w.terminate(); URL.revokeObjectURL(url); };
    w.onmessage = (e) => { done(); resolve(e.data); };
    w.onerror = (e) => { e.preventDefault?.(); done(); reject(new Error('worker')); };
    w.postMessage(args);
  });
}

/**
 * roads: [{ c, r, w }] (OSM rang 0…5, prsten x/sjever u m), lamps: [x, y, z…], lampK: jačina po lampi,
 * squares: prstenovi trgova, shops: prstenovi zgrada s izlozima. Vraća Promise<[detaljna, široka]> (R8, mipmape).
 */
export async function buildLightMap({ roads, lamps, lampK, squares, shops, riverside = [], zone, lite }) {
  const N = lite ? 1024 : 2048;
  const zks = roads.map((rd) => zone(rd.r[0], rd.r[1]) * (rd.w ? 1.8 : 1));
  const rs = roads.map((rd) => ({ c: rd.c, r: rd.r }));
  const WX = lite ? 1024 : 2048, WY = Math.round((WX * (LM_WIDE[3] - LM_WIDE[1])) / (LM_WIDE[2] - LM_WIDE[0]));
  const jobs = [[N, N, [-LM_R, -LM_R, LM_R, LM_R]], [WX, WY, LM_WIDE]].map(([nx, ny, b]) => {
    const args = [nx, ny, b, rs, zks, lamps, lampK, squares, shops, riverside];
    return paintInWorker(args).catch(() => paintLightMap(document.createElement('canvas'), ...args)).then((d) => toTex(d, nx, ny));
  });
  return Promise.all(jobs);
}

function toTex(data, NX, NY) {
  const tex = new THREE.DataTexture(data, NX, NY, THREE.RedFormat, THREE.UnsignedByteType);
  tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.magFilter = THREE.LinearFilter;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.generateMipmaps = true;
  tex.anisotropy = 4;
  tex.needsUpdate = true;
  return tex;
}

/** Prazna karta (dok se podaci ne učitaju). */
export function emptyLightMap() {
  const t = new THREE.DataTexture(new Uint8Array(4), 2, 2, THREE.RedFormat, THREE.UnsignedByteType);
  t.needsUpdate = true;
  return t;
}

/* ───────────────────────── zajednički GLSL ───────────────────────── */
export const CITY_GLSL = /* glsl */ `
  uniform sampler2D uLM;
  uniform sampler2D uLMW; // široka karta (cijeli grad, grublja)
  uniform vec2 uFog;      // početak magle (m), 1 / duljina (1/m)
  uniform vec3 uFogCol;   // linearno
  uniform vec3 uCamL;     // kamera u lokalnim metrima
  uniform float uLamp;    // jačina uličnog svjetla 0…1
  float lmIn(vec2 uv){ return step(0.0, uv.x) * step(uv.x, 1.0) * step(0.0, uv.y) * step(uv.y, 1.0); }
  // detaljna karta (±${LM_R} m): pročelja, trgovi, Drava i odsjaji — sve što se gradi stoji unutar nje
  float lmAt(vec2 p){
    vec2 uv = (p + ${LM_R.toFixed(1)}) / ${(2 * LM_R).toFixed(1)};
    return texture2D(uLM, clamp(uv, 0.0, 1.0)).r * lmIn(uv);
  }
  // natrij u sjeni prelazi u toplo bijelo gdje je svjetla najviše (LED glavnih ulica)
  // oštro uzorkovanje (bez mipmapa): pojedine svjetiljke ostaju zasebne pruge u odsjaju
  float lmSharp(vec2 p){
    vec2 uv = (p + ${LM_R.toFixed(1)}) / ${(2 * LM_R).toFixed(1)};
    return textureLod(uLM, clamp(uv, 0.0, 1.0), 0.5).r * lmIn(uv);
  }
  // samo tlo: izvan detaljne karte (i u pojasu uz njen rub) vrijedi široka; p = (x, z), z = −sjever
  vec2 lmWideUv(vec2 p){ return (p - vec2(${LM_WIDE[0].toFixed(1)}, ${(-LM_WIDE[3]).toFixed(1)})) / vec2(${(LM_WIDE[2] - LM_WIDE[0]).toFixed(1)}, ${(LM_WIDE[3] - LM_WIDE[1]).toFixed(1)}); }
  float lmEdge(vec2 uv){ return smoothstep(0.0, ${LM_BAND.toFixed(3)}, min(min(uv.x, 1.0 - uv.x), min(uv.y, 1.0 - uv.y))); }
  vec3 lampTone(float L){ return vec3(1.0, 0.42, 0.13) * L + vec3(1.0, 0.72, 0.42) * L * L * 1.4; }
  vec3 fogIt(vec3 c, vec3 p){ float d = length(p - uCamL); float f = 1.0 - exp(-max(d - uFog.x, 0.0) * uFog.y); return mix(c, uFogCol, f); }
  float ch(vec3 p){ return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }
  vec3 toOut(vec3 c){ return pow(max(c, 0.0), vec3(0.4545)); }
  float dith(){ return (fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) / 255.0; }
`;

/** Zajedničke odore (dijele ih svi materijali grada). */
export function cityUniforms() {
  return {
    uLM: { value: emptyLightMap() },
    uLMW: { value: emptyLightMap() },
    uFog: { value: new THREE.Vector2(1e5, 0) },
    uFogCol: { value: new THREE.Vector3(0.0027, 0.004, 0.0085) },
    uCamL: { value: new THREE.Vector3() },
    uLamp: { value: 0 },
    uMoon: { value: new THREE.Vector3(-40, 60, 34).normalize() },
    uRise: { value: 0 },
    uDim: { value: 0 },
    uTime: { value: 0 },
  };
}

/* ───────────────────────── zgrade ───────────────────────── */
// aCol: linearni albedo (rgb, 0…1) + vrsta plohe u a (×40): 0 zid, 1 crijep, 2 škriljevac/lim, 3 ravni krov,
// 4 opšav/beton, 5 obala (nasip), 6 most. aWin: (u duž zida od prvog prozora, visina vijenca, duljina niza
// prozora, profil + sjeme). Profil: 0 bez prozora, 1 kuća, 2 stambena zgrada, 3 gradska kuća s izlozima, 4 hala.
export function buildingMaterial(C, { lite }) {
  const U = Object.assign({ uAlpha: { value: 1 }, uWinI: { value: 1 }, uShop: { value: 1 } }, C);
  return new THREE.ShaderMaterial({
    uniforms: U,
    transparent: true,
    vertexShader: /* glsl */ `
      attribute vec4 aCol; attribute vec4 aWin;
      uniform float uRise;
      varying vec3 vL; varying vec3 vP; varying vec4 vWin; varying vec4 vCol;
      void main(){
        vec3 p = position;
        p.y *= clamp((uRise * ${RISE_R.toFixed(1)} - length(p.xz)) / 260.0, 0.0, 1.0);
        vL = position; vP = p; vWin = aWin; vCol = aCol;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }`,
    fragmentShader: /* glsl */ `
      ${CITY_GLSL}
      uniform vec3 uMoon; uniform float uAlpha; uniform float uDim; uniform float uTime; uniform float uWinI; uniform float uShop;
      varying vec3 vL; varying vec3 vP; varying vec4 vWin; varying vec4 vCol;
      void main(){
        vec3 n = normalize(cross(dFdx(vP), dFdy(vP)));
        vec3 V = normalize(uCamL - vP);
        float ty = floor(vCol.a * 255.0 / 40.0 + 0.5);
        float wall = step(abs(n.y), 0.3);
        vec3 alb = vCol.rgb;
        // mjesečina i nebo (hladno), svjetlo ulice odozdo (toplo, iz karte svjetla ispred plohe)
        float up = n.y * 0.5 + 0.5;
        vec3 amb = mix(vec3(0.0035, 0.0042, 0.0068), vec3(0.019, 0.025, 0.045), up);
        vec3 moon = vec3(0.05, 0.063, 0.105) * max(dot(n, uMoon), 0.0) * (1.0 + 0.5 * (1.0 - wall));
        float L = lmAt(vL.xz + n.xz * 4.0) * uLamp;
        float low = exp(-max(vL.y, 0.0) / 6.0);
        vec3 bounce = lampTone(L) * (wall * (0.05 + 0.5 * low) + (1.0 - wall) * 0.03);
        vec3 col = alb * (amb + moon + bounce);
        // crijep i škriljevac: redovi pokrova (sjena preklopa), nestaju prije nego što bi treperili
        if (ty > 0.5 && ty < 2.5) {
          float per = ty < 1.5 ? 0.36 : 0.28;
          float cy = vL.y / per;
          float k = 1.0 - smoothstep(0.18, 0.5, fwidth(cy));
          col *= mix(1.0, 0.74 + 0.3 * fract(cy), k);
          vec3 R = reflect(-V, n);
          col += vec3(0.05, 0.06, 0.09) * pow(max(dot(R, uMoon), 0.0), ty < 1.5 ? 6.0 : 22.0) * (ty < 1.5 ? 0.12 : 0.5);
        }
        // prozori: mreža po katovima, upaljeni prema profilu; izdaleka prelaze u prosječan topli sjaj
        float prof = floor(vWin.w + 0.001);
        if (wall > 0.5 && prof > 0.5) {
          // sjeme je kvantizirano (središte razreda): interpolacija konstante smije malo odstupiti, a hash ne smije
          float seed = floor(fract(vWin.w) * 1000.0) / 1000.0;
          vec4 P = prof < 1.5 ? vec4(3.6, 3.0, 0.17, 0.7) : prof < 2.5 ? vec4(3.0, 2.85, 0.28, 0.7) : prof < 3.5 ? vec4(3.4, 3.7, 0.2, 4.3) : vec4(6.0, 4.5, 0.06, 1.2);
          vec2 gq = vec2(vWin.x / P.x, (vL.y - P.w) / P.y);
          vec2 c = floor(gq), e = fract(gq);
          vec2 fw = max(fwidth(gq), vec2(1e-4));
          float row = step(0.0, vWin.x) * step(vWin.x, vWin.z);
          float inC = row * step(0.0, gq.y) * step((c.y + 0.84) * P.y + P.w, vWin.y);
          float wx = clamp((0.24 - abs(e.x - 0.5)) / fw.x + 0.5, 0.0, 1.0);
          float wy = clamp((0.25 - abs(e.y - 0.56)) / fw.y + 0.5, 0.0, 1.0);
          float win = wx * wy * inC;
          // Noćna raspodjela (nije svaki prozor upaljen): zgrada ima svoju "budnost" — dio kuća je potpuno taman,
          // većina je mirna, poneka vrlo živa. Svjetla se pale po stanovima/uredima (skupina susjednih prozora na
          // katu), a ne pojedinačno. Uz glavne ulice (karta svjetla) grad je budniji nego na rubu.
          float hb = ch(vec3(seed * 91.0, 3.3, 7.7));
          float act = hb < 0.22 ? 0.08 : hb < 0.82 ? 0.7 + 0.6 * (hb - 0.22) / 0.6 : 1.6;
          act *= mix(0.7, 1.2, smoothstep(0.04, 0.35, lmAt(vL.xz + n.xz * 4.0)));
          float uw = prof < 2.5 ? 2.0 : prof < 3.5 ? 3.0 : 4.0;
          vec2 unit = vec2(floor(c.x / uw), c.y);
          float h0 = ch(vec3(unit, seed * 517.0 + 9.0));
          // poneki stan se s vremena na vrijeme upali ili ugasi (grad živi), bez treperenja
          float ep = floor(uTime / 140.0 + h0 * 9.0) * step(0.88, fract(h0 * 31.7));
          float pOcc = clamp(P.z * act * 1.1, 0.0, 0.9);
          float occ = step(ch(vec3(unit + ep * 3.1, seed * 517.0 + 4.1)), pOcc);
          float h1 = ch(vec3(c, seed * 517.0 + 1.7));
          float lit = occ * step(h1, 0.62);
          // vrsta svjetla: prigušeno (zastor, dublja soba), toplo unutarnje, hladno (ekran, ured, stubište)
          float hk = fract(h1 * 53.3 + seed * 7.0);
          float hi = fract(h1 * 91.7);
          float coolP = prof > 2.5 ? 0.2 : 0.07;
          vec3 wc = mix(vec3(1.0, 0.6, 0.3), vec3(1.0, 0.76, 0.5), fract(h1 * 13.1));
          float wi = 0.42 + 0.5 * hi;
          if (hk < coolP) { wc = vec3(0.52, 0.64, 1.0); wi = 0.12 + 0.16 * hi; }
          else if (hk < coolP + 0.36) { wc = vec3(1.0, 0.52, 0.24); wi = 0.05 + 0.11 * hi; }
          wi *= uWinI;
          vec3 glass = vec3(0.0012, 0.0016, 0.003) + vec3(0.01, 0.013, 0.022) * pow(1.0 - abs(dot(n, V)), 3.0);
          vec3 wcol = mix(glass, wc * wi, lit);
          float lod = smoothstep(0.2, 0.5, max(fw.x, fw.y));
          float band = row * step(0.0, gq.y) * step(vL.y, vWin.y - 0.6);
          // izdaleka: očekivani sjaj baš ove zgrade (ne jednolika traka), s razlikom po katovima dok se katovi još vide
          float pLit = pOcc * 0.62;
          float meanI = coolP * 0.2 + 0.36 * 0.1 + (0.64 - coolP) * 0.67;
          float fk = mix(1.0, mix(0.25, 1.75, ch(vec3(c.y, 5.0, seed * 517.0))), 1.0 - smoothstep(0.35, 0.9, fw.y));
          vec3 avg = mix(col, vec3(1.0, 0.62, 0.32) * meanI * uWinI * pLit * fk + glass * (1.0 - pLit), 0.24 * band);
          col = mix(mix(col, wcol, win), avg, lod);
          // izlozi u prizemlju: širi, svjetliji, toplo bijeli — svako svjetlo je nečiji posao
          if (prof > 2.5 && prof < 3.5) {
            float sy = (vL.y - 0.45) / 3.2;
            float fy = max(fwidth(sy), 1e-4);
            float sh = clamp((0.42 - abs(e.x - 0.5)) / fw.x + 0.5, 0.0, 1.0) * clamp((0.5 - abs(sy - 0.5)) / fy + 0.5, 0.0, 1.0) * row;
            float hs = ch(vec3(c.x, 9.0, seed * 211.0));
            // navečer je dio izloga zatvoren (samo noćno svjetlo u dubini), ostali su različito jaki i topli
            float on = step(hs, 0.62);
            float open = step(hs, 0.4);
            vec3 shop = mix(vec3(1.0, 0.6, 0.3), vec3(1.0, 0.78, 0.56), fract(hs * 7.0)) * mix(0.1 + 0.08 * fract(hs * 17.0), 0.4 + 0.5 * fract(hs * 17.0), open) * uShop;
            float sl = smoothstep(0.25, 0.6, max(fw.x, fy));
            col = mix(col, mix(glass, shop, on), sh * (1.0 - sl));
            col += shop * on * 0.3 * sl * row * step(0.45, vL.y) * step(vL.y, 3.65);
          }
        }
        col = fogIt(col, vP);
        col *= pow(1.0 - uDim * 0.82, 2.2); // zatamnjenje u izlaznom (percepcijskom) prostoru, kao prije
        gl_FragColor = vec4(toOut(col) + dith(), uAlpha);
      }`,
  });
}

/* ───────────────────────── tlo ───────────────────────── */
// Premultiplicirano: tlo pokriva kartu (uOpacity), a sjaj ulica se dodaje i prije nego što tlo postane neprozirno
// (uGlow) — iz visine se mreža ulica Osijeka rađa iz svjetla na karti Slavonije.
// Tri materijala (dijele uniforme) za tri dijela tla, da svaki piksel čita samo jednu kartu svjetla:
// 0 = unutrašnjost detaljne karte (±LM_SPLIT), 1 = pojas pretapanja do ruba detaljne, 2 = ostatak grada (široka).
export function groundMaterials(C) {
  const U = Object.assign({ uOpacity: { value: 1 }, uGlow: { value: 0 } }, C);
  return [0, 1, 2].map((mode) => new THREE.ShaderMaterial({
    uniforms: U,
    defines: { LM_MODE: mode },
    transparent: true,
    depthWrite: false,
    blending: THREE.CustomBlending,
    blendSrc: THREE.OneFactor,
    blendDst: THREE.OneMinusSrcAlphaFactor,
    vertexShader: /* glsl */ `varying vec3 vL; void main(){ vL = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: /* glsl */ `
      ${CITY_GLSL}
      uniform float uOpacity; uniform float uGlow; varying vec3 vL;
      float grid(vec2 p, float s){ vec2 g = abs(fract(p / s - 0.5) - 0.5) / fwidth(p / s); return 1.0 - min(min(g.x, g.y), 1.0); }
      void main(){
        float d = length(vL.xz);
        float a = (1.0 - smoothstep(2200.0, 5000.0, d)) * uOpacity;
        vec2 uw = lmWideUv(vL.xz);
        float aw = lmEdge(uw) * lmIn(uw); // cijeli grad iz OSM-a
        #if LM_MODE == 0
          float L = lmAt(vL.xz);
        #elif LM_MODE == 1
          vec2 uv = (vL.xz + ${LM_R.toFixed(1)}) / ${(2 * LM_R).toFixed(1)};
          float L = mix(texture2D(uLMW, clamp(uw, 0.0, 1.0)).r * lmIn(uw), texture2D(uLM, clamp(uv, 0.0, 1.0)).r, lmEdge(uv) * lmIn(uv));
        #else
          float L = texture2D(uLMW, clamp(uw, 0.0, 1.0)).r * lmIn(uw);
        #endif
        // tlo između ulica ostaje tamno: slabi oreoli se potiskuju, svijetle same ulice i lokve svjetiljki;
        // izdaleka (mipmape usrednjuju ulice) mreža ostaje cijela
        float mpp = length(fwidth(vL.xz));
        L *= mix(smoothstep(0.035, 0.32, L), 1.0, smoothstep(1.5, 6.0, mpp));
        vec3 base = vec3(0.0021, 0.0033, 0.0068) + vec3(0.0016, 0.0024, 0.0048) * (grid(vL.xz, 50.0) * 0.6 + grid(vL.xz, 250.0));
        vec3 lit = lampTone(L) * (0.16 * uLamp * uOpacity);
        float f = 1.0 - exp(-max(length(vL - uCamL) - uFog.x, 0.0) * uFog.y);
        vec3 col = a > 0.0 ? toOut(mix(base + lit, uFogCol, f)) * a : vec3(0.0);
        // izvan tamne podloge (daleko od središta) ulice se dodaju kao svjetlo, bez podloge; prije nego što tlo
        // postane neprozirno sjaj ulica (uGlow) izlazi iz karte Slavonije
        float kf = (uOpacity - a) * aw, kg = uGlow * (1.0 - uOpacity) * aw;
        if (kf > 0.0) col += toOut(lit * (1.0 - f)) * kf;
        if (kg > 0.0) col += toOut(lampTone(L) * 0.24) * kg;
        gl_FragColor = vec4(col + dith(), a);
      }`,
  }));
}

/* ───────────────────────── trg, parkovi, travnjaci ───────────────────────── */
export function surfaceMaterial(C) {
  const U = Object.assign({ uOpacity: { value: 1 } }, C);
  return new THREE.ShaderMaterial({
    uniforms: U,
    transparent: true,
    depthWrite: false,
    vertexShader: /* glsl */ `attribute vec3 aCol; varying vec3 vL; varying vec3 vC; void main(){ vL = position; vC = aCol; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: /* glsl */ `
      ${CITY_GLSL}
      uniform float uOpacity; uniform float uDim; varying vec3 vL; varying vec3 vC;
      void main(){
        float L = lmAt(vL.xz) * uLamp;
        vec3 c = vC * (0.07 + lampTone(L) * 1.25);
        c = fogIt(c, vL) * pow(1.0 - uDim * 0.6, 2.2);
        gl_FragColor = vec4(toOut(c) + dith(), uOpacity);
      }`,
  });
}

/* ───────────────────────── Drava ───────────────────────── */
// Tamna, duboka voda: valići koji teku nizvodno (prema istoku), odsjaj noćnog neba pod kosim kutom, trag
// mjesečine i izduženi odsjaji svjetla s obale i mostova (traže se u karti svjetla iza točke, gledano od kamere).
export function waterMaterial(C, { lite }) {
  const U = Object.assign({ uOpacity: { value: 1 } }, C);
  const TAPS = lite ? 4 : 7;
  return new THREE.ShaderMaterial({
    uniforms: U,
    transparent: true,
    depthWrite: false,
    vertexShader: /* glsl */ `varying vec3 vL; void main(){ vL = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: /* glsl */ `
      ${CITY_GLSL}
      uniform float uOpacity; uniform float uTime; uniform float uDim; uniform vec3 uMoon; varying vec3 vL;
      float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
        float a = ch(vec3(i, 0.0)), b = ch(vec3(i + vec2(1.0, 0.0), 0.0)), c = ch(vec3(i + vec2(0.0, 1.0), 0.0)), d = ch(vec3(i + 1.0, 0.0));
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y); }
      // valići (tri oktave) teku nizvodno; oktava koja bi na zaslonu bila sitnija od nekoliko piksela se gasi
      vec3 oK;
      float wav(vec2 p){ vec2 q = p - vec2(uTime * 0.6, 0.0); return vn(q * vec2(0.05, 0.11)) * 0.6 * oK.x + vn(q * vec2(0.13, 0.31) + 3.7) * 0.3 * oK.y + vn(q * vec2(0.4, 0.9) - 1.3) * 0.1 * oK.z; }
      void main(){
        vec2 p = vL.xz;
        float fw = length(fwidth(p));
        // izvan 3,4 km rijeka je potpuno prozirna (fade): ne sjenča se
        if (dot(p, p) > 3400.0 * 3400.0) discard;
        oK = 1.0 - smoothstep(0.08, 0.3, fw * vec3(0.11, 0.31, 0.9));
        float e = max(1.5, fw);
        float h0 = wav(p);
        vec2 gr = vec2(wav(p + vec2(e, 0.0)) - h0, wav(p + vec2(0.0, e)) - h0) / e;
        vec3 V = normalize(uCamL - vL);
        vec3 N = normalize(vec3(-gr.x * 7.0, 1.0, -gr.y * 7.0));
        float fres = 0.04 + 0.96 * pow(1.0 - max(dot(N, V), 0.0), 5.0);
        vec3 deep = vec3(0.0011, 0.0021, 0.0048);
        vec3 sky = vec3(0.011, 0.016, 0.034);
        vec3 col = mix(deep, sky, fres);
        // mjesečina: sitno svjetlucanje samo na finim valićima (krupni valovi daju tek blagi sjaj)
        vec3 R = reflect(-V, N);
        col += vec3(0.05, 0.065, 0.11) * pow(max(dot(R, uMoon), 0.0), 60.0) * 0.35;
        // odsjaji svjetla: uzorci iza točke (od kamere prema dalje), razvučeni pod kosim kutom
        vec2 away = normalize(p - uCamL.xz + 1e-3);
        vec2 side = vec2(-away.y, away.x);
        // valovita voda razvlači odsjaj prema promatraču: što je pogled kosiji, to je trag dulji
        float st = clamp(0.4 / max(V.y, 0.04), 1.0, 12.0) * 6.0;
        float acc = 0.0;
        for (int i = 1; i <= ${TAPS}; i++) {
          float t = float(i);
          acc += lmSharp(p + away * t * st + side * dot(gr, side) * 60.0) * (1.0 - t / ${(TAPS + 1).toFixed(1)});
        }
        acc /= ${(TAPS * 0.5).toFixed(1)};
        col += lampTone(acc * 1.6) * 0.75 * (0.3 + 0.7 * fres) * uLamp;
        col += lampTone(lmAt(p)) * 0.05 * uLamp;
        float fade = 1.0 - smoothstep(2600.0, 3400.0, length(p));
        col = fogIt(col, vL) * pow(1.0 - uDim * 0.6, 2.2);
        gl_FragColor = vec4(toOut(col) + dith(), 0.98 * fade * uOpacity);
      }`,
  });
}
