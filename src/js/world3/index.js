// ZAEC kino-uvod: jedan renderer, jedan svijet, scroll kao dirigent.
// Svijet → Europa → Hrvatska → Osijek → konkatedrala → web → put posjetitelja → slojevi → mreža.
import * as THREE from 'three';
import geo from './data/geo.json';
import { createGlobe } from './globe.js';
import { createEurope } from './europe.js';
import { createCity } from './city.js';
import { createMorph, createLayers, LAYER_DEFS } from './wire.js';
import { createFlow } from './flow.js';
import { GATES } from './gates.js';
import { FRAMES, KEYS, frameState } from './keyframes.js';
import { clamp, lerp, smooth, damp, mapScale, GLOBE_R, DEG, glowPoints, seeded } from './lib.js';

export function createWorld3({ canvas, labelsRoot, onReady, onChapter, onFrame }) {
  const root = document.documentElement;
  const reduceMQ = matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const lite = !finePointer || innerWidth < 760 || (navigator.hardwareConcurrency || 8) <= 4;

  /* ── renderer ── */
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: !lite, alpha: false, powerPreference: 'high-performance', stencil: false });
  renderer.setClearColor('#04060c', 1);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  const maxDpr = lite ? 1.35 : 1.75;
  let dpr = Math.min(window.devicePixelRatio || 1, maxDpr);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 6000);

  scene.add(new THREE.HemisphereLight('#8ea3ff', '#0a0e1a', 0.6));
  const key = new THREE.DirectionalLight('#dde5ff', 1.45);
  key.position.set(-40, 60, 34);
  scene.add(key);
  const rim = new THREE.DirectionalLight('#ff9d66', 0.55);
  rim.position.set(50, 18, -40);
  scene.add(rim);

  /* ── pozornice ── */
  const globe = createGlobe({ geo, lite });
  const europe = createEurope({ geo, lite });
  const city = createCity({ lite });
  const morph = createMorph(city.cathGeo);
  const layers = createLayers();
  const flow = createFlow({ lite });
  scene.add(globe.group, europe.group, city.group, morph.object, layers.group, flow.group);

  // zvjezdana prašina oko kamere (dubina u otvaranju)
  const rand = seeded(99);
  const stars = glowPoints({ count: lite ? 380 : 720, color: '#7f95d6', core: '#dfe6ff', size: 1.4, depthTest: false });
  for (let i = 0; i < stars.alpha.length; i++) {
    const u = rand() * 2 - 1, th = rand() * Math.PI * 2, r = 700 + rand() * 300;
    const q = Math.sqrt(1 - u * u);
    stars.pos.set([Math.cos(th) * q * r, u * r, Math.sin(th) * q * r], i * 3);
    stars.alpha[i] = 0.12 + rand() * 0.45;
    stars.size[i] = 0.5 + rand() * rand() * 2.2;
  }
  stars.points.renderOrder = -10;
  scene.add(stars.points);

  /* ── sidra i stanje ── */
  let anchors = [];
  let states = [];
  let covers = [];
  let mobile = false;
  let vw = 0, vh = 0;
  const st = { ...frameState('hero', false) };
  const rig = { target: 0, smooth: 0 };
  let lastChapter = '';

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
    states = anchors.map((a) => frameState(a.id, mobile));
    flow.setLayout(mobile);
    labelsRoot?.classList.toggle('is-portrait', mobile);
    covers = [...document.querySelectorAll('[data-cover]')].map((el) => {
      const r = el.getBoundingClientRect();
      return [r.top + sy, r.bottom + sy];
    });
    // spoji susjedne pokrivače
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
    if (states.length < 2) {
      Object.assign(out, states[0]);
      return out;
    }
    const i = Math.min(states.length - 2, Math.max(0, Math.floor(f)));
    let t = clamp(f - i);
    t = reduceMQ.matches ? (t < 0.5 ? 0 : 1) : smooth(0.08, 0.92, t);
    const A = states[i], B = states[i + 1];
    for (const k of KEYS) out[k] = lerp(A[k], B[k], t);
    // meta kamere živi u jedinicama karte kako bi zoom bio kontinuiran
    const sa = mapScale(A.Z), sb = mapScale(B.Z), s = mapScale(out.Z);
    let tt = t;
    if (B.ease === 'dive' && sb !== sa) {
      const k = Math.abs(Math.log(sb / sa)) + 3;
      tt = (1 - Math.exp(-k * t)) / (1 - Math.exp(-k));
    }
    out.tx = lerp(A.tx / sa, B.tx / sb, tt) * s;
    out.ty = lerp(A.ty / sa, B.ty / sb, tt) * s;
    out.tz = lerp(A.tz / sa, B.tz / sb, tt) * s;
    out.chapter = t < 0.5 ? anchors[i].id : anchors[i + 1].id;
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
  const CITY_PTS = { cath: [-4.05, 14.2, 0], drava: [-30, 0.6, -23.5], hotel: [-16.5, 8.4, -13.5] };
  const cityIdx = (name) => geo.cities.findIndex((c) => c[0] === name);

  function labelWorld(key, ctx) {
    const [kind, idx] = key.split('-');
    const i = +idx;
    switch (kind) {
      case 'osijek':
      case 'you': {
        globe.osijekWorld(v3);
        n3.copy(v3).sub(ctx.globeCenter).normalize();
        const facing = n3.dot(ctx.camPos.clone().sub(v3)) > 0;
        return facing ? (kind === 'you' ? st.labFinale : st.labOsijek) * ctx.globeA : 0;
      }
      case 'city': {
        europe.cityWorld(cityIdx(idx), v3);
        return st.labCities * ctx.europeA;
      }
      case 'cath':
      case 'drava':
      case 'hotel':
        v3.fromArray(CITY_PTS[kind]);
        return st.labCity * ctx.cityA;
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
        const arrive = clamp(st.layers * 8.2 - i);
        const act = layerHover >= 0 ? (layerHover === i ? 1 : 0.0) : 1;
        return st.labLayers * st.layersA * arrive * act;
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
        L.el.classList.toggle('is-on', o > 0.5);
        L.o = o;
      }
    }
  }

  /* ── petlja ── */
  let raf = 0;
  let last = performance.now();
  let time = 0;
  let idleAngle = 0;
  let ready = false;
  let running = true;
  let slowFrames = 0;
  let frameEMA = 16;
  let labelsHidden = false;
  let override = null;
  const ctx = { globeCenter: new THREE.Vector3(), camPos: new THREE.Vector3(), globeA: 0, europeA: 0, cityA: 0 };

  function frame(now, forcedDt) {
    const dt = forcedDt ?? Math.min(0.05, Math.max(0.001, (now - last) / 1000));
    last = now;
    const reduce = reduceMQ.matches;
    if (!reduce) time += dt;

    const y = window.scrollY;
    rig.target = progressAt(y);
    // skok (sidro, gumb, tipkovnica): kamera ne leti kroz sva poglavlja — najviše ~1 kadar animacije
    if (Math.abs(rig.target - rig.smooth) > 1.1) rig.smooth = rig.target - Math.sign(rig.target - rig.smooth) * 1.1;
    rig.smooth = reduce ? rig.target : damp(rig.smooth, rig.target, 4.4, dt);
    if (Math.abs(rig.smooth - rig.target) < 1e-4) rig.smooth = rig.target;
    stateAt(rig.smooth, st);
    if (override) Object.assign(st, override);
    // motiv mora stati u širinu kadra (uski i visoki ekrani)
    if (st.fit > 0) st.dist = Math.max(st.dist, st.fit / (2 * Math.tan((st.fov * DEG) / 2) * (vw / vh) * 0.92));
    const exact = stateAt(rig.target, {});
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
    const az = (st.az + ptr.sx * 3.2) * DEG;
    const el = (st.el - ptr.sy * 1.8) * DEG;
    camera.position.set(st.tx + st.dist * Math.cos(el) * Math.sin(az), st.ty + st.dist * Math.sin(el), st.tz + st.dist * Math.cos(el) * Math.cos(az));
    camera.lookAt(st.tx, st.ty, st.tz);
    if (Math.abs(camera.fov - st.fov) > 0.01) camera.fov = st.fov;
    camera.near = st.Z > 1.5 ? 0.5 : 0.1;
    camera.far = st.Z > 1.5 ? 1200 : 6000;
    camera.setViewOffset(vw, vh, -st.sx * vw, st.sy * vh, vw, vh);
    camera.updateProjectionMatrix();
    camera.updateMatrixWorld();

    /* globus */
    const Z = st.Z;
    const s = mapScale(Z);
    const gs = GLOBE_R * s;
    globe.group.scale.setScalar(gs);
    globe.group.position.set(0, -gs, 0);
    ctx.globeCenter.set(0, -gs, 0);
    if (st.idle > 0.985 && !reduce) idleAngle += dt * 0.11;
    const wrapped = Math.atan2(Math.sin(idleAngle), Math.cos(idleAngle));
    const globeA = 1 - smooth(0.8, 0.93, Z);
    globe.update({ alpha: globeA, spin: wrapped * st.idle, net: st.net, finale: st.finale, dive: smooth(0.5, 1, Z), time, dt, pr: dpr, reduce });

    /* Europa + Hrvatska */
    const europeA = smooth(0.7, 0.92, Z) * (1 - smooth(1.72, 1.96, Z));
    const cityFade = smooth(1.35, 1.85, Z);
    const sy = Math.min(s, 1);
    europe.group.scale.set(s, sy, s);
    europe.group.position.y = -st.lift * (1 - cityFade * 0.985) * sy * smooth(1.0, 1.25, Z);
    europe.update({ alpha: europeA, lift: st.lift, net: st.net, cityFade, Z, time, dt, pr: dpr, reduce });

    /* Osijek */
    const cityA = smooth(1.62, 1.9, Z);
    city.update({ alpha: cityA, rise: st.rise, dim: st.dim, lines: st.lines, cath: smooth(0.45, 1, st.cath), glow: st.glow, cathSolid: st.cathSolid, time, pr: dpr, reduce });

    /* arhitektura → web, tok, slojevi */
    const bad = badFrac * st.flow;
    morph.update({ morph: st.morph, opacity: st.wire * cityA, time, focus: 0, bad });
    flow.update({ alpha: st.flow, time, dt, pr: dpr, reduce, focusGate });
    const autoLayer = layerHover >= 0 ? layerHover : -1;
    layers.update({ p: st.layers, alpha: st.layersA, hover: autoLayer });

    /* zvijezde prate kameru */
    stars.points.position.copy(camera.position);
    stars.uniforms.uPR.value = dpr;
    stars.uniforms.uOpacity.value = st.stars * (0.55 + 0.45 * (1 - smooth(1.2, 1.8, Z)));

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
  raf = requestAnimationFrame(loop);

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
      return { progress: +rig.smooth.toFixed(3), chapter: lastChapter, Z: +st.Z.toFixed(3), cam: camera.position.toArray().map((v) => +v.toFixed(2)), target: [st.tx, st.ty, st.tz].map((v) => +v.toFixed(2)), anchors: anchors.map((a) => `${a.id}@${Math.round(a.y)}`), dpr, lite };
    },
    stats: () => flow.stats(),
    debugState: () => ({ ...st }),
    debug: { camera, scene, globe, europe, city, renderer },
    /** privremeno nadjačaj stanje (podešavanje kadrova u pregledniku) */
    debugOverride(o) { override = o; return this.debugStep(1); },
    debugStates: () => states.map((x, i) => ({ id: anchors[i].id, labFlow: x.labFlow, labCity: x.labCity, labOsijek: x.labOsijek })),
    dispose() {
      cancelAnimationFrame(raf);
      ro.disconnect();
      bodyRO.disconnect();
      document.removeEventListener('visibilitychange', onVis);
      canvas.removeEventListener('webglcontextlost', onLost);
      window.removeEventListener('pointermove', onPointer);
      [globe, europe, city, morph, layers, flow].forEach((m) => m.dispose());
      stars.geometry.dispose();
      stars.material.dispose();
      renderer.dispose();
    },
  };
}
