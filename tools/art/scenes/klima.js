// Klima i grijanje: vanjska jedinica dizalice topline na pročelju; iz ventilatora izlaze dva toka —
// topli (grijanje) i hladni (hlađenje). Lijeva polovica jedinice je nacrt: vide se izmjenjivač i kompresor.
import * as THREE from 'three';
import { mat, box, createCut, createBlueprint, cutSheet, trail, motes, bokeh, light, canvasTex, rng, V } from '../kit.js';
import { addWindow, nightLights } from './common.js';

export default {
  file: 'world/djelatnost-klima-i-grijanje.webp',
  fov: 34,
  async build(st) {
    const { scene, camera } = st;
    camera.position.set(3.5, 1.3, 3.5);
    camera.lookAt(0.45, 1.95, 0.3);
    st.sky.uAz.value = -1.2;
    st.addFloor({ cell: 0.5, gridI: 0.35, refl: 0.5, fall: 0.18, rough: 0.0035 });
    nightLights(scene, { key: [-6, 7, 9], keyI: 1.2, fill: [9, 5, 4], fillI: 0.5, target: [1, 2, 0], shadow: 8 });

    const cut = createCut(V(1, 0, 0.18), V(1.05, 0, 0.5), { k: 30, i: 1.1 });
    const bp = createBlueprint(cut, { width: 1.5, opacity: 0.85, ghost: 0.05 });

    // pročelje: žbuka s fugama
    const plaster = canvasTex(512, 512, (x, w, h) => {
      x.fillStyle = '#3d4049'; x.fillRect(0, 0, w, h);
      const R = rng(3);
      for (let i = 0; i < 9000; i++) { x.fillStyle = `rgba(${R() < 0.5 ? '255,255,255' : '0,0,0'},${R() * 0.06})`; x.fillRect(R() * w, R() * h, 2, 2); }
    });
    plaster.wrapS = plaster.wrapT = THREE.RepeatWrapping;
    plaster.repeat.set(4, 2);
    const wallM = mat({ color: '#ffffff', map: plaster, rough: 0.95 }, null);
    // zid završava uglom kuće (x = 3.2); iza ugla se vidi noć
    const wall = new THREE.Mesh(new THREE.PlaneGeometry(13, 8), wallM);
    wall.position.set(3.2 - 6.5, 4, 0);
    const side = new THREE.Mesh(new THREE.PlaneGeometry(10, 8), wallM);
    side.rotation.y = Math.PI / 2;
    side.position.set(3.2, 4, -5);
    side.receiveShadow = true;
    scene.add(side);
    wall.receiveShadow = true;
    scene.add(wall);
    // sokl
    scene.add(box(13, 0.45, 0.06, mat({ color: '#2a2b30', rough: 0.7 }), 3.2 - 6.5, 0, 0.03));
    // prozor iznad i lijevo
    addWindow(scene, null, { w: 1.5, h: 1.7, x: -2.4, y: 3.0, z: 0.01, lit: 0.55, frame: '#bdb8ae', depth: 0.1 });
    light(scene, 'point', '#ffb15e', 2.5, [-2.4, 2.6, 1.0], null, { dist: 5 });

    // ——— vanjska jedinica ———
    const U = new THREE.Group();
    U.position.set(0.9, 1.45, 0.42);
    scene.add(U);
    const W = 1.05, H = 0.78, D = 0.36;
    const shell = mat({ color: '#d6d8dd', rough: 0.38, metal: 0.25, env: 1.2 }, cut);
    const darkM = mat({ color: '#1a1c22', rough: 0.5, metal: 0.4 }, cut);
    const body = box(W, H, D, shell, 0, 0, 0, 0, U);
    // rešetka ventilatora (prednja strana, lijevi dio)
    const fx = -0.15, fy = H / 2, fz = D / 2 + 0.005;
    const disc = new THREE.Mesh(new THREE.CircleGeometry(0.3, 48), darkM);
    disc.position.set(fx, fy, fz);
    U.add(disc);
    const ringM = mat({ color: '#e9ebee', rough: 0.35, metal: 0.4 }, cut);
    for (let k = 1; k <= 6; k++) {
      const t = new THREE.Mesh(new THREE.TorusGeometry(0.05 * k, 0.005, 6, 48), ringM);
      t.position.set(fx, fy, fz + 0.025);
      U.add(t);
    }
    for (let k = 0; k < 4; k++) {
      const s = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.008, 0.01), ringM);
      s.position.set(fx, fy, fz + 0.026);
      s.rotation.z = (k * Math.PI) / 4;
      U.add(s);
    }
    // lopatice ventilatora
    const bladeM = mat({ color: '#2a2d35', rough: 0.4, metal: 0.3 }, cut);
    for (let k = 0; k < 3; k++) {
      const b = new THREE.Mesh(new THREE.CircleGeometry(0.12, 16, 0, 1.1), bladeM);
      b.position.set(fx, fy, fz + 0.012);
      b.rotation.z = (k * Math.PI * 2) / 3;
      U.add(b);
    }
    // bočne lamele desno
    for (let k = 0; k < 9; k++) U.add(box(0.26, 0.012, 0.012, darkM, 0.33, 0.14 + k * 0.058, fz));
    // nosači
    const brM = mat({ color: '#2b2d33', rough: 0.4, metal: 0.8 }, null);
    for (const x of [-0.38, 0.38]) {
      scene.add(box(0.04, 0.04, 0.55, brM, 0.9 + x, 1.41, 0.28));
      const diag = box(0.03, 0.62, 0.03, brM, 0.9 + x, 1.0, 0.18);
      diag.rotation.x = -0.75;
      scene.add(diag);
    }
    // bakrene cijevi u izolaciji, ulaze u zid
    const pipeM = mat({ color: '#e7e1d6', rough: 0.8 }, null);
    const copper = mat({ color: '#c47a45', rough: 0.3, metal: 1 }, null);
    for (const [dy, r, m] of [[0.18, 0.026, pipeM], [0.3, 0.02, copper]]) {
      const c = new THREE.CatmullRomCurve3([V(1.45, 1.45 + dy, 0.4), V(1.62, 1.45 + dy, 0.4), V(1.75, 1.45 + dy + 0.2, 0.22), V(1.8, 1.45 + dy + 0.8, 0.08), V(1.8, 1.45 + dy + 1.4, 0.0)]);
      const t = new THREE.Mesh(new THREE.TubeGeometry(c, 40, r, 8), m);
      t.castShadow = true;
      scene.add(t);
    }

    scene.updateMatrixWorld(true);
    U.traverse((o) => { if (o.isMesh) bp.edges(o, 25); });
    // unutrašnjost u nacrtu: izmjenjivač (cik-cak cijev) i kompresor
    const o = U.position;
    const coil = [];
    for (let k = 0; k <= 14; k++) coil.push(V(o.x - 0.48 + 0.02, o.y + 0.06 + k * 0.047, o.z + (k % 2 ? -0.13 : 0.13)));
    bp.poly(coil);
    for (let k = 0; k <= 14; k++) bp.line(V(o.x - 0.48, o.y + 0.06 + k * 0.047, o.z - 0.15), V(o.x - 0.48, o.y + 0.06 + k * 0.047, o.z + 0.15));
    const cc = V(o.x + 0.25, o.y, o.z);
    for (let k = 0; k < 20; k++) {
      const a0 = (k / 20) * Math.PI * 2, a1 = ((k + 1) / 20) * Math.PI * 2;
      for (const y of [0.04, 0.32]) bp.line(V(cc.x + Math.cos(a0) * 0.09, cc.y + y, cc.z + Math.sin(a0) * 0.09), V(cc.x + Math.cos(a1) * 0.09, cc.y + y, cc.z + Math.sin(a1) * 0.09));
    }
    for (const a of [0, Math.PI / 2, Math.PI, 1.5 * Math.PI]) bp.line(V(cc.x + Math.cos(a) * 0.09, cc.y + 0.04, cc.z + Math.sin(a) * 0.09), V(cc.x + Math.cos(a) * 0.09, cc.y + 0.32, cc.z + Math.sin(a) * 0.09));
    // krug ventilatora u nacrtu
    const fc = V(o.x + fx, o.y + fy, o.z + fz + 0.03);
    for (let k = 0; k < 48; k++) {
      const a0 = (k / 48) * Math.PI * 2, a1 = ((k + 1) / 48) * Math.PI * 2;
      bp.line(V(fc.x + Math.cos(a0) * 0.3, fc.y + Math.sin(a0) * 0.3, fc.z), V(fc.x + Math.cos(a1) * 0.3, fc.y + Math.sin(a1) * 0.3, fc.z));
    }

    // ——— dva toka zraka iz ventilatora: zavojnice koje se šire; topli krak se diže, hladni pada ———
    const R = rng(8);
    const flows = [];
    const ARMS = 14;
    for (let k = 0; k < ARMS; k++) {
      const warm = k % 2 === 0;
      const a0 = (k / ARMS) * Math.PI * 2 + R() * 0.2;
      const turns = 0.55 + R() * 0.25;
      const L = 2.4 + R() * 0.8;
      const pts = [];
      for (let i = 0; i <= 40; i++) {
        const t = i / 40;
        const a = a0 + t * turns * Math.PI * 2;
        const r = 0.06 + 0.3 * t + 0.9 * t * t;
        const buoy = (warm ? 1 : -0.7) * 1.6 * t * t;
        const drift = (warm ? -1 : 1) * 0.9 * t * t;
        pts.push(V(fc.x + Math.cos(a) * r + drift, fc.y + Math.sin(a) * r * 0.8 + buoy, fc.z + 0.02 + t * L));
      }
      const c = new THREE.CatmullRomCurve3(pts);
      const from = 0.02, to = 0.75 + R() * 0.25;
      trail(scene, c, { r: 0.012 + R() * 0.008, color: warm ? '#ffb23f' : '#4f78ff', hot: warm ? '#ffe7c2' : '#dfe7ff', i: 1.6 + R(), tail: 0.9, from, to, seg: 140, radial: 6 });
      // drugi, tanji trag uz isti krak (volumen)
      trail(scene, c, { r: 0.004, color: warm ? '#ffd08a' : '#9fb6ff', i: 2.2, tail: 0.5, from: 0.1, to: to * 0.92, seg: 140, radial: 4 });
      flows.push({ p: c.getPoint(to).toArray(), c: warm ? '#ffd7a0' : '#c7d4ff', s: 0.06, k: 2.2 });
    }
    st.dots(flows);
    // meki oblaci toplog i hladnog zraka
    st.dots([
      { p: [fc.x - 1.0, fc.y + 1.2, fc.z + 2.2], c: '#ff9a3c', s: 3.5, k: 0.3, a: 0.6 },
      { p: [fc.x + 0.9, fc.y - 0.6, fc.z + 2.2], c: '#3b5bff', s: 3.5, k: 0.4, a: 0.6 },
    ]);
    light(scene, 'point', '#ff9a3c', 2.5, [fc.x - 0.8, fc.y + 1.0, fc.z + 1.6], null, { dist: 4 });
    light(scene, 'point', '#4a6bff', 3, [fc.x + 0.8, fc.y - 0.4, fc.z + 1.6], null, { dist: 4 });
    // LED statusa
    st.dots([{ p: [o.x + 0.45, o.y + H - 0.08, o.z + D / 2 + 0.01], c: '#6f8cff', s: 0.06, k: 3 }]);

    cutSheet(scene, cut, { size: 6, height: 5, i: 0.7 });
    bp.build(scene, st);
    motes(st, { n: 120, box: [-2, 0.2, 0.2, 4.5, 4, 4.5], seed: 31, size: [0.008, 0.03], a: [0.2, 0.7] });
    bokeh(st, [
      { p: [3.6, 0.9, 3.2], c: '#ffb45e', s: 0.25, a: 0.3 },
      { p: [3.8, 1.7, 3.0], c: '#5f7dff', s: 0.18, a: 0.25 },
    ]);
  },
};
