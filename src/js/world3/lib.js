// Zajednički alati za ZAEC kino-uvod: geo projekcije, materijali, interpolacija.
import * as THREE from 'three';

export const DEG = Math.PI / 180;
export const OSIJEK = [18.6955, 45.555];
export const MAPK = 4; // jedinica karte po stupnju (na Z = 1)
export const COSLAT = Math.cos(45 * DEG);
export const GLOBE_R = 225; // radijus globusa u jedinicama karte (Z = 1)

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

/** Meke svjetleće točke (veličina i prozirnost po točki). */
export function glowPoints({ count, color = '#7fa2ff', core = '#ffffff', size = 1, additive = true, depthTest = true }) {
  const g = new THREE.BufferGeometry();
  const pos = new Float32Array(count * 3);
  const a = new Float32Array(count).fill(1);
  const s = new Float32Array(count).fill(1);
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('aAlpha', new THREE.BufferAttribute(a, 1));
  g.setAttribute('aSize', new THREE.BufferAttribute(s, 1));
  const uniforms = {
    uColor: { value: new THREE.Color(color) },
    uCore: { value: new THREE.Color(core) },
    uSize: { value: size },
    uPR: { value: 1 },
    uOpacity: { value: 1 },
    uMax: { value: 40 },
  };
  const m = new THREE.ShaderMaterial({
    uniforms,
    transparent: true,
    depthWrite: false,
    depthTest,
    blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    vertexShader: /* glsl */ `
      attribute float aAlpha; attribute float aSize;
      uniform float uSize; uniform float uPR; uniform float uMax; varying float vA;
      void main(){
        vA = aAlpha;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        float sc = length(modelMatrix[0].xyz);
        gl_PointSize = min(uMax * uPR, aSize * uSize * uPR * 300.0 * sc / max(0.5, -mv.z));
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */ `
      uniform vec3 uColor; uniform vec3 uCore; uniform float uOpacity; varying float vA;
      void main(){
        float d = length(gl_PointCoord - 0.5);
        if (d > 0.5) discard;
        float halo = pow(1.0 - d * 2.0, 2.0);
        float core = smoothstep(0.18, 0.0, d);
        gl_FragColor = vec4(mix(uColor, uCore, core), (halo * 0.7 + core) * vA * uOpacity);
      }`,
  });
  const pts = new THREE.Points(g, m);
  pts.frustumCulled = false;
  return { points: pts, pos, alpha: a, size: s, uniforms, geometry: g, material: m };
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
