// Konkatedrala sv. Petra i Pavla, Osijek — parametarski model za web (izvor istine za GLB).
//
// Mjere: tlocrt iz OpenStreetMapa (way 834820275, ishodište = težište tlocrta, kao u city.bin) i fotografije
// (zrakoplovne i s trga) uz Higgsfield rekonstrukcije nedostajućih pogleda (bočno pročelje, tlocrt krovova,
// pročelje tornja, apsida — nano_banana_2, više referenci). Svaki dio je ovdje izmjeren u metrima.
//
// Koordinate izlaza (glTF, y gore): x = istok, y = gore, z = −sjever, metri. Os broda leži na sjeveru −1 m.
// Toranj je na istoku (prema Trgu Ante Starčevića), apsida na zapadu.
//
// Materijal se prenosi bojom vrha: COLOR_0.rgb = boja, COLOR_0.a = vrsta / 4
//   (0 cigla, 1 kamen, 2 škriljevac, 3 vitraj, 4 metal). Shader u city.js dodaje sljubnice, reflektore i vitraje.
//
//   node tools/cathedral/build-cathedral.mjs      → tools/cathedral/out/konkatedrala-src.glb
//   npm run cathedral   → izvor + gltfpack (meshopt, kvantizacija) → zaec/assets/models/konkatedrala.glb
import fs from 'node:fs';
import path from 'node:path';
import * as THREE from 'three';

const OUT = path.resolve('tools/cathedral/out');
fs.mkdirSync(OUT, { recursive: true });

/* ───────────────────────── materijali ───────────────────────── */
const KIND = { brick: 0, stone: 1, slate: 2, glass: 3, metal: 4 };
const PAL = {
  brick: ['#9b4431', 2], brickD: ['#8c3c2b', 2], stone: ['#cfbd9c', 1], stoneD: ['#b9a684', 1],
  slate: ['#39404e', 2], slateL: ['#4a5262', 2], glass: ['#2b1e17', 3], door: ['#1b1714', 2],
  metal: ['#2c323e', 4], gold: ['#c9a35c', 1],
};
let seed = 7;
const rand = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
const pos = [];
const col = [];
const C = new THREE.Color();
let A = 0;
let jit = 0;
function use(name, j = 0.05) {
  const [hex, kind] = PAL[name];
  C.set(hex);
  A = KIND[Object.keys(KIND)[kind]] / 4;
  jit = j;
}
function tri(a, b, c) {
  const k = 1 + (rand() - 0.5) * jit;
  pos.push(a[0], a[1], a[2], b[0], b[1], b[2], c[0], c[1], c[2]);
  for (let i = 0; i < 3; i++) col.push(C.r * k, C.g * k, C.b * k, A);
}
const quad = (a, b, c, d) => { tri(a, b, c); tri(a, c, d); };

/* Sjaj prozora: zasebna mreža (meki prsten oko svakog vitraja, alfa 1 → 0 prema van).
   Crta se aditivno — izgleda kao "bloom" bez ijednog prolaza naknadne obrade. */
const hPos = [];
const hCol = [];
function haloRing(o, n, outline, grow, off, k = 1) {
  const [ou, oy, ow] = o, [nu, nw] = n;
  const ru = -nw, rw = nu;
  let cs = 0, ct = 0;
  outline.forEach(([sx, t]) => { cs += sx; ct += t; });
  cs /= outline.length; ct /= outline.length;
  const at = (sx, t) => P(ou + ru * sx + nu * off, oy + t, ow + rw * sx + nw * off);
  const inner = outline.map(([sx, t]) => at(sx, t));
  const outer = outline.map(([sx, t]) => { const dx = sx - cs, dt = t - ct, L = Math.hypot(dx, dt) || 1; return at(sx + (dx / L) * grow, t + (dt / L) * grow); });
  const push = (p, a) => { hPos.push(p[0], p[1], p[2]); hCol.push(1, 0.8, 0.38, a * k); };
  for (let i = 0; i < outline.length; i++) {
    const j = (i + 1) % outline.length;
    push(inner[i], 1); push(outer[i], 0); push(outer[j], 0);
    push(inner[i], 1); push(outer[j], 0); push(inner[j], 1);
  }
  // unutrašnjost: blagi sjaj i preko samog stakla (jezgra svjetla)
  const c = at(cs, ct);
  for (let i = 0; i < outline.length; i++) { const j = (i + 1) % outline.length; push(c, 0.55); push(inner[i], 1); push(inner[j], 1); }
}

/* Lokalni okvir: u = duž osi (istok), w = poprečno (sjever), y = gore. Izlaz: x = u, z = 1 − w. */
const P = (u, y, w) => [u, y, 1 - w];

/* ───────────────────────── osnovni oblici ───────────────────────── */
/** kvadar bez dna */
function box(u0, u1, y0, y1, w0, w1) {
  const a = P(u0, y0, w0), b = P(u1, y0, w0), c = P(u1, y0, w1), d = P(u0, y0, w1);
  const e = P(u0, y1, w0), f = P(u1, y1, w0), g = P(u1, y1, w1), h = P(u0, y1, w1);
  quad(a, b, f, e); quad(b, c, g, f); quad(c, d, h, g); quad(d, a, e, h); quad(e, f, g, h);
}
const boxC = (u, w, y0, y1, hu, hw) => box(u - hu, u + hu, y0, y1, w - hw, w + hw);

/** pravilni n-kut: zidovi (+ gornja ploha) */
function prism(u, w, r, y0, y1, n, rot = 0, cap = true) {
  const pts = [];
  for (let i = 0; i < n; i++) { const t = rot + (i / n) * Math.PI * 2; pts.push([u + Math.cos(t) * r, w + Math.sin(t) * r]); }
  for (let i = 0; i < n; i++) {
    const [ua, wa] = pts[i], [ub, wb] = pts[(i + 1) % n];
    quad(P(ua, y0, wa), P(ub, y0, wb), P(ub, y1, wb), P(ua, y1, wa));
  }
  if (cap) for (let i = 1; i < n - 1; i++) tri(P(pts[0][0], y1, pts[0][1]), P(pts[i][0], y1, pts[i][1]), P(pts[i + 1][0], y1, pts[i + 1][1]));
}
/** n-terostrana piramida (r0 pri y0 → vrh) ili krnja (r1 > 0) */
function spire(u, w, r0, y0, y1, n, rot = 0, r1 = 0) {
  for (let i = 0; i < n; i++) {
    const t0 = rot + (i / n) * Math.PI * 2, t1 = rot + ((i + 1) / n) * Math.PI * 2;
    const a = P(u + Math.cos(t0) * r0, y0, w + Math.sin(t0) * r0), b = P(u + Math.cos(t1) * r0, y0, w + Math.sin(t1) * r0);
    if (r1 > 0) quad(a, b, P(u + Math.cos(t1) * r1, y1, w + Math.sin(t1) * r1), P(u + Math.cos(t0) * r1, y1, w + Math.sin(t0) * r1));
    else tri(a, b, P(u, y1, w));
  }
}
/** dvostrešni krov: os 'u' ili 'w'; zabati (trokuti) u zadanom materijalu */
function gableRoof(u0, u1, w0, w1, y0, y1, axis, roofMat, gableMat) {
  if (axis === 'u') {
    const wm = (w0 + w1) / 2;
    use(roofMat);
    quad(P(u0, y0, w0), P(u1, y0, w0), P(u1, y1, wm), P(u0, y1, wm));
    quad(P(u1, y0, w1), P(u0, y0, w1), P(u0, y1, wm), P(u1, y1, wm));
    if (gableMat) { use(gableMat); tri(P(u0, y0, w1), P(u0, y0, w0), P(u0, y1, wm)); tri(P(u1, y0, w0), P(u1, y0, w1), P(u1, y1, wm)); }
  } else {
    const um = (u0 + u1) / 2;
    use(roofMat);
    quad(P(u0, y0, w0), P(u0, y0, w1), P(um, y1, w1), P(um, y1, w0));
    quad(P(u1, y0, w1), P(u1, y0, w0), P(um, y1, w0), P(um, y1, w1));
    if (gableMat) { use(gableMat); tri(P(u0, y0, w0), P(u1, y0, w0), P(um, y1, w0)); tri(P(u1, y0, w1), P(u0, y0, w1), P(um, y1, w1)); }
  }
}
/** pultni krov uz zid: od (wOut, yOut) do (wIn, yIn), duž u; s trokutima na krajevima */
function leanTo(u0, u1, wOut, wIn, yOut, yIn, roofMat = 'slate', endMat = 'brick') {
  use(roofMat);
  quad(P(u0, yOut, wOut), P(u1, yOut, wOut), P(u1, yIn, wIn), P(u0, yIn, wIn));
  use(endMat);
  tri(P(u0, yOut, wOut), P(u0, yIn, wIn), P(u0, yOut, wIn));
  tri(P(u1, yOut, wOut), P(u1, yOut, wIn), P(u1, yIn, wIn));
}
/** tanka greda između dviju točaka (rebra šiljka, križ) */
function beam(a, b, t) {
  const A3 = new THREE.Vector3(...a), B3 = new THREE.Vector3(...b);
  const d = B3.clone().sub(A3).normalize();
  const s = new THREE.Vector3(0, 1, 0).cross(d);
  if (s.lengthSq() < 1e-6) s.set(1, 0, 0);
  s.normalize().multiplyScalar(t / 2);
  const q = d.clone().cross(s).normalize().multiplyScalar(t / 2);
  const c = (o, sx, sy) => o.clone().addScaledVector(s, sx).addScaledVector(q, sy).toArray();
  const ring = (o) => [c(o, -1, -1), c(o, 1, -1), c(o, 1, 1), c(o, -1, 1)];
  const r0 = ring(A3), r1 = ring(B3);
  for (let i = 0; i < 4; i++) quad(r0[i], r0[(i + 1) % 4], r1[(i + 1) % 4], r1[i]);
}
/** fijala: tijelo + piramida + mali vrh */
function pinnacle(u, w, y0, h, s = 0.5, mat = 'stone') {
  use(mat);
  boxC(u, w, y0, y0 + h * 0.5, s, s);
  spire(u, w, s * 1.32, y0 + h * 0.5, y0 + h, 4, Math.PI / 4);
}

/* ───────────────────────── otvori na zidu ───────────────────────── */
/** ravna ploča po obrisu na zidu: o = točka (dno, sredina), n = vanjska normala (u, w), odmak od zida */
function panel(o, n, outline, off) {
  const [ou, oy, ow] = o, [nu, nw] = n;
  const ru = -nw, rw = nu; // desno gledano izvana
  const pts = outline.map(([s, t]) => P(ou + ru * s + nu * off, oy + t, ow + rw * s + nw * off));
  let cu = 0, cy = 0, cz = 0;
  pts.forEach((p) => { cu += p[0]; cy += p[1]; cz += p[2]; });
  const cc = [cu / pts.length, cy / pts.length, cz / pts.length];
  for (let i = 0; i < pts.length; i++) tri(cc, pts[i], pts[(i + 1) % pts.length]);
}
/** prozor: kameni okvir + vitraj (+ srednji stup za dvodijelne) */
function window(o, n, w, h, { mull = false, glass = 'glass', frame = 0.32 } = {}) {
  use('stone', 0.02);
  panel([o[0], o[1] - frame * 0.5, o[2]], n, archPts(w + frame * 2, h + frame * 1.4), 0.05);
  use(glass, 0.12);
  panel(o, n, archPts(w, h), 0.1);
  if (glass === 'glass') haloRing(o, n, archPts(w, h), Math.min(1.6, 0.45 + w * 0.45), 0.16, Math.min(1, 0.55 + h * 0.04));
  if (mull) { use('stone', 0); const [nu, nw] = n; const c = [o[0] + nu * 0.14, o[1], o[2] + nw * 0.14]; boxC(c[0], c[2], o[1], o[1] + h - w * 0.55, Math.max(0.07, Math.abs(nw) * 0.07 + 0.05), Math.max(0.07, Math.abs(nu) * 0.07 + 0.05)); }
}
/** šiljasti (jednakostranični) luk: obris u (s, t), s ∈ [−w/2, w/2], t ∈ [0, h], tjeme u (0, h) */
function archPts(w, h, seg = 4) {
  const ts = Math.max(0, h - w * 0.866);
  return [[-w / 2, 0], [w / 2, 0], [w / 2, ts], ...rightArcPts(w, ts, seg), ...leftArcPts(w, ts, seg)];
}
// desna polovica: od desnog uporišta (središte lijevo) prema tjemenu
function rightArcPts(w, ts, seg) { const out = []; for (let i = 1; i <= seg; i++) { const a = (i / seg) * (Math.PI / 3); out.push([-w / 2 + w * Math.cos(a), ts + w * Math.sin(a)]); } return out; }
// lijeva polovica: od tjemena prema lijevom uporištu
function leftArcPts(w, ts, seg) { const out = []; for (let i = seg - 1; i >= 0; i--) { const a = (i / seg) * (Math.PI / 3); out.push([w / 2 - w * Math.cos(a), ts + w * Math.sin(a)]); } return out; }
/** okrugli prozor (rozeta): kameni prsten + vitraj + 8 kamenih žbica */
function rose(o, n, r) {
  const circ = (rr, seg = 18) => Array.from({ length: seg }, (_, i) => { const a = (i / seg) * Math.PI * 2; return [Math.cos(a) * rr, rr + Math.sin(a) * rr]; });
  use('stone', 0); panel([o[0], o[1] - 0.4, o[2]], n, circ(r + 0.4), 0.05);
  use('glass', 0.12); panel(o, n, circ(r), 0.1);
  haloRing(o, n, circ(r), 1.5, 0.2, 1);
  use('stone', 0);
  const [nu, nw] = n, ru = -nw, rw = nu;
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI;
    const s0 = Math.cos(a) * r, t0 = Math.sin(a) * r;
    beam(P(o[0] + ru * -s0 + nu * 0.16, o[1] + r - t0, o[2] + rw * -s0 + nw * 0.16), P(o[0] + ru * s0 + nu * 0.16, o[1] + r + t0, o[2] + rw * s0 + nw * 0.16), 0.16);
  }
  const hub = circ(r * 0.28, 10);
  use('stone', 0); panel([o[0], o[1] + r * 0.72, o[2]], n, hub, 0.15);
}
/** vimperg: kameni zabat iznad prozora/portala (tanka trokutasta ploča s rubom) */
function wimperg(o, n, w, h, depth = 0.35) {
  const [nu, nw] = n, ru = -nw, rw = nu;
  const pt = (s, t, d) => P(o[0] + ru * s + nu * d, o[1] + t, o[2] + rw * s + nw * d);
  use('stone', 0.03);
  // prednja i stražnja ploha + kosi rubovi
  tri(pt(-w / 2, 0, depth), pt(w / 2, 0, depth), pt(0, h, depth));
  quad(pt(-w / 2, 0, 0), pt(-w / 2, 0, depth), pt(0, h, depth), pt(0, h, 0));
  quad(pt(w / 2, 0, depth), pt(w / 2, 0, 0), pt(0, h, 0), pt(0, h, depth));
  // opečna ispuna (malo uvučena) — kamen ostaje kao okvir
  use('brickD', 0.02);
  const k = 0.62;
  tri(pt(-w / 2 * k, h * 0.12, depth + 0.04), pt(w / 2 * k, h * 0.12, depth + 0.04), pt(0, h * (0.12 + 0.88 * k * 0.92), depth + 0.04));
  // fijala na vrhu
  use('stone');
  const top = [o[0] + nu * depth * 0.5, o[1] + h, o[2] + nw * depth * 0.5];
  spire(top[0], top[2], 0.22, top[1] - 0.2, top[1] + 1.1, 4, Math.PI / 4);
}
/** kameni okulus (bez stakla): prsten, tamnija ispuna i četverolist (portalni vimperzi) */
function roundel(o, n, r) {
  const circ = (rr, seg = 16) => Array.from({ length: seg }, (_, i) => { const a = (i / seg) * Math.PI * 2; return [Math.cos(a) * rr, r + Math.sin(a) * rr]; });
  use('stone', 0); panel(o, n, circ(r + 0.2), 0.06);
  use('stoneD', 0.02); panel(o, n, circ(r), 0.09);
  use('stone', 0); panel(o, n, foilPts(r * 0.78, r), 0.12);
}
/** obris četverolista polumjera r sa središtem na visini cy (s, t) */
function foilPts(r, cy, seg = 24) {
  return Array.from({ length: seg }, (_, i) => { const a = (i / seg) * Math.PI * 2, q = r * (0.62 + 0.38 * Math.abs(Math.cos(2 * a))); return [Math.cos(a) * q, cy + Math.sin(a) * q]; });
}
/**
 * gotički portal na ravnom zidu: kameni špalet s arhivoltama koje se spuštaju u stupiće s kapitelima,
 * nadvratnik, timpanon s reljefom i tamna vrata; po želji vimperg s kukicama (opečna ispuna iza arhivolti),
 * kameni okulus i fijala. o = sredina praga na licu zida, n = vanjska normala.
 * w / apex: vanjski luk; wi: unutarnji luk (timpanon); lintel: gornji rub nadvratnika; dw: širina vrata.
 */
function portal(o, n, { w, apex, rings = 4, wi, lintel, dw, gable = null, rose: ro = null }) {
  const [nu, nw] = n, ru = -nw, rw = nu;
  const U_ = (s, d) => o[0] + ru * s + nu * d, W_ = (s, d) => o[2] + rw * s + nw * d;
  const pt = (s, t, d) => P(U_(s, d), o[1] + t, W_(s, d));
  const spring = apex - w * 0.866;
  if (gable) {
    gableFrame(o, n, gable);
    if (ro) roundel([o[0], o[1] + ro.y - ro.r, o[2]], n, ro.r);
  }
  // špalet: tamniji kamen iza arhivolti (dubina portala)
  use('stoneD', 0.02); panel(o, n, archPts(w, apex), 0.06);
  // arhivolte: koncentrični lukovi s istim uporištem, unutarnji uvučeniji; dolje prelaze u stupiće
  for (let k = 0; k < rings; k++) {
    const wk = w - ((w - wi) * k) / Math.max(1, rings - 1) - 0.22, hk = spring + wk * 0.866;
    const d = 0.42 - 0.06 * k;
    const out = archPts(wk, hk, w > 5 ? 4 : 3).map(([sx, t], i) => [sx, i < 2 ? 0.6 : t]);
    use(k % 2 ? 'stoneD' : 'stone', 0.02);
    for (let i = 1; i < out.length; i++) {
      const a = out[i], b = out[(i + 1) % out.length];
      beam(pt(a[0], a[1], d), pt(b[0], b[1], d), 0.24);
    }
    use('stone', 0.02);
    for (const sd of [-1, 1]) boxC(U_(sd * wk / 2, d), W_(sd * wk / 2, d), o[1] + spring - 0.4, o[1] + spring, 0.2, 0.2); // kapitel
  }
  // timpanon s reljefom (tri lika) iznad nadvratnika
  const wt = wi - 0.5, top = spring + wt * 0.866;
  use('stone', 0.02); panel(o, n, archPts(wt, top, 6).map(([sx, t]) => [sx, Math.max(t, lintel)]), 0.1);
  use('stoneD', 0.03);
  for (const [sx, k] of [[-wt * 0.24, 0.7], [0, 0.92], [wt * 0.24, 0.7]]) panel([U_(sx, 0), o[1] + lintel + 0.25, W_(sx, 0)], n, archPts(wt * 0.13, (top - lintel) * 0.62 * k, 3), 0.14);
  // nadvratnik, vrata, prag
  use('stone', 0.02); panel(o, n, [[-wt / 2 - 0.15, lintel - 0.45], [wt / 2 + 0.15, lintel - 0.45], [wt / 2 + 0.15, lintel], [-wt / 2 - 0.15, lintel]], 0.16);
  use('door', 0.04); panel(o, n, [[-dw / 2, 0], [dw / 2, 0], [dw / 2, lintel - 0.45], [-dw / 2, lintel - 0.45]], 0.1);
  use('stone', 0.02); panel(o, n, [[-w / 2, 0], [w / 2, 0], [w / 2, 0.6], [-w / 2, 0.6]], 0.2);
}
/** vimperg kojem luk ulazi u zabat: opečna ispuna tik uz zid (iza prozora i arhivolti), kameni kosi rubovi
 *  s kukicama i fijala na vrhu. o = točka na licu zida (dno, sredina), base/top = visine od o */
function gableFrame(o, n, { base, top, width, edge = 0.4, crock = 1.1 }) {
  const [nu, nw] = n, ru = -nw, rw = nu;
  const U_ = (s, d) => o[0] + ru * s + nu * d, W_ = (s, d) => o[2] + rw * s + nw * d;
  const pt = (s, t, d) => P(U_(s, d), o[1] + t, W_(s, d));
  use('brickD', 0.02); tri(pt(-width / 2, base, 0.03), pt(width / 2, base, 0.03), pt(0, top, 0.03));
  use('stone', 0.02);
  const e = edge * 0.3, d = edge * 0.6;
  beam(pt(-width / 2 - e, base - e, d), pt(0, top + e, d), edge);
  beam(pt(width / 2 + e, base - e, d), pt(0, top + e, d), edge);
  const m = Math.max(3, Math.round(Math.hypot(width / 2, top - base) / crock));
  for (const sd of [-1, 1]) for (let i = 1; i < m; i++) {
    const f = i / m, sx = sd * ((width / 2) * (1 - f) + edge * 0.75), t = base + (top - base) * f + edge * 0.25;
    spire(U_(sx, d), W_(sx, d), edge * 0.32, o[1] + t, o[1] + t + edge * 1.1, 4, Math.PI / 4);
  }
  boxC(U_(0, d), W_(0, d), o[1] + top, o[1] + top + edge * 1.2, edge * 0.5, edge * 0.5);
  spire(U_(0, d), W_(0, d), edge * 0.75, o[1] + top + edge * 1.2, o[1] + top + edge * 4.2, 4, Math.PI / 4);
}
/** vijenac / kameni pojas oko zadanog pravokutnika */
function band(u0, u1, w0, w1, y, h, out = 0.25) {
  use('stone', 0.02);
  box(u0 - out, u1 + out, y, y + h, w0 - out, w1 + out);
}

/** istaknuta kamena galerija oko kvadratnog tornja: ploča na konzolama i ograda s tamnim prorezima (mrežište) */
function balustrade(u, half, y, n = 11) {
  use('stone', 0.02);
  boxC(u, 0, y, y + 0.4, half + 0.6, half + 0.6);
  boxC(u, 0, y + 0.4, y + 1.25, half + 0.5, half + 0.5);
  for (const [nu, nw] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
    const ru = -nw, rw = nu, f = half + 0.52;
    for (let i = 0; i < 4; i++) {
      // konzole ispod ploče
      const d = (i - 1.5) * ((2 * half) / 4.4);
      use('stone', 0.02);
      boxC(u + nu * (half + 0.28) + ru * d, nw * (half + 0.28) + rw * d, y - 0.75, y, 0.22 + Math.abs(nu) * 0.06, 0.22 + Math.abs(nw) * 0.06);
    }
    // prorezi pokazuju zid iza ograde (tamnija opeka), ne crnilo: izdaleka se čitaju kao čipkasti pojas
    use('brickD', 0.04);
    for (let i = 0; i < n; i++) {
      const d = (i - (n - 1) / 2) * ((2 * half) / (n + 0.6)), hw = (half / (n + 0.6)) * 0.5;
      const a = P(u + nu * f + ru * (d - hw), y + 0.62, nw * f + rw * (d - hw)), b = P(u + nu * f + ru * (d + hw), y + 0.62, nw * f + rw * (d + hw));
      const c = P(u + nu * f + ru * (d + hw), y + 1.02, nw * f + rw * (d + hw)), e = P(u + nu * f + ru * (d - hw), y + 1.02, nw * f + rw * (d - hw));
      quad(a, b, c, e);
    }
  }
}

/* ═════════════════════════ KONKATEDRALA ═════════════════════════ */
const NAVE_W = 6.5; // polovica širine glavnog broda
const EAVE = 24, RIDGE = 37.5;
const AISLE_W = 13.5, AISLE_E = 12.5, AISLE_R = 16.5;
const TOWER_U = 30.5; // os tornja: čelo kutnih stupova na 38 m, portal na 40 m (OSM: 37,5 i 39,9)
const APSE_U = -27, APSE_R = 7.0;
const apseEndU = APSE_U + APSE_R * 0.3827; // −24,32

/* ── 1. glavni brod i svetište (jedan visoki volumen) ── */
use('brick');
box(apseEndU, 28.5, 0, EAVE, -NAVE_W, NAVE_W);
band(apseEndU, 28.5, -NAVE_W, NAVE_W, EAVE - 0.7, 0.7, 0.3);
gableRoof(apseEndU, 28.5, -NAVE_W - 0.45, NAVE_W + 0.45, EAVE, RIDGE, 'u', 'slate', 'brick');
// krovne lukarne na brodu
for (const u of [9, 15, 21]) for (const s of [-1, 1]) {
  const w = s * 3.1, y = 30.2;
  use('slateL'); box(u - 0.7, u + 0.7, y - 1.6, y + 0.4, w - 0.6, w + 0.6);
  gableRoof(u - 0.8, u + 0.8, w - 0.7, w + 0.7, y + 0.4, y + 1.5, 'w', 'slate', 'slateL');
}
// klerestorij (gornji prozori broda i svetišta)
const navePiers = [8.0, 12.6, 17.2, 21.6, 26.0];
const naveBays = [10.3, 14.9, 19.4, 23.8];
const choirBays = [-21.0, -16.5, -12.0, -7.5];
for (const s of [-1, 1]) {
  for (const u of [...naveBays, ...choirBays]) window([u, 17.4, s * NAVE_W], [0, s], 2.2, 5.6, { mull: true });
  // fijale na vijencu broda, iznad kontrafora
  for (const u of [...navePiers, -9.2, -14.0, -18.7, -23.4]) {
    use('brick'); boxC(u, s * (NAVE_W + 0.35), 16.5, EAVE + 0.4, 0.45, 0.35);
    pinnacle(u, s * (NAVE_W + 0.35), EAVE + 0.4, 4.2, 0.36);
  }
}

/* ── 2. bočni brodovi: zabatni travci, kontrafori s fijalama ── */
for (const s of [-1, 1]) {
  use('brick');
  box(5.5, 27.5, 0, AISLE_E, s > 0 ? NAVE_W : -AISLE_W, s > 0 ? AISLE_W : -NAVE_W);
  leanTo(5.5, 27.5, s * (AISLE_W + 0.4), s * NAVE_W, AISLE_E, AISLE_R);
  band(5.5, 27.5, s > 0 ? NAVE_W : -AISLE_W, s > 0 ? AISLE_W : -NAVE_W, 0, 0.9, 0.18); // sokl
  band(5.5, 27.5, s > 0 ? AISLE_W - 0.1 : -AISLE_W, s > 0 ? AISLE_W : -AISLE_W + 0.1, AISLE_E - 0.5, 0.5, 0.25);
  for (const u of naveBays) {
    window([u, 3.2, s * AISLE_W], [0, s], 2.5, 7.0, { mull: true });
    // zabat travca iznad prozora (ritam koji se čita i iz daljine)
    use('brick');
    gableRoof(u - 1.95, u + 1.95, s > 0 ? AISLE_W - 3 : -AISLE_W - 0.25, s > 0 ? AISLE_W + 0.25 : -AISLE_W + 3, AISLE_E, AISLE_E + 3.4, 'w', 'slate', null);
    use('brick');
    const wg = s * (AISLE_W + 0.25);
    tri(P(u - 1.95, AISLE_E, wg), P(u + 1.95, AISLE_E, wg), P(u, AISLE_E + 3.4, wg));
    wimperg([u, AISLE_E - 1.6, s * (AISLE_W + 0.28)], [0, s], 4.0, 5.4, 0.3);
  }
  for (const u of navePiers) {
    use('brick');
    box(u - 0.7, u + 0.7, 0, 7, s > 0 ? AISLE_W : -AISLE_W - 2.2, s > 0 ? AISLE_W + 2.2 : -AISLE_W);
    box(u - 0.6, u + 0.6, 7, AISLE_E + 0.6, s > 0 ? AISLE_W : -AISLE_W - 1.5, s > 0 ? AISLE_W + 1.5 : -AISLE_W);
    use('stone'); box(u - 0.72, u + 0.72, 6.7, 7.05, s > 0 ? AISLE_W : -AISLE_W - 2.25, s > 0 ? AISLE_W + 2.25 : -AISLE_W);
    pinnacle(u, s * (AISLE_W + 0.75), AISLE_E + 0.6, 5.0, 0.42);
  }
  // istočna pročelja bočnih brodova uz toranj: kameni portal s timpanonom pod vimpergom s okulusom,
  // iznad njega tri lanceta (fotografija s trga)
  const wm = s * (NAVE_W + AISLE_W) / 2;
  portal([27.55, 0, wm], [1, 0], { w: 3.2, apex: 6.4, rings: 2, wi: 2.2, lintel: 3.9, dw: 1.8, gable: { base: 4.4, top: 9.6, width: 3.8 }, rose: { y: 7.7, r: 0.36 } });
  for (const d of [-0.9, 0, 0.9]) window([27.55, 10.1, wm + d], [1, 0], 0.62, d ? 2.0 : 2.4);
}

/* ── 3. transept: zabatna pročelja s rozetom, kutni tornjići ── */
const TU0 = -4, TU1 = 5.5, TW = 18;
use('brick');
box(TU0, TU1, 0, EAVE, -TW, TW);
band(TU0, TU1, -TW, TW, EAVE - 0.7, 0.7, 0.3);
band(TU0, TU1, -TW, TW, 0, 0.9, 0.18);
gableRoof(TU0 - 0.45, TU1 + 0.45, -TW - 0.3, TW + 0.3, EAVE, RIDGE, 'w', 'slate', 'brick');
for (const s of [-1, 1]) {
  const uc = (TU0 + TU1) / 2;
  const wf = s * (TW + 0.02);
  rose([uc, 14.6, wf], [0, s], 3.0);
  portal([uc, 0, wf], [0, s], { w: 3.8, apex: 7.6, rings: 3, wi: 2.4, lintel: 3.6, dw: 2.0, gable: { base: 5.6, top: 11.2, width: 4.6 } });
  for (const du of [-1.3, 1.3]) window([uc + du, 26.5, wf], [0, s], 0.9, 4.2);
  // kameni rub zabata
  use('stone');
  beam(P(TU0 - 0.5, EAVE, s * (TW + 0.3)), P(uc, RIDGE + 0.3, s * (TW + 0.3)), 0.5);
  beam(P(TU1 + 0.5, EAVE, s * (TW + 0.3)), P(uc, RIDGE + 0.3, s * (TW + 0.3)), 0.5);
  pinnacle(uc, s * (TW + 0.3), RIDGE + 0.2, 3.2, 0.35);
  // kutni tornjići (osmerokut) sa šiljcima od škriljevca
  for (const u of [TU0, TU1]) {
    use('brick'); prism(u, s * TW, 1.15, 0, 28, 8, Math.PI / 8);
    use('stone'); prism(u, s * TW, 1.32, 27.6, 28.4, 8, Math.PI / 8);
    use('slate'); spire(u, s * TW, 1.25, 28.4, 34.6, 8, Math.PI / 8);
    use('stone'); spire(u, s * TW, 0.18, 34.4, 35.6, 4);
  }
  // bočni prozori krakova transepta
  for (const w of [s * 9.5, s * 14]) { window([TU0, 6.5, w], [-1, 0], 2.0, 9.0, { mull: true }); window([TU1, 6.5, w], [1, 0], 2.0, 9.0, { mull: true }); }
}

/* ── 4. kapele uz svetište (niže), kontrafori ── */
for (const s of [-1, 1]) {
  use('brick');
  box(apseEndU - 1.5, TU0, 0, 11, s > 0 ? NAVE_W : -16.5, s > 0 ? 16.5 : -NAVE_W);
  leanTo(apseEndU - 1.5, TU0, s * 16.9, s * NAVE_W, 11, 15.2);
  band(apseEndU - 1.5, TU0, s > 0 ? NAVE_W : -16.5, s > 0 ? 16.5 : -NAVE_W, 0, 0.9, 0.18);
  for (const u of [-23.5, -19.0, -14.5, -9.5]) window([u, 2.8, s * 16.5], [0, s], 2.0, 6.0, { mull: true });
  for (const u of [-25.8, -21.3, -16.8, -12.0, -7.0]) {
    use('brick'); box(u - 0.6, u + 0.6, 0, 10, s > 0 ? 16.5 : -18.3, s > 0 ? 18.3 : -16.5);
    pinnacle(u, s * 17.2, 10, 4.2, 0.4);
  }
}

/* ── 5. apsida: poligonalni zaključak 5/8 s nižim vijencem kapela ── */
const apseAngles = [-112.5, -67.5, -22.5, 22.5, 67.5, 112.5].map((d) => (d * Math.PI) / 180);
const apsePt = (r, a) => [APSE_U - Math.cos(a) * r, Math.sin(a) * r];
{
  // gornji zidovi
  use('brick');
  for (let i = 0; i < apseAngles.length - 1; i++) {
    const [ua, wa] = apsePt(APSE_R, apseAngles[i]), [ub, wb] = apsePt(APSE_R, apseAngles[i + 1]);
    quad(P(ua, 0, wa), P(ub, 0, wb), P(ub, EAVE, wb), P(ua, EAVE, wa));
    // prozor u svakoj stranici
    const am = (apseAngles[i] + apseAngles[i + 1]) / 2;
    const rr = APSE_R * Math.cos(Math.PI / 8);
    const [um, wm] = apsePt(rr, am);
    window([um, 13.0, wm], [-Math.cos(am), Math.sin(am)], 1.9, 8.6, { mull: true });
  }
  // vijenac i krov (polukupola od ploha do kraja sljemena)
  use('stone');
  for (let i = 0; i < apseAngles.length - 1; i++) {
    const [ua, wa] = apsePt(APSE_R + 0.3, apseAngles[i]), [ub, wb] = apsePt(APSE_R + 0.3, apseAngles[i + 1]);
    quad(P(ua, EAVE - 0.7, wa), P(ub, EAVE - 0.7, wb), P(ub, EAVE, wb), P(ua, EAVE, wa));
  }
  use('slate');
  for (let i = 0; i < apseAngles.length - 1; i++) {
    const [ua, wa] = apsePt(APSE_R + 0.45, apseAngles[i]), [ub, wb] = apsePt(APSE_R + 0.45, apseAngles[i + 1]);
    tri(P(ua, EAVE, wa), P(ub, EAVE, wb), P(apseEndU, RIDGE, 0));
  }
  // donji vijenac kapela oko apside
  const R2 = 9.8;
  use('brick');
  for (let i = 0; i < apseAngles.length - 1; i++) {
    const [ua, wa] = apsePt(R2, apseAngles[i]), [ub, wb] = apsePt(R2, apseAngles[i + 1]);
    quad(P(ua, 0, wa), P(ub, 0, wb), P(ub, 10.5, wb), P(ua, 10.5, wa));
    const am = (apseAngles[i] + apseAngles[i + 1]) / 2;
    const [um, wm] = apsePt(R2 * Math.cos(Math.PI / 8), am);
    window([um, 2.6, wm], [-Math.cos(am), Math.sin(am)], 1.7, 5.6);
    const [ia, iwa] = apsePt(APSE_R, apseAngles[i]), [ib, iwb] = apsePt(APSE_R, apseAngles[i + 1]);
    use('slate');
    quad(P(ua, 10.5, wa), P(ub, 10.5, wb), P(ib, 14.5, iwb), P(ia, 14.5, iwa));
    use('brick');
  }
  // radijalni kontrafori s fijalama i kosim lukovima prema gornjem zidu
  for (const a of apseAngles.slice(1, -1)) {
    const d = [-Math.cos(a), Math.sin(a)];
    const [u1, w1] = apsePt(R2 + 1.2, a);
    const [u0, w0] = apsePt(APSE_R, a);
    use('brick');
    const n = 6;
    for (let k = 0; k < n; k++) {
      const t0 = k / n, t1 = (k + 1) / n;
      const ua = u0 + (u1 - u0) * t0, wa = w0 + (w1 - w0) * t0, ub = u0 + (u1 - u0) * t1, wb = w0 + (w1 - w0) * t1;
      const hgt = 11.5 + (1 - t1) * 9.5;
      const um = (ua + ub) / 2, wm = (wa + wb) / 2;
      boxC(um, wm, 0, hgt, Math.abs(d[0]) * 0.45 + 0.45, Math.abs(d[1]) * 0.45 + 0.45);
    }
    pinnacle(u1 - d[0] * 0.2, w1 - d[1] * 0.2, 11.5, 5.2, 0.45);
    use('stone');
    beam(P(u1, 15.5, w1), P(u0 - d[0] * 0.2, 21.5, w0 - d[1] * 0.2), 0.55);
    pinnacle(u0 - d[0] * 0.3, w0 - d[1] * 0.3, EAVE + 0.2, 4.0, 0.36);
  }
}

/* ── 6. stubišni tornjić (južna strana, uz transept) ── */
{
  const u = -5.6, w = -21.6;
  use('brick'); prism(u, w, 2.5, 0, 21, 8, Math.PI / 8);
  use('stone'); prism(u, w, 2.75, 20.6, 21.6, 8, Math.PI / 8);
  use('slate'); spire(u, w, 2.6, 21.6, 30, 8, Math.PI / 8);
  use('stone'); spire(u, w, 0.2, 29.8, 31.2, 4);
  for (const y of [5, 11, 16.5]) window([u + 2.5 * Math.cos(-Math.PI / 2), y, w - 2.4], [0, -1], 0.7, 2.4);
}

/* ── 7. sanjak (fleche) nad križištem ── */
{
  const u = 0.75, w = 0;
  use('metal'); prism(u, w, 1.6, 35.2, 41.2, 8, Math.PI / 8);
  use('glass', 0.02);
  for (let i = 0; i < 8; i++) {
    const a = Math.PI / 8 + (i + 0.5) * (Math.PI / 4);
    const rr = 1.6 * Math.cos(Math.PI / 8);
    panel([u + Math.cos(a) * rr, 37.0, w + Math.sin(a) * rr], [Math.cos(a), Math.sin(a)], archPts(0.7, 3.0), 0.03);
  }
  use('metal'); prism(u, w, 1.9, 41.2, 41.6, 8, Math.PI / 8);
  use('metal'); spire(u, w, 1.7, 41.6, 55.5, 8, Math.PI / 8);
  for (let i = 0; i < 4; i++) { const a = (i / 4) * Math.PI * 2 + Math.PI / 4; pinnacle(u + Math.cos(a) * 1.8, w + Math.sin(a) * 1.8, 41.6, 3.2, 0.2, 'metal'); }
  use('gold'); beam(P(u, 55.2, w), P(u, 57.6, w), 0.14); beam(P(u, 56.9, w - 0.55), P(u, 56.9, w + 0.55), 0.12);
}

/* ── 8. toranj: kvadratni dio s četiri kata i stepenastim kutnim stupovima, sat, osmerokutni zvonik, tambur, šiljak ──
   Visine prema fotografijama s trga (Wikimedia Commons, ispravljene vertikale, umjereno prema vrhu šiljka na 90 m)
   i snimci dronom (korisnik, 2026-10-09): galerija ~30 m, dvostruki prozori 31–36 m, sat ~40 m, galerija nad satom
   ~44,5 m. Iznad nje toranj prelazi u OSMEROKUT (apotema 4,35 m): na svakoj od osam stranica visok taman otvor za
   zvona (46–59,4 m, bez stakla i mrežišta) pod vimpergom, fijale na uglovima; kutni stupovi kvadratnog dijela
   nastavljaju se kao samostojne fijale ispred kosih stranica. Zatim osmerokutni tambur 63,4–72,2 m s malim
   četverolistima i okulusima, galerija u dnu šiljka, šiljak 73,4–90 m. Glavni portal: kameni, širok ~7 m, luk do
   ~13,8 m, vimperg s okulusom do ~18,6 m, između masivnih kontrafora (trijem 10,5 m, OSM 11,4 m). */
{
  const U = TOWER_U;
  const tiers = [[0, 17.5, 5.8], [17.5, 30.4, 5.3], [30.4, 37.2, 5.0], [37.2, 45, 4.7]];
  use('brick');
  for (const [y0, y1, h] of tiers) boxC(U, 0, y0, y1, h, h);
  // kutni stupovi (čitaju se kao po dva kontrafora na svakom pročelju), uvlače se po katovima
  const pier = [[0, 17.5, 1.75], [17.5, 30.4, 1.2], [30.4, 37.2, 0.95]];
  for (const su of [-1, 1]) for (const sw of [-1, 1]) {
    for (const [y0, y1, p] of pier) {
      const h = tiers.find((t) => t[0] === y0)[2];
      use('brick'); boxC(U + su * h, sw * h, y0, y1, p, p);
      use('stone'); boxC(U + su * h, sw * h, y1 - 0.45, y1, p + 0.08, p + 0.08);
    }
    // fijale na vrhu svakog uvlačenja (stepenasti, "nazubljeni" obris tornja s fotografija)
    pinnacle(U + su * (5.8 + 0.85), sw * (5.8 + 0.85), 17.5, 4.2, 0.46);
    pinnacle(U + su * (5.3 + 0.55), sw * (5.3 + 0.55), 30.4, 4.6, 0.4);
    pinnacle(U + su * 5.0, sw * 5.0, 37.2, 7.2, 0.62);
    // kutni stupovi zvonika: samostojne fijale ispred kosih stranica osmerokuta, u dva stupnja
    const cu = U + su * 4.15, cw = sw * 4.15;
    use('brick'); boxC(cu, cw, 45, 52.4, 0.62, 0.62);
    use('stone'); boxC(cu, cw, 52.1, 52.5, 0.7, 0.7);
    for (const [gu, gw] of [[su, 0], [0, sw]]) wimperg([cu + gu * 0.63, 52.4, cw + gw * 0.63], [gu, gw], 1.1, 1.5, 0.2);
    use('brick'); boxC(cu, cw, 52.5, 58.6, 0.46, 0.46);
    use('stone'); boxC(cu, cw, 58.3, 58.7, 0.54, 0.54);
    pinnacle(cu, cw, 58.7, 6.6, 0.42);
  }
  // kameni pojasevi; ispod dvostrukih prozora i iznad sata istaknute galerije s mrežištem
  for (const [y, h, half] of [[17.1, 0.5, 6.05], [36.8, 0.5, 5.3]]) { use('stone', 0.02); boxC(U, 0, y, y + h, half, half); }
  use('stone', 0.02); boxC(U, 0, 0, 1.1, 6.05, 6.05);
  balustrade(U, 5.0, 29.7);
  balustrade(U, 4.7, 44.3);
  const faces = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  for (const [nu, nw] of faces) {
    const at = (h, y) => [U + nu * (h + 0.02), y, nw * (h + 0.02)];
    const off = (h, d, y) => [U + nu * h + -nw * d, y, nw * h + nu * d];
    // 1. kat: veliki prozor s mrežištem i dva niža bočna (na istoku iznad portala)
    window(at(5.3, 19.6), [nu, nw], 3.2, 9.6, { mull: true });
    for (const d of [-2.85, 2.85]) window(off(5.32, d, 19.6), [nu, nw], 1.0, 6.4);
    wimperg(at(5.32, 27.3), [nu, nw], 4.6, 4.2, 0.3);
    // bočna pročelja: u prizemlju velik prozor s mrežištem pod vimpergom
    if (nw !== 0) {
      window(at(5.8, 4.0), [nu, nw], 3.4, 8.2, { mull: true });
      wimperg(at(5.82, 11.6), [nu, nw], 5.4, 4.6, 0.32);
    }
    // 2. kat: dvostruki prozori
    for (const d of [-1.1, 1.1]) window(off(5.02, d, 31.4), [nu, nw], 1.2, 5.0);
    // 3. kat: sat
    {
      const c = at(4.7, 38.75);
      use('stone', 0); panel(c, [nu, nw], Array.from({ length: 16 }, (_, i) => { const a = (i / 16) * Math.PI * 2; return [Math.cos(a) * 1.55, 1.55 + Math.sin(a) * 1.55]; }), 0.06);
      use('door', 0); panel(c, [nu, nw], Array.from({ length: 16 }, (_, i) => { const a = (i / 16) * Math.PI * 2; return [Math.cos(a) * 1.25, 1.55 + Math.sin(a) * 1.25]; }), 0.1);
      use('gold', 0);
      const ru = -nw, rw = nu;
      const cc = [c[0] + nu * 0.16, c[1] + 1.55, c[2] + nw * 0.16];
      beam(P(cc[0], cc[1], cc[2]), P(cc[0], cc[1] + 0.95, cc[2]), 0.12);
      beam(P(cc[0], cc[1], cc[2]), P(cc[0] + ru * 0.65, cc[1] - 0.25, cc[2] + rw * 0.65), 0.12);
    }
  }
  // glavni portal (istok, prema trgu): istaknuti trijem između masivnih kontrafora, kameni portal s
  // arhivoltama, timpanonom s reljefom i vimpergom s okulusom; iza vimperga mali krov do zida tornja
  {
    const PF = 40.0, PH = 5.25, back = U + 5.8;
    use('brick'); box(back, PF, 0, 9.9, -PH, PH);
    use('stone', 0.02); box(back, PF + 0.05, 9.6, 9.95, -PH - 0.05, PH + 0.05);
    gableRoof(back, PF, -4.25, 4.25, 9.95, 18.3, 'u', 'slate', 'brick');
    // kontrafori uz portal (fotografija s trga): opeka s kamenim uvlačenjem na ~5 m, uz vimperg rastu do ~16 m;
    // na dnu vimperga kameni izljevi (gargojli)
    for (const s of [-1, 1]) {
      const bx = (u1, y0, y1, a, b) => box(back, u1, y0, y1, Math.min(s * a, s * b), Math.max(s * a, s * b));
      use('brick'); bx(PF + 0.7, 0, 5.0, 3.7, PH);
      use('stone', 0.02); bx(PF + 0.76, 4.7, 5.1, 3.66, PH + 0.04);
      use('brick'); bx(PF + 0.5, 5.1, 16.2, 3.8, PH - 0.1);
      use('stone', 0.02); bx(PF + 0.56, 15.85, 16.3, 3.76, PH - 0.06);
      use('brick'); bx(PF - 0.6, 16.3, 17.4, 3.95, PH - 0.25);
      use('stone', 0.02); beam(P(PF + 0.3, 10.05, s * 4.15), P(PF + 1.25, 9.9, s * 4.3), 0.28);
    }
    portal([PF, 0, 0], [1, 0], { w: 7.0, apex: 13.8, rings: 5, wi: 4.0, lintel: 6.0, dw: 2.8, gable: { base: 9.95, top: 18.6, width: 8.3 }, rose: { y: 15.4, r: 0.78 } });
  }
  // zvonik: osmerokut iznad galerije sa satom; na svakoj stranici visok taman otvor (bez stakla i mrežišta),
  // nad njim vimperg, na uglovima fijale (gusti vijenac fijala oko tambura)
  const A8 = 4.35, R8 = A8 / Math.cos(Math.PI / 8), B0 = 45, rot = Math.PI / 8, D0 = 63.4;
  use('brick'); prism(U, 0, R8, B0, D0, 8, rot, false);
  use('stone', 0.02); prism(U, 0, R8 + 0.06, 52.3, 52.6, 8, rot, false); // iza tamnih otvora, vidljiv samo na stupcima
  for (let k = 0; k < 8; k++) {
    const a = (k / 8) * Math.PI * 2, nu = Math.cos(a), nw = Math.sin(a);
    const at8 = (y) => [U + nu * (A8 + 0.02), y, nw * (A8 + 0.02)];
    gableFrame(at8(0), [nu, nw], { base: 57.6, top: 64.6, width: 3.4, edge: 0.3, crock: 1.0 });
    window(at8(46.0), [nu, nw], 1.9, 13.4, { glass: 'door', frame: 0.36 });
    const v = a + Math.PI / 8;
    pinnacle(U + Math.cos(v) * (R8 + 0.05), Math.sin(v) * (R8 + 0.05), 59.4, 5.6, 0.22);
  }
  use('stone', 0.02); prism(U, 0, R8 + 0.3, D0 - 0.2, D0 + 0.35, 8, rot);
  // osmerokutni tambur: mali četverolisti i okulusi (tamni), vijenac i galerija u dnu šiljka
  const RD = 4.0, D1 = 72.2;
  use('brick'); prism(U, 0, RD, D0, D1, 8, rot, false);
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2, nu = Math.cos(a), nw = Math.sin(a), fr = RD * Math.cos(Math.PI / 8);
    const o = [U + nu * (fr + 0.02), 66.4, nw * (fr + 0.02)];
    const circ = (r) => Array.from({ length: 12 }, (_, j) => { const t = (j / 12) * Math.PI * 2; return [Math.cos(t) * r, 0.82 + Math.sin(t) * r]; });
    use('stone', 0); panel(o, [nu, nw], circ(0.82), 0.05);
    use('door', 0); panel(o, [nu, nw], i % 2 ? circ(0.55) : foilPts(0.66, 0.82, 16), 0.09);
  }
  use('stone', 0.02); prism(U, 0, RD + 0.15, D1 - 0.7, D1, 8, rot);
  use('stone', 0.02); prism(U, 0, RD + 0.45, D1, D1 + 0.5, 8, rot);
  use('stone', 0.02); prism(U, 0, RD + 0.32, D1 + 0.5, D1 + 1.25, 8, rot);
  // male fijale na uglovima galerije
  for (let i = 0; i < 8; i++) { const a = rot + (i / 8) * Math.PI * 2; pinnacle(U + Math.cos(a) * (RD + 0.32), Math.sin(a) * (RD + 0.32), D1 + 0.5, 2.6, 0.17); }
  // šiljak s kamenim rebrima i lukarnama
  const S0 = D1 + 1.2, S1 = 90.0, R0 = 3.55;
  use('brick'); spire(U, 0, R0, S0, S1, 8, rot);
  use('stone', 0.02);
  for (let i = 0; i < 8; i++) { const a = rot + (i / 8) * Math.PI * 2; beam(P(U + Math.cos(a) * (R0 + 0.06), S0, Math.sin(a) * (R0 + 0.06)), P(U, S1 + 0.1, 0), 0.26); }
  const ry = 80.6, rr = R0 * (1 - (ry - S0) / (S1 - S0));
  prism(U, 0, rr + 0.35, ry, ry + 0.45, 8, rot);
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2;
    const y = 76.4, r = R0 * (1 - (y - S0) / (S1 - S0));
    use('brick'); boxC(U + Math.cos(a) * r, Math.sin(a) * r, y, y + 1.3, 0.4, 0.4);
    use('stone'); spire(U + Math.cos(a) * (r + 0.1), Math.sin(a) * (r + 0.1), 0.56, y + 1.3, y + 2.3, 4, Math.PI / 4);
  }
  // vrh: kameni čvor i pozlaćeni križ
  use('stone'); prism(U, 0, 0.42, S1 - 0.6, S1 + 0.5, 8);
  use('gold'); beam(P(U, S1 + 0.5, 0), P(U, S1 + 4.0, 0), 0.22); beam(P(U, S1 + 2.85, -0.85), P(U, S1 + 2.85, 0.85), 0.2);
}

/* ═════════════════════════ izvoz (GLB) ═════════════════════════ */
function bounds(arr) {
  const min = [Infinity, Infinity, Infinity], max = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i < arr.length; i += 3) for (let k = 0; k < 3; k++) { min[k] = Math.min(min[k], arr[i + k]); max[k] = Math.max(max[k], arr[i + k]); }
  return { min, max };
}
const parts = [
  { name: 'konkatedrala', pos: new Float32Array(pos), col: new Float32Array(col), mat: 0 },
  { name: 'sjaj', pos: new Float32Array(hPos), col: new Float32Array(hCol), mat: 1 },
];
const buffers = [];
const bufferViews = [];
const accessors = [];
let offset = 0;
for (const pt of parts) {
  for (const [arr, type] of [[pt.pos, 'VEC3'], [pt.col, 'VEC4']]) {
    const b = Buffer.from(arr.buffer);
    buffers.push(b);
    bufferViews.push({ buffer: 0, byteOffset: offset, byteLength: b.length, target: 34962 });
    const acc = { bufferView: bufferViews.length - 1, componentType: 5126, count: arr.length / (type === 'VEC3' ? 3 : 4), type };
    if (type === 'VEC3') Object.assign(acc, bounds(arr));
    accessors.push(acc);
    offset += b.length;
  }
}
const bin = Buffer.concat(buffers);
const gltf = {
  asset: { version: '2.0', generator: 'zaec build-cathedral.mjs' },
  scene: 0,
  scenes: [{ nodes: [0, 1] }],
  nodes: parts.map((pt, i) => ({ name: pt.name, mesh: i })),
  meshes: parts.map((pt, i) => ({ name: pt.name, primitives: [{ attributes: { POSITION: i * 2, COLOR_0: i * 2 + 1 }, material: pt.mat, mode: 4 }] })),
  materials: [
    { name: 'konkatedrala', pbrMetallicRoughness: { baseColorFactor: [1, 1, 1, 1], metallicFactor: 0, roughnessFactor: 0.85 } },
    { name: 'sjaj', alphaMode: 'BLEND', pbrMetallicRoughness: { baseColorFactor: [1, 1, 1, 1], metallicFactor: 0, roughnessFactor: 1 } },
  ],
  buffers: [{ byteLength: bin.length }],
  bufferViews,
  accessors,
};
const pad = (b, c) => Buffer.concat([b, Buffer.alloc((4 - (b.length % 4)) % 4, c)]);
const json = pad(Buffer.from(JSON.stringify(gltf)), 0x20);
const binP = pad(bin, 0);
const header = Buffer.alloc(12);
header.writeUInt32LE(0x46546c67, 0); header.writeUInt32LE(2, 4); header.writeUInt32LE(12 + 8 + json.length + 8 + binP.length, 8);
const chunk = (buf, type) => { const h = Buffer.alloc(8); h.writeUInt32LE(buf.length, 0); h.writeUInt32LE(type, 4); return Buffer.concat([h, buf]); };
fs.writeFileSync(path.join(OUT, 'konkatedrala-src.glb'), Buffer.concat([header, chunk(json, 0x4e4f534a), chunk(binP, 0x004e4942)]));
const { min, max } = bounds(parts[0].pos);
console.log(`konkatedrala: ${pos.length / 9} trokuta + sjaj ${hPos.length / 9} · visina ${max[1].toFixed(1)} m · tlocrt x ${min[0].toFixed(1)}…${max[0].toFixed(1)}, z ${min[2].toFixed(1)}…${max[2].toFixed(1)}`);
