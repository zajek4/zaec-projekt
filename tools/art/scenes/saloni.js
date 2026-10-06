// Saloni ljepote: radno mjesto s okruglim ogledalom i prstenastim svjetlom; sljedeća mjesta u nizu
// još su nacrt — termini koji se tek popunjavaju. Paketi svjetla (rezervacije) dolaze do prstena.
import * as THREE from 'three';
import { mat, box, createCut, createBlueprint, cutSheet, trail, motes, bokeh, light, rng, V } from '../kit.js';
import { nightLights } from './common.js';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

const RB = (w, h, d, r = 0.04) => new RoundedBoxGeometry(w, h, d, 4, r);

function station(scene, cut, x, o = {}) {
  const g = new THREE.Group();
  g.position.x = x;
  scene.add(g);
  const chrome = mat({ color: '#d9dce2', rough: 0.12, metal: 1, env: 1.6 }, cut);
  const leather = mat({ color: '#121216', rough: 0.42, metal: 0.05, env: 1.2 }, cut);
  const stone = mat({ color: '#d7d1c8', rough: 0.25, env: 1.1 }, cut);
  // ogledalo i prsten
  const mirror = new THREE.Mesh(new THREE.CircleGeometry(0.56, 64), mat({ color: '#3a4150', rough: 0.06, metal: 1, env: 0.45 }, cut));
  mirror.position.set(0, 1.62, 0.04);
  g.add(mirror);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.6, 0.028, 16, 96), mat({ color: '#000', emissive: '#fff1dc', ei: o.ring ?? 7 }, cut));
  ring.position.set(0, 1.62, 0.07);
  g.add(ring);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(0.64, 0.012, 8, 96), chrome);
  rim.position.set(0, 1.62, 0.06);
  g.add(rim);
  // polica
  g.add(box(1.5, 0.06, 0.42, stone, 0, 0.92, 0.22));
  g.add(box(0.05, 0.92, 0.05, chrome, -0.68, 0, 0.36));
  g.add(box(0.05, 0.92, 0.05, chrome, 0.68, 0, 0.36));
  // bočice
  const R = rng(5 + Math.round(x * 10));
  const glassM = mat({ color: '#b5701e', rough: 0.08, metal: 0.2, env: 2, emissive: '#5a2a05', ei: 0.4 }, cut);
  const glassC = mat({ color: '#dfe6f2', rough: 0.05, metal: 0.3, env: 2 }, cut);
  for (let k = 0; k < 5; k++) {
    const h = 0.12 + R() * 0.14, r = 0.03 + R() * 0.02;
    const b = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, 24), k % 2 ? glassM : glassC);
    b.position.set(-0.55 + k * 0.1 + (k > 2 ? 0.55 : 0), 0.98 + h / 2, 0.25 + R() * 0.08);
    b.castShadow = true;
    g.add(b);
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.6, r * 0.6, 0.04, 16), mat({ color: '#111', rough: 0.3, metal: 0.6 }, cut));
    cap.position.copy(b.position).add(V(0, h / 2 + 0.02, 0));
    g.add(cap);
  }
  // stolica
  const ch = new THREE.Group();
  ch.position.set(0.05, 0, 1.15);
  ch.rotation.y = o.turn ?? 0.35;
  g.add(ch);
  const baseD = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.36, 0.05, 48), chrome);
  baseD.position.y = 0.025;
  ch.add(baseD);
  const col = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.06, 0.38, 24), chrome);
  col.position.y = 0.24;
  ch.add(col);
  const seat = new THREE.Mesh(RB(0.58, 0.16, 0.56, 0.06), leather);
  seat.position.y = 0.5;
  ch.add(seat);
  const cush = new THREE.Mesh(new THREE.CylinderGeometry(0.27, 0.27, 0.1, 32), leather);
  cush.scale.set(1.05, 1, 1);
  cush.position.y = 0.6;
  ch.add(cush);
  const backr = new THREE.Mesh(RB(0.56, 0.62, 0.12, 0.05), leather);
  backr.position.set(0, 0.92, -0.25);
  backr.rotation.x = -0.12;
  ch.add(backr);
  const head = new THREE.Mesh(RB(0.3, 0.14, 0.1, 0.04), leather);
  head.position.set(0, 1.32, -0.3);
  ch.add(head);
  for (const sx of [-1, 1]) {
    const arm = new THREE.Mesh(RB(0.08, 0.06, 0.48, 0.025), chrome);
    arm.position.set(sx * 0.31, 0.74, 0.0);
    ch.add(arm);
    const post = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.18, 0.04), chrome);
    post.position.set(sx * 0.31, 0.64, 0.15);
    ch.add(post);
  }
  const foot = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.03, 0.14), chrome);
  foot.position.set(0, 0.2, 0.42);
  ch.add(foot);
  g.traverse((m) => { if (m.isMesh) { m.castShadow = true; m.receiveShadow = true; } });
  return g;
}

export default {
  file: 'world/djelatnost-saloni-ljepote.webp',
  fov: 38,
  async build(st) {
    const { scene, camera } = st;
    camera.position.set(2.3, 1.5, 5.3);
    camera.lookAt(-1.3, 1.25, 0.2);
    st.addFloor({ cell: 0.6, gridI: 0.3, refl: 0.6, fall: 0.2, rough: 0.002 });
    scene.fog.density = 0.05;
    nightLights(scene, { key: [-3, 6, 6], keyI: 0.35, fill: [6, 3, 4], fillI: 0.25, hemi: 0.2, target: [0, 1, 0], shadow: 6 });

    const cut = createCut(V(1, 0, 0), V(-1.25, 0, 0), { k: 30, i: 1.6 });
    const bp = createBlueprint(cut, { width: 1.3, opacity: 0.85, ghost: 0.05, angle: 30 });

    // zid od drvenih lamela (toplo, luksuzno)
    const slatM = mat({ color: '#5a3f2c', rough: 0.55, env: 0.8 }, cut);
    const wallM = mat({ color: '#1d1a1b', rough: 0.8 }, cut);
    const wall = new THREE.Mesh(new THREE.PlaneGeometry(14, 4), wallM);
    wall.position.set(-3, 2, -0.01);
    wall.receiveShadow = true;
    scene.add(wall);
    const slats = new THREE.InstancedMesh(new THREE.BoxGeometry(0.045, 3.2, 0.05), slatM, 220);
    const M = new THREE.Matrix4();
    for (let k = 0; k < 220; k++) { M.makeTranslation(-9 + k * 0.07, 1.6, 0.01); slats.setMatrixAt(k, M); }
    slats.receiveShadow = true;
    scene.add(slats);
    // svjetlosna traka u stropu (toplo, uz zid)
    const strip = box(14, 0.03, 0.05, mat({ color: '#000', emissive: '#ffd8a8', ei: 3 }, cut), -3, 3.2, 0.12);
    scene.add(strip);

    const s1 = station(scene, cut, 0, { ring: 1.6, turn: 0.6 });
    st.bloom.strength = 0.6;
    st.bloom.radius = 0.35;
    st.bloom.threshold = 0.9;
    const s2 = station(scene, cut, -2.4, { ring: 0, turn: 0.2 });
    const s3 = station(scene, cut, -4.8, { ring: 0, turn: 0.1 });
    // svjetlo prstena na lice prostora
    light(scene, 'spot', '#ffd2a0', 60, [1.2, 3.1, 2.6], [0.05, 0.6, 1.15], { angle: 0.55, pen: 0.9, shadow: true });
    light(scene, 'point', '#ffb15e', 1.2, [-2.4, 2.6, 1], null, { dist: 4 });

    scene.updateMatrixWorld(true);
    for (const s of [s1, s2, s3]) s.traverse((o) => { if (o.isMesh) bp.edges(o, 35); });
    // tlocrt sljedećih mjesta (kote na podu)
    for (const x of [-2.4, -4.8]) {
      bp.poly([V(x - 0.8, 0.002, 0.1), V(x + 0.8, 0.002, 0.1), V(x + 0.8, 0.002, 2.0), V(x - 0.8, 0.002, 2.0)], true);
      const c = [];
      for (let k = 0; k <= 32; k++) { const a = (k / 32) * Math.PI * 2; c.push(V(x + 0.05 + Math.cos(a) * 0.7, 0.002, 1.15 + Math.sin(a) * 0.7)); }
      bp.poly(c);
    }
    // rezervacije: paketi svjetla putuju duž zida prema prstenu
    const R = rng(44);
    for (let k = 0; k < 5; k++) {
      const y = 2.6 + R() * 0.4;
      const pts = [V(-7, y, 0.15 + R() * 0.2), V(-4, y - 0.1, 0.25), V(-1.5, y - 0.3 - R() * 0.2, 0.3), V(-0.5, 2.05, 0.2), V(0, 1.62 + 0.6, 0.09)];
      const from = R() * 0.3;
      trail(scene, new THREE.CatmullRomCurve3(pts), { r: 0.006, color: k % 2 ? '#7f9bff' : '#ffc070', i: 2.4, tail: 0.45, from, to: Math.min(1, from + 0.45 + R() * 0.4), seg: 120, radial: 5 });
    }
    st.dots([{ p: [0, 2.22, 0.09], c: '#fff3e0', s: 0.12, k: 3 }]);

    cutSheet(scene, cut, { size: 5, height: 4, i: 0.5 });
    bp.build(scene, st);
    motes(st, { n: 140, box: [-3, 0.2, 0.2, 2.5, 3, 3.4], seed: 9, size: [0.006, 0.02], a: [0.2, 0.6] });
    bokeh(st, [
      { p: [2.5, 1.0, 4.1], c: '#ffcf90', s: 0.16, a: 0.35 },
      { p: [2.6, 1.6, 4.0], c: '#ffe2bf', s: 0.1, a: 0.3 },
      { p: [2.3, 0.6, 4.2], c: '#5f7dff', s: 0.12, a: 0.25 },
    ]);
  },
};
