// Zajednički alati za ZAEC kino-uvod: geo projekcije, materijali, interpolacija.
import * as THREE from 'three';

export const DEG = Math.PI / 180;
export const OSIJEK = [18.675555, 45.560846]; // težište tlocrta konkatedrale (OSM) = ishodište svijeta
export const MAPK = 4; // jedinica karte po stupnju (na Z = 1)
export const COSLAT = Math.cos(45 * DEG);
// radijus globusa u jedinicama karte (Z = 1): točno 4 jedinice po stupnju luka, pa se ravna karta
// i kugla poklapaju (karta se pri prijelazu "odmata" s kugle — vidi BEND_GLSL)
export const GLOBE_R = (MAPK * 180) / Math.PI;

/* Višerazinski sustav: karta (Z = 1) ima 1 jedinicu = ¼° geografske širine. Grad je u metrima i
   skalira se s kartom (mapScale) pa se svjetla, ceste i zgrade uvijek poklapaju s kartom.
   Na Z_CITY jedna svjetska jedinica ≈ 7 m (toranj konkatedrale ~90 m ≈ 13 jedinica). */
export const CITY_KX = 1 / 27551; // jedinica karte po metru prema istoku (cos 45,56°)
export const CITY_KZ = 1 / 27786; // jedinica karte po metru prema sjeveru
export const M_PER_UNIT_CITY = 7;
export const Z_CITY = 1 + Math.log(1 / (CITY_KZ * M_PER_UNIT_CITY)) / Math.log(500);

export const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
export const lerp = (a, b, t) => a + (b - a) * t;
export const smooth = (a, b, v) => {
  const t = clamp((v - a) / (b - a));
  return t * t * (3 - 2 * t);
};
export const ease = (t) => t * t * (3 - 2 * t);
export const damp = (c, t, l, dt) => c + (t - c) * (1 - Math.exp(-l * dt));

/** lon/lat → točka na jediničnoj sferi (lon 0 gleda u +z, sjever +y). */
export function ll2v(lon, lat, r = 1, out = new THREE.Vector3()) {
  const la = lat * DEG, lo = lon * DEG;
  return out.set(r * Math.cos(la) * Math.sin(lo), r * Math.sin(la), r * Math.cos(la) * Math.cos(lo));
}

/** Karta (Z = 1): Osijek u ishodištu, istok +x, sjever −z. */
export function proj(lon, lat) {
  return [(lon - OSIJEK[0]) * MAPK * COSLAT, -(lat - OSIJEK[1]) * MAPK];
}

/** Mjerilo karte za zadani zoom Z (0 = globus, 1 = Hrvatska, 2 = Osijek). */
export function mapScale(Z) {
  return Z < 1 ? Math.pow(22.5, Z - 1) : Math.pow(500, Z - 1);
}

export function seeded(seed = 1) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* ── karta ↔ kugla ──
   Jedna zajednička uniforma za sve materijale karte: 0 = ravna karta, 1 = točno na površini kugle
   (inverzna projekcija proj()). Kad je 1, karta je pikselski ista kao globus — prijelaz nema skoka. */
export const BEND = { value: 0 };
/** Smjer sunca u okviru karte i "širina" sumraka (dijele ga teren karte i noćna svjetla). */
export const SUN_MAP = { value: new THREE.Vector3(0, 1, 0) };
export const DAY_EDGE = { value: new THREE.Vector2(-0.12, 0.38) };
const f = (v) => (Number.isInteger(v) ? v.toFixed(1) : String(v));
export const BEND_GLSL = /* glsl */ `
uniform float uBend;
vec3 sphereNormal(vec2 xz){
  float lat = (${f(OSIJEK[1])} - xz.y / ${f(MAPK)}) * 0.017453292519943295;
  float dl = xz.x / ${f(MAPK * COSLAT)} * 0.017453292519943295;
  float la0 = ${f(OSIJEK[1] * DEG)};
  float cl = cos(lat), sl = sin(lat), cd = cos(dl);
  return vec3(cl * sin(dl), sl * sin(la0) + cl * cd * cos(la0), cl * cd * sin(la0) - sl * cos(la0));
}
vec3 bendPos(vec3 p){
  if (uBend < 1e-4) return p;
  vec3 e = sphereNormal(p.xz);
  return mix(p, e * (${f(GLOBE_R)} + p.y) - vec3(0.0, ${f(GLOBE_R)}, 0.0), uBend);
}
`;

/* ── površina Zemlje: jedan materijalni jezik za globus i kartu ──
   Polje se izvodi iz iste maske kopna (bez dodatnog preuzimanja): R = udio kopna u krugu ~1,4° (šelf),
   G = ~6° (kontinentalnost), B = ~0,5° (neposredna obala). Ocean je najdublji daleko od kopna, a uz obalu
   prelazi u plići, svjetliji šelf; kopno je uz obalu malo svjetlije, u unutrašnjosti dublje, prema polovima
   hladnije. Globus i karta koriste iste funkcije, pa se pri "odmatanju" karte ništa ne mijenja. */
export const EARTH_W = 512;
export const EARTH_H = 256;
export function createEarthField() {
  const data = new Uint8Array(EARTH_W * EARTH_H * 4);
  const texture = new THREE.DataTexture(data, EARTH_W, EARTH_H, THREE.RGBAFormat, THREE.UnsignedByteType);
  texture.colorSpace = THREE.NoColorSpace;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;
  texture.wrapS = THREE.RepeatWrapping;
  texture.needsUpdate = true;
  /** Izračun iz učitane maske (~5 ms): umanjenje na 512×256 pa zamućenje okvirom (2 prolaza ≈ Gauss);
      po geografskoj dužini polumjer raste s 1/cos(širine), pa je zamućenje izotropno na kugli. */
  function fill(img) {
    const W = EARTH_W, H = EARTH_H;
    let src;
    try {
      const cv = document.createElement('canvas');
      cv.width = W; cv.height = H;
      const cx = cv.getContext('2d', { willReadFrequently: true });
      cx.imageSmoothingEnabled = true;
      cx.imageSmoothingQuality = 'high';
      cx.drawImage(img, 0, 0, W, H);
      src = cx.getImageData(0, 0, W, H).data;
    } catch {
      return;
    }
    const a = new Float32Array(W * H);
    for (let i = 0; i < W * H; i++) a[i] = src[i * 4] / 255;
    const tmp = new Float32Array(W * H);
    const blurX = (inp, out, r) => {
      for (let y = 0; y < H; y++) {
        const lat = (90 - ((y + 0.5) * 180) / H) * DEG;
        const rx = Math.min(W >> 2, Math.max(1, Math.round(r / Math.max(Math.cos(lat), 0.18))));
        const o = y * W;
        let s = 0;
        for (let k = -rx; k <= rx; k++) s += inp[o + ((k + W) % W)];
        for (let x = 0; x < W; x++) {
          out[o + x] = s / (2 * rx + 1);
          s += inp[o + ((x + rx + 1) % W)] - inp[o + ((x - rx + W) % W)];
        }
      }
    };
    const blurY = (inp, out, r) => {
      for (let x = 0; x < W; x++) {
        for (let y = 0; y < H; y++) {
          let s = 0, n = 0;
          for (let k = Math.max(0, y - r); k <= Math.min(H - 1, y + r); k++) { s += inp[k * W + x]; n++; }
          out[y * W + x] = s / n;
        }
      }
    };
    const blur = (r) => {
      const b = Float32Array.from(a);
      for (let p = 0; p < 2; p++) { blurX(b, tmp, r); blurY(tmp, b, Math.max(1, Math.round(r))); }
      return b;
    };
    const near = blur(0.7), shelf = blur(2), cont = blur(8);
    for (let y = 0; y < H; y++) {
      const row = (H - 1 - y) * W; // slika: sjever gore → tekstura: v = 0 na jugu
      for (let x = 0; x < W; x++) {
        const i = y * W + x, o = (row + x) * 4;
        data[o] = Math.round(shelf[i] * 255);
        data[o + 1] = Math.round(cont[i] * 255);
        data[o + 2] = Math.round(near[i] * 255);
      }
    }
    texture.needsUpdate = true;
  }
  /** A kanal: regionalni sjaj noćnih svjetala (~0,7° zamućenje), za udaljeni pogled gdje su točke sitne. */
  function fillLights(img) {
    const W = EARTH_W, H = EARTH_H;
    let src;
    try {
      const cv = document.createElement('canvas');
      cv.width = W; cv.height = H;
      const cx = cv.getContext('2d', { willReadFrequently: true });
      cx.imageSmoothingEnabled = true;
      cx.imageSmoothingQuality = 'high';
      cx.drawImage(img, 0, 0, W, H);
      src = cx.getImageData(0, 0, W, H).data;
    } catch {
      return;
    }
    for (let y = 0; y < H; y++) {
      const row = (H - 1 - y) * W;
      for (let x = 0; x < W; x++) {
        // prosjek po pikselu slabi male gradove: korijen ih vraća, a jezgre metropola ostaju najsvjetlije
        const v = Math.min(1, (src[(y * W + x) * 4] / 255) * 2.2);
        data[(row + x) * 4 + 3] = Math.round(Math.sqrt(v) * 255);
      }
    }
    texture.needsUpdate = true;
  }
  return { texture, fill, fillLights };
}

/** Rani "civilizacijski" sloj: koliko se gustoća naselja nazire i na dnevnoj strani (0…1), zajedničko globusu i karti. */
export const CIVIC = { value: 0 };

export const EARTH_GLSL = /* glsl */ `
uniform sampler2D uField;
float eHash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float eNoise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(eHash(i), eHash(i + vec2(1.0, 0.0)), f.x), mix(eHash(i + vec2(0.0, 1.0)), eHash(i + vec2(1.0, 1.0)), f.x), f.y);
}
// ocean: dubina iz udaljenosti od kopna; mu = kosinus kuta gledanja (rub je tamniji, središte bistrije)
vec3 oceanTone(vec4 F, float mu){
  float shelf = smoothstep(0.02, 0.42, F.r);
  float coastal = smoothstep(0.04, 0.5, F.b);
  vec3 c = mix(vec3(0.0042, 0.0095, 0.029), vec3(0.0075, 0.018, 0.048), smoothstep(0.0, 0.3, F.g));
  c = mix(c, vec3(0.014, 0.046, 0.098), shelf * 0.85);
  c = mix(c, vec3(0.020, 0.062, 0.118), coastal * 0.35);
  return c * (0.7 + 0.45 * mu * mu);
}
// kopno: obalni pojas, kontinentalna unutrašnjost, hladnije visoke širine, blaga tonska varijacija
vec3 landTone(vec4 F, float lat, float lon){
  float inland = smoothstep(0.62, 0.97, F.g);
  vec3 c = mix(vec3(0.046, 0.067, 0.102), vec3(0.029, 0.044, 0.073), inland);
  vec2 q = vec2(lon * cos(lat), lat) * 57.29578;
  float t = eNoise(q * 0.33) * 0.65 + eNoise(q * 1.3) * 0.35;
  c *= 0.86 + 0.28 * t;
  c = mix(c, vec3(0.074, 0.092, 0.126), smoothstep(1.03, 1.2, abs(lat)) * 0.75);
  return c;
}
// noćna svjetla iz snimke NASA/NOAA (tools/build-lights.py): stvarna geografija, stiliziran prikaz.
// Odluka se donosi po ćeliji matrice (uv središta ćelije, hash ćelije), pa svijetle cijele točke, a ne mrlje.
// Vjerojatnost i jačina rastu s gustoćom; jezgre metropola su toplobijele, predgrađa i sela natrijeva
// narančasta, rijetke točke u velikim gradovima hladni LED. Ispod praga snimke ostaje tiha pozadina
// rijetkih slabih svjetala (manja mjesta), rjeđa u dubokoj unutrašnjosti kontinenata; ambK je stišava
// na finijim razinama matrice, da se izbliza ne pretvori u posipanje.
// Vraća rgb noćnog svjetla (s regionalnim sjajem iz polja, kanal A) i a = maska dnevnog sloja: samo gusta
// urbana područja (viši prag), da se danju čitaju gradovi i koridori, a ne posipanje po cijelom kopnu.
uniform sampler2D uLights; uniform float uCivic;
vec4 cityLights(vec2 cellUv, float hc, float dm, vec4 F, float ambK){
  float L = texture2D(uLights, cellUv).r;
  float on = step(hc, smoothstep(0.012, 0.5, L));
  float inten = 0.3 + 0.7 * smoothstep(0.04, 0.85, L);
  vec3 c = mix(vec3(1.0, 0.57, 0.23), vec3(1.0, 0.84, 0.62), smoothstep(0.32, 0.95, L));
  c = mix(c, vec3(0.84, 0.9, 1.0), step(0.94, fract(hc * 7.31)) * smoothstep(0.4, 0.9, L) * 0.65);
  float amb = (1.0 - on) * step(fract(hc * 13.7), (0.08 + 0.3 * (1.0 - smoothstep(0.5, 0.95, F.b))) * (1.0 - 0.45 * smoothstep(0.86, 0.99, F.g)) * ambK);
  vec3 rgb = (c * on * inten + vec3(1.0, 0.6, 0.26) * amb * 0.45) * dm + vec3(1.0, 0.52, 0.2) * F.a * F.a * 0.15;
  float civ = step(hc, smoothstep(0.22, 0.75, L));
  return vec4(rgb, civ * dm);
}
// danja boja točke naselja: jantar jednake težine kao plava točka matrice (ljudi i tvrtke u mreži)
vec3 civicTone(float day){ return vec3(0.6, 0.36, 0.15) * (0.22 + 1.0 * day); }
// atmosferska izmaglica nad diskom (ostatak raspršenja koji ljuska atmosfere ne pokriva)
vec3 hazeTone(float mu, float ndl){
  float fres = pow(1.0 - mu, 2.6);
  return vec3(0.16, 0.42, 1.0) * fres * (0.1 + 0.8 * smoothstep(-0.2, 0.6, ndl));
}
// sumrak: tanki zlatni rub prelazi u ljubičastoplavu pa u noć
vec3 twilightTone(float ndl, float mid, float wid){
  float gold = exp(-pow((ndl - mid) / wid, 2.0));
  float blue = exp(-pow((ndl - mid + wid * 1.4) / (wid * 1.2), 2.0));
  return vec3(0.34, 0.15, 0.06) * gold + vec3(0.05, 0.05, 0.13) * blue;
}
`;

/**
 * Meke svjetleće točke (veličina, prozirnost i prag "buđenja" po točki).
 * Udaljene točke ne ostaju umjetno velike: ispod uMin piksela gube svjetlinu (uFall), pa gust skup
 * točaka iz daljine izgleda kao jedan mekan sjaj, a ne kao tepih jednakih piksela koji naglo iskoči.
 * aWake + uWake: točke se pale pojedinačno (grad se budi), uFlick: sporo paljenje/gašenje (prozori) na GPU-u.
 */
/** Svjetleće točke. tint: { color, core } — druga paleta; svaka točka bira mješavinu preko .tint[i] (0…1). */
export function glowPoints({ count, color = '#7fa2ff', core = '#ffffff', size = 1, additive = true, depthTest = true, bend = false, nightOnly = false, tint = null }) {
  const g = new THREE.BufferGeometry();
  const pos = new Float32Array(count * 3);
  const a = new Float32Array(count).fill(1);
  const s = new Float32Array(count).fill(1);
  const w = new Float32Array(count);
  const t = tint ? new Float32Array(count) : null;
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('aAlpha', new THREE.BufferAttribute(a, 1));
  g.setAttribute('aSize', new THREE.BufferAttribute(s, 1));
  g.setAttribute('aWake', new THREE.BufferAttribute(w, 1));
  if (t) g.setAttribute('aTint', new THREE.BufferAttribute(t, 1));
  const uniforms = {
    uColor: { value: new THREE.Color(color) },
    uCore: { value: new THREE.Color(core) },
    uColor2: { value: new THREE.Color(tint?.color || color) },
    uCore2: { value: new THREE.Color(tint?.core || core) },
    uSize: { value: size },
    uPR: { value: 1 },
    uOpacity: { value: 1 },
    uMax: { value: 40 },
    uMin: { value: 0 },
    uFall: { value: 2 },
    uWake: { value: 1 },
    uTime: { value: 0 },
    uFlick: { value: 0 },
    uBend: BEND,
    uSunMap: SUN_MAP,
    uDayEdge: DAY_EDGE,
  };
  const m = new THREE.ShaderMaterial({
    uniforms,
    transparent: true,
    depthWrite: false,
    depthTest,
    blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    vertexShader: /* glsl */ `
      attribute float aAlpha; attribute float aSize; attribute float aWake;
      ${t ? 'attribute float aTint; varying float vT;' : ''}
      uniform float uSize; uniform float uPR; uniform float uMax; uniform float uMin; uniform float uFall; uniform float uWake; uniform float uTime; uniform float uFlick;
      varying float vA; varying float vPx;
      ${bend || nightOnly ? BEND_GLSL : ''}
      ${nightOnly ? 'uniform vec3 uSunMap; uniform vec2 uDayEdge;' : ''}
      void main(){
        ${t ? 'vT = aTint;' : ''}
        vec4 mv = modelViewMatrix * vec4(${bend ? 'bendPos(position)' : 'position'}, 1.0);
        float sc = length(modelMatrix[0].xyz);
        float px = aSize * uSize * uPR * 300.0 * sc / max(0.5, -mv.z);
        float lo = uMin * uPR;
        float al = aAlpha;
        // ispod najmanje veličine točka gubi svjetlinu (uFall 2 = razmjerno površini; manje za točkasta svjetla)
        if (px < lo) { al *= pow(px / lo, uFall); px = lo; }
        al *= smoothstep(aWake, aWake + 0.06, uWake);
        ${nightOnly ? '// svjetla se pale tek kad nad njih padne noć (sumrak putuje preko karte)\n        al *= 1.0 - smoothstep(uDayEdge.x, uDayEdge.y, dot(sphereNormal(position.xz), uSunMap) + 0.035 + aWake * 0.06);' : ''}
        if (uFlick > 0.0) {
          float k = fract(sin(aWake * 913.7 + floor(uTime * 0.3 + aWake * 17.0) * 7.13) * 43758.5453);
          al *= 1.0 - uFlick * step(0.86, k);
        }
        vA = al;
        gl_PointSize = min(px, uMax * uPR);
        vPx = gl_PointSize;
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */ `
      uniform vec3 uColor; uniform vec3 uCore; uniform vec3 uColor2; uniform vec3 uCore2; uniform float uOpacity; varying float vA; varying float vPx;
      ${t ? 'varying float vT;' : ''}
      void main(){
        vec3 cA = ${t ? 'mix(uColor, uColor2, vT)' : 'uColor'};
        vec3 cB = ${t ? 'mix(uCore, uCore2, vT)' : 'uCore'};
        if (vA < 0.004) discard;
        float d = length(gl_PointCoord - 0.5);
        // točka od 1–3 px: profil sjaja bi se uzorkovao izvan središta (svjetlo bi gotovo nestalo) — tada je pun disk
        float k = clamp((vPx - 1.5) / 3.0, 0.0, 1.0);
        if (d > mix(0.75, 0.5, k)) discard;
        float halo = pow(max(1.0 - d * 2.0, 0.0), 2.0);
        float core = smoothstep(0.18, 0.0, d);
        float prof = mix(0.85, halo * 0.7 + core, k);
        gl_FragColor = vec4(mix(cA, cB, mix(0.35, core, k)), prof * vA * uOpacity);
      }`,
  });
  const pts = new THREE.Points(g, m);
  pts.frustumCulled = false;
  return { points: pts, pos, alpha: a, size: s, wake: w, tint: t, uniforms, geometry: g, material: m };
}

/** Materijal za linije s globalnom prozirnošću. */
export function lineMat(color = '#8aa6ff', opacity = 1, additive = false) {
  return new THREE.LineBasicMaterial({ color, transparent: true, opacity, depthWrite: false, blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending });
}

/** Luk između dvije točke na sferi (radijus 1), podignut ovisno o udaljenosti. */
export function arcPoints(a, b, segs = 48, lift = 0.25) {
  const out = [];
  const ang = a.angleTo(b);
  for (let i = 0; i <= segs; i++) {
    const t = i / segs;
    const p = new THREE.Vector3().copy(a).lerp(b, t).normalize();
    // slerp aproksimacija za veće kutove
    if (ang > 0.01) {
      const s = Math.sin(ang);
      p.copy(a).multiplyScalar(Math.sin((1 - t) * ang) / s).add(new THREE.Vector3().copy(b).multiplyScalar(Math.sin(t * ang) / s));
    }
    p.multiplyScalar(1 + Math.sin(Math.PI * t) * lift * Math.min(1, ang * 1.4));
    out.push(p);
  }
  return out;
}

/** Spremnik za čišćenje GPU resursa. */
export function disposeTree(root) {
  root.traverse((o) => {
    o.geometry?.dispose();
    const ms = Array.isArray(o.material) ? o.material : o.material ? [o.material] : [];
    ms.forEach((m) => { m.map?.dispose(); m.dispose(); });
  });
}
