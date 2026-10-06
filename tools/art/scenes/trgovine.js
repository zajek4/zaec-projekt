// Trgovine i webshop: izlog koji svijetli noću; paketi odlaze svjetlosnim lukovima prema kupcima,
// a lijevi dio trgovine je nacrt — isti dućan, sada i online.
import * as THREE from 'three';
import { mat, box, createCut, createBlueprint, cutSheet, trail, motes, bokeh, light, horizon, canvasTex, rng, V } from '../kit.js';
import { nightLights, addWindow } from './common.js';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

export default {
  file: 'world/djelatnost-trgovine-i-webshop.webp',
  fov: 34,
  async build(st) {
    const { scene, camera } = st;
    camera.position.set(6.2, 1.45, 14.5);
    camera.lookAt(-0.4, 3.0, -1);
    st.sky.uAz.value = -2.3;
    st.addFloor({ cell: 1, gridI: 0.35, refl: 0.55, fall: 0.06 });
    nightLights(scene, { key: [-14, 8, -10], keyI: 1.6, fill: [12, 8, 12], fillI: 0.35, target: [0, 2, 0], shadow: 14 });

    const cut = createCut(V(1, 0, 0.25), V(-2.2, 0, 0), { k: 14, i: 2 });
    const bp = createBlueprint(cut, { width: 1.4, opacity: 0.85, ghost: 0.04 });
    const R = rng(12);

    // zgrada: prizemlje s izlogom, kat iznad
    const W = 10, D = 6, H1 = 4, H2 = 3.4;
    const facade = mat({ color: '#2e3240', rough: 0.6, metal: 0.2 }, cut);
    const upper = mat({ color: '#8c867b', rough: 0.9 }, cut);
    const shop = new THREE.Group();
    scene.add(shop);
    // stupovi i nadvoj prizemlja
    shop.add(box(0.5, H1, D, facade, -W / 2 + 0.25, 0, -D / 2));
    shop.add(box(0.5, H1, D, facade, W / 2 - 0.25, 0, -D / 2));
    shop.add(box(W, 0.8, 0.5, facade, 0, H1 - 0.8, -0.25));
    shop.add(box(W, H1, 0.3, facade, 0, 0, -D + 0.15));
    shop.add(box(W, H2, D, upper, 0, H1, -D / 2));
    for (const x of [-3, 0, 3]) {
      addWindow(shop, cut, { w: 1.3, h: 1.6, x, y: H1 + 1.7, z: 0.01, lit: R() < 0.7 ? 0.55 : 0.08, frame: '#d9d5cd' });
    }
    // izlog: staklo + topli interijer
    const glass = new THREE.Mesh(new THREE.PlaneGeometry(W - 1, H1 - 0.8), mat({ color: '#0d1220', rough: 0.05, metal: 0.4, env: 1.4, transparent: true, opacity: 0.18 }, cut));
    glass.position.set(0, (H1 - 0.8) / 2, -0.3);
    shop.add(glass);
    const floorIn = box(W - 1, 0.05, D - 1, mat({ color: '#d8cfc0', rough: 0.4 }, cut), 0, 0, -D / 2);
    shop.add(floorIn);
    const back = box(W - 1, H1 - 0.8, 0.05, mat({ color: '#3a2a1e', rough: 0.7, emissive: '#2a1508', ei: 1 }, cut), 0, 0, -D + 0.35);
    shop.add(back);
    // police s proizvodima
    const shelfM = mat({ color: '#c79a62', rough: 0.6 }, cut);
    const prodCols = ['#2347ff', '#ffb23f', '#efebe3', '#1b1d24', '#d0602f', '#7c8cb8'];
    for (const sx of [-3, 0.2, 3.2]) {
      for (let k = 0; k < 4; k++) {
        shop.add(box(2.2, 0.05, 0.6, shelfM, sx, 0.5 + k * 0.7, -D + 0.75));
        for (let j = 0; j < 6; j++) {
          const h = 0.18 + R() * 0.28, w = 0.18 + R() * 0.14;
          const p = box(w, h, 0.25, mat({ color: prodCols[Math.floor(R() * prodCols.length)], rough: 0.5, metal: 0.1 }, cut), sx - 0.9 + j * 0.35, 0.55 + k * 0.7, -D + 0.75);
          shop.add(p);
        }
      }
    }
    // pult
    shop.add(box(2.4, 1.0, 0.7, mat({ color: '#e9e3d6', rough: 0.35 }, cut), 2.6, 0, -2.0));
    // tenda (signalno plava)
    const awn = new THREE.Mesh(new THREE.BoxGeometry(W - 0.6, 0.06, 1.6), mat({ color: '#2347ff', rough: 0.55, side: THREE.DoubleSide }, cut));
    awn.position.set(0, H1 - 0.9, 0.7);
    awn.rotation.x = 0.32;
    awn.castShadow = true;
    shop.add(awn);
    const awnV = box(W - 0.6, 0.28, 0.04, mat({ color: '#1a35d6', rough: 0.6 }, cut), 0, H1 - 1.55, 1.45);
    shop.add(awnV);
    // svjetlo iznutra
    light(scene, 'point', '#ffc68a', 55, [0, 2.8, -2.2], null, { dist: 12 });
    light(scene, 'point', '#ffb15e', 12, [0, 1.2, 1.5], null, { dist: 9 });
    const spots = [];
    for (let x = -3.5; x <= 3.6; x += 1.4) spots.push({ p: [x, H1 - 0.85, -1.5], c: '#fff1dc', s: 0.18, k: 2.4 });
    st.dots(spots);

    // paketi ispred dućana
    const kraft = mat({ color: '#b9895a', rough: 0.85 }, null);
    const tape = mat({ color: '#2347ff', rough: 0.5 }, null);
    const boxes = [];
    const addParcel = (x, y, z, s, ry, rz = 0) => {
      const g = new THREE.Group();
      const b = new THREE.Mesh(new RoundedBoxGeometry(s[0], s[1], s[2], 2, 0.02), kraft);
      b.castShadow = b.receiveShadow = true;
      g.add(b);
      const t = new THREE.Mesh(new THREE.BoxGeometry(s[0] + 0.005, s[1] + 0.005, 0.07), tape);
      g.add(t);
      g.position.set(x, y + s[1] / 2, z);
      g.rotation.set(0, ry, rz);
      scene.add(g);
      boxes.push(g);
      return g;
    };
    addParcel(3.2, 0, 2.4, [0.8, 0.55, 0.6], 0.3);
    addParcel(3.3, 0.55, 2.35, [0.6, 0.4, 0.5], -0.2);
    addParcel(2.3, 0, 2.9, [0.5, 0.35, 0.45], 0.8);
    // paketi u letu prema kupcima (lukovi svjetla)
    const dests = [V(13, 0.4, 9), V(-9, 0.4, 11), V(16, 0.4, -2), V(-12, 0.4, 3), V(9, 0.4, 15)];
    const flying = [[0, 0.3], [0, 0.22], [0, 0.4]];
    dests.forEach((d, i) => {
      const a = V(2.9 + (i % 2) * 0.4, 0.9, 2.5);
      const mid = a.clone().lerp(d, 0.45).add(V(0, 3.4 + (i % 3) * 0.9, 0));
      const c = new THREE.QuadraticBezierCurve3(a, mid, d);
      trail(scene, c, { r: 0.045, color: i % 2 ? '#7f9bff' : '#ffc070', i: 3.4, tail: 0.7, from: 0, to: 1, seg: 200 });
      if (i < flying.length) {
        const p = c.getPoint(flying[i][1]);
        const pb = addParcel(p.x, p.y - 0.2, p.z, [0.42, 0.3, 0.34], R() * 3, (R() - 0.5) * 0.8);
        pb.rotation.x = (R() - 0.5) * 0.8;
      }
      st.dots([{ p: d.toArray(), c: i % 2 ? '#a9bbff' : '#ffd29a', s: 1.6, k: 2.4 }]);
    });

    scene.updateMatrixWorld(true);
    shop.traverse((o) => { if (o.isMesh && o.geometry.type === 'BoxGeometry') bp.edges(o, 30); });
    // "online" sloj u nacrtu: rešetka proizvoda kao kartice
    for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) {
      const x0 = -4.6 + c * 0.75, y0 = 1.0 + r * 0.9, z = 0.6;
      bp.poly([V(x0, y0, z), V(x0 + 0.6, y0, z), V(x0 + 0.6, y0 + 0.75, z), V(x0, y0 + 0.75, z)], true);
      bp.line(V(x0 + 0.08, y0 + 0.18, z), V(x0 + 0.45, y0 + 0.18, z));
    }
    cutSheet(scene, cut, { size: 16, height: 9, i: 0.6 });
    bp.build(scene, st);
    horizon(st, { a0: -2.9, a1: 0.6, seed: 8 });
    motes(st, { n: 120, box: [-6, 0.2, -2, 10, 7, 8], seed: 18, size: [0.02, 0.08] });
    bokeh(st, [{ p: [8.0, 0.9, 10.5], c: '#ffb45e', s: 0.5, a: 0.3 }, { p: [8.4, 2.1, 10.2], c: '#5f7dff', s: 0.35, a: 0.25 }]);
  },
};
