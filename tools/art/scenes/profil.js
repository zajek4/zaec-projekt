// Kadrovi koji su dijelili sliku s drugom uslugom (design/04 #11):
// - gbp: Google Business profil kao kartica nad oznakom na karti (karta u nacrtu, kartica je papir);
// - provjera: besplatna provjera vidljivosti kao mjerenje: vaš obrt i tri konkurenta u nizu, svjetlosni list ih
//   prolazi, uz svaku zgradu kota. Bez brojeva i ocjena: kadar ne tvrdi rezultat.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { mat, box, createCut, createBlueprint, cutSheet, trail, motes, bokeh, light, horizon, canvasTex, pool, rng, V } from '../kit.js';
import { nightLights, addWindow } from './common.js';

const INK = '#141414', PAPER = '#efebe3', CARD = '#f7f4ee', SIGNAL = '#2347ff', AMBER = '#ffb23f', MUTED = '#9b958a';

/** Zvijezda (5 krakova) na platnu. */
function star(x, cx, cy, r, fill) {
  x.beginPath();
  for (let j = 0; j <= 10; j++) {
    const a = -Math.PI / 2 + (j * Math.PI) / 5;
    const rr = j % 2 ? r * 0.45 : r;
    x[j ? 'lineTo' : 'moveTo'](cx + rr * Math.cos(a), cy + rr * Math.sin(a));
  }
  x.closePath();
  x.fillStyle = fill;
  x.fill();
}

/** Kartica profila: fotografija pročelja, naziv, zvjezdice, tri gumba (poziv, ruta, web), radno vrijeme, recenzije. */
function profileTex() {
  return canvasTex(900, 1240, (x, w, h) => {
    x.fillStyle = PAPER; x.fillRect(0, 0, w, h);
    // fotografija: pročelje radnje noću (toplo staklo, plava nadstrešnica)
    const ph = h * 0.3;
    const g = x.createLinearGradient(0, 0, 0, ph);
    g.addColorStop(0, '#0b1233'); g.addColorStop(0.7, '#1a2a7a'); g.addColorStop(1, '#3a2a40');
    x.fillStyle = g; x.fillRect(0, 0, w, ph);
    x.fillStyle = '#d8d1c4'; x.fillRect(w * 0.18, ph * 0.22, w * 0.64, ph * 0.78);
    x.fillStyle = SIGNAL; x.fillRect(w * 0.14, ph * 0.5, w * 0.72, ph * 0.08);
    const wg = x.createLinearGradient(0, ph * 0.6, 0, ph);
    wg.addColorStop(0, '#ffdca8'); wg.addColorStop(1, '#c46a22');
    x.fillStyle = wg; x.fillRect(w * 0.24, ph * 0.64, w * 0.34, ph * 0.36); x.fillRect(w * 0.64, ph * 0.64, w * 0.12, ph * 0.36);
    x.fillStyle = '#ffcc85'; x.fillRect(w * 0.26, ph * 0.3, w * 0.12, ph * 0.12); x.fillRect(w * 0.44, ph * 0.3, w * 0.12, ph * 0.12); x.fillRect(w * 0.62, ph * 0.3, w * 0.12, ph * 0.12);
    // naziv i vrsta
    let y = ph + h * 0.05;
    x.fillStyle = INK; x.beginPath(); x.roundRect(w * 0.07, y, w * 0.62, h * 0.04, 8); x.fill();
    y += h * 0.065;
    for (let k = 0; k < 5; k++) star(x, w * 0.1 + k * w * 0.065, y + h * 0.014, w * 0.026, AMBER);
    x.fillStyle = MUTED; x.beginPath(); x.roundRect(w * 0.45, y + h * 0.004, w * 0.3, h * 0.02, 10); x.fill();
    y += h * 0.05;
    x.fillStyle = MUTED; x.beginPath(); x.roundRect(w * 0.07, y, w * 0.42, h * 0.02, 10); x.fill();
    // tri gumba: poziv (istaknut), ruta, web
    y += h * 0.055;
    const bx = [0.2, 0.5, 0.8];
    bx.forEach((u, i) => {
      const cx = w * u, cy = y + h * 0.045, r = w * 0.075;
      x.beginPath(); x.arc(cx, cy, r, 0, 7);
      x.fillStyle = i === 0 ? SIGNAL : CARD; x.fill();
      if (i) { x.strokeStyle = 'rgba(20,20,20,0.18)'; x.lineWidth = 4; x.stroke(); }
      x.strokeStyle = i === 0 ? '#ffffff' : SIGNAL; x.lineWidth = 7; x.lineCap = 'round'; x.lineJoin = 'round';
      x.beginPath();
      if (i === 0) { // slušalica: luk s dva jastučića, zakrenuta
        x.save(); x.translate(cx, cy); x.rotate(-Math.PI / 4);
        x.lineWidth = r * 0.2; x.beginPath(); x.arc(0, 0, r * 0.4, Math.PI * 0.62, Math.PI * 1.38); x.stroke();
        x.fillStyle = '#ffffff';
        for (const a of [Math.PI * 0.62, Math.PI * 1.38]) { x.beginPath(); x.ellipse(Math.cos(a) * r * 0.4, Math.sin(a) * r * 0.4, r * 0.18, r * 0.11, a + Math.PI / 2, 0, 7); x.fill(); }
        x.restore();
      } else if (i === 1) { // ruta: strelica koja skreće
        x.moveTo(cx - r * 0.3, cy + r * 0.4); x.lineTo(cx - r * 0.3, cy - r * 0.05); x.lineTo(cx + r * 0.35, cy - r * 0.05); x.stroke();
        x.beginPath(); x.moveTo(cx + r * 0.12, cy - r * 0.28); x.lineTo(cx + r * 0.35, cy - r * 0.05); x.lineTo(cx + r * 0.12, cy + r * 0.18); x.stroke();
      } else { // web: globus
        x.arc(cx, cy, r * 0.42, 0, 7); x.stroke();
        x.beginPath(); x.ellipse(cx, cy, r * 0.18, r * 0.42, 0, 0, 7); x.stroke();
        x.beginPath(); x.moveTo(cx - r * 0.42, cy); x.lineTo(cx + r * 0.42, cy); x.stroke();
      }
      x.fillStyle = i === 0 ? INK : MUTED; x.beginPath(); x.roundRect(cx - w * 0.06, cy + r + h * 0.014, w * 0.12, h * 0.016, 8); x.fill();
    });
    // radno vrijeme: jantarna točka + crta
    y += h * 0.15;
    x.strokeStyle = 'rgba(20,20,20,0.12)'; x.lineWidth = 3; x.beginPath(); x.moveTo(w * 0.07, y); x.lineTo(w * 0.93, y); x.stroke();
    y += h * 0.035;
    x.fillStyle = AMBER; x.beginPath(); x.arc(w * 0.09, y + h * 0.01, h * 0.009, 0, 7); x.fill();
    x.fillStyle = INK; x.beginPath(); x.roundRect(w * 0.13, y, w * 0.22, h * 0.02, 8); x.fill();
    x.fillStyle = MUTED; x.beginPath(); x.roundRect(w * 0.38, y, w * 0.3, h * 0.02, 8); x.fill();
    // dvije recenzije
    for (let k = 0; k < 2; k++) {
      y += h * 0.06;
      x.fillStyle = CARD; x.beginPath(); x.roundRect(w * 0.06, y, w * 0.88, h * 0.1, 18); x.fill();
      x.strokeStyle = 'rgba(20,20,20,0.1)'; x.lineWidth = 2; x.stroke();
      x.fillStyle = k ? '#c9c2b6' : '#9fb4ff'; x.beginPath(); x.arc(w * 0.13, y + h * 0.035, h * 0.018, 0, 7); x.fill();
      x.fillStyle = INK; x.beginPath(); x.roundRect(w * 0.19, y + h * 0.024, w * 0.22, h * 0.016, 8); x.fill();
      for (let s = 0; s < 5; s++) star(x, w * 0.5 + s * w * 0.04, y + h * 0.032, w * 0.016, AMBER);
      x.fillStyle = MUTED; x.beginPath(); x.roundRect(w * 0.1, y + h * 0.062, w * 0.74, h * 0.013, 6); x.fill();
      x.beginPath(); x.roundRect(w * 0.1, y + h * 0.082, w * 0.5, h * 0.013, 6); x.fill();
    }
  });
}

/** Oznaka na karti (kao na Lokalnom SEO-u, u mjerilu ovog kadra): kapljica u signalno plavoj, bijelo središte. */
function pin(scene, P, s = 1) {
  const pinM = new THREE.MeshPhysicalMaterial({ color: SIGNAL, roughness: 0.18, metalness: 0.1, clearcoat: 1, envMapIntensity: 1.6, emissive: SIGNAL, emissiveIntensity: 0.35 });
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.34 * s, 48, 32), pinM);
  head.position.set(P.x, 1.28 * s, P.z);
  head.castShadow = true;
  scene.add(head);
  const tip = new THREE.Mesh(new THREE.ConeGeometry(0.296 * s, 0.8 * s, 48, 1, true).rotateX(Math.PI), pinM);
  tip.position.set(P.x, 0.8 * s, P.z);
  scene.add(tip);
  const dot = new THREE.Mesh(new THREE.SphereGeometry(0.136 * s, 32, 16), new THREE.MeshStandardMaterial({ color: '#ffffff', emissive: '#ffffff', emissiveIntensity: 0.15, roughness: 0.4 }));
  dot.position.set(P.x, 1.28 * s, P.z + 0.26 * s);
  scene.add(dot);
  return V(P.x, 1.28 * s, P.z);
}

export const gbp = {
  file: 'world/usluga-gbp.webp',
  q: 72,
  fov: 34,
  async build(st) {
    const { scene, camera } = st;
    camera.position.set(4.4, 4.6, 8.4);
    camera.lookAt(-1.25, 1.3, 0.1);
    st.sky.uAz.value = -2.2;
    st.addFloor({ cell: 1, gridI: 0.15, refl: 0.3, fall: 0.07 });
    nightLights(scene, { key: [-10, 9, -8], keyI: 1.0, fill: [10, 7, 10], fillI: 0.3, target: [0, 1, 0], shadow: 10 });
    // karta u nacrtu: ulice (dvostruke crte), tlocrti zgrada u blokovima, jedna zakrivljena glavna cesta
    const bp = createBlueprint(null, { width: 1.2, opacity: 0.5, ghost: 0 });
    const ring = createBlueprint(null, { width: 1.4, opacity: 0.9, ghost: 0 });
    const R = rng(52);
    const Y = 0.012, S = 2.2, N = 7;
    for (let i = -N; i <= N; i++) {
      for (const o of [-0.13, 0.13]) {
        bp.line(V(i * S + o, Y, -N * S), V(i * S + o, Y, N * S));
        bp.line(V(-N * S, Y, i * S + o), V(N * S, Y, i * S + o));
      }
    }
    for (let i = -N; i < N; i++) for (let j = -N; j < N; j++) {
      const x0 = i * S + 0.25, z0 = j * S + 0.25, span = S - 0.5;
      // svaki blok: dva do četiri tlocrta uz rub
      const n = 2 + Math.floor(R() * 3);
      for (let k = 0; k < n; k++) {
        const w = 0.45 + R() * 0.5, d = 0.45 + R() * 0.5;
        const ux = x0 + R() * (span - w), uz = z0 + R() * (span - d);
        bp.poly([V(ux, Y, uz), V(ux + w, Y, uz), V(ux + w, Y, uz + d), V(ux, Y, uz + d)], true);
      }
    }
    const road = new THREE.CatmullRomCurve3([V(-12, Y, 7), V(-4, Y, 3.4), V(2, Y, -1.2), V(7, Y, -3), V(13, Y, -9)]);
    for (const o of [-0.22, 0.22]) {
      const pts = road.getPoints(80).map((p, k, a) => { const t = road.getTangent(k / (a.length - 1)); return p.clone().add(V(-t.z, 0, t.x).multiplyScalar(o)); });
      bp.poly(pts);
    }
    // vaš obrt: oznaka na uglu bloka, topla svjetlost pod njom, krug područja rada na karti
    const P = V(1.1, 0, 1.1);
    const head = pin(scene, P, 1);
    pool(scene, P.x, P.z, 1.2, { i: 0.75, color: '#ffb46a' });
    const ringPts = [];
    for (let k = 0; k <= 96; k++) { const a = (k / 96) * Math.PI * 2; ringPts.push(V(P.x + Math.cos(a) * 3.4, Y, P.z + Math.sin(a) * 3.4)); }
    ring.poly(ringPts);
    // kartica profila nad oznakom (kao kad se oznaka dodirne): papir u tamnom okviru, nagnuta prema kameri
    const card = new THREE.Group();
    card.position.set(-1.35, 2.35, 0.6);
    card.rotation.set(-0.12, 0.22, 0);
    scene.add(card);
    const bw = 2.2, bh = bw * (1240 / 900);
    const body = new THREE.Mesh(new RoundedBoxGeometry(bw + 0.14, bh + 0.14, 0.08, 4, 0.12), mat({ color: '#14161c', rough: 0.5, metal: 0.3, env: 1.0 }));
    body.castShadow = true;
    card.add(body);
    const scr = new THREE.Mesh(new THREE.PlaneGeometry(bw, bh), mat({ color: '#000', emissive: '#ffffff', ei: 0.78, emissiveMap: profileTex(), rough: 0.6 }));
    scr.position.z = 0.043;
    card.add(scr);
    card.updateMatrixWorld(true);
    const at = (u, v) => V(-bw / 2 + u * bw, bh / 2 - v * bh, 0.05).applyMatrix4(card.matrixWorld);
    // spojnica kartice i oznake (nacrt) + točka na gumbu „poziv“
    ring.poly([at(0.62, 1.0), at(0.62, 1.0).lerp(head, 0.5).add(V(0, -0.15, 0)), head]);
    const call = at(0.2, 0.565);
    st.dots([{ p: call.toArray(), c: '#fff3dc', s: 0.12, k: 1.6 }, { p: head.toArray(), c: '#cfdcff', s: 0.4, k: 1.2, a: 0.6 }]);
    // pretrage iz okolice (desno i iza, ne preko kartice) stižu do oznake
    const T = rng(9);
    for (let k = 0; k < 9; k++) {
      const R = T; // vlastiti niz: broj tlocrta na karti ne mijenja tragove
      const a = 0.4 - R() * 2.4, rr = 4 + R() * 4;
      const s = V(P.x + Math.cos(a) * rr, 0.05, P.z + Math.sin(a) * rr);
      const warm = k % 3 === 0;
      const e = head.clone().add(V(0, -0.25, 0));
      const mid = s.clone().lerp(e, 0.5).add(V(0, 0.9 + R() * 0.9, 0));
      trail(scene, new THREE.QuadraticBezierCurve3(s, mid, e), { r: 0.012 + R() * 0.008, color: warm ? '#ffc070' : '#7f9bff', i: 1.7, tail: 0.5, from: 0.2 + R() * 0.3, to: 0.95, seg: 120 });
      st.dots([{ p: s.toArray(), c: warm ? '#ffd29a' : '#a9bbff', s: 0.14, k: 1.8 }]);
    }
    light(scene, 'point', '#fff3e6', 1.6, [-2.8, 2.0, 3.6], null, { dist: 6 });
    light(scene, 'point', '#9fb3ff', 2.5, [P.x + 0.6, 2.0, P.z + 1.2], null, { dist: 5 });
    bp.build(scene, st);
    ring.build(scene, st);
    horizon(st, { a0: -2.9, a1: 0.6, seed: 52, r0: 60, r1: 180 });
    motes(st, { n: 110, box: [-6, 0.2, -6, 6, 5, 6], seed: 52, size: [0.01, 0.05] });
    bokeh(st, [{ p: [4.0, 4.0, 7.4], c: '#ffb45e', s: 0.3, a: 0.28 }, { p: [3.8, 4.4, 7.2], c: '#5f7dff', s: 0.22, a: 0.24 }]);
  },
};

export const provjera = {
  file: 'world/usluga-provjera.webp',
  fov: 38,
  async build(st) {
    const { scene, camera } = st;
    camera.position.set(3.7, 1.75, 6.4);
    camera.lookAt(1.0, 1.0, -1.6);
    st.sky.uAz.value = -2.2;
    st.addFloor({ cell: 0.5, gridI: 0.45, refl: 0.55, fall: 0.08 });
    nightLights(scene, { key: [-10, 8, -8], keyI: 1.1, fill: [10, 6, 10], fillI: 0.3, target: [1, 1, -1], shadow: 10 });
    // niz: vaš obrt sprijeda, tri konkurenta iza njega po dijagonali. Svjetlosni list stoji iza vašeg obrta:
    // ispred lista je stvarno, iza nacrt (konkurenti su tek izmjereni, ne prikazani)
    const dir = V(1, 0, -1.25).normalize();
    const n = V(-dir.x, 0, -dir.z);
    const cut = createCut(n, dir.clone().multiplyScalar(1.15), { k: 14, i: 1.8 });
    const bp = createBlueprint(cut, { width: 1.4, opacity: 0.85, ghost: 0.03 });
    const dims = createBlueprint(null, { width: 1.5, opacity: 1, ghost: 0 }); // kote: preko cijelog niza
    const ry = Math.atan2(dir.x, dir.z) - Math.PI / 2;
    const row = [
      { d: 0, w: 0.95, h: 1.55, dd: 0.9 },
      { d: 2.1, w: 1.0, h: 2.2, dd: 0.9 },
      { d: 3.9, w: 0.9, h: 1.25, dd: 0.85 },
      { d: 5.6, w: 1.05, h: 1.85, dd: 0.9 },
    ];
    const tops = [];
    row.forEach((b, i) => {
      const c = dir.clone().multiplyScalar(b.d);
      const m = box(b.w, b.h, b.dd, mat({ color: '#d8d1c4', rough: 0.8 }, cut), c.x, 0, c.z, ry);
      scene.add(m);
      bp.edges(m, 30);
      if (i === 0) {
        // vaš obrt: plavi krov, topli prozori, izlog i vrata (isti obrt kao u kadru SEO-a)
        scene.add(box(b.w + 0.1, 0.08, b.dd + 0.1, mat({ color: SIGNAL, rough: 0.5 }, cut), c.x, b.h, c.z, ry));
        const g = new THREE.Group(); g.position.copy(c); g.rotation.y = ry; scene.add(g);
        const f = b.dd / 2 + 0.002;
        for (const [x, y] of [[-0.2, 1.06], [0.2, 1.06]]) addWindow(g, null, { w: 0.24, h: 0.32, x, y, z: f, lit: 0.42, frame: '#e9e5dd', depth: 0.03, mullion: false });
        addWindow(g, null, { w: 0.52, h: 0.42, x: -0.13, y: 0.42, z: f, lit: 0.55, frame: SIGNAL, depth: 0.03, mullion: false });
        box(0.18, 0.5, 0.03, mat({ color: INK, rough: 0.4 }), 0.29, 0, f, 0, g);
        const s = b.w / 2 + 0.002;
        for (const y of [1.06, 0.5]) addWindow(g, null, { w: 0.24, h: 0.32, x: s, y, z: 0, ry: Math.PI / 2, lit: 0.42, frame: '#e9e5dd', depth: 0.03, mullion: false });
        pool(scene, c.x, c.z, 1.1, { i: 0.55, color: '#ffb46a' });
      } else {
        // konkurenti: prozori u nacrtu na dva vidljiva pročelja, da se čitaju kao zgrade, ne kao stupci
        const g = new THREE.Group(); g.position.copy(c); g.rotation.y = ry; g.updateMatrixWorld(true);
        const Pw = (x, y, z) => V(x, y, z).applyMatrix4(g.matrixWorld);
        for (let y = 0.32; y + 0.3 < b.h - 0.12; y += 0.42) {
          for (const x of [-b.w * 0.25, b.w * 0.25]) { const z = b.dd / 2 + 0.004; bp.poly([Pw(x - 0.12, y, z), Pw(x + 0.12, y, z), Pw(x + 0.12, y + 0.3, z), Pw(x - 0.12, y + 0.3, z)], true); }
          for (const z of [-b.dd * 0.25, b.dd * 0.25]) { const x = -b.w / 2 - 0.004; bp.poly([Pw(x, y, z - 0.12), Pw(x, y, z + 0.12), Pw(x, y + 0.3, z + 0.12), Pw(x, y + 0.3, z - 0.12)], true); }
        }
      }
      // kota visine uz prednji lijevi brid (nacrt, uvijek vidljiva): crta, dvije kose crtice, pomoćne crte
      const side = V(-dir.z, 0, dir.x); // okomito na niz, prema kameri
      const foot = c.clone().add(dir.clone().multiplyScalar(-b.w / 2 - 0.18)).add(side.clone().multiplyScalar(b.dd / 2));
      tops.push(foot.clone().setY(b.h));
      dims.line(foot, foot.clone().setY(b.h));
      for (const y of [0, b.h]) {
        const p = foot.clone().setY(y);
        dims.line(p.clone().add(V(-0.07, -0.07, 0)), p.clone().add(V(0.07, 0.07, 0)));
        dims.line(p, p.clone().add(dir.clone().multiplyScalar(0.18)));
      }
    });
    // crta mjerila preko vrhova (isprekidana) i mjerna točka na svakom vrhu: jantarna kod vas
    for (let i = 0; i < tops.length - 1; i++) {
      const a = tops[i], b = tops[i + 1];
      for (let k = 0; k < 10; k += 2) dims.line(a.clone().lerp(b, k / 10), a.clone().lerp(b, (k + 1) / 10));
    }
    st.dots(tops.map((p, i) => ({ p: p.toArray(), c: i === 0 ? '#ffd29a' : '#a9bbff', s: i === 0 ? 0.26 : 0.16, k: 2.4 })));
    // pretrage dolaze s horizonta do svih četiriju; tople do vašeg obrta
    const R = rng(61);
    for (let k = 0; k < 10; k++) {
      const i = k % 4 === 0 ? 0 : 1 + Math.floor(R() * 3);
      const c = dir.clone().multiplyScalar(row[i].d);
      const e = V(c.x, 0.4 + R() * 0.6, c.z).add(V(-dir.z, 0, dir.x).multiplyScalar(0.5));
      const s = V(-10 + R() * 20, 0.3 + R() * 2.5, -14 - R() * 12);
      const mid = s.clone().lerp(e, 0.6).add(V(0, 1.2 + R() * 1.5, 1.5));
      trail(scene, new THREE.QuadraticBezierCurve3(s, mid, e), { r: 0.009 + R() * 0.008, color: i === 0 ? '#ffc070' : '#6f8cff', i: 1.2 + R() * 0.6, tail: 0.5, from: 0.2 + R() * 0.3, to: 0.92, seg: 120 });
    }
    cutSheet(scene, cut, { size: 9, height: 5, i: 0.55 });
    light(scene, 'point', '#ffb15e', 3, [-0.4, 0.7, 1.6], null, { dist: 4 });
    light(scene, 'point', '#fff3e6', 0.9, [-1.6, 3.0, 2.6], null, { dist: 7 });
    bp.build(scene, st);
    dims.build(scene, st);
    horizon(st, { a0: -2.9, a1: 0.6, seed: 61, r0: 60, r1: 180 });
    motes(st, { n: 110, box: [-4, 0.2, -8, 6, 4, 4], seed: 61, size: [0.01, 0.04] });
    bokeh(st, [{ p: [4.2, 1.4, 6.0], c: '#ffb45e', s: 0.3, a: 0.28 }, { p: [4.4, 2.2, 5.8], c: '#5f7dff', s: 0.22, a: 0.24 }]);
  },
};
