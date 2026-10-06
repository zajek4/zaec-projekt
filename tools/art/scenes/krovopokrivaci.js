// Krovopokrivači: krovna ploha u tri stanja — crijep (gotovo), letve i rogovi (u radu), nacrt (plan).
// Niski topli bočni sloj svjetla otkriva reljef crijepa.
import * as THREE from 'three';
import { mat, box, createCut, createBlueprint, cutSheet, struts, motes, bokeh, light, horizon, rng, V } from '../kit.js';
import { addWindow, nightLights } from './common.js';

export default {
  file: 'world/djelatnost-krovopokrivaci.webp',
  fov: 36,
  async build(st) {
    const { scene, camera } = st;
    camera.position.set(16.5, 7.6, 21.5);
    camera.lookAt(-0.4, 4.9, 0.5);
    st.sky.uAz.value = -2.0;
    st.sky.uGlowI.value = 0.55;
    st.addFloor({ cell: 2, gridI: 0.35, refl: 0.4, fall: 0.04 });
    nightLights(scene, { key: [-26, 9, 10], keyI: 2.6, fill: [20, 12, -6], fillI: 0.5, target: [0, 6, 0], shadow: 16 });

    const XC = 2.4;
    const cut = createCut(V(-1, 0, 0), V(XC, 0, 0), { k: 14, i: 2.4 });
    const bp = createBlueprint(cut, { width: 1.4, opacity: 0.8, ghost: 0.03 });
    const R = rng(17);

    const HW = 6, HD = 4.5, WH = 5, PITCH = (40 * Math.PI) / 180, OV = 0.55;
    const rise = HD * Math.tan(PITCH);
    const yR = WH + rise;
    const Ls = (HD + OV) / Math.cos(PITCH);

    // zidovi
    const wall = mat({ color: '#8f897f', rough: 0.9 }, cut);
    const house = new THREE.Group();
    scene.add(house);
    house.add(box(HW * 2, WH, HD * 2, wall, 0, 0, 0));
    for (const x of [-4, -1, 2.2]) addWindow(house, cut, { w: 1.3, h: 1.5, x, y: 3.4, z: HD + 0.01, lit: R() < 0.8 ? 0.65 : 0.08, frame: '#d9d5cd' });
    for (const x of [-4, 2.2]) addWindow(house, cut, { w: 1.3, h: 1.5, x, y: 1.3, z: HD + 0.01, lit: 0.6, frame: '#d9d5cd' });
    // zabat (trokut) iznad bočnih zidova
    const gs = new THREE.Shape();
    gs.moveTo(-HD, 0); gs.lineTo(HD, 0); gs.lineTo(0, rise); gs.closePath();
    for (const sx of [-1, 1]) {
      const g = new THREE.Mesh(new THREE.ShapeGeometry(gs), wall);
      g.rotation.y = sx * Math.PI / 2;
      g.position.set(sx * HW, WH, 0);
      g.castShadow = g.receiveShadow = true;
      house.add(g);
    }

    // prednja krovna ploha: lokalno x = uzduž, z = niz kosinu od sljemena, y = normala
    const slope = new THREE.Group();
    slope.position.set(0, yR, 0);
    slope.rotation.x = PITCH;
    scene.add(slope);
    const wood = mat({ color: '#a8763f', rough: 0.75 }, cut);
    const woodD = mat({ color: '#7a522a', rough: 0.8 }, cut);
    // rogovi
    for (let x = -HW - 0.3; x <= HW + 0.31; x += 0.8) slope.add(box(0.08, 0.16, Ls, woodD, x, -0.2, Ls / 2 - 0.0));
    // folija ispod letava (samo stvarni dio)
    const foil = new THREE.Mesh(new THREE.PlaneGeometry(HW + XC + 0.6, Ls), mat({ color: '#2b3140', rough: 0.55, metal: 0.1, side: THREE.DoubleSide }, cut));
    foil.rotation.x = -Math.PI / 2;
    foil.position.set((-HW - 0.6 + XC) / 2, -0.03, Ls / 2);
    foil.receiveShadow = true;
    slope.add(foil);
    // letve
    for (let z = 0.15; z < Ls; z += 0.34) slope.add(box(HW * 2 + 0.6, 0.03, 0.05, wood, 0, 0, z));
    // crijep (kanalica): polucilindri, lijevi dio s neravnim rubom
    const tg = new THREE.CylinderGeometry(0.115, 0.13, 0.44, 12, 1, false, -Math.PI / 2, Math.PI).rotateX(-Math.PI / 2);
    const tiles = [];
    let row = 0;
    for (let z = 0.2; z < Ls - 0.05; z += 0.34, row++) {
      const edge = -1.4 + Math.sin(row * 1.7) * 0.5 + R() * 0.9;
      for (let x = -HW - 0.3; x < edge; x += 0.25) tiles.push([x, z, R()]);
    }
    const tm = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.62, metalness: 0, envMapIntensity: 0.8 });
    tm.clippingPlanes = [cut.plane];
    const im = new THREE.InstancedMesh(tg, tm, tiles.length);
    const M = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler();
    const base = new THREE.Color('#a24a2b');
    tiles.forEach(([x, z, r], i) => {
      e.set(-0.07 + r * 0.03, 0, (r - 0.5) * 0.03);
      q.setFromEuler(e);
      M.compose(V(x, 0.05, z), q, V(1, 1, 1));
      im.setMatrixAt(i, M);
      const c = base.clone().offsetHSL((r - 0.5) * 0.03, (r - 0.5) * 0.15, (r - 0.5) * 0.12);
      im.setColorAt(i, c);
    });
    im.castShadow = im.receiveShadow = true;
    slope.add(im);
    // krovni prozor u gotovom dijelu
    const sk = box(1.0, 0.1, 1.3, mat({ color: '#30333b', metal: 0.6, rough: 0.35 }, cut), -3.6, 0.06, 2.2);
    slope.add(sk);
    const skg = new THREE.Mesh(new THREE.PlaneGeometry(0.82, 1.1), mat({ color: '#000', emissive: '#ffbf75', ei: 1.4 }, cut));
    skg.rotation.x = -Math.PI / 2;
    skg.position.set(-3.6, 0.17, 2.85);
    slope.add(skg);
    // sljemenjaci nad gotovim dijelom
    const ridgeM = mat({ color: '#8f3f25', rough: 0.6 }, cut);
    for (let x = -HW - 0.2; x < -1.6; x += 0.38) {
      const r = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.18, 0.42, 12, 1, false, -Math.PI / 2, Math.PI).rotateZ(Math.PI / 2).rotateX(-Math.PI / 2), ridgeM);
      r.position.set(x, yR + 0.12, 0);
      r.castShadow = true;
      scene.add(r);
    }
    // stražnja ploha (tamna, gotova)
    const backY = new THREE.Group();
    backY.position.set(0, yR, 0);
    backY.rotation.y = Math.PI;
    scene.add(backY);
    const backS = new THREE.Group();
    backS.rotation.x = PITCH;
    backY.add(backS);
    const back = new THREE.Mesh(new THREE.PlaneGeometry(HW * 2 + 0.6, Ls), mat({ color: '#5a2a1b', rough: 0.7, side: THREE.DoubleSide }, cut));
    back.rotation.x = -Math.PI / 2;
    back.position.set(0, 0.05, Ls / 2);
    backS.add(back);
    // dimnjak
    const brick = mat({ color: '#7d3b26', rough: 0.85 }, cut);
    scene.add(box(0.8, 2.3, 0.8, brick, -3.4, yR - 1.1, -0.9));
    scene.add(box(1.0, 0.15, 1.0, mat({ color: '#3a3a3e', rough: 0.6 }, cut), -3.4, yR + 1.2, -0.9));
    // ljestve naslonjene na strehu (u dijelu koji je u radu)
    const lad = mat({ color: '#c9ccd3', rough: 0.4, metal: 0.8 }, cut);
    const lb = V(1.1, 0, HD + 2.6), lt = V(1.1, WH + 1.0, HD + 0.4);
    const pairs = [[lb.clone().add(V(-0.25, 0, 0)), lt.clone().add(V(-0.25, 0, 0))], [lb.clone().add(V(0.25, 0, 0)), lt.clone().add(V(0.25, 0, 0))]];
    for (let t = 0.06; t < 1; t += 0.06) { const p = lb.clone().lerp(lt, t); pairs.push([p.clone().add(V(-0.25, 0, 0)), p.clone().add(V(0.25, 0, 0)), 0.018]); }
    struts(scene, pairs, 0.03, lad);
    // paleta crijepa na tlu
    const pal = new THREE.Group();
    scene.add(pal);
    pal.add(box(1.2, 0.14, 1.0, woodD, 3.6, 0, HD + 2.4, 0.3));
    for (let k = 0; k < 3; k++) pal.add(box(1.1, 0.25, 0.9, mat({ color: '#9b4529', rough: 0.7 }, cut), 3.6, 0.14 + k * 0.26, HD + 2.4, 0.3));

    scene.updateMatrixWorld(true);
    house.traverse((o) => { if (o.isMesh && o.geometry.type === 'BoxGeometry') bp.edges(o, 30); });
    slope.children.forEach((o) => { if (o.isMesh && !o.isInstancedMesh && o.geometry.type === 'BoxGeometry') bp.edges(o, 30); });
    // obris krova i sljeme u nacrtu
    const ridgeA = V(-HW - OV, yR, 0), ridgeB = V(HW + OV, yR, 0);
    const eA = V(-HW - OV, WH - OV * Math.tan(PITCH), HD + OV), eB = V(HW + OV, WH - OV * Math.tan(PITCH), HD + OV);
    bp.poly([ridgeA, ridgeB, eB, eA], true);
    bp.line(V(HW + OV, yR, 0), V(HW + OV, WH - OV * Math.tan(PITCH), -HD - OV));
    // kotiranje nagiba (luk 40°)
    const pc = V(HW + 1.2, WH, HD);
    const arc = [];
    for (let k = 0; k <= 16; k++) { const a = (k / 16) * PITCH; arc.push(V(HW + 1.2, WH + Math.sin(a) * 1.6, HD - Math.cos(a) * 1.6 + 0.0)); }
    bp.poly(arc);
    bp.line(pc, V(HW + 1.2, WH, HD - 2.2));
    bp.line(pc, V(HW + 1.2, WH + Math.sin(PITCH) * 2.2, HD - Math.cos(PITCH) * 2.2));
    st.dots([{ p: ridgeB.toArray(), c: '#9fb3ff', s: 0.35, k: 1.6 }, { p: eB.toArray(), c: '#9fb3ff', s: 0.35, k: 1.6 }]);

    // radno svjetlo na ljestvama i svjetlo iz prozora na tlo
    light(scene, 'spot', '#ffd7a8', 260, [1.6, WH + 3.5, HD + 4], [0, yR - 1.5, 1.5], { angle: 0.5, pen: 0.8 });
    light(scene, 'point', '#ffae5c', 8, [0, 1.6, HD + 2], null, { dist: 10 });

    cutSheet(scene, cut, { size: 22, height: 14, i: 0.6 });
    bp.build(scene, st);
    horizon(st, { a0: -2.8, a1: 0.5, seed: 4 });
    motes(st, { n: 120, box: [-8, 2, -4, 10, 12, 10], seed: 23, size: [0.03, 0.1] });
    bokeh(st, [{ p: [13.2, 6.9, 17.2], c: '#ffb45e', s: 0.7, a: 0.3 }, { p: [13.8, 8.9, 17], c: '#5f7dff', s: 0.5, a: 0.25 }]);
  },
};
