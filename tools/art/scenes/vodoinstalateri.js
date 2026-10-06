// Vodoinstalateri: bakrene cijevi, ventili i razdjelnik podnog grijanja na pločicama; topla i hladna voda
// teku kao svjetlo. Lijevi dio (bojler) je nacrt instalacije.
import * as THREE from 'three';
import { mat, box, createCut, createBlueprint, cutSheet, trail, motes, bokeh, light, canvasTex, V } from '../kit.js';
import { nightLights } from './common.js';

function pipePath(pts, bend = 0.08) {
  const path = new THREE.CurvePath();
  let prev = pts[0].clone();
  for (let i = 1; i < pts.length; i++) {
    const a = pts[i - 1], b = pts[i];
    if (i < pts.length - 1) {
      const c = pts[i + 1];
      const d1 = b.clone().sub(a).normalize(), d2 = c.clone().sub(b).normalize();
      const p1 = b.clone().sub(d1.clone().multiplyScalar(bend));
      const p2 = b.clone().add(d2.clone().multiplyScalar(bend));
      path.add(new THREE.LineCurve3(prev, p1));
      path.add(new THREE.QuadraticBezierCurve3(p1, b.clone(), p2));
      prev = p2;
    } else {
      path.add(new THREE.LineCurve3(prev, b.clone()));
    }
  }
  return path;
}

export default {
  file: 'world/djelatnost-vodoinstalateri.webp',
  fov: 38,
  async build(st) {
    const { scene, camera } = st;
    camera.position.set(2.3, 1.2, 3.35);
    camera.lookAt(-0.1, 1.02, 0.1);
    st.addFloor({ cell: 0.3, gridI: 0.3, refl: 0.45, fall: 0.35, rough: 0.003 });
    scene.fog.density = 0.06;
    nightLights(scene, { key: [-2.5, 2.6, 3], keyI: 1.1, fill: [3, 1.5, 2], fillI: 0.3, hemi: 0.22, target: [0, 0.9, 0], shadow: 3 });

    const cut = createCut(V(1, 0, 0.12), V(-0.55, 0, 0), { k: 40, i: 1.6 });
    const bp = createBlueprint(cut, { width: 1.3, opacity: 0.9, ghost: 0.018, angle: 25 });

    // zid od tamnih pločica
    const tiles = canvasTex(512, 512, (x, w, h) => {
      x.fillStyle = '#1d2230'; x.fillRect(0, 0, w, h);
      x.fillStyle = '#262c3d';
      const n = 4;
      for (let i = 0; i < n; i++) for (let j = 0; j < n * 2; j++) x.fillRect(i * (w / n) + 3, j * (h / (n * 2)) + 3, w / n - 6, h / (n * 2) - 6);
    });
    tiles.wrapS = tiles.wrapT = THREE.RepeatWrapping;
    tiles.repeat.set(4, 2);
    const wall = new THREE.Mesh(new THREE.PlaneGeometry(6, 3), mat({ color: '#ffffff', map: tiles, rough: 0.25, metal: 0.1, env: 0.8 }, null));
    wall.position.set(0, 1.5, 0);
    wall.receiveShadow = true;
    scene.add(wall);

    const copper = mat({ color: '#d0874e', rough: 0.28, metal: 1, env: 1.4 }, cut);
    const brass = mat({ color: '#c9a050', rough: 0.3, metal: 1, env: 1.3 }, cut);
    const steel = mat({ color: '#c3c7cf', rough: 0.3, metal: 1, env: 1.2 }, cut);
    const R0 = 0.022, Z = 0.12;
    const parts = new THREE.Group();
    scene.add(parts);

    // bojler (lijevo, u nacrtu)
    const boiler = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 1.0, 48), mat({ color: '#e6e6e2', rough: 0.35, metal: 0.1 }, cut));
    boiler.position.set(-1.25, 1.85, 0.3);
    parts.add(boiler);
    const cap = new THREE.Mesh(new THREE.SphereGeometry(0.28, 32, 12, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), mat({ color: '#e6e6e2', rough: 0.35 }, cut));
    cap.position.set(-1.25, 1.35, 0.3);
    parts.add(cap);

    // vodovi: topli (jantar) i hladni (plavo)
    const hot = [V(-1.15, 1.25, 0.3), V(-1.15, 1.08, 0.3), V(-1.15, 1.08, Z), V(1.9, 1.08, Z)];
    const hotDrop = [V(0.55, 1.08, Z), V(0.55, 0.62, Z), V(1.75, 0.62, Z)];
    const cold = [V(-2.8, 0.82, Z), V(-1.35, 0.82, Z), V(-1.35, 0.82, 0.3), V(-1.35, 1.25, 0.3)];
    const coldRun = [V(-1.35, 0.82, Z), V(1.9, 0.82, Z)];
    const coldDrop = [V(0.75, 0.82, Z), V(0.75, 0.38, Z), V(1.75, 0.38, Z)];
    const runs = [[hot, 'h'], [hotDrop, 'h'], [cold, 'c'], [coldRun, 'c'], [coldDrop, 'c']];
    const curves = [];
    for (const [pts, kind] of runs) {
      const path = pipePath(pts, 0.07);
      const m = new THREE.Mesh(new THREE.TubeGeometry(path, Math.max(40, pts.length * 40), R0, 14, false), copper);
      m.castShadow = true;
      parts.add(m);
      curves.push([path, kind]);
    }
    // razdjelnik podnog grijanja (dvije letve s izlazima)
    for (const [y, col] of [[0.62, '#ffb23f'], [0.38, '#2347ff']]) {
      const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 1.0, 16).rotateZ(Math.PI / 2), steel);
      bar.position.set(1.25, y, Z + 0.02);
      parts.add(bar);
      for (let k = 0; k < 5; k++) {
        const x = 0.9 + k * 0.17;
        const o = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.16, 12), steel);
        o.position.set(x, y - 0.1, Z + 0.02);
        parts.add(o);
        const capc = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.05, 16), mat({ color: col, rough: 0.4, emissive: col, ei: 0.15 }, cut));
        capc.position.set(x, y + 0.05, Z + 0.02);
        parts.add(capc);
        // cijevi podnog grijanja (bijeli PEX) prema podu
        const pex = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([V(x, y - 0.18, Z + 0.02), V(x, 0.12, Z + 0.06 + k * 0.01), V(x + 0.02, 0.02, Z + 0.3 + k * 0.04)]), 24, 0.01, 8), mat({ color: '#efebe3', rough: 0.5 }, cut));
        parts.add(pex);
      }
    }
    // kuglasti ventili s polugama u bojama vode
    const valve = (x, y, col) => {
      const b = new THREE.Mesh(new THREE.CylinderGeometry(0.036, 0.036, 0.1, 16).rotateZ(Math.PI / 2), brass);
      b.position.set(x, y, Z);
      parts.add(b);
      const nut = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.05, 6).rotateZ(Math.PI / 2), brass);
      nut.position.set(x - 0.07, y, Z);
      parts.add(nut);
      const stem = box(0.012, 0.04, 0.012, brass, x, y + 0.03, Z + 0.02);
      parts.add(stem);
      const lever = box(0.16, 0.018, 0.035, mat({ color: col, rough: 0.35, metal: 0.2, emissive: col, ei: 0.25 }, cut), x + 0.06, y + 0.065, Z + 0.02);
      parts.add(lever);
    };
    valve(-0.2, 1.08, '#ffb23f');
    valve(0.25, 0.82, '#2347ff');
    valve(1.45, 1.08, '#ffb23f');
    // manometar
    const gauge = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.03, 32).rotateX(Math.PI / 2), mat({ color: '#f2f0ea', rough: 0.3 }, cut));
    gauge.position.set(0.05, 1.22, Z + 0.02);
    parts.add(gauge);
    const gring = new THREE.Mesh(new THREE.TorusGeometry(0.06, 0.008, 8, 32), steel);
    gring.position.set(0.05, 1.22, Z + 0.035);
    parts.add(gring);
    const needle = box(0.004, 0.045, 0.003, mat({ color: '#2347ff' }, cut), 0.05, 1.205, Z + 0.04);
    needle.rotation.z = -0.7;
    parts.add(needle);
    parts.add(new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.12, 8), brass).translateX(0.05).translateY(1.14).translateZ(Z));
    // obujmice
    for (const x of [-1.8, -0.6, 0.9, 1.7]) for (const y of [1.08, 0.82]) parts.add(box(0.03, 0.06, 0.1, steel, x, y - 0.03, Z - 0.05));
    parts.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });

    // voda kao svjetlo: paketi u cijevima
    for (const [path, kind] of curves) {
      const L = path.getLength();
      const n = Math.max(1, Math.round(L / 0.9));
      for (let k = 0; k < n; k++) {
        const a = (k + 0.15) / n;
        trail(scene, path, { r: R0 * 1.12, color: kind === 'h' ? '#ffb23f' : '#3d6bff', hot: kind === 'h' ? '#ffe2b0' : '#c9d6ff', i: 1.1, tail: 0.5, from: a, to: Math.min(1, a + 0.32 / n * 2), seg: 260, radial: 10 });
      }
    }

    scene.updateMatrixWorld(true);
    parts.traverse((o) => { if (o.isMesh) bp.edges(o, 30); });
    // shema u nacrtu: strelice toka i simboli
    const arrow = (p, d) => { const s = 0.06; const n = V(-d.y, d.x, 0); bp.line(p, p.clone().add(d.clone().multiplyScalar(-s)).add(n.clone().multiplyScalar(s * 0.6))); bp.line(p, p.clone().add(d.clone().multiplyScalar(-s)).add(n.clone().multiplyScalar(-s * 0.6))); };
    arrow(V(-2.2, 0.9, Z), V(1, 0, 0));
    arrow(V(-0.9, 1.16, Z), V(1, 0, 0));
    bp.poly([V(-1.6, 2.5, 0.3), V(-0.9, 2.5, 0.3)]);
    bp.line(V(-1.25, 2.5, 0.3), V(-1.25, 2.62, 0.3));

    // svjetlo: topli radni reflektor i hladni odsjaj
    light(scene, 'spot', '#ffd7a8', 14, [1.3, 2.2, 1.6], [0.4, 0.8, 0], { angle: 0.6, pen: 0.8, shadow: true });
    light(scene, 'point', '#ff9a3c', 0.8, [0.6, 1.1, 0.4], null, { dist: 2 });
    light(scene, 'point', '#3d6bff', 0.9, [0.6, 0.6, 0.4], null, { dist: 2 });

    cutSheet(scene, cut, { size: 3, height: 3, i: 0.5 });
    bp.build(scene, st);
    motes(st, { n: 120, box: [-1.5, 0.1, 0.2, 1.8, 2.0, 2.2], seed: 41, size: [0.004, 0.012], a: [0.2, 0.6] });
    bokeh(st, [{ p: [1.95, 0.8, 2.85], c: '#ffb45e', s: 0.08, a: 0.35 }, { p: [2.05, 1.35, 2.8], c: '#5f7dff', s: 0.06, a: 0.3 }]);
  },
};
