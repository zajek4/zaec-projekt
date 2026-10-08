// ZAEC kino-uvod: jedan renderer, jedan svijet, scroll kao dirigent.
// Orbita → Europa → Hrvatska → Slavonija → Osijek → konkatedrala → nacrt → mreža → web → put do upita → slojevi → mreža.
//
// Višerazinska arhitektura: karta (Z = 1) je referentni sustav; globus, karta i grad (u metrima) skaliraju se
// s mapScale(Z) oko ishodišta u konkatedrali, pa kamera putuje kontinuirano kroz šest redova veličine bez
// gubitka preciznosti (sve je blizu ishodišta).
// Kamera je JEDNA krivulja: ključne slike se interpoliraju monotonom kubičnom krivuljom u logaritmu visine
// (jednolik osjećaj spuštanja) i u koordinatama karte; bočni pomak u poniranju prati izgubljenu visinu.
// Nema oblaka koji skrivaju skokove — karta je doslovno površina globusa koja se odmata (BEND),
// a spuštanjem pada sumrak pa se svjetla Slavonije i Osijeka pale zato što je pala noć.
import * as THREE from 'three';
import geo from './data/geo.json';
import { createGlobe } from './globe.js';
import { createNetwork } from './network.js';
import { createEurope } from './europe.js';
import { createCity } from './city.js';
import { createBeam } from './beam.js';
import { createMorph, createLayers, LAYER_DEFS } from './wire.js';
import { createBlueprint } from './blueprint.js';
import { createFlow } from './flow.js';
import { GATES } from './gates.js';
import { FRAMES, KEYS, frameState } from './keyframes.js';
import { clamp, lerp, smooth, damp, mapScale, GLOBE_R, DEG, glowPoints, seeded, Z_CITY, CITY_KX, CITY_KZ, BEND, SUN_MAP, DAY_EDGE, CIVIC } from './lib.js';

// kanali koji se interpoliraju krivuljom (udaljenost i meta idu preko visine i koordinata karte)
const CH = [...KEYS.filter((k) => !['dist', 'tx', 'ty', 'tz', 'fit'].includes(k)), 'LA', 'mx', 'my', 'mz'];
const KAPPA = 0.9; // 1 = puna brzina kroz sidra, 0 = zaustavljanje na svakom sidru

/** Monotoni kubični nagibi (Fritsch–Carlson, harmonijska sredina): bez prebačaja, ravno gdje se vrijednost drži. */
function tangents(y) {
  const n = y.length;
  const m = new Float64Array(n);
  for (let i = 1; i < n - 1; i++) {
    const d0 = y[i] - y[i - 1], d1 = y[i + 1] - y[i];
    m[i] = d0 * d1 > 0 ? (KAPPA * 2 * d0 * d1) / (d0 + d1) : 0;
  }
  return m;
}
const herm = (y0, m0, y1, m1, t) => {
  const t2 = t * t, t3 = t2 * t;
  return (2 * t3 - 3 * t2 + 1) * y0 + (t3 - 2 * t2 + t) * m0 + (-2 * t3 + 3 * t2) * y1 + (t3 - t2) * m1;
};

export function createWorld3({ canvas, labelsRoot, assets = {}, onReady, onChapter, onFrame }) {
  const root = document.documentElement;
  const reduceMQ = matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const lite = !finePointer || innerWidth < 760 || (navigator.hardwareConcurrency || 8) <= 4;

  /* ── renderer ── */
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: !lite, alpha: false, powerPreference: 'high-performance', stencil: false });
  renderer.setClearColor('#03050b', 1);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  const maxDpr = lite ? 1.35 : 1.75;
  let dpr = Math.min(window.devicePixelRatio || 1, maxDpr);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 6000);

  // prevođenje shadera bez blokiranja (KHR_parallel_shader_compile) kad ga preglednik podržava
  const parallel = renderer.extensions.has('KHR_parallel_shader_compile');
  const compile = (obj, target) => (parallel ? renderer.compileAsync(obj, camera, target) : Promise.resolve(renderer.compile(obj, camera, target)));

  scene.add(new THREE.HemisphereLight('#8ea3ff', '#0a0e1a', 0.6));
  const key = new THREE.DirectionalLight('#dde5ff', 1.45);
  key.position.set(-40, 60, 34);
  scene.add(key);
  const rim = new THREE.DirectionalLight('#ff9d66', 0.55);
  rim.position.set(50, 18, -40);
  scene.add(rim);

  /* ── pozornice ── */
  const globe = createGlobe({ geo, lite, landUrl: assets.land, lightsUrl: assets.lights });
  const network = createNetwork({ geo, lite });
  globe.spin.add(network.group);
  const europe = createEurope({ geo, lite, landTex: globe.land, fieldTex: globe.field, lightsTex: globe.lights, landEuUrl: assets.landEu });
  const morph = createMorph(null, { max: lite ? 3200 : 6500 });
  // rubovi konkatedrale (metri) → svjetske jedinice na mjerilu grada
  const kCity = mapScale(Z_CITY);
  const toWorldLines = (g) => {
    const out = g.clone();
    out.scale(kCity * CITY_KX, kCity * CITY_KZ, kCity * CITY_KZ);
    return out;
  };
  let warmPending = false;
  // kote, os tornja i konstrukcijski pravci nacrta (lokalni metri grada)
  const blueprint = createBlueprint();
  const cityScale = new THREE.Vector3(kCity * CITY_KX, kCity * CITY_KZ, kCity * CITY_KZ);
  const city = createCity({
    lite,
    dataUrl: assets.city,
    modelUrl: assets.model,
    onLines: (g) => {
      const w = toWorldLines(g); morph.setSource(w); w.dispose();
      blueprint.setCathedral(g);
      blueprint.setGrid(morph.gridInfo, cityScale);
    },
    // novi model konkatedrale se prevodi u pozadini prije nego što zamijeni stari
    prepare: (mesh) => compile(mesh, scene).catch(() => {}),
    onLoaded: () => { warmPending = true; },
  });
  // reflektor konkatedrale živi u korijenu scene (broj svjetala se nikad ne mijenja → nema ponovnog prevođenja)
  scene.add(city.flood);
  city.group.add(blueprint.group);
  const beam = createBeam();
  // završni kadar: isti signal izlazi iz čvora "Vaša tvrtka" na globusu (zatvara priču konkatedrale)
  const beacon = createBeam();
  const layers = createLayers();
  const flow = createFlow({ lite });
  scene.add(globe.group, europe.group, city.group, morph.object, layers.group, flow.group, beam.group, beacon.group);

  // zvijezde: rijetke, oko kamere (bez "sci-fi" gustoće)
  const rand = seeded(99);
  const stars = glowPoints({ count: lite ? 260 : 480, color: '#8d9fd6', core: '#e6ebff', size: 1.2, depthTest: false });
  for (let i = 0; i < stars.alpha.length; i++) {
    const u = rand() * 2 - 1, th = rand() * Math.PI * 2, r = 700 + rand() * 300;
    const q = Math.sqrt(1 - u * u);
    stars.pos.set([Math.cos(th) * q * r, u * r, Math.sin(th) * q * r], i * 3);
    stars.alpha[i] = 0.08 + rand() * rand() * 0.6;
    stars.size[i] = 0.45 + rand() * rand() * 1.8;
  }
  stars.uniforms.uMin.value = 1;
  stars.points.renderOrder = -10;
  scene.add(stars.points);
  // sunce iza ruba planeta (gore desno): samo mekani sjaj, bez "sci-fi" bljeska
  const sunGlow = glowPoints({ count: 2, color: '#9fc0ff', core: '#ffffff', size: 1, depthTest: true, additive: true });
  sunGlow.size[0] = 260; sunGlow.size[1] = 40;
  sunGlow.alpha[0] = 0.32; sunGlow.alpha[1] = 0.9;
  sunGlow.uniforms.uMax.value = 520;
  sunGlow.points.renderOrder = -5;
  scene.add(sunGlow.points);

  /* ── sumrak: sunce karte se spušta prema obzoru (smjer jednak kao na globusu, pa nema skoka) ── */
  const SUN0 = globe.sun.clone();
  const sunAz = new THREE.Vector3(SUN0.x, 0, SUN0.z).normalize();
  const elev0 = Math.asin(SUN0.y);
  const sunState = { night: 0 };
  function updateSun(dusk) {
    const e = elev0 - dusk * 34 * DEG;
    SUN_MAP.value.copy(sunAz).multiplyScalar(Math.cos(e));
    SUN_MAP.value.y = Math.sin(e);
    const k = smooth(0, 0.3, dusk);
    DAY_EDGE.value.set(lerp(-0.12, -0.07, k), lerp(0.38, 0.13, k));
    sunState.night = 1 - smooth(DAY_EDGE.value.x, DAY_EDGE.value.y, Math.sin(e));
  }

  /* ── sidra i stanje ── */
  let anchors = [];
  let states = [];
  let covers = [];
  // uspravni zaslon: tekst koji prolazi gornjom polovicom gura motiv u slobodni dio ispod sebe (vidi frame)
  let lensBlocks = [];
  let mobile = false;
  let vw = 0, vh = 0;
  let curve = null;
  const st = { ...frameState('hero', false) };
  const rig = { target: 0, smooth: 0 };
  let lastChapter = '';

  function buildCurve() {
    const n = states.length;
    const aspect = vw / Math.max(1, vh);
    const v = {}, m = {};
    for (const ch of CH) v[ch] = new Float64Array(n);
    states.forEach((S, i) => {
      const s = mapScale(S.Z);
      const fitD = S.fit > 0 ? S.fit / (2 * Math.tan((S.fov * DEG) / 2) * aspect * 0.92) : 0;
      for (const ch of CH) {
        if (ch === 'LA') v.LA[i] = Math.log(Math.max(S.dist, fitD) / s);
        else if (ch === 'mx') v.mx[i] = S.tx / s;
        else if (ch === 'my') v.my[i] = S.ty / s;
        else if (ch === 'mz') v.mz[i] = S.tz / s;
        else v[ch][i] = S[ch];
      }
    });
    for (const ch of CH) m[ch] = tangents(v[ch]);
    curve = { v, m, n };
  }

  function measure() {
    const sy = window.scrollY;
    mobile = innerWidth < 760 || innerWidth / innerHeight < 0.82;
    anchors = [...document.querySelectorAll('[data-cam]')]
      .map((el) => {
        const r = el.getBoundingClientRect();
        const top = r.top + sy;
        const at = el.dataset.camAt || 'center';
        const y = at === 'top' ? top : at === 'bottom' ? top + r.height - innerHeight : top + r.height / 2 - innerHeight / 2;
        return { id: el.dataset.cam, y: Math.max(0, y) };
      })
      .filter((a) => FRAMES[a.id])
      .sort((a, b) => a.y - b.y);
    if (!anchors.length) anchors = [{ id: 'hero', y: 0 }];
    const tablet = mobile && innerWidth >= 600;
    states = anchors.map((a) => frameState(a.id, mobile, tablet));
    buildCurve();
    flow.setLayout(mobile);
    labelsRoot?.classList.toggle('is-portrait', mobile);
    covers = [...document.querySelectorAll('[data-cover]')].map((el) => {
      const r = el.getBoundingClientRect();
      return [r.top + sy, r.bottom + sy];
    });
    lensBlocks = mobile
      ? [...document.querySelectorAll('[data-lens] .cine-copy')].map((el) => {
        const k = el.children;
        return [k[0].getBoundingClientRect().top + sy, k[k.length - 1].getBoundingClientRect().bottom + sy];
      })
      : [];
    covers.sort((a, b) => a[0] - b[0]);
    const merged = [];
    covers.forEach((c) => {
      const last = merged[merged.length - 1];
      if (last && c[0] <= last[1] + 2) last[1] = Math.max(last[1], c[1]);
      else merged.push([c[0], c[1]]);
    });
    covers = merged;
  }

  function progressAt(y) {
    if (anchors.length < 2 || y <= anchors[0].y) return 0;
    for (let i = 0; i < anchors.length - 1; i++) {
      const a = anchors[i].y, b = anchors[i + 1].y;
      if (y < b) return i + (b > a ? (y - a) / (b - a) : 1);
    }
    return anchors.length - 1;
  }

  function stateAt(f, out) {
    const { v, m, n } = curve;
    const i = Math.min(n - 2, Math.max(0, Math.floor(f)));
    let t = n < 2 ? 0 : clamp(f - i);
    if (reduceMQ.matches) t = t < 0.5 ? 0 : 1;
    const j = n < 2 ? 0 : i + 1;
    for (const ch of CH) out[ch] = herm(v[ch][i], m[ch][i], v[ch][j], m[ch][j], t);
    // u poniranju meta putuje razmjerno izgubljenoj visini: većina bočnog pomaka dok smo visoko,
    // pa se tlo ispod kamere ne "otima" pri dnu spuštanja
    const LA0 = v.LA[i], LA1 = v.LA[j];
    const dLA = Math.abs(LA1 - LA0);
    if (dLA > 0.05 && t > 0 && t < 1) {
      const H0 = Math.exp(LA0), H1 = Math.exp(LA1);
      const g = lerp(t, clamp((Math.exp(out.LA) - H0) / (H1 - H0)), clamp(dLA / 1.5));
      out.mx = herm(v.mx[i], m.mx[i], v.mx[j], m.mx[j], g);
      out.my = herm(v.my[i], m.my[i], v.my[j], m.my[j], g);
      out.mz = herm(v.mz[i], m.mz[i], v.mz[j], m.mz[j], g);
    }
    const s = mapScale(out.Z);
    out.dist = Math.exp(out.LA) * s;
    out.tx = out.mx * s;
    out.ty = out.my * s;
    out.tz = out.mz * s;
    out.chapter = t < 0.5 ? anchors[i].id : anchors[j].id;
    return out;
  }

  function coveredAt(y) {
    for (const [a, b] of covers) if (y >= a - 1 && y + vh <= b + 1) return true;
    return false;
  }

  /* ── veličina ── */
  function resize(force = false) {
    const w = canvas.clientWidth || innerWidth;
    const h = canvas.clientHeight || innerHeight;
    if (!force && w === vw && Math.abs(h - vh) < 120) return;
    vw = w;
    vh = h;
    renderer.setPixelRatio(dpr);
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    measure();
  }

  /* ── pokazivač (paralaksa) ── */
  const ptr = { x: 0, y: 0, sx: 0, sy: 0 };
  const onPointer = (e) => {
    if (e.pointerType !== 'mouse') return;
    ptr.x = (e.clientX / innerWidth) * 2 - 1;
    ptr.y = (e.clientY / innerHeight) * 2 - 1;
  };
  if (finePointer) window.addEventListener('pointermove', onPointer, { passive: true });

  /* ── vanjsko stanje (DOM kontrole) ── */
  let gates = GATES.map(() => false);
  let badFrac = 1;
  let focusGate = -1;
  let layerHover = -1;
  flow.setStates(gates);

  /* ── oznake ── */
  const labels = labelsRoot ? [...labelsRoot.querySelectorAll('[data-l]')].map((el) => ({ el, key: el.dataset.l, o: -1, x: -1e4, y: -1e4 })) : [];
  const v3 = new THREE.Vector3();
  const n3 = new THREE.Vector3();
  const t3 = new THREE.Vector3();
  const cityIdx = (name) => geo.cities.findIndex((c) => c[0] === name);

  function labelWorld(key, ctx) {
    const [kind, idx] = key.split('-');
    const i = +idx;
    switch (kind) {
      case 'osijek':
      case 'you': {
        globe.osijekWorld(v3);
        n3.copy(v3).sub(ctx.globeCenter).normalize();
        const facing = n3.dot(t3.copy(ctx.camPos).sub(v3)) > 0;
        return facing ? (kind === 'you' ? st.labFinale : st.labOsijek) * ctx.globeA : 0;
      }
      case 'city': {
        europe.cityWorld(cityIdx(idx), v3);
        return (idx === 'Osijek' ? Math.max(st.labCities, st.labTowns) * (1 - smooth(1.62, 1.8, st.Z)) : st.labCities) * ctx.europeA;
      }
      case 'town': {
        europe.townWorld(i, v3);
        return st.labTowns * ctx.europeA;
      }
      case 'cath':
      case 'drava':
      case 'hotel':
      case 'trg':
        v3.copy(city.anchors[kind]).applyMatrix4(city.group.matrixWorld);
        return st.labCity * ctx.cityA * smooth(Z_CITY - 0.12, Z_CITY - 0.01, st.Z);
      case 'dim':
        blueprint.anchor('dim', v3);
        return bpLabel;
      case 'ch':
        v3.copy(flow.channelWorld(i));
        return st.labFlow;
      case 'out':
        v3.copy(flow.outcomeWorld(i));
        return st.labFlow;
      case 'gate':
        v3.copy(flow.gateWorld(i));
        return st.labFlow;
      case 'layer': {
        layers.anchor(i, v3);
        return st.labLayers * st.layersA * layers.arrival(i) * (0.38 + 0.62 * layers.emphasis(i));
      }
      default:
        return 0;
    }
  }

  function placeLabels(ctx, visible) {
    for (const L of labels) {
      let o = visible ? labelWorld(L.key, ctx) : 0;
      if (o > 0.01) {
        v3.project(camera);
        if (v3.z > 1 || Math.abs(v3.x) > 1.15 || Math.abs(v3.y) > 1.15) o = 0;
        else {
          // uz rub ekrana oznaka se gasi umjesto da bude odrezana
          o *= 1 - smooth(0.8, 0.95, Math.abs(v3.x));
          const x = Math.round((v3.x * 0.5 + 0.5) * vw);
          const y = Math.round((-v3.y * 0.5 + 0.5) * vh);
          if (x !== L.x || y !== L.y) {
            L.el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            L.x = x;
            L.y = y;
          }
        }
      }
      o = Math.round(clamp(o) * 100) / 100;
      if (o !== L.o) {
        L.el.style.opacity = String(o);
        if ((o > 0.5) !== (L.o > 0.5)) L.el.classList.toggle('is-on', o > 0.5);
        L.o = o;
      }
    }
  }

  /* ── priprema GPU-a: svi shaderi i geometrija prije prvog scrolla ──
     Three.js inače prevodi program i šalje geometriju tek kad objekt prvi put postane vidljiv —
     upravo usred prijelaza (trzaj na granici poglavlja). Ovdje se sve odradi unaprijed, iza postera. */
  async function prewarm() {
    const saved = [];
    scene.traverse((o) => { saved.push([o, o.visible, o.frustumCulled]); o.visible = true; o.frustumCulled = false; });
    try { await compile(scene); } catch (e) { /* prevest će se pri crtanju */ }
    renderer.setScissorTest(true);
    renderer.setScissor(0, 0, 1, 1);
    renderer.render(scene, camera);
    renderer.setScissorTest(false);
    for (const [o, vis, fc] of saved) { o.visible = vis; o.frustumCulled = fc; }
  }

  /* ── petlja ── */
  let raf = 0;
  let last = performance.now();
  let time = 0;
  let idleAngle = 0;
  let ready = false;
  let running = false;
  let slowFrames = 0;
  let frameEMA = 16;
  let labelsHidden = false;
  let override = null;
  let osmShown = false;
  let warming = false;
  const ctx = { globeCenter: new THREE.Vector3(), camPos: new THREE.Vector3(), globeA: 0, europeA: 0, cityA: 0 };
  const exact = {};
  const spireW = new THREE.Vector3();
  let bpNotesA = 0, bpLabel = 0;
  const beaconAt = new THREE.Vector3();

  function frame(now, forcedDt) {
    const dt = forcedDt ?? Math.min(0.05, Math.max(0.001, (now - last) / 1000));
    last = now;
    const reduce = reduceMQ.matches;
    if (!reduce) time += dt;

    const y = window.scrollY;
    rig.target = progressAt(y);
    // skok (sidro, gumb, tipkovnica): kamera ne leti kroz sva poglavlja — najviše ~1 kadar animacije
    if (Math.abs(rig.target - rig.smooth) > 1.1) rig.smooth = rig.target - Math.sign(rig.target - rig.smooth) * 1.1;
    rig.smooth = reduce ? rig.target : damp(rig.smooth, rig.target, 4.6, dt);
    if (Math.abs(rig.smooth - rig.target) < 1e-4) rig.smooth = rig.target;
    stateAt(rig.smooth, st);
    if (override) Object.assign(st, override);
    stateAt(rig.target, exact);
    if (exact.chapter !== lastChapter) {
      lastChapter = exact.chapter;
      onChapter?.(lastChapter);
    }

    const covered = coveredAt(y);
    onFrame?.({ progress: rig.smooth, covered });
    if (covered && ready) {
      if (!labelsHidden) { placeLabels(ctx, false); labelsHidden = true; }
      return;
    }
    labelsHidden = false;

    /* kamera */
    if (finePointer && !reduce) {
      ptr.sx = damp(ptr.sx, ptr.x, 2.5, dt);
      ptr.sy = damp(ptr.sy, ptr.y, 2.5, dt);
    }
    const az = (st.az + ptr.sx * 2.6) * DEG;
    const el = (st.el - ptr.sy * 1.5) * DEG;
    camera.position.set(st.tx + st.dist * Math.cos(el) * Math.sin(az), st.ty + st.dist * Math.sin(el), st.tz + st.dist * Math.cos(el) * Math.cos(az));
    camera.up.set(0, 1, 0);
    camera.lookAt(st.tx, st.ty, st.tz);
    if (st.roll) camera.rotateZ(st.roll * DEG);
    if (Math.abs(camera.fov - st.fov) > 0.01) camera.fov = st.fov;
    camera.near = st.Z > 1.5 ? 0.5 : 0.05;
    camera.far = st.Z > 1.5 ? 2400 : 6000;
    // uspravno: dok tekst prelazi gornjom polovicom (između dvaju kadrova), motiv se spušta u prostor ispod njega
    let lensY = st.sy;
    for (const [a, b] of lensBlocks) {
      const t0 = (a - y) / vh, t1 = (b - y) / vh;
      if (t1 < -0.05 || t0 > 1) continue;
      const w = smooth(0.5, 0.3, (t0 + t1) / 2) * smooth(-0.05, 0.2, t1);
      if (w > 0) lensY = lerp(lensY, clamp(0.5 - (Math.max(t1, 0) + 0.9) / 2, -0.3, 0.3), w); // 0,9: dno zauzima traka s pozivima
    }
    camera.setViewOffset(vw, vh, -st.sx * vw, lensY * vh, vw, vh);
    camera.updateProjectionMatrix();
    camera.updateMatrixWorld();

    /* planet + mreža */
    const Z = st.Z;
    const s = mapScale(Z);
    const gs = GLOBE_R * s;
    globe.group.scale.setScalar(gs);
    globe.group.position.set(0, -gs, 0);
    ctx.globeCenter.set(0, -gs, 0);
    if (st.idle > 0.985 && !reduce) idleAngle += dt * 0.012;
    const wrapped = Math.atan2(Math.sin(idleAngle), Math.cos(idleAngle));
    // karta preuzima tek kad je potpuno na kugli i vidljiva; tek tada globus nestaje (ista slika → bez šava)
    const globeA = 1 - smooth(0.86, 0.94, Z);
    globe.update({ alpha: globeA, spin: wrapped * st.idle, net: st.net, finale: st.finale, dive: smooth(0.45, 0.9, Z), time, pr: dpr, reduce });
    globe.group.updateMatrixWorld();
    network.update({ alpha: globeA * (0.55 + 0.45 * st.net), time, conv: st.conv, pr: dpr, camera, frame: globe.spin });
    if (st.finale > 0.01) {
      // izvor na samoj površini (oznaka je malo iznad nje)
      globe.osijekWorld(beaconAt).sub(ctx.globeCenter).multiplyScalar(1.003 / 1.02).add(ctx.globeCenter);
    }
    // mjerilo snopa: ~4,5 svjetske jedinice iznad Zemlje polumjera ~10 (≈ 0,45 R)
    beacon.update({ b: st.finale * 0.85, alpha: globeA, at: beaconAt, unit: gs * 0.0005, camera, time, pr: dpr, drop: 0 });

    /* Europa + Hrvatska + Slavonija (karta se odmata s kugle, sumrak putuje preko nje) */
    updateSun(st.dusk);
    // gustoća naselja nazire se postupno dok se kamera spušta prema Europi (prije sumraka)
    CIVIC.value = smooth(0.3, 0.95, Z);
    BEND.value = 1 - smooth(0.86, 0.97, Z);
    const europeA = smooth(0.78, 0.87, Z) * (1 - smooth(1.8, 1.97, Z));
    europe.group.scale.set(s, Math.min(s, 1), s);
    europe.update({ alpha: europeA, Z, time, dt, pr: dpr, reduce, net: st.net, trace: st.trace, hl: st.hl, dusk: st.dusk, night: sunState.night, mapFade: smooth(1.06, 1.4, Z), res: [vw * dpr, vh * dpr] });

    /* Osijek: stvarno mjerilo (metri) vezano uz kartu; lampe se pale kako pada noć */
    city.group.scale.set(s * CITY_KX, s * CITY_KZ, s * CITY_KZ);
    city.group.updateMatrixWorld();
    // skener kreće tek kad tekst o konkatedrali odlazi (druga polovica prijelaza prema nacrtu)
    const scanEff = smooth(0.38, 0.88, st.scan);
    // redoslijed buđenja grada: svjetla ulica → tamni volumeni zgrada → crtež bridova i prozori
    const cityA = smooth(1.72, 2.05, Z);
    const lamps = smooth(1.04, 1.28, Z);
    // sjaj ulica (karta svjetla) raste iz svjetla Osijeka na karti Slavonije dok se kamera spušta
    const streets = smooth(1.3, 1.8, Z);
    city.update({ alpha: cityA, lamps, streets, wake: sunState.night * 1.12, detail: smooth(1.95, 2.25, Z), rise: st.rise, dim: st.dim, lines: st.lines, cath: smooth(0.45, 1, st.cath), glow: st.glow, cathSolid: st.cathSolid, focus: st.focus, scan: scanEff, time, pr: dpr, reduce, camera });
    city.flood.position.copy(city.floodLocal).applyMatrix4(city.group.matrixWorld);
    const osm = lamps > 0.15;
    if (osm !== osmShown) { osmShown = osm; root.classList.toggle('show-osm', osm); }

    /* signal s tornja */
    const unit = s * CITY_KZ;
    spireW.copy(city.spire).applyMatrix4(city.group.matrixWorld);
    beam.update({ b: st.beam, alpha: cityA, at: spireW, unit, camera, time, pr: dpr });

    /* arhitektura → crtež → mreža → web, tok, slojevi */
    const bad = badFrac * st.flow;
    const scanY = ((city.spire.y + 2) * (1 - scanEff) - 1.5) * unit;
    morph.update({ morph: st.morph, opacity: st.wire * cityA, time, bad, scanY, scanOn: st.wire > 0.001 && st.morph < 0.999 ? 1 : 0 });
    // kote se povlače kad skener završi; mjerne linije zgrade postaju konstrukcijski pravci, pa stupci stranice
    bpNotesA = st.wire * cityA * (1 - smooth(0.25, 0.7, st.morph));
    const notes = smooth(0.8, 1, st.scan);
    bpLabel = bpNotesA * smooth(0.9, 1, notes);
    blueprint.update({ notes, notesA: bpNotesA, rules: smooth(0.15, 1, st.morph), rulesA: st.wire * cityA * (1 - st.flow), toSite: smooth(1.05, 1.8, st.morph) });
    flow.update({ alpha: st.flow, time, dt, pr: dpr, reduce, focusGate });
    layers.update({ p: st.layers, alpha: st.layersA, assemble: st.assemble, active: st.assemble > 0.5 ? -1 : layerHover, dt, reduce });

    /* sunce: daleko u smjeru svjetla, prati kameru */
    for (let k = 0; k < 2; k++) {
      sunGlow.pos[k * 3] = camera.position.x + globe.sun.x * 900;
      sunGlow.pos[k * 3 + 1] = camera.position.y + globe.sun.y * 900;
      sunGlow.pos[k * 3 + 2] = camera.position.z + globe.sun.z * 900;
    }
    sunGlow.geometry.attributes.position.needsUpdate = true;
    sunGlow.uniforms.uPR.value = dpr;
    sunGlow.uniforms.uOpacity.value = (1 - smooth(0.25, 0.8, Z)) * (st.finale > 0.5 ? 0.7 : 1);
    sunGlow.points.visible = sunGlow.uniforms.uOpacity.value > 0.002;

    /* zvijezde prate kameru (noću nad Slavonijom ponovno se naziru) */
    stars.points.position.copy(camera.position);
    stars.uniforms.uPR.value = dpr;
    stars.uniforms.uOpacity.value = st.stars * (1 - smooth(0.6, 1.0, Z)) + st.stars * 0.25 * smooth(1.5, 2, Z);
    stars.points.visible = stars.uniforms.uOpacity.value > 0.002;

    scene.updateMatrixWorld();
    ctx.camPos.copy(camera.position);
    ctx.globeA = globeA;
    ctx.europeA = europeA;
    ctx.cityA = cityA;
    placeLabels(ctx, !covered);

    renderer.render(scene, camera);

    if (!ready) {
      ready = true;
      onReady?.();
    }

    /* nakon učitavanja grada: prevedi i pošalji novu geometriju dok je posjetitelj još na vrhu */
    if (warmPending && !warming && !forcedDt) {
      warmPending = false;
      warming = true;
      const idle = window.requestIdleCallback || ((fn) => setTimeout(fn, 60));
      idle(() => prewarm().finally(() => { warming = false; }), { timeout: 1200 });
    }

    /* upravitelj kvalitete: niži DPR ako je sporo */
    if (!forcedDt) {
      frameEMA = frameEMA * 0.95 + dt * 1000 * 0.05;
      if (frameEMA > 24 && dpr > 1) {
        if (++slowFrames > 90) {
          dpr = Math.max(1, dpr - 0.25);
          slowFrames = 0;
          frameEMA = 16;
          resize(true);
        }
      } else slowFrames = 0;
    }
  }

  function loop(now) {
    raf = requestAnimationFrame(loop);
    if (!running || document.hidden || window.__zaecFreeze) {
      last = now;
      return;
    }
    frame(now);
  }

  /* ── životni ciklus ── */
  const ro = new ResizeObserver(() => resize());
  ro.observe(canvas);
  const bodyRO = new ResizeObserver(() => measure());
  bodyRO.observe(document.body);
  const onVis = () => { last = performance.now(); };
  document.addEventListener('visibilitychange', onVis);
  const onLost = (e) => {
    e.preventDefault();
    running = false;
    root.classList.add('webgl-lost');
  };
  canvas.addEventListener('webglcontextlost', onLost);

  resize(true);
  rig.smooth = rig.target = progressAt(window.scrollY);
  stateAt(rig.smooth, st);
  // prvo priprema (iza postera), zatim petlja; ako preglednik oklijeva, kreni najkasnije za 2,5 s
  let started = false;
  const start = () => { if (started) return; started = true; running = true; last = performance.now(); raf = requestAnimationFrame(loop); };
  Promise.race([prewarm(), new Promise((r) => setTimeout(r, 2500))]).finally(start);

  return {
    lite,
    refresh: () => measure(),
    setGates(next) {
      gates = next.slice();
      badFrac = gates.filter((g) => !g).length / gates.length;
      flow.setStates(gates);
    },
    setFocusGate(i) { focusGate = i; },
    setLayerHover(i) { layerHover = i; },
    layerCount: LAYER_DEFS.length,
    /** za testiranje kad je RAF pauziran: n sličica po 1/60 s */
    debugStep(n = 1) {
      for (let i = 0; i < n; i++) frame(performance.now(), 1 / 60);
      return this.debugCam();
    },
    debugCam() {
      return { progress: +rig.smooth.toFixed(3), chapter: lastChapter, Z: +st.Z.toFixed(3), cam: camera.position.toArray().map((v) => +v.toFixed(2)), target: [st.tx, st.ty, st.tz].map((v) => +v.toFixed(2)), anchors: anchors.map((a) => `${a.id}@${Math.round(a.y)}`), dpr, lite, lines: morph.count, cityLoaded: city.isLoaded(), night: +sunState.night.toFixed(2) };
    },
    stats: () => flow.stats(),
    debugState: () => ({ ...st }),
    debug: { camera, scene, globe, europe, city, renderer, beam },
    /** privremeno nadjačaj stanje (podešavanje kadrova u pregledniku) */
    debugOverride(o) { override = o; return this.debugStep(1); },
    dispose() {
      cancelAnimationFrame(raf);
      running = false;
      ro.disconnect();
      bodyRO.disconnect();
      document.removeEventListener('visibilitychange', onVis);
      canvas.removeEventListener('webglcontextlost', onLost);
      window.removeEventListener('pointermove', onPointer);
      [globe, network, europe, city, morph, layers, flow, beam, beacon].forEach((m) => m.dispose());
      stars.geometry.dispose();
      sunGlow.geometry.dispose(); sunGlow.material.dispose();
      stars.material.dispose();
      renderer.dispose();
    },
  };
}
