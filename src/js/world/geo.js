// Pomoćne funkcije za low-poly geometriju s bojama po vrhovima.
import * as THREE from 'three';
import { mergeGeometries, mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

export function rng(seed = 1) {
  let s = seed >>> 0;
  return function () {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const _c = new THREE.Color();
const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _e = new THREE.Euler();
const _p = new THREE.Vector3();
const _s = new THREE.Vector3();

/** Pretvori u ne-indeksiranu geometriju s jednom bojom (flat look). */
export function paint(geo, color) {
  const g = geo.index ? geo.toNonIndexed() : geo;
  geo !== g && geo.dispose();
  if (g.attributes.uv) g.deleteAttribute('uv');
  if (g.attributes.normal) g.deleteAttribute('normal');
  _c.set(color);
  const n = g.attributes.position.count;
  const arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    arr[i * 3] = _c.r;
    arr[i * 3 + 1] = _c.g;
    arr[i * 3 + 2] = _c.b;
  }
  g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  return g;
}

export function xform(g, { pos = [0, 0, 0], rot = [0, 0, 0], scale = 1 } = {}) {
  const sc = Array.isArray(scale) ? scale : [scale, scale, scale];
  _e.set(rot[0], rot[1], rot[2]);
  _q.setFromEuler(_e);
  _m.compose(_p.set(pos[0], pos[1], pos[2]), _q, _s.set(sc[0], sc[1], sc[2]));
  g.applyMatrix4(_m);
  return g;
}

/** Nasumično pomakni vrhove (dijeljeni vrhovi ostaju spojeni). */
export function jitter(geo, amount, rand, { y = true, keepTop = null } = {}) {
  let g = geo;
  if (g.attributes.normal) g.deleteAttribute('normal');
  if (g.attributes.uv) g.deleteAttribute('uv');
  g = mergeVertices(g, 1e-4);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const vy = p.getY(i);
    if (keepTop !== null && vy >= keepTop - 1e-4) {
      p.setX(i, p.getX(i) + (rand() - 0.5) * amount);
      p.setZ(i, p.getZ(i) + (rand() - 0.5) * amount);
      continue;
    }
    p.setX(i, p.getX(i) + (rand() - 0.5) * amount);
    if (y) p.setY(i, vy + (rand() - 0.5) * amount);
    p.setZ(i, p.getZ(i) + (rand() - 0.5) * amount);
  }
  return g;
}

/** Kutija s bazom na y=0. */
export function box(w, h, d) {
  const g = new THREE.BoxGeometry(w, h, d);
  g.translate(0, h / 2, 0);
  return g;
}

/** Dvostrešni krov: dužina po X, širina po Z, visina sljemena. */
export function gable(len, wid, h) {
  const l = len / 2, w = wid / 2;
  const v = [
    // lijevi zabat
    -l, 0, -w, -l, 0, w, -l, h, 0,
    // desni zabat
    l, 0, w, l, 0, -w, l, h, 0,
    // prednja kosina
    -l, 0, w, l, 0, w, l, h, 0,
    -l, 0, w, l, h, 0, -l, h, 0,
    // stražnja kosina
    l, 0, -w, -l, 0, -w, -l, h, 0,
    l, 0, -w, -l, h, 0, l, h, 0,
    // dno
    -l, 0, -w, l, 0, -w, l, 0, w,
    -l, 0, -w, l, 0, w, -l, 0, w,
  ];
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(v, 3));
  return g;
}

export function cyl(rt, rb, h, seg = 6) {
  const g = new THREE.CylinderGeometry(rt, rb, h, seg, 1);
  g.translate(0, h / 2, 0);
  return g;
}

export function cone(r, h, seg = 6) {
  const g = new THREE.ConeGeometry(r, h, seg, 1);
  g.translate(0, h / 2, 0);
  return g;
}

/** Traka uzduž krivulje (ceste, rijeke). */
export function ribbon(curve, width, segments, y = 0.02, closed = false) {
  const pos = [];
  const pts = curve.getSpacedPoints(segments);
  const tan = new THREE.Vector3();
  for (let i = 0; i < pts.length; i++) {
    const t = i / segments;
    curve.getTangentAt(Math.min(t, 1), tan);
    const nx = -tan.z, nz = tan.x;
    const len = Math.hypot(nx, nz) || 1;
    const ox = (nx / len) * width * 0.5, oz = (nz / len) * width * 0.5;
    pos.push([pts[i].x - ox, y, pts[i].z - oz], [pts[i].x + ox, y, pts[i].z + oz]);
  }
  const v = [];
  const n = closed ? pts.length : pts.length - 1;
  for (let i = 0; i < n; i++) {
    const a = pos[i * 2], b = pos[i * 2 + 1];
    const j = (i + 1) % pts.length;
    const c = pos[j * 2], d = pos[j * 2 + 1];
    v.push(...a, ...b, ...c, ...b, ...d, ...c);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(v, 3));
  return g;
}

export class Builder {
  constructor() { this.parts = []; }
  add(geo, color, t) {
    const g = paint(geo, color);
    if (t) xform(g, t);
    this.parts.push(g);
    return g;
  }
  push(g) { this.parts.push(g); return g; }
  /** Dodaj sve dijelove drugog buildera s transformacijom (npr. kuća na poziciju). */
  absorb(other, t) {
    other.parts.forEach((g) => { if (t) xform(g, t); this.parts.push(g); });
    other.parts = [];
  }
  merge() {
    if (!this.parts.length) return null;
    const m = mergeGeometries(this.parts, false);
    this.parts.forEach((g) => g.dispose());
    this.parts = [];
    m.computeVertexNormals();
    m.computeBoundingSphere();
    return m;
  }
}

export const lerp = (a, b, t) => a + (b - a) * t;
export const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
export const smooth = (t) => t * t * (3 - 2 * t);
export const damp = (c, t, l, dt) => c + (t - c) * (1 - Math.exp(-l * dt));

const _a = new THREE.Vector3(), _b = new THREE.Vector3(), _cc = new THREE.Vector3(), _ab = new THREE.Vector3(), _ac = new THREE.Vector3();
/** Oboji svaki trokut prema normali/centru: fn(normal, cx, cy, cz) → boja. */
export function paintFaces(geo, fn) {
  const g = geo.index ? geo.toNonIndexed() : geo;
  if (g.attributes.uv) g.deleteAttribute('uv');
  if (g.attributes.normal) g.deleteAttribute('normal');
  const p = g.attributes.position;
  const col = new Float32Array(p.count * 3);
  for (let i = 0; i < p.count; i += 3) {
    _a.fromBufferAttribute(p, i); _b.fromBufferAttribute(p, i + 1); _cc.fromBufferAttribute(p, i + 2);
    _ab.subVectors(_b, _a); _ac.subVectors(_cc, _a); _ab.cross(_ac).normalize();
    _c.set(fn(_ab, (_a.x + _b.x + _cc.x) / 3, (_a.y + _b.y + _cc.y) / 3, (_a.z + _b.z + _cc.z) / 3));
    for (let k = 0; k < 3; k++) { col[(i + k) * 3] = _c.r; col[(i + k) * 3 + 1] = _c.g; col[(i + k) * 3 + 2] = _c.b; }
  }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  return g;
}
