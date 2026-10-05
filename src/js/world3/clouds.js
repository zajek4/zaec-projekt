// Prolaz kroz oblake: zaslonski sloj koji kratko prikrije promjenu mjerila (orbita → karta, kontinent → regija).
// Gustoća raste, slika se na trenutak omekša, a zatim se oblaci otvaraju prema rubovima dok kamera ponire.
import * as THREE from 'three';
import { SNOISE } from './noise.glsl.js';

export function createClouds({ lite }) {
  const U = {
    uAmount: { value: 0 },
    uTime: { value: 0 },
    uZoom: { value: 0 },
    uAspect: { value: 1 },
    uSeed: { value: 0 },
    uOct: { value: lite ? 3 : 4 },
  };
  const mat = new THREE.ShaderMaterial({
    uniforms: U,
    transparent: true,
    depthTest: false,
    depthWrite: false,
    vertexShader: /* glsl */ `varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,
    fragmentShader: /* glsl */ `
      uniform float uAmount; uniform float uTime; uniform float uZoom; uniform float uAspect; uniform float uSeed; uniform int uOct;
      varying vec2 vUv;
      ${SNOISE}
      // meki oblačni slojevi: izvijeni fbm (velike nakupine) + sitniji fbm (rubovi)
      float layer(vec2 q, float z){
        vec2 w = vec2(snoise(vec3(q * 0.5, z + 4.0)), snoise(vec3(q * 0.5 + 2.3, z - 2.0))) * 0.32;
        vec2 u = q + w;
        float big = fbm3(vec3(u, z), uOct) * 0.5 + 0.5;
        float fine = fbm3(vec3(u * 2.7 + 1.9, z * 1.3), 2) * 0.5 + 0.5;
        return big * 0.8 + fine * 0.28;
      }
      void main(){
        vec2 p = (vUv - 0.5) * vec2(uAspect, 1.0);
        float r = length(p);
        vec2 sunDir = normalize(vec2(0.75, 0.62));
        // dva sloja: daleki se širi sporije, bliži brže → paralaksa dok kamera ponire
        vec2 qf = p / (0.75 + uZoom * 1.1) * 2.1;
        vec2 qn = p / (0.42 + uZoom * 2.6) * 1.5 + vec2(3.7, 1.3);
        float zf = uSeed + uTime * 0.02, zn = uSeed * 1.37 - uTime * 0.03;
        float df = layer(qf, zf);
        float dn = layer(qn, zn);
        // sjenčanje iz gradijenta gustoće (derivacije zaslona, bez dodatnih uzoraka): strana okrenuta suncu je svijetla
        float lf = clamp(0.55 - dot(vec2(dFdx(df), dFdy(df)), sunDir) * 26.0, 0.0, 1.0);
        float ln = clamp(0.55 - dot(vec2(dFdx(dn), dFdy(dn)), sunDir) * 20.0, 0.0, 1.0);
        // pokrivenost raste s količinom; u sredini se otvara prvo (rupa prema cilju)
        float open = smoothstep(0.0, 0.55, r) * 0.35;
        float th = 0.98 - uAmount * 0.93 + (1.0 - uAmount) * open;
        float cf = smoothstep(th - 0.04, th + 0.26, df + uAmount * 0.18);
        float cn = smoothstep(th + 0.06, th + 0.3, dn + uAmount * 0.12) * smoothstep(0.2, 0.7, uAmount);
        vec3 shade = vec3(0.026, 0.038, 0.08), mid = vec3(0.17, 0.22, 0.35), lit = vec3(0.6, 0.67, 0.84);
        float g = 0.72 + 0.56 * (dot(sunDir, p) * 0.5 + 0.5); // svjetlije prema gornjem desnom kutu
        vec3 colF = mix(shade, mix(mid, lit, lf), smoothstep(0.25, 0.85, df)) * g;
        vec3 colN = mix(shade, mix(mid, lit * 1.08, ln), smoothstep(0.25, 0.85, dn)) * (g * 0.92);
        vec3 c = mix(colF, colN, cn);
        float a = max(cf, cn);
        // tanka izmaglica tek na samom vrhuncu (ne jednolika magla)
        float haze = uAmount * uAmount * uAmount * 0.32;
        c = mix(shade * 1.6, c, clamp(a / max(a + haze, 1e-3), 0.0, 1.0));
        a = max(a, haze);
        a *= smoothstep(0.0, 0.08, uAmount);
        gl_FragColor = vec4(c, a * 0.97);
      }`,
  });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat);
  mesh.frustumCulled = false;
  mesh.renderOrder = 1000;
  return {
    object: mesh,
    /** s: { amount, zoom, time, aspect, seed } */
    update(s) {
      mesh.visible = s.amount > 0.004;
      if (!mesh.visible) return;
      U.uAmount.value = s.amount;
      U.uZoom.value = s.zoom;
      U.uTime.value = s.time;
      U.uAspect.value = s.aspect;
      U.uSeed.value = s.seed;
    },
    dispose() { mesh.geometry.dispose(); mat.dispose(); },
  };
}
