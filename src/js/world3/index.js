// ZAEC kino-uvod: jedan renderer, jedan svijet, scroll kao dirigent.
// Orbita → Europa → Hrvatska → Slavonija → Osijek → konkatedrala → crtež → mreža → web → put do upita → slojevi → mreža.
//
// Višerazinska arhitektura: karta (Z = 1) je referentni sustav; globus, karta i grad (u metrima) skaliraju se
// s mapScale(Z) oko ishodišta u konkatedrali, pa kamera putuje kontinuirano kroz šest redova veličine bez
// gubitka preciznosti (sve je blizu ishodišta). Dva prijelaza mjerila skrivaju oblaci (orbita → karta,
// kontinent → regija); svjetla naselja su stvarna ulična svjetla grada i ostaju na mjestu dok grad izrasta.
import * as THREE from 'three';
import geo from './data/geo.json';
import { createGlobe } from './globe.js';
import { createNetwork } from './network.js';
import { createClouds } from './clouds.js';
import { createEurope } from './europe.js';
import { createCity } from './city.js';
import { createMorph, createLayers, LAYER_DEFS } from './wire.js';
import { createFlow } from './flow.js';
import { GATES } from './gates.js';
import { FRAMES, KEYS, frameState } from './keyframes.js';
import { clamp, lerp, smooth, damp, mapScale, GLOBE_R, DEG, glowPoints, seeded, Z_CITY, CITY_KX, CITY_KZ } from './lib.js';

const bump = (z, c, w) => 1 - smooth(0, w, Math.abs(z - c));

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

  scene.add(new THREE.HemisphereLight('#8ea3ff', '#0a0e1a', 0.6));
  const key = new THREE.DirectionalLight('#dde5ff', 1.45);
  key.position.set(-40, 60, 34);
  scene.add(key);
  const rim = new THREE.DirectionalLight('#ff9d66', 0.55);
  rim.position.set(50, 18, -40);
  scene.add(rim);

  /* ── pozornice ── */
  const globe = createGlobe({ geo, lite, landUrl: assets.land });
  const network = createNetwork({ geo, lite });
  globe.spin.add(network.group);
  const clouds = createClouds({ lite });
  const europe = createEurope({ geo, lite });
  const morph = createMorph(null, { max: lite ? 3200 : 6500 });
  // rubovi konkatedrale (metri) → svjetske jedinice na mjerilu grada
  const kCity = mapScale(Z_CITY);
  const toWorldLines = (g) => {
    const out = g.clone();
    out.scale(kCity * CITY_KX, kCity * CITY_KZ, kCity * CITY_KZ);
    return out;
  };
  const city = createCity({
    lite,
    dataUrl: assets.city,
    modelUrl: assets.model,
    onLines: (g) => { const w = toWorldLines(g); morph.setSource(w); w.dispose(); },
  });
  const layers = createLayers();
  const flow = createFlow({ lite });
  scene.add(globe.group, europe.group, city.group, morph.object, layers.group, flow.group, clouds.object);

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
  stars.points.renderOrder = -10;
  scene.add(stars.points);
  // sunce iza ruba planeta (gore desno): samo mekani sjaj, bez "sci-fi" bljeska
  const sunGlow = glowPoints({ count: 2, color: '#9fc0ff', core: '#ffffff', size: 1, depthTest: true, additive: true });
  sunGlow.size[0] = 260; sunGlow.size[1] = 40;
  sunGlow.alpha[0] = 0.32; sunGlow.alpha[1] = 0.9;
  sunGlow.uniforms.uMax.value = 520;
  sunGlow.points.renderOrder = -5;
  scene.add(sunGlow.points);

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
    const tablet = mobile && innerWidth >= 600;
    states = anchors.map((a) => frameState(a.id, mobile, tablet));
    flow.setLayout(mobile);
    labelsRoot?.classList.toggle('is-portrait', mobile);
    covers = [...document.querySelectorAll('[data-cover]')].map((el) => {
      const r = el.getBoundingClientRect();
      return [r.top + sy, r.bottom + sy];
    });
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
      // oznake na karti nestaju u oblaku zajedno sa slikom
      let o = visible ? labelWorld(L.key, ctx) * (1 - (ctx.cloud || 0)) : 0;
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
  let osmShown = false;
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
    const az = (st.az + ptr.sx * 2.6) * DEG;
    const el = (st.el - ptr.sy * 1.5) * DEG;
    camera.position.set(st.tx + st.dist * Math.cos(el) * Math.sin(az), st.ty + st.dist * Math.sin(el), st.tz + st.dist * Math.cos(el) * Math.cos(az));
    camera.up.set(0, 1, 0);
    camera.lookAt(st.tx, st.ty, st.tz);
    if (st.roll) camera.rotateZ(st.roll * DEG);
    if (Math.abs(camera.fov - st.fov) > 0.01) camera.fov = st.fov;
    camera.near = st.Z > 1.5 ? 0.5 : 0.05;
    camera.far = st.Z > 1.5 ? 2400 : 6000;
    camera.setViewOffset(vw, vh, -st.sx * vw, st.sy * vh, vw, vh);
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
    const globeA = 1 - smooth(0.82, 0.92, Z);
    globe.update({ alpha: globeA, spin: wrapped * st.idle, net: st.net, finale: st.finale, dive: smooth(0.45, 0.9, Z), time, pr: dpr, reduce });
    globe.group.updateMatrixWorld();
    network.update({ alpha: globeA * (0.55 + 0.45 * st.net), time, conv: st.conv, pr: dpr, camera, frame: globe.spin });

    /* Europa + Hrvatska + Slavonija */
    const europeA = smooth(0.8, 0.9, Z) * (1 - smooth(1.8, 1.97, Z));
    const cityFade = smooth(1.06, 1.4, Z);
    const sy = Math.min(s, 1);
    europe.group.scale.set(s, sy, s);
    europe.group.position.y = -st.lift * (1 - cityFade * 0.985) * sy * smooth(1.0, 1.25, Z);
    europe.update({ alpha: europeA, lift: st.lift, net: st.net, cityFade, Z, time, dt, pr: dpr, reduce });

    /* Osijek: stvarno mjerilo (metri) vezano uz kartu */
    city.group.scale.set(s * CITY_KX, s * CITY_KZ, s * CITY_KZ);
    const cityA = smooth(1.6, 1.86, Z);
    const lamps = smooth(1.1, 1.34, Z);
    city.update({ alpha: cityA, lamps, rise: st.rise, dim: st.dim, lines: st.lines, cath: smooth(0.45, 1, st.cath), glow: st.glow, cathSolid: st.cathSolid, time, pr: dpr, reduce });
    const osm = lamps > 0.15;
    if (osm !== osmShown) { osmShown = osm; root.classList.toggle('show-osm', osm); }

    /* oblaci: orbita → karta i kontinent → regija */
    const c1 = bump(Z, 0.865, 0.07), c2 = bump(Z, 1.3, 0.085) * 0.62;
    const zoom1 = clamp((Z - 0.795) / 0.14), zoom2 = clamp((Z - 1.215) / 0.17);
    clouds.update({ amount: Math.max(c1, c2), zoom: c1 >= c2 ? zoom1 : zoom2, time, aspect: vw / Math.max(1, vh), seed: c1 >= c2 ? 1.3 : 7.9 });

    /* arhitektura → crtež → mreža → web, tok, slojevi */
    const bad = badFrac * st.flow;
    morph.update({ morph: st.morph, opacity: st.wire * cityA, time, bad });
    flow.update({ alpha: st.flow, time, dt, pr: dpr, reduce, focusGate });
    layers.update({ p: st.layers, alpha: st.layersA, assemble: st.assemble, active: st.assemble > 0.5 ? -1 : layerHover, dt, reduce });

    /* sunce: daleko u smjeru svjetla, prati kameru */
    for (let k = 0; k < 2; k++) sunGlow.pos.set([camera.position.x + globe.sun.x * 900, camera.position.y + globe.sun.y * 900, camera.position.z + globe.sun.z * 900], k * 3);
    sunGlow.geometry.attributes.position.needsUpdate = true;
    sunGlow.uniforms.uPR.value = dpr;
    sunGlow.uniforms.uOpacity.value = (1 - smooth(0.25, 0.8, Z)) * (st.finale > 0.5 ? 0.7 : 1);

    /* zvijezde prate kameru */
    stars.points.position.copy(camera.position);
    stars.uniforms.uPR.value = dpr;
    stars.uniforms.uOpacity.value = st.stars * (1 - smooth(0.6, 1.0, Z)) + st.stars * 0.25 * smooth(1.5, 2, Z);

    scene.updateMatrixWorld();
    ctx.camPos.copy(camera.position);
    ctx.globeA = globeA;
    ctx.europeA = europeA;
    ctx.cityA = cityA;
    ctx.cloud = Math.max(c1, c2);
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
      return { progress: +rig.smooth.toFixed(3), chapter: lastChapter, Z: +st.Z.toFixed(3), cam: camera.position.toArray().map((v) => +v.toFixed(2)), target: [st.tx, st.ty, st.tz].map((v) => +v.toFixed(2)), anchors: anchors.map((a) => `${a.id}@${Math.round(a.y)}`), dpr, lite, lines: morph.count, cityLoaded: city.isLoaded() };
    },
    stats: () => flow.stats(),
    debugState: () => ({ ...st }),
    debug: { camera, scene, globe, europe, city, renderer },
    /** privremeno nadjačaj stanje (podešavanje kadrova u pregledniku) */
    debugOverride(o) { override = o; return this.debugStep(1); },
    dispose() {
      cancelAnimationFrame(raf);
      ro.disconnect();
      bodyRO.disconnect();
      document.removeEventListener('visibilitychange', onVis);
      canvas.removeEventListener('webglcontextlost', onLost);
      window.removeEventListener('pointermove', onPointer);
      [globe, network, clouds, europe, city, morph, layers, flow].forEach((m) => m.dispose());
      stars.geometry.dispose();
      sunGlow.geometry.dispose(); sunGlow.material.dispose();
      stars.material.dispose();
      renderer.dispose();
    },
  };
}
