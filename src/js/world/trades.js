// Rekviziti djelatnosti oko "vašeg obrta" — mijenjaju se s tabovima.
import * as THREE from 'three';
import { PAL } from './palette.js';
import { Builder, box, cyl, cone, jitter, gable } from './geo.js';
import { shade } from './island.js';

const ROOF_ANGLE = Math.atan2(1.35, 1.75);

function van(b, stripe, at = [-3.05, 0, 2.55], rotY = 0.35) {
  const v = new Builder();
  v.add(box(1.0, 0.82, 1.95), PAL.white, { pos: [0, 0.16, 0] });
  v.add(box(0.98, 0.42, 0.55), PAL.white, { pos: [0, 0.16, 1.2] });
  v.add(box(0.9, 0.32, 0.06), PAL.glass, { pos: [0, 0.68, 0.98], rot: [-0.35, 0, 0] });
  v.add(box(1.02, 0.14, 1.6), stripe, { pos: [0, 0.52, -0.1] });
  [[-0.5, 0.95], [0.5, 0.95], [-0.5, -0.6], [0.5, -0.6]].forEach(([x, z]) => v.add(cyl(0.17, 0.17, 0.12, 8), PAL.ink, { pos: [x, 0.17, z], rot: [0, 0, Math.PI / 2] }));
  b.absorb(v, { pos: at, rot: [0, rotY, 0] });
}

const BUILDERS = [
  // 0 — klima
  (b) => {
    [[0.95, -0.55], [1.75, 0.45]].forEach(([y, z]) => {
      b.add(box(0.3, 0.52, 0.78), PAL.white, { pos: [-2.06, y, z] });
      b.add(cyl(0.18, 0.18, 0.04, 10), PAL.steel, { pos: [-2.22, y + 0.26, z], rot: [0, 0, Math.PI / 2] });
      b.add(box(0.05, 0.05, 0.9), PAL.metal, { pos: [-1.95, y - 0.04, z] });
    });
    b.add(cyl(0.035, 0.035, 1.2, 5), PAL.white, { pos: [-1.97, 0.6, -0.08] });
    van(b, PAL.signal);
  },
  // 1 — voda
  (b) => {
    b.add(cyl(0.38, 0.38, 1.1, 10), PAL.white, { pos: [3.4, 1.95, -0.7], rot: [0, 0, Math.PI / 2] });
    b.add(box(0.12, 0.25, 0.7), PAL.steel, { pos: [2.95, 1.81, -0.7] });
    b.add(box(0.12, 0.25, 0.7), PAL.steel, { pos: [3.85, 1.81, -0.7] });
    [-0.9, 0.35].forEach((z, i) => {
      b.add(cyl(0.07, 0.07, 2.25, 6), i ? '#b87333' : PAL.signal, { pos: [-1.98, 0, z] });
      b.add(box(0.16, 0.16, 0.16), PAL.steel, { pos: [-1.98, 2.25, z] });
    });
    b.add(cyl(0.07, 0.07, 1.25, 6), PAL.signal, { pos: [-1.98, 2.25, -0.9], rot: [Math.PI / 2, 0, 0] });
    b.add(box(0.7, 0.36, 0.38), PAL.red, { pos: [-1.4, 0, 2.55] });
    b.add(box(0.5, 0.08, 0.1), PAL.dark, { pos: [-1.4, 0.4, 2.55] });
    let puddle = new THREE.CircleGeometry(0.6, 8);
    b.add(puddle, PAL.water, { pos: [-2.6, 0.06, 2.4], rot: [-Math.PI / 2, 0, 0], scale: [1.3, 1, 1] });
    van(b, '#2b8bd6', [-3.2, 0, 1.1], 0.1);
  },
  // 2 — struja
  (b) => {
    b.add(cyl(0.07, 0.09, 3.9, 6), PAL.wood, { pos: [-3.3, 0, 2.3] });
    b.add(box(1.1, 0.1, 0.1), PAL.wood, { pos: [-3.3, 3.55, 2.3] });
    [-0.45, 0, 0.45].forEach((x) => b.add(cyl(0.045, 0.045, 0.16, 6), PAL.white, { pos: [-3.3 + x, 3.6, 2.3] }));
    const curve = new THREE.QuadraticBezierCurve3(new THREE.Vector3(-3.3, 3.62, 2.3), new THREE.Vector3(-2.7, 2.6, 1.6), new THREE.Vector3(-1.95, 2.35, 1.1));
    b.add(new THREE.TubeGeometry(curve, 10, 0.022, 4), PAL.ink);
    for (let r = 0; r < 2; r++)
      for (let c = 0; c < 3; c++) {
        const z = 0.4 + r * 0.62;
        const y = 2.5 + (1.75 - z) * (1.35 / 1.75) + 0.08;
        b.add(box(0.78, 0.04, 0.56), PAL.navy, { pos: [-1.0 + c * 0.86, y, z], rot: [ROOF_ANGLE, 0, 0] });
        b.add(box(0.8, 0.02, 0.58), PAL.metal, { pos: [-1.0 + c * 0.86, y - 0.025, z], rot: [ROOF_ANGLE, 0, 0] });
      }
    b.add(box(0.34, 0.95, 0.24), PAL.white, { pos: [2.45, 0, 2.6] });
    b.add(box(0.2, 0.08, 0.02), PAL.green, { pos: [2.45, 0.75, 2.73] });
  },
  // 3 — krov
  (b) => {
    for (let lv = 0; lv < 3; lv++) {
      const y = 0.95 + lv * 0.95;
      b.add(box(0.5, 0.05, 3.2), PAL.wood, { pos: [-2.3, y, 0] });
      b.add(box(0.04, 0.04, 3.2), PAL.yellow, { pos: [-2.55, y + 0.45, 0] });
    }
    [-1.5, 0, 1.5].forEach((z) => [-2.08, -2.52].forEach((x) => b.add(box(0.05, 3.3, 0.05), PAL.steel, { pos: [x, 0, z] })));
    b.add(box(0.04, 3.2, 0.04), PAL.steel, { pos: [-2.52, 0, -0.02], rot: [0.85, 0, 0] });
    // ljestve
    const lad = new Builder();
    lad.add(box(0.05, 3.2, 0.05), PAL.metal, { pos: [-0.22, 0, 0] });
    lad.add(box(0.05, 3.2, 0.05), PAL.metal, { pos: [0.22, 0, 0] });
    for (let i = 1; i < 10; i++) lad.add(box(0.44, 0.04, 0.04), PAL.metal, { pos: [0, i * 0.32, 0] });
    b.absorb(lad, { pos: [1.2, 0, 2.15], rot: [-0.32, 0, 0] });
    // paleta crijepa
    b.add(box(1.0, 0.14, 0.8), PAL.wood, { pos: [-3.0, 0, 2.6] });
    for (let i = 0; i < 6; i++) b.add(box(0.9, 0.08, 0.7), i % 2 ? PAL.roofA : PAL.roofB, { pos: [-3.0, 0.14 + i * 0.09, 2.6] });
    // otkriveni dio krova
    for (let i = 0; i < 4; i++) b.add(box(0.06, 0.06, 1.8), PAL.wood, { pos: [-1.6 + i * 0.36, 3.05, 0.82], rot: [ROOF_ANGLE, 0, 0] });
  },
  // 4 — građevina (toranjska dizalica)
  (b) => {
    const cx = -2.9, cz = -2.9;
    for (let i = 0; i < 9; i++) b.add(box(0.34, 0.8, 0.34), i % 2 ? PAL.yellow : shade(PAL.yellow, -0.1), { pos: [cx, i * 0.8, cz] });
    b.add(box(0.6, 0.55, 0.55), PAL.white, { pos: [cx + 0.1, 7.2, cz] });
    b.add(box(7.2, 0.24, 0.26), PAL.yellow, { pos: [cx + 2.6, 7.75, cz] });
    b.add(box(0.8, 0.5, 0.6), PAL.rock2, { pos: [cx - 1.5, 7.55, cz] });
    b.add(cone(0.12, 1.2, 4), PAL.yellow, { pos: [cx, 7.85, cz] });
    b.add(box(0.03, 3.2, 0.03), PAL.ink, { pos: [cx + 4.4, 4.6, cz] });
    b.add(box(0.7, 0.35, 0.5), PAL.roofB, { pos: [cx + 4.4, 4.25, cz] });
    // ograda, čunjevi, pijesak
    for (let i = 0; i < 5; i++) b.add(box(0.9, 0.55, 0.03), i % 2 ? PAL.white : PAL.red, { pos: [-2.6 + i * 0.95, 0, 3.15] });
    [[2.6, 2.3], [2.2, 2.7]].forEach(([x, z]) => b.add(cone(0.14, 0.4, 6), '#f07b2f', { pos: [x, 0, z] }));
    b.add(cone(0.9, 0.7, 7), PAL.sand, { pos: [-3.4, 0, 1.4] });
  },
  // 5 — smještaj
  (b) => {
    b.add(box(2.2, 0.14, 1.5), PAL.white, { pos: [-3.25, 0, 2.2] });
    b.add(box(1.9, 0.16, 1.2), PAL.water, { pos: [-3.25, 0.001, 2.2] });
    [[2.4, 2.45], [3.05, 2.45]].forEach(([x, z]) => {
      b.add(box(0.42, 0.12, 0.95), PAL.white, { pos: [x, 0.14, z] });
      b.add(box(0.42, 0.06, 0.4), PAL.white, { pos: [x, 0.3, z - 0.38], rot: [0.6, 0, 0] });
      b.add(box(0.36, 0.03, 0.6), PAL.signal, { pos: [x, 0.27, z + 0.08] });
    });
    b.add(cyl(0.03, 0.03, 1.5, 5), PAL.white, { pos: [2.72, 0, 1.9] });
    b.add(cone(0.85, 0.35, 8), PAL.red, { pos: [2.72, 1.45, 1.9] });
    b.add(cone(0.85, 0.35, 8), PAL.white, { pos: [2.72, 1.46, 1.9], rot: [0, Math.PI / 8, 0], scale: [0.6, 1, 0.6] });
    // kofer
    b.add(box(0.36, 0.5, 0.2), PAL.navy, { pos: [-0.7, 0, 2.45] });
  },
  // 6 — trgovina
  (b) => {
    for (let i = 0; i < 7; i++) b.add(box(0.4, 0.06, 0.8), i % 2 ? PAL.white : PAL.signal, { pos: [-1.2 + i * 0.4, 1.75, 1.85], rot: [0.35, 0, 0] });
    [[-1.6, 2.35, PAL.red], [-1.0, 2.45, '#f08a24'], [1.6, 2.4, PAL.leafC]].forEach(([x, z, c]) => {
      b.add(box(0.55, 0.32, 0.42), PAL.wood, { pos: [x, 0, z] });
      for (let k = 0; k < 6; k++) b.add(new THREE.IcosahedronGeometry(0.09, 0), c, { pos: [x - 0.18 + (k % 3) * 0.18, 0.36, z - 0.09 + Math.floor(k / 3) * 0.18] });
    });
    [[2.5, 0], [2.5, 0.36], [2.9, 0]].forEach(([x, y]) => b.add(box(0.36, 0.34, 0.36), '#c9a26b', { pos: [x, y, 2.2] }));
    // kolica
    const k = new Builder();
    k.add(box(0.5, 0.04, 0.7), PAL.metal, { pos: [0, 0.32, 0] });
    k.add(box(0.5, 0.32, 0.03), PAL.metal, { pos: [0, 0.34, 0.34] });
    k.add(box(0.5, 0.32, 0.03), PAL.metal, { pos: [0, 0.34, -0.34] });
    k.add(box(0.03, 0.32, 0.7), PAL.metal, { pos: [0.24, 0.34, 0] });
    k.add(box(0.03, 0.32, 0.7), PAL.metal, { pos: [-0.24, 0.34, 0] });
    [[-0.2, 0.28], [0.2, 0.28], [-0.2, -0.28], [0.2, -0.28]].forEach(([x, z]) => k.add(cyl(0.05, 0.05, 0.3, 5), PAL.ink, { pos: [x, 0, z] }));
    b.absorb(k, { pos: [-2.7, 0, 2.6], rot: [0, 0.6, 0] });
  },
  // 7 — ostale usluge
  (b) => {
    b.add(cyl(0.04, 0.05, 3.4, 6), PAL.metal, { pos: [-2.9, 0, 2.4] });
    b.add(box(0.06, 0.6, 0.95), PAL.signal, { pos: [-2.9, 2.75, 2.88] });
    b.add(box(1.2, 0.06, 0.38), PAL.wood, { pos: [2.5, 0.42, 2.5] });
    b.add(box(1.2, 0.36, 0.06), PAL.wood, { pos: [2.5, 0.62, 2.33] });
    [[1.98, 2.5], [3.02, 2.5]].forEach(([x, z]) => b.add(box(0.08, 0.42, 0.34), PAL.dark, { pos: [x, 0, z] }));
    [[-1.7, 2.55], [1.4, 2.55]].forEach(([x, z]) => {
      b.add(box(0.8, 0.3, 0.32), PAL.roofB, { pos: [x, 0, z] });
      for (let i = 0; i < 4; i++) {
        let f = new THREE.IcosahedronGeometry(0.11, 0);
        b.add(f, [PAL.red, PAL.yellow, '#e889b0', PAL.white][i], { pos: [x - 0.27 + i * 0.18, 0.38, z] });
      }
    });
    b.add(box(0.7, 0.42, 0.05), PAL.ink, { pos: [-0.9, 1.0, 1.56] });
    b.add(box(0.5, 0.08, 0.06), PAL.green, { pos: [-0.9, 1.0, 1.58] });
  },
];

export function buildTradeProps(mat) {
  return BUILDERS.map((fn, i) => {
    const b = new Builder();
    fn(b);
    const m = new THREE.Mesh(b.merge(), mat);
    m.castShadow = true;
    m.receiveShadow = true;
    const g = new THREE.Group();
    g.name = `trade-${i}`;
    g.add(m);
    g.scale.setScalar(0.001);
    g.visible = false;
    return g;
  });
}
