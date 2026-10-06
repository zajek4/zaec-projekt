// Ugostiteljstvo i smještaj: kuća za odmor s bazenom i terasom pod lampicama; desno krilo su sobe u nacrtu
// (tlocrt s krevetima) — rezervacije stižu kao paketi svjetla do prozora.
import * as THREE from 'three';
import { mat, box, createCut, createBlueprint, cutSheet, trail, catenary, motes, bokeh, light, horizon, rng, V } from '../kit.js';
import { addWindow, nightLights } from './common.js';

export default {
  file: 'world/djelatnost-ugostiteljstvo-i-smjestaj.webp',
  fov: 36,
  async build(st) {
    const { scene, camera } = st;
    camera.position.set(9.5, 1.35, 14.5);
    camera.lookAt(-0.8, 2.9, -1.5);
    st.sky.uAz.value = -2.5;
    st.addFloor({ cell: 1, gridI: 0.3, refl: 0.45, fall: 0.06 });
    nightLights(scene, { key: [-16, 10, -8], keyI: 1.6, fill: [14, 9, 14], fillI: 0.35, target: [0, 2, -2], shadow: 16 });

    const cut = createCut(V(-1, 0, -0.2), V(5.2, 0, 0), { k: 22, i: 1.2 });
    const bp = createBlueprint(cut, { width: 1.3, opacity: 0.85, ghost: 0.035 });
    const R = rng(29);

    const render = mat({ color: '#9a948a', rough: 0.88 }, cut);
    const wood = mat({ color: '#7a5434', rough: 0.7 }, cut);
    const stone = mat({ color: '#d9d2c4', rough: 0.6 }, cut);
    const villa = new THREE.Group();
    scene.add(villa);
    const W = 16, D = 7, H1 = 3.4, H2 = 3.2, X0 = -6, Z0 = -6;
    villa.add(box(W, H1, D, render, X0 + W / 2, 0, Z0 + D / 2));
    villa.add(box(W - 3, H2, D - 1.5, render, X0 + (W - 3) / 2 + 1.5, H1, Z0 + (D - 1.5) / 2));
    // atika
    villa.add(box(W - 3 + 0.2, 0.4, D - 1.3, render, X0 + (W - 3) / 2 + 1.5, H1 + H2, Z0 + (D - 1.5) / 2));
    // prozori: prizemlje (velike staklene stijene) i kat
    for (let k = 0; k < 5; k++) addWindow(villa, cut, { w: 2.2, h: 2.5, x: X0 + 1.8 + k * 3.0, y: 1.35, z: Z0 + D + 0.01, lit: R() < 0.8 ? 0.5 : 0.08, frame: '#2a2c33', depth: 0.1 });
    for (let k = 0; k < 4; k++) addWindow(villa, cut, { w: 1.8, h: 2.0, x: X0 + 3.4 + k * 3.0, y: H1 + 1.2, z: Z0 + D - 1.5 + 0.01, lit: R() < 0.7 ? 0.55 : 0.08, frame: '#2a2c33', depth: 0.1 });
    // balkon s ogradom (staklo) na katu
    villa.add(box(W - 3, 0.18, 1.5, stone, X0 + (W - 3) / 2 + 1.5, H1, Z0 + D - 0.75));
    const rail = new THREE.Mesh(new THREE.PlaneGeometry(W - 3, 1.0), mat({ color: '#9fb3ff', rough: 0.05, metal: 0.3, transparent: true, opacity: 0.16, env: 1.5 }, cut));
    rail.position.set(X0 + (W - 3) / 2 + 1.5, H1 + 0.68, Z0 + D);
    villa.add(rail);
    // pergola nad terasom
    const per = new THREE.Group();
    scene.add(per);
    for (const x of [-5.6, -2, 1.6]) per.add(box(0.16, 2.9, 0.16, wood, x, 0, 3.0));
    for (let z = Z0 + D; z <= 3.1; z += 0.55) per.add(box(7.6, 0.08, 0.1, wood, -2, 2.9, z));
    per.add(box(7.6, 0.2, 0.16, wood, -2, 2.75, 3.0));

    // bazen
    const PX = 2.6, PZ = 5.2, PW = 9, PD = 4;
    const coping = [[PX, PZ - PD / 2 - 0.25, PW + 1, 0.5], [PX, PZ + PD / 2 + 0.25, PW + 1, 0.5], [PX - PW / 2 - 0.25, PZ, 0.5, PD], [PX + PW / 2 + 0.25, PZ, 0.5, PD]];
    // bazen je izdignut (pod je zrcalo): zidovi bazena + rub
    for (const [x, z, w, d] of coping) { scene.add(box(w, 0.5, d, mat({ color: '#a39d92', rough: 0.7 }), x, 0, z)); scene.add(box(w + 0.1, 0.08, d + 0.1, stone, x, 0.5, z)); }
    const waterM = new THREE.ShaderMaterial({
      uniforms: { uA: { value: new THREE.Color('#1d4dff') }, uB: { value: new THREE.Color('#7fe1ff') } },
      vertexShader: 'varying vec3 vW; void main(){ vW = (modelMatrix * vec4(position,1.0)).xyz; gl_Position = projectionMatrix * viewMatrix * vec4(vW,1.0); }',
      fragmentShader: /* glsl */ `uniform vec3 uA; uniform vec3 uB; varying vec3 vW;
        float c(vec2 p){ float v = 0.0; for (int i = 0; i < 4; i++) { float fi = float(i); p = p * 1.7 + vec2(1.3 * fi, 0.7); v += abs(sin(p.x + sin(p.y * 1.3 + fi)) * sin(p.y + sin(p.x * 0.9 - fi))); } return v / 4.0; }
        void main(){ float k = c(vW.xz * 1.3); float caust = pow(1.0 - k, 6.0); vec3 col = uA * 0.9 + uB * caust * 2.2; gl_FragColor = vec4(col, 1.0); }`,
    });
    const water = new THREE.Mesh(new THREE.PlaneGeometry(PW, PD), waterM);
    water.rotation.x = -Math.PI / 2;
    water.position.set(PX, 0.44, PZ);
    scene.add(water);
    light(scene, 'point', '#3d6bff', 30, [PX, 0.6, PZ], null, { dist: 9 });
    light(scene, 'point', '#5aa0ff', 12, [PX - 3, 0.5, PZ], null, { dist: 6 });
    // ležaljke
    for (const x of [-1.6, 0.4]) {
      const g = new THREE.Group();
      g.position.set(x, 0, PZ - PD / 2 - 1.6);
      scene.add(g);
      g.add(box(0.7, 0.32, 1.9, mat({ color: '#e9e5dd', rough: 0.5 }), 0, 0, 0));
      const bk = box(0.7, 0.08, 0.8, mat({ color: '#e9e5dd', rough: 0.5 }), 0, 0.3, -0.75);
      bk.rotation.x = 0.7;
      g.add(bk);
    }
    // zatvoreni suncobran
    const pole = box(0.06, 2.6, 0.06, mat({ color: '#c9ccd3', metal: 0.8, rough: 0.3 }), -3.4, 0, 6.4);
    scene.add(pole);
    const shade = new THREE.Mesh(new THREE.ConeGeometry(0.28, 1.8, 16), mat({ color: '#efebe3', rough: 0.8 }));
    shade.position.set(-3.4, 1.9, 6.4);
    shade.rotation.x = Math.PI;
    shade.castShadow = true;
    scene.add(shade);
    // stolovi sa svijećama ispod pergole
    const tables = [];
    for (const [x, z] of [[-4.6, 1.2], [-2.2, 2.0], [0.2, 1.0]]) {
      scene.add(box(0.06, 0.72, 0.06, mat({ color: '#2a2c33', metal: 0.6, rough: 0.4 }), x, 0, z));
      const top = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.45, 0.04, 32), mat({ color: '#efebe3', rough: 0.45 }));
      top.position.set(x, 0.74, z);
      top.castShadow = top.receiveShadow = true;
      scene.add(top);
      tables.push({ p: [x, 0.84, z], c: '#ffc27a', s: 0.12, k: 3 });
      light(scene, 'point', '#ffb15e', 1.4, [x, 0.95, z], null, { dist: 3 });
    }
    st.dots(tables);
    // lampice na lancima: od pergole prema stupovima uz bazen
    const bulbs = [];
    const poles = [V(-6.5, 3.3, 7.6), V(-1.0, 3.3, 8.6), V(5.0, 3.3, 8.2)];
    for (const p of poles) scene.add(box(0.08, p.y, 0.08, mat({ color: '#2a2c33', metal: 0.6, rough: 0.4 }), p.x, 0, p.z));
    const anchors = [V(-5.6, 2.95, 3.0), V(-2, 2.95, 3.0), V(1.6, 2.95, 3.0)];
    const lines = [[anchors[0], poles[0]], [anchors[1], poles[1]], [anchors[2], poles[2]], [poles[0], poles[1]], [poles[1], poles[2]]];
    const wire = new THREE.MeshBasicMaterial({ color: '#16181d' });
    for (const [a, b] of lines) {
      const pts = catenary(a, b, 0.45, 24);
      scene.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 48, 0.012, 4), wire));
      const L = a.distanceTo(b);
      const n = Math.round(L / 0.55);
      for (let k = 1; k < n; k++) { const t = k / n; const p = pts[Math.round(t * 24)]; bulbs.push({ p: [p.x, p.y - 0.08, p.z], c: '#ffd59a', s: 0.16, k: 3.2 }); }
    }
    st.dots(bulbs);
    light(scene, 'point', '#ffc27a', 10, [-2, 2.6, 6], null, { dist: 10 });

    scene.updateMatrixWorld(true);
    villa.traverse((o) => { if (o.isMesh && o.geometry.type === 'BoxGeometry') bp.edges(o, 30); });
    // tlocrt soba u desnom krilu (nacrt): pregrade i kreveti na katu
    const fy = H1 + 0.2;
    for (const x of [6.5, 8.5]) bp.line(V(x, fy, Z0 + 0.2), V(x, fy, Z0 + D - 1.6));
    for (const [x, z] of [[5.6, Z0 + 1.5], [7.5, Z0 + 1.5], [9.2, Z0 + 1.5]]) {
      bp.poly([V(x - 0.7, fy, z - 0.9), V(x + 0.7, fy, z - 0.9), V(x + 0.7, fy, z + 1.1), V(x - 0.7, fy, z + 1.1)], true);
      bp.line(V(x - 0.7, fy, z - 0.4), V(x + 0.7, fy, z - 0.4));
    }
    // rezervacije: lukovi svjetla koji se spuštaju do prozora
    for (let k = 0; k < 4; k++) {
      const tx = X0 + 3.4 + k * 3.0;
      const end = V(tx, H1 + 1.4, Z0 + D - 1.4);
      const start = V(14 + R() * 4, H1 + 2.5 + R() * 2, Z0 + D + 2 + R() * 3);
      const mid = start.clone().lerp(end, 0.5).add(V(0, 1.6, 1.5));
      trail(scene, new THREE.QuadraticBezierCurve3(start, mid, end), { r: 0.02, color: k % 2 ? '#7f9bff' : '#ffc070', i: 1.6, tail: 0.4, from: 0.1 + R() * 0.15, to: 1, seg: 120 });
      st.dots([{ p: end.toArray(), c: '#fff3e0', s: 0.25, k: 2.5 }]);
    }

    cutSheet(scene, cut, { size: 18, height: 10, i: 0.6 });
    bp.build(scene, st);
    horizon(st, { a0: -2.9, a1: 0.6, seed: 13 });
    motes(st, { n: 140, box: [-8, 0.3, -2, 10, 7, 12], seed: 27, size: [0.02, 0.07] });
    bokeh(st, [{ p: [8.3, 1.2, 12.6], c: '#ffb45e', s: 0.45, a: 0.3 }, { p: [8.8, 2.4, 12.4], c: '#ffd59a', s: 0.3, a: 0.3 }, { p: [8.1, 0.6, 12.9], c: '#5f7dff', s: 0.3, a: 0.25 }]);
  },
};
