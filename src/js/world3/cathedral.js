// Konkatedrala sv. Petra i Pavla, Osijek — stilizirana low-poly arhitektonska skulptura.
// Os broda: x (zapadni toranj na −x, apsida na +x). Jedinice grada (1 ≈ 6 m, toranj naglašen).
import * as THREE from 'three';
import { mergeGeometries, mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

const COL = {
  brick: '#8e3825',
  brickDark: '#6c2a1b',
  trim: '#b4583a',
  roof: '#2b3244',
  spire: '#232a3a',
  dark: '#0b0d13',
  stone: '#c9b9a4',
};

function paint(g, color) {
  const geo = g.index ? g.toNonIndexed() : g;
  if (geo !== g) g.dispose();
  geo.deleteAttribute('uv');
  const c = new THREE.Color(color);
  const n = geo.attributes.position.count;
  const a = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) c.toArray(a, i * 3);
  geo.setAttribute('color', new THREE.BufferAttribute(a, 3));
  if (!geo.attributes.normal) geo.computeVertexNormals();
  return geo;
}

function box(w, h, d, x, y, z, color) {
  return paint(new THREE.BoxGeometry(w, h, d).translate(x, y + h / 2, z), color);
}

/** Dvostrešni krov duž osi (axis 'x' ili 'z'). */
function gable(len, wid, h, x, y, z, axis, color) {
  const l = len / 2, w = wid / 2;
  const v = [-l, 0, -w, -l, 0, w, -l, h, 0, l, 0, w, l, 0, -w, l, h, 0, -l, 0, w, l, 0, w, l, h, 0, -l, 0, w, l, h, 0, -l, h, 0, l, 0, -w, -l, 0, -w, -l, h, 0, l, 0, -w, -l, h, 0, l, h, 0];
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(v, 3));
  if (axis === 'z') g.rotateY(Math.PI / 2);
  g.translate(x, y, z);
  g.computeVertexNormals();
  return paint(g, color);
}

/** Pultni krov (bočni brodovi): od visine h0 na vanjskom rubu do h1 uz zid broda. */
function leanTo(len, wid, h0, h1, x, y, zInner, side, color) {
  const l = len / 2;
  const zi = zInner, zo = zInner + side * wid;
  const v = [-l, y + h1, zi, l, y + h1, zi, l, y + h0, zo, -l, y + h1, zi, l, y + h0, zo, -l, y + h0, zo];
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(v, 3));
  g.translate(x, 0, 0);
  g.computeVertexNormals();
  return paint(g, color);
}

function cone(r, h, seg, x, y, z, color, rot = 0) {
  return paint(new THREE.ConeGeometry(r, h, seg, 1).rotateY(rot).translate(x, y + h / 2, z), color);
}

function prism(r, h, seg, x, y, z, color, thetaStart = 0, thetaLen = Math.PI * 2) {
  return paint(new THREE.CylinderGeometry(r, r, h, seg, 1, false, thetaStart, thetaLen).translate(x, y + h / 2, z), color);
}

export function buildCathedral() {
  const parts = [];
  const P = (g) => parts.push(g);

  // ── brod ──
  P(box(7.6, 3.6, 3.0, 0.8, 0, 0, COL.brick));
  P(gable(7.8, 3.2, 2.5, 0.8, 3.6, 0, 'x', COL.roof));
  // bočni brodovi s pultnim krovovima
  [-1, 1].forEach((s) => {
    P(box(6.6, 2.3, 1.1, 0.3, 0, s * 2.05, COL.brickDark));
    P(leanTo(6.6, 1.25, 2.3, 3.15, 0.3, 0, s * 1.5, s, COL.roof));
    // kontrafori s fijalama
    for (let i = 0; i < 6; i++) {
      const x = -2.6 + i * 1.18;
      P(box(0.26, 2.75, 0.42, x, 0, s * 2.75, COL.brick));
      P(cone(0.13, 0.7, 4, x, 2.75, s * 2.75, COL.trim, Math.PI / 4));
      // lančani prozori (tamni)
      if (i < 5) P(box(0.32, 1.25, 0.04, x + 0.59, 0.55, s * 2.62, COL.dark));
    }
    // visoki prozori broda iznad bočnih
    for (let i = 0; i < 5; i++) P(box(0.28, 0.75, 0.04, -2.0 + i * 1.18, 2.55, s * 1.52, COL.dark));
  });

  // ── transept ──
  P(box(1.8, 3.6, 6.6, 3.55, 0, 0, COL.brick));
  P(gable(6.8, 2.0, 2.3, 3.55, 3.6, 0, 'z', COL.roof));
  [-1, 1].forEach((s) => {
    P(box(0.7, 1.9, 0.04, 3.55, 1.0, s * 3.32, COL.dark));
    P(cone(0.16, 0.9, 4, 2.7, 3.6, s * 3.25, COL.trim, Math.PI / 4));
    P(cone(0.16, 0.9, 4, 4.4, 3.6, s * 3.25, COL.trim, Math.PI / 4));
  });
  P(cone(0.22, 1.6, 6, 3.55, 6.0, 0, COL.spire)); // ploča nad križištem

  // ── apsida ──
  P(prism(1.5, 3.4, 8, 4.6, 0, 0, COL.brick, 0, Math.PI));
  P(paint(new THREE.ConeGeometry(1.5, 1.9, 8, 1, false, 0, Math.PI).translate(4.6, 3.4 + 0.95, 0), COL.roof));
  for (let i = 0; i < 5; i++) {
    const a = (i / 4) * Math.PI;
    P(box(0.05, 1.5, 0.3, 4.6 + Math.sin(a) * 1.48, 0.8, Math.cos(a) * 1.48, COL.dark));
  }

  // ── zapadni toranj ──
  const tx = -4.05;
  P(box(2.3, 5.2, 2.3, tx, 0, 0, COL.brick));
  P(box(2.0, 2.0, 2.0, tx, 5.2, 0, COL.brickDark));
  // kutni kontrafori + fijale
  [[-1, -1], [1, -1], [1, 1], [-1, 1]].forEach(([sx, sz]) => {
    P(box(0.36, 6.4, 0.36, tx + sx * 1.18, 0, sz * 1.18, COL.brick));
    P(cone(0.2, 1.1, 4, tx + sx * 1.18, 6.4, sz * 1.18, COL.trim, Math.PI / 4));
  });
  // zvonik: visoki lancet otvori
  [[0, 1.01], [0, -1.01]].forEach(([, z]) => {
    P(box(0.32, 1.35, 0.04, tx - 0.35, 5.45, z, COL.dark));
    P(box(0.32, 1.35, 0.04, tx + 0.35, 5.45, z, COL.dark));
    P(box(0.5, 1.6, 0.04, tx, 2.2, z * 1.14, COL.dark));
  });
  [[-1.01], [1.01]].forEach(([x]) => {
    P(box(0.04, 1.35, 0.32, tx + x, 5.45, -0.35, COL.dark));
    P(box(0.04, 1.35, 0.32, tx + x, 5.45, 0.35, COL.dark));
  });
  // portal i rozeta na zapadnom pročelju
  P(box(0.06, 2.0, 0.85, tx - 1.18, 0, 0, COL.dark));
  P(paint(new THREE.CircleGeometry(0.42, 8).rotateY(-Math.PI / 2).translate(tx - 1.19, 3.4, 0), COL.dark));
  // vijenac i zabatići na dnu šiljka
  P(box(2.2, 0.16, 2.2, tx, 7.2, 0, COL.trim));
  [0, Math.PI / 2, Math.PI, -Math.PI / 2].forEach((r) => {
    const g = gable(0.9, 0.18, 0.95, 0, 0, 0, 'x', COL.spire);
    g.rotateY(r);
    g.translate(tx + Math.sin(r) * 0.9, 7.36, Math.cos(r) * 0.9);
    P(g);
  });
  // osmerokutni šiljak
  P(cone(1.0, 5.6, 8, tx, 7.36, 0, COL.spire, Math.PI / 8));
  // križ
  P(box(0.06, 0.7, 0.06, tx, 12.95, 0, COL.stone));
  P(box(0.06, 0.06, 0.36, tx, 13.38, 0, COL.stone));

  // kutne tornjiće uz zapadni kraj bočnih brodova
  [-1, 1].forEach((s) => {
    P(prism(0.34, 3.4, 8, -2.95, 0, s * 2.35, COL.brick));
    P(cone(0.42, 1.5, 8, -2.95, 3.4, s * 2.35, COL.spire, Math.PI / 8));
  });

  const merged = mergeGeometries(parts, false);
  parts.forEach((g) => g.dispose());
  merged.computeBoundingBox();
  return merged;
}

/** Rubovi za "nacrt" i morph (spojene točke da EdgesGeometry radi čisto). */
export function cathedralEdges(geo, angle = 24) {
  const clean = geo.clone();
  clean.deleteAttribute('color');
  clean.deleteAttribute('normal');
  const merged = mergeVertices(clean, 1e-4);
  const edges = new THREE.EdgesGeometry(merged, angle);
  clean.dispose();
  merged.dispose();
  return edges;
}
