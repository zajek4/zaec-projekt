// Pozornica za mirne kadrove podstranica: noć, mokri "blueprint" pod, magla, bloom i filmski grade.
// Isti jezik kao naslovnica: tamnoplava noć, toplo jantarno svjetlo, signalno plava crta nacrta.
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { Reflector } from 'three/examples/jsm/objects/Reflector.js';

export const PAL = {
  night: new THREE.Color('#04060d'),
  navy: new THREE.Color('#0b1233'),
  fog: new THREE.Color('#080c1d'),
  signal: new THREE.Color('#2347ff'),
  line: new THREE.Color('#5b78ff'),
  ice: new THREE.Color('#a9bbff'),
  amber: new THREE.Color('#ffb23f'),
  warm: new THREE.Color('#ffcc85'),
  paper: new THREE.Color('#efebe3'),
};

const FLOOR = {
  name: 'ZaecFloor',
  uniforms: {
    color: { value: null },
    tDiffuse: { value: null },
    textureMatrix: { value: null },
    uBase: { value: new THREE.Color('#05070f') },
    uGrid: { value: new THREE.Color('#2a46ff') },
    uFogC: { value: new THREE.Color('#080c1d') },
    uCam: { value: new THREE.Vector3() },
    uCenter: { value: new THREE.Vector2() },
    uCell: { value: 2 },
    uGridI: { value: 0.5 },
    uGridFall: { value: 0.045 },
    uRefl: { value: 0.55 },
    uRough: { value: 0.0025 },
    uFog: { value: 0.006 },
  },
  vertexShader: /* glsl */ `
    uniform mat4 textureMatrix;
    varying vec4 vUv; varying vec3 vW;
    void main(){
      vUv = textureMatrix * vec4(position, 1.0);
      vW = (modelMatrix * vec4(position, 1.0)).xyz;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse; uniform vec3 uBase; uniform vec3 uGrid; uniform vec3 uFogC; uniform vec3 uCam;
    uniform vec2 uCenter; uniform float uCell; uniform float uGridI; uniform float uGridFall; uniform float uRefl; uniform float uRough; uniform float uFog;
    varying vec4 vUv; varying vec3 vW;
    float gridLine(vec2 p, float w){ vec2 g = abs(fract(p - 0.5) - 0.5) / (fwidth(p) * w); return 1.0 - min(min(g.x, g.y), 1.0); }
    void main(){
      vec2 uv = vUv.xy / vUv.w;
      // mokri asfalt: zamućen odraz, jače zamućen dalje od kamere
      float dc = length(vW - uCam);
      float rough = uRough * (0.6 + dc * 0.02);
      vec3 r = vec3(0.0); float tw = 0.0;
      for (int i = -5; i <= 5; i++) {
        float w = exp(-float(i * i) / 10.0);
        r += texture2D(tDiffuse, uv + vec2(float(i) * rough * 0.35, float(i) * rough)).rgb * w; tw += w;
      }
      r /= tw;
      float d = length(vW.xz - uCenter);
      float fade = exp(-d * uGridFall);
      float g = gridLine(vW.xz / uCell, 1.0) * 0.55 + gridLine(vW.xz / (uCell * 5.0), 1.6) * 0.45;
      vec3 col = uBase + r * uRefl + uGrid * g * uGridI * fade;
      // daleko pod prelazi u nebo (prozirnost), bez tvrdog horizonta
      float f = 1.0 - exp(-pow(dc * uFog, 1.6));
      col = mix(col, uFogC, f * 0.6);
      gl_FragColor = vec4(col, 1.0 - f);
    }`,
};

const GRADE = {
  uniforms: {
    tDiffuse: { value: null },
    uRes: { value: new THREE.Vector2(1, 1) },
    uVig: { value: 0.55 },
    uCA: { value: 0.0025 },
    uGrain: { value: 0.012 },
    uStreak: { value: 0.35 },
    uLift: { value: new THREE.Color('#05081a') },
  },
  vertexShader: /* glsl */ `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse; uniform vec2 uRes; uniform float uVig; uniform float uCA; uniform float uGrain; uniform float uStreak; uniform vec3 uLift;
    varying vec2 vUv;
    float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main(){
      vec2 c = vUv - 0.5;
      vec2 off = c * uCA * dot(c, c) * 4.0;
      vec3 col = vec3(texture2D(tDiffuse, vUv - off).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv + off).b);
      // anamorfni odbljesak: vodoravni trag oko najsvjetlijih točaka (plavkast, kao na filmskoj leći)
      vec3 st = vec3(0.0);
      for (int i = 1; i <= 28; i++) {
        float o = float(i) * 5.0 / uRes.x;
        vec3 a = texture2D(tDiffuse, vUv + vec2(o, 0.0)).rgb;
        vec3 b = texture2D(tDiffuse, vUv - vec2(o, 0.0)).rgb;
        float w = exp(-float(i) * 0.11);
        st += (max(a - 0.9, 0.0) + max(b - 0.9, 0.0)) * w;
      }
      col += dot(st, vec3(0.33)) * vec3(0.45, 0.6, 1.0) * uStreak;
      // podizanje crnih u tamnoplavo (nikad čisto crno) i vinjeta
      col = uLift + col * (1.0 - uLift);
      float v = smoothstep(0.95, 0.25, length(c * vec2(1.0, 1.2)));
      col *= mix(1.0, v, uVig);
      col += (hash(vUv * uRes) - 0.5) * uGrain;
      gl_FragColor = vec4(col, 1.0);
    }`,
};

const SKY = {
  vertexShader: /* glsl */ `varying vec3 vDir; void main(){ vDir = normalize((modelMatrix * vec4(position, 0.0)).xyz); vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }`,
  fragmentShader: /* glsl */ `
    uniform vec3 uTop; uniform vec3 uHor; uniform vec3 uGlow; uniform vec3 uGlow2; uniform float uAz; uniform float uGlowI; uniform float uStars;
    varying vec3 vDir;
    float hash(vec3 p){ return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
    void main(){
      vec3 d = normalize(vDir);
      float h = d.y;
      vec3 c = mix(uHor, uTop, smoothstep(-0.05, 0.55, h));
      c = mix(c, uTop, smoothstep(0.0, -0.2, h));
      float az = atan(d.x, d.z);
      float side = 0.5 + 0.5 * cos(az - uAz);
      float band = exp(-abs(h) * 22.0) * smoothstep(-0.12, 0.0, h);
      c += uGlow * band * pow(side, 4.0) * uGlowI;
      c += uGlow2 * band * pow(1.0 - side, 2.0) * uGlowI * 0.5;
      // zvijezde: rijetke, sitne
      vec3 q = d * 380.0; vec3 id = floor(q); vec3 f = fract(q) - 0.5;
      float s = step(0.9965, hash(id)) * smoothstep(0.32, 0.0, length(f)) * smoothstep(0.05, 0.35, h);
      c += vec3(0.75, 0.82, 1.0) * s * uStars * (0.4 + hash(id + 3.1));
      gl_FragColor = vec4(c, 1.0);
    }`,
};

// Meke točke svjetla: prozori, LED-ice, iskre i bokeh u prvom planu.
const DOTS = {
  vertexShader: /* glsl */ `
    attribute float aSize; attribute vec3 aColor; attribute float aAlpha; attribute float aRing;
    uniform float uScale;
    varying vec3 vC; varying float vA; varying float vR;
    void main(){
      vec4 mv = modelViewMatrix * vec4(position, 1.0);
      gl_PointSize = max(1.5, aSize * uScale / -mv.z);
      vC = aColor; vA = aAlpha; vR = aRing;
      gl_Position = projectionMatrix * mv;
    }`,
  fragmentShader: /* glsl */ `
    varying vec3 vC; varying float vA; varying float vR;
    void main(){
      vec2 p = gl_PointCoord * 2.0 - 1.0;
      float r = length(p);
      if (r > 1.0) discard;
      // jezgra + meki oreol; bokeh diskovi imaju blago svjetliji rub
      float core = exp(-r * r * 9.0);
      float disc = smoothstep(1.0, 0.82, r) * (0.55 + 0.45 * smoothstep(0.5, 0.95, r));
      float a = mix(core + exp(-r * r * 2.5) * 0.25, disc * 0.6, vR) * vA;
      gl_FragColor = vec4(vC * a, a);
    }`,
};

export function createStage({ canvas, w = 1400, h = 1050, pr = 2, fov = 32 }) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(pr);
  renderer.setSize(w, h, false);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.localClippingEnabled = true;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  const W = w * pr, H = h * pr;

  const scene = new THREE.Scene();
  scene.background = PAL.night.clone();
  scene.fog = new THREE.FogExp2(PAL.fog.clone(), 0.018);
  const camera = new THREE.PerspectiveCamera(fov, w / h, 0.1, 900);

  // okolina za odsjaje: tamna kupola s toplim i hladnim "softboxom"
  const pm = new THREE.PMREMGenerator(renderer);
  const env = new THREE.Scene();
  env.add(new THREE.Mesh(new THREE.SphereGeometry(50, 32, 16), new THREE.MeshBasicMaterial({ color: '#0a0f24', side: THREE.BackSide })));
  const panel = (c, k, pos, s) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(s[0], s[1]), new THREE.MeshBasicMaterial({ color: new THREE.Color(c).multiplyScalar(k), side: THREE.DoubleSide })); m.position.set(...pos); m.lookAt(0, 0, 0); env.add(m); };
  panel('#ffb23f', 6, [-30, 6, -20], [40, 8]);
  panel('#ffd9a8', 3, [25, 18, -25], [10, 30]);
  panel('#3b5bff', 4, [30, 4, 20], [30, 6]);
  panel('#c9d4ff', 1.5, [0, 40, 0], [40, 40]);
  const envMap = pm.fromScene(env, 0.02).texture;
  scene.environment = envMap;
  scene.environmentIntensity = 0.6;

  const skyU = {
    uTop: { value: new THREE.Color('#03050c') },
    uHor: { value: new THREE.Color('#0c1434') },
    uGlow: { value: new THREE.Color('#ff9a3c') },
    uGlow2: { value: new THREE.Color('#2a46ff') },
    uAz: { value: -0.6 },
    uGlowI: { value: 0.4 },
    uStars: { value: 1 },
  };
  const sky = new THREE.Mesh(new THREE.SphereGeometry(600, 48, 24), new THREE.ShaderMaterial({ uniforms: skyU, vertexShader: SKY.vertexShader, fragmentShader: SKY.fragmentShader, side: THREE.BackSide, depthWrite: false, fog: false }));
  sky.renderOrder = -10;
  scene.add(sky);

  let floor = null;
  function addFloor({ size = 900, y = 0, cell = 2, gridI = 0.5, refl = 0.55, rough = 0.0025, center = [0, 0], fall = 0.045, fog = 0.006, base = '#05070f' } = {}) {
    floor = new Reflector(new THREE.PlaneGeometry(size, size), { shader: FLOOR, textureWidth: W, textureHeight: H, clipBias: 0.002, multisample: 4 });
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = y;
    floor.material.transparent = true;
    floor.renderOrder = -2;
    const u = floor.material.uniforms;
    u.uCell.value = cell; u.uGridI.value = gridI; u.uRefl.value = refl; u.uRough.value = rough; u.uGridFall.value = fall; u.uFog.value = fog;
    u.uCenter.value.set(center[0], center[1]);
    u.uBase.value.set(base);
    u.uFogC.value.copy(scene.fog.color);
    scene.add(floor);
    // hvatač sjena iznad poda (pod je reflektor bez osvjetljenja)
    const sh = new THREE.Mesh(new THREE.PlaneGeometry(size, size), new THREE.ShadowMaterial({ opacity: 0.55, color: '#000000' }));
    sh.rotation.x = -Math.PI / 2; sh.position.y = y + 0.005; sh.receiveShadow = true; sh.renderOrder = -1;
    scene.add(sh);
    return floor;
  }

  // točke svjetla
  function dots(list, { scale = 1, depthTest = true, depthWrite = false, order = 5 } = {}) {
    const n = list.length;
    const pos = new Float32Array(n * 3), col = new Float32Array(n * 3), size = new Float32Array(n), al = new Float32Array(n), ring = new Float32Array(n);
    list.forEach((d, i) => {
      pos.set(d.p, i * 3);
      const c = new THREE.Color(d.c ?? '#ffcc85').multiplyScalar(d.k ?? 1);
      col.set([c.r, c.g, c.b], i * 3);
      size[i] = d.s ?? 1; al[i] = d.a ?? 1; ring[i] = d.ring ?? 0;
    });
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('aColor', new THREE.BufferAttribute(col, 3));
    g.setAttribute('aSize', new THREE.BufferAttribute(size, 1));
    g.setAttribute('aAlpha', new THREE.BufferAttribute(al, 1));
    g.setAttribute('aRing', new THREE.BufferAttribute(ring, 1));
    const m = new THREE.ShaderMaterial({ uniforms: { uScale: { value: H * scale } }, vertexShader: DOTS.vertexShader, fragmentShader: DOTS.fragmentShader, transparent: true, depthWrite, depthTest, blending: THREE.AdditiveBlending, fog: false });
    const p = new THREE.Points(g, m);
    p.frustumCulled = false;
    p.renderOrder = order;
    scene.add(p);
    return p;
  }

  const composer = new EffectComposer(renderer);
  composer.setPixelRatio(1);
  composer.setSize(W, H);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(W, H), 0.85, 0.55, 0.82);
  composer.addPass(bloom);
  composer.addPass(new OutputPass());
  const grade = new ShaderPass(GRADE);
  grade.uniforms.uRes.value.set(W, H);
  composer.addPass(grade);

  return {
    renderer, scene, camera, composer, bloom, grade, sky: skyU, envMap, W, H, pr,
    addFloor, dots,
    get floor() { return floor; },
    render() {
      if (floor) floor.material.uniforms.uCam.value.copy(camera.position);
      camera.updateMatrixWorld();
      composer.render();
    },
  };
}
