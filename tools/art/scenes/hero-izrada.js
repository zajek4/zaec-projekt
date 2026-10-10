// Hero "Izrada web stranica" — naslov je zgrada.
// Svaka riječ naslova je jedna etaža: riječ ispunjava širinu pročelja, a visina etaže je visina te riječi
// (izmjereno iz stvarnog fonta stranice). Zato su etaže različitih visina — WEB je dvorana, STRANICA uski kat.
// Prizemlje je ulaz (u njemu stoji gumb), kruna je zadnja riječ. Dva piksel-točna prolaza iz iste arhitektonske
// kamere: "plan" (nacrt) i "real" (sagrađeno, staklo etaža toplo osvijetljeno). Slova su HTML/SVG tekst
// iz metapodataka (font, osnovna linija, širina) — na staklu izgledaju kao natpis, ne kao dio slike.
import * as THREE from 'three';
import { mat, box, createBlueprint, light, pool, horizon, motes, canvasTex, rng, V } from '../kit.js';

/* global __ROOT__ */
const FS = (p) => `/@fs${__ROOT__}/${p}`;

// riječi odozgo prema dolje; 'serif' = istaknuta riječ (em) u Instrument Serif kurzivu
export const WORDS = [['IZRADA'], ['WEB'], ['STRANICA'], ['KOJE'], ['donose', 'serif'], ['UPITE.']];
const TW = 12, D = 10, ZF = D / 2, COL = 0.6, GROUND = 4.8, SLAB = 0.46, PAD = 0.2, PARAPET = 0.9;

async function loadFonts() {
  const sans = new FontFace('ZA Sans', `url(${FS('node_modules/@fontsource-variable/archivo/files/archivo-latin-standard-normal.woff2')})`, { weight: '100 900', stretch: '62% 125%' });
  const serif = new FontFace('ZA Serif', `url(${FS('node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-italic.woff2')})`, { style: 'italic', weight: '400' });
  await Promise.all([sans.load(), serif.load()]);
  document.fonts.add(sans);
  document.fonts.add(serif);
}

/** Širina (advance) i tinta riječi po 1 jedinici veličine fonta — isti font i rez kao na stranici. */
function measure(word, kind) {
  const c = document.createElement('canvas').getContext('2d');
  if (kind === 'serif') c.font = 'italic 400 100px "ZA Serif"';
  else { c.font = '800 100px "ZA Sans"'; c.fontStretch = 'expanded'; }
  const m = c.measureText(word);
  return { adv: m.width / 100, asc: m.actualBoundingBoxAscent / 100, desc: Math.max(0, m.actualBoundingBoxDescent) / 100, left: m.actualBoundingBoxLeft / 100 };
}

/** Etaže iz riječi: odozdo prema gore (UPITE. je odmah iznad ulaza). */
function layout() {
  const IW = TW - 2 * COL;
  let y = GROUND;
  const floors = [];
  for (let i = WORDS.length - 1; i >= 0; i--) {
    const [word, kind] = WORDS[i];
    const m = measure(word, kind);
    const fs = IW / m.adv;
    const ink = fs * (m.asc + m.desc);
    const band = ink * (1 + 2 * PAD);
    const y0 = y + SLAB;
    floors.unshift({ word, kind: kind || 'sans', i, fs, ink, slab: y, y0, y1: y0 + band, base: y0 + PAD * ink + m.desc * fs });
    y = y0 + band;
  }
  return { floors, top: y, IW };
}

function roomTex(seed, amber) {
  const R = rng(seed);
  return canvasTex(512, 128, (x, w, h) => {
    const g = x.createLinearGradient(0, 0, 0, h);
    if (amber) { g.addColorStop(0, '#ffd08a'); g.addColorStop(0.6, '#ff9c3a'); g.addColorStop(1, '#a24c12'); }
    else { g.addColorStop(0, '#ffe6c2'); g.addColorStop(0.6, '#ffbd76'); g.addColorStop(1, '#b8692a'); }
    x.fillStyle = g; x.fillRect(0, 0, w, h);
    // stropna svjetla, stolovi i stolci: nejednak ritam, kao u stvarnom uredu
    x.fillStyle = 'rgba(255,250,238,0.75)';
    for (let k = 0; k < 6; k++) x.fillRect(30 + k * 82 + R() * 10, 6, 34, 4);
    x.fillStyle = 'rgba(70,30,6,0.42)';
    for (let k = 0; k < 7; k++) { const px = 10 + k * 72 + R() * 20; x.fillRect(px, h * 0.62, 40 + R() * 20, h * 0.38); }
    if (R() < 0.6) { x.fillStyle = 'rgba(190,206,255,0.5)'; x.fillRect(w * (0.2 + R() * 0.5), h * 0.48, 26, 14); }
  });
}

function lobbyTex() {
  return canvasTex(512, 256, (x, w, h) => {
    const g = x.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, '#fff0d8'); g.addColorStop(0.55, '#ffc27e'); g.addColorStop(1, '#a95a1c');
    x.fillStyle = g; x.fillRect(0, 0, w, h);
    x.fillStyle = 'rgba(255,252,244,0.85)'; for (let k = 0; k < 5; k++) x.fillRect(40 + k * 100, 8, 50, 6);
    x.fillStyle = 'rgba(60,24,4,0.35)'; x.fillRect(w * 0.04, h * 0.55, w * 0.18, h * 0.45); x.fillRect(w * 0.78, h * 0.5, w * 0.18, h * 0.5);
  });
}

function buildTower(real, L) {
  const g = new THREE.Group();
  const frame = mat({ color: '#23262e', rough: 0.55, metal: 0.35, env: 0.9 });
  const slab = mat({ color: '#8e8a82', rough: 0.8 });
  const mull = mat({ color: '#2b2620', rough: 0.45, metal: 0.6 });
  // stupovi uz rub pročelja i stražnji zid
  g.add(box(COL, L.top, D, frame, -TW / 2 + COL / 2, 0, 0));
  g.add(box(COL, L.top, D, frame, TW / 2 - COL / 2, 0, 0));
  g.add(box(TW, L.top, 0.4, frame, 0, 0, -D / 2 + 0.2));
  // prizemlje: ulaz preko gotovo cijele širine (u staklu stoji gumb)
  const lw = TW - 2 * COL - 0.6, lh = GROUND - 1.2;
  const lobby = new THREE.Mesh(new THREE.PlaneGeometry(lw, lh), mat({ color: '#000', emissive: '#ffffff', ei: real ? 0.9 : 0, emissiveMap: lobbyTex(), rough: 0.12, metal: 0.2 }));
  lobby.position.set(0, 0.25 + lh / 2, ZF - 0.3);
  g.add(lobby);
  for (const x of [-lw / 2, -lw / 6, lw / 6, lw / 2]) g.add(box(0.1, lh, 0.12, mull, x, 0.25, ZF - 0.25));
  g.add(box(TW + 0.6, 0.26, 2.2, mat({ color: '#2347ff', rough: 0.5 }), 0, GROUND - 0.7, ZF + 0.8)); // nadstrešnica
  // etaže: ploča + jedna traka stakla preko cijele unutarnje širine (natpis je riječ naslova)
  for (const f of L.floors) {
    g.add(box(TW + 0.3, SLAB, D + 0.3, slab, 0, f.slab, 0.15));
    const bh = f.y1 - f.y0;
    const glass = new THREE.Mesh(new THREE.PlaneGeometry(L.IW, bh), mat({ color: '#05070d', emissive: '#ffffff', ei: real ? 0.78 : 0, emissiveMap: roomTex(f.i * 13 + 5, f.kind === 'serif'), rough: 0.1, metal: 0.4, env: real ? 0.5 : 1.3 }));
    glass.position.set(0, f.y0 + bh / 2, ZF - 0.05);
    g.add(glass);
    // tanki okviri: 4 polja (ne smiju se natjecati sa slovima)
    for (let k = 1; k < 4; k++) g.add(box(0.06, bh, 0.08, mull, -L.IW / 2 + (L.IW / 4) * k, f.y0, ZF));
  }
  // krov: ploča i atika
  g.add(box(TW + 0.3, SLAB, D + 0.3, slab, 0, L.top, 0.15));
  g.add(box(TW, PARAPET, 0.3, frame, 0, L.top + SLAB, ZF - 0.15));
  g.traverse((o) => { if (o.isMesh) { o.castShadow = real; o.receiveShadow = real; } });
  return g;
}

function cityBlocks() {
  // okolni grad u nacrtu; nebo iznad i lijevo ostaje prazno
  const R = rng(9);
  const list = [];
  for (let k = 0; k < 7; k++) list.push([-18 - k * 11 - R() * 3, -18 - R() * 14, 8 + R() * 3, 9, 4 + R() * 5]);
  list.push([17.5, -1, 8, 10, 12]);
  list.push([28, -8, 10, 10, 19]);
  list.push([41, -12, 12, 10, 11]);
  list.push([12, -30, 14, 12, 30]);
  list.push([-6, -46, 16, 12, 16]);
  list.push([34, -40, 16, 14, 25]);
  for (let k = 0; k < 6; k++) list.push([60 + k * 13 + R() * 4, -20 - R() * 20, 9, 9, 6 + R() * 8]);
  return list.map(([x, z, w, d, h]) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d).translate(0, h / 2, 0));
    m.position.set(x, 0, z);
    return m;
  });
}

/**
 * Arhitektonska kamera: bez nagiba i zakreta, kadar zadan rasponom tangensa (lijevo/desno, gore/dolje).
 * Pročelje ostaje paralelno senzoru (pravokutno, za tekst), a bočni pomak kamere otkriva bočni zid — dubina.
 */
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
  camera.far = 3000;
  camera.updateProjectionMatrix();
  camera.updateMatrixWorld();
}

function project(camera, p) {
  const v = p.clone().project(camera);
  return { x: +(((v.x + 1) / 2) * 100).toFixed(3), y: +(((1 - v.y) / 2) * 100).toFixed(3) };
}

function make(mode, comp) {
  const real = mode === 'real';
  const desk = comp === 'd';
  const W = desk ? 2400 : 1080, H = desk ? 1350 : 1920;
  return {
    file: `hero/izrada-${mode}-${comp}.webp`,
    metaFile: real ? `hero/izrada-${comp}.json` : null,
    w: W,
    h: H,
    pr: desk ? 1.25 : 1.5,
    q: real ? 76 : 72,
    also: desk ? '1600' : '720',
    async build(st) {
      const { scene, camera } = st;
      await loadFonts();
      const L = layout();
      const crown = L.top + SLAB + PARAPET;
      // kadar: zgrada od ulaza do atike zauzima zadani dio visine; mobitel ostavlja mjesta zaglavlju i donjoj traci
      const dist = desk ? 66 : 64, ch = 1.7, camX = desk ? -17 : -11;
      const [mTop, mBot] = desk ? [0.1, 0.1] : [0.115, 0.14];
      const tTop = (crown - ch) / dist, tBot = -ch / dist;
      const R = (tTop - tBot) / (1 - mTop - mBot);
      const top = tTop + mTop * R, bottom = tBot - mBot * R;
      const half = ((top - bottom) * (W / H)) / 2, c = -camX / dist; // zgrada u sredini kadra
      archCamera(camera, W, H, { pos: [camX, ch, ZF + dist], top, bottom, left: c - half, right: c + half });
      st.skyMesh.position.copy(camera.position);
      st.sky.uAz.value = Math.PI * 0.85;
      st.sky.uGlowI.value = 0.2;
      scene.fog.density = 0.005;
      st.addFloor({ cell: 2, gridI: 0.5, refl: real ? 0.5 : 0.32, fall: 0.02, fog: 0.004, center: [0, -ZF] });
      light(scene, 'hemi', '#24305f', 0.3, [0, 30, 0], null, { ground: '#07080c' });
      // nacrt po crtačkom standardu (design/03, 4.2): svijetle crte bez sjaja, bloom samo na sagrađenom kadru
      if (!real) st.bloom.strength = 0;
      const bp = real
        ? createBlueprint(null, { width: desk ? 1.25 : 1.4, opacity: 0.9, ghost: 0 })
        : createBlueprint(null, { color: new THREE.Color('#e3e9ff'), width: desk ? 1.2 : 1.35, opacity: 0.5, ghost: 0 });
      const fill = new THREE.MeshBasicMaterial({ color: '#2347ff', transparent: true, opacity: 0.022, depthWrite: true });
      const asPlan = (m) => { m.updateWorldMatrix(true, false); bp.edges(m, 28); m.material = fill; m.renderOrder = 1; m.castShadow = false; };
      for (const m of cityBlocks()) { scene.add(m); asPlan(m); }
      bp.line(V(-160, 0.02, ZF + 3), V(160, 0.02, ZF + 3));
      bp.line(V(-160, 0.02, ZF + 10), V(160, 0.02, ZF + 10));
      for (let x = -160; x < 160; x += 6) bp.line(V(x, 0.02, ZF + 6.5), V(x + 3, 0.02, ZF + 6.5));
      const tower = buildTower(real, L);
      scene.add(tower);
      tower.updateMatrixWorld(true);
      if (!real) {
        tower.traverse((o) => { if (o.isMesh) asPlan(o); });
        // kote: visina svake etaže desno od zgrade (crta nacrta)
        const xd = TW / 2 + 1.6;
        bp.line(V(xd, 0, ZF), V(xd, crown, ZF));
        for (const y of [0, GROUND, ...L.floors.map((f) => f.slab), L.top, crown]) bp.line(V(xd - 0.5, y, ZF), V(xd + 0.5, y, ZF));
      } else {
        light(scene, 'point', '#ffb15e', 30, [3, 1.2, ZF + 4.5], null, { dist: 14 });
        light(scene, 'dir', '#6d86ff', 0.35, [30, 20, 40], [0, 10, 0]);
        light(scene, 'dir', '#ffb36b', 0.6, [-40, 12, 10], [0, 8, 0], { shadow: 40 });
        pool(scene, 0, ZF + 3.6, 10, { i: 0.75 });
      }
      bp.build(scene, st);
      horizon(st, { a0: -1.2, a1: 1.2, seed: 7, center: [0, 0], r0: 160, r1: 400 });
      motes(st, { n: 90, box: [-30, 0.5, -10, 30, 34, 20], seed: 3, size: [0.04, 0.12], a: [0.1, 0.4] });
      // metapodaci za SVG natpis: piksele kadra (viewBox = w×h) i postotke
      const px = (p) => ({ x: (p.x / 100) * W, y: (p.y / 100) * H });
      const a = px(project(camera, V(-L.IW / 2, GROUND, ZF))), b = px(project(camera, V(L.IW / 2, GROUND, ZF)));
      const scale = (b.x - a.x) / L.IW; // piksela po metru na pročelju (ravnina paralelna senzoru)
      st.meta = {
        w: W, h: H,
        left: project(camera, V(-TW / 2, 5, ZF)).x, right: project(camera, V(TW / 2, 5, ZF)).x,
        textX: +a.x.toFixed(1), textW: +(b.x - a.x).toFixed(1),
        floors: L.floors.map((f) => ({
          word: f.word, kind: f.kind,
          top: project(camera, V(0, f.y1, ZF)).y, bottom: project(camera, V(0, f.y0, ZF)).y,
          base: +px(project(camera, V(0, f.base, ZF))).y.toFixed(1), fs: +(f.fs * scale).toFixed(1),
        })),
        ground: project(camera, V(0, 0, ZF)).y,
        lobby: { top: project(camera, V(0, 0.25 + GROUND - 1.2, ZF)).y, bottom: project(camera, V(0, 0.25, ZF)).y },
        top: project(camera, V(0, crown, ZF)).y,
        roof: project(camera, V(0, L.top, ZF)).y,
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
