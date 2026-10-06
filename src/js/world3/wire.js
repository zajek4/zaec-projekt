// Scena 04 — arhitektura → crtež → mreža → web: stvarni rubovi modela konkatedrale odvajaju se,
// slažu u mjernu mrežu i zatim u žičani okvir web stranice.
// Scena 05 — ista stranica u "lošoj" i "dobroj" strukturi (morph uBad).
// Scena 06 — web kao infrastruktura: 7 slojeva koji se slažu u jedan sustav.
import * as THREE from 'three';
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


/**
 * Mjerna mreža iz same zgrade: okomice na x-položajima gdje model ima najviše okomitih bridova
 * (kontrafori, rubovi tornja, zabati), vodoravnice na visinama s najviše vodoravnih bridova
 * (sokl, vijenac, sljeme lađe, katovi tornja). Svaki brid se "zalijepi" na najbližu mjernu liniju.
 * Vraća za svaki segment (istim redom) ciljni komadić { a, b }.
 */
function measuredGrid(segs) {
  let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity, zc = 0;
  for (const s of segs) {
    x0 = Math.min(x0, s.a.x, s.b.x); x1 = Math.max(x1, s.a.x, s.b.x);
    y0 = Math.min(y0, s.a.y, s.b.y); y1 = Math.max(y1, s.a.y, s.b.y);
    zc += s.a.z + s.b.z;
  }
  zc /= segs.length * 2;
  const W = x1 - x0 || 1, H = y1 - y0 || 1, NB = 128;
  const hv = new Float32Array(NB), hh = new Float32Array(NB);
  const bin = (t) => Math.min(NB - 1, Math.max(0, Math.floor(t * NB)));
  const vert = [], hor = [];
  segs.forEach((s, i) => {
    const dx = Math.abs(s.b.x - s.a.x), dy = Math.abs(s.b.y - s.a.y);
    if (dy >= dx) { vert.push(i); hv[bin((s.x - x0) / W)] += dy; } else { hor.push(i); hh[bin((s.y - y0) / H)] += dx; }
  });
  const peaks = (h, k, gap) => {
    const order = [...h.keys()].sort((p, q) => h[q] - h[p]);
    const out = [0, NB - 1];
    for (const i of order) {
      if (out.length >= k + 2 || h[i] <= 0) break;
      if (out.every((j) => Math.abs(j - i) >= gap)) out.push(i);
    }
    return out.map((i) => (i + 0.5) / NB).sort((p, q) => p - q);
  };
  const us = peaks(hv, 10, 7), vs = peaks(hh, 8, 7);
  const out = new Array(segs.length);
  // svaki brid ide na najbližu mjernu liniju; na liniji se bridovi slažu redom (po visini / po x)
  const assign = (ids, lines, pos, along, key) => {
    const buckets = lines.map(() => []);
    for (const id of ids) {
      const t = pos(segs[id]);
      let best = 0;
      for (let k = 1; k < lines.length; k++) if (Math.abs(lines[k] - t) < Math.abs(lines[best] - t)) best = k;
      buckets[best].push(id);
    }
    // linija se proteže samo koliko i njezini bridovi → mreža zadržava obris zgrade (toranj visok, lađa niska)
    buckets.forEach((b, li) => {
      if (!b.length) return;
      b.sort((p, q) => key(segs[p]) - key(segs[q]));
      let lo = Infinity, hi = -Infinity;
      for (const id of b) { const r = span(segs[id]); lo = Math.min(lo, r[0]); hi = Math.max(hi, r[1]); }
      b.forEach((id, j) => { out[id] = along(lines[li], lo + (hi - lo) * j / b.length, lo + (hi - lo) * (j + 1) / b.length); });
    });
  };
  let span = (s) => [Math.min(s.a.y, s.b.y), Math.max(s.a.y, s.b.y)];
  assign(vert, us, (s) => (s.x - x0) / W, (u, ya, yb) => ({
    a: new THREE.Vector3(x0 + u * W, ya, zc), b: new THREE.Vector3(x0 + u * W, yb, zc),
  }), (s) => s.y);
  span = (s) => [Math.min(s.a.x, s.b.x), Math.max(s.a.x, s.b.x)];
  assign(hor, vs, (s) => (s.y - y0) / H, (v, xa, xb) => ({
    a: new THREE.Vector3(xa, y0 + v * H, zc), b: new THREE.Vector3(xb, y0 + v * H, zc),
  }), (s) => s.x);
  return out;
}

/* ─────────────────────────── MORPH ─────────────────────────── */

/**
 * @param {THREE.BufferGeometry} edges  rubovi modela konkatedrale (LineSegments geometrija) u svjetskim jedinicama
 * @param {{ max: number }} opts  najveći broj linija (najdulje = najvažnije arhitektonske linije)
 */
export function createMorph(edges, { max = 6000 } = {}) {
  const rand = seeded(303);
  const uniforms = {
    uMorph: { value: 0 },
    uOpacity: { value: 0 },
    uTime: { value: 0 },
    uWarm: { value: new THREE.Color('#ffc6a0') },
    uCool: { value: new THREE.Color('#b8c8ff') },
    uGridCol: { value: new THREE.Color('#7f9bff') },
    uBadCol: { value: new THREE.Color('#ff7a66') },
    uBad: { value: 0 },
    uScanY: { value: 1e4 },
    uScanOn: { value: 0 },
  };
  const mat = new THREE.ShaderMaterial({
    uniforms,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexShader: /* glsl */ `
      attribute vec3 aFrom; attribute vec3 aGrid; attribute vec3 aTo; attribute vec3 aBad; attribute float aDelay; attribute float aSeed;
      uniform float uMorph; uniform float uTime; uniform float uBad; uniform float uScanY; uniform float uScanOn;
      varying float vS1; varying float vS2; varying float vFly; varying float vScan;
      float ease(float t){ return t < 0.5 ? 4.0 * t * t * t : 1.0 - pow(-2.0 * t + 2.0, 3.0) / 2.0; }
      void main(){
        // 0 → 1: rubovi zgrade se odvajaju (najviši prvi) i slažu u mjernu mrežu
        float e1 = ease(clamp((uMorph - aDelay) / 0.4, 0.0, 1.0));
        // 1 → 2: mreža postaje okvir web stranice
        float e2 = ease(clamp((uMorph - 1.0 - aSeed * 0.45) / 0.45, 0.0, 1.0));
        float b = clamp(uBad * 1.5 - aSeed * 0.5, 0.0, 1.0);
        b = b * b * (3.0 - 2.0 * b);
        vec3 site = mix(aTo, aBad, b);
        vec3 p = mix(mix(aFrom, aGrid, e1), site, e2);
        float fly1 = sin(e1 * 3.14159);
        float fly2 = sin(e2 * 3.14159);
        p += vec3((aSeed - 0.5) * 0.5, (aSeed - 0.3) * 0.35, 0.5 + aSeed * 1.6) * fly1;
        p += vec3(0.0, 0.0, 0.6 + aSeed) * fly2 * 0.6;
        p += vec3(sin(uTime * 0.9 + aSeed * 30.0), cos(uTime * 0.7 + aSeed * 20.0), 0.0) * 0.03 * (fly1 + fly2);
        p.z += sin(b * 3.14159) * (0.5 + aSeed);
        vS1 = e1; vS2 = e2; vFly = max(fly1, fly2);
        // skener: crte nacrta postoje samo iznad crte koja se spušta niz zgradu; uz samu crtu su najsvjetlije
        float above = smoothstep(uScanY - 0.06, uScanY + 0.06, aFrom.y);
        float fresh = exp(-pow((aFrom.y - uScanY) / 0.35, 2.0));
        vScan = mix(1.0, above * (1.0 + fresh * 1.5), uScanOn);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }`,
    fragmentShader: /* glsl */ `
      uniform float uOpacity; uniform vec3 uWarm; uniform vec3 uCool; uniform vec3 uGridCol; uniform vec3 uBadCol; uniform float uBad;
      varying float vS1; varying float vS2; varying float vFly; varying float vScan;
      void main(){
        vec3 site = mix(uCool, uBadCol, uBad * 0.8);
        vec3 c = mix(mix(uWarm, uGridCol, vS1), site, vS2);
        float a = uOpacity * (0.52 + 0.33 * vS1 + 0.15 * vS2 + vFly * 0.45) * vScan;
        if (a < 0.003) discard;
        gl_FragColor = vec4(c + vFly * 0.3, a);
      }`,
  });
  const lines = new THREE.LineSegments(new THREE.BufferGeometry(), mat);
  lines.frustumCulled = false;
  lines.renderOrder = 3;

  function build(src) {
    const ep = src.attributes.position.array;
    let segs = [];
    for (let i = 0; i < ep.length; i += 6) {
      const a = new THREE.Vector3(ep[i], ep[i + 1], ep[i + 2]);
      const b = new THREE.Vector3(ep[i + 3], ep[i + 4], ep[i + 5]);
      const L = a.distanceTo(b);
      if (L > 0.02) segs.push({ a, b, L });
    }
    // najdulje linije nose arhitekturu (bridovi, kontrafori, krov, toranj); sitni šum otpada
    segs.sort((p, q) => q.L - p.L);
    segs = segs.slice(0, max);
    segs.forEach((s) => { s.y = (s.a.y + s.b.y) / 2; s.x = (s.a.x + s.b.x) / 2; });
    // faza 1: odozgo prema dolje (vrh tornja se prvi odvaja)
    segs.sort((p, q) => q.y - p.y || p.x - q.x);
    const n = segs.length;
    const grid = measuredGrid(segs);
    // faza 2: mreža → stranica, opet odozgo (po visini komadića na mreži)
    const order = segs.map((_, i) => i).sort((p, q) => {
      const gp = grid[p], gq = grid[q];
      return (gq.a.y + gq.b.y) - (gp.a.y + gp.b.y) || (gp.a.x + gp.b.x) - (gq.a.x + gq.b.x);
    });
    const goodP = piecesOf(SITE, n), badP = piecesOf(SITE_BAD, n);
    const good = new Array(n), bad = new Array(n);
    order.forEach((id, k) => { good[id] = goodP[k]; bad[id] = badP[k]; });
    const F = new Float32Array(n * 6), G = new Float32Array(n * 6), T = new Float32Array(n * 6), B = new Float32Array(n * 6);
    const delay = new Float32Array(n * 2), seed = new Float32Array(n * 2);
    for (let i = 0; i < n; i++) {
      F.set([...segs[i].a.toArray(), ...segs[i].b.toArray()], i * 6);
      G.set([...grid[i].a.toArray(), ...grid[i].b.toArray()], i * 6);
      T.set([...good[i].a.toArray(), ...good[i].b.toArray()], i * 6);
      B.set([...bad[i].a.toArray(), ...bad[i].b.toArray()], i * 6);
      delay[i * 2] = delay[i * 2 + 1] = (i / n) * 0.5 + rand() * 0.08;
      seed[i * 2] = seed[i * 2 + 1] = rand();
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(F.slice(), 3));
    geo.setAttribute('aFrom', new THREE.BufferAttribute(F, 3));
    geo.setAttribute('aGrid', new THREE.BufferAttribute(G, 3));
    geo.setAttribute('aTo', new THREE.BufferAttribute(T, 3));
    geo.setAttribute('aBad', new THREE.BufferAttribute(B, 3));
    geo.setAttribute('aDelay', new THREE.BufferAttribute(delay, 1));
    geo.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));
    geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 5, 0), 40);
    lines.geometry.dispose();
    lines.geometry = geo;
    return n;
  }
  let count = edges ? build(edges) : 0;

  return {
    object: lines,
    get count() { return count; },
    /** Zamijeni izvor (npr. kad se učita pravi model konkatedrale). */
    setSource(src) { count = build(src); },
    update(s) {
      lines.visible = s.opacity > 0.002 && count > 0;
      uniforms.uMorph.value = s.morph;
      uniforms.uOpacity.value = s.opacity;
      uniforms.uTime.value = s.time;
      uniforms.uBad.value = s.bad || 0;
      uniforms.uScanY.value = s.scanY ?? 1e4;
      uniforms.uScanOn.value = s.scanOn || 0;
    },
    dispose() {
      lines.geometry.dispose();
      mat.dispose();
    },
  };
}

/* ─────────────────────────── SLOJEVI ───────────────────────────
   Eksplodirani aksonometrijski stog: svaki sloj je vodoravna ploča na svojoj visini.
   Samo aktivni sloj je u fokusu (kontrast, sadržaj, pomak prema gledatelju); ostali su prigušeni.
   Na kraju se ploče poravnaju i sklope u jedan sustav. */

export const LAYER_DEFS = [
  { code: '01', name: 'Poruka', color: '#6f8cff' },
  { code: '02', name: 'Struktura', color: '#7d93ff' },
  { code: '03', name: 'UX', color: '#8f9bff' },
  { code: '04', name: 'Tehnologija', color: '#a39cf5' },
  { code: '05', name: 'SEO', color: '#c39bdc' },
  { code: '06', name: 'Mjerenje', color: '#e3a3a0' },
  { code: '07', name: 'Konverzija', color: '#ffb23f' },
];

// sadržaj ploča (u, v ∈ [0, 1]) — jednostavni, čitljivi simboli onoga što sloj donosi
function glyphs(i) {
  switch (i) {
    case 0: return [...R(0.1, 0.62, 0.78, 0.78), ...R(0.1, 0.46, 0.6, 0.56), ...L(0.1, 0.36, 0.66, 0.36), ...L(0.1, 0.3, 0.52, 0.3), ...R(0.1, 0.12, 0.34, 0.22)];
    case 1: return [...R(0.42, 0.78, 0.58, 0.9), ...L(0.5, 0.78, 0.5, 0.68), ...L(0.18, 0.68, 0.82, 0.68), ...[0.18, 0.5, 0.82].flatMap((u) => [...L(u, 0.68, u, 0.6), ...R(u - 0.09, 0.48, u + 0.09, 0.6), ...L(u, 0.48, u, 0.38), ...R(u - 0.06, 0.26, u + 0.06, 0.38)])];
    case 2: return [...L(0.1, 0.78, 0.36, 0.78), ...L(0.36, 0.78, 0.36, 0.5), ...L(0.36, 0.5, 0.64, 0.5), ...L(0.64, 0.5, 0.64, 0.22), ...L(0.64, 0.22, 0.88, 0.22), ...L(0.83, 0.27, 0.88, 0.22), ...L(0.83, 0.17, 0.88, 0.22), ...C(0.1, 0.78, 0.025), ...C(0.36, 0.5, 0.025), ...C(0.64, 0.22, 0.025)];
    case 3: return [...L(0.3, 0.7, 0.16, 0.5), ...L(0.16, 0.5, 0.3, 0.3), ...L(0.7, 0.7, 0.84, 0.5), ...L(0.84, 0.5, 0.7, 0.3), ...L(0.57, 0.76, 0.43, 0.24)];
    case 4: return [...R(0.1, 0.72, 0.9, 0.86), ...C(0.84, 0.79, 0.022), ...R(0.1, 0.5, 0.9, 0.62), ...[0, 1].flatMap((k) => [...L(0.14, 0.42 - k * 0.16, 0.6, 0.42 - k * 0.16), ...L(0.14, 0.37 - k * 0.16, 0.8, 0.37 - k * 0.16)])];
    case 5: return [...L(0.12, 0.16, 0.88, 0.16), ...L(0.12, 0.16, 0.12, 0.84), ...[0.22, 0.34, 0.3, 0.46, 0.42, 0.6].flatMap((h, k) => R(0.18 + k * 0.115, 0.16, 0.25 + k * 0.115, 0.16 + h))];
    default: return [...R(0.28, 0.4, 0.72, 0.6), ...L(0.42, 0.5, 0.48, 0.44), ...L(0.48, 0.44, 0.58, 0.56), ...L(0.18, 0.84, 0.82, 0.84), ...L(0.18, 0.84, 0.42, 0.62), ...L(0.82, 0.84, 0.58, 0.62)];
  }
}

export function createLayers() {
  const group = new THREE.Group();
  group.name = 'slojevi';
  group.position.copy(toWorld(0.5, 0.42));
  const W = 11, D = 7;
  const local = (u, v) => [(u - 0.5) * W, 0, -(v - 0.5) * D];
  const segGeo = (list) => {
    const seg = [];
    list.forEach(([u0, v0, u1, v1]) => seg.push(...local(u0, v0), ...local(u1, v1)));
    return new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(seg, 3));
  };
  const frameList = (() => {
    // ploča s malo zaobljenim kutovima (osmerokut) — čitljivija od oštrog pravokutnika
    const k = 0.035;
    return [[k, 0, 1 - k, 0], [1 - k, 0, 1, k], [1, k, 1, 1 - k], [1, 1 - k, 1 - k, 1], [1 - k, 1, k, 1], [k, 1, 0, 1 - k], [0, 1 - k, 0, k], [0, k, k, 0]];
  })();
  const items = LAYER_DEFS.map((d, i) => {
    const g = new THREE.Group();
    const fg = segGeo(frameList);
    const gg = segGeo(glyphs(i));
    const fm = new THREE.LineBasicMaterial({ color: d.color, transparent: true, opacity: 0, depthWrite: false });
    const gm = new THREE.LineBasicMaterial({ color: d.color, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending });
    const pg = new THREE.PlaneGeometry(W, D).rotateX(-Math.PI / 2);
    const pm = new THREE.MeshBasicMaterial({ color: d.color, transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide });
    const plate = new THREE.Mesh(pg, pm);
    plate.renderOrder = 1;
    const frame = new THREE.LineSegments(fg, fm);
    const glyph = new THREE.LineSegments(gg, gm);
    frame.renderOrder = glyph.renderOrder = 2;
    g.add(plate, frame, glyph);
    group.add(g);
    return { g, fm, gm, pm, geos: [fg, gg, pg], e: 0, arr: 0 };
  });
  const corner = new THREE.Vector3();

  return {
    group,
    /** s: { p (0..1 dolazak), assemble (0..1), alpha, active (indeks aktivnog sloja ili −1), dt } */
    update(s) {
      group.visible = s.alpha > 0.002;
      if (!group.visible) return;
      const asm = s.assemble || 0;
      const gap = 1.55 + (0.16 - 1.55) * asm;
      const arrive = s.p * 8;
      const k = 1 - Math.exp(-(s.dt || 0.016) * 7);
      items.forEach((it, i) => {
        // ploča stiže sa scrollom, a aktivni sloj (i svi iznad njega) uvijek je na mjestu
        const want = Math.max(Math.min(1, Math.max(0, arrive - i)), s.active >= i ? 1 : 0);
        it.arr += (want - it.arr) * (s.reduce ? 1 : k);
        const ea = 1 - Math.pow(1 - it.arr, 3);
        it.e += ((s.active === i ? 1 : 0) - it.e) * (s.reduce ? 1 : k);
        const e = it.e * (1 - asm);
        // aktivni sloj izlazi prema gledatelju i malo se podiže
        it.g.position.set(e * 1.1, (3 - i) * gap + (1 - ea) * -4 + e * 0.35, e * 0.9);
        const base = s.alpha * ea;
        it.pm.opacity = base * (0.035 + 0.1 * e + 0.05 * asm);
        it.fm.opacity = base * (0.22 + 0.78 * e + 0.5 * asm);
        it.gm.opacity = base * (0.05 + 0.95 * e + 0.3 * asm);
      });
    },
    /** lijevi rub sloja (za DOM oznaku) */
    anchor(i, out = corner) {
      return out.set(-W / 2, 0, D * 0.2).applyMatrix4(items[i].g.matrixWorld);
    },
    emphasis: (i) => items[i].e,
    arrival: (i) => items[i].arr,
    dispose() {
      items.forEach((it) => { it.geos.forEach((g) => g.dispose()); it.fm.dispose(); it.gm.dispose(); it.pm.dispose(); });
    },
  };
}
