// Električari: dalekovod u nacrtu, kuća sa solarima i punjačem u stvarnosti; struja i upiti putuju do kuće.
import * as THREE from 'three';
import { mat, box, gable, createCut, createBlueprint, cutSheet, trail, struts, catenary, canvasTex, motes, bokeh, light, cone, horizon, V } from '../kit.js';
import { addWindow, nightLights, PAL } from './common.js';

function pylon(scene, bp, m, x, z, s = 1, ry = 0) {
  const pairs = [];
  const P = (px, py, pz) => { const v = V(px * s, py * s, pz * s).applyAxisAngle(V(0, 1, 0), ry); return v.add(V(x, 0, z)); };
  const lv = [0, 6, 11, 15, 18.5, 21, 24.5];
  const half = (y) => (y < 18.5 ? 3 - (y / 18.5) * 2.1 : 0.9 - ((y - 18.5) / 6) * 0.35);
  const corners = (y) => { const hh = half(y); return [P(-hh, y, -hh), P(hh, y, -hh), P(hh, y, hh), P(-hh, y, hh)]; };
  for (let i = 0; i < lv.length - 1; i++) {
    const a = corners(lv[i]), b = corners(lv[i + 1]);
    for (let k = 0; k < 4; k++) {
      pairs.push([a[k], b[k], 0.13 * s]);
      pairs.push([a[k], b[(k + 1) % 4], 0.05 * s]);
      pairs.push([a[(k + 1) % 4], b[k], 0.05 * s]);
      pairs.push([b[k], b[(k + 1) % 4], 0.06 * s]);
    }
  }
  const top = P(0, 27.5, 0);
  for (const c of corners(24.5)) pairs.push([c, top, 0.07 * s]);
  // konzole
  const arms = [];
  for (const [y, L] of [[18.5, 7.2], [21, 5.4]]) {
    for (const sx of [-1, 1]) {
      const r0 = P(sx * half(y), y, -0.6), r1 = P(sx * half(y), y, 0.6);
      const tip = P(sx * L, y, 0);
      const up0 = P(sx * half(y + 1.6), y + 1.6, 0);
      pairs.push([r0, tip, 0.06 * s], [r1, tip, 0.06 * s], [up0, tip, 0.05 * s]);
      arms.push(tip);
    }
  }
  struts(scene, pairs, 0.06, m);
  for (const [a, b] of pairs) bp.line(a, b);
  // izolatori: lanci prema dolje
  const ends = arms.map((t) => t.clone().add(V(0, -1.8 * s, 0)));
  const ins = mat({ color: '#9aa6b8', rough: 0.25, metal: 0.2 }, null);
  arms.forEach((t, i) => {
    const c = new THREE.Mesh(new THREE.CylinderGeometry(0.16 * s, 0.16 * s, 1.8 * s, 8), ins);
    c.position.copy(t.clone().add(ends[i]).multiplyScalar(0.5));
    c.castShadow = true;
    scene.add(c);
    bp.line(t, ends[i]);
  });
  return ends;
}

export default {
  file: 'world/djelatnost-elektricari.webp',
  fov: 30,
  async build(st) {
    const { scene, camera } = st;
    camera.position.set(29, 1.35, 36);
    camera.lookAt(-5, 9.2, -7);
    st.sky.uAz.value = -2.4;
    st.sky.uGlowI.value = 0.6;
    st.addFloor({ cell: 2, gridI: 0.42, refl: 0.5, center: [0, 0], fall: 0.035 });
    nightLights(scene, { key: [-26, 10, -30], keyI: 3, target: [0, 3, 0] });

    // rez: lijevo nacrt, desno stvarnost (dijagonalno kroz kuću)
    const cut = createCut(V(1, 0, 0.42), V(-0.6, 0, 0), { k: 9, i: 2.2 });
    const bp = createBlueprint(cut, { width: 1.7, opacity: 0.85, ghost: 0.035 });

    // ——— kuća ———
    const house = new THREE.Group();
    scene.add(house);
    const wall = mat({ color: '#8a8478', rough: 0.85 }, cut);
    const dark = mat({ color: '#25262c', rough: 0.6, metal: 0.2 }, cut);
    const W = 11, D = 8, H = 5.6;
    const body = box(W, H, D, wall, 1.5, 0, -1);
    house.add(body);
    // podnožje i strehe
    house.add(box(W + 0.2, 0.35, D + 0.2, dark, 1.5, 0, -1));
    const roofM = mat({ color: '#2b2e36', rough: 0.55, metal: 0.25 }, cut);
    const roof = gable(W, D, 3.3, roofM, 0.55);
    roof.position.set(1.5, H, -1);
    house.add(roof);
    // prozori na pročelju (z = 3)
    const zf = 3.02;
    for (const [x, y, w, h] of [[-2.3, 0.6, 2.2, 2.3], [0.9, 0.6, 1.3, 2.3], [3.6, 0.6, 2.6, 2.3], [-2.3, 3.4, 1.3, 1.5], [1.2, 3.4, 1.3, 1.5], [4.2, 3.4, 1.3, 1.5]]) {
      addWindow(house, cut, { w, h, x: x + 1.5 - 1.5, y: y + h / 2, z: zf, lit: 1 });
    }
    // bočni prozori (x = 7.02)
    for (const [z, y] of [[-3, 1.6], [0.5, 1.6], [-1.2, 4.1]]) addWindow(house, cut, { w: 1.2, h: 1.4, x: 7.03, y, z, ry: Math.PI / 2 });
    // ulazna vrata (svjetleći rub)
    const door = box(1.1, 2.3, 0.1, mat({ color: '#121318', rough: 0.4, metal: 0.5, emissive: '#ffb46a', ei: 0.05 }, cut), -0.15, 0.35, 3.04);
    house.add(door);

    // ——— solarni paneli na kosini prema kameri ———
    const cells = canvasTex(256, 384, (x, w, h) => {
      x.fillStyle = '#0a1636'; x.fillRect(0, 0, w, h);
      x.strokeStyle = 'rgba(120,150,255,0.35)'; x.lineWidth = 2;
      for (let i = 1; i < 6; i++) { x.beginPath(); x.moveTo((i * w) / 6, 0); x.lineTo((i * w) / 6, h); x.stroke(); }
      for (let j = 1; j < 10; j++) { x.beginPath(); x.moveTo(0, (j * h) / 10); x.lineTo(w, (j * h) / 10); x.stroke(); }
      x.strokeStyle = '#c9ced8'; x.lineWidth = 10; x.strokeRect(0, 0, w, h);
    });
    const panelM = mat({ color: '#ffffff', map: cells, rough: 0.16, metal: 0.55, env: 1.6 }, cut);
    const slope = Math.atan2(3.3, D / 2 + 0.55);
    const panels = new THREE.Group();
    for (let r = 0; r < 2; r++) {
      for (let c = 0; c < 6; c++) {
        const p = new THREE.Mesh(new THREE.BoxGeometry(1.05, 0.05, 1.7), panelM);
        p.position.set(-2.6 + c * 1.12, 0.12, 0.95 + r * 1.78);
        p.castShadow = true;
        panels.add(p);
      }
    }
    panels.position.set(1.5, H, -1);
    panels.rotation.x = slope;
    // panele postavi na kosinu: ravnina krova od sljemena (z=-1, y=H+3.3) prema strehi
    panels.position.set(1.5 + 0.2, H + 3.3 - 0.05, -1);
    panels.rotation.set(slope, 0, 0);
    scene.add(panels);

    // ——— punjač za auto ———
    const post = box(0.32, 1.5, 0.22, mat({ color: '#15171d', rough: 0.35, metal: 0.6 }, cut), 9.2, 0, 4.6);
    scene.add(post);
    const led = box(0.05, 0.9, 0.02, mat({ color: '#000', emissive: '#4f73ff', ei: 6 }, cut), 9.2, 0.35, 4.72);
    scene.add(led);
    light(scene, 'point', '#4a6bff', 6, [9.3, 1.1, 5.2], null, { dist: 8 });

    // ——— vrtna rasvjeta i svjetlo iz prozora na tlo ———
    for (const x of [-4.5, 2.2, 7.6]) {
      scene.add(box(0.12, 0.7, 0.12, mat({ color: '#1b1c20', metal: 0.6, rough: 0.4 }, cut), x, 0, 5.4));
      light(scene, 'point', '#ffb15e', 1.6, [x, 0.75, 5.5], null, { dist: 5 });
    }
    st.dots([-4.5, 2.2, 7.6].map((x) => ({ p: [x, 0.74, 5.46], c: '#ffd29a', s: 0.5, k: 2.2 })));
    light(scene, 'point', '#ffae5c', 9, [1.5, 1.2, 5.2], null, { dist: 12 });
    light(scene, 'point', '#ffae5c', 10, [7.8, 2, -1], null, { dist: 9 });

    // rubovi kuće u nacrt
    scene.updateMatrixWorld(true);
    house.traverse((o) => { if (o.isMesh && o.geometry.type !== 'PlaneGeometry') bp.edges(o, 30); });
    panels.children.forEach((p) => bp.edges(p, 30));
    // elektroinstalacija u zidovima (vidi se samo u nacrtu)
    const z1 = 2.9, z0 = -4.9;
    const wy = [0.3, 1.15, 2.4];
    bp.poly([V(-4, 0.3, z1), V(7, 0.3, z1)]);
    bp.poly([V(-4, 1.15, z1), V(7, 1.15, z1)]);
    bp.poly([V(-4, 3.2, z1), V(7, 3.2, z1)]);
    bp.poly([V(-4, 0.3, z0), V(-4, 0.3, z1)]);
    bp.poly([V(-4, 1.15, z0), V(-4, 1.15, z1)]);
    for (let x = -3.6; x < 1; x += 1.4) { bp.line(V(x, 0.3, z1), V(x, 3.2, z1)); }
    for (let z = -4.5; z < 2.8; z += 1.5) bp.line(V(-4, 0.3, z), V(-4, 4.8, z));
    // razvodna kutija + simboli utičnica
    const sockets = [];
    for (let x = -3.6; x < 1; x += 1.4) sockets.push([x, 0.3, z1 + 0.02], [x, 1.15, z1 + 0.02]);
    for (let z = -4.5; z < 2.8; z += 1.5) sockets.push([-4.02, 1.15, z]);
    st.dots(sockets.map((p) => ({ p, c: '#8fa6ff', s: 0.22, k: 1.6 })));
    void wy;

    // ——— dalekovod (nacrt) ———
    const pm = mat({ color: '#3a4152', rough: 0.5, metal: 0.7 }, cut);
    const e1 = pylon(scene, bp, pm, -15, -14, 1, 0.9);
    const e2 = pylon(scene, bp, pm, -62, -30, 1, 1.05);
    // vodiči između stupova i dalje van kadra
    const cables = [];
    e1.forEach((a, i) => {
      const b = e2[i];
      const far = a.clone().add(V(46, -3, -34));
      cables.push(catenary(b, a, 2.4), catenary(a, far, 2.6));
    });
    for (const c of cables) bp.poly(c);
    // vodiči su tanki i stvarni (ne režu se), da se vidi silueta
    const cm = new THREE.MeshBasicMaterial({ color: '#7c8cb8', transparent: true, opacity: 0.5 });
    for (const c of cables) scene.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(c), 64, 0.025, 4), cm));

    // ——— struja/upiti: paketi svjetla duž vodiča i luk do kuće ———
    cables.forEach((c, i) => {
      const cur = new THREE.CatmullRomCurve3(c);
      const a = 0.12 + ((i * 0.37) % 0.6);
      trail(scene, cur, { r: 0.045, from: a, to: Math.min(1, a + 0.22), i: 3, color: '#7f9bff', tail: 0.5 });
    });
    const src = e1[1].clone();
    const arcs = [
      [src, V(-6, 14, -6), V(2, 11, -1), V(1.5, 9.1, -1)],
      [e1[0].clone(), V(-4, 12, 0), V(6, 6, 4), V(9.2, 1.6, 4.65)],
    ];
    arcs.forEach((pts, i) => {
      const cur = new THREE.CatmullRomCurve3(pts);
      trail(scene, cur, { r: 0.035, i: 1.8, color: i === 1 ? '#ffc070' : '#93a9ff', tail: 0.42, from: 0.05, to: 1, hot: '#ffffff' });
    });
    st.dots([
      { p: [1.5, 9.1, -1], c: '#cfdaff', s: 1.6, k: 2.4 },
      { p: [9.2, 1.6, 4.65], c: '#ffd9a0', s: 1.2, k: 2.4 },
    ]);

    // list reza po tlu
    cutSheet(scene, cut, { size: 60, height: 14, i: 0.9 });
    // nacrt
    bp.build(scene, st);

    horizon(st, { a0: -2.6, a1: 0.2, center: [0, 0], seed: 5 });
    // zrak: prašina i bokeh
    motes(st, { n: 140, box: [-20, 0.2, -18, 16, 14, 10], seed: 11, size: [0.04, 0.14] });
    bokeh(st, [
      { p: [12.6, 1.1, 15.2], c: '#ffb45e', s: 1.1, a: 0.35 },
      { p: [13.4, 2.6, 14.8], c: '#5f7dff', s: 0.8, a: 0.3 },
      { p: [11.8, 0.5, 15.8], c: '#ffcf90', s: 0.6, a: 0.3 },
    ]);
    void cone;
  },
};
