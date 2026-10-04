// Scena 04 — arhitektura → web: rubovi konkatedrale lete i slažu se u žičani okvir web stranice.
// Scena 05 — ista stranica u "lošoj" i "dobroj" strukturi (morph uBad).
// Scena 06 — web kao infrastruktura: 7 slojeva koji se slažu u jedan sustav.
import * as THREE from 'three';
import { cathedralEdges } from './cathedral.js';
import { seeded } from './lib.js';

/* ── geometrija preglednika (normalizirano u,v ∈ [0,1], v = 1 je vrh) ── */
export const FRAME = { x0: -5.6, y0: 0.7, w: 12, h: 8 };
export const toWorld = (u, v, z = 0, out = new THREE.Vector3()) => out.set(FRAME.x0 + u * FRAME.w, FRAME.y0 + v * FRAME.h, z);

const R = (u0, v0, u1, v1) => [[u0, v0, u1, v0], [u1, v0, u1, v1], [u1, v1, u0, v1], [u0, v1, u0, v0]];
const L = (u0, v0, u1, v1) => [[u0, v0, u1, v1]];
const C = (u, v, r = 0.008, n = 8) => {
  const out = [];
  for (let i = 0; i < n; i++) {
    const a0 = (i / n) * Math.PI * 2, a1 = ((i + 1) / n) * Math.PI * 2;
    out.push([u + Math.cos(a0) * r, v + Math.sin(a0) * r * 1.5, u + Math.cos(a1) * r, v + Math.sin(a1) * r * 1.5]);
  }
  return out;
};

/** Dobra stranica: jasna poruka, dokazi, sadržaj, jedan poziv na akciju. */
export const SITE = {
  frame: [...R(0, 0, 1, 1), ...L(0, 0.925, 1, 0.925), ...C(0.025, 0.962), ...C(0.045, 0.962), ...C(0.065, 0.962), ...R(0.3, 0.945, 0.7, 0.98)],
  nav: [...R(0.04, 0.85, 0.11, 0.895), ...L(0.5, 0.872, 0.56, 0.872), ...L(0.59, 0.872, 0.65, 0.872), ...L(0.68, 0.872, 0.74, 0.872), ...R(0.84, 0.85, 0.96, 0.895)],
  hero: [...R(0.05, 0.72, 0.52, 0.785), ...R(0.05, 0.645, 0.44, 0.71), ...L(0.05, 0.6, 0.47, 0.6), ...L(0.05, 0.575, 0.4, 0.575), ...R(0.05, 0.49, 0.19, 0.545), ...R(0.21, 0.49, 0.33, 0.545)],
  visual: [...R(0.58, 0.49, 0.95, 0.79), ...L(0.58, 0.49, 0.95, 0.79), ...L(0.58, 0.79, 0.95, 0.49)],
  proof: [0, 1, 2, 3, 4].flatMap((i) => R(0.05 + i * 0.185, 0.4, 0.19 + i * 0.185, 0.43)),
  cards: [0, 1, 2].flatMap((i) => {
    const u0 = 0.05 + i * 0.31;
    return [...R(u0, 0.14, u0 + 0.28, 0.34), ...L(u0 + 0.02, 0.3, u0 + 0.2, 0.3), ...L(u0 + 0.02, 0.27, u0 + 0.25, 0.27), ...L(u0 + 0.02, 0.245, u0 + 0.22, 0.245)];
  }),
  cta: [...R(0.32, 0.025, 0.68, 0.085), ...L(0.05, 0.11, 0.95, 0.11)],
};

/** Loša verzija iste stranice: slider, zid teksta, skriven poziv na akciju. */
export const SITE_BAD = {
  frame: SITE.frame,
  nav: [...R(0.4, 0.835, 0.6, 0.9), ...[0, 1, 2, 3, 4, 5, 6, 7, 8].flatMap((i) => L(0.05 + i * 0.1, 0.81, 0.12 + i * 0.1, 0.81))],
  slider: [...R(0.03, 0.44, 0.97, 0.78), ...R(0.3, 0.6, 0.7, 0.625), ...C(0.07, 0.61, 0.02), ...C(0.93, 0.61, 0.02), ...[0.44, 0.48, 0.52, 0.56].flatMap((u) => C(u, 0.47, 0.006, 6))],
  wall: [0, 1, 2, 3, 4, 5, 6, 7, 8].flatMap((i) => L(0.05, 0.38 - i * 0.026, 0.95 - (i % 3) * 0.04, 0.38 - i * 0.026)),
  icons: [0, 1, 2, 3, 4, 5].flatMap((i) => C(0.12 + i * 0.152, 0.1, 0.022)),
  cta: [...R(0.86, 0.022, 0.95, 0.042), ...L(0.05, 0.06, 0.95, 0.06)],
};

/** Točke kroz koje prolazi posjetitelj (u,v). */
export const ZONES = {
  entry: [0.07, 0.9],
  message: [0.29, 0.715],
  trust: [0.5, 0.415],
  content: [0.5, 0.24],
  cta: [0.5, 0.055],
};

const flat = (o) => Object.values(o).flat();

/** Segmente izgleda podijeli na točno n komadića (proporcionalno duljini), sortirano odozgo. */
function piecesOf(layout, n) {
  const site = flat(layout).map(([u0, v0, u1, v1]) => ({ a: toWorld(u0, v0), b: toWorld(u1, v1) }));
  const total = site.reduce((s, g) => s + g.a.distanceTo(g.b), 0);
  const pieces = [];
  let remaining = n;
  site.forEach((g, gi) => {
    const len = g.a.distanceTo(g.b);
    let k = gi === site.length - 1 ? remaining : Math.max(1, Math.round((len / total) * n));
    k = Math.max(0, Math.min(k, remaining - (site.length - 1 - gi)));
    remaining -= k;
    for (let j = 0; j < k; j++) {
      const a = g.a.clone().lerp(g.b, j / k);
      const b = g.a.clone().lerp(g.b, (j + 1) / k);
      pieces.push({ a, b, y: (a.y + b.y) / 2, x: (a.x + b.x) / 2 });
    }
  });
  while (pieces.length < n) pieces.push(pieces[pieces.length - 1]);
  pieces.length = n;
  return pieces.sort((p, q) => q.y - p.y || p.x - q.x);
}

/* ─────────────────────────── MORPH ─────────────────────────── */

export function createMorph(cathGeo) {
  const rand = seeded(303);
  const edges = cathedralEdges(cathGeo, 22);
  const ep = edges.attributes.position.array;
  const nSeg = ep.length / 6;

  // izvor: rubovi konkatedrale, sortirani odozgo prema dolje
  const src = [];
  for (let i = 0; i < nSeg; i++) {
    const a = new THREE.Vector3(ep[i * 6], ep[i * 6 + 1], ep[i * 6 + 2]);
    const b = new THREE.Vector3(ep[i * 6 + 3], ep[i * 6 + 4], ep[i * 6 + 5]);
    src.push({ a, b, y: (a.y + b.y) / 2, x: (a.x + b.x) / 2 });
  }
  src.sort((p, q) => q.y - p.y || p.x - q.x);

  // cilj: dobra i loša verzija stranice, svaka podijeljena na nSeg komadića
  const good = piecesOf(SITE, nSeg);
  const bad = piecesOf(SITE_BAD, nSeg);

  const from = new Float32Array(nSeg * 6);
  const to = new Float32Array(nSeg * 6);
  const toBad = new Float32Array(nSeg * 6);
  const delay = new Float32Array(nSeg * 2);
  const seed = new Float32Array(nSeg * 2);
  for (let i = 0; i < nSeg; i++) {
    from.set([...src[i].a.toArray(), ...src[i].b.toArray()], i * 6);
    to.set([...good[i].a.toArray(), ...good[i].b.toArray()], i * 6);
    toBad.set([...bad[i].a.toArray(), ...bad[i].b.toArray()], i * 6);
    const d = (i / nSeg) * 0.55 + rand() * 0.12;
    const sd = rand();
    delay[i * 2] = delay[i * 2 + 1] = d;
    seed[i * 2] = seed[i * 2 + 1] = sd;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(from.slice(), 3));
  geo.setAttribute('aFrom', new THREE.BufferAttribute(from, 3));
  geo.setAttribute('aTo', new THREE.BufferAttribute(to, 3));
  geo.setAttribute('aBad', new THREE.BufferAttribute(toBad, 3));
  geo.setAttribute('aDelay', new THREE.BufferAttribute(delay, 1));
  geo.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));
  geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 5, 0), 30);
  edges.dispose();

  const uniforms = {
    uMorph: { value: 0 },
    uOpacity: { value: 0 },
    uTime: { value: 0 },
    uWarm: { value: new THREE.Color('#ffc9a3') },
    uCool: { value: new THREE.Color('#b8c8ff') },
    uBadCol: { value: new THREE.Color('#ff7a66') },
    uFocus: { value: 0 },
    uBad: { value: 0 },
  };
  const mat = new THREE.ShaderMaterial({
    uniforms,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexShader: /* glsl */ `
      attribute vec3 aFrom; attribute vec3 aTo; attribute vec3 aBad; attribute float aDelay; attribute float aSeed;
      uniform float uMorph; uniform float uTime; uniform float uBad; varying float vT;
      void main(){
        float t = clamp((uMorph - aDelay) / 0.42, 0.0, 1.0);
        float e = t < 0.5 ? 4.0 * t * t * t : 1.0 - pow(-2.0 * t + 2.0, 3.0) / 2.0;
        float b = clamp(uBad * 1.5 - aSeed * 0.5, 0.0, 1.0);
        b = b * b * (3.0 - 2.0 * b);
        vec3 p = mix(aFrom, mix(aTo, aBad, b), e);
        float arc = sin(e * 3.14159);
        p += vec3((aSeed - 0.5) * 2.2, (aSeed - 0.3) * 1.6, 1.4 + aSeed * 2.6) * arc;
        p += vec3(sin(uTime * 0.9 + aSeed * 30.0), cos(uTime * 0.7 + aSeed * 20.0), 0.0) * 0.04 * arc;
        p.z += sin(b * 3.14159) * (0.5 + aSeed);
        vT = e;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }`,
    fragmentShader: /* glsl */ `
      uniform float uOpacity; uniform vec3 uWarm; uniform vec3 uCool; uniform vec3 uBadCol; uniform float uFocus; uniform float uBad; varying float vT;
      void main(){
        vec3 c = mix(uWarm, mix(uCool, uBadCol, uBad * 0.8), vT);
        float flare = sin(vT * 3.14159);
        gl_FragColor = vec4(c + flare * 0.35, uOpacity * (0.55 + 0.45 * vT + flare * 0.4) * (1.0 - uFocus * 0.55));
      }`,
  });
  const lines = new THREE.LineSegments(geo, mat);
  lines.frustumCulled = false;
  lines.renderOrder = 3;

  return {
    object: lines,
    count: nSeg,
    update(s) {
      lines.visible = s.opacity > 0.002;
      uniforms.uMorph.value = s.morph;
      uniforms.uOpacity.value = s.opacity;
      uniforms.uTime.value = s.time;
      uniforms.uFocus.value = s.focus || 0;
      uniforms.uBad.value = s.bad || 0;
    },
    dispose() {
      geo.dispose();
      mat.dispose();
    },
  };
}

/* ─────────────────────────── SLOJEVI ─────────────────────────── */

export const LAYER_DEFS = [
  { code: '01', name: 'Poruka', color: '#4f73ff' },
  { code: '02', name: 'Struktura', color: '#5a7cff' },
  { code: '03', name: 'UX', color: '#6f84ff' },
  { code: '04', name: 'Tehnologija', color: '#8c8bf2' },
  { code: '05', name: 'SEO', color: '#b98ed8' },
  { code: '06', name: 'Mjerenje', color: '#e3999a' },
  { code: '07', name: 'Konverzija', color: '#ffb23f' },
];

function glyphs(i) {
  switch (i) {
    case 0: return [...R(0.08, 0.62, 0.7, 0.76), ...R(0.08, 0.46, 0.55, 0.58), ...L(0.08, 0.36, 0.6, 0.36), ...L(0.08, 0.3, 0.5, 0.3)];
    case 1: return [...R(0.42, 0.78, 0.58, 0.88), ...L(0.5, 0.78, 0.5, 0.68), ...L(0.2, 0.68, 0.8, 0.68), ...[0.2, 0.5, 0.8].flatMap((u) => [...L(u, 0.68, u, 0.6), ...R(u - 0.08, 0.5, u + 0.08, 0.6), ...L(u, 0.5, u, 0.42), ...R(u - 0.05, 0.34, u + 0.05, 0.42)])];
    case 2: return [...L(0.1, 0.75, 0.35, 0.75), ...L(0.35, 0.75, 0.35, 0.5), ...L(0.35, 0.5, 0.65, 0.5), ...L(0.65, 0.5, 0.65, 0.25), ...L(0.65, 0.25, 0.88, 0.25), ...L(0.84, 0.29, 0.88, 0.25), ...L(0.84, 0.21, 0.88, 0.25), ...C(0.1, 0.75, 0.02), ...C(0.35, 0.5, 0.02), ...C(0.65, 0.25, 0.02)];
    case 3: return [...L(0.25, 0.65, 0.15, 0.5), ...L(0.15, 0.5, 0.25, 0.35), ...L(0.75, 0.65, 0.85, 0.5), ...L(0.85, 0.5, 0.75, 0.35), ...L(0.56, 0.7, 0.44, 0.3), ...[0, 1, 2, 3].flatMap((k) => R(0.32 + k * 0.1, 0.12, 0.4 + k * 0.1, 0.2))];
    case 4: return [...R(0.1, 0.74, 0.9, 0.84), ...C(0.85, 0.79, 0.018), ...[0, 1, 2, 3].flatMap((k) => [...L(0.1, 0.62 - k * 0.13, 0.45, 0.62 - k * 0.13), ...L(0.1, 0.58 - k * 0.13, 0.75, 0.58 - k * 0.13)])];
    case 5: return [...L(0.1, 0.15, 0.9, 0.15), ...L(0.1, 0.15, 0.1, 0.85), ...[0.25, 0.4, 0.33, 0.55, 0.48, 0.7].flatMap((h, k) => R(0.16 + k * 0.12, 0.15, 0.24 + k * 0.12, 0.15 + h))];
    default: return [...R(0.3, 0.42, 0.7, 0.58), ...L(0.42, 0.5, 0.48, 0.45), ...L(0.48, 0.45, 0.58, 0.55), ...L(0.15, 0.85, 0.85, 0.85), ...L(0.15, 0.85, 0.4, 0.6), ...L(0.85, 0.85, 0.6, 0.6), ...L(0.4, 0.25, 0.6, 0.25)];
  }
}

export function createLayers() {
  const group = new THREE.Group();
  group.name = 'slojevi';
  group.position.copy(toWorld(0.5, 0.5));
  const items = LAYER_DEFS.map((d, i) => {
    const g = new THREE.Group();
    const seg = [];
    const local = (u, v) => [(u - 0.5) * FRAME.w, (v - 0.5) * FRAME.h, 0];
    [...R(0, 0, 1, 1), ...glyphs(i)].forEach(([u0, v0, u1, v1]) => seg.push(...local(u0, v0), ...local(u1, v1)));
    const lg = new THREE.BufferGeometry();
    lg.setAttribute('position', new THREE.Float32BufferAttribute(seg, 3));
    const lm = new THREE.LineBasicMaterial({ color: d.color, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending });
    const lines = new THREE.LineSegments(lg, lm);
    const fg = new THREE.PlaneGeometry(FRAME.w, FRAME.h);
    const fm = new THREE.MeshBasicMaterial({ color: d.color, transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending });
    g.add(new THREE.Mesh(fg, fm), lines);
    group.add(g);
    return { g, lm, fm, lg, fg };
  });
  const corner = new THREE.Vector3();

  return {
    group,
    /** s.p: 0..1 dolazak i slaganje slojeva, s.alpha, s.hover (indeks ili −1) */
    update(s) {
      group.visible = s.alpha > 0.002;
      if (!group.visible) return;
      const p = s.p * 8.2;
      const compress = Math.min(1, Math.max(0, p - 7.2));
      const spread = 1.55, tight = 0.22;
      items.forEach((it, i) => {
        const a = Math.min(1, Math.max(0, p - i));
        const e = 1 - Math.pow(1 - a, 3);
        const z = (3 - i) * (spread + (tight - spread) * compress);
        it.g.position.set((1 - e) * 9, (1 - e) * 5, z + (1 - e) * 6);
        it.g.rotation.set((1 - e) * -0.5, (1 - e) * 0.9, (1 - e) * 0.3);
        const hot = s.hover === i ? 1 : 0;
        it.lm.opacity = s.alpha * e * (0.7 + hot * 0.3 + compress * 0.2);
        it.fm.opacity = s.alpha * e * (0.04 + hot * 0.14 + compress * 0.03);
      });
    },
    /** gornji lijevi kut sloja u svjetskim koordinatama (za DOM oznake) */
    anchor(i, out = corner) {
      return out.set(-FRAME.w / 2, FRAME.h * 0.32, 0).applyMatrix4(items[i].g.matrixWorld);
    },
    dispose() {
      items.forEach((it) => { it.lg.dispose(); it.lm.dispose(); it.fm.dispose(); it.fg.dispose(); });
    },
  };
}
