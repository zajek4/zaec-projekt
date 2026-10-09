// Signal s vrha tornja konkatedrale: fizički grad postaje digitalna ishodišna točka.
// Tehnika: osni billboard (okomita ploča okrenuta prema kameri oko osi y) s profilom jezgre i oreola
// u fragment shaderu — izgleda volumetrijski bez volumetrije. Snop raste od vrha šiljka prema nebu,
// boja prelazi iz toplog svjetla grada u hladno digitalno, a paketi svjetla putuju uvis.
// Kad zgrada postane nacrt, snop se stanjuje u tanku os (prva crta plana).
import * as THREE from 'three';
import { glowPoints } from './lib.js';

export function createBeam() {
  const group = new THREE.Group();
  group.name = 'snop';
  const U = {
    uLen: { value: 0 }, // vidljivi dio (0…1 duljine)
    uI: { value: 0 },
    uCore: { value: 0.12 }, // širina jezgre kao udio oreola
    uTime: { value: 0 },
    uRep: { value: 20 }, // broj paketa svjetla duž snopa (stalni razmak u metrima)
    uWarm: { value: new THREE.Color('#ffc58a') },
    uCool: { value: new THREE.Color('#9fb9ff') },
  };
  const geo = new THREE.PlaneGeometry(1, 1, 1, 32).translate(0, 0.5, 0);
  const mat = new THREE.ShaderMaterial({
    uniforms: U,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
    vertexShader: /* glsl */ `
      varying vec2 vUv;
      void main(){
        vUv = uv;
        // snop se vrlo blago širi prema visini (raspršenje u zraku); vidljivi dio ostaje ravna zraka
        vec3 p = position;
        p.x *= mix(1.0, 1.5, uv.y);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }`,
    fragmentShader: /* glsl */ `
      uniform float uLen; uniform float uI; uniform float uCore; uniform float uTime; uniform float uRep; uniform vec3 uWarm; uniform vec3 uCool;
      varying vec2 vUv;
      void main(){
        float x = (vUv.x - 0.5) * 2.0;
        float y = vUv.y;
        float core = exp(-x * x / (uCore * uCore));
        float halo = exp(-x * x * 4.5) * 0.22 + exp(-x * x * 26.0) * 0.3;
        // rast: snop se izvlači iz vrha šiljka, s mekim vrhom
        float grow = smoothstep(uLen + 0.002, uLen - 0.06, y);
        // atmosferski pad svjetline s visinom; mekan početak na samom vrhu tornja. Iznad ~100 m snop se
        // stanji u tihu nit: signal, a ne reflektor koji nadjača toranj
        float fall = smoothstep(0.0, 0.0012, y) * pow(1.0 - y, 2.2) * mix(1.0, 0.42, smoothstep(0.0, 0.12, y));
        // paketi svjetla putuju uvis (podaci), samo u jezgri
        float pk = exp(-pow((fract(y * uRep - uTime * 0.7) - 0.5) * 9.0, 2.0)) * 0.6;
        // toplo svjetlo grada samo u samom izvoru, odmah zatim hladno digitalno; jezgra gotovo bijela
        vec3 col = mix(uWarm, uCool, smoothstep(0.0, 0.006, y));
        col = mix(col, vec3(1.0), core * 0.3);
        float a = (core * (1.0 + pk) * 1.25 + halo) * grow * fall * uI;
        gl_FragColor = vec4(col * a, a);
      }`,
  });
  const quad = new THREE.Mesh(geo, mat);
  quad.frustumCulled = false;
  quad.renderOrder = 12;
  group.add(quad);

  // izvor: mali sjaj na vrhu šiljka
  const tip = glowPoints({ count: 2, color: '#ffd0a0', core: '#ffffff', size: 1 });
  tip.size[0] = 1.25; tip.size[1] = 0.36;
  tip.alpha[0] = 0.35; tip.alpha[1] = 1;
  tip.uniforms.uMin.value = 2;
  tip.uniforms.uMax.value = 26;
  tip.points.renderOrder = 13;
  group.add(tip.points);

  let tipUnit = -1;
  return {
    group,
    /**
     * s: { b (0…1 priča), at (Vector3 izvor, svijet), unit (svjetske jedinice po metru),
     *      camera, time, pr, alpha, drop? (spuštanje izvora u metrima, zadano 3) }
     */
    update(s) {
      const b = s.b * s.alpha;
      group.visible = b > 0.002;
      if (!group.visible) return;
      // izvor je nekoliko metara ispod vrha križa: snop izlazi iz samog vrha, bez procjepa
      group.position.copy(s.at);
      const drop = s.drop ?? 3;
      group.position.y -= drop * s.unit;
      // okreni ploču prema kameri oko okomite osi
      const dx = s.camera.position.x - s.at.x, dz = s.camera.position.z - s.at.z;
      quad.rotation.y = Math.atan2(dx, dz);
      const L = 900 * s.unit; // ~900 m snopa iznad tornja
      const W = 8 * s.unit * (0.4 + 0.6 * Math.min(1, b * 1.4)); // oreol (~8 m); stanji se kad snop slabi
      quad.scale.set(W, L, 1);
      U.uLen.value = Math.min(1, b * 1.6);
      U.uI.value = Math.min(0.62, b * 0.8); // najviše ~60 %: toranj ostaje glavni motiv kadra
      U.uCore.value = 0.045 + 0.035 * Math.min(1, b * 1.4);
      U.uRep.value = 900 / 34; // paket svakih ~34 m
      U.uTime.value = s.time;
      if (s.unit !== tipUnit) {
        // sjaj izvora sjedi na samom vrhu križa (grupa je 3 m niže)
        tipUnit = s.unit;
        tip.pos[1] = tip.pos[4] = (s.drop ?? 3) * s.unit;
        tip.geometry.attributes.position.needsUpdate = true;
      }
      tip.uniforms.uPR.value = s.pr;
      tip.uniforms.uOpacity.value = Math.min(0.65, b * 2); // križ na vrhu ostaje vidljiv
      tip.uniforms.uSize.value = 10 * s.unit;
    },
    dispose() { geo.dispose(); mat.dispose(); tip.geometry.dispose(); tip.material.dispose(); },
  };
}
