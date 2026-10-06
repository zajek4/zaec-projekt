// Hero "Kontakt" — Vaše svjetlo je sljedeće.
// Osijek noću s visine krovova, konkatedrala sa signalom na horizontu. U prvom planu jedna uska zgrada je
// potpuno tamna: "vaš obrt". Dva piksel-točna prolaza iz iste arhitektonske kamere:
//  - bg: zgrada tamna (cijeli kadar);
//  - lit: ista zgrada s upaljenim etažama i krunom — sprema se cijeli, a layers.mjs ga reže na okvir zgrade.
// Forma u heroju pali etažu po etažu (maska po etažama u CSS-u), slanje pali krunu.
import * as THREE from 'three';
import { mat, box, light, pool, motes, canvasTex, rng, V } from '../kit.js';
import { addWindow } from './common.js';
import { loadCity, loadCathedral, cathedralMesh, cityBlueprint } from './osijek.js';
import { cityMass } from './hero-onama.js';
import { createBeam } from '../../../src/js/world3/beam.js';

// etaže zgrade: [donji rub, visina] — prizemlje je izlog, kruna je okvir na krovu
const W = 8.2, D = 11;
const LEVELS = [[0, 4.4], [4.4, 3.3], [7.7, 3.3], [11.0, 3.3], [14.3, 3.3]];
const TOP = 17.6, CROWN = 20.4;

function project(camera, p) {
  const v = p.clone().project(camera);
  return { x: +(((v.x + 1) / 2) * 100).toFixed(2), y: +(((1 - v.y) / 2) * 100).toFixed(2) };
}

/**
 * Arhitektonska kamera: bez nagiba, vidljivi prozor zadan rasponom tangensa (gore > 0 > dolje).
 * Okomice ostaju okomite, pročelje paralelno sa senzorom → crte etaža su na ekranu vodoravne.
 */
function archCamera(camera, w, h, { pos, yaw = 0, top, bottom }) {
  const T = Math.max(Math.abs(top), Math.abs(bottom));
  const Hv = (h * 2 * T) / (top - bottom);
  camera.fov = (2 * Math.atan(T) * 180) / Math.PI;
  camera.aspect = w / Hv;
  camera.position.set(...pos);
  camera.lookAt(pos[0] + Math.sin(yaw), pos[1], pos[2] - Math.cos(yaw));
  camera.setViewOffset(w, Hv, 0, ((T - top) / (2 * T)) * Hv, w, h);
  camera.far = 5000;
  camera.updateProjectionMatrix();
  camera.updateMatrixWorld();
}

function shopTex(lit) {
  return canvasTex(512, 256, (x, w, h) => {
    const g = x.createLinearGradient(0, 0, 0, h);
    if (lit) { g.addColorStop(0, '#ffe7c4'); g.addColorStop(0.55, '#ffbb6e'); g.addColorStop(1, '#a8561a'); }
    else { g.addColorStop(0, '#0d1018'); g.addColorStop(1, '#07080c'); }
    x.fillStyle = g; x.fillRect(0, 0, w, h);
    // radni stol, police, lampa — siluete
    x.fillStyle = lit ? 'rgba(70,30,8,0.5)' : 'rgba(0,0,0,0.4)';
    x.fillRect(w * 0.08, h * 0.2, w * 0.16, h * 0.55);
    x.fillRect(w * 0.3, h * 0.2, w * 0.16, h * 0.55);
    x.fillRect(w * 0.56, h * 0.6, w * 0.36, h * 0.4);
    if (lit) { x.fillStyle = 'rgba(255,250,236,0.7)'; x.fillRect(w * 0.7, h * 0.08, w * 0.08, 8); }
  });
}

function roomTex(seed) {
  // interijer etaže: topli gradijent, ponegdje hladni ekran, siluete namještaja
  const R = rng(seed);
  return canvasTex(128, 192, (x, w, h) => {
    const g = x.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, '#ffe0b0'); g.addColorStop(0.6, '#ffb565'); g.addColorStop(1, '#b8621f');
    x.fillStyle = g; x.fillRect(0, 0, w, h);
    if (R() < 0.4) { x.fillStyle = 'rgba(200,214,255,0.55)'; x.fillRect(w * (0.2 + R() * 0.4), h * 0.5, w * 0.28, h * 0.16); }
    x.fillStyle = 'rgba(80,32,6,0.45)'; x.fillRect(0, h * 0.74, w, h * 0.26);
    x.fillStyle = 'rgba(255,244,226,0.35)'; x.fillRect(w * 0.06, 0, w * 0.1, h);
  });
}

/** Zgrada "vaš obrt": uska secesijska kamena kuća, pročelje prema kameri (z = +D/2). */
function buildHouse(lit) {
  const g = new THREE.Group();
  const ZF = D / 2;
  const plaster = mat({ color: '#272a33', rough: 0.88, metal: 0.02, env: 0.5 });
  const stone = mat({ color: '#3a3b40', rough: 0.8, env: 0.6 });
  const frame = mat({ color: '#15161b', rough: 0.45, metal: 0.5 });
  const darkGlass = mat({ color: '#090b12', rough: 0.08, metal: 0.6, env: 1.4 });
  // tijelo
  g.add(box(W, TOP, D, plaster, 0, 0, 0));
  // vijenci između etaža i krovni vijenac
  for (let i = 1; i < LEVELS.length; i++) g.add(box(W + 0.3, 0.22, D + 0.2, stone, 0, LEVELS[i][0] - 0.11, 0.05));
  g.add(box(W + 0.7, 0.5, D + 0.5, stone, 0, TOP - 0.5, 0.1));
  g.add(box(W + 0.2, 0.7, D, plaster, 0, TOP, 0)); // atika
  // prizemlje: izlog i vrata, kameni okvir
  const [, gh] = LEVELS[0];
  const shop = new THREE.Mesh(new THREE.PlaneGeometry(W - 3.4, gh - 1.3), lit
    ? mat({ color: '#000', emissive: '#ffffff', ei: 1.0, emissiveMap: shopTex(true), rough: 0.1 })
    : mat({ color: '#07080c', emissive: '#ffffff', ei: 0.2, emissiveMap: shopTex(false), rough: 0.06, metal: 0.5, env: 1.4 }));
  shop.position.set(-1.0, 0.75 + (gh - 1.3) / 2, ZF + 0.02);
  g.add(shop);
  g.add(box(W - 3.2, 0.14, 0.2, frame, -1.0, 0.68, ZF + 0.05));
  g.add(box(W - 3.2, 0.14, 0.2, frame, -1.0, gh - 0.56, ZF + 0.05));
  for (const x of [-1.0 - (W - 3.4) / 2, -1.0, -1.0 + (W - 3.4) / 2]) g.add(box(0.12, gh - 1.3, 0.16, frame, x, 0.75, ZF + 0.06));
  const door = new THREE.Mesh(new THREE.PlaneGeometry(1.3, 2.7), lit ? mat({ color: '#000', emissive: '#ffbf7a', ei: 0.4, rough: 0.2 }) : darkGlass);
  door.position.set(W / 2 - 1.15, 1.35, ZF + 0.02);
  g.add(door);
  g.add(box(1.5, 0.12, 0.18, frame, W / 2 - 1.15, 2.7, ZF + 0.06));
  // tabla iznad izloga (prazna — natpis je HTML)
  g.add(box(W - 1.2, 0.6, 0.14, mat({ color: '#101218', rough: 0.4, metal: 0.4, emissive: lit ? '#ffb23f' : '#000000', ei: lit ? 0.18 : 0 }), 0, gh - 0.42, ZF + 0.08));
  // etaže 1–4: tri visoka prozora s kamenim okvirom
  for (let i = 1; i < LEVELS.length; i++) {
    const [y0, h] = LEVELS[i];
    const wh = h - 1.15, ww = 1.22;
    for (let k = 0; k < 3; k++) {
      const x = (k - 1) * 2.45;
      const yc = y0 + 0.55 + wh / 2;
      const glass = new THREE.Mesh(new THREE.PlaneGeometry(ww, wh), lit
        ? mat({ color: '#000', emissive: '#ffffff', ei: 0.85 + ((i * 3 + k) % 3) * 0.12, emissiveMap: roomTex(i * 7 + k), rough: 0.15 })
        : darkGlass);
      glass.position.set(x, yc, ZF + 0.01);
      g.add(glass);
      // okvir i prečka
      g.add(box(ww + 0.36, 0.2, 0.22, stone, x, y0 + 0.4, ZF + 0.08)); // klupčica
      g.add(box(ww + 0.24, 0.16, 0.16, stone, x, yc + wh / 2, ZF + 0.06)); // nadvoj
      g.add(box(0.12, wh, 0.12, stone, x - ww / 2 - 0.06, yc - wh / 2, ZF + 0.06));
      g.add(box(0.12, wh, 0.12, stone, x + ww / 2 + 0.06, yc - wh / 2, ZF + 0.06));
      g.add(box(0.06, wh, 0.07, frame, x, yc - wh / 2, ZF + 0.04));
      g.add(box(ww, 0.06, 0.07, frame, x, yc + wh * 0.18, ZF + 0.04));
    }
  }
  // kruna: tanki okvir na krovu (svijetli tek nakon slanja)
  const fr = mat({ color: '#0d1020', emissive: lit ? '#cdd8ff' : '#000000', ei: lit ? 1.5 : 0, rough: 0.3 });
  const fw = 6.4, fh = 2.2, fy = TOP + 0.75, t = 0.14, fz = ZF - 2.4;
  g.add(box(fw, t, t, fr, 0, fy, fz));
  g.add(box(fw, t, t, fr, 0, fy + fh - t, fz));
  g.add(box(t, fh, t, fr, -fw / 2, fy, fz));
  g.add(box(t, fh, t, fr, fw / 2, fy, fz));
  if (lit) {
    const inner = new THREE.Mesh(new THREE.PlaneGeometry(fw - 0.3, fh - 0.3), new THREE.MeshBasicMaterial({ color: new THREE.Color('#2347ff').multiplyScalar(0.6), transparent: true, opacity: 0.55 }));
    inner.position.set(0, fy + fh / 2, fz);
    g.add(inner);
  }
  for (const x of [-2.2, 2.2]) g.add(box(0.12, 0.8, 0.12, frame, x, TOP + 0.1, fz));
  g.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  return g;
}

/** Susjedne niže kuće u nizu: u njima se već radi (topli prozori) — samo je "vaša" kuća tamna. */
function row(scene, x0, z0, side, st, bp) {
  const R = rng(side > 0 ? 21 : 22);
  const walls = ['#1d1f26', '#22232a', '#1a1c22'];
  const roof = mat({ color: '#121319', rough: 0.85 });
  const stone = mat({ color: '#2c2d33', rough: 0.85 });
  let x = x0;
  for (let i = 0; i < 6; i++) {
    const floors = 2 + Math.floor(R() * 2);
    const w = 7.5 + R() * 5, h = 4 + (floors - 1) * 3.2 + 0.6, d = 10 + R() * 4;
    const cx = x + (side * w) / 2;
    const zc = z0 - d / 2 + D / 2;
    const m1 = box(w, h, d, mat({ color: walls[i % 3], rough: 0.9, env: 0.4 }), cx, 0, zc);
    const m2 = box(w + 0.3, 0.4, d + 0.3, roof, cx, h, zc);
    scene.add(m1, m2);
    bp.edges(m2, 28);
    // vijenac i prozori po etažama; prizemlje: izlog ili vrata
    const g = new THREE.Group();
    g.position.set(cx, 0, z0 + D / 2);
    scene.add(g);
    g.add(box(w + 0.2, 0.18, 0.3, stone, 0, 4 - 0.1, 0.1));
    const n = Math.max(2, Math.floor(w / 2.6));
    const span = w - 1.6;
    for (let f = 0; f < floors; f++) {
      const y = f === 0 ? 1.9 : 4 + (f - 1) * 3.2 + 1.55;
      for (let k = 0; k < n; k++) {
        const on = R() < (f === 0 ? 0.45 : 0.38);
        const lit = on ? 0.22 + R() * 0.3 : 0;
        addWindow(g, null, { w: f === 0 ? span / n - 0.5 : 1.15, h: f === 0 ? 2.4 : 1.6, x: -span / 2 + (span / n) * (k + 0.5), y, z: 0.01, lit, frame: '#16171c', depth: 0.1, mullion: f > 0 });
      }
    }
    x += side * (w + 0.05);
  }
}

function make(mode, comp) {
  const desk = comp === 'd';
  const lit = mode === 'lit';
  return {
    file: lit ? `hero/tmp/kontakt-lit-${comp}.png` : `hero/kontakt-bg-${comp}.webp`,
    metaFile: lit ? null : `hero/kontakt-${comp}.json`,
    w: desk ? 2400 : 1080,
    h: desk ? 1350 : 1920,
    pr: desk ? 1.25 : 1.5,
    q: 74,
    also: lit ? '' : desk ? '1600' : '720',
    async build(st) {
      const { scene, camera } = st;
      // kuća je ravno ispred kamere (x = hx), konkatedrala lijevo (desktop) / desno (mobitel) na horizontu
      const cam = desk
        ? { pos: [172, 18, 820], yaw: 0, top: 0.34, bottom: -0.6 }
        : { pos: [-146, 18, 790], yaw: 0, top: 0.5, bottom: -0.64 };
      archCamera(camera, desk ? 2400 : 1080, desk ? 1350 : 1920, cam);
      const hx = desk ? cam.pos[0] + 1.2 : cam.pos[0] - 3.1;
      const hz = cam.pos[2] - (desk ? 36 : 40);
      st.skyMesh.position.copy(camera.position);
      scene.fog.density = 0.0011;
      st.sky.uAz.value = -2.5;
      st.sky.uGlowI.value = 0.55;
      st.addFloor({ size: 6000, cell: 6, gridI: 0.08, refl: 0.0, fall: 0.004, fog: 0.0009, center: [hx, -hz] });
      light(scene, 'hemi', '#24305f', 0.3, [0, 30, 0], null, { ground: '#07080c' });
      light(scene, 'dir', '#6d86ff', 0.22, [hx + 120, 160, hz + 200], [hx, 10, hz]);
      const [city, cath] = await Promise.all([loadCity(), loadCathedral()]);
      const c = cathedralMesh(cath.geo, cath.haloGeo, { win: 1.2, halo: 0.75 });
      scene.add(c.group);
      for (const [x, z, tx, ty, tz, I] of [[-10, 50, 30, 50, 0, 16000], [50, 46, 34, 70, 0, 16000], [40, 30, 0, 22, 0, 6000]]) light(scene, 'spot', '#ffb070', I, [x, 1.5, z], [tx, ty, tz], { angle: 0.42, pen: 0.85 });
      const beam = createBeam();
      scene.add(beam.group);
      beam.update({ b: 1, at: c.spire, unit: 1, camera, time: 3.2, pr: st.pr, alpha: 1 });
      // grad: stvarni tlocrti, bez zgrada uz kameru i kuću
      const lights = cityMass(scene, city, { r: 1300, cx: 10, cy: 0, skip: 40, avoid: [hx, -hz, 70], dens: 1.9 }) || [];
      st.dots(lights.map((l) => ({ ...l, s: 2.2 })));
      // isti jezik kao naslovnica: rubovi krovova u plavom nacrtu, topla rasvjeta uz ceste
      const { bp } = cityBlueprint(st, city, { r0: 40, r1: 1300, c: [10, 0], avoid: [hx, -hz, 70], ground: 0, vert: 0.25 });
      const R = rng(5);
      const lamps = [];
      for (const rd of city.roads) {
        const r = rd.r, n = r.length / 2;
        for (let i = 0; i < n - 1; i++) {
          const ax = r[i * 2], ay = r[i * 2 + 1], bx = r[i * 2 + 2], by = r[i * 2 + 3];
          const L = Math.hypot(bx - ax, by - ay);
          for (let t = 0; t < L; t += 24) {
            const x = ax + ((bx - ax) * t) / L, y = ay + ((by - ay) * t) / L;
            if (Math.hypot(x - hx, y + hz) < 60 || R() < 0.3) continue;
            lamps.push({ p: [x, 6, -y], c: R() < 0.85 ? '#ffc27a' : '#9fb3ff', s: 2.4, k: 1.8, a: 0.75 });
          }
        }
      }
      st.dots(lamps);
      // ulica ispred kuće i niz susjednih kuća
      row(scene, hx - W / 2 - 0.05, hz, -1, st, bp);
      row(scene, hx + W / 2 + 0.05, hz, 1, st, bp);
      bp.build(scene, st);
      const house = buildHouse(lit);
      house.position.set(hx, 0, hz);
      scene.add(house);
      house.updateMatrixWorld(true);
      // ulična rasvjeta uz pločnik
      for (let k = -4; k <= 4; k++) {
        const x = hx + k * 16 + 6, z = hz + D / 2 + 4.5;
        scene.add(box(0.16, 6, 0.16, mat({ color: '#15171c', metal: 0.6, rough: 0.4 }), x, 0, z));
        st.dots([{ p: [x, 6.1, z], c: '#ffd6a0', s: 1.4, k: 2.2 }]);
        pool(scene, x, z, 6, { i: 0.35 });
      }
      // tamna kuća mora ostati čitljiva: hladni mjesec s lijeva klizi po vijencima, topla ulična svjetiljka odozdo
      light(scene, 'spot', '#8ea4ff', 900, [hx - 22, 30, hz + D / 2 + 26], [hx, 9, hz + D / 2], { angle: 0.36, pen: 0.9 });
      light(scene, 'spot', '#ffb877', 260, [hx + 6, 0.6, hz + D / 2 + 4.5], [hx + 2, 12, hz + D / 2], { angle: 0.5, pen: 0.95 });
      if (lit) {
        // svjetlo iz izloga na pločnik
        light(scene, 'point', '#ffb15e', 60, [hx - 1, 2.2, hz + D / 2 + 1.6], null, { dist: 16 });
        pool(scene, hx - 1, hz + D / 2 + 2.5, 7, { i: 0.45 });
      }
      motes(st, { n: 90, box: [hx - 30, 2, hz - 20, hx + 30, 40, hz + 30], seed: 9, size: [0.08, 0.3], a: [0.12, 0.4] });
      const ZF = hz + D / 2;
      const P = (x, y, z = ZF) => project(camera, V(hx + x, y, z));
      st.meta = {
        w: desk ? 2400 : 1080, h: desk ? 1350 : 1920,
        left: P(-W / 2 - 0.35, 0).x, right: P(W / 2 + 0.35, 0).x,
        levels: LEVELS.map(([y0, h]) => ({ bottom: P(0, y0).y, top: P(0, y0 + h).y })),
        top: P(0, TOP + 0.7).y,
        crown: { top: P(0, CROWN, ZF - 2.4).y, bottom: P(0, TOP + 0.6, ZF - 2.4).y, x: P(0, CROWN, ZF - 2.4).x },
        base: P(0, 0).y,
        spire: project(camera, c.spire),
        horizon: project(camera, V(cam.pos[0], cam.pos[1], cam.pos[2] - 4000)).y,
      };
      // izrez sloja "lit": okvir zgrade s rubom za sjaj (u postocima kadra)
      const pad = desk ? 1.2 : 2.4;
      st.meta.crop = {
        x: +(st.meta.left - pad).toFixed(2),
        y: +(st.meta.crown.top - pad * (desk ? 1.6 : 0.8)).toFixed(2),
        w: +(st.meta.right - st.meta.left + pad * 2).toFixed(2),
        h: +(Math.min(100, st.meta.base + pad) - (st.meta.crown.top - pad * (desk ? 1.6 : 0.8))).toFixed(2),
      };
    },
  };
}

export const kontaktScenes = {
  'kontakt-bg-d': make('bg', 'd'),
  'kontakt-lit-d': make('lit', 'd'),
  'kontakt-bg-m': make('bg', 'm'),
  'kontakt-lit-m': make('lit', 'm'),
};
