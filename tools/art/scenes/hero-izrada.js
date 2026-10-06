// Hero "Izrada web stranica" — Od nacrta do zgrade.
// Sedam etaža = sedam dijelova stranice koja zove (temelj = upit, kruna = hero). Dva piksel-točna prolaza iz iste
// kamere: "plan" (sve je nacrt) i "real" (vaša zgrada sagrađena i osvijetljena, grad oko nje ostaje nacrt).
// Kamera je arhitektonska: pročelje paralelno sa senzorom + pomak objektiva (lens shift), pa su crte etaža na
// ekranu vodoravne — vodoravni CSS skener točno prati katove.
import * as THREE from 'three';
import { mat, box, createBlueprint, light, pool, horizon, motes, canvasTex, rng, V } from '../kit.js';
import { addWindow } from './common.js';

// etaže: [donji rub, visina, naziv dijela stranice]
export const LEVELS = [
  [0, 4.6, 'Kratki upit i poziv'],
  [4.6, 3.2, 'Česta pitanja'],
  [7.8, 3.2, 'Područje rada'],
  [11.0, 3.2, 'Radovi'],
  [14.2, 3.2, 'Dokazi'],
  [17.4, 3.2, 'Usluge jezikom kupca'],
  [20.6, 3.4, 'Hero'],
];
const W = 12, D = 10, ZF = D / 2; // pročelje na z = +5
const TOP = 24.0, CROWN = 27.2;

function shopTex() {
  return canvasTex(512, 256, (x, w, h) => {
    const g = x.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, '#ffe2b8'); g.addColorStop(0.5, '#ffb866'); g.addColorStop(1, '#b8601e');
    x.fillStyle = g; x.fillRect(0, 0, w, h);
    // police i pult: siluete
    x.fillStyle = 'rgba(70,28,6,0.45)';
    for (let i = 0; i < 5; i++) x.fillRect(20 + i * 100, h * 0.18, 70, h * 0.5);
    x.fillStyle = 'rgba(60,24,4,0.55)'; x.fillRect(w * 0.55, h * 0.62, w * 0.3, h * 0.38);
    x.fillStyle = 'rgba(255,248,235,0.5)'; for (let i = 0; i < 6; i++) x.fillRect(30 + i * 85, 8, 40, 6);
  });
}
function penthouseTex() {
  return canvasTex(256, 128, (x, w, h) => {
    const g = x.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, '#f2f6ff'); g.addColorStop(1, '#8aa2ff');
    x.fillStyle = g; x.fillRect(0, 0, w, h);
    x.fillStyle = 'rgba(30,40,90,0.35)'; x.fillRect(w * 0.1, h * 0.55, w * 0.25, h * 0.45); x.fillRect(w * 0.6, h * 0.5, w * 0.12, h * 0.5);
  });
}

function buildTower(real) {
  const g = new THREE.Group();
  const R = rng(31);
  const face = mat({ color: '#2b2e36', rough: 0.62, metal: 0.25, env: 0.9 });
  const band = mat({ color: '#9a968e', rough: 0.8 });
  const frame = '#3a3329';
  // etaže 1–5: tijelo + vijenac (ploča koja izlazi) — crte etaža su jasne i u nacrtu i u stvarnosti
  for (let i = 1; i <= 5; i++) {
    const [y0, h] = LEVELS[i];
    g.add(box(W, h - 0.34, D, face, 0, y0, 0));
    g.add(box(W + 0.36, 0.34, D + 0.36, band, 0, y0 + h - 0.34, 0));
  }
  // prizemlje: viši izlog, stupovi, nadstrešnica
  const [g0, gh] = LEVELS[0];
  g.add(box(0.5, gh, D, face, -W / 2 + 0.25, g0, 0));
  g.add(box(0.5, gh, D, face, W / 2 - 0.25, g0, 0));
  g.add(box(W, gh, 0.4, face, 0, g0, -D / 2 + 0.2));
  g.add(box(W + 0.36, 0.42, D + 0.36, band, 0, gh - 0.42, 0));
  const shop = new THREE.Mesh(new THREE.PlaneGeometry(W - 1, gh - 0.75), mat({ color: '#000', emissive: '#ffffff', ei: real ? 0.85 : 0, emissiveMap: shopTex(), rough: 0.12, metal: 0.2 }));
  shop.position.set(0, (gh - 0.75) / 2 + 0.05, ZF - 0.25);
  g.add(shop);
  const mull = mat({ color: frame, rough: 0.45, metal: 0.6 });
  for (const x of [-3.2, -0.2, 2.8]) g.add(box(0.1, gh - 0.75, 0.12, mull, x, 0.05, ZF - 0.2));
  g.add(box(W - 1, 0.1, 0.14, mull, 0, 2.95, ZF - 0.2));
  // vrata (desno) s ručkom
  g.add(box(1.5, 2.6, 0.08, mat({ color: '#1b1c20', rough: 0.3, metal: 0.7 }), 4.15, 0.05, ZF - 0.12));
  g.add(box(0.05, 1.0, 0.06, mat({ color: '#d7c49a', rough: 0.25, metal: 1 }), 3.65, 0.9, ZF - 0.06));
  // nadstrešnica u signalnoj plavoj
  const awn = box(W - 0.6, 0.12, 1.5, mat({ color: '#2347ff', rough: 0.5 }), 0, 3.25, ZF + 0.6);
  awn.rotation.x = 0.08;
  g.add(awn);
  // etaže 1–5: različit ritam prozora (svaki dio stranice ima svoj "raspored")
  const rhythm = [null, [6, 1.25, 1.65], [3, 3.0, 1.8], [4, 1.5, 2.25], [5, 1.35, 1.9], [6, 1.25, 1.75]];
  for (let i = 1; i <= 5; i++) {
    const [y0, h] = LEVELS[i];
    const [n, ww, wh] = rhythm[i];
    const span = W - 1.6;
    for (let k = 0; k < n; k++) {
      const x = -span / 2 + (span / n) * (k + 0.5);
      const lit = real ? (R() < 0.78 ? 0.22 + R() * 0.38 : 0.03) : 0;
      addWindow(g, null, { w: ww, h: wh, x, y: y0 + (h - 0.34) / 2, z: ZF + 0.005, lit, frame, depth: 0.14, mullion: ww > 2 });
    }
    // bočno pročelje (lijevo, vidljivo iz kamere)
    for (let k = 0; k < 3; k++) {
      const lit = real ? (R() < 0.7 ? 0.18 + R() * 0.3 : 0.03) : 0;
      addWindow(g, null, { w: 1.3, h: Math.min(1.8, wh), x: -W / 2 - 0.005, y: y0 + (h - 0.34) / 2, z: -3 + k * 3, ry: -Math.PI / 2, lit, frame, depth: 0.14, mullion: false });
    }
    // okomita rebra na etaži "Dokazi"
    if (i === 4) for (let k = 0; k <= n; k++) g.add(box(0.12, h - 0.34, 0.5, band, -span / 2 + (span / n) * k, y0, ZF + 0.25));
  }
  // kruna: uvučeni stakleni penthouse ("Hero") i okvir na krovu
  const [p0, ph] = LEVELS[6];
  g.add(box(W + 0.36, 0.3, D + 0.36, band, 0, p0 - 0.0, 0));
  const glass = new THREE.Mesh(new THREE.BoxGeometry(W - 2, ph - 0.3, D - 2), mat({ color: '#0b0f1c', emissive: '#ffffff', ei: real ? 0.6 : 0, emissiveMap: penthouseTex(), rough: 0.08, metal: 0.4 }));
  glass.position.set(0, p0 + 0.3 + (ph - 0.3) / 2, 0);
  g.add(glass);
  for (const x of [-4, -1.3, 1.3, 4]) g.add(box(0.08, ph - 0.3, 0.1, mull, x, p0 + 0.3, ZF - 1 + 0.02));
  g.add(box(W, 0.3, D, band, 0, TOP - 0.3, 0));
  // okvir na krovu: prazan "zaslon" krune (bez teksta)
  const fr = mat({ color: '#0d1020', emissive: real ? '#cdd8ff' : '#000000', ei: real ? 2.4 : 0, rough: 0.3 });
  const fw = 8.4, fh = 2.6, fy = TOP + 0.4, t = 0.16;
  g.add(box(fw, t, t, fr, 0, fy, ZF - 1.2));
  g.add(box(fw, t, t, fr, 0, fy + fh - t, ZF - 1.2));
  g.add(box(t, fh, t, fr, -fw / 2, fy, ZF - 1.2));
  g.add(box(t, fh, t, fr, fw / 2, fy, ZF - 1.2));
  if (real) {
    const inner = new THREE.Mesh(new THREE.PlaneGeometry(fw - 0.3, fh - 0.3), new THREE.MeshBasicMaterial({ color: new THREE.Color('#2347ff').multiplyScalar(0.55), transparent: true, opacity: 0.55 }));
    inner.position.set(0, fy + fh / 2, ZF - 1.2);
    g.add(inner);
  }
  // nosači okvira
  for (const x of [-3, 3]) g.add(box(0.12, 0.45, 0.12, mull, x, TOP - 0.05, ZF - 1.2));
  g.traverse((o) => { if (o.isMesh) { o.castShadow = real; o.receiveShadow = real; } });
  return g;
}

function cityBlocks() {
  // okolni grad: samo nacrt (isti u oba prolaza). Lijevo nisko i daleko — nebo iznad ostaje prazno za naslov.
  const R = rng(9);
  const list = [];
  for (let k = 0; k < 7; k++) list.push([-16 - k * 11 - R() * 3, -18 - R() * 14, 8 + R() * 3, 9, 4 + R() * 5]);
  list.push([16.5, -1, 8, 10, 14]);
  list.push([27, -8, 10, 10, 22]);
  list.push([40, -12, 12, 10, 12]);
  list.push([10, -30, 14, 12, 34]);
  list.push([-4, -46, 16, 12, 18]);
  list.push([32, -40, 16, 14, 28]);
  return list.map(([x, z, w, d, h]) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d).translate(0, h / 2, 0));
    m.position.set(x, 0, z);
    return m;
  });
}

function architecturalCamera(camera, w, h, { pos, look, fov, shiftY }) {
  // pogled ravno (bez nagiba) + pomak objektiva prema gore: okomice ostaju okomite
  const Hv = h * (1 + 2 * shiftY);
  camera.fov = fov;
  camera.aspect = w / Hv;
  camera.position.set(...pos);
  camera.lookAt(look[0], pos[1], look[2]);
  camera.setViewOffset(w, Hv, 0, 0, w, h);
  camera.updateProjectionMatrix();
  camera.updateMatrixWorld();
}

function project(camera, p) {
  const v = p.clone().project(camera);
  return { x: +(((v.x + 1) / 2) * 100).toFixed(2), y: +(((1 - v.y) / 2) * 100).toFixed(2) };
}

function make(mode, comp) {
  const real = mode === 'real';
  const desk = comp === 'd';
  return {
    file: `hero/izrada-${mode}-${comp}.webp`,
    metaFile: mode === 'real' ? `hero/izrada-${comp}.json` : null,
    w: desk ? 2400 : 1080,
    h: desk ? 1350 : 1920,
    pr: desk ? 1.25 : 1.5,
    q: real ? 76 : 72,
    also: desk ? '1600' : '720',
    fov: 30,
    async build(st) {
      const { scene, camera } = st;
      const cam = desk
        ? { pos: [-8.4, 1.6, 82], look: [-8.4, 0, 0], fov: 40, shiftY: 0.36 }
        : { pos: [-3.4, 1.5, 98], look: [-3.4, 0, 0], fov: 50, shiftY: 0.27 };
      architecturalCamera(camera, desk ? 2400 : 1080, desk ? 1350 : 1920, cam);
      st.sky.uAz.value = Math.PI * 0.85;
      st.sky.uGlowI.value = 0.45;
      scene.fog.density = 0.006;
      st.addFloor({ cell: 2, gridI: 0.5, refl: real ? 0.55 : 0.35, fall: 0.02, fog: 0.004 });
      light(scene, 'hemi', '#24305f', 0.3, [0, 30, 0], null, { ground: '#07080c' });
      // nacrt
      const bp = createBlueprint(null, { width: desk ? 1.25 : 1.4, opacity: 0.9, ghost: 0 });
      const fill = new THREE.MeshBasicMaterial({ color: '#2347ff', transparent: true, opacity: 0.022, depthWrite: true });
      const asPlan = (m) => { m.updateWorldMatrix(true, false); bp.edges(m, 28); m.material = fill; m.renderOrder = 1; m.castShadow = false; };
      for (const m of cityBlocks()) { scene.add(m); asPlan(m); }
      // ulica: rub pločnika i razdjelna crta
      bp.line(V(-120, 0.02, ZF + 3), V(120, 0.02, ZF + 3));
      bp.line(V(-120, 0.02, ZF + 10), V(120, 0.02, ZF + 10));
      for (let x = -120; x < 120; x += 6) bp.line(V(x, 0.02, ZF + 6.5), V(x + 3, 0.02, ZF + 6.5));
      // zgrada
      const tower = buildTower(real);
      scene.add(tower);
      tower.updateMatrixWorld(true);
      if (!real) {
        tower.traverse((o) => { if (o.isMesh) asPlan(o); });
        // kote etaža (lijevo od zgrade) i visina
        const xd = -W / 2 - 2.2;
        bp.line(V(xd, 0, ZF), V(xd, CROWN, ZF));
        for (const [y0] of LEVELS) bp.line(V(xd - 0.6, y0, ZF), V(xd + 0.6, y0, ZF));
        bp.line(V(xd - 0.6, TOP, ZF), V(xd + 0.6, TOP, ZF));
        bp.line(V(xd - 0.6, CROWN, ZF), V(xd + 0.6, CROWN, ZF));
        // tlocrtna kota širine
        bp.line(V(-W / 2, 0.03, ZF + 1.6), V(W / 2, 0.03, ZF + 1.6));
        st.dots(LEVELS.map(([y0]) => ({ p: [xd, y0, ZF], c: '#9fb3ff', s: 0.4, k: 1.6 })));
      } else {
        // svjetlo izloga na pločnik, reflektor krune, ulična svjetiljka
        light(scene, 'point', '#ffb15e', 26, [0, 1.6, ZF + 3.2], null, { dist: 16 });
        light(scene, 'point', '#ffcf9a', 12, [-W / 2 - 1.5, 2.2, ZF + 1], null, { dist: 10 });
        light(scene, 'point', '#b9c8ff', 30, [0, TOP + 2, ZF + 2], null, { dist: 14 });
        light(scene, 'dir', '#6d86ff', 0.35, [30, 20, 40], [0, 10, 0]);
        light(scene, 'dir', '#ffb36b', 0.8, [-40, 12, 10], [0, 8, 0], { shadow: 40 });
        pool(scene, 0, ZF + 3.5, 9, { i: 0.75 });
        st.dots([{ p: [0, TOP + 1.7, ZF - 1.0], c: '#b9c8ff', s: 6, k: 0.35, a: 0.6 }]);
      }
      // ulična svjetiljka desno (u oba prolaza: nacrt ili stvarna)
      const lampX = W / 2 + 4.5, lampZ = ZF + 2.4;
      const pole = new THREE.Group();
      const pm = mat({ color: '#1d2027', rough: 0.4, metal: 0.7 });
      pole.add(box(0.16, 6.2, 0.16, pm, lampX, 0, lampZ));
      pole.add(box(1.4, 0.1, 0.12, pm, lampX - 0.65, 6.1, lampZ));
      pole.add(box(0.55, 0.18, 0.32, pm, lampX - 1.25, 6.0, lampZ));
      scene.add(pole);
      pole.updateMatrixWorld(true);
      if (!real) pole.traverse((o) => { if (o.isMesh) asPlan(o); });
      else {
        light(scene, 'spot', '#ffc27a', 260, [lampX - 1.25, 5.95, lampZ], [lampX - 1.25, 0, lampZ], { angle: 0.75, pen: 0.9 });
        pool(scene, lampX - 1.25, lampZ, 4.5, { i: 0.5 });
        st.dots([{ p: [lampX - 1.25, 5.92, lampZ], c: '#fff1d6', s: 0.7, k: 3 }]);
      }
      bp.build(scene, st);
      horizon(st, { a0: -1.2, a1: 1.2, seed: 7, center: [0, 0], r0: 160, r1: 400 });
      motes(st, { n: 90, box: [-30, 0.5, -10, 20, 30, 20], seed: 3, size: [0.04, 0.12], a: [0.1, 0.4] });
      // metapodaci: etaže i rubovi zgrade u postocima slike
      st.meta = {
        w: desk ? 2400 : 1080, h: desk ? 1350 : 1920,
        levels: LEVELS.map(([y0, h, label], i) => ({ i: i + 1, label, bottom: project(camera, V(0, y0, ZF)).y, top: project(camera, V(0, y0 + h, ZF)).y })),
        crown: project(camera, V(0, CROWN, ZF)).y,
        roof: project(camera, V(0, TOP, ZF)).y,
        ground: project(camera, V(0, 0, ZF)).y,
        left: project(camera, V(-W / 2, 10, ZF)).x,
        right: project(camera, V(W / 2, 10, ZF)).x,
        horizon: project(camera, V(0, cam.pos[1], -1000)).y,
      };
    },
  };
}

export const izradaScenes = {
  'izrada-plan-d': make('plan', 'd'),
  'izrada-real-d': make('real', 'd'),
  'izrada-plan-m': make('plan', 'm'),
  'izrada-real-m': make('real', 'm'),
};
