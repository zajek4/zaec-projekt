// Građevina i adaptacije: zgrada raste iz nacrta — gotova pročelja dolje, betonski skelet u sredini,
// gornji katovi još su nacrt. Toranjski kran (stvaran) spaja ta dva svijeta.
import * as THREE from 'three';
import { mat, box, createCut, createBlueprint, scanDisc, struts, trail, motes, bokeh, light, cone, horizon, rng, V } from '../kit.js';
import { addWindow, nightLights } from './common.js';

export default {
  file: 'world/djelatnost-gradevina-i-adaptacije.webp',
  fov: 40,
  async build(st) {
    const { scene, camera } = st;
    camera.position.set(36, 1.6, 45);
    camera.lookAt(-1.5, 17.5, -5);
    st.sky.uAz.value = -2.2;
    st.sky.uGlowI.value = 0.5;
    st.addFloor({ cell: 2, gridI: 0.4, refl: 0.42, fall: 0.03 });
    nightLights(scene, { key: [-30, 18, -26], keyI: 2.2, target: [0, 8, -2], shadow: 34, fillI: 0.25 });
    light(scene, 'dir', '#ffdcb8', 3.2, [-14, 26, 40], [0, 8, -2]);

    const FH = 3.3, NF = 7, CUT = 4.62 * FH;
    const cut = createCut(V(0, -1, 0), V(0, CUT, 0), { k: 10, i: 3 });
    const bp = createBlueprint(cut, { width: 1.25, opacity: 0.7, ghost: 0.025 });
    const R = rng(4);

    const conc = mat({ color: '#a3a39f', rough: 0.9 }, cut);
    const concD = mat({ color: '#8a8a87', rough: 0.92 }, cut);
    const glassF = mat({ color: '#0b1020', rough: 0.12, metal: 0.6, env: 1.4 }, cut);
    const bld = new THREE.Group();
    scene.add(bld);
    const W = 18, D = 11, X0 = -W / 2, Z0 = -2 - D / 2;
    const cols = [];
    for (let i = 0; i <= 3; i++) for (let j = 0; j <= 2; j++) cols.push([X0 + (i * W) / 3, Z0 + (j * D) / 2]);
    for (let f = 0; f < NF; f++) {
      const y = f * FH;
      // ploča
      bld.add(box(W + 0.6, 0.32, D + 0.6, conc, 0, y + FH - 0.32, -2));
      // stupovi
      for (const [x, z] of cols) bld.add(box(0.45, FH - 0.32, 0.45, concD, x, y, z));
      if (f < 3) {
        // gotovi katovi: staklena pročelja s toplim interijerom
        const zf = Z0 + D + 0.02;
        for (let k = 0; k < 6; k++) {
          const lit = R() < 0.82 ? 0.6 + R() * 0.6 : 0.08;
          addWindow(bld, cut, { w: 2.6, h: 2.3, x: X0 + 1.5 + k * 3, y: y + 0.25 + 1.15, z: zf, lit, frame: '#8d929c', depth: 0.1 });
        }
        for (let k = 0; k < 4; k++) {
          const lit = R() < 0.75 ? 0.5 + R() * 0.6 : 0.08;
          addWindow(bld, cut, { w: 2.2, h: 2.3, x: X0 + W + 0.02, y: y + 0.25 + 1.15, z: Z0 + 1.5 + k * 2.7, ry: Math.PI / 2, lit, frame: '#8d929c', depth: 0.1 });
        }
        // parapet između katova
        bld.add(box(W + 0.6, 0.55, 0.12, conc, 0, y + FH - 0.85, Z0 + D + 0.3));
      }
      // zadnji zid i jezgra (stubište)
      bld.add(box(4, FH - 0.32, 4, concD, X0 + 3, y, Z0 + 2.2));
    }
    // armatura na vrhu skeleta
    const rebar = mat({ color: '#6a4a33', rough: 0.6, metal: 0.6 }, cut);
    for (const [x, z] of cols) for (let k = 0; k < 4; k++) bld.add(box(0.03, 1.4, 0.03, rebar, x + ((k % 2) - 0.5) * 0.3, NF * FH, z + ((k >> 1) - 0.5) * 0.3));

    scene.updateMatrixWorld(true);
    bld.traverse((o) => { if (o.isMesh && o.geometry.type !== 'PlaneGeometry') bp.edges(o, 30); });
    // budući krovni vijenac i atika u nacrtu
    const yr = NF * FH;
    bp.poly([V(X0 - 0.3, yr + 1.2, Z0 - 0.3), V(X0 + W + 0.3, yr + 1.2, Z0 - 0.3), V(X0 + W + 0.3, yr + 1.2, Z0 + D + 0.3), V(X0 - 0.3, yr + 1.2, Z0 + D + 0.3)], true);
    for (const [x, z] of [[X0 - 0.3, Z0 - 0.3], [X0 + W + 0.3, Z0 - 0.3], [X0 + W + 0.3, Z0 + D + 0.3], [X0 - 0.3, Z0 + D + 0.3]]) bp.line(V(x, yr, z), V(x, yr + 1.2, z));
    // kote i dimenzijske linije (nacrt)
    for (let f = 5; f <= NF; f++) bp.line(V(X0 + W + 2.5, f * FH, Z0 + D), V(X0 + W + 4, f * FH, Z0 + D));
    bp.line(V(X0 + W + 3.2, 4 * FH, Z0 + D), V(X0 + W + 3.2, yr + 1.2, Z0 + D));
    // točke na čvorovima gornjih katova
    const nodes = [];
    for (let f = 5; f <= NF; f++) for (const [x, z] of cols) nodes.push({ p: [x, f * FH, z], c: '#9fb3ff', s: 0.22, k: 1.2, a: 0.6 });
    st.dots(nodes);

    // skela uz lijevi rub (stvarna)
    const sc = mat({ color: '#9aa1ad', rough: 0.4, metal: 0.8 }, cut);
    const sp = [];
    const sx = X0 - 1.4;
    for (let k = 0; k <= 4; k++) {
      const z = Z0 + k * (D / 4);
      sp.push([V(sx, 0, z), V(sx, 4.4 * FH, z)], [V(sx - 1.1, 0, z), V(sx - 1.1, 4.4 * FH, z)]);
      for (let f = 1; f <= 4; f++) sp.push([V(sx - 1.1, f * FH, z), V(sx, f * FH, z)]);
    }
    for (let f = 1; f <= 4; f++) for (const xx of [sx, sx - 1.1]) sp.push([V(xx, f * FH, Z0), V(xx, f * FH, Z0 + D)]);
    for (let k = 0; k < 4; k++) for (let f = 0; f < 4; f++) sp.push([V(sx - 1.1, f * FH, Z0 + k * (D / 4)), V(sx - 1.1, (f + 1) * FH, Z0 + (k + 1) * (D / 4))]);
    struts(scene, sp, 0.045, sc);

    // ——— toranjski kran ———
    const cm = mat({ color: '#e0a23a', rough: 0.45, metal: 0.5 }, null);
    const cx = 13.5, cz = -9, MH = 33, half = 0.85;
    const cp = [];
    const c4 = (y) => [V(cx - half, y, cz - half), V(cx + half, y, cz - half), V(cx + half, y, cz + half), V(cx - half, y, cz + half)];
    for (let y = 0; y < MH; y += 1.8) {
      const a = c4(y), b = c4(Math.min(MH, y + 1.8));
      for (let k = 0; k < 4; k++) { cp.push([a[k], b[k], 0.07]); cp.push([a[k], b[(k + 1) % 4], 0.035]); cp.push([b[k], b[(k + 1) % 4], 0.035]); }
    }
    // kabina i okretni vrh
    scene.add(box(2.2, 2, 2.2, mat({ color: '#d79a35', rough: 0.4, metal: 0.4 }), cx, MH, cz));
    const cab = box(1.3, 1.5, 1.4, mat({ color: '#111', emissive: '#ffcf8a', ei: 1.2, rough: 0.2 }), cx + 1.6, MH + 0.2, cz);
    scene.add(cab);
    // strijela prema zgradi (smjer -x, blago prema kameri)
    const dir = V(-1, 0, 0.32).normalize();
    const side = V(-dir.z, 0, dir.x);
    const top = V(cx, MH + 2, cz);
    const L = 40, LC = 12, jh = 1.6;
    const P = (t, s, h) => top.clone().add(dir.clone().multiplyScalar(t)).add(side.clone().multiplyScalar(s)).add(V(0, h, 0));
    for (let t = -LC; t < L; t += 2) {
      const t2 = Math.min(L, t + 2);
      cp.push([P(t, -0.6, 0), P(t2, -0.6, 0), 0.06], [P(t, 0.6, 0), P(t2, 0.6, 0), 0.06], [P(t, 0, jh), P(t2, 0, jh), 0.06]);
      cp.push([P(t, -0.6, 0), P(t2, 0.6, 0), 0.03], [P(t, -0.6, 0), P(t, 0, jh), 0.03], [P(t, 0.6, 0), P(t, 0, jh), 0.03], [P(t, 0, jh), P(t2, -0.6, 0), 0.03]);
    }
    // vrh tornja (kapa) i zatege
    const peak = top.clone().add(V(0, 7, 0));
    cp.push([P(0, -0.6, 0), peak, 0.08], [P(0, 0.6, 0), peak, 0.08], [peak, P(L * 0.62, 0, jh), 0.04], [peak, P(-LC, 0, jh), 0.04]);
    struts(scene, cp, 0.05, cm);
    // protuuteg
    for (let k = 0; k < 3; k++) {
      const p = P(-LC + 1 + k * 1.1, 0, -1.6);
      scene.add(box(1, 2.2, 1.6, mat({ color: '#5d5f66', rough: 0.9 }), p.x, p.y, p.z));
    }
    // kolica, uže i teret (čelični nosač) iznad budućeg kata
    const tro = P(24, 0, 0);
    const loadY = CUT + 6.5;
    const ropeM = new THREE.MeshBasicMaterial({ color: '#30333b' });
    const rope = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, tro.y - loadY, 4), ropeM);
    rope.position.set(tro.x, (tro.y + loadY) / 2, tro.z);
    scene.add(rope);
    scene.add(box(0.6, 0.5, 0.4, mat({ color: '#d1a33c', metal: 0.6, rough: 0.3 }), tro.x, loadY - 0.5, tro.z));
    const beam = box(9, 0.5, 0.35, mat({ color: '#c9ccd4', rough: 0.35, metal: 0.7 }), tro.x, loadY - 1.6, tro.z, 0.5);
    light(scene, 'point', '#ffd2a0', 30, [tro.x + 2, loadY + 1, tro.z + 3], null, { dist: 10 });
    scene.add(beam);
    // signalna svjetla krana (toplo jantarna) i radna svjetla
    st.dots([
      { p: [peak.x, peak.y + 0.3, peak.z], c: '#ff9a3c', s: 1.4, k: 3 },
      { p: P(L, 0, 0.4).toArray(), c: '#ff9a3c', s: 1.1, k: 3 },
      { p: P(-LC, 0, 0.4).toArray(), c: '#ff9a3c', s: 1.0, k: 3 },
    ]);
    const lamp = P(10, 0, -0.3);
    cone(scene, lamp, V(-3, 2 * FH, 3), { r0: 0.2, r1: 7, color: '#ffd7a0', i: 0.16 });
    light(scene, 'spot', '#ffcf8a', 900, lamp.toArray(), [-3, 2 * FH, 3], { angle: 0.45, pen: 0.7, shadow: false });
    st.dots([{ p: lamp.toArray(), c: '#fff1d8', s: 1.6, k: 3 }]);

    // radna svjetla na katovima skeleta
    const work = [];
    for (const [x, f] of [[-4, 3], [3, 3], [6, 4], [-6, 4]]) {
      light(scene, 'point', '#ffbe78', 14, [x, f * FH + 1.6, -0.5], null, { dist: 9 });
      work.push({ p: [x, f * FH + 1.6, -0.5], c: '#ffdcae', s: 0.6, k: 2.4 });
    }
    st.dots(work);

    // iskre zavarivanja na rubu skeleta
    const weld = V(4.2, 4 * FH + 0.2, Z0 + D + 0.35);
    const Rs = rng(21);
    for (let k = 0; k < 16; k++) {
      const vx = (Rs() - 0.5) * 3, vz = 1 + Rs() * 2.5, up = 0.5 + Rs() * 1.8, fall = 2.5 + Rs() * 4;
      const pts = [];
      for (let t = 0; t <= 1.0001; t += 0.1) pts.push(V(weld.x + vx * t, weld.y + up * t - fall * t * t, weld.z + vz * t));
      trail(scene, new THREE.CatmullRomCurve3(pts), { r: 0.018, color: '#ffb23f', hot: '#fff3d6', i: 3, tail: 0.3, from: 0.15 + Rs() * 0.3, to: 0.55 + Rs() * 0.45, seg: 40, radial: 4 });
    }
    st.dots([{ p: weld.toArray(), c: '#fff4e0', s: 1.6, k: 4 }, { p: weld.toArray(), c: '#7f9bff', s: 4.5, k: 0.6, a: 0.5 }]);
    light(scene, 'point', '#bcd0ff', 40, [weld.x, weld.y + 0.3, weld.z + 0.4], null, { dist: 14 });

    scanDisc(scene, CUT, { center: [0, -2], r: 17, i: 0.6 });
    bp.build(scene, st);
    horizon(st, { a0: -2.8, a1: 0.4, seed: 9 });
    motes(st, { n: 160, box: [-20, 0.3, -18, 22, 26, 14], seed: 12, size: [0.04, 0.14] });
    bokeh(st, [
      { p: [27, 1.2, 35], c: '#ffb45e', s: 1.0, a: 0.3 },
      { p: [29, 2.6, 34], c: '#5f7dff', s: 0.7, a: 0.25 },
    ]);
  },
};
