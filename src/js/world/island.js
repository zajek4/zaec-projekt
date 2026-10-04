// Lebdeći otok: slojevi tla (= 5 slojeva weba), polja, brežuljci, ribnjak, rijeka i slap.
import * as THREE from 'three';
import { PAL } from './palette.js';
import { Builder, paint, paintFaces, jitter, xform, ribbon, box } from './geo.js';
import { worldMaterial, waterMaterial } from './materials.js';

export const STRATA = [
  // L.01 je gornja ploča s gradom; ispod su L.02–L.05
  { top: -0.9, h: 1.35, rt: 13.75, rb: 12.5, color: PAL.soil1, cut: '#c99b6f' },
  { top: -2.25, h: 1.55, rt: 12.5, rb: 10.4, color: PAL.clay, cut: '#d68f62' },
  { top: -3.8, h: 1.85, rt: 10.4, rb: 7.6, color: PAL.rock, cut: '#a29a8d' },
  { top: -5.65, h: 2.3, rt: 7.6, rb: 3.4, color: PAL.rock2, cut: '#857e73' },
];

export function buildIsland(rand, mat) {
  const layers = [];

  // ── L.01 gornja ploča ──
  let top = new THREE.CylinderGeometry(14, 13.75, 0.9, 20, 2);
  top.translate(0, -0.45, 0);
  top = jitter(top, 0.55, rand, { keepTop: 0 });
  top = paintFaces(top, (n, cx, cy) => (Math.abs(n.y) > 0.8 && cy > -0.05 ? PAL.grass : cy > -0.42 ? PAL.grassDark : PAL.soil1));
  const topB = new Builder();
  topB.push(top);

  // brežuljci uz stražnji rub
  [[-5.2, -10.6, 2.4], [-1.4, -11.9, 2.0], [3.4, -11.4, 1.7], [-9.3, -7.9, 1.6]].forEach(([x, z, r], i) => {
    let g = new THREE.IcosahedronGeometry(r, 1);
    g = jitter(g, 0.35, rand);
    g = paintFaces(g, (n) => (n.y > 0.55 ? (i % 2 ? PAL.meadow : PAL.grass2) : PAL.grassDark));
    xform(g, { pos: [x, -r * 0.62, z], scale: [1, 0.55, 1] });
    topB.push(g);
  });

  // slavonska polja (naprijed lijevo)
  const fieldCols = [PAL.wheat, PAL.grass2, PAL.plowed, PAL.wheat2, PAL.meadow, PAL.plowed];
  const field = new Builder();
  fieldCols.forEach((c, i) => {
    field.add(box(0.84, 0.05, 4.2), c, { pos: [i * 0.9 - 2.25, 0, 0] });
    if (c !== PAL.meadow) for (let r = 0; r < 3; r++) field.add(box(0.07, 0.09, 4.0), shade(c, -0.12), { pos: [i * 0.9 - 2.25 - 0.27 + r * 0.27, 0, 0] });
  });
  topB.absorb(field, { pos: [-8.2, 0.005, 5.4], rot: [0, 0.42, 0] });

  // obale rijeke i ribnjaka
  const riverPts = [[7.4, -9.2], [9.2, -6.2], [10.15, -2.2], [9.5, 2.4], [10.2, 6.4], [10.95, 9.55]].map(([x, z]) => new THREE.Vector3(x, 0, z));
  const river = new THREE.CatmullRomCurve3(riverPts, false, 'centripetal');
  topB.push(paint(ribbon(river, 2.5, 60, 0.012), PAL.sand));
  let bank = new THREE.CircleGeometry(2.45, 10);
  bank = jitter(bank, 0.3, rand, { y: false });
  topB.add(bank, PAL.sand, { pos: [7.0, 0.013, -10.2], rot: [-Math.PI / 2, 0, 0] });

  const topMesh = new THREE.Mesh(topB.merge(), mat);
  topMesh.receiveShadow = true;
  topMesh.castShadow = true;
  const L1 = new THREE.Group();
  L1.name = 'L1';
  L1.add(topMesh);
  layers.push(L1);

  // voda
  const waterB = new Builder();
  waterB.push(paint(ribbon(river, 1.45, 90, 0.035), PAL.water));
  let pond = new THREE.CircleGeometry(1.95, 10);
  pond = jitter(pond, 0.25, rand, { y: false });
  waterB.add(pond, PAL.water, { pos: [7.0, 0.036, -10.2], rot: [-Math.PI / 2, 0, 0] });
  const water = new THREE.Mesh(waterB.merge(), waterMaterial());
  water.receiveShadow = true;
  L1.add(water);

  // slap na kraju rijeke
  const end = river.getPoint(1);
  const tan = river.getTangent(1);
  const fall = buildWaterfall();
  fall.position.set(end.x + tan.x * 0.15, 0.04, end.z + tan.z * 0.15);
  fall.rotation.y = Math.atan2(tan.x, tan.z);
  L1.add(fall);

  // ── L.02–L.05 slojevi ──
  STRATA.forEach((s, i) => {
    const b = new Builder();
    let g = new THREE.CylinderGeometry(s.rt, s.rb, s.h + 0.35, 20, 1);
    g.translate(0, s.top - (s.h + 0.35) / 2 + 0.35, 0);
    g = jitter(g, 0.6, rand);
    g = paintFaces(g, (n, cx, cy) => (n.y > 0.8 ? s.cut : s.color));
    b.push(g);
    // izbočene stijene
    const rocks = 5 + i * 2;
    for (let k = 0; k < rocks; k++) {
      const a = rand() * Math.PI * 2;
      const t = rand();
      const r = s.rt + (s.rb - s.rt) * t - 0.15;
      let rg = new THREE.IcosahedronGeometry(0.45 + rand() * 0.55, 0);
      rg = jitter(rg, 0.25, rand);
      b.add(rg, shade(s.color, (rand() - 0.5) * 0.16), { pos: [Math.cos(a) * r, s.top - s.h * t, Math.sin(a) * r], scale: [1, 0.7, 1] });
    }
    if (i === STRATA.length - 1) {
      let tip = new THREE.ConeGeometry(3.4, 3.6, 12, 2);
      tip.rotateX(Math.PI);
      tip.translate(0, s.top - s.h - 1.8 + 0.1, 0);
      tip = jitter(tip, 0.5, rand);
      b.add(tip, PAL.deep);
    }
    const m = new THREE.Mesh(b.merge(), mat);
    m.castShadow = false;
    m.receiveShadow = true;
    const grp = new THREE.Group();
    grp.name = `L${i + 2}`;
    grp.add(m);
    layers.push(grp);
  });

  return { layers, river, water, fall };
}

function buildWaterfall() {
  const c = document.createElement('canvas');
  c.width = 64; c.height = 256;
  const x = c.getContext('2d');
  x.fillStyle = '#8fb8ec'; x.fillRect(0, 0, 64, 256);
  for (let i = 0; i < 26; i++) {
    x.fillStyle = `rgba(255,255,255,${0.25 + Math.random() * 0.55})`;
    x.fillRect(Math.random() * 64, Math.random() * 256, 2 + Math.random() * 3, 20 + Math.random() * 60);
  }
  const map = new THREE.CanvasTexture(c);
  map.wrapS = map.wrapT = THREE.RepeatWrapping;
  map.repeat.set(1, 2);
  map.colorSpace = THREE.SRGBColorSpace;
  const a = document.createElement('canvas');
  a.width = 4; a.height = 128;
  const ax = a.getContext('2d');
  const gr = ax.createLinearGradient(0, 0, 0, 128);
  gr.addColorStop(0, '#fff'); gr.addColorStop(0.55, '#bbb'); gr.addColorStop(1, '#000');
  ax.fillStyle = gr; ax.fillRect(0, 0, 4, 128);
  const alpha = new THREE.CanvasTexture(a);
  const mat = new THREE.MeshBasicMaterial({ map, alphaMap: alpha, transparent: true, depthWrite: false, side: THREE.DoubleSide, fog: true });
  const geo = new THREE.PlaneGeometry(1.45, 7.5, 1, 1);
  geo.translate(0, -3.75, 0);
  const plane = new THREE.Mesh(geo, mat);
  // savij vrh preko ruba
  const lip = new THREE.Mesh(new THREE.PlaneGeometry(1.45, 0.5), mat);
  lip.rotation.x = -Math.PI / 2;
  lip.position.set(0, 0, -0.25);
  const g = new THREE.Group();
  g.add(plane, lip);
  g.userData.map = map;
  return g;
}

export function shade(hex, amt) {
  const c = new THREE.Color(hex);
  const hsl = {};
  c.getHSL(hsl);
  c.setHSL(hsl.h, hsl.s, Math.min(1, Math.max(0, hsl.l + amt)));
  return '#' + c.getHexString();
}
