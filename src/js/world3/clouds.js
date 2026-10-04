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
      void main(){
        vec2 p = (vUv - 0.5) * vec2(uAspect, 1.0);
        float r = length(p);
        // let kroz oblake: uzorak se širi od središta prema rubovima
        vec2 q = p / (0.55 + uZoom * 1.6);
        float n = fbm3(vec3(q * 2.4, uSeed + uTime * 0.03), uOct) * 0.5 + 0.5;
        float n2 = fbm3(vec3(q * 6.0 + 3.1, uSeed * 1.7 - uTime * 0.05), 2) * 0.5 + 0.5;
        float dens = n * 0.8 + n2 * 0.3;
        // prag pada s količinom; u sredini se otvara prvo (rupa prema cilju)
        float open = smoothstep(0.0, 0.55, r) * 0.35;
        float th = 1.05 - uAmount * 1.05 + (1.0 - uAmount) * open;
        float a = smoothstep(th, th + 0.32, dens + uAmount * 0.25);
        a = max(a, uAmount * uAmount * 0.55); // opća izmaglica na vrhuncu
        // osvjetljenje: gornja desna strana (sunce), tamnije donje strane
        float lit = clamp(0.35 + n2 * 0.4 + dot(normalize(vec2(0.7, 0.6)), p) * 0.5, 0.0, 1.0);
        vec3 c = mix(vec3(0.035, 0.05, 0.10), vec3(0.42, 0.50, 0.68), lit * (0.4 + 0.6 * dens));
        a *= smoothstep(0.0, 0.08, uAmount);
        gl_FragColor = vec4(c, a * 0.96);
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
