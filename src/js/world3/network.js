// Živa mreža oko planeta: lukovi (velike kružnice podignute iznad tla) koji se pojave, prenose signale i nestanu.
// Položaj svake točke luka računa GPU iz krajnjih točaka i životnog ciklusa; CPU samo ponovno rađa
// istekle lukove — na polutci koju kamera vidi i oko točke koju gleda. Sve je deterministički (seeded).
// Kako priča ide prema Osijeku, sve više lukova završava u njemu (konvergencija).
import * as THREE from 'three';
import { ll2v, OSIJEK, seeded } from './lib.js';

const VERT_COMMON = /* glsl */ `
  attribute vec3 aA; attribute vec3 aB; attribute vec2 aTH; attribute vec4 aLife; attribute vec3 aPulse;
  uniform float uTime;
  vec3 arcPos(float t){
    float d = clamp(dot(aA, aB), -1.0, 1.0);
    float th = acos(d);
    vec3 p = th < 1e-4 ? aA : (sin((1.0 - t) * th) * aA + sin(t * th) * aB) / sin(th);
    return normalize(p) * (1.0 + aTH.y * sin(3.14159265 * t));
  }
`;

export function createNetwork({ geo, lite }) {
  const rand = seeded(4242);
  const NA = lite ? 72 : 160; // broj lukova
  const SEG = lite ? 26 : 40; // segmenata po luku

  /* ── čvorovi: Osijek (0), prijestolnice, hrvatski gradovi, točke na kopnu ── */
  const nodes = [ll2v(OSIJEK[0], OSIJEK[1])];
  geo.capitals.forEach(([, lon, lat]) => nodes.push(ll2v(lon, lat)));
  geo.cities.slice(1).forEach(([, lon, lat]) => nodes.push(ll2v(lon, lat)));
  const step = lite ? 2 : 1;
  for (let i = 0; i < geo.nodes.length; i += step) nodes.push(ll2v(geo.nodes[i][0], geo.nodes[i][1]));
  const europeNodes = nodes.map((n, i) => i).filter((i) => nodes[i].angleTo(nodes[0]) < 0.42);

  /* ── geometrija lukova (linije) ── */
  const VPA = SEG * 2;
  const nV = NA * VPA;
  const fA = new Float32Array(nV * 3), fB = new Float32Array(nV * 3), fTH = new Float32Array(nV * 2), fLife = new Float32Array(nV * 4), fPulse = new Float32Array(nV * 3);
  for (let i = 0; i < NA; i++) for (let s = 0; s < SEG; s++) {
    const v0 = i * VPA + s * 2;
    fTH[v0 * 2] = s / SEG;
    fTH[(v0 + 1) * 2] = (s + 1) / SEG;
  }
  const lineGeo = new THREE.BufferGeometry();
  const attr = (arr, n) => new THREE.BufferAttribute(arr, n).setUsage(THREE.DynamicDrawUsage);
  const LA = { aA: attr(fA, 3), aB: attr(fB, 3), aTH: attr(fTH, 2), aLife: attr(fLife, 4), aPulse: attr(fPulse, 3) };
  Object.entries(LA).forEach(([k, v]) => lineGeo.setAttribute(k, v));
  lineGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(nV * 3), 3)); // nekorišteno (GPU računa)
  lineGeo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 2);
  const U = { uTime: { value: 0 }, uOpacity: { value: 1 }, uConv: { value: 0 }, uBase: { value: new THREE.Color('#5a7fff') }, uHot: { value: new THREE.Color('#dfe8ff') }, uGold: { value: new THREE.Color('#ffb23f') } };
  const lineMat = new THREE.ShaderMaterial({
    uniforms: U,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexShader: /* glsl */ `${VERT_COMMON}
      varying float vA; varying float vG; varying float vTo;
      void main(){
        float t = aTH.x;
        vec3 p = arcPos(t);
        float age = uTime - aLife.x;
        float head = clamp(age / aLife.y, 0.0, 1.0);
        float fade = 1.0 - clamp((age - aLife.y - aLife.z) / aLife.w, 0.0, 1.0);
        float drawn = smoothstep(head + 0.02, head - 0.02, t);
        float live = step(0.0, age) * fade;
        // signal: impulsi putuju nakon iscrtavanja; sjaj vrha za vrijeme crtanja
        float pp = fract(max(age - aLife.y, 0.0) * aPulse.x + aPulse.y);
        float g = exp(-pow((t - pp) * 16.0, 2.0)) * step(aLife.y, age);
        g += exp(-pow((t - head) * 22.0, 2.0)) * (1.0 - step(1.0, head)) * 1.4;
        vA = drawn * live * aPulse.z;
        vG = g * live;
        vTo = aTH.y < 0.0 ? 1.0 : 0.0;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p * 1.003, 1.0);
      }`,
    fragmentShader: /* glsl */ `
      uniform vec3 uBase; uniform vec3 uHot; uniform float uOpacity;
      varying float vA; varying float vG;
      void main(){
        vec3 c = mix(uBase, uHot, clamp(vG, 0.0, 1.0));
        float a = (vA * 0.6 + vG * 1.1 * vA) * uOpacity;
        if (a < 0.003) discard;
        gl_FragColor = vec4(c * a, a);
      }`,
  });
  const lines = new THREE.LineSegments(lineGeo, lineMat);
  lines.frustumCulled = false;
  lines.renderOrder = 2;

  /* ── glave signala (točke) — isti atributi, 2 po luku ── */
  const HP = 2;
  const nH = NA * HP;
  const hA = new Float32Array(nH * 3), hB = new Float32Array(nH * 3), hTH = new Float32Array(nH * 2), hLife = new Float32Array(nH * 4), hPulse = new Float32Array(nH * 3), hK = new Float32Array(nH);
  for (let i = 0; i < nH; i++) hK[i] = i % HP;
  const headGeo = new THREE.BufferGeometry();
  const HA = { aA: attr(hA, 3), aB: attr(hB, 3), aTH: attr(hTH, 2), aLife: attr(hLife, 4), aPulse: attr(hPulse, 3) };
  Object.entries(HA).forEach(([k, v]) => headGeo.setAttribute(k, v));
  headGeo.setAttribute('aK', new THREE.BufferAttribute(hK, 1));
  headGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(nH * 3), 3));
  headGeo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 2);
  const HU = { ...U, uPR: { value: 1 }, uSize: { value: 0.022 } };
  const headMat = new THREE.ShaderMaterial({
    uniforms: HU,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexShader: /* glsl */ `${VERT_COMMON}
      attribute float aK; uniform float uPR; uniform float uSize; varying float vA;
      void main(){
        float age = uTime - aLife.x;
        float head = clamp(age / aLife.y, 0.0, 1.0);
        float fade = 1.0 - clamp((age - aLife.y - aLife.z) / aLife.w, 0.0, 1.0);
        float live = step(0.0, age) * fade * aPulse.z;
        float t = aK < 0.5 ? fract(max(age - aLife.y, 0.0) * aPulse.x + aPulse.y) : head;
        float on = aK < 0.5 ? step(aLife.y, age) : (1.0 - step(1.0, head));
        vA = live * on * (0.35 + 0.65 * sin(3.14159 * t));
        vec4 mv = modelViewMatrix * vec4(arcPos(t) * 1.003, 1.0);
        float sc = length(modelMatrix[0].xyz);
        gl_PointSize = clamp(uSize * uPR * 300.0 * sc / max(0.5, -mv.z), 1.5 * uPR, 9.0 * uPR) * (aK < 0.5 ? 1.0 : 1.25);
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */ `
      uniform float uOpacity; varying float vA;
      void main(){
        float d = length(gl_PointCoord - 0.5);
        if (d > 0.5) discard;
        float a = (pow(1.0 - d * 2.0, 2.0) * 0.7 + smoothstep(0.2, 0.0, d)) * vA * uOpacity;
        gl_FragColor = vec4(vec3(0.85, 0.9, 1.0) * a, a);
      }`,
  });
  const heads = new THREE.Points(headGeo, headMat);
  heads.frustumCulled = false;
  heads.renderOrder = 3;

  const group = new THREE.Group();
  group.add(lines, heads);

  /* ── životni ciklus ── */
  const arcs = Array.from({ length: NA }, () => ({ end: 0 }));
  const camL = new THREE.Vector3(), dirL = new THREE.Vector3(), focus = new THREE.Vector3(), tmp = new THREE.Vector3();
  const inv = new THREE.Matrix4();
  let conv = 0;
  let dirty = new Set();

  const visible = (n) => tmp.copy(camL).sub(n).normalize().dot(n) > 0.08;
  function pickNode(nearTo, maxAng, tries = 40) {
    for (let k = 0; k < tries; k++) {
      const i = (rand() * nodes.length) | 0;
      const n = nodes[i];
      if (!visible(n)) continue;
      if (nearTo && n.angleTo(nearTo) > maxAng) continue;
      return i;
    }
    return 1 + ((rand() * (nodes.length - 1)) | 0);
  }

  function spawn(i, now, prewarm = false) {
    // A: blizu točke koju kamera gleda (70 %) ili bilo gdje na vidljivoj polutci
    let ia;
    if (conv > 0.5 && rand() < conv * 0.6) ia = europeNodes[(rand() * europeNodes.length) | 0];
    else ia = pickNode(rand() < 0.7 ? focus : null, 0.95);
    // B: Osijek s vjerojatnošću konvergencije, inače raznolike udaljenosti
    let ib;
    if (rand() < conv * 0.85) ib = 0;
    else {
      const maxAng = [0.12, 0.35, 0.8, 1.2][(rand() * 4) | 0];
      ib = pickNode(nodes[ia], maxAng);
    }
    if (ib === ia) ib = ia === 0 ? 1 : 0;
    const A = nodes[ia], B = nodes[ib];
    const ang = A.angleTo(B);
    const h = Math.min(0.075, 0.008 + ang * 0.07) * (0.7 + rand() * 0.6);
    const persistent = rand() < 0.22;
    const dIn = 0.5 + ang * 0.9 + rand() * 0.5;
    const live = persistent ? 14 + rand() * 18 : 2.2 + rand() * 6;
    const dOut = 0.8 + rand() * 1.1;
    const born = prewarm ? now - rand() * (dIn + live) : now + rand() * 0.4;
    const speed = 0.22 + rand() * 0.5;
    const phase = rand();
    const bright = (persistent ? 0.35 : 0.55 + rand() * 0.45) * (ib === 0 ? 1.25 : 1);
    arcs[i].end = born + dIn + live + dOut;
    const write = (fa, fb, fth, fl, fp, v0, count, linesMode) => {
      for (let v = v0; v < v0 + count; v++) {
        A.toArray(fa, v * 3); B.toArray(fb, v * 3);
        fth[v * 2 + 1] = h;
        if (!linesMode) fth[v * 2] = 0;
        fl[v * 4] = born; fl[v * 4 + 1] = dIn; fl[v * 4 + 2] = live; fl[v * 4 + 3] = dOut;
        fp[v * 3] = speed; fp[v * 3 + 1] = phase; fp[v * 3 + 2] = bright;
      }
    };
    write(fA, fB, fTH, fLife, fPulse, i * VPA, VPA, true);
    write(hA, hB, hTH, hLife, hPulse, i * HP, HP, false);
    dirty.add(i);
  }

  function flush() {
    if (!dirty.size) return;
    for (const i of dirty) {
      for (const a of Object.values(LA)) a.addUpdateRange(i * VPA * a.itemSize, VPA * a.itemSize);
      for (const a of Object.values(HA)) a.addUpdateRange(i * HP * a.itemSize, HP * a.itemSize);
    }
    for (const a of [...Object.values(LA), ...Object.values(HA)]) a.needsUpdate = true;
    dirty = new Set();
  }

  function updateFocus(camera, frame) {
    inv.copy(frame.matrixWorld).invert();
    camL.copy(camera.position).applyMatrix4(inv);
    camera.getWorldDirection(dirL);
    dirL.transformDirection(inv);
    // presjek zrake pogleda s jediničnom sferom; ako promaši, najbliža točka zrake
    const b = camL.dot(dirL);
    const c = camL.lengthSq() - 1;
    const disc = b * b - c;
    if (disc > 0) focus.copy(dirL).multiplyScalar(-b - Math.sqrt(disc)).add(camL).normalize();
    else focus.copy(dirL).multiplyScalar(-b).add(camL).normalize();
  }

  let primed = false;
  return {
    group,
    /** s: { alpha, time, conv, pr, camera, frame (spin grupa) } */
    update(s) {
      group.visible = s.alpha > 0.002;
      if (!group.visible) return;
      conv = s.conv;
      updateFocus(s.camera, s.frame);
      if (!primed) {
        primed = true;
        for (let i = 0; i < NA; i++) spawn(i, s.time, true);
      } else {
        // najviše nekoliko rađanja po sličici (ravnomjerno opterećenje)
        let budget = 6;
        for (let i = 0; i < NA && budget > 0; i++) if (s.time > arcs[i].end) { spawn(i, s.time); budget--; }
      }
      flush();
      U.uTime.value = s.time;
      U.uOpacity.value = s.alpha;
      U.uConv.value = conv;
      HU.uPR.value = s.pr;
    },
    dispose() {
      lineGeo.dispose(); lineMat.dispose(); headGeo.dispose(); headMat.dispose();
    },
  };
}
