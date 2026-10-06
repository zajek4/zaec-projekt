// Osijek: stvarna konkatedrala (isti model kao na naslovnici) noću, grad oko nje u nacrtu (OSM tlocrti),
// svjetlosni signal s tornja. Za "O nama" (bliži kadar) i "Kontakt" (pogled na grad).
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import { createBlueprint, motes, bokeh, light, rng, trail, pool, V } from '../kit.js';
import { nightLights } from './common.js';
import { createBeam } from '../../../src/js/world3/beam.js';

/* global __ROOT__ */
const FS = (p) => `/@fs${__ROOT__}/${p}`;

async function loadCity() {
  const buf = await (await fetch(FS('zaec/assets/data/osijek-city.bin'))).arrayBuffer();
  const H = new Int32Array(buf, 0, 13);
  const D = new Int16Array(buf, 52);
  let o = 0;
  const read = (count, heads) => {
    const out = [];
    for (let i = 0; i < count; i++) {
      const h = [];
      for (let k = 0; k < heads; k++) h.push(D[o++]);
      const n = D[o++];
      const r = new Float32Array(n * 2);
      for (let k = 0; k < n; k++) { r[k * 2] = D[o++] / 2; r[k * 2 + 1] = D[o++] / 2; }
      out.push({ h, r });
    }
    return out;
  };
  return { buildings: read(H[1], 2), roads: read(H[3], 1), water: read(H[5], 1) };
}

async function loadCathedral() {
  const loader = new GLTFLoader();
  loader.setMeshoptDecoder(MeshoptDecoder);
  const gltf = await loader.loadAsync(FS('zaec/assets/models/konkatedrala.glb'));
  const named = (o) => { for (let p = o; p; p = p.parent) if (p.name === 'konkatedrala' || p.name === 'sjaj') return p.name; return ''; };
  let mesh = null, glow = null;
  gltf.scene.updateMatrixWorld(true);
  gltf.scene.traverse((o) => { if (!o.isMesh) return; if (named(o) === 'sjaj') glow = glow || o; else mesh = mesh || o; });
  const toFloat = (src, withKind) => {
    const geo = new THREE.BufferGeometry();
    const P = src.getAttribute('position');
    const pos = new Float32Array(P.count * 3);
    for (let i = 0; i < P.count; i++) { pos[i * 3] = P.getX(i); pos[i * 3 + 1] = P.getY(i); pos[i * 3 + 2] = P.getZ(i); }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const C = src.getAttribute('color');
    if (C && withKind) {
      const col = new Float32Array(C.count * 3), kind = new Float32Array(C.count);
      for (let i = 0; i < C.count; i++) { col[i * 3] = C.getX(i); col[i * 3 + 1] = C.getY(i); col[i * 3 + 2] = C.getZ(i); kind[i] = C.itemSize > 3 ? Math.round(C.getW(i) * 4) : 0; }
      geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
      geo.setAttribute('aKind', new THREE.BufferAttribute(kind, 1));
    } else if (C) {
      const g4 = new Float32Array(C.count * 4);
      for (let i = 0; i < C.count; i++) { g4[i * 4] = C.getX(i); g4[i * 4 + 1] = C.getY(i); g4[i * 4 + 2] = C.getZ(i); g4[i * 4 + 3] = C.itemSize > 3 ? C.getW(i) : 1; }
      geo.setAttribute('aGlow', new THREE.BufferAttribute(g4, 4));
    }
    if (src.index) geo.setIndex(src.index.clone());
    return geo;
  };
  const geo = toFloat(mesh.geometry, true).applyMatrix4(mesh.matrixWorld);
  const haloGeo = glow ? toFloat(glow.geometry, false).applyMatrix4(glow.matrixWorld) : null;
  return { geo, haloGeo };
}

function cathedralMesh(geo, haloGeo, { win = 1.6, halo = 1.3 } = {}) {
  const m = new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.82, metalness: 0.02, side: THREE.DoubleSide, envMapIntensity: 0.7 });
  m.forceSinglePass = true;
  m.onBeforeCompile = (sh) => {
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nattribute float aKind; varying float vKind; varying vec3 vLoc;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvKind = aKind; vLoc = position;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying float vKind; varying vec3 vLoc; float hh(vec3 p){ return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }')
      .replace('#include <color_fragment>', `#include <color_fragment>
        if (vKind < 0.5) { float cy = vLoc.y / 0.36; float w = fwidth(cy); float d = abs(fract(cy + 0.5) - 0.5); diffuseColor.rgb *= 1.0 - 0.18 * (1.0 - smoothstep(0.07, 0.07 + w, d)) * (1.0 - smoothstep(0.12, 0.4, w)); }
        float glass = step(2.5, vKind) * step(vKind, 3.5);
        diffuseColor.rgb *= 1.0 - 0.9 * glass;`)
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
        { float hw = hh(floor(vLoc * vec3(0.45, 0.2, 0.45))); totalEmissiveRadiance += glass * mix(vec3(1.0, 0.8, 0.36), vec3(1.0, 0.64, 0.24), hw) * ${win.toFixed(2)}; }`);
  };
  m.customProgramCacheKey = () => 'art-cath';
  const mesh = new THREE.Mesh(geo, m);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  const out = new THREE.Group();
  out.add(mesh);
  if (haloGeo) {
    const hm = new THREE.ShaderMaterial({
      uniforms: { uI: { value: halo } }, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, fog: false,
      vertexShader: 'attribute vec4 aGlow; varying vec4 vG; void main(){ vG = aGlow; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
      fragmentShader: 'uniform float uI; varying vec4 vG; void main(){ float a = vG.a * vG.a * uI; if (a < 0.003) discard; gl_FragColor = vec4(vG.rgb * a, a); }',
    });
    const h = new THREE.Mesh(haloGeo, hm);
    h.renderOrder = 5;
    out.add(h);
  }
  // vrh šiljka
  const p = geo.attributes.position;
  let top = 0;
  for (let i = 1; i < p.count; i++) if (p.getY(i) > p.getY(top)) top = i;
  return { group: out, spire: V(p.getX(top), p.getY(top), p.getZ(top)) };
}

function cityBlueprint(st, city, { r0 = 30, r1 = 450, solidR = 0, c = [10, 0], avoid = null, ground = 0.6, vert = 0.45 } = {}) {
  const bp = createBlueprint(null, { width: 1.0, opacity: 0.55, ghost: 0 });
  const solids = [];
  for (const b of city.buildings) {
    const r = b.r;
    const n = r.length / 2;
    let cx = 0, cy = 0;
    for (let i = 0; i < n; i++) { cx += r[i * 2]; cy += r[i * 2 + 1]; }
    cx /= n; cy /= n;
    const d = Math.hypot(cx - c[0], cy - c[1]);
    if (d < r0 || d > r1) continue;
    if (avoid && Math.hypot(cx - avoid[0], cy - avoid[1]) < avoid[2]) continue;
    const h = Math.max(3, b.h[0] / 2);
    for (let i = 0, j = n - 1; i < n; j = i++) {
      const a = V(r[j * 2], 0, -r[j * 2 + 1]), bb = V(r[i * 2], 0, -r[i * 2 + 1]);
      bp.line(a.clone().setY(h), bb.clone().setY(h));
      if (d < r1 * ground) bp.line(a.clone().setY(0.05), bb.clone().setY(0.05));
      if (i % 2 === 0 && d < r1 * vert) bp.line(a.clone().setY(0), a.clone().setY(h));
    }
    if (d < solidR) solids.push({ r, h });
  }
  return { bp, solids };
}

async function buildOsijek(st, o) {
  o.city.c = o.city.c || [10, 0];
  const { scene, camera } = st;
  const [city, cath] = await Promise.all([loadCity(), loadCathedral()]);
  camera.position.set(...o.cam);
  camera.lookAt(...o.look);
  camera.far = 4000;
  camera.updateProjectionMatrix();
  scene.fog.density = o.fog;
  st.sky.uAz.value = o.az ?? -2.2;
  st.sky.uGlowI.value = 0.45;
  st.addFloor({ size: 6000, cell: o.cell, gridI: 0.22, refl: o.refl ?? 0.35, fall: o.fall, fog: o.floorFog, center: [10, 0] });
  nightLights(scene, { key: [-160, 120, -140], keyI: 0.7, fill: [150, 90, 160], fillI: 0.25, hemi: 0.35, target: [10, 20, 0], shadow: 140 });
  const c = cathedralMesh(cath.geo, cath.haloGeo, { win: o.win ?? 1.6, halo: o.halo ?? 1.3 });
  scene.add(c.group);
  // reflektori odozdo: topli, kao noćna rasvjeta konkatedrale
  for (const [x, z, tx, ty, tz, I] of o.floods) {
    light(scene, 'spot', '#ffb070', I, [x, 1.5, z], [tx, ty, tz], { angle: 0.42, pen: 0.85, dist: 0 });
  }
  // signal s vrha tornja (isti snop kao na naslovnici)
  const beam = createBeam();
  scene.add(beam.group);
  beam.update({ b: 1, at: c.spire, unit: 1, camera, time: 3.2, pr: st.pr, alpha: 1 });
  // grad u nacrtu (OSM)
  const { bp } = cityBlueprint(st, city, o.city);
  // Drava: obris vode
  for (const w of o.water ? city.water : []) {
    const r = w.r, n = r.length / 2;
    for (let i = 0, j = n - 1; i < n; j = i++) bp.line(V(r[j * 2], 0.1, -r[j * 2 + 1]), V(r[i * 2], 0.1, -r[i * 2 + 1]));
  }
  bp.build(scene, st);
  // ulična svjetla: topli tragovi uz ceste blizu središta
  const R = rng(5);
  const lamps = [];
  for (const rd of city.roads) {
    const r = rd.r, n = r.length / 2;
    for (let i = 0; i < n - 1; i++) {
      const ax = r[i * 2], ay = r[i * 2 + 1], bx = r[i * 2 + 2], by = r[i * 2 + 3];
      const L = Math.hypot(bx - ax, by - ay);
      for (let t = 0; t < L; t += 28) {
        const x = ax + ((bx - ax) * t) / L, y = ay + ((by - ay) * t) / L;
        const d = Math.hypot(x - 10, y);
        if (d < 60 || d > o.lampR) continue;
        if (R() < 0.35) continue;
        lamps.push({ p: [x, 6, -y], c: R() < 0.85 ? '#ffc27a' : '#9fb3ff', s: o.lampS, k: 1.8, a: 0.7 });
      }
    }
  }
  st.dots(lamps);
  motes(st, { n: 120, box: o.motes, seed: 4, size: o.moteS });
  return c;
}

export const onama = {
  file: 'world/usluga-onama.webp',
  fov: 34,
  async build(st) {
    await buildOsijek(st, {
      cam: [-78, 10, 215], look: [14, 47, 0], fog: 0.0024, cell: 8, fall: 0.006, floorFog: 0.0016, win: 0.75, halo: 0.4,
      floods: [[-6, 44, 30, 55, 0, 2600], [46, 40, 34, 70, 0, 2600], [-36, 24, -10, 22, 0, 1500]],
      city: { r0: 38, r1: 620, avoid: [-60, -170, 110] }, lampR: 620, lampS: 2.6,
      motes: [-90, 2, 60, 40, 80, 190], moteS: [0.25, 0.7],
    });
  },
};

export const kontakt = {
  file: 'world/usluga-kontakt.webp',
  q: 72,
  blur: 0.55,
  fov: 34,
  async build(st) {
    await buildOsijek(st, {
      cam: [-380, 210, 520], look: [40, 30, -40], fog: 0.0009, cell: 40, fall: 0.0016, floorFog: 0.0005, win: 1.4, halo: 0.8, az: -2.4, water: true,
      floods: [[-10, 50, 30, 50, 0, 16000], [50, 46, 34, 70, 0, 16000]],
      city: { r0: 38, r1: 1000, ground: 0.2, vert: 0.3 }, lampR: 1000, lampS: 5,
      motes: [-400, 20, -200, 300, 200, 400], moteS: [1, 3],
    });
    bokeh(st, [{ p: [-330, 190, 470], c: '#ffb45e', s: 6, a: 0.25 }]);
  },
};

export const lokalno = {
  file: 'world/usluga-lokalno.webp',
  q: 72,
  blur: 0,
  fov: 34,
  async build(st) {
    const { scene } = st;
    await buildOsijek(st, {
      cam: [-40, 165, 500], look: [-110, 8, 40], fog: 0.0011, cell: 40, fall: 0.002, floorFog: 0.0006, win: 1.4, halo: 0.8, az: -2.4, water: true, refl: 0.18,
      floods: [[-10, 50, 30, 50, 0, 16000], [50, 46, 34, 70, 0, 16000]],
      city: { r0: 38, r1: 900, ground: 0.2, vert: 0.3, c: [-150, -60] }, lampR: 900, lampS: 4,
      motes: [-300, 10, 0, 100, 160, 400], moteS: [0.8, 2.4],
    });
    // oznaka na karti: vaš obrt (kapljica u signalno plavoj, bijelo središte) + krug područja rada
    const P = V(-170, 0, 70);
    const pinM = new THREE.MeshPhysicalMaterial({ color: '#2347ff', roughness: 0.18, metalness: 0.1, clearcoat: 1, envMapIntensity: 1.6, emissive: '#2347ff', emissiveIntensity: 0.35 });
    const head = new THREE.Mesh(new THREE.SphereGeometry(17, 48, 32), pinM);
    head.position.set(P.x, 64, P.z);
    scene.add(head);
    const tip = new THREE.Mesh(new THREE.ConeGeometry(14.8, 40, 48, 1, true).rotateX(Math.PI), pinM);
    tip.position.set(P.x, 40, P.z);
    scene.add(tip);
    const dot = new THREE.Mesh(new THREE.SphereGeometry(6.8, 32, 16), new THREE.MeshStandardMaterial({ color: '#ffffff', emissive: '#ffffff', emissiveIntensity: 0.15, roughness: 0.4 }));
    dot.position.set(P.x, 64, P.z + 13);
    scene.add(dot);
    light(scene, 'point', '#9fb3ff', 1800, [P.x + 30, 90, P.z + 60], null, { dist: 260 });
    // krug područja rada na tlu i toplo svjetlo pod oznakom
    const ring = new THREE.Mesh(new THREE.RingGeometry(150, 153, 160), new THREE.MeshBasicMaterial({ color: new THREE.Color('#ffb23f').multiplyScalar(1.6), transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
    ring.rotation.x = -Math.PI / 2;
    ring.position.set(P.x, 0.6, P.z);
    scene.add(ring);
    pool(scene, P.x, P.z, 70, { i: 0.7, color: '#ffb46a' });
    pool(scene, P.x, P.z, 155, { i: 0.18, color: '#ffb46a' });
    // upiti iz okolice stižu do oznake
    const R = rng(77);
    for (let k = 0; k < 12; k++) {
      const a = R() * Math.PI * 2, rr = 140 + R() * 220;
      const s = V(P.x + Math.cos(a) * rr, 6, P.z + Math.sin(a) * rr);
      const e = V(P.x, 46, P.z);
      const mid = s.clone().lerp(e, 0.5).add(V(0, 60 + R() * 40, 0));
      trail(scene, new THREE.QuadraticBezierCurve3(s, mid, e), { r: 0.9, color: k % 3 === 0 ? '#ffc070' : '#7f9bff', i: 2.2, tail: 0.5, from: 0.25 + R() * 0.3, to: 0.96, seg: 120 });
      st.dots([{ p: s.toArray(), c: k % 3 === 0 ? '#ffd29a' : '#a9bbff', s: 7, k: 2 }]);
    }
  },
};
