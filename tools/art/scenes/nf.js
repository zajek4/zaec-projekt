// 404: kuća koja je ostala samo nacrt, pod jednom stvarnom uličnom svjetiljkom.
import * as THREE from 'three';
import { mat, box, gable, createBlueprint, motes, light, pool, V } from '../kit.js';
import { nightLights } from './common.js';

export default {
  file: 'world/nacrt-404.webp',
  w: 900,
  h: 900,
  fov: 34,
  async build(st) {
    const { scene, camera } = st;
    camera.position.set(13, 2.6, 15);
    camera.lookAt(0, 3.4, 0);
    st.sky.uAz.value = -2.3;
    st.addFloor({ cell: 1, gridI: 0.45, refl: 0.5, fall: 0.06 });
    nightLights(scene, { key: [-12, 8, -8], keyI: 0.8, fill: [10, 6, 10], fillI: 0.25, target: [0, 2, 0], shadow: 12 });
    const bp = createBlueprint(null, { width: 1.5, opacity: 0.9, ghost: 0.045 });
    // kuća samo u nacrtu
    const g = new THREE.Group();
    const m = new THREE.MeshBasicMaterial();
    g.add(box(8, 4.6, 6, m, 0, 0, 0));
    const roof = gable(8, 6, 2.8, m, 0.4);
    roof.position.set(0, 4.6, 0);
    g.add(roof);
    for (const [x, y] of [[-2.4, 1.2], [0.4, 1.2], [2.6, 1.2], [-2.4, 3.2], [2.6, 3.2]]) g.add(box(1.2, 1.3, 0.05, m, x, y, 3.02));
    g.add(box(1.0, 2.2, 0.05, m, 0.9 + 0.6, 0, 3.02));
    g.updateMatrixWorld(true);
    g.traverse((o) => { if (o.isMesh) bp.edges(o, 30); });
    // kote
    bp.line(V(-4, 0.02, 4.2), V(4, 0.02, 4.2));
    bp.line(V(-4, 0.02, 4.0), V(-4, 0.02, 4.4));
    bp.line(V(4, 0.02, 4.0), V(4, 0.02, 4.4));
    bp.line(V(4.9, 0, 3), V(4.9, 7.4, 3));
    bp.build(scene, st);
    // jedina stvarna stvar: ulična svjetiljka
    const pole = mat({ color: '#22252c', rough: 0.4, metal: 0.7 });
    scene.add(box(0.14, 5.2, 0.14, pole, 6.2, 0, 4.6));
    const arm = box(1.3, 0.08, 0.1, pole, 5.6, 5.1, 4.6);
    scene.add(arm);
    scene.add(box(0.5, 0.16, 0.3, mat({ color: '#15171c', rough: 0.4, metal: 0.6 }), 5.0, 5.0, 4.6));
    const lamp = V(5.0, 4.98, 4.6);
    light(scene, 'spot', '#ffc27a', 120, lamp.toArray(), [5.0, 0, 4.6], { angle: 0.7, pen: 0.9, shadow: true });
    st.dots([{ p: lamp.toArray(), c: '#fff1d6', s: 0.5, k: 3 }, { p: lamp.toArray(), c: '#ffb23f', s: 2.2, k: 0.5, a: 0.6 }]);
    const coneM = new THREE.ShaderMaterial({
      uniforms: {}, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, fog: false,
      vertexShader: 'varying float vY; varying vec3 vN; varying vec3 vV; void main(){ vY = uv.y; vec4 mv = modelViewMatrix * vec4(position,1.0); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }',
      fragmentShader: 'varying float vY; varying vec3 vN; varying vec3 vV; void main(){ float f = pow(abs(dot(vN, vV)), 2.0); float a = f * 0.32 * pow(vY, 1.3); gl_FragColor = vec4(vec3(1.0, 0.78, 0.5) * a, a); }',
    });
    const cone = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 2.6, 4.9, 48, 1, true), coneM);
    cone.position.set(5.0, 2.5, 4.6);
    scene.add(cone);
    pool(scene, 5.0, 4.6, 3.2, { i: 0.55 });
    motes(st, { n: 140, box: [3, 0.3, 2.5, 7, 5, 7], seed: 4, size: [0.02, 0.06], colors: ['#ffcc85'] });
  },
};
