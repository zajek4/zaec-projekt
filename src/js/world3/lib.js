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

/**
 * Meke svjetleće točke (veličina, prozirnost i prag "buđenja" po točki).
 * Udaljene točke ne ostaju umjetno velike: ispod uMin piksela gube svjetlinu (uFall), pa gust skup
 * točaka iz daljine izgleda kao jedan mekan sjaj, a ne kao tepih jednakih piksela koji naglo iskoči.
 * aWake + uWake: točke se pale pojedinačno (grad se budi), uFlick: sporo paljenje/gašenje (prozori) na GPU-u.
 */
export function glowPoints({ count, color = '#7fa2ff', core = '#ffffff', size = 1, additive = true, depthTest = true, bend = false, nightOnly = false }) {
  const g = new THREE.BufferGeometry();
  const pos = new Float32Array(count * 3);
  const a = new Float32Array(count).fill(1);
  const s = new Float32Array(count).fill(1);
  const w = new Float32Array(count);
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('aAlpha', new THREE.BufferAttribute(a, 1));
  g.setAttribute('aSize', new THREE.BufferAttribute(s, 1));
  g.setAttribute('aWake', new THREE.BufferAttribute(w, 1));
  const uniforms = {
    uColor: { value: new THREE.Color(color) },
    uCore: { value: new THREE.Color(core) },
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
      uniform float uSize; uniform float uPR; uniform float uMax; uniform float uMin; uniform float uFall; uniform float uWake; uniform float uTime; uniform float uFlick;
      varying float vA; varying float vPx;
      ${bend || nightOnly ? BEND_GLSL : ''}
      ${nightOnly ? 'uniform vec3 uSunMap; uniform vec2 uDayEdge;' : ''}
      void main(){
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
      uniform vec3 uColor; uniform vec3 uCore; uniform float uOpacity; varying float vA; varying float vPx;
      void main(){
        if (vA < 0.004) discard;
        float d = length(gl_PointCoord - 0.5);
        // točka od 1–3 px: profil sjaja bi se uzorkovao izvan središta (svjetlo bi gotovo nestalo) — tada je pun disk
        float k = clamp((vPx - 1.5) / 3.0, 0.0, 1.0);
        if (d > mix(0.75, 0.5, k)) discard;
        float halo = pow(max(1.0 - d * 2.0, 0.0), 2.0);
        float core = smoothstep(0.18, 0.0, d);
        float prof = mix(0.85, halo * 0.7 + core, k);
        gl_FragColor = vec4(mix(uColor, uCore, mix(0.35, core, k)), prof * vA * uOpacity);
      }`,
  });
  const pts = new THREE.Points(g, m);
  pts.frustumCulled = false;
  return { points: pts, pos, alpha: a, size: s, wake: w, uniforms, geometry: g, material: m };
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
