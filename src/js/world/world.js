// ZAEC svijet — jedan trajni Three.js svijet kojim dirigira native scroll.
import * as THREE from 'three';
import { gsap } from 'gsap';
import { rng, lerp, clamp, damp } from './geo.js';
import { worldMaterial, edgeMaterial, U, textTexture } from './materials.js';
import { buildIsland } from './island.js';
import { buildTown, POS } from './town.js';
import { buildTradeProps } from './trades.js';
import { Leads } from './leads.js';
import { buildSky, buildStars, buildClouds, buildIslets } from './sky.js';
import { CHAPTERS } from './chapters.js';
import { PAL } from './palette.js';

const ease = (t) => t * t * (3 - 2 * t);

function prep(ch) {
  const col = (h) => new THREE.Color(h);
  const cam = (c) => c && { pos: new THREE.Vector3(...c.pos), target: new THREE.Vector3(...c.target), fov: c.fov };
  return {
    skyTop: col(ch.sky[0]), skyBot: col(ch.sky[1]), glow: col(ch.glow[0]), glowAmt: ch.glow[1],
    fog: col(ch.fog[0]), fogNear: ch.fog[1], fogFar: ch.fog[2],
    sunCol: col(ch.sun[0]), sunInt: ch.sun[1], sunDir: new THREE.Vector3(...ch.sun[2]).normalize(),
    hemiSky: col(ch.hemi[0]), hemiGround: col(ch.hemi[1]), hemiInt: ch.hemi[2],
    night: ch.night, bp: ch.bp, explode: ch.explode, spin: ch.spin, capture: ch.capture, rate: ch.rate,
    dimW: ch.dimW, dimC: ch.dimC, flags: ch.flags, exposure: ch.exposure,
    cam: cam(ch.cam), m: cam(ch.m),
  };
}

export function createWorld({ canvas, labelsRoot, onArrive = () => {}, onChapter = () => {}, onReady = () => {}, capture = false }) {
  const reduceMQ = matchMedia('(prefers-reduced-motion: reduce)');
  let reduce = reduceMQ.matches;
  const coarse = matchMedia('(pointer: coarse)').matches;
  let vw = innerWidth, vh = innerHeight;
  const isMobile = () => vw < 760;
  const lite = coarse || innerWidth < 760 || (navigator.hardwareConcurrency || 8) <= 4;

  /* ───────── renderer ───────── */
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: capture || !lite || devicePixelRatio < 2, alpha: capture, preserveDrawingBuffer: capture, powerPreference: 'high-performance' });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.toneMappingExposure = 1;
  let dprCap = lite ? 1.5 : 1.75;
  let dpr = Math.min(devicePixelRatio || 1, dprCap);
  renderer.setPixelRatio(dpr);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog('#efe9df', 40, 120);
  const camera = new THREE.PerspectiveCamera(34, 1, 0.5, 900);

  /* ───────── svjetla ───────── */
  const hemi = new THREE.HemisphereLight('#fff8ec', '#9b8f76', 1.2);
  const sun = new THREE.DirectionalLight('#fff1da', 2.6);
  sun.castShadow = true;
  sun.shadow.mapSize.set(lite ? 1024 : 2048, lite ? 1024 : 2048);
  Object.assign(sun.shadow.camera, { left: -17, right: 17, top: 17, bottom: -17, near: 1, far: 90 });
  sun.shadow.bias = -0.0006;
  sun.shadow.normalBias = 0.03;
  sun.shadow.radius = 3;
  const lamp = new THREE.PointLight('#ffb547', 0, 11, 1.6);
  lamp.position.set(POS.Wdoor.x, 2.2, POS.Wdoor.z + 0.8);
  scene.add(hemi, sun, sun.target);

  /* ───────── svijet ───────── */
  const rand = rng(1984);
  const mat = worldMaterial();
  const winMat = worldMaterial({ emissive: PAL.amber, emissiveIntensity: 0, roughness: 0.4 });

  const worldRoot = new THREE.Group();
  worldRoot.name = 'world';
  scene.add(worldRoot);

  const island = buildIsland(rand, mat);
  island.layers.forEach((l) => worldRoot.add(l));
  const L1 = island.layers[0];

  const town = buildTown(rand, { lite, river: island.river });
  town.staticMesh.material = mat;
  town.staticMesh.castShadow = true;
  town.staticMesh.receiveShadow = true;
  L1.add(town.staticMesh);
  const windows = new THREE.Mesh(town.windowsGeo, winMat);
  L1.add(windows);
  L1.add(town.W, town.C, town.lens, lamp);
  town.cars.forEach((c) => L1.add(c.mesh));
  town.flags.forEach((f) => L1.add(f));

  const props = buildTradeProps(mat);
  props.forEach((p) => town.W.add(p));

  const leads = new Leads({
    routes: town.routes,
    max: lite ? 26 : 38,
    pixelRatio: dpr,
    onArrive: (target) => {
      if (target === 'W') {
        gsap.fromTo(town.W.scale, { y: 0.94, x: 1.03, z: 1.03 }, { y: 1, x: 1, z: 1, duration: 0.7, ease: 'elastic.out(1.1, 0.45)', overwrite: true });
      }
      onArrive(target);
    },
  });
  L1.add(leads.group);

  const sky = buildSky();
  scene.add(sky.dome);
  const stars = buildStars(lite ? 380 : 700);
  stars.uniforms.uPR.value = dpr;
  scene.add(stars.points);
  const cloudMat = worldMaterial({ roughness: 1, emissive: '#ffffff', emissiveIntensity: 0.5 });
  const clouds = buildClouds(rand, cloudMat, lite ? 5 : 9);
  clouds.forEach((c) => scene.add(c));
  const islets = buildIslets(rand, mat);
  islets.forEach((i) => scene.add(i));

  /* nacrt: rubovi + mreža (lijeno) */
  const edgeMat = edgeMaterial();
  let edgesBuilt = false;
  function buildEdges() {
    if (edgesBuilt) return;
    edgesBuilt = true;
    const targets = [town.staticMesh, town.W.children[0], town.C.children[0], ...island.layers.map((l) => l.children[0])];
    targets.forEach((m) => {
      const e = new THREE.LineSegments(new THREE.EdgesGeometry(m.geometry, 28), edgeMat);
      e.renderOrder = 3;
      e.raycast = () => {};
      m.add(e);
    });
  }
  const grid = new THREE.GridHelper(120, 60, '#8aa2ff', '#4766e6');
  grid.material.transparent = true;
  grid.material.opacity = 0;
  grid.material.depthWrite = false;
  grid.position.y = -15;
  grid.visible = false;
  scene.add(grid);

  /* ───────── poglavlja i dirigent ───────── */
  const sections = [...document.querySelectorAll('[data-cam]')];
  const ids = sections.map((s) => s.dataset.cam);
  const data = ids.map((id) => prep(CHAPTERS[id] || CHAPTERS.hero));
  let anchors = [];
  let widthAtMeasure = innerWidth;

  function measure() {
    const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    anchors = sections.map((el, i) => {
      if (i === 0) return 0;
      const r = el.getBoundingClientRect();
      const top = r.top + scrollY;
      return clamp(top + r.height * 0.5 - innerHeight * 0.5, 0, max);
    });
    for (let i = 1; i < anchors.length; i++) anchors[i] = Math.max(anchors[i], anchors[i - 1] + 1);
    widthAtMeasure = innerWidth;
  }
  function progressAt(y) {
    if (y <= anchors[0]) return 0;
    for (let i = 0; i < anchors.length - 1; i++) {
      if (y <= anchors[i + 1]) return i + clamp((y - anchors[i]) / Math.max(1, anchors[i + 1] - anchors[i]), 0, 1);
    }
    return anchors.length - 1;
  }

  const S = { exact: 0, smooth: 0, chapter: -1 };
  let camOverride = null;
  let forced = null;
  const cur = prep(CHAPTERS.hero);
  const camPos = new THREE.Vector3(), camTarget = new THREE.Vector3();
  let camFov = 34;

  function resolve(p) {
    const n = data.length - 1;
    const i = clamp(Math.floor(p), 0, n);
    const j = Math.min(n, i + 1);
    const t = ease(clamp(p - i, 0, 1));
    const a = data[i], b = data[j];
    cur.skyTop.lerpColors(a.skyTop, b.skyTop, t);
    cur.skyBot.lerpColors(a.skyBot, b.skyBot, t);
    cur.glow.lerpColors(a.glow, b.glow, t);
    cur.fog.lerpColors(a.fog, b.fog, t);
    cur.sunCol.lerpColors(a.sunCol, b.sunCol, t);
    cur.hemiSky.lerpColors(a.hemiSky, b.hemiSky, t);
    cur.hemiGround.lerpColors(a.hemiGround, b.hemiGround, t);
    cur.sunDir.lerpVectors(a.sunDir, b.sunDir, t).normalize();
    for (const k of ['glowAmt', 'fogNear', 'fogFar', 'sunInt', 'hemiInt', 'night', 'bp', 'explode', 'spin', 'capture', 'rate', 'dimW', 'dimC', 'flags', 'exposure']) cur[k] = lerp(a[k], b[k], t);
    const mob = isMobile();
    const ca = (mob && a.m) || a.cam, cb = (mob && b.m) || b.cam;
    camPos.lerpVectors(ca.pos, cb.pos, t);
    camTarget.lerpVectors(ca.target, cb.target, t);
    camFov = lerp(ca.fov, cb.fov, t);
    // visoki ekrani: odmakni kameru
    const tall = mob ? 0 : Math.max(0, vh / vw - 1.2);
    if (tall > 0) {
      const dir = camPos.clone().sub(camTarget);
      camPos.copy(camTarget).addScaledVector(dir, 1 + tall * 0.18);
    }
  }

  function resolveFixed(d) {
    for (const k of Object.keys(cur)) {
      if (k === 'cam' || k === 'm') continue;
      if (cur[k] && cur[k].copy) cur[k].copy(d[k]); else cur[k] = d[k];
    }
    const c = (isMobile() && d.m) || d.cam;
    camPos.copy(c.pos); camTarget.copy(c.target); camFov = c.fov;
  }

  /* ───────── primjena stanja ───────── */
  const layerOffsets = [1.5, 0, -1.6, -3.3, -5.1];
  function apply() {
    sky.uniforms.uTop.value.copy(cur.skyTop);
    sky.uniforms.uBottom.value.copy(cur.skyBot);
    sky.uniforms.uGlow.value.copy(cur.glow);
    sky.uniforms.uGlowAmt.value = cur.glowAmt;
    scene.fog.color.copy(cur.fog);
    scene.fog.near = cur.fogNear;
    scene.fog.far = cur.fogFar;
    sun.color.copy(cur.sunCol);
    sun.intensity = cur.sunInt;
    sun.position.copy(cur.sunDir).multiplyScalar(45);
    hemi.color.copy(cur.hemiSky);
    hemi.groundColor.copy(cur.hemiGround);
    hemi.intensity = cur.hemiInt;
    renderer.toneMappingExposure = cur.exposure;

    const night = cur.night;
    winMat.emissiveIntensity = night * 2.1;
    stars.uniforms.uOpacity.value = night;
    lamp.intensity = night * 9;
    town.W.userData.signMat.emissiveIntensity = 0.2 + night * 0.9 - cur.dimW * 0.2;
    town.lens.userData.mat.emissiveIntensity = 0.5 + night * 1.2;
    leads.uniforms.uBoost.value = 1 + night * 0.35;

    U.uBlueprint.value = cur.bp;
    if (cur.bp > 0.001 && !edgesBuilt) buildEdges();
    edgeMat.opacity = cur.bp * 0.8;
    edgeMat.visible = cur.bp > 0.01;
    grid.visible = cur.bp > 0.01;
    grid.material.opacity = cur.bp * 0.35;
    cloudMat.emissiveIntensity = 0.5 * (1 - night) * (1 - cur.bp) + 0.03;

    island.layers.forEach((l, i) => (l.position.y = layerOffsets[i] * cur.explode));
    worldRoot.rotation.y = cur.spin;
    town.W.userData.desat.value = cur.dimW;
    town.C.userData.desat.value = cur.dimC;

    town.flags.forEach((f, i) => {
      const s = clamp(cur.flags * 1.6 - i * 0.12, 0, 1);
      f.scale.setScalar(Math.max(0.001, ease(s) * 1.6));
      f.visible = s > 0.002;
    });

    camera.fov = camFov;
    camera.aspect = vw / vh;
    camera.updateProjectionMatrix();
  }

  /* ───────── pokazivač (paralaksa + klik) ───────── */
  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
  const onPointerMove = (e) => {
    if (e.pointerType === 'touch') return;
    pointer.tx = (e.clientX / innerWidth) * 2 - 1;
    pointer.ty = (e.clientY / innerHeight) * 2 - 1;
  };
  addEventListener('pointermove', onPointerMove, { passive: true });

  const ray = new THREE.Raycaster();
  const ndc = new THREE.Vector2();
  const groundMesh = island.layers[0].children[0];
  const onClick = (e) => {
    if (e.target !== canvas) return;
    if (cur.bp > 0.2 || cur.dimW > 0.5) return;
    ndc.set((e.clientX / vw) * 2 - 1, -(e.clientY / vh) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    const hit = ray.intersectObjects([groundMesh, town.staticMesh], false)[0];
    if (!hit) return;
    const local = L1.worldToLocal(hit.point.clone());
    leads.spawnFrom(local, POS.Wdoor);
    leads.ping(local, false);
  };
  canvas.addEventListener('click', onClick);

  /* ───────── djelatnosti ───────── */
  const signTex = new Map();
  let trade = -1;
  function setTrade(i, sign) {
    if (i === trade) return;
    const prev = props[trade];
    trade = i;
    const next = props[i];
    const quick = reduce;
    if (prev) {
      gsap.to(prev.scale, { x: 0.001, y: 0.001, z: 0.001, duration: quick ? 0 : 0.35, ease: 'power3.in', overwrite: true, onComplete: () => (prev.visible = false) });
    }
    if (next) {
      next.visible = true;
      gsap.fromTo(next.scale, { x: 0.001, y: 0.001, z: 0.001 }, { x: 1, y: 1, z: 1, duration: quick ? 0 : 0.9, delay: quick ? 0 : 0.25, ease: 'back.out(1.6)', overwrite: true });
    }
    if (sign) {
      if (!signTex.has(sign)) signTex.set(sign, textTexture(sign, { w: 1024, h: 192, size: 104, bg: '#141414', accent: PAL.signal }));
      const m = town.W.userData.signMat;
      m.map = m.emissiveMap = signTex.get(sign);
      m.needsUpdate = true;
    }
    if (!quick) gsap.fromTo(town.W.scale, { y: 0.9 }, { y: 1, duration: 0.8, ease: 'elastic.out(1, 0.4)' });
  }

  /* ───────── oznake (DOM) ───────── */
  const labelEls = labelsRoot ? [...labelsRoot.querySelectorAll('[data-label]')] : [];
  const LAYER_Y = [-0.2, -1.55, -3.0, -4.6, -6.6];
  const labelAnchor = {
    W: () => tmp.set(POS.W.x, 5.1, POS.W.z),
    C: () => tmp.set(POS.C.x, 4.0, POS.C.z),
    lens: () => tmp.set(POS.lens.x, POS.lens.y + 1.4, POS.lens.z),
  };
  const tmp = new THREE.Vector3();
  const right = new THREE.Vector3();
  const LAYER_R = [13.9, 13.4, 11.7, 9.3, 6.2];
  function updateLabels() {
    if (!labelEls.length) return;
    const id = ids[Math.round(S.smooth)] || '';
    right.setFromMatrixColumn(camera.matrixWorld, 0).setY(0).normalize();
    for (const el of labelEls) {
      const key = el.dataset.label;
      const on = el.dataset.when.split(',').includes(id);
      if (on !== el._on) { el._on = on; el.classList.toggle('is-on', on); }
      if (!on) continue;
      if (key.startsWith('L')) {
        const i = +key.slice(1) - 1;
        tmp.copy(right).multiplyScalar(LAYER_R[i] * 0.98);
        tmp.y = LAYER_Y[i] + island.layers[i].position.y;
      } else {
        labelAnchor[key]();
        L1.localToWorld(tmp);
      }
      tmp.project(camera);
      const x = (tmp.x * 0.5 + 0.5) * vw;
      const y = (-tmp.y * 0.5 + 0.5) * vh;
      el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
    }
  }

  /* ───────── veličina ───────── */
  function resize(force) {
    if (!force && coarse && innerWidth === widthAtMeasure) return;
    vw = canvas.clientWidth || innerWidth;
    vh = canvas.clientHeight || innerHeight;
    renderer.setSize(vw, vh, false);
    camera.aspect = vw / vh;
    camera.updateProjectionMatrix();
    measure();
  }
  const onResize = () => resize(false);
  addEventListener('resize', onResize, { passive: true });
  const ro = new ResizeObserver(() => measure());
  ro.observe(document.body);

  /* ───────── vidljivost (pauza ispod neprozirnih sekcija) ───────── */
  let visible = true;
  const worldSections = [...document.querySelectorAll('[data-world]')];
  const visibleSet = new Set();
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => (en.isIntersecting ? visibleSet.add(en.target) : visibleSet.delete(en.target)));
    visible = visibleSet.size > 0;
  }, { rootMargin: '10% 0px 10% 0px' });
  worldSections.forEach((s) => io.observe(s));
  let hidden = document.hidden;
  const onVis = () => { hidden = document.hidden; last = performance.now(); };
  document.addEventListener('visibilitychange', onVis);
  const onReduce = () => { reduce = reduceMQ.matches; };
  reduceMQ.addEventListener('change', onReduce);

  /* ───────── gubitak konteksta ───────── */
  let lost = false;
  canvas.addEventListener('webglcontextlost', (e) => { e.preventDefault(); lost = true; document.documentElement.classList.add('world-lost'); });
  canvas.addEventListener('webglcontextrestored', () => { lost = false; document.documentElement.classList.remove('world-lost'); });

  /* ───────── petlja ───────── */
  let last = performance.now();
  let raf = 0;
  let time = 0;
  const frameTimes = [];
  let ready = false;
  const carTan = new THREE.Vector3();

  function tick(now) {
    raf = requestAnimationFrame(tick);
    if (hidden || lost) return;
    const dt = Math.min((now - last) / 1000, 1 / 30);
    last = now;
    frame(dt);
  }

  function frame(dt) {
    S.exact = progressAt(scrollY);
    S.smooth = reduce ? S.exact : damp(S.smooth, S.exact, 6.5, dt);
    if (Math.abs(S.smooth - S.exact) < 0.0005) S.smooth = S.exact;
    const ch = Math.round(S.exact);
    if (ch !== S.chapter) { S.chapter = ch; onChapter(ids[ch], ch); }
    if (!visible && ready) return;

    time += dt;
    U.uTime.value = time;
    if (forced) resolveFixed(forced); else resolve(S.smooth);
    if (camOverride) { camPos.fromArray(camOverride.pos); camTarget.fromArray(camOverride.target); camFov = camOverride.fov || camFov; }
    apply();

    // paralaksa
    const pk = reduce ? 0 : 1;
    pointer.x = damp(pointer.x, pointer.tx * pk, 3, dt);
    pointer.y = damp(pointer.y, pointer.ty * pk, 3, dt);
    camera.position.copy(camPos);
    camera.lookAt(camTarget);
    camera.updateMatrixWorld();
    right.setFromMatrixColumn(camera.matrixWorld, 0);
    const up = tmp.setFromMatrixColumn(camera.matrixWorld, 1);
    const amp = 0.55 * (1 - cur.bp * 0.5);
    camera.position.addScaledVector(right, pointer.x * amp).addScaledVector(up, -pointer.y * amp * 0.55);
    camera.lookAt(camTarget);

    // ambijent
    if (!reduce) {
      leads.update(dt, { rate: cur.rate, capture: cur.capture, running: true });
      town.lens.rotation.y += dt * 0.7;
      island.fall.userData.map.offset.y += dt * 1.1;
      clouds.forEach((c) => {
        const u = c.userData;
        u.a += dt * u.speed;
        c.position.set(Math.cos(u.a) * u.r, u.y + Math.sin(time * 0.4 + u.bob) * 0.25, Math.sin(u.a) * u.r);
        c.rotation.y = -u.a;
      });
      islets.forEach((m) => (m.position.y = m.userData.y + Math.sin(time * 0.6 + m.userData.phase) * 0.35));
      town.cars.forEach((c) => {
        c.t = (c.t + dt * c.speed * c.dir + 1) % 1;
        town.loop.getPointAt(c.t, c.mesh.position);
        town.loop.getTangentAt(c.t, carTan).multiplyScalar(c.dir);
        c.mesh.position.x += -carTan.z * 0.3;
        c.mesh.position.z += carTan.x * 0.3;
        c.mesh.position.y = 0.04;
        c.mesh.rotation.y = Math.atan2(carTan.x, carTan.z);
      });
      if (cur.flags > 0.01) town.flags.forEach((f, i) => {
        f.rotation.y = Math.atan2(camera.position.x - f.position.x, camera.position.z - f.position.z) - 0.35;
        const pos = f.userData.flag.geometry.attributes.position;
        const base = f.userData.base;
        for (let k = 0; k < pos.count; k++) {
          const x = base[k * 3];
          pos.setZ(k, Math.sin(x * 4 - time * 4 + i) * 0.08 * x);
        }
        pos.needsUpdate = true;
      });
    } else {
      leads.update(0, { rate: 0, capture: 1, running: false });
    }
    stars.uniforms.uTime.value = time;

    renderer.render(scene, camera);
    updateLabels();

    if (!ready) { ready = true; onReady(); }

    // regulator kvalitete
    frameTimes.push(dt);
    if (frameTimes.length > 90) {
      const avg = frameTimes.reduce((s, v) => s + v, 0) / frameTimes.length;
      frameTimes.length = 0;
      if (avg > 0.026 && dpr > 1) {
        dpr = Math.max(1, dpr - 0.25);
        renderer.setPixelRatio(dpr);
        renderer.setSize(vw, vh, false);
      } else if (avg > 0.03 && renderer.shadowMap.enabled) {
        renderer.shadowMap.enabled = false;
        sun.castShadow = false;
      }
    }
  }

  // inicijalno
  measure();
  resize(true);
  S.exact = S.smooth = progressAt(scrollY);
  setTrade(0, 'KLIMA SERVIS');
  props[0].scale.setScalar(1);
  raf = requestAnimationFrame(tick);
  if (typeof requestIdleCallback === 'function') requestIdleCallback(() => buildEdges(), { timeout: 4000 });

  function destroy() {
    cancelAnimationFrame(raf);
    removeEventListener('pointermove', onPointerMove);
    removeEventListener('resize', onResize);
    canvas.removeEventListener('click', onClick);
    document.removeEventListener('visibilitychange', onVis);
    reduceMQ.removeEventListener('change', onReduce);
    ro.disconnect();
    io.disconnect();
    leads.dispose();
    scene.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
      if (o.material) {
        const ms = Array.isArray(o.material) ? o.material : [o.material];
        ms.forEach((m) => { m.map?.dispose(); m.dispose(); });
      }
    });
    signTex.forEach((t) => t.dispose());
    renderer.dispose();
  }

  return {
    setTrade,
    measure,
    destroy,
    debugCam(o) { camOverride = o; },
    /** Mirni kadar: { chapter, trade, sign, cam:{pos,target,fov}, steps, width, height, sky:false } */
    still(o = {}) {
      forced = prep(CHAPTERS[o.chapter || 'hero']);
      if (o.trade != null) { setTrade(o.trade, o.sign); props.forEach((p, i) => { p.visible = i === o.trade; p.scale.setScalar(i === o.trade ? 1 : 0.001); }); gsap.killTweensOf(town.W.scale); town.W.scale.set(1, 1, 1); }
      camOverride = o.cam || null;
      if (o.width && o.height) { vw = o.width; vh = o.height; renderer.setPixelRatio(1); renderer.setSize(vw, vh, false); camera.aspect = vw / vh; }
      sky.dome.visible = o.sky !== false;
      stars.points.visible = o.sky !== false;
      islets.forEach((m) => (m.visible = o.islets !== false));
      clouds.forEach((m) => (m.visible = o.clouds !== false));
      if (o.clearLeads) leads.clear();
      for (let i = 0; i < (o.steps ?? 120); i++) frame(1 / 60);
      if (o.sky === false) renderer.setClearColor(0x000000, 0);
      renderer.render(scene, camera);
      return canvas;
    },
    debugStep(n = 60, dt = 1 / 60) { for (let i = 0; i < n; i++) frame(dt); },
    get state() { return { ...S, id: ids[S.chapter], visible, ready, reduce }; },
    _debug: { scene, camera, renderer, cur, town, island, leads, islets, clouds },
  };
}
