// Hero "O nama" — Mali studio. Velika odgovornost.
// Pogled s trga prema konkatedrali (toranj ispred broda crkve), signal s tornja izlazi iz kadra; u prvom planu
// niska kuća s jednim upaljenim prozorom (studio). Dva prolaza iz iste kamere:
//  - bg: cijela scena;
//  - matte: bijela silueta samo tornja (prozirna pozadina) — prednji sloj je bg × matte, pa je toranj ispred
//    naslova piksel-identičan pozadini (bez razlike u boji na rubu).
import * as THREE from 'three';
import { mat, box, light, pool, motes, rng, V } from '../kit.js';
import { loadCity, loadCathedral, cathedralMesh } from './osijek.js';
import { createBeam } from '../../../src/js/world3/beam.js';

const TOWER_X = 27.4; // sve istočno od ovoga je toranj (matte)

function project(camera, p) {
  const v = p.clone().project(camera);
  return { x: +(((v.x + 1) / 2) * 100).toFixed(2), y: +(((1 - v.y) / 2) * 100).toFixed(2) };
}

export function cityMass(scene, city, { r = 380, cx = 10, cy = 0, skip = 46, avoid = null, corridor = null, depthOnly = false, dens = 1 } = {}) {
  // stvarni tlocrti Osijeka (OSM) kao tamne mase s rijetkim upaljenim prozorima
  const R = rng(14);
  const geos = [];
  const lights = [];
  for (const b of city.buildings) {
    const r0 = b.r, n = r0.length / 2;
    let x = 0, y = 0;
    for (let i = 0; i < n; i++) { x += r0[i * 2]; y += r0[i * 2 + 1]; }
    x /= n; y /= n;
    const d = Math.hypot(x - cx, y - cy);
    if (d < skip || d > r) continue;
    if (avoid && Math.hypot(x - avoid[0], y - avoid[1]) < avoid[2]) continue;
    if (corridor) {
      // trg: otvoren pogled od kamere do tornja (u ravnini x / −z)
      const [ax, ay, bx, by, wdt] = corridor;
      const vx = bx - ax, vy = by - ay, t = Math.max(0, Math.min(1, ((x - ax) * vx + (y - ay) * vy) / (vx * vx + vy * vy)));
      if (Math.hypot(x - (ax + vx * t), y - (ay + vy * t)) < wdt) continue;
    }
    const h = Math.max(4, b.h[0] / 2);
    const sh = new THREE.Shape();
    for (let i = 0; i < n; i++) (i ? sh.lineTo : sh.moveTo).call(sh, r0[i * 2], r0[i * 2 + 1]);
    const g = new THREE.ExtrudeGeometry(sh, { depth: h, bevelEnabled: false });
    g.rotateX(-Math.PI / 2);
    geos.push(g);
    // prozori: nekoliko toplih točaka na pročeljima
    for (let i = 0; i < n; i++) {
      if (R() > 0.35 * dens) continue;
      const j = (i + 1) % n;
      const ax = r0[i * 2], ay = r0[i * 2 + 1], bx = r0[j * 2], by = r0[j * 2 + 1];
      const L = Math.hypot(bx - ax, by - ay);
      if (L < 6) continue;
      const nx = (by - ay) / L, ny = -(bx - ax) / L;
      for (let f = 1.6; f < h - 1; f += 3.2) {
        if (R() > 0.22 * dens) continue;
        const t = 0.15 + R() * 0.7;
        lights.push({ p: [ax + (bx - ax) * t + nx * 0.25, f, -(ay + (by - ay) * t + ny * 0.25)], c: R() < 0.85 ? '#ffc27a' : '#cfd8ff', s: 0.9, k: 1.6, a: 0.75 });
      }
    }
  }
  if (!geos.length) return;
  const { mergeGeometries } = THREE.BufferGeometryUtils || {};
  void mergeGeometries;
  const m = depthOnly ? new THREE.MeshBasicMaterial({ colorWrite: false }) : mat({ color: '#171a22', rough: 0.85, metal: 0.05, env: 0.5 });
  for (const g of geos) { const mesh = new THREE.Mesh(g, m); mesh.receiveShadow = true; scene.add(mesh); }
  return lights;
}

function make(mode, comp) {
  const desk = comp === 'd';
  const matte = mode === 'matte';
  return {
    file: matte ? `hero/tmp/onama-matte-${comp}.png` : `hero/onama-bg-${comp}.webp`,
    metaFile: matte ? null : `hero/onama-${comp}.json`,
    w: desk ? 2400 : 1080,
    h: desk ? 1350 : 1920,
    pr: desk ? 1.25 : 1.5,
    q: 76,
    also: matte ? '' : desk ? '1600' : '720',
    cutout: matte,
    fov: desk ? 30 : 42,
    async build(st) {
      const { scene, camera } = st;
      const cam = desk ? { pos: [236, 2.2, 86], look: [44, 54, -14] } : { pos: [214, 1.8, 74], look: [36, 60, -4] };
      camera.position.set(...cam.pos);
      camera.lookAt(...cam.look);
      camera.far = 4000;
      camera.updateProjectionMatrix();
      camera.updateMatrixWorld();
      const [city, cath] = await Promise.all([loadCity(), loadCathedral()]);
      const c = cathedralMesh(cath.geo, cath.haloGeo, { win: 0.8, halo: 0.5 });
      // studio: niska kuća u prvom planu s jednim upaljenim prozorom
      const sx = desk ? 181 : 174.6, sz = desk ? 78 : 59.6;
      const studio = new THREE.Group();
      studio.position.set(sx, 0, sz);
      studio.lookAt(cam.pos[0], 0, cam.pos[2]);
      const winPos = new THREE.Vector3(0, 4.4 + 0.85, 4.06);
      if (matte) {
        scene.background = null;
        st.skyMesh.visible = false;
        scene.fog = null;
        const white = new THREE.MeshBasicMaterial({ color: '#ffffff' });
        white.clippingPlanes = [new THREE.Plane(new THREE.Vector3(1, 0, 0), -TOWER_X)];
        st.renderer.localClippingEnabled = true;
        const t = new THREE.Mesh(cath.geo, white);
        scene.add(t);
        // kuća u prvom planu zaklanja toranj → i ona ide u matte kao crna (izrezuje silueta)
        const black = new THREE.MeshBasicMaterial({ color: '#000000', colorWrite: false });
        studio.add(box(11, 7.2, 8, black, 0, 0, 0));
        scene.add(studio);
        // i ostale zgrade koje zaklanjaju toranj: samo dubina
        cityMass(scene, city, { r: 420, skip: 44, avoid: [sx, -sz, 22], corridor: [cam.pos[0], -cam.pos[2], 33, -1, 34], depthOnly: true });
        const cathDepth = new THREE.Mesh(cath.geo, black);
        cathDepth.renderOrder = -1;
        scene.add(cathDepth);
        t.renderOrder = 1;
      } else {
        scene.fog.density = 0.0019;
        st.sky.uAz.value = -0.9;
        st.sky.uGlowI.value = 0.5;
        st.addFloor({ size: 4000, cell: 6, gridI: 0.12, refl: 0.38, fall: 0.006, fog: 0.0016, center: [60, 40] });
        light(scene, 'hemi', '#24305f', 0.32, [0, 30, 0], null, { ground: '#07080c' });
        light(scene, 'dir', '#6d86ff', 0.25, [200, 120, 260], [30, 30, 0]);
        scene.add(c.group);
        // reflektori odozdo na toranj i pročelje (topli), hladna noć prema vrhu
        for (const [x, z, tx, ty, tz, I] of [[58, 18, 33, 62, 1, 7000], [50, -22, 33, 50, 1, 5000], [70, 4, 34, 30, 1, 4000], [10, 30, 0, 22, 0, 2600]]) light(scene, 'spot', '#ffb070', I, [x, 1.2, z], [tx, ty, tz], { angle: 0.36, pen: 0.85 });
        const beam = createBeam();
        scene.add(beam.group);
        beam.update({ b: 1, at: c.spire, unit: 1, camera, time: 3.2, pr: st.pr, alpha: 1 });
        const lights = cityMass(scene, city, { r: 420, skip: 44, avoid: [sx, -sz, 22], corridor: [cam.pos[0], -cam.pos[2], 33, -1, 34] }) || [];
        st.dots(lights);
        // studio
        const wall = mat({ color: '#2a2a30', rough: 0.85 });
        studio.add(box(11, 7.2, 8, wall, 0, 0, 0));
        studio.add(box(11.4, 0.4, 8.4, mat({ color: '#3a3a40', rough: 0.8 }), 0, 7.2, 0));
        // tamni prozori i jedan topli
        for (const [x, y] of [[-3.6, 1.4], [3.6, 1.4], [-3.6, 4.4], [3.6, 4.4], [0, 1.4]]) studio.add(box(1.4, 1.7, 0.08, mat({ color: '#0d0f16', rough: 0.15, metal: 0.4, env: 1.2 }), x, y, 4.02));
        const warm = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 1.8), new THREE.MeshBasicMaterial({ color: new THREE.Color('#ffc477').multiplyScalar(1.8) }));
        warm.position.copy(winPos);
        studio.add(warm);
        studio.add(box(1.64, 0.1, 0.2, mat({ color: '#56514a', rough: 0.6 }), 0, 4.3, 4.1));
        scene.add(studio);
        studio.updateMatrixWorld(true);
        const wp = winPos.clone().applyMatrix4(studio.matrixWorld);
        light(scene, 'point', '#ffb15e', 40, [wp.x + 1, wp.y, wp.z + 1.5], null, { dist: 18 });
        pool(scene, wp.x + 2, wp.z + 4, 6, { i: 0.35 });
        // nekoliko uličnih svjetala na trgu
        for (const [x, z] of [[96, 40], [128, 52], [160, 64], [112, 22], [150, 30]]) {
          scene.add(box(0.18, 5.5, 0.18, mat({ color: '#15171c', metal: 0.6, rough: 0.4 }), x, 0, z));
          st.dots([{ p: [x, 5.6, z], c: '#ffd6a0', s: 1.1, k: 2.4 }]);
          pool(scene, x, z, 5, { i: 0.4 });
        }
        motes(st, { n: 120, box: [60, 1, -10, 200, 90, 110], seed: 5, size: [0.3, 0.9], a: [0.15, 0.45] });
        studio.updateMatrixWorld(true);
        st.meta = {
          w: desk ? 2400 : 1080, h: desk ? 1350 : 1920,
          window: project(camera, wp),
          spire: project(camera, c.spire),
          tower: [project(camera, V(TOWER_X + 1, 30, 1)), project(camera, V(38, 30, 1))],
          towerMid: project(camera, V(33.5, 36, 1)),
          ground: project(camera, V(33, 0, 1)),
        };
      }
    },
  };
}

export const onamaScenes = {
  'onama-bg-d': make('bg', 'd'),
  'onama-matte-d': make('matte', 'd'),
  'onama-bg-m': make('bg', 'm'),
  'onama-matte-m': make('matte', 'm'),
};
