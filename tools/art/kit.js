// Gradivni blokovi kadrova: materijali s rezom "nacrt ↔ stvarno", crte nacrta, svjetlosni tragovi, rešetke, snopovi.
import * as THREE from 'three';
import { LineSegments2 } from 'three/examples/jsm/lines/LineSegments2.js';
import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { PAL } from './stage.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);
export { V };

// Rez: ravnina dijeli predmet na stvarni dio (pozitivna strana) i nacrt (negativna strana).
// Uz rub reza stvarni materijal svijetli tankom signalnom crtom — kao skener na naslovnici.
export function createCut(normal = V(1, 0, 0), point = V(0, 0, 0), { glow = PAL.ice, k = 6, i = 3 } = {}) {
  const n = normal.clone().normalize();
  const plane = new THREE.Plane().setFromNormalAndCoplanarPoint(n, point);
  const inv = plane.clone().negate();
  const U = { uCutN: { value: n }, uCutD: { value: -plane.constant }, uCutC: { value: new THREE.Color(glow) }, uCutK: { value: k }, uCutI: { value: i } };
  return { plane, inv, U, normal: n, point: point.clone() };
}

/** MeshStandardMaterial koji poštuje rez (clip) i svijetli uz njegov rub. */
export function mat(o = {}, cut = null, { clip = true, edgeGlow = true } = {}) {
  const { color = '#30343f', rough = 0.7, metal = 0, emissive = '#000000', ei = 1, flat = false, side = THREE.FrontSide, env = 1, map = null, emissiveMap = null, transparent = false, opacity = 1 } = o;
  const m = new THREE.MeshStandardMaterial({ color, roughness: rough, metalness: metal, emissive, emissiveIntensity: ei, flatShading: flat, side, envMapIntensity: env, map, emissiveMap, transparent, opacity });
  if (cut && clip) {
    m.clippingPlanes = [cut.plane];
    m.clipShadows = true;
    if (edgeGlow) {
      m.onBeforeCompile = (sh) => {
        Object.assign(sh.uniforms, cut.U);
        sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vCutW;').replace('#include <fog_vertex>', '#include <fog_vertex>\nvCutW = (modelMatrix * vec4(transformed, 1.0)).xyz;');
        sh.fragmentShader = sh.fragmentShader
          .replace('#include <common>', '#include <common>\nvarying vec3 vCutW; uniform vec3 uCutN; uniform float uCutD; uniform vec3 uCutC; uniform float uCutK; uniform float uCutI;')
          .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\n{ float sd = dot(vCutW, uCutN) - uCutD; totalEmissiveRadiance += uCutC * exp(-max(sd, 0.0) * uCutK) * uCutI; }');
      };
      m.customProgramCacheKey = () => 'cut';
    }
  }
  return m;
}

/** Skuplja geometriju za nacrt: rubove meševa i proizvoljne segmente, u svjetskom prostoru. */
export function createBlueprint(cut, { color = PAL.line, width = 2.2, opacity = 0.9, ghost = 0.05, angle = 28 } = {}) {
  const segs = [];
  const ghosts = [];
  return {
    segs,
    /** rubovi meša (mesh mora imati ažuriran matrixWorld) */
    edges(mesh, a = angle) {
      mesh.updateWorldMatrix(true, false);
      const e = new THREE.EdgesGeometry(mesh.geometry, a);
      e.applyMatrix4(mesh.matrixWorld);
      const p = e.attributes.position.array;
      for (let i = 0; i < p.length; i++) segs.push(p[i]);
      if (ghost > 0) { const g = mesh.geometry.clone().applyMatrix4(mesh.matrixWorld); ghosts.push(g.index ? g.toNonIndexed() : g); }
      e.dispose();
    },
    line(a, b) { segs.push(a.x, a.y, a.z, b.x, b.y, b.z); },
    poly(pts, closed = false) { for (let i = 0; i < pts.length - 1 + (closed ? 1 : 0); i++) this.line(pts[i], pts[(i + 1) % pts.length]); },
    build(scene, stage) {
      const out = new THREE.Group();
      if (segs.length) {
        const g = new LineSegmentsGeometry().setPositions(segs);
        const m = new LineMaterial({ color, linewidth: width * stage.pr, transparent: true, opacity, depthWrite: false, blending: THREE.AdditiveBlending, worldUnits: false });
        m.resolution.set(stage.W, stage.H);
        if (cut) m.clippingPlanes = [cut.inv];
        const l = new LineSegments2(g, m);
        l.renderOrder = 4;
        out.add(l);
      }
      if (ghosts.length && ghost > 0) {
        const norm = ghosts.map((g) => { for (const k of Object.keys(g.attributes)) if (!['position', 'normal'].includes(k)) g.deleteAttribute(k); if (!g.attributes.normal) g.computeVertexNormals(); return g; });
        const gm = mergeGeometries(norm, false);
        const m = new THREE.MeshBasicMaterial({ color: PAL.signal, transparent: true, opacity: ghost, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide });
        if (cut) m.clippingPlanes = [cut.inv];
        const mesh = new THREE.Mesh(gm, m);
        mesh.renderOrder = 3;
        out.add(mesh);
      }
      scene.add(out);
      return out;
    },
  };
}

/** Prozirni svjetlosni "list" na ravnini reza: tanka sjajna crta po podu i blagi zastor. */
export function cutSheet(scene, cut, { size = 30, height = 18, color = PAL.ice, i = 1, floorY = 0 } = {}) {
  const n = cut.normal;
  const up = Math.abs(n.y) > 0.9 ? V(1, 0, 0) : V(0, 1, 0);
  const t = new THREE.Vector3().crossVectors(up, n).normalize();
  const b = new THREE.Vector3().crossVectors(n, t).normalize();
  const geo = new THREE.PlaneGeometry(size, height);
  const m = new THREE.ShaderMaterial({
    uniforms: { uC: { value: new THREE.Color(color) }, uI: { value: i } },
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, fog: false,
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: /* glsl */ `uniform vec3 uC; uniform float uI; varying vec2 vUv;
      void main(){
        float x = (vUv.x - 0.5) * 2.0;
        float side = exp(-x * x * 2.2);
        float base = exp(-vUv.y * 60.0) * 1.2 + exp(-vUv.y * 6.0) * 0.06;
        float a = side * (base + 0.025 * (1.0 - vUv.y)) * uI;
        gl_FragColor = vec4(uC * a, a);
      }`,
  });
  const mesh = new THREE.Mesh(geo, m);
  const basis = new THREE.Matrix4().makeBasis(t, b, n);
  mesh.quaternion.setFromRotationMatrix(basis);
  const p = cut.point.clone();
  p.y = floorY + height / 2;
  mesh.position.copy(p);
  mesh.renderOrder = 6;
  scene.add(mesh);
  return mesh;
}

/** Svjetlosni trag duž krivulje (paket podataka, struja, zrak). Rep blijedi prema početku. */
export function trail(scene, curve, { r = 0.04, color = PAL.ice, i = 2.5, head = 1, tail = 0.35, seg = 160, radial = 6, from = 0, to = 1, hot = '#ffffff' } = {}) {
  const geo = new THREE.TubeGeometry(curve, seg, r, radial, false);
  const m = new THREE.ShaderMaterial({
    uniforms: { uC: { value: new THREE.Color(color) }, uH: { value: new THREE.Color(hot) }, uI: { value: i }, uHead: { value: head }, uTail: { value: tail }, uFrom: { value: from }, uTo: { value: to } },
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false,
    vertexShader: /* glsl */ `varying vec2 vUv; varying vec3 vN; varying vec3 vV;
      void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(position,1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }`,
    fragmentShader: /* glsl */ `uniform vec3 uC; uniform vec3 uH; uniform float uI; uniform float uHead; uniform float uTail; uniform float uFrom; uniform float uTo; varying vec2 vUv; varying vec3 vN; varying vec3 vV;
      void main(){
        float s = (vUv.x - uFrom) / max(uTo - uFrom, 1e-4);
        if (s < 0.0 || s > 1.0) discard;
        float rim = pow(abs(dot(vN, vV)), 1.5);
        float tailA = pow(s, 1.0 / max(uTail, 0.05));
        float headA = smoothstep(1.0, 0.985, s);
        float a = tailA * headA * rim * uI;
        vec3 c = mix(uC, uH, pow(s, 6.0) * uHead);
        gl_FragColor = vec4(c * a, a);
      }`,
  });
  const mesh = new THREE.Mesh(geo, m);
  mesh.renderOrder = 7;
  scene.add(mesh);
  return mesh;
}

/** Lažni volumetrijski snop (stožac) — reflektor, svjetlo iz prozora, laser. */
export function cone(scene, from, to, { r0 = 0.1, r1 = 3, color = PAL.warm, i = 0.35, power = 2 } = {}) {
  const len = from.distanceTo(to);
  const geo = new THREE.CylinderGeometry(r0, r1, len, 48, 1, true).translate(0, -len / 2, 0);
  const m = new THREE.ShaderMaterial({
    uniforms: { uC: { value: new THREE.Color(color) }, uI: { value: i }, uP: { value: power }, uL: { value: len } },
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, fog: false,
    vertexShader: /* glsl */ `varying vec3 vN; varying vec3 vV; varying float vY; uniform float uL;
      void main(){ vY = -position.y / uL; vec4 mv = modelViewMatrix * vec4(position,1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }`,
    fragmentShader: /* glsl */ `uniform vec3 uC; uniform float uI; uniform float uP; varying vec3 vN; varying vec3 vV; varying float vY;
      void main(){
        float f = pow(abs(dot(normalize(vN), normalize(vV))), uP);
        float a = f * pow(1.0 - vY, 1.6) * smoothstep(0.0, 0.03, vY) * uI;
        gl_FragColor = vec4(uC * a, a);
      }`,
  });
  const mesh = new THREE.Mesh(geo, m);
  mesh.position.copy(from);
  const dir = to.clone().sub(from).normalize();
  mesh.quaternion.setFromUnitVectors(V(0, -1, 0), dir);
  mesh.renderOrder = 8;
  scene.add(mesh);
  return mesh;
}

/** Rešetka (dalekovod, kran, skela): segmenti kao valjci u jednom InstancedMeshu. */
export function struts(scene, pairs, r, material) {
  const geo = new THREE.CylinderGeometry(1, 1, 1, 6, 1, false);
  const im = new THREE.InstancedMesh(geo, material, pairs.length);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3();
  pairs.forEach(([a, b, rr], k) => {
    const d = b.clone().sub(a);
    const L = d.length();
    q.setFromUnitVectors(V(0, 1, 0), d.normalize());
    const R = rr ?? r;
    s.set(R, L, R);
    m.compose(a.clone().add(b).multiplyScalar(0.5), q, s);
    im.setMatrixAt(k, m);
  });
  im.castShadow = true;
  im.receiveShadow = true;
  scene.add(im);
  return im;
}

/** Lančanica između dvije točke (kabel, žica sa žaruljicama). */
export function catenary(a, b, sag = 1, n = 32) {
  const pts = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const p = a.clone().lerp(b, t);
    p.y -= sag * 4 * t * (1 - t);
    pts.push(p);
  }
  return pts;
}

/** Kutija s ishodištem na dnu. */
export function box(w, h, d, material, x = 0, y = 0, z = 0, ry = 0, parent = null) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
  m.position.set(x, y + h / 2, z);
  m.rotation.y = ry;
  m.castShadow = true;
  m.receiveShadow = true;
  if (parent) parent.add(m);
  return m;
}

/** Dvostrešni krov kao prizma (sljeme po osi x). */
export function gable(w, d, rh, material, over = 0.4) {
  const hw = w / 2 + over, hd = d / 2 + over;
  const s = new THREE.Shape();
  s.moveTo(-hd, 0); s.lineTo(hd, 0); s.lineTo(0, rh); s.closePath();
  const g = new THREE.ExtrudeGeometry(s, { depth: hw * 2, bevelEnabled: false });
  g.translate(0, 0, -hw);
  g.rotateY(Math.PI / 2);
  const m = new THREE.Mesh(g, material);
  m.castShadow = true; m.receiveShadow = true;
  return m;
}

/** Platno s rasporedom prozora/ekrana: vraća CanvasTexture. */
export function canvasTex(w, h, draw, { srgb = true } = {}) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const x = c.getContext('2d');
  draw(x, w, h);
  const t = new THREE.CanvasTexture(c);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

/** Deterministički slučajni brojevi (isti kadar pri svakom renderu). */
export function rng(seed = 1) {
  let s = seed >>> 0;
  return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
}

/** Bokeh i prašina u zraku. */
export function motes(stage, { n = 80, box: bx = [-20, 0, -20, 20, 12, 10], seed = 7, colors = ['#ffcc85', '#9fb3ff'], size = [0.05, 0.18], a = [0.15, 0.6] } = {}) {
  const R = rng(seed);
  const list = [];
  for (let i = 0; i < n; i++) {
    list.push({
      p: [bx[0] + R() * (bx[3] - bx[0]), bx[1] + R() * (bx[4] - bx[1]), bx[2] + R() * (bx[5] - bx[2])],
      c: colors[i % colors.length], s: size[0] + R() * (size[1] - size[0]), a: a[0] + R() * (a[1] - a[0]), k: 1,
    });
  }
  return stage.dots(list);
}

/** Veliki bokeh diskovi u prvom planu (izvan fokusa). */
export function bokeh(stage, list) {
  return stage.dots(list.map((d) => ({ ...d, ring: 1 })), { depthTest: false, order: 20 });
}

export function light(scene, type, color, intensity, pos, target = null, o = {}) {
  let l;
  if (type === 'dir') {
    l = new THREE.DirectionalLight(color, intensity);
    if (o.shadow) {
      l.castShadow = true;
      l.shadow.mapSize.set(2048, 2048);
      const s = o.shadow;
      Object.assign(l.shadow.camera, { left: -s, right: s, top: s, bottom: -s, near: 0.5, far: 200 });
      l.shadow.bias = -0.0004;
      l.shadow.normalBias = 0.02;
      l.shadow.radius = 4;
      l.shadow.camera.updateProjectionMatrix();
    }
  } else if (type === 'spot') {
    l = new THREE.SpotLight(color, intensity, o.dist ?? 0, o.angle ?? 0.5, o.pen ?? 0.6, 2);
    if (o.shadow) { l.castShadow = true; l.shadow.mapSize.set(1024, 1024); l.shadow.bias = -0.0005; }
  } else if (type === 'point') {
    l = new THREE.PointLight(color, intensity, o.dist ?? 0, 2);
  } else {
    l = new THREE.HemisphereLight(color, o.ground ?? '#05060a', intensity);
  }
  l.position.set(...pos);
  if (target && l.target) { l.target.position.set(...target); scene.add(l.target); }
  scene.add(l);
  return l;
}

/** Daleka svjetla naselja na horizontu (sitne tople točke, ponegdje plava). */
export function horizon(stage, { n = 260, r0 = 140, r1 = 320, a0 = -Math.PI, a1 = 0, seed = 3, center = [0, 0], y = 0.3 } = {}) {
  const R = rng(seed);
  const list = [];
  for (let i = 0; i < n; i++) {
    // nakupine: naselja
    const a = a0 + (a1 - a0) * Math.pow(R(), 1);
    const r = r0 + (r1 - r0) * R();
    const cl = 1 + Math.floor(R() * 6);
    for (let k = 0; k < cl; k++) {
      const aa = a + (R() - 0.5) * 0.02, rr = r + (R() - 0.5) * 6;
      list.push({ p: [center[0] + Math.sin(aa) * rr, y + R() * 0.6, center[1] + Math.cos(aa) * rr], c: R() < 0.12 ? '#8fa6ff' : '#ffc27a', s: 0.5 + R() * 0.9, a: 0.35 + R() * 0.5, k: 1.4 });
    }
  }
  return stage.dots(list);
}

/** Vodoravni list skenera (za vodoravni rez): mekani disk svjetla na visini reza. */
export function scanDisc(scene, y, { center = [0, 0], r = 30, color = PAL.ice, i = 0.6 } = {}) {
  const m = new THREE.ShaderMaterial({
    uniforms: { uC: { value: new THREE.Color(color) }, uI: { value: i } },
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, fog: false,
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: `uniform vec3 uC; uniform float uI; varying vec2 vUv;
      void main(){ float d = length(vUv - 0.5) * 2.0; float a = (exp(-d * d * 3.0) * 0.08 + smoothstep(1.0, 0.96, d) * smoothstep(0.9, 0.97, d) * 0.25) * uI; gl_FragColor = vec4(uC * a, a); }`,
  });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(r * 2, r * 2), m);
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.set(center[0], y, center[1]);
  mesh.renderOrder = 6;
  scene.add(mesh);
  return mesh;
}

/** Topla mrlja svjetla na podu (pod je zrcalo i ne prima svjetlo, pa se lokva svjetla dodaje ovako). */
export function pool(scene, x, z, r, { color = '#ffb46a', i = 0.5, y = 0.02 } = {}) {
  const m = new THREE.ShaderMaterial({
    uniforms: { uC: { value: new THREE.Color(color) }, uI: { value: i } },
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false,
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: 'uniform vec3 uC; uniform float uI; varying vec2 vUv; void main(){ float d = length(vUv - 0.5) * 2.0; float a = exp(-d * d * 4.0) * (1.0 - smoothstep(0.85, 1.0, d)) * uI; gl_FragColor = vec4(uC * a, a); }',
  });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(r * 2, r * 2), m);
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.set(x, y, z);
  mesh.renderOrder = 2;
  scene.add(mesh);
  return mesh;
}
