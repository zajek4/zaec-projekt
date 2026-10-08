// Nacrt konkatedrale: kotna linija visine tornja, os tornja i linija tla iscrtavaju se kad skener pretvori
// zgradu u crtež; zatim se mjerne linije same zgrade produljuju u konstrukcijske pravce (regulacijska mreža)
// i na kraju legnu na stupce i redove web stranice. Sve u lokalnim metrima grada (dijete city.group).
import * as THREE from 'three';
import { FRAME } from './wire.js';

const VERT = /* glsl */ `
  attribute float aT; attribute float aD; attribute float aDash; attribute vec3 aTo;
  uniform float uMix;
  varying float vT; varying float vD; varying float vDash;
  void main(){
    vT = aT; vD = aD; vDash = aDash;
    float e = uMix * uMix * (3.0 - 2.0 * uMix);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(mix(position, aTo, e), 1.0);
  }`;
const FRAG = /* glsl */ `
  uniform vec3 uColor; uniform float uOpacity; uniform float uDraw;
  varying float vT; varying float vD; varying float vDash;
  void main(){
    // crta se otkriva redom (aT), pa se kotna linija "povlači" kao pero
    if (vT > uDraw) discard;
    float a = uOpacity;
    if (vDash > 0.5) {
      // crtkano (2) ili crta-točka (3), duljine u metrima
      float f = fract(vD / (vDash > 2.5 ? 9.0 : 4.0));
      float on = vDash > 2.5 ? step(f, 0.62) + step(0.74, f) * step(f, 0.8) : step(f, 0.55);
      if (on < 0.5) discard;
    }
    // svjež kraj pera je svjetliji
    a *= 1.0 + 1.4 * exp(-pow((uDraw - vT) / 0.04, 2.0)) * step(uDraw, 0.999);
    gl_FragColor = vec4(uColor * a, a);
  }`;

function lineSet(color) {
  const uniforms = {
    uColor: { value: new THREE.Color(color) },
    uOpacity: { value: 0 },
    uDraw: { value: 0 },
    uMix: { value: 0 },
  };
  const mat = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: VERT,
    fragmentShader: FRAG,
    transparent: true,
    depthWrite: false,
    depthTest: false,
    blending: THREE.CustomBlending,
    blendSrc: THREE.OneFactor,
    blendDst: THREE.OneFactor,
  });
  const obj = new THREE.LineSegments(new THREE.BufferGeometry(), mat);
  obj.frustumCulled = false;
  obj.renderOrder = 4;
  obj.visible = false;
  return { obj, mat, uniforms };
}

/** Graditelj segmenata: svaki ima vrijeme otkrivanja t0→t1, crtkanje i (po želji) ciljni položaj. */
function segs() {
  const P = [], T = [], D = [], K = [], TO = [];
  return {
    add(a, b, t0, t1, dash = 0, ta = a, tb = b) {
      P.push(...a, ...b);
      T.push(t0, t1);
      const L = Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]);
      D.push(0, L);
      K.push(dash, dash);
      TO.push(...ta, ...tb);
    },
    geometry() {
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3));
      g.setAttribute('aT', new THREE.Float32BufferAttribute(T, 1));
      g.setAttribute('aD', new THREE.Float32BufferAttribute(D, 1));
      g.setAttribute('aDash', new THREE.Float32BufferAttribute(K, 1));
      g.setAttribute('aTo', new THREE.Float32BufferAttribute(TO, 3));
      return g;
    },
  };
}

export function createBlueprint({ height = 90 } = {}) {
  const group = new THREE.Group();
  group.name = 'nacrt';
  const notes = lineSet('#b4c4ff'); // kote, os, tlo
  const rules = lineSet('#7f9bff'); // konstrukcijski pravci → mreža stranice
  group.add(notes.obj, rules.obj);
  const anchors = { dim: new THREE.Vector3(), lvl: new THREE.Vector3() };
  let box = null;

  /** Kote i os iz obrisa modela (lokalni metri); vrh tornja je najviša točka. */
  function setCathedral(edges) {
    const p = edges.attributes.position;
    const b = new THREE.Box3();
    const v = new THREE.Vector3(), spire = new THREE.Vector3(0, -1e9, 0);
    for (let i = 0; i < p.count; i++) {
      v.set(p.getX(i), p.getY(i), p.getZ(i));
      b.expandByPoint(v);
      if (v.y > spire.y) spire.copy(v);
    }
    box = b;
    const z = spire.z; // ravnina osi tornja: os, kota i tlo leže u istoj ravnini kao vrh
    const xL = b.min.x - 10; // kotna linija lijevo od lađe (desno je rub ekrana i navigacija poglavlja)
    const H = Math.min(height, b.max.y);
    const S = segs();
    // tlo: od sredine prema rubovima
    const xm = (b.min.x + b.max.x) / 2;
    S.add([xm, 0, z], [b.min.x - 30, 0, z], 0, 0.22);
    S.add([xm, 0, z], [b.max.x + 24, 0, z], 0, 0.22);
    // os tornja: crta-točka, malo ispod tla do iznad vrha
    S.add([spire.x, -6, z], [spire.x, b.max.y + 10, z], 0.12, 0.5, 3);
    // pomoćna linija s vrha visine do kotne linije (crtkano)
    S.add([spire.x - 2, H, z], [xL - 4, H, z], 0.45, 0.68, 2);
    // kotna linija: raste odozdo prema gore, s kosim crticama na krajevima (arhitektonski znak)
    S.add([xL, 0, z], [xL, H, z], 0.5, 0.92);
    const t = 2.2;
    S.add([xL - t, -t, z], [xL + t, t, z], 0.5, 0.56);
    S.add([xL - t, H - t, z], [xL + t, H + t, z], 0.88, 0.94);
    // kratki produžetak tla do kotne linije
    S.add([xL - 4, 0, z], [b.min.x - 30, 0, z], 0.4, 0.5);
    notes.obj.geometry.dispose();
    notes.obj.geometry = S.geometry();
    anchors.dim.set(xL + 2.5, H * 0.5, z);
    anchors.lvl.set(xL - 3, H, z);
  }

  /**
   * Konstrukcijski pravci kroz mjerne linije zgrade (iz morpha, svjetske jedinice) → lokalni metri.
   * Cilj: stupci i redovi okvira web stranice (FRAME), pa mreža zgrade postaje mreža stranice.
   */
  function setGrid(info, scale) {
    if (!info) return;
    const sx = 1 / scale.x, sy = 1 / scale.y, sz = 1 / scale.z;
    const xs = [...info.xs].sort((a, b) => a - b), ys = [...info.ys].sort((a, b) => a - b);
    // pravci izlaze iz obrisa zgrade udesno i gore (lijevo je tekst poglavlja)
    const W = info.x1 - info.x0, Hh = info.y1 - info.y0;
    const X0 = info.x0 - W * 0.06, X1 = info.x1 + W * 0.22, Y0 = info.y0 - Hh * 0.04, Y1 = info.y1 + Hh * 0.12;
    const z = info.z;
    const fz = 0.02; // okvir stranice je na z = 0 (svjetski)
    const S = segs();
    const L = (x, y, zz) => [x * sx, y * sy, zz * sz];
    // stupci stranice: rubni sadržaja 0,05 i 0,95, jednaki razmaci između
    xs.forEach((x, i) => {
      const k = xs.length > 1 ? i / (xs.length - 1) : 0.5;
      const u = 0.05 + 0.9 * k;
      const wx = FRAME.x0 + u * FRAME.w;
      // od sredine pravca prema krajevima, kraći pravci prvi
      const ym = (Y0 + Y1) / 2;
      const d0 = 0.08 * (i % 3);
      S.add(L(x, ym, z), L(x, Y1, z), d0, 0.6 + d0, 2, L(wx, FRAME.y0 + FRAME.h * 0.5, fz), L(wx, FRAME.y0 + FRAME.h * 0.92, fz));
      S.add(L(x, ym, z), L(x, Y0, z), d0, 0.6 + d0, 2, L(wx, FRAME.y0 + FRAME.h * 0.5, fz), L(wx, FRAME.y0, fz));
    });
    // redovi stranice: granice sekcija (zaglavlje, hero, dokazi, kartice, poziv)
    const V = [0.11, 0.34, 0.43, 0.49, 0.6, 0.79, 0.85, 0.925];
    ys.forEach((y, i) => {
      const v = V[Math.round((i / Math.max(1, ys.length - 1)) * (V.length - 1))];
      const wy = FRAME.y0 + v * FRAME.h;
      const xm = (X0 + X1) / 2;
      const d0 = 0.15 + 0.06 * (i % 2);
      S.add(L(xm, y, z), L(X1, y, z), d0, 0.75 + d0 * 0.3, 2, L(FRAME.x0 + FRAME.w * 0.5, wy, fz), L(FRAME.x0 + FRAME.w, wy, fz));
      S.add(L(xm, y, z), L(X0, y, z), d0, 0.75 + d0 * 0.3, 2, L(FRAME.x0 + FRAME.w * 0.5, wy, fz), L(FRAME.x0, wy, fz));
    });
    rules.obj.geometry.dispose();
    rules.obj.geometry = S.geometry();
  }

  return {
    group,
    setCathedral,
    setGrid,
    /** lokalna točka oznake → svjetske koordinate */
    anchor(key, out) {
      return out.copy(anchors[key]).applyMatrix4(group.matrixWorld);
    },
    /** s: { notes 0..1 (iscrtavanje kota), notesA, rules 0..1 (iscrtavanje pravaca), rulesA, toSite 0..1 } */
    update(s) {
      const hasNotes = !!box;
      notes.obj.visible = hasNotes && s.notesA > 0.002 && s.notes > 0.001;
      notes.uniforms.uDraw.value = s.notes;
      notes.uniforms.uOpacity.value = 0.55 * s.notesA;
      rules.obj.visible = s.rulesA > 0.002 && s.rules > 0.001 && rules.obj.geometry.attributes.position?.count > 0;
      rules.uniforms.uDraw.value = s.rules;
      rules.uniforms.uMix.value = s.toSite;
      rules.uniforms.uOpacity.value = s.rulesA * (0.3 - 0.14 * s.toSite);
    },
    dispose() {
      notes.obj.geometry.dispose(); rules.obj.geometry.dispose();
      notes.mat.dispose(); rules.mat.dispose();
    },
  };
}
