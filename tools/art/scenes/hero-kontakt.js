// Hero "Kontakt" — zgrada je forma.
// Pročelje kuće snimljeno sprijeda (arhitektonska kamera, pročelje paralelno senzoru): svaka etaža ima jednu
// traku prozora, a u traci stoji polje forme (ime na vrhu … poruka na prvom katu). Vrata u prizemlju su gumb
// za slanje, izlog je mjesto za poruke forme. Na krovu je čelična konstrukcija natpisa: H1 su neonska slova
// (HTML/SVG tekst iz metapodataka) koja se pale nakon slanja. Susjedi u nizu već svijetle — vaša kuća je tamna.
// Dva prolaza: bg (tamno) i lit (sve etaže i izlog upaljeni) → layers.mjs --crop reže okvir zgrade.
import * as THREE from 'three';
import { mat, box, light, pool, motes, canvasTex, rng, V } from '../kit.js';
import { addWindow } from './common.js';
import { loadCathedral, cathedralMesh } from './osijek.js';
import { createBeam } from '../../../src/js/world3/beam.js';

/* global __ROOT__ */
const FS = (p) => `/@fs${__ROOT__}/${p}`;
const W = 12, D = 11, ZF = D / 2, GROUND = 4.4, CORNICE = 0.8;
// etaže odozgo prema dolje = polja forme redom; [polje, visina etaže, visina prozora, parapet ispod prozora]
export const FLOORS = [['ime', 3.3, 1.45, 0.95], ['kontakt', 3.3, 1.45, 0.95], ['djelatnost', 3.3, 1.45, 0.95], ['usluga', 3.3, 1.45, 0.95], ['poruka', 3.9, 2.25, 0.8]];
const WIN = 9.8; // širina trake prozora
const SIGN = { w: 16.4, pad: 0.5, gap: 0.45, legs: 0.7 }; // natpis širi od kuće (prepust)
export const SIGN_LINES = [['Recite nam čime', 'sans'], ['se ', 'sans', 'bavite.', 'serif']];

function project(camera, p) {
  const v = p.clone().project(camera);
  return { x: ((v.x + 1) / 2) * 100, y: ((1 - v.y) / 2) * 100 };
}

async function loadFonts() {
  const sans = new FontFace('ZA Sans', `url(${FS('node_modules/@fontsource-variable/archivo/files/archivo-latin-ext-standard-normal.woff2')})`, { weight: '100 900', stretch: '62% 125%', unicodeRange: 'U+0100-024F' });
  const sansL = new FontFace('ZA Sans', `url(${FS('node_modules/@fontsource-variable/archivo/files/archivo-latin-standard-normal.woff2')})`, { weight: '100 900', stretch: '62% 125%', unicodeRange: 'U+0000-00FF' });
  const serif = new FontFace('ZA Serif', `url(${FS('node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-italic.woff2')})`, { style: 'italic', weight: '400' });
  await Promise.all([sans.load(), sansL.load(), serif.load()]);
  [sans, sansL, serif].forEach((f) => document.fonts.add(f));
}
function measure(parts) {
  // širina retka (po 1 jedinici veličine) i visina verzala — isti font i rez kao natpis na stranici
  const c = document.createElement('canvas').getContext('2d');
  let adv = 0, asc = 0;
  for (let i = 0; i < parts.length; i += 2) {
    const [txt, kind] = [parts[i], parts[i + 1]];
    if (kind === 'serif') c.font = 'italic 400 100px "ZA Serif"';
    else { c.font = '800 100px "ZA Sans"'; c.fontStretch = 'semi-expanded'; }
    const m = c.measureText(txt);
    adv += m.width / 100;
    asc = Math.max(asc, m.actualBoundingBoxAscent / 100);
  }
  return { adv, asc };
}

/** Arhitektonska kamera: bez nagiba i zakreta, kadar zadan rasponom tangensa (lijevo/desno, gore/dolje). */
function archCamera(camera, w, h, { pos, top, bottom, left, right }) {
  const T = Math.max(Math.abs(top), Math.abs(bottom));
  const Th = Math.max(Math.abs(left), Math.abs(right));
  const Hv = (h * 2 * T) / (top - bottom);
  const Wv = (w * 2 * Th) / (right - left);
  camera.fov = (2 * Math.atan(T) * 180) / Math.PI;
  camera.aspect = Th / T;
  camera.position.set(...pos);
  camera.lookAt(pos[0], pos[1], pos[2] - 1);
  camera.setViewOffset(Wv, Hv, ((Th + left) / (2 * Th)) * Wv, ((T - top) / (2 * T)) * Hv, w, h);
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
/** Kuća: prizemlje (izlog + ulaz), pet etaža s po jednom trakom prozora, vijenac, konstrukcija natpisa. */
function buildHouse(lit, L) {
  const g = new THREE.Group();
  const plaster = mat({ color: '#262931', rough: 0.88, metal: 0.02, env: 0.5 });
  const stone = mat({ color: '#3b3c42', rough: 0.8, env: 0.6 });
  const frame = mat({ color: '#121318', rough: 0.45, metal: 0.55 });
  const dark = mat({ color: '#07090f', rough: 0.06, metal: 0.6, env: 1.5 });
  g.add(box(W, L.top, D, plaster, 0, 0, 0));
  // prizemlje: izlog lijevo, dvostruka staklena vrata desno
  const shopW = L.shop.w, doorW = L.door.w;
  const shop = new THREE.Mesh(new THREE.PlaneGeometry(shopW, 2.9), lit ? mat({ color: '#000', emissive: '#ffffff', ei: 1.0, emissiveMap: shopTex(true), rough: 0.1 }) : dark);
  shop.position.set(L.shop.cx, 0.7 + 1.45, ZF + 0.02);
  g.add(shop);
  const door = new THREE.Mesh(new THREE.PlaneGeometry(doorW, 3.1), lit ? mat({ color: '#000', emissive: '#ffcf96', ei: 0.75, rough: 0.2 }) : dark);
  door.position.set(L.door.cx, 0.15 + 1.55, ZF + 0.02);
  g.add(door);
  for (const [cx, w, y, h] of [[L.shop.cx, shopW, 0.7, 2.9], [L.door.cx, doorW, 0.15, 3.1]]) {
    g.add(box(w + 0.3, 0.16, 0.22, frame, cx, y - 0.16, ZF + 0.06));
    g.add(box(w + 0.3, 0.16, 0.22, frame, cx, y + h, ZF + 0.06));
    g.add(box(0.14, h, 0.2, frame, cx - w / 2 - 0.07, y, ZF + 0.06));
    g.add(box(0.14, h, 0.2, frame, cx + w / 2 + 0.07, y, ZF + 0.06));
  }
  g.add(box(0.1, 3.1, 0.12, frame, L.door.cx, 0.15, ZF + 0.05)); // sredina dvokrilnih vrata
  g.add(box(W + 0.3, 0.3, D + 0.2, stone, 0, GROUND - 0.3, 0.05));
  // etaže: vijenac + jedna traka prozora (u njoj stoji polje forme)
  for (const f of L.floors) {
    g.add(box(W + 0.3, 0.22, D + 0.2, stone, 0, f.y0 - 0.11, 0.05));
    const glass = new THREE.Mesh(new THREE.PlaneGeometry(WIN, f.wh), lit
      ? mat({ color: '#000', emissive: '#ffffff', ei: 0.85, emissiveMap: roomTex(f.i * 7 + 3), rough: 0.12 })
      : dark);
    glass.position.set(0, f.wy0 + f.wh / 2, ZF + 0.02);
    g.add(glass);
    g.add(box(WIN + 0.4, 0.18, 0.3, stone, 0, f.wy0 - 0.18, ZF + 0.1)); // klupčica
    g.add(box(WIN + 0.24, 0.12, 0.18, frame, 0, f.wy0 + f.wh, ZF + 0.06));
    g.add(box(0.12, f.wh, 0.18, frame, -WIN / 2 - 0.06, f.wy0, ZF + 0.06));
    g.add(box(0.12, f.wh, 0.18, frame, WIN / 2 + 0.06, f.wy0, ZF + 0.06));
  }
  // vijenac i atika
  g.add(box(W + 0.7, 0.5, D + 0.5, stone, 0, L.top - CORNICE, 0.1));
  g.add(box(W + 0.2, CORNICE - 0.5, D, plaster, 0, L.top - CORNICE + 0.5, 0));
  // konstrukcija natpisa na krovu: noge i dvije tanke rešetke (slova su HTML)
  const st = mat({ color: '#1a1c22', rough: 0.5, metal: 0.7 });
  const sx = SIGN.w;
  for (const x of [-sx / 2 + 1.2, -2, 2, sx / 2 - 1.2]) g.add(box(0.14, SIGN.legs + L.sign.h, 0.14, st, x, L.top, ZF - 1.4));
  for (const y of [L.top + SIGN.legs, L.top + SIGN.legs + L.sign.h]) g.add(box(sx, 0.08, 0.08, st, 0, y, ZF - 1.4));
  for (let k = 0; k <= 16; k++) g.add(box(0.04, L.sign.h, 0.04, st, -sx / 2 + (sx / 16) * k, L.top + SIGN.legs, ZF - 1.42));
  g.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  return g;
}

function layout() {
  // etaže odozdo: prvi kat (poruka) … peti (ime)
  const floors = [];
  let y = GROUND;
  for (let i = FLOORS.length - 1; i >= 0; i--) {
    const [field, fh, wh, sill] = FLOORS[i];
    floors.unshift({ field, i, y0: y, y1: y + fh, wy0: y + sill, wh });
    y += fh;
  }
  const top = y + CORNICE;
  // natpis: dva retka poravnata na unutarnju širinu konstrukcije
  const SW = SIGN.w - 2 * SIGN.pad;
  const lines = SIGN_LINES.map((parts) => { const m = measure(parts); const fs = SW / m.adv; return { parts, fs, cap: fs * m.asc }; });
  const h = SIGN.pad * 2 + lines.reduce((a, l) => a + l.cap, 0) + SIGN.gap;
  // osnovne linije odozgo: prvi redak — vrh minus pad minus visina verzala
  let yy = top + SIGN.legs + h - SIGN.pad;
  for (const l of lines) { l.base = yy - l.cap; yy = l.base - SIGN.gap; }
  return { floors, top, sign: { h, lines, SW }, shop: { cx: -W / 2 + 0.55 + 3.1 / 2, w: 3.1 }, door: { cx: W / 2 - 0.55 - 6.9 / 2, w: 6.9 } };
}

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
  const WW = desk ? 2400 : 1080, HH = desk ? 1350 : 1920;
  return {
    file: lit ? `hero/tmp/kontakt-lit-${comp}.png` : `hero/kontakt-bg-${comp}.webp`,
    metaFile: lit ? null : `hero/kontakt-${comp}.json`,
    w: WW,
    h: HH,
    pr: desk ? 1.25 : 1.5,
    q: 74,
    also: lit ? '' : desk ? '1600' : '720',
    async build(st) {
      const { scene, camera } = st;
      await loadFonts();
      const L = layout();
      const crown = L.top + SIGN.legs + L.sign.h;
      // kadar: od natpisa do pločnika; na mobitelu prizemlje iznad donje trake za poziv
      const dist = desk ? 58 : 52, ch = 1.6, camX = desk ? -9 : -5;
      const [mTop, mBot] = desk ? [0.115, 0.085] : [0.12, 0.155];
      const tTop = (crown - ch) / dist, tBot = -ch / dist;
      const R = (tTop - tBot) / (1 - mTop - mBot);
      const top = tTop + mTop * R, bottom = tBot - mBot * R;
      const half = ((top - bottom) * (WW / HH)) / 2, c0 = -camX / dist;
      archCamera(camera, WW, HH, { pos: [camX, ch, ZF + dist], top, bottom, left: c0 - half, right: c0 + half });
      st.skyMesh.position.copy(camera.position);
      scene.fog.density = 0.004;
      st.sky.uAz.value = -2.5;
      st.sky.uGlowI.value = 0.42;
      st.addFloor({ size: 3000, cell: 6, gridI: 0.08, refl: 0.18, fall: 0.006, fog: 0.004, center: [0, -ZF] });
      light(scene, 'hemi', '#24305f', 0.32, [0, 30, 0], null, { ground: '#07080c' });
      light(scene, 'dir', '#6d86ff', 0.22, [120, 160, 200], [0, 10, 0]);
      // konkatedrala daleko iza krovova: vidi se samo signal na nebu
      const cath = await loadCathedral();
      const c = cathedralMesh(cath.geo, cath.haloGeo, { win: 1.2, halo: 0.75 });
      c.group.position.set(desk ? 330 : 150, 0, -760);
      scene.add(c.group);
      c.group.updateMatrixWorld(true);
      // na mobitelu natpis zauzima cijelu širinu neba — signal bi presjekao slova, pa ga nema
      if (desk) {
        const beam = createBeam();
        scene.add(beam.group);
        beam.update({ b: 1, at: c.spire.clone().applyMatrix4(c.group.matrixWorld), unit: 1, camera, time: 3.2, pr: st.pr, alpha: 0.9 });
      }
      // susjedi u nizu (već svijetle) i kuća
      row(scene, -W / 2 - 0.05, 0, -1, st, { edges() {} });
      row(scene, W / 2 + 0.05, 0, 1, st, { edges() {} });
      const house = buildHouse(lit, L);
      scene.add(house);
      house.updateMatrixWorld(true);
      // ulica: svjetiljke uz pločnik
      for (let k = -3; k <= 3; k++) {
        const x = k * 15 + 8, z = ZF + 4.2;
        scene.add(box(0.16, 6, 0.16, mat({ color: '#15171c', metal: 0.6, rough: 0.4 }), x, 0, z));
        st.dots([{ p: [x, 6.1, z], c: '#ffd6a0', s: 1.4, k: 2.2 }]);
        pool(scene, x, z, 6, { i: 0.32 });
      }
      // tamna kuća čitljiva: hladno svjetlo s lijeva po vijencima, toplo s ulice odozdo
      light(scene, 'spot', '#8ea4ff', 1500, [-24, 26, ZF + 24], [0, 9, ZF], { angle: 0.4, pen: 0.9 });
      light(scene, 'spot', '#ffb877', 420, [7, 0.6, ZF + 4.2], [3, 12, ZF], { angle: 0.5, pen: 0.95 });
      if (lit) {
        light(scene, 'point', '#ffb15e', 50, [L.shop.cx, 2.0, ZF + 1.8], null, { dist: 14 });
        pool(scene, L.shop.cx, ZF + 2.6, 7, { i: 0.45 });
      }
      motes(st, { n: 70, box: [-24, 1, ZF - 4, 24, crown + 4, ZF + 12], seed: 9, size: [0.03, 0.1], a: [0.1, 0.35] });
      // metapodaci: postoci kadra (CSS) i pikseli kadra (SVG natpis)
      const P = (x, y) => project(camera, V(x, y, ZF));
      const pxx = (x, y) => { const p = P(x, y); return { x: +((p.x / 100) * WW).toFixed(1), y: +((p.y / 100) * HH).toFixed(1) }; };
      const r3 = (v) => +v.toFixed(3);
      const sp = pxx(-L.sign.SW / 2, 0), sq = pxx(L.sign.SW / 2, 0), scale = (sq.x - sp.x) / L.sign.SW;
      st.meta = {
        w: WW, h: HH,
        left: r3(P(-W / 2, 5).x), right: r3(P(W / 2, 5).x),
        win: { left: r3(P(-WIN / 2, 5).x), right: r3(P(WIN / 2, 5).x) },
        floors: L.floors.map((f) => ({ field: f.field, top: r3(P(0, f.y1).y), bottom: r3(P(0, f.y0).y), wtop: r3(P(0, f.wy0 + f.wh).y), wbottom: r3(P(0, f.wy0).y) })),
        ground: { top: r3(P(0, GROUND).y), bottom: r3(P(0, 0).y) },
        shop: { left: r3(P(L.shop.cx - L.shop.w / 2, 1).x), right: r3(P(L.shop.cx + L.shop.w / 2, 1).x), top: r3(P(0, 3.6).y), bottom: r3(P(0, 0.7).y) },
        door: { left: r3(P(L.door.cx - L.door.w / 2, 1).x), right: r3(P(L.door.cx + L.door.w / 2, 1).x), top: r3(P(0, 3.25).y), bottom: r3(P(0, 0.15).y) },
        roof: r3(P(0, L.top).y),
        sign: {
          top: r3(P(0, crown).y), bottom: r3(P(0, L.top + SIGN.legs).y), left: r3(P(-SIGN.w / 2, 0).x), right: r3(P(SIGN.w / 2, 0).x),
          x: sp.x, w: +(sq.x - sp.x).toFixed(1),
          lines: L.sign.lines.map((l) => ({ base: pxx(0, l.base).y, fs: +(l.fs * scale).toFixed(1) })),
        },
      };
      // izrez sloja "lit": kuća od vijenca do pločnika, s rubom za sjaj
      const pad = desk ? 1.0 : 2.0;
      const cx0 = st.meta.left - pad, cy0 = st.meta.roof - pad;
      st.meta.crop = { x: r3(cx0), y: r3(cy0), w: r3(st.meta.right - st.meta.left + 2 * pad), h: r3(Math.min(100, st.meta.ground.bottom + pad) - cy0) };
    },
  };
}

export const kontaktScenes = {
  'kontakt-bg-d': make('bg', 'd'),
  'kontakt-lit-d': make('lit', 'd'),
  'kontakt-bg-m': make('bg', 'm'),
  'kontakt-lit-m': make('lit', 'm'),
};
