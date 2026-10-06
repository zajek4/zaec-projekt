// Kadrovi za usluge: web stranica kao fizički objekt u noći — pola gotov (papirnato bijeli ekran),
// pola nacrt. Upiti dolaze kao svjetlo do jednog gumba.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { mat, box, createCut, createBlueprint, cutSheet, trail, motes, bokeh, light, horizon, canvasTex, rng, V } from '../kit.js';
import { nightLights, addWindow } from './common.js';

const INK = '#141414', PAPER = '#efebe3', CARD = '#f7f4ee', SIGNAL = '#2347ff', AMBER = '#ffb23f';

/** Raspored stranice u normaliziranim koordinatama (0…1, y prema dolje): [x, y, w, h, vrsta] */
export const DESKTOP = [
  [0.0, 0.0, 1.0, 0.06, 'bar'],
  [0.06, 0.14, 0.42, 0.07, 'h1'],
  [0.06, 0.23, 0.36, 0.07, 'h1'],
  [0.06, 0.34, 0.34, 0.025, 'p'],
  [0.06, 0.38, 0.3, 0.025, 'p'],
  [0.06, 0.46, 0.16, 0.07, 'cta'],
  [0.24, 0.46, 0.13, 0.07, 'ghost'],
  [0.52, 0.12, 0.42, 0.44, 'img'],
  [0.06, 0.64, 0.27, 0.28, 'card'],
  [0.365, 0.64, 0.27, 0.28, 'card'],
  [0.67, 0.64, 0.27, 0.28, 'card'],
];
export const MOBILE = [
  [0.0, 0.0, 1.0, 0.06, 'bar'],
  [0.08, 0.1, 0.84, 0.26, 'img'],
  [0.08, 0.4, 0.8, 0.05, 'h1'],
  [0.08, 0.46, 0.6, 0.05, 'h1'],
  [0.08, 0.54, 0.8, 0.02, 'p'],
  [0.08, 0.58, 0.7, 0.02, 'p'],
  [0.08, 0.64, 0.84, 0.065, 'cta'],
  [0.08, 0.75, 0.84, 0.2, 'card'],
];
export const SHOP = [
  [0.0, 0.0, 1.0, 0.06, 'bar'],
  [0.08, 0.09, 0.6, 0.04, 'h1'],
  [0.08, 0.16, 0.39, 0.25, 'prod'],
  [0.53, 0.16, 0.39, 0.25, 'prod'],
  [0.08, 0.45, 0.39, 0.25, 'prod'],
  [0.53, 0.45, 0.39, 0.25, 'prod'],
  [0.08, 0.76, 0.84, 0.03, 'p'],
  [0.08, 0.84, 0.84, 0.08, 'cta'],
];

function drawPage(layout, w, h, { bg = PAPER, hot = 'cta' } = {}) {
  return canvasTex(w, h, (x) => {
    x.fillStyle = bg; x.fillRect(0, 0, w, h);
    const R = rng(7);
    for (const [px, py, pw, ph, k] of layout) {
      const X = px * w, Y = py * h, Wd = pw * w, Hd = ph * h;
      const rr = Math.min(Hd, Wd) * 0.18;
      x.beginPath();
      if (k === 'bar') {
        x.fillStyle = '#e4ded3'; x.fillRect(X, Y, Wd, Hd);
        for (let i = 0; i < 3; i++) { x.fillStyle = ['#c9c2b6', '#c9c2b6', '#c9c2b6'][i]; x.beginPath(); x.arc(X + Hd * (0.6 + i * 0.55), Y + Hd / 2, Hd * 0.16, 0, 7); x.fill(); }
        x.fillStyle = '#fff'; x.fillRect(X + Wd * 0.25, Y + Hd * 0.25, Wd * 0.5, Hd * 0.5);
        continue;
      }
      if (k === 'h1') { x.fillStyle = INK; x.roundRect(X, Y, Wd, Hd, Hd * 0.12); x.fill(); continue; }
      if (k === 'p') { x.fillStyle = '#9b958a'; x.roundRect(X, Y, Wd, Hd, Hd * 0.4); x.fill(); continue; }
      if (k === 'cta') { x.fillStyle = hot === 'cta' ? AMBER : SIGNAL; x.roundRect(X, Y, Wd, Hd, rr); x.fill(); x.fillStyle = hot === 'cta' ? INK : '#fff'; x.fillRect(X + Wd * 0.2, Y + Hd * 0.42, Wd * 0.45, Hd * 0.16); continue; }
      if (k === 'ghost') { x.strokeStyle = INK; x.lineWidth = Math.max(2, Hd * 0.06); x.roundRect(X, Y, Wd, Hd, rr); x.stroke(); continue; }
      if (k === 'img' || k === 'prod') {
        const g = x.createLinearGradient(X, Y, X + Wd, Y + Hd);
        g.addColorStop(0, '#0b1233'); g.addColorStop(0.6, '#1a2a7a'); g.addColorStop(1, '#ffb23f');
        x.fillStyle = g; x.roundRect(X, Y, Wd, Hd, rr); x.fill();
        if (k === 'img') {
          // silueta grada s toplim prozorima
          x.fillStyle = '#05070f';
          let cx = X;
          while (cx < X + Wd) { const bw = Wd * (0.05 + R() * 0.08), bh = Hd * (0.15 + R() * 0.45); x.fillRect(cx, Y + Hd - bh, bw, bh); for (let i = 0; i < 6; i++) { if (R() < 0.5) { x.fillStyle = '#ffcc85'; x.fillRect(cx + R() * bw * 0.8, Y + Hd - bh + R() * bh * 0.8, 3, 4); x.fillStyle = '#05070f'; } } cx += bw + 2; }
        } else {
          x.fillStyle = 'rgba(255,255,255,0.9)'; x.beginPath(); x.arc(X + Wd / 2, Y + Hd * 0.45, Hd * 0.22, 0, 7); x.fill();
        }
        continue;
      }
      if (k === 'card') {
        x.fillStyle = CARD; x.roundRect(X, Y, Wd, Hd, rr); x.fill();
        x.strokeStyle = 'rgba(20,20,20,0.12)'; x.lineWidth = 2; x.stroke();
        x.fillStyle = SIGNAL; x.beginPath(); x.arc(X + Wd * 0.14, Y + Hd * 0.22, Hd * 0.08, 0, 7); x.fill();
        x.fillStyle = INK; x.fillRect(X + Wd * 0.08, Y + Hd * 0.45, Wd * 0.6, Hd * 0.09);
        x.fillStyle = '#9b958a'; x.fillRect(X + Wd * 0.08, Y + Hd * 0.62, Wd * 0.8, Hd * 0.05); x.fillRect(X + Wd * 0.08, Y + Hd * 0.72, Wd * 0.55, Hd * 0.05);
      }
    }
  });
}

/** Ekran (web ili mobitel) kao fizički objekt: okvir + svijetleći ekran + nacrt rasporeda. */
export function screen(scene, cut, bp, { w = 6.4, h = 4, layout = DESKTOP, pos = V(0, 0, 0), ry = 0, ei = 0.95, frame = '#14161c', depth = 0.12, radius = 0.12, texW = 1600 } = {}) {
  const g = new THREE.Group();
  g.position.copy(pos);
  g.rotation.y = ry;
  scene.add(g);
  const body = new THREE.Mesh(new RoundedBoxGeometry(w + 0.16, h + 0.16, depth, 4, radius), mat({ color: frame, rough: 0.3, metal: 0.6, env: 1.2 }, cut));
  body.castShadow = body.receiveShadow = true;
  g.add(body);
  const tex = drawPage(layout, texW, Math.round((texW * h) / w));
  const scr = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat({ color: '#000000', emissive: '#ffffff', ei, emissiveMap: tex, rough: 0.15, metal: 0.1 }, cut));
  scr.position.z = depth / 2 + 0.003;
  g.add(scr);
  g.updateMatrixWorld(true);
  // nacrt: obrisi blokova na ekranu i okvir
  const P = (u, v) => V(-w / 2 + u * w, h / 2 - v * h, depth / 2 + 0.01).applyMatrix4(g.matrixWorld);
  for (const [x, y, ww, hh] of layout) bp.poly([P(x, y), P(x + ww, y), P(x + ww, y + hh), P(x, y + hh)], true);
  bp.poly([P(0, 0), P(1, 0), P(1, 1), P(0, 1)], true);
  bp.edges(body, 40);
  // točka na sredini gumba (za tragove upita)
  const cta = layout.find((l) => l[4] === 'cta');
  const at = cta ? P(cta[0] + cta[2] / 2, cta[1] + cta[3] / 2) : P(0.5, 0.5);
  return { group: g, cta: at, P };
}

function leadsTo(st, target, { n = 9, seed = 3, spread = 30, height = 6, from = [-1, 1], warmEvery = 3 } = {}) {
  const R = rng(seed);
  for (let k = 0; k < n; k++) {
    const a = from[0] + R() * (from[1] - from[0]);
    const s = V(target.x + Math.sin(a) * spread, 0.6 + R() * 2, target.z - Math.cos(a) * spread);
    const mid = s.clone().lerp(target, 0.55).add(V(0, height * (0.5 + R() * 0.7), 0));
    const c = new THREE.QuadraticBezierCurve3(s, mid, target);
    const f = 0.15 + R() * 0.3;
    trail(st.scene, c, { r: 0.02 + R() * 0.015, color: k % warmEvery === 0 ? '#ffc070' : '#7f9bff', i: 1.7, tail: 0.5, from: f, to: 0.97, seg: 140 });
    st.dots([{ p: s.toArray(), c: k % warmEvery === 0 ? '#ffd29a' : '#a9bbff', s: 0.6, k: 1.8 }]);
  }
  st.dots([{ p: target.toArray(), c: '#fff3dc', s: 0.25, k: 2 }]);
}

export const web = {
  file: 'world/usluga-web.webp',
  fov: 32,
  async build(st) {
    const { scene, camera } = st;
    camera.position.set(8.6, 1.5, 11.5);
    camera.lookAt(-0.6, 2.45, 0);
    st.sky.uAz.value = -2.3;
    st.addFloor({ cell: 1, gridI: 0.4, refl: 0.6, fall: 0.05 });
    nightLights(scene, { key: [-12, 8, -8], keyI: 1.2, fill: [10, 6, 10], fillI: 0.3, target: [0, 2, 0], shadow: 10 });
    const cut = createCut(V(1, 0, 0.3), V(-1.4, 0, 0), { k: 18, i: 1.8 });
    const bp = createBlueprint(cut, { width: 1.4, opacity: 0.85, ghost: 0.03 });
    const d = screen(scene, cut, bp, { w: 6.4, h: 4, pos: V(-0.4, 2.35, 0), ry: 0.12, ei: 0.7 });
    // stalak
    const st0 = mat({ color: '#1a1c22', rough: 0.35, metal: 0.7 }, cut);
    scene.add(box(0.12, 0.35, 0.12, st0, -0.4, 0, 0));
    scene.add(box(1.6, 0.04, 0.6, st0, -0.4, 0, 0));
    const m = screen(scene, cut, bp, { w: 1.0, h: 2.0, layout: MOBILE, pos: V(3.6, 1.0, 1.3), ry: -0.25, ei: 0.7, radius: 0.1, depth: 0.08, texW: 600 });
    light(scene, 'point', '#fff3e6', 6, [-0.4, 0.4, 3.0], null, { dist: 7 });
    light(scene, 'point', '#ffb15e', 4, [3.4, 1, 2.4], null, { dist: 5 });
    leadsTo(st, d.cta, { n: 10, seed: 5, spread: 34, height: 5, from: [-1.3, 1.2] });
    leadsTo(st, m.cta, { n: 4, seed: 9, spread: 26, height: 3, from: [0.2, 1.2], warmEvery: 2 });
    cutSheet(scene, cut, { size: 14, height: 8, i: 0.6 });
    bp.build(scene, st);
    horizon(st, { a0: -2.9, a1: 0.6, seed: 21 });
    motes(st, { n: 120, box: [-6, 0.2, -3, 8, 6, 8], seed: 3, size: [0.02, 0.07] });
    bokeh(st, [{ p: [7.4, 1.0, 9.8], c: '#ffb45e', s: 0.4, a: 0.3 }, { p: [7.7, 2.0, 9.6], c: '#5f7dff', s: 0.3, a: 0.25 }]);
  },
};

export const webshop = {
  file: 'world/usluga-webshop.webp',
  fov: 32,
  async build(st) {
    const { scene, camera } = st;
    camera.position.set(4.6, 1.2, 7.4);
    camera.lookAt(-0.2, 1.55, 0);
    st.sky.uAz.value = -2.0;
    st.addFloor({ cell: 0.5, gridI: 0.4, refl: 0.6, fall: 0.09 });
    nightLights(scene, { key: [-8, 6, -6], keyI: 1.2, fill: [8, 4, 8], fillI: 0.3, target: [0, 1.5, 0], shadow: 6 });
    const cut = createCut(V(1, 0, 0.2), V(-0.12, 0, 0), { k: 40, i: 1.2 });
    const bp = createBlueprint(cut, { width: 1.4, opacity: 0.85, ghost: 0.03 });
    const ph = screen(scene, cut, bp, { w: 1.5, h: 3.0, layout: SHOP, pos: V(0, 1.62, 0), ry: 0.22, ei: 0.7, radius: 0.16, depth: 0.12, texW: 700 });
    light(scene, 'point', '#fff3e6', 3, [0.2, 0.2, 1.6], null, { dist: 4 });
    // kartica za plaćanje u zraku
    const card = new THREE.Mesh(new RoundedBoxGeometry(1.0, 0.63, 0.02, 3, 0.05), mat({ color: '#2347ff', rough: 0.25, metal: 0.5, env: 1.5 }));
    card.position.set(1.55, 2.45, 0.6);
    card.rotation.set(-0.3, -0.6, 0.35);
    card.castShadow = true;
    scene.add(card);
    const chip = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.11, 0.025), mat({ color: '#d9b26a', metal: 1, rough: 0.3 }));
    chip.position.set(-0.3, 0.08, 0.01);
    card.add(chip);
    // paketi koji izlaze iz ekrana prema kupcima
    const kraft = mat({ color: '#b9895a', rough: 0.85 });
    const tape = mat({ color: '#2347ff', rough: 0.5 });
    const R = rng(4);
    const ends = [V(7, 0.4, 4), V(-6, 0.4, 5), V(8, 0.4, -4), V(-7, 0.4, -3)];
    ends.forEach((e, i) => {
      const s = ph.cta.clone();
      const mid = s.clone().lerp(e, 0.5).add(V(0, 2.2 + i * 0.4, 0));
      const c = new THREE.QuadraticBezierCurve3(s, mid, e);
      trail(scene, c, { r: 0.025, color: i % 2 ? '#7f9bff' : '#ffc070', i: 2.8, tail: 0.7, from: 0, to: 1, seg: 160 });
      const p = c.getPoint(0.28 + R() * 0.15);
      const g = new THREE.Group();
      const sz = 0.26 + R() * 0.1;
      const b = new THREE.Mesh(new RoundedBoxGeometry(sz * 1.3, sz, sz, 2, 0.015), kraft);
      b.castShadow = true;
      g.add(b);
      g.add(new THREE.Mesh(new THREE.BoxGeometry(sz * 1.3 + 0.004, sz + 0.004, 0.05), tape));
      g.position.copy(p);
      g.rotation.set(R() * 2, R() * 3, R() * 2);
      scene.add(g);
    });
    cutSheet(scene, cut, { size: 6, height: 5, i: 0.5 });
    bp.build(scene, st);
    horizon(st, { a0: -2.9, a1: 0.6, seed: 31, r0: 60, r1: 160 });
    motes(st, { n: 100, box: [-3, 0.2, -2, 4, 4, 5], seed: 6, size: [0.01, 0.04] });
    bokeh(st, [{ p: [3.8, 0.9, 6.2], c: '#ffb45e', s: 0.25, a: 0.3 }, { p: [4.0, 1.6, 6.0], c: '#5f7dff', s: 0.18, a: 0.25 }]);
  },
};

export const landing = {
  file: 'world/usluga-landing.webp',
  fov: 34,
  async build(st) {
    const { scene, camera } = st;
    camera.position.set(2.2, 1.7, 7.6);
    camera.lookAt(-0.2, 1.2, -0.5);
    st.sky.uAz.value = Math.PI;
    st.sky.uGlowI.value = 0.35;
    st.addFloor({ cell: 0.5, gridI: 0.5, refl: 0.6, fall: 0.07 });
    nightLights(scene, { key: [-6, 5, -6], keyI: 0.8, fill: [6, 4, 6], fillI: 0.25, target: [0, 1, 0], shadow: 6 });
    // jedan gumb: zaobljena jantarna ploča na postolju, svi tragovi vode u njega
    const btn = new THREE.Mesh(new RoundedBoxGeometry(2.2, 0.62, 0.3, 6, 0.28), mat({ color: '#ffb23f', rough: 0.3, metal: 0.1, emissive: '#ff9a2c', ei: 0.22, env: 1.2 }));
    btn.position.set(0, 1.05, 0);
    btn.castShadow = true;
    scene.add(btn);
    const arrow = new THREE.Shape();
    arrow.moveTo(0, 0.09); arrow.lineTo(0.16, 0.09); arrow.lineTo(0.16, 0.17); arrow.lineTo(0.3, 0); arrow.lineTo(0.16, -0.17); arrow.lineTo(0.16, -0.09); arrow.lineTo(0, -0.09); arrow.closePath();
    const ar = new THREE.Mesh(new THREE.ExtrudeGeometry(arrow, { depth: 0.03, bevelEnabled: false }), mat({ color: '#141414', rough: 0.5 }));
    ar.position.set(0.45, 1.05, 0.15);
    scene.add(ar);
    const bar = box(0.7, 0.07, 0.03, mat({ color: '#141414', rough: 0.5 }), -0.25, 1.015, 0.16);
    scene.add(bar);
    light(scene, 'point', '#ffd9a8', 3, [0.6, 2.2, 1.6], null, { dist: 5 });
    st.bloom.strength = 0.6;
    // tragovi: tok se sužava u lijevak prema gumbu (iz svih smjerova)
    const R = rng(12);
    const target = V(0, 1.05, 0.05);
    for (let k = 0; k < 46; k++) {
      const a = R() * Math.PI * 2;
      const rad = 9 + R() * 14;
      const s = V(Math.cos(a) * rad, 0.3 + R() * 7, -Math.abs(Math.sin(a)) * rad - 3);
      const mid = V(s.x * 0.25, 1.05 + (s.y - 1.05) * 0.2 + 0.6, -1.2 - R());
      const c = new THREE.CatmullRomCurve3([s, s.clone().lerp(mid, 0.6), mid, target]);
      trail(scene, c, { r: 0.006 + R() * 0.01, color: k % 4 === 0 ? '#ffc070' : '#6f8cff', i: 0.8 + R() * 0.9, tail: 0.45, from: 0.15 + R() * 0.25, to: 0.93, seg: 160 });
    }
    // prsten oko gumba
    const ring = new THREE.Mesh(new THREE.TorusGeometry(1.45, 0.006, 8, 128), new THREE.MeshBasicMaterial({ color: new THREE.Color('#9fb3ff').multiplyScalar(2), transparent: true, opacity: 0.7, blending: THREE.AdditiveBlending, depthWrite: false }));
    ring.position.copy(target);
    ring.scale.set(1, 0.42, 1);
    scene.add(ring);
    horizon(st, { a0: Math.PI - 1.4, a1: Math.PI + 1.4, seed: 2, r0: 80, r1: 200 });
    motes(st, { n: 160, box: [-5, 0.2, -6, 5, 5, 5], seed: 14, size: [0.01, 0.05] });
    bokeh(st, [{ p: [1.2, 0.5, 5.8], c: '#ffb45e', s: 0.25, a: 0.3 }, { p: [-0.9, 1.8, 5.9], c: '#5f7dff', s: 0.2, a: 0.25 }]);
  },
};

export const seo = {
  file: 'world/usluga-seo.webp',
  q: 72,
  fov: 34,
  async build(st) {
    const { scene, camera } = st;
    camera.position.set(7.2, 3.4, 10.2);
    camera.lookAt(0.2, 1.7, 0);
    st.sky.uAz.value = -2.2;
    st.addFloor({ cell: 1, gridI: 0.55, refl: 0.4, fall: 0.06 });
    nightLights(scene, { key: [-12, 9, -8], keyI: 1.2, fill: [10, 8, 10], fillI: 0.3, target: [0, 0, 0], shadow: 14 });
    const cut = createCut(V(0, 0, 0), V(0, 0, 0));
    cut.plane.set(V(0, 1, 0), 1e6); // bez reza: grad je stvaran, rezultati su nacrt
    const bp = createBlueprint(null, { width: 1.3, opacity: 0.8, ghost: 0 });
    // mali grad u nacrtu (tlocrt kao karta) i jedna stvarna, osvijetljena zgrada — vaš obrt
    const R = rng(33);
    const blocks = [];
    for (let i = -6; i <= 6; i++) for (let j = -6; j <= 6; j++) {
      if ((i === 0 && j === 0) || R() < 0.25) continue;
      if (Math.abs(i) % 3 === 0 || Math.abs(j) % 4 === 0) continue;
      const w = 0.7 + R() * 0.25, d = 0.7 + R() * 0.25, h = 0.3 + R() * 1.6;
      blocks.push([i * 1.1, j * 1.1, w, d, h]);
    }
    for (const [x, z, w, d, h] of blocks) {
      const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d).translate(0, h / 2, 0));
      m.position.set(x, 0, z);
      m.updateMatrixWorld(true);
      bp.edges(m, 30);
    }
    const ghostM = new THREE.MeshBasicMaterial({ color: '#2347ff', transparent: true, opacity: 0.018, blending: THREE.AdditiveBlending, depthWrite: false });
    for (const [x, z, w, d, h] of blocks) { const g = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), ghostM); g.position.set(x, h / 2, z); scene.add(g); }
    // vaš obrt: stvarna zgrada s toplim prozorima
    const shop = box(0.9, 1.5, 0.9, mat({ color: '#d8d1c4', rough: 0.8 }), 0, 0, 0);
    scene.add(shop);
    const roof = box(1.0, 0.08, 1.0, mat({ color: '#2347ff', rough: 0.5 }), 0, 1.5, 0);
    scene.add(roof);
    for (const [x, y, z, ry] of [[-0.18, 1.08, 0.452, 0], [0.18, 1.08, 0.452, 0], [0.452, 1.08, 0, Math.PI / 2], [0.452, 0.5, 0, Math.PI / 2]]) addWindow(scene, null, { w: 0.24, h: 0.32, x, y, z, ry, lit: 0.9, frame: '#e9e5dd', depth: 0.03, mullion: false });
    // izlog i vrata u prizemlju
    addWindow(scene, null, { w: 0.5, h: 0.42, x: -0.12, y: 0.42, z: 0.452, lit: 1.2, frame: '#2347ff', depth: 0.03, mullion: false });
    scene.add(box(0.18, 0.5, 0.03, mat({ color: '#141414', rough: 0.4 }), 0.27, 0, 0.455));
    light(scene, 'point', '#ffb15e', 3, [0.6, 0.6, 1.4], null, { dist: 4 });
    // povećalo iznad grada: stakleni disk + metalni prsten + drška
    const lensG = new THREE.Group();
    lensG.position.set(1.44, 1.62, 2.04);
    lensG.lookAt(camera.position);
    lensG.rotateZ(0.35);
    scene.add(lensG);
    const rim = new THREE.Mesh(new THREE.TorusGeometry(1.25, 0.09, 24, 96), mat({ color: '#d9dce2', rough: 0.15, metal: 1, env: 1.8 }));
    lensG.add(rim);
    const glass = new THREE.Mesh(new THREE.CircleGeometry(1.2, 64), new THREE.MeshPhysicalMaterial({ color: '#cfdcff', roughness: 0.02, metalness: 0, transparent: true, opacity: 0.16, envMapIntensity: 2, clearcoat: 1, side: THREE.DoubleSide }));
    lensG.add(glass);
    const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.13, 1.8, 24), mat({ color: '#141414', rough: 0.4 }));
    handle.position.set(1.0, -1.55, 0);
    handle.rotation.z = 0.6;
    lensG.add(handle);
    st.dots([{ p: [0, 1.62, 0], c: '#ffb23f', s: 1.4, k: 0.5, a: 0.5 }]);
    // upiti dolaze iz okolice prema obrtu
    leadsTo(st, V(0, 0.9, 0.46), { n: 9, seed: 41, spread: 7, height: 1.6, from: [-1.9, 1.9] });
    bp.build(scene, st);
    horizon(st, { a0: -2.9, a1: 0.6, seed: 9 });
    motes(st, { n: 120, box: [-6, 0.3, -6, 6, 6, 6], seed: 2, size: [0.02, 0.06] });
  },
};

export const odrzavanje = {
  file: 'world/usluga-odrzavanje.webp',
  q: 74,
  fov: 32,
  async build(st) {
    const { scene, camera } = st;
    camera.position.set(5.6, 6.2, 7.6);
    camera.lookAt(-0.3, 1.9, 0);
    st.addFloor({ cell: 0.5, gridI: 0.45, refl: 0.6, fall: 0.08 });
    nightLights(scene, { key: [-8, 6, -6], keyI: 1.0, fill: [8, 5, 8], fillI: 0.3, target: [0, 2, 0], shadow: 8 });
    // web je složen od slojeva; skener prolazi kroz njih, iza su sigurnosne kopije (nacrt)
    const bp = createBlueprint(null, { width: 1.2, opacity: 0.6, ghost: 0.02 });
    const layers = [DESKTOP, MOBILE, SHOP];
    const R = rng(3);
    const stackY = [0.5, 1.25, 2.0, 2.75, 3.5];
    stackY.forEach((y, i) => {
      const s = screen(scene, null, { poly() {}, edges() {} }, { w: 3.2, h: 2.0, layout: i === 4 ? DESKTOP : layers[i % 3], pos: V(0, y + 1.0, 0), ry: 0, ei: 0.22 + (i === 4 ? 0.35 : 0), depth: 0.05, radius: 0.06, texW: 900 });
      s.group.rotation.x = -Math.PI / 2 + 0.0;
      s.group.position.set(0, y, 0);
      s.group.rotation.z = 0.25;
      // kopije iza (nacrt), pomaknute
      for (let k = 1; k <= 2; k++) {
        const m = new THREE.Mesh(new THREE.BoxGeometry(3.36, 0.05, 2.16));
        m.position.set(-1.1 * k, y, -1.3 * k);
        m.rotation.y = -0.25;
        m.updateMatrixWorld(true);
        bp.edges(m, 30);
      }
      void R;
    });
    // skener: prsten svjetla koji obuhvaća slojeve
    const ringY = 2.38;
    const ring = new THREE.Mesh(new THREE.TorusGeometry(2.25, 0.018, 12, 160), new THREE.MeshBasicMaterial({ color: new THREE.Color('#a9bbff').multiplyScalar(1.6) }));
    ring.rotation.x = Math.PI / 2;
    ring.position.y = ringY;
    scene.add(ring);
    const halo = new THREE.Mesh(new THREE.TorusGeometry(2.25, 0.09, 12, 160), new THREE.MeshBasicMaterial({ color: '#2347ff', transparent: true, opacity: 0.25, blending: THREE.AdditiveBlending, depthWrite: false }));
    halo.rotation.x = Math.PI / 2;
    halo.position.y = ringY;
    scene.add(halo);
    light(scene, 'point', '#7f9bff', 2.5, [1.6, ringY + 0.4, -1.2], null, { dist: 6 });
    // provjere: točke na slojevima (ažurirano) i toplo svjetlo na vrhu
    const checks = [];
    stackY.forEach((y, i) => { checks.push({ p: [1.75, y + 0.06, 0.4], c: i < 3 ? '#ffb23f' : '#9fb3ff', s: 0.12, k: 3 }); });
    st.dots(checks);
    light(scene, 'point', '#ffcf9a', 3, [-1.5, 4.6, 2.2], null, { dist: 7 });
    // tok podataka uz stup (kopije odlaze u nacrt)
    for (let k = 0; k < 4; k++) {
      const y = stackY[k + 1];
      const c = new THREE.QuadraticBezierCurve3(V(0.2, y, 0), V(-1.2, y + 0.6, -0.8), V(-2.2, y, -2.6));
      trail(scene, c, { r: 0.012, color: '#7f9bff', i: 2.2, tail: 0.5, from: 0.1, to: 0.9, seg: 80 });
    }
    bp.build(scene, st);
    motes(st, { n: 120, box: [-4, 0.2, -4, 4, 5, 4], seed: 8, size: [0.01, 0.04] });
    bokeh(st, [{ p: [5.4, 1.6, 6.9], c: '#ffb45e', s: 0.3, a: 0.3 }, { p: [5.6, 2.6, 6.8], c: '#5f7dff', s: 0.22, a: 0.25 }]);
  },
};

export const procjena = {
  file: 'world/usluga-procjena.webp',
  fov: 32,
  async build(st) {
    const { scene, camera } = st;
    camera.position.set(-7.4, 1.6, 10.8);
    camera.lookAt(0.9, 2.35, 0);
    st.sky.uAz.value = 2.4;
    st.addFloor({ cell: 1, gridI: 0.4, refl: 0.6, fall: 0.05 });
    nightLights(scene, { key: [12, 8, -8], keyI: 1.2, fill: [-10, 6, 10], fillI: 0.3, target: [0, 2, 0], shadow: 10 });
    // pregled: svjetlosni list skenira stranicu — iza njega ostaje nacrt s mjernim oznakama
    const cut = createCut(V(-1, 0, -0.05), V(0.9, 0, 0), { k: 18, i: 2.4 });
    const bp = createBlueprint(cut, { width: 1.4, opacity: 0.9, ghost: 0.03 });
    const d = screen(scene, cut, bp, { w: 6.4, h: 4, pos: V(0.4, 2.35, 0), ry: -0.12, ei: 0.85 });
    const st0 = mat({ color: '#1a1c22', rough: 0.35, metal: 0.7 }, cut);
    scene.add(box(0.12, 0.35, 0.12, st0, 0.4, 0, 0));
    scene.add(box(1.6, 0.04, 0.6, st0, 0.4, 0, 0));
    // mjerne oznake u nacrtu: kote, ciljne točke
    const P = d.P;
    const mark = (u, v) => { const p = P(u, v); bp.line(p.clone().add(V(-0.12, 0, 0)), p.clone().add(V(0.12, 0, 0))); bp.line(p.clone().add(V(0, -0.12, 0)), p.clone().add(V(0, 0.12, 0))); return p; };
    const pts = [mark(0.62, 0.2), mark(0.75, 0.5), mark(0.85, 0.78), mark(0.55, 0.7)];
    st.dots(pts.map((p, i) => ({ p: p.toArray(), c: i % 2 ? '#ffb23f' : '#9fb3ff', s: 0.22, k: 2.6 })));
    bp.line(P(0.55, 1.05), P(1.0, 1.05));
    bp.line(P(0.55, 1.02), P(0.55, 1.08));
    bp.line(P(1.0, 1.02), P(1.0, 1.08));
    bp.line(P(1.04, 0.0), P(1.04, 1.0));
    // pet slojeva provjere kao tanke ploče iza ekrana (struktura, sadržaj, brzina, lokalno, mjerenje)
    for (let k = 0; k < 5; k++) {
      const m = new THREE.Mesh(new THREE.BoxGeometry(6.4, 4, 0.02));
      m.position.set(0.4 + 0.5 * (k + 1), 2.35, -0.5 * (k + 1));
      m.rotation.y = -0.12;
      m.updateMatrixWorld(true);
      bp.edges(m, 30);
    }
    cutSheet(scene, cut, { size: 12, height: 9, i: 1.1 });
    light(scene, 'point', '#fff3e6', 3, [3.5, 4.5, 2.5], null, { dist: 8 });
    bp.build(scene, st);
    horizon(st, { a0: -0.6, a1: 2.9, seed: 15 });
    motes(st, { n: 120, box: [-6, 0.2, -3, 8, 6, 8], seed: 13, size: [0.02, 0.07] });
    bokeh(st, [{ p: [-5.8, 1.0, 8.2], c: '#ffb45e', s: 0.4, a: 0.3 }, { p: [-6.0, 2.0, 8.0], c: '#5f7dff', s: 0.3, a: 0.25 }]);
  },
};

export const ga4 = {
  file: 'world/usluga-ga4.webp',
  fov: 34,
  async build(st) {
    const { scene, camera } = st;
    camera.position.set(6.8, 2.3, 9.4);
    camera.lookAt(-0.4, 1.7, 0);
    st.sky.uAz.value = -2.2;
    st.addFloor({ cell: 0.5, gridI: 0.45, refl: 0.6, fall: 0.07 });
    nightLights(scene, { key: [-8, 7, -6], keyI: 1.0, fill: [8, 5, 8], fillI: 0.3, target: [0, 1.5, 0], shadow: 8 });
    // posjete iz više izvora ulaze u stupce; najviši (jantarni) je kanal koji donosi upite
    const bp = createBlueprint(null, { width: 1.3, opacity: 0.75, ghost: 0 });
    const H = [0.9, 1.5, 1.15, 2.9, 1.9, 1.3];
    const bars = [];
    const glassM = (hot) => new THREE.MeshPhysicalMaterial({ color: hot ? '#ffb23f' : '#2a46ff', emissive: hot ? '#ff9a2c' : '#2347ff', emissiveIntensity: hot ? 0.55 : 0.35, roughness: 0.15, metalness: 0.1, clearcoat: 1, envMapIntensity: 1.3, transparent: true, opacity: hot ? 0.95 : 0.82 });
    H.forEach((h, i) => {
      const hot = i === 3;
      const x = -2.6 + i * 1.05;
      const b = new THREE.Mesh(new RoundedBoxGeometry(0.62, h, 0.62, 3, 0.05), glassM(hot));
      b.position.set(x, h / 2, 0);
      b.castShadow = true;
      scene.add(b);
      bars.push(V(x, h, 0));
      // budući rast u nacrtu iznad svakog stupca
      const g = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.5 + i * 0.08, 0.62));
      g.position.set(x, h + (0.5 + i * 0.08) / 2, 0);
      g.updateMatrixWorld(true);
      bp.edges(g, 30);
      light(scene, 'point', hot ? '#ffb23f' : '#3d6bff', hot ? 1.4 : 0.7, [x, 0.4, 0.8], null, { dist: 3 });
    });
    // linija trenda iznad stupaca (nacrt) s točkama
    const pts = bars.map((p) => p.clone().add(V(0, 0.9, 0)));
    bp.poly(pts);
    st.dots(pts.map((p, i) => ({ p: p.toArray(), c: i === 3 ? '#ffd29a' : '#a9bbff', s: i === 3 ? 0.3 : 0.16, k: 2.4 })));
    // izvori: tokovi posjeta s horizonta prema dnu stupaca
    const R = rng(19);
    for (let k = 0; k < 22; k++) {
      const i = Math.floor(R() * H.length);
      const tgt = V(-2.6 + i * 1.05, 0.15 + R() * 0.3, 0.2);
      const s = V(-14 + R() * 6, 0.3 + R() * 3, -10 - R() * 20);
      const mid = s.clone().lerp(tgt, 0.6).add(V(0, 1 + R() * 2, 2));
      trail(scene, new THREE.QuadraticBezierCurve3(s, mid, tgt), { r: 0.01 + R() * 0.01, color: i === 3 ? '#ffc070' : '#6f8cff', i: 1.1 + R() * 0.8, tail: 0.5, from: 0.2 + R() * 0.3, to: 0.9, seg: 120 });
    }
    // os i mjerilo na podu (nacrt)
    bp.line(V(-3.2, 0.01, 0.5), V(3.4, 0.01, 0.5));
    for (let k = 0; k <= 6; k++) bp.line(V(-3.2 + k * 1.1, 0.01, 0.45), V(-3.2 + k * 1.1, 0.01, 0.6));
    bp.line(V(-3.2, 0, -0.4), V(-3.2, 4.2, -0.4));
    for (let k = 1; k <= 4; k++) bp.line(V(-3.3, k, -0.4), V(-3.1, k, -0.4));
    bp.build(scene, st);
    horizon(st, { a0: -2.9, a1: 0.6, seed: 23, r0: 60, r1: 180 });
    motes(st, { n: 120, box: [-4, 0.2, -3, 5, 4, 6], seed: 19, size: [0.01, 0.04] });
    bokeh(st, [{ p: [5.8, 1.4, 8.1], c: '#ffb45e', s: 0.35, a: 0.3 }, { p: [6.1, 2.4, 7.9], c: '#5f7dff', s: 0.25, a: 0.25 }]);
  },
};

export const brzina = {
  file: 'world/usluga-brzina.webp',
  fov: 40,
  async build(st) {
    const { scene, camera } = st;
    camera.position.set(5.2, 1.25, 7.2);
    camera.lookAt(-0.6, 2.2, 0);
    st.sky.uAz.value = -2.4;
    st.addFloor({ cell: 1, gridI: 0.45, refl: 0.6, fall: 0.05 });
    nightLights(scene, { key: [-10, 6, -6], keyI: 1.0, fill: [8, 5, 8], fillI: 0.3, target: [0, 2, 0], shadow: 10 });
    // stranica se učitava: lijevo je još nacrt, desno gotova; kroz nju jure tragovi brzine
    const cut = createCut(V(-1, 0, 0), V(-0.9, 0, 0), { k: 18, i: 2.2 });
    const bp = createBlueprint(cut, { width: 1.4, opacity: 0.85, ghost: 0.03 });
    screen(scene, cut, bp, { w: 5.6, h: 3.5, pos: V(-0.6, 2.2, 0), ry: 0.32, ei: 0.75 });
    // brojčanik (luk) iznad: jantarni dio = brzo
    const arcPts = [];
    for (let k = 0; k <= 40; k++) { const a = Math.PI * (1 - k / 40); arcPts.push(V(-0.6 + Math.cos(a) * 1.6 * 0.95, 4.15 + Math.sin(a) * 1.0, -0.3)); }
    bp.poly(arcPts);
    for (let k = 0; k <= 10; k++) { const a = Math.PI * (1 - k / 10); const p = V(-0.6 + Math.cos(a) * 1.52, 4.15 + Math.sin(a) * 0.95, -0.3); bp.line(p, p.clone().lerp(V(-0.6, 4.15, -0.3), 0.12)); }
    trail(scene, new THREE.CatmullRomCurve3(arcPts.slice(0, 34)), { r: 0.03, color: '#ffb23f', hot: '#fff0d0', i: 2.6, tail: 1.5, seg: 120 });
    st.dots([{ p: arcPts[33].toArray(), c: '#fff1d6', s: 0.35, k: 3 }]);
    // tragovi brzine: dugi, gotovo paralelni, prolaze kroz kadar prema kameri
    const R = rng(27);
    for (let k = 0; k < 40; k++) {
      const y = 0.3 + R() * 4.6, z = -3 + R() * 6;
      const s = V(-26, y + (R() - 0.5), z - 6);
      const e = V(12, y + (R() - 0.5) * 0.4, z + 4);
      const f = R() * 0.5;
      trail(scene, new THREE.LineCurve3(s, e), { r: 0.006 + R() * 0.012, color: k % 5 === 0 ? '#ffc070' : '#7f9bff', i: 1.2 + R() * 1.6, tail: 0.35, from: f, to: Math.min(1, f + 0.25 + R() * 0.3), seg: 60, radial: 4 });
    }
    cutSheet(scene, cut, { size: 10, height: 8, i: 0.7 });
    bp.build(scene, st);
    horizon(st, { a0: -2.9, a1: 0.6, seed: 29 });
    motes(st, { n: 120, box: [-6, 0.2, -3, 6, 6, 6], seed: 29, size: [0.01, 0.05] });
  },
};
