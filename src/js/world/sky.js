// Nebo (gradijent), zvijezde, low-poly oblaci i mali lebdeći otočići.
import * as THREE from 'three';
import { PAL } from './palette.js';
import { Builder, jitter, cone, cyl, paintFaces } from './geo.js';

export function buildSky() {
  const uniforms = {
    uTop: { value: new THREE.Color('#e7e1d6') },
    uBottom: { value: new THREE.Color('#f1ece3') },
    uGlow: { value: new THREE.Color('#ffffff') },
    uGlowAmt: { value: 0 },
  };
  const geo = new THREE.SphereGeometry(400, 32, 16);
  const mat = new THREE.ShaderMaterial({
    uniforms,
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
    vertexShader: /* glsl */ `varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
    fragmentShader: /* glsl */ `
      uniform vec3 uTop; uniform vec3 uBottom; uniform vec3 uGlow; uniform float uGlowAmt; varying vec3 vP;
      void main(){
        float h = clamp(vP.y * 0.5 + 0.5, 0.0, 1.0);
        vec3 c = mix(uBottom, uTop, smoothstep(0.38, 0.9, h));
        float g = pow(max(0.0, 1.0 - abs(vP.y - 0.02) * 3.0), 3.0);
        c = mix(c, uGlow, g * uGlowAmt);
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`,
  });
  const dome = new THREE.Mesh(geo, mat);
  dome.renderOrder = -10;
  dome.frustumCulled = false;
  return { dome, uniforms };
}

export function buildStars(count = 700) {
  const pos = new Float32Array(count * 3);
  const sz = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    const u = Math.random(), v = Math.random() * 0.85 + 0.12;
    const th = u * Math.PI * 2, ph = Math.acos(1 - v);
    const r = 300;
    pos[i * 3] = r * Math.sin(ph) * Math.cos(th);
    pos[i * 3 + 1] = r * Math.cos(ph) * 0.9 + 10;
    pos[i * 3 + 2] = r * Math.sin(ph) * Math.sin(th);
    sz[i] = 0.6 + Math.random() * 1.6;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('aSize', new THREE.BufferAttribute(sz, 1));
  const uniforms = { uOpacity: { value: 0 }, uTime: { value: 0 }, uPR: { value: 1 } };
  const m = new THREE.ShaderMaterial({
    uniforms,
    transparent: true,
    depthWrite: false,
    fog: false,
    vertexShader: /* glsl */ `attribute float aSize; uniform float uTime; uniform float uPR; varying float vT;
      void main(){ vT = 0.6 + 0.4 * sin(uTime * 1.3 + position.x * 0.07 + position.z * 0.05);
        gl_PointSize = aSize * uPR * 1.6; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
    fragmentShader: /* glsl */ `uniform float uOpacity; varying float vT;
      void main(){ float d = length(gl_PointCoord - 0.5); if(d>0.5) discard; gl_FragColor = vec4(vec3(0.92,0.95,1.0), (1.0 - d*2.0) * uOpacity * vT); }`,
  });
  const pts = new THREE.Points(g, m);
  pts.frustumCulled = false;
  pts.renderOrder = -9;
  return { points: pts, uniforms };
}

export function buildClouds(rand, mat, count = 8) {
  const clouds = [];
  for (let i = 0; i < count; i++) {
    const b = new Builder();
    const puffs = 3 + ((rand() * 4) | 0);
    for (let k = 0; k < puffs; k++) {
      let g = new THREE.IcosahedronGeometry(0.9 + rand() * 0.8, 1);
      g = jitter(g, 0.18, rand);
      b.add(g, k % 2 ? PAL.cloud : '#f1ede5', { pos: [k * 1.15 - puffs * 0.55, rand() * 0.4, (rand() - 0.5) * 0.9], scale: [1, 0.72, 1] });
    }
    const m = new THREE.Mesh(b.merge(), mat);
    const a = (i / count) * Math.PI * 2 + rand() * 0.4;
    const r = 16 + rand() * 6;
    m.userData = { a, r, y: 7 + rand() * 6, speed: 0.012 + rand() * 0.018, bob: rand() * 6 };
    m.scale.setScalar(0.8 + rand() * 0.6);
    m.castShadow = false;
    clouds.push(m);
  }
  return clouds;
}

export function buildIslets(rand, mat) {
  const spots = [
    [14, 5, -17, 1.5],
    [-7, -6, -23, 1.2],
    [25, -2.5, 7, 1.0],
  ];
  return spots.map(([x, y, z, s]) => {
    const b = new Builder();
    let rock = new THREE.ConeGeometry(1.6, 2.4, 7, 1);
    rock.rotateX(Math.PI);
    rock.translate(0, -1.2, 0);
    rock = jitter(rock, 0.35, rand);
    b.push(paintFaces(rock, (n, cx, cy) => (cy > -0.3 && n.y > -0.2 ? PAL.grassDark : PAL.rock)));
    let cap = new THREE.CylinderGeometry(1.65, 1.6, 0.3, 7, 1);
    cap.translate(0, -0.15, 0);
    cap = jitter(cap, 0.18, rand, { keepTop: 0 });
    b.push(paintFaces(cap, (n, cx, cy) => (n.y > 0.7 ? PAL.grass : PAL.grassDark)));
    b.add(cyl(0.08, 0.11, 0.6, 5), PAL.trunk, { pos: [0.3, 0, 0.1] });
    let crown = new THREE.IcosahedronGeometry(0.55, 0);
    crown = jitter(crown, 0.15, rand);
    b.add(crown, PAL.leafA, { pos: [0.3, 0.95, 0.1] });
    b.add(cone(0.4, 0.9, 6), PAL.pine, { pos: [-0.6, 0, -0.3] });
    const m = new THREE.Mesh(b.merge(), mat);
    m.position.set(x, y, z);
    m.scale.setScalar(s);
    m.userData = { y, phase: rand() * 6 };
    m.castShadow = false;
    return m;
  });
}
