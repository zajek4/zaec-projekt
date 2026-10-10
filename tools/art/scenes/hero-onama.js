// Ne koristi se od 10. 10. 2026: O nama je list nacrta 00 (tools/art/nacrt/o-nama.mjs). Scena ostaje za povijest.
// Hero "O nama" — Mali studio. Velika odgovornost. Tipografija kao mjera.
// Arhitektonska kamera (bez nagiba): toranj konkatedrale stoji okomito od tla do vrha kadra, a na istom trgu, na
// istoj dubini, niska kuća s jednim upaljenim prozorom (studio). Naslov se u HTML-u slaže prema mjerama iz kadra:
// "Velika odgovornost." je okomito, dugo točno kao toranj od tla do vrha šiljka; "Mali studio." je visoko kao prozor.
import * as THREE from 'three';
import { mat, box, light, pool, motes, rng, V } from '../kit.js';
import { loadCity, loadCathedral, cathedralMesh } from './osijek.js';
import { createBeam } from '../../../src/js/world3/beam.js';

function project(camera, p) {
  const v = p.clone().project(camera);
  return { x: ((v.x + 1) / 2) * 100, y: ((1 - v.y) / 2) * 100 };
}

/** Arhitektonska kamera s okretom (yaw) i pomakom objektiva po obje osi. */
function archCamera(camera, w, h, { pos, yaw, top, bottom, left, right }) {
  const T = Math.max(Math.abs(top), Math.abs(bottom));
  const Th = Math.max(Math.abs(left), Math.abs(right));
  const Hv = (h * 2 * T) / (top - bottom);
  const Wv = (w * 2 * Th) / (right - left);
  camera.fov = (2 * Math.atan(T) * 180) / Math.PI;
  camera.aspect = Th / T;
  camera.position.set(...pos);
  camera.lookAt(pos[0] + Math.sin(yaw), pos[1], pos[2] - Math.cos(yaw));
  camera.setViewOffset(Wv, Hv, ((Th + left) / (2 * Th)) * Wv, ((T - top) / (2 * T)) * Hv, w, h);
  camera.far = 5000;
  camera.updateProjectionMatrix();
  camera.updateMatrixWorld();
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
  const m = depthOnly ? new THREE.MeshBasicMaterial({ colorWrite: false }) : mat({ color: '#171a22', rough: 0.85, metal: 0.05, env: 0.5 });
  for (const g of geos) { const mesh = new THREE.Mesh(g, m); mesh.receiveShadow = true; scene.add(mesh); }
  return lights;
}

function make(comp) {
  const desk = comp === 'd';
  const W = desk ? 2400 : 1080, H = desk ? 1350 : 1920;
  return {
    file: `hero/onama-bg-${comp}.webp`,
    metaFile: `hero/onama-${comp}.json`,
    w: W,
    h: H,
    pr: desk ? 1.25 : 1.5,
    q: 76,
    also: desk ? '1600' : '720',
    async build(st) {
      const { scene, camera } = st;
      const [city, cath] = await Promise.all([loadCity(), loadCathedral()]);
      const c = cathedralMesh(cath.geo, cath.haloGeo, { win: 0.85, halo: 0.5 });
      cath.geo.computeBoundingBox();
      // kamera istočno od tornja, gleda na zapad (−x); toranj ispred broda crkve
      const sp = c.spire;
      const dist = desk ? 250 : 230, ch = 2, off = desk ? 26 : 16;
      const pos = [sp.x + dist, ch, sp.z - off];
      const [mTop, mBot] = desk ? [0.135, 0.15] : [0.17, 0.19];
      const tTop = (sp.y - ch) / dist, tBot = -ch / dist;
      const R = (tTop - tBot) / (1 - mTop - mBot);
      const top = tTop + mTop * R, bottom = tBot - mBot * R;
      const span = (top - bottom) * (W / H);
      const at = desk ? 0.7 : 0.68; // toranj na 70 % širine kadra
      const cT = -off / dist; // toranj je lijevo od osi kamere (kamera je pomaknuta udesno)
      archCamera(camera, W, H, { pos, yaw: -Math.PI / 2, top, bottom, left: cT - at * span, right: cT + (1 - at) * span });
      st.skyMesh.position.copy(camera.position);
      scene.fog.density = 0.0016;
      st.sky.uAz.value = -0.9;
      st.sky.uGlowI.value = 0.32;
      st.addFloor({ size: 4000, cell: 6, gridI: 0.1, refl: 0.3, fall: 0.006, fog: 0.0016, center: [sp.x, -sp.z] });
      light(scene, 'hemi', '#24305f', 0.32, [0, 30, 0], null, { ground: '#07080c' });
      light(scene, 'dir', '#6d86ff', 0.25, [200, 120, 260], [30, 30, 0]);
      scene.add(c.group);
      // reflektori odozdo na toranj (topli), hladna noć prema vrhu
      for (const [x, z, ty, I] of [[sp.x + 26, sp.z + 14, 62, 7000], [sp.x + 24, sp.z - 16, 50, 5000], [sp.x + 34, sp.z, 30, 4000]]) light(scene, 'spot', '#ffb070', I, [x, 1.2, z], [sp.x, ty, sp.z], { angle: 0.36, pen: 0.85 });
      const beam = createBeam();
      scene.add(beam.group);
      beam.update({ b: 1, at: sp, unit: 1, camera, time: 3.2, pr: st.pr, alpha: 1 });
      // studio: niska kuća na istom trgu, na istoj dubini kao toranj, s jednim upaljenim prozorom
      const studio = new THREE.Group();
      const sx = sp.x + 6, sz = sp.z + (desk ? 92 : 37);
      studio.position.set(sx, 0, sz);
      studio.rotation.y = Math.PI / 2; // pročelje prema kameri (+x)
      const wall = mat({ color: '#2a2a30', rough: 0.85 });
      studio.add(box(12, 7.6, 9, wall, 0, 0, 0));
      studio.add(box(12.4, 0.4, 9.4, mat({ color: '#3a3a40', rough: 0.8 }), 0, 7.6, 0));
      // upaljen je jedan prozor gornjeg kata (na mobitelu lijevi — mjesta za oznaku do okomitog naslova)
      const litX = desk ? 0 : -4;
      for (const [x, y] of [[-4, 1.3], [0, 1.3], [4, 1.3], [-4, 4.6], [0, 4.6], [4, 4.6]]) if (!(x === litX && y === 4.6)) studio.add(box(1.4, 1.8, 0.08, mat({ color: '#0d0f16', rough: 0.15, metal: 0.4, env: 1.2 }), x, y, 4.52));
      const winH = 1.8, winY = 4.6 + winH / 2;
      const warm = new THREE.Mesh(new THREE.PlaneGeometry(1.4, winH), new THREE.MeshBasicMaterial({ color: new THREE.Color('#ffc477').multiplyScalar(1.9) }));
      warm.position.set(litX, winY, 4.56);
      studio.add(warm);
      scene.add(studio);
      studio.updateMatrixWorld(true);
      const wc = new THREE.Vector3(litX, winY, 4.56).applyMatrix4(studio.matrixWorld);
      light(scene, 'point', '#ffb15e', 50, [wc.x + 1.5, wc.y, wc.z], null, { dist: 20 });
      pool(scene, wc.x + 3, wc.z, 7, { i: 0.35 });
      // grad: koridor od kamere do tornja i studija ostaje otvoren (trg)
      const lights = cityMass(scene, city, { r: 700, cx: sp.x, cy: -sp.z, skip: 40, avoid: [sx, -sz, 26], corridor: [pos[0], -pos[2], sp.x, -sp.z, desk ? 120 : 90], dens: 1.3 }) || [];
      st.dots(lights.map((l) => ({ ...l, s: 1.4 })));
      for (const [x, z] of [[sp.x + 70, sp.z + 40], [sp.x + 110, sp.z + 10], [sp.x + 90, sp.z - 30], [sp.x + 140, sp.z + 60]]) {
        scene.add(box(0.2, 6, 0.2, mat({ color: '#15171c', metal: 0.6, rough: 0.4 }), x, 0, z));
        st.dots([{ p: [x, 6.1, z], c: '#ffd6a0', s: 1.3, k: 2.4 }]);
        pool(scene, x, z, 6, { i: 0.35 });
      }
      motes(st, { n: 100, box: [sp.x, 1, sp.z - 60, sp.x + 160, 80, sp.z + 120], seed: 5, size: [0.25, 0.8], a: [0.12, 0.4] });
      // metapodaci (pikseli kadra): toranj od tla do šiljka, lijevi rub tornja, prozor studija
      const px = (p) => { const q = project(camera, p); return { x: +((q.x / 100) * W).toFixed(1), y: +((q.y / 100) * H).toFixed(1) }; };
      const bb = cath.geo.boundingBox;
      let tl = 1e9; // lijevi rub tornja na ekranu (najmanji x) između 25 i 60 m visine
      const P = cath.geo.attributes.position;
      for (let i = 0; i < P.count; i += 3) {
        const y = P.getY(i);
        if (y < 25 || y > 60) continue;
        const v = new THREE.Vector3(P.getX(i), y, P.getZ(i));
        if (v.x < sp.x - 12) continue; // samo toranj, ne brod crkve
        tl = Math.min(tl, px(v).x);
      }
      let body = 1e9; // lijevi rub cijele crkve (brod, transept) — kota mora biti lijevo od nje
      for (let i = 0; i < P.count; i += 3) {
        const y = P.getY(i);
        if (y < 1 || y > 45) continue;
        body = Math.min(body, px(new THREE.Vector3(P.getX(i), y, P.getZ(i))).x);
      }
      st.meta = {
        w: W, h: H,
        bodyLeft: +body.toFixed(1),
        spire: px(sp),
        base: px(new THREE.Vector3(sp.x, 0, sp.z)),
        towerLeft: +tl.toFixed(1),
        window: { ...px(wc), h: +(px(new THREE.Vector3(wc.x, wc.y - winH / 2, wc.z)).y - px(new THREE.Vector3(wc.x, wc.y + winH / 2, wc.z)).y).toFixed(1), right: px(new THREE.Vector3(wc.x, wc.y, wc.z - 0.7)).x },
        ground: px(new THREE.Vector3(sx, 0, sz)).y,
        bb: [bb.min.y, bb.max.y],
      };
    },
  };
}

export const onamaScenes = {
  'onama-bg-d': make('d'),
  'onama-bg-m': make('m'),
};
