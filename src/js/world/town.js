// Grad na otoku: ceste, kuće, drveće, "vaš obrt" (W), konkurent (C), toranj pretrage.
import * as THREE from 'three';
import { PAL } from './palette.js';
import { Builder, box, gable, cyl, cone, ribbon, paint, jitter, xform } from './geo.js';
import { shade } from './island.js';
import { worldMaterial, textTexture } from './materials.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);

export const POS = {
  W: V(0, 0, 1.5),
  Wdoor: V(0, 0.42, 3.75),
  C: V(-3.9, 0, -2.5),
  Cdoor: V(-3.9, 0.42, -0.65),
  beacon: V(-11.0, 0, -5.4),
  lens: V(-11.0, 7.9, -5.4),
};

export function buildTown(rand, { lite = false, river }) {
  const S = new Builder(); // statično, jedna boja po vrhu
  const Wn = new Builder(); // prozori i lampe (emisivno noću)

  /* ───────── ceste ───────── */
  const loopPts = [];
  for (let k = 0; k < 10; k++) {
    const t = (k / 10) * Math.PI * 2;
    loopPts.push(V(7.4 * Math.cos(t), 0, -0.4 + 5.8 * Math.sin(t)));
  }
  const loop = new THREE.CatmullRomCurve3(loopPts, true, 'centripetal');
  const spurW = new THREE.CatmullRomCurve3([V(-10.3, 0, -4.7), V(-9.3, 0, -3.0), V(-8.2, 0, -1.4), V(-7.35, 0, -0.4)], false, 'centripetal');
  const spurE = new THREE.CatmullRomCurve3([V(7.35, 0, -0.4), V(9.0, 0, 0.0), V(10.1, 0, 0.25), V(11.7, 0, 0.6), V(13.3, 0, 0.85)], false, 'centripetal');
  const spurC = new THREE.CatmullRomCurve3([V(-6.9, 0, -2.6), V(-5.8, 0, -0.9), V(-4.4, 0, -0.35)], false, 'centripetal');
  [[loop, 1.25, 120, true], [spurW, 1.1, 30], [spurE, 1.1, 40], [spurC, 0.8, 16]].forEach(([c, w, seg, closed]) => {
    S.push(paint(ribbon(c, w + 0.34, seg, 0.018, closed), PAL.roadEdge));
    S.push(paint(ribbon(c, w, seg, 0.03, closed), PAL.road));
  });
  // isprekidana linija na petlji
  for (let i = 0; i < 46; i++) {
    const t = i / 46;
    const p = loop.getPointAt(t);
    const d = loop.getTangentAt(t);
    S.add(box(0.06, 0.012, 0.32), PAL.roadEdge, { pos: [p.x, 0.032, p.z], rot: [0, Math.atan2(d.x, d.z), 0] });
  }
  // trg ispred obrta
  S.add(box(5.6, 0.05, 2.3), PAL.plaza, { pos: [0, 0, 3.95] });
  S.add(box(5.9, 0.03, 2.6), shade(PAL.plaza, -0.08), { pos: [0, 0, 3.95] });

  /* ───────── most ───────── */
  const bridgeP = spurE.getPoint(0.42);
  const bridgeT = spurE.getTangent(0.42);
  const bRot = Math.atan2(bridgeT.x, bridgeT.z);
  const bridge = new Builder();
  bridge.add(box(1.5, 0.16, 3.1), PAL.wood, { pos: [0, 0.12, 0] });
  [-0.7, 0.7].forEach((x) => {
    bridge.add(box(0.07, 0.38, 3.1), shade(PAL.wood, -0.1), { pos: [x, 0.28, 0] });
    [-1.4, 0, 1.4].forEach((z) => bridge.add(box(0.12, 0.5, 0.12), PAL.dark, { pos: [x, 0.1, z] }));
  });
  S.absorb(bridge, { pos: [bridgeP.x, 0, bridgeP.z], rot: [0, bRot, 0] });

  /* ───────── zauzeta mjesta (za raspored) ───────── */
  const blocked = [];
  const sampleCurve = (c, n, r) => { for (let i = 0; i <= n; i++) { const p = c.getPoint(i / n); blocked.push([p.x, p.z, r]); } };
  sampleCurve(loop, 60, 1.25);
  sampleCurve(spurW, 12, 1.15);
  sampleCurve(spurE, 14, 1.15);
  sampleCurve(spurC, 8, 0.9);
  sampleCurve(river, 40, 1.65);
  blocked.push([0, 2.6, 3.4], [POS.C.x, POS.C.z, 2.4], [POS.beacon.x, POS.beacon.z, 2.4], [7.0, -10.2, 2.9], [-8.2, 5.4, 3.5], [-8.2 + 1.2, 5.4 + 1.6, 2.2]);
  const free = (x, z, r) => Math.hypot(x, z) < 12.6 - r && blocked.every(([bx, bz, br]) => Math.hypot(x - bx, z - bz) > br + r);

  /* ───────── kuće ───────── */
  const walls = [PAL.wallA, PAL.wallB, PAL.wallC, PAL.wallD];
  const roofs = [PAL.roofA, PAL.roofB, PAL.roofC, PAL.roofD];
  function house(x, z, rotY, o = {}) {
    const w = o.w ?? 1.5 + rand() * 0.9;
    const d = o.d ?? 1.3 + rand() * 0.6;
    const h = o.h ?? 1.05 + rand() * 0.55;
    const wall = o.wall ?? walls[(rand() * walls.length) | 0];
    const roof = o.roof ?? roofs[(rand() * roofs.length) | 0];
    const b = new Builder();
    const win = new Builder();
    b.add(box(w, h, d), wall);
    b.add(box(w + 0.12, 0.08, d + 0.12), shade(wall, -0.18));
    const hip = rand() < 0.28;
    if (hip) b.add(new THREE.ConeGeometry(Math.max(w, d) * 0.78, 0.85, 4, 1).translate(0, 0.425, 0), roof, { pos: [0, h, 0], rot: [0, Math.PI / 4, 0], scale: [w / Math.max(w, d), 1, d / Math.max(w, d)] });
    else b.add(gable(w + 0.24, d + 0.3, 0.75 + rand() * 0.25), roof, { pos: [0, h, 0] });
    if (rand() < 0.6) b.add(box(0.2, 0.55, 0.2), shade(roof, -0.12), { pos: [w * 0.25, h + 0.3, -d * 0.18] });
    b.add(box(0.32, 0.62, 0.05), PAL.wood, { pos: [w * (rand() < 0.5 ? -0.22 : 0.22), 0, d / 2 + 0.01] });
    const wy = h * 0.55;
    [-0.3, 0.3].forEach((fx) => win.add(box(0.26, 0.3, 0.04), PAL.glass, { pos: [w * fx, wy, d / 2 + 0.02] }));
    win.add(box(0.04, 0.3, 0.26), PAL.glass, { pos: [w / 2 + 0.02, wy, 0] });
    win.add(box(0.04, 0.3, 0.26), PAL.glass, { pos: [-w / 2 - 0.02, wy, 0] });
    if (rand() < 0.5) {
      // ograda / vrt
      b.add(box(w + 0.6, 0.22, 0.04), PAL.white, { pos: [0, 0, d / 2 + 0.75] });
    }
    S.absorb(b, { pos: [x, 0, z], rot: [0, rotY, 0] });
    Wn.absorb(win, { pos: [x, 0, z], rot: [0, rotY, 0] });
    blocked.push([x, z, Math.max(w, d) * 0.7]);
  }

  // prsten kuća oko petlje
  const ring = lite ? 15 : 22;
  let built = 0;
  for (let i = 0; i < ring * 10 && built < ring; i++) {
    const a = rand() * Math.PI * 2;
    const r = 8.6 + rand() * 3.4;
    const x = Math.cos(a) * r, z = Math.sin(a) * r;
    if (!free(x, z, 1.05)) continue;
    // okreni pročelje prema središtu/cesti
    const rotY = Math.atan2(-x, -z) + (rand() - 0.5) * 0.3;
    house(x, z, rotY);
    built++;
  }
  // unutar petlje
  house(3.9, -2.4, -0.15, { w: 2.0, d: 1.6, h: 1.4 });
  house(1.0, -3.9, 0.08, { w: 1.6, d: 1.4, h: 1.1 });
  house(4.4, 1.3, -0.5, { w: 1.4, d: 1.3, h: 1.0 });

  /* ───────── drveće ───────── */
  const trees = [];
  function tree(x, z, kind) {
    const s = 0.8 + rand() * 0.55;
    const b = new Builder();
    if (kind === 'poplar') {
      b.add(cyl(0.07, 0.1, 0.5, 5), PAL.trunk);
      let g = new THREE.IcosahedronGeometry(0.42, 0);
      g = jitter(g, 0.12, rand);
      b.add(g, PAL.poplar, { pos: [0, 1.55, 0], scale: [1, 3.0, 1] });
    } else if (kind === 'pine') {
      b.add(cyl(0.08, 0.11, 0.45, 5), PAL.trunk);
      b.add(cone(0.62, 1.0, 6), PAL.pine, { pos: [0, 0.35, 0] });
      b.add(cone(0.48, 0.85, 6), shade(PAL.pine, 0.05), { pos: [0, 0.9, 0] });
      b.add(cone(0.32, 0.7, 6), shade(PAL.pine, 0.1), { pos: [0, 1.4, 0] });
    } else {
      b.add(cyl(0.09, 0.13, 0.7, 5), PAL.trunk);
      let g = new THREE.IcosahedronGeometry(0.62, 0);
      g = jitter(g, 0.22, rand);
      const col = [PAL.leafA, PAL.leafB, PAL.leafC][(rand() * 3) | 0];
      b.add(g, col, { pos: [0, 1.05, 0] });
      if (rand() < 0.5) {
        let g2 = new THREE.IcosahedronGeometry(0.42, 0);
        g2 = jitter(g2, 0.15, rand);
        b.add(g2, shade(col, 0.06), { pos: [0.32, 1.42, 0.1] });
      }
    }
    S.absorb(b, { pos: [x, 0, z], rot: [0, rand() * Math.PI, 0], scale: s });
    blocked.push([x, z, 0.5 * s]);
    trees.push([x, z]);
  }
  // topole uz rijeku (Drava)
  for (let i = 0; i <= 14; i++) {
    const t = i / 14;
    const p = river.getPoint(t);
    const d = river.getTangent(t);
    [-1, 1].forEach((side) => {
      const x = p.x - d.z * side * 1.85 + (rand() - 0.5) * 0.3;
      const z = p.z + d.x * side * 1.85 + (rand() - 0.5) * 0.3;
      if (rand() < 0.65 && free(x, z, 0.35)) tree(x, z, 'poplar');
    });
  }
  const treeCount = lite ? 46 : 78;
  let placed = 0;
  for (let i = 0; i < treeCount * 6 && placed < treeCount; i++) {
    const a = rand() * Math.PI * 2;
    const r = Math.sqrt(rand()) * 12.6;
    const x = Math.cos(a) * r, z = Math.sin(a) * r;
    if (!free(x, z, 0.5)) continue;
    tree(x, z, r > 10.5 && rand() < 0.5 ? 'pine' : rand() < 0.15 ? 'poplar' : 'round');
    placed++;
  }

  /* ───────── ulične lampe ───────── */
  for (let k = 0; k < 8; k++) {
    const t = (k + 0.5) / 8;
    const p = loop.getPointAt(t);
    const dir = V(p.x, 0, p.z + 0.4).normalize();
    const x = p.x + dir.x * 0.95, z = p.z + dir.z * 0.95;
    if (Math.hypot(x, z - 3.9) < 3) continue;
    S.add(cyl(0.035, 0.05, 1.3, 5), PAL.dark, { pos: [x, 0, z] });
    Wn.add(box(0.2, 0.12, 0.2), PAL.amber, { pos: [x, 1.3, z] });
  }

  /* ───────── toranj pretrage ───────── */
  const B = POS.beacon;
  const tw = new Builder();
  tw.add(box(1.6, 0.4, 1.6), PAL.rock2);
  tw.add(box(1.2, 0.2, 1.2), PAL.steel, { pos: [0, 0.4, 0] });
  const legs = [[-0.45, -0.45], [0.45, -0.45], [0.45, 0.45], [-0.45, 0.45]];
  legs.forEach(([x, z]) => tw.add(box(0.09, 6.4, 0.09), PAL.steel, { pos: [x * 0.92, 0.6, z * 0.92], rot: [z * 0.035, 0, -x * 0.035] }));
  for (let y = 1.2; y < 6.8; y += 1.05) {
    const s = 1 - (y - 0.6) / 16;
    tw.add(box(0.95 * s, 0.06, 0.06), PAL.steel, { pos: [0, y, 0.42 * s] });
    tw.add(box(0.95 * s, 0.06, 0.06), PAL.steel, { pos: [0, y, -0.42 * s] });
    tw.add(box(0.06, 0.06, 0.95 * s), PAL.steel, { pos: [0.42 * s, y, 0] });
    tw.add(box(0.06, 0.06, 0.95 * s), PAL.steel, { pos: [-0.42 * s, y, 0] });
  }
  tw.add(box(1.1, 0.12, 1.1), PAL.dark, { pos: [0, 6.95, 0] });
  S.absorb(tw, { pos: [B.x, 0, B.z] });

  // povećalo (rotira se)
  const lensMat = new THREE.MeshStandardMaterial({ color: PAL.signal, emissive: new THREE.Color(PAL.signal), emissiveIntensity: 0.55, flatShading: true, roughness: 0.5 });
  const lens = new THREE.Group();
  const ringM = new THREE.Mesh(new THREE.TorusGeometry(0.85, 0.16, 6, 18), lensMat);
  const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.16, 1.15, 6), lensMat);
  handle.position.set(0.88, -0.88, 0);
  handle.rotation.z = Math.PI / 4;
  const glass = new THREE.Mesh(new THREE.CircleGeometry(0.72, 18), new THREE.MeshBasicMaterial({ color: '#cfe0ff', transparent: true, opacity: 0.35, side: THREE.DoubleSide, depthWrite: false }));
  lens.add(ringM, handle, glass);
  lens.position.copy(POS.lens);
  lens.userData.mat = lensMat;

  /* ───────── vaš obrt (W) ───────── */
  const wDesat = { value: 0 };
  const wMat = worldMaterial({ desat: wDesat });
  const wb = new Builder();
  const wW = 3.8, wH = 2.5, wD = 3.0;
  wb.add(box(wW, wH, wD), PAL.wallA);
  wb.add(box(wW + 0.14, 0.14, wD + 0.14), PAL.dark);
  wb.add(gable(wW + 0.4, wD + 0.5, 1.35), PAL.signal, { pos: [0, wH, 0] });
  wb.add(box(0.36, 0.8, 0.36), shade(PAL.signal, -0.12), { pos: [1.1, wH + 0.55, -0.5] });
  // aneks / garaža
  wb.add(box(1.9, 1.75, 2.6), PAL.wallB, { pos: [wW / 2 + 0.95, 0, -0.2] });
  wb.add(box(2.0, 0.12, 2.7), PAL.dark, { pos: [wW / 2 + 0.95, 1.75, -0.2] });
  for (let i = 0; i < 5; i++) wb.add(box(1.4, 0.2, 0.04), i % 2 ? PAL.metal : PAL.steel, { pos: [wW / 2 + 0.95, 0.12 + i * 0.25, 1.11] });
  // vrata i nadstrešnica
  wb.add(box(0.85, 1.45, 0.06), PAL.ink, { pos: [-0.9, 0, wD / 2 + 0.01] });
  wb.add(box(2.8, 0.08, 0.7), PAL.dark, { pos: [0, 1.58, wD / 2 + 0.35] });
  wb.add(box(4.2, 0.12, 0.8), PAL.plaza, { pos: [0, 0, wD / 2 + 0.4] });
  const wMesh = new THREE.Mesh(wb.merge(), wMat);
  wMesh.castShadow = wMesh.receiveShadow = true;
  const wWin = new Builder();
  wWin.add(box(1.5, 1.15, 0.05), PAL.glass, { pos: [0.65, 0.3, wD / 2 + 0.02] });
  [-1.1, 0, 1.1].forEach((x) => wWin.add(box(0.5, 0.42, 0.05), PAL.glass, { pos: [x, 1.85, wD / 2 + 0.02] }));
  wWin.add(box(0.05, 0.5, 0.6), PAL.glass, { pos: [-wW / 2 - 0.02, 1.4, 0] });
  const W = new THREE.Group();
  W.add(wMesh);
  // natpis
  const signTex = textTexture('VAŠ OBRT', { w: 1024, h: 192, size: 104, bg: '#141414', accent: PAL.signal });
  const signMat = new THREE.MeshStandardMaterial({ map: signTex, emissive: new THREE.Color('#ffffff'), emissiveMap: signTex, emissiveIntensity: 0.25, roughness: 0.6 });
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(2.7, 0.5), signMat);
  sign.position.set(0, 2.08, wD / 2 + 0.05);
  W.add(sign);
  W.position.copy(POS.W);
  W.userData = { desat: wDesat, sign, signMat, windows: wWin };

  /* ───────── konkurent (C) ───────── */
  const cDesat = { value: 0 };
  const cMat = worldMaterial({ desat: cDesat });
  const cb = new Builder();
  cb.add(box(3.0, 2.9, 2.6), PAL.comp);
  cb.add(box(3.15, 0.25, 2.75), PAL.compRoof, { pos: [0, 2.9, 0] });
  cb.add(box(0.8, 0.45, 0.6), PAL.steel, { pos: [0.6, 3.15, -0.3] });
  cb.add(box(0.8, 1.4, 0.06), PAL.ink, { pos: [0.7, 0, 1.31] });
  const cMesh = new THREE.Mesh(cb.merge(), cMat);
  cMesh.castShadow = cMesh.receiveShadow = true;
  const cWin = new Builder();
  [[-0.7, 0.55], [-0.7, 1.75], [0.7, 1.75]].forEach(([x, y]) => cWin.add(box(0.9, 0.7, 0.05), PAL.glass, { pos: [x, y, 1.32] }));
  const C = new THREE.Group();
  C.add(cMesh);
  const cSignTex = textTexture('KONKURENT', { w: 1024, h: 192, size: 96, bg: '#4a4740', accent: '#c9a84a' });
  const cSign = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 0.45), new THREE.MeshStandardMaterial({ map: cSignTex, roughness: 0.7 }));
  cSign.position.set(0, 2.45, 1.33);
  C.add(cSign);
  C.position.copy(POS.C);
  C.userData = { desat: cDesat, windows: cWin };
  Wn.absorb(wWin, { pos: [POS.W.x, POS.W.y, POS.W.z] });
  Wn.absorb(cWin, { pos: [POS.C.x, POS.C.y, POS.C.z] });

  /* ───────── auti ───────── */
  const carCols = [PAL.red, PAL.yellow, PAL.white, PAL.green];
  const carMat = worldMaterial({ roughness: 0.6 });
  const cars = [];
  (lite ? [0, 1, 2] : [0, 1, 2, 3]).forEach((i) => {
    const b = new Builder();
    b.add(box(0.48, 0.24, 0.95), carCols[i], { pos: [0, 0.1, 0] });
    b.add(box(0.42, 0.22, 0.5), shade(carCols[i], 0.08), { pos: [0, 0.33, -0.05] });
    b.add(box(0.43, 0.15, 0.46), PAL.glass, { pos: [0, 0.36, -0.05] });
    [[-0.25, 0.3], [0.25, 0.3], [-0.25, -0.3], [0.25, -0.3]].forEach(([x, z]) => b.add(cyl(0.11, 0.11, 0.08, 8), PAL.ink, { pos: [x + Math.sign(x) * -0.04, 0.11, z], rot: [0, 0, Math.PI / 2] }));
    const m = new THREE.Mesh(b.merge(), carMat);
    m.castShadow = true;
    cars.push({ mesh: m, t: i / 4 + rand() * 0.1, speed: 0.022 + rand() * 0.012, dir: i % 2 ? 1 : -1 });
  });

  /* ───────── zastavice procesa ───────── */
  const flagSpots = [
    [spurW.getPoint(0.45), 'K.01'],
    [loop.getPointAt(0.43), 'K.02'],
    [loop.getPointAt(0.31), 'K.03'],
    [V(1.9, 0, 4.9), 'K.04'],
  ];
  const flags = flagSpots.map(([p, label], i) => {
    const g = new THREE.Group();
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.045, 2.0, 5).translate(0, 1.0, 0), new THREE.MeshStandardMaterial({ color: PAL.dark, flatShading: true }));
    const tex = textTexture(label, { w: 256, h: 160, size: 82, bg: i === 3 ? PAL.signal : '#141414', accent: null, align: 'center' });
    const flagGeo = new THREE.PlaneGeometry(0.95, 0.6, 6, 1).translate(0.48, 0, 0);
    const flag = new THREE.Mesh(flagGeo, new THREE.MeshStandardMaterial({ map: tex, side: THREE.FrontSide, roughness: 0.8 }));
    const back = new THREE.Mesh(flagGeo, new THREE.MeshStandardMaterial({ color: i === 3 ? PAL.signal : '#141414', side: THREE.BackSide, roughness: 0.8 }));
    flag.add(back);
    flag.position.y = 1.65;
    g.add(pole, flag);
    const off = V(p.x, 0, p.z + 0.4).normalize().multiplyScalar(-1.05);
    g.position.set(p.x + off.x, 0, p.z + off.z);
    g.rotation.y = Math.atan2(-g.position.x, -g.position.z) + 1.2;
    g.scale.setScalar(0.001);
    g.userData = { flag, base: flagGeo.attributes.position.array.slice() };
    return g;
  });

  /* ───────── rute upita ───────── */
  const L = (x, z, y = 0.42) => V(x, y, z);
  const routes = {
    west: new THREE.CatmullRomCurve3([POS.lens.clone(), V(-10.6, 3.2, -4.9), L(-9.6, -3.3), L(-8.2, -1.4), L(-7.25, 0.6), L(-6.0, 3.0), L(-3.6, 4.7), L(-1.4, 5.1), POS.Wdoor.clone()], false, 'centripetal'),
    east: new THREE.CatmullRomCurve3([V(17.5, 7.5, 2.8), V(14.2, 1.6, 1.0), L(11.7, 0.6, 0.62), L(10.1, 0.25, 0.7), L(8.6, -0.1), L(7.1, 1.6), L(5.4, 3.7), L(2.6, 5.0), L(0.9, 4.9), POS.Wdoor.clone()], false, 'centripetal'),
    sky: new THREE.CatmullRomCurve3([V(3.5, 13, -6), V(2.2, 6.5, 0.5), V(0.8, 2.2, 4.4), POS.Wdoor.clone()], false, 'centripetal'),
    north: new THREE.CatmullRomCurve3([V(-2, 9.5, -16), V(-0.6, 2.4, -9.6), L(0.4, -6.2), L(4.0, -5.3), L(6.8, -2.6), L(7.1, 1.6), L(5.4, 3.7), L(2.6, 5.0), L(0.9, 4.9), POS.Wdoor.clone()], false, 'centripetal'),
    comp: new THREE.CatmullRomCurve3([POS.lens.clone(), V(-10.6, 3.2, -4.9), L(-9.6, -3.3), L(-8.2, -1.4), L(-6.6, -1.9), L(-5.6, -0.85), POS.Cdoor.clone()], false, 'centripetal'),
  };

  const staticMesh = new THREE.Mesh(S.merge(), null);
  const windowsGeo = Wn.merge();

  return { staticMesh, windowsGeo, W, C, lens, cars, loop, flags, routes, trees };
}

