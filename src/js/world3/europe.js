// Scena 02 — Europa → Hrvatska: tamna karta država, Hrvatska kao izdignuti poligon,
// topološke točke, gradovi i lukovi prema europskim središtima ("tržište bez granica").
import * as THREE from 'three';
import { proj, glowPoints, lineMat, seeded, smooth } from './lib.js';

function shapeFromRings(rings) {
  const toV = ([lon, lat]) => {
    const [x, z] = proj(lon, lat);
    return new THREE.Vector2(x, -z);
  };
  const shape = new THREE.Shape(rings[0].map(toV));
  for (let i = 1; i < rings.length; i++) shape.holes.push(new THREE.Path(rings[i].map(toV)));
  return shape;
}

function ringSegments(rings, y, out) {
  for (const r of rings) {
    for (let i = 0; i < r.length - 1; i++) {
      const [x1, z1] = proj(r[i][0], r[i][1]);
      const [x2, z2] = proj(r[i + 1][0], r[i + 1][1]);
      out.push(x1, y, z1, x2, y, z2);
    }
  }
}

export function createEurope({ geo, lite }) {
  const rand = seeded(11);
  const group = new THREE.Group();
  group.name = 'europa';

  /* ── tlo: tehnička mreža (1 jedinica = ¼ stupnja) ── */
  const gridU = { uOpacity: { value: 1 }, uColor: { value: new THREE.Color('#203057') } };
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(480, 480, 1, 1).rotateX(-Math.PI / 2),
    new THREE.ShaderMaterial({
      uniforms: gridU,
      transparent: true,
      depthWrite: false,
      vertexShader: /* glsl */ `varying vec2 vP; void main(){ vP = position.xz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: /* glsl */ `
        uniform float uOpacity; uniform vec3 uColor; varying vec2 vP;
        float grid(vec2 p, float s, float w){ vec2 g = abs(fract(p / s - 0.5) - 0.5) / fwidth(p / s); return 1.0 - min(min(g.x, g.y) / w, 1.0); }
        void main(){
          float d = length(vP + vec2(6.0, -4.0));
          float fade = 1.0 - smoothstep(30.0, 150.0, d);
          float g = grid(vP, 1.0, 1.0) * 0.25 + grid(vP, 4.0, 1.2) * 0.6;
          gl_FragColor = vec4(uColor, g * fade * uOpacity * 0.75);
        }`,
    }),
  );
  ground.position.y = -0.02;
  ground.renderOrder = -1;
  group.add(ground);

  /* ── države Europe ── */
  const shapes = [];
  const colors = [];
  const borderSeg = [];
  const palette = ['#0d1528', '#101a30', '#0f182c', '#121c33'];
  for (const country of geo.europe) {
    const g = new THREE.ShapeGeometry(shapeFromRings(country.rings), 1);
    const col = new THREE.Color(palette[(rand() * palette.length) | 0]);
    const n = g.attributes.position.count;
    const arr = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) col.toArray(arr, i * 3);
    g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
    shapes.push(g);
    ringSegments(country.rings, 0.03, borderSeg);
  }
  const landGeo = mergeShapes(shapes);
  landGeo.rotateX(-Math.PI / 2);
  const landMat = new THREE.MeshBasicMaterial({ vertexColors: true, transparent: true, depthWrite: false });
  const land = new THREE.Mesh(landGeo, landMat);
  group.add(land);
  const borderGeo = new THREE.BufferGeometry();
  borderGeo.setAttribute('position', new THREE.Float32BufferAttribute(borderSeg, 3));
  const borderMat = lineMat('#33497f', 0.7);
  group.add(new THREE.LineSegments(borderGeo, borderMat));

  /* ── Hrvatska: ekstrudirani poligon ── */
  const cro = new THREE.Group();
  cro.name = 'hrvatska';
  const croGeos = geo.croatia.map((ring) => new THREE.ExtrudeGeometry(shapeFromRings([ring]), { depth: 1, bevelEnabled: false, curveSegments: 1 }));
  const croGeo = mergeShapes(croGeos, false);
  croGeo.rotateX(-Math.PI / 2);
  const topMat = new THREE.MeshStandardMaterial({ color: '#13224f', emissive: new THREE.Color('#1a2f9e'), emissiveIntensity: 0.3, roughness: 0.6, metalness: 0.2, flatShading: true, transparent: true });
  const sideMat = new THREE.MeshStandardMaterial({ color: '#2347ff', emissive: new THREE.Color('#2347ff'), emissiveIntensity: 0.9, roughness: 0.4, transparent: true });
  const croMesh = new THREE.Mesh(croGeo, [topMat, sideMat]);
  cro.add(croMesh);
  const topLine = [];
  const baseLine = [];
  ringSegments(geo.croatia, 1.002, topLine);
  ringSegments(geo.croatia, 0.04, baseLine);
  const outlineMat = lineMat('#9fb6ff', 1, true);
  const topOutline = new THREE.LineSegments(new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(topLine, 3)), outlineMat);
  cro.add(topOutline);
  group.add(cro);
  const baseOutlineMat = lineMat('#5f80ff', 0.9, true);
  const baseOutline = new THREE.LineSegments(new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(baseLine, 3)), baseOutlineMat);
  group.add(baseOutline);

  // topološke točke unutar Hrvatske (na vrhu reljefa)
  const inside = [];
  const mainland = geo.croatia[0];
  const poly = mainland.map(([lon, lat]) => proj(lon, lat));
  const minX = Math.min(...poly.map((p) => p[0])), maxX = Math.max(...poly.map((p) => p[0]));
  const minZ = Math.min(...poly.map((p) => p[1])), maxZ = Math.max(...poly.map((p) => p[1]));
  const stepD = lite ? 0.42 : 0.28;
  for (let x = minX; x < maxX; x += stepD) {
    for (let z = minZ; z < maxZ; z += stepD) {
      if (pip(x, z, poly)) inside.push([x + (rand() - 0.5) * 0.08, z + (rand() - 0.5) * 0.08]);
    }
  }
  const topo = glowPoints({ count: inside.length, color: '#4f7bff', core: '#cfe0ff', size: 0.16 });
  inside.forEach(([x, z], i) => {
    topo.pos[i * 3] = x; topo.pos[i * 3 + 1] = 1.02; topo.pos[i * 3 + 2] = z;
    topo.alpha[i] = 0.2 + rand() * 0.5;
  });
  cro.add(topo.points);

  /* ── Slavonija noću: svjetla okolnih mjesta (Osijek sam donosi stvarna ulična svjetla iz city.js) ── */
  const LN = lite ? 1200 : 2400;
  const lights = glowPoints({ count: LN, color: '#ffb35a', core: '#fff0d0', size: 0.24, depthTest: false });
  lights.uniforms.uMax.value = 9;
  lights.uniforms.uMin.value = 1.3;
  lights.points.renderOrder = 2;
  // stvarna mjesta oko Osijeka (ime, lon, lat, težina)
  const TOWNS = [['Đakovo', 18.41, 45.31, 1], ['Vukovar', 19.0, 45.35, 1], ['Vinkovci', 18.8, 45.29, 0.95], ['Valpovo', 18.42, 45.66, 0.6], ['Belišće', 18.4, 45.68, 0.5], ['Našice', 18.1, 45.49, 0.6], ['Beli Manastir', 18.6, 45.77, 0.6], ['Donji Miholjac', 18.17, 45.76, 0.5], ['Čepin', 18.565, 45.524, 0.45], ['Tenja', 18.749, 45.497, 0.35], ['Bilje', 18.743, 45.606, 0.35], ['Darda', 18.692, 45.627, 0.35]];
  const towns = TOWNS.map(([, lon, lat, w]) => [...proj(lon, lat), w]);
  const gauss = () => Math.sqrt(-2 * Math.log(rand() + 1e-6)) * Math.cos(rand() * Math.PI * 2);
  for (let i = 0; i < LN; i++) {
    let x, z;
    if (rand() < 0.3) {
      // raspršena prigradska naselja — ne u samom gradu (tamo su stvarna ulična svjetla)
      do { x = gauss() * 0.32; z = gauss() * 0.24; } while (Math.hypot(x, z * 1.4) < 0.12);
    } else {
      const t = towns[(rand() * towns.length) | 0];
      const sp = 0.012 + t[2] * 0.028;
      x = t[0] + gauss() * sp; z = t[1] + gauss() * sp;
    }
    lights.pos[i * 3] = x; lights.pos[i * 3 + 1] = 1.03; lights.pos[i * 3 + 2] = z;
    lights.alpha[i] = 0.2 + rand() * 0.8;
    lights.size[i] = 0.5 + rand() * rand() * 1.8;
  }
  cro.add(lights.points);
  const topBase = new THREE.Color('#13224f');
  const topDark = new THREE.Color('#070b1a');

  /* ── gradovi + lukovi prema Europi ── */
  const cityPts = glowPoints({ count: geo.cities.length, color: '#6f93ff', core: '#ffffff', size: 0.11 });
  geo.cities.forEach(([, lon, lat, big], i) => {
    const [x, z] = proj(lon, lat);
    cityPts.pos[i * 3] = x; cityPts.pos[i * 3 + 1] = 1.08; cityPts.pos[i * 3 + 2] = z;
    cityPts.size[i] = i === 0 ? 2.6 : big ? 1.3 : 0.8;
  });
  cro.add(cityPts.points);

  const arcs = [];
  const arcSeg = [];
  geo.capitals.forEach(([, lon, lat]) => {
    const [x, z] = proj(lon, lat);
    const a = new THREE.Vector3(0, 1.08, 0);
    const b = new THREE.Vector3(x, 0.1, z);
    const h = 2 + a.distanceTo(b) * 0.22;
    const pts = [];
    for (let i = 0; i <= 36; i++) {
      const t = i / 36;
      const p = a.clone().lerp(b, t);
      p.y += Math.sin(Math.PI * t) * h;
      pts.push(p);
    }
    for (let i = 0; i < pts.length - 1; i++) arcSeg.push(...pts[i].toArray(), ...pts[i + 1].toArray());
    arcs.push({ pts, t: rand(), speed: 0.18 + rand() * 0.12, dir: rand() < 0.5 ? 1 : -1 });
  });
  const arcMat = lineMat('#4a6ff0', 0.4, true);
  const arcLines = new THREE.LineSegments(new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(arcSeg, 3)), arcMat);
  group.add(arcLines);
  const capPts = glowPoints({ count: geo.capitals.length, color: '#4f7bff', core: '#dfe7ff', size: 0.32 });
  geo.capitals.forEach(([, lon, lat], i) => {
    const [x, z] = proj(lon, lat);
    capPts.pos[i * 3] = x; capPts.pos[i * 3 + 1] = 0.1; capPts.pos[i * 3 + 2] = z;
  });
  group.add(capPts.points);
  const TRAIL = 5;
  const pulses = glowPoints({ count: arcs.length * TRAIL, color: '#7f9fff', core: '#ffffff', size: 0.36 });
  group.add(pulses.points);

  const all = [topo, cityPts, capPts, pulses, lights];
  const tmp = new THREE.Vector3();

  return {
    group,
    cro,
    towns: TOWNS.map((t) => t[0]),
    townWorld(i, out = new THREE.Vector3()) {
      return out.set(towns[i][0], 1.05, towns[i][1]).applyMatrix4(cro.matrixWorld);
    },
    cityWorld(i, out = new THREE.Vector3()) {
      return out.fromArray(cityPts.pos, i * 3).applyMatrix4(cro.matrixWorld);
    },
    update(s) {
      group.visible = s.alpha > 0.002;
      if (!group.visible) return;
      const a = s.alpha;
      gridU.uOpacity.value = a;
      landMat.opacity = a * (1 - s.cityFade * 0.7);
      borderMat.opacity = 0.7 * a * (1 - s.cityFade);
      const lift = Math.max(0.001, s.lift);
      cro.scale.y = lift * (1 - s.cityFade * 0.985);
      topMat.opacity = sideMat.opacity = a;
      const zoomIn = smooth(1.05, 1.5, s.Z || 1);
      topMat.emissiveIntensity = (0.22 + 0.18 * s.lift) * (1 - 0.85 * zoomIn);
      topMat.color.lerpColors(topBase, topDark, zoomIn);
      lights.uniforms.uOpacity.value = a * smooth(1.08, 1.4, s.Z || 1) * (1 - smooth(1.75, 1.95, s.Z || 1));
      outlineMat.opacity = a * smooth(0.02, 0.4, s.lift) * (1 - s.cityFade);
      baseOutlineMat.opacity = a * (1 - s.cityFade);
      arcMat.opacity = 0.42 * a * s.net * (1 - s.cityFade);
      all.forEach((p) => { p.uniforms.uPR.value = s.pr; });
      topo.uniforms.uOpacity.value = a * smooth(0.3, 1, s.lift) * (1 - s.cityFade);
      cityPts.uniforms.uOpacity.value = a * smooth(0.2, 0.9, s.lift) * (1 - s.cityFade);
      capPts.uniforms.uOpacity.value = a * s.net * (1 - s.cityFade);
      pulses.uniforms.uOpacity.value = a * s.net * (1 - s.cityFade);
      for (let i = 0; i < topo.alpha.length; i += 7) topo.alpha[i] = 0.25 + 0.5 * (Math.sin(s.time * 2 + i) * 0.5 + 0.5);
      topo.geometry.attributes.aAlpha.needsUpdate = true;
      arcs.forEach((arc, i) => {
        if (!s.reduce) arc.t = (arc.t + s.dt * arc.speed) % 1;
        for (let k = 0; k < TRAIL; k++) {
          const t = arc.dir > 0 ? arc.t - k * 0.02 : 1 - arc.t + k * 0.02;
          const f = Math.min(arc.pts.length - 1.001, Math.max(0, t * (arc.pts.length - 1)));
          const j = Math.floor(f);
          tmp.copy(arc.pts[j]).lerp(arc.pts[j + 1], f - j).toArray(pulses.pos, (i * TRAIL + k) * 3);
          pulses.alpha[i * TRAIL + k] = (1 - k / TRAIL) * Math.min(1, arc.t * 6) * Math.min(1, (1 - arc.t) * 6);
        }
      });
      pulses.geometry.attributes.position.needsUpdate = true;
      pulses.geometry.attributes.aAlpha.needsUpdate = true;
    },
    dispose() {
      group.traverse((o) => {
        o.geometry?.dispose();
        (Array.isArray(o.material) ? o.material : o.material ? [o.material] : []).forEach((m) => m.dispose());
      });
    },
  };
}

function pip(x, z, poly) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, zi] = poly[i], [xj, zj] = poly[j];
    if (zi > z !== zj > z && x < ((xj - xi) * (z - zi)) / (zj - zi) + xi) inside = !inside;
  }
  return inside;
}

/** Spoji geometrije (ne-indeksirano) zadržavajući grupe za ekstrudirane oblike. */
function mergeShapes(geos, color = true) {
  const parts = geos.map((g) => (g.index ? g.toNonIndexed() : g));
  let total = 0;
  parts.forEach((g) => (total += g.attributes.position.count));
  const pos = new Float32Array(total * 3);
  const nor = new Float32Array(total * 3);
  const col = color ? new Float32Array(total * 3) : null;
  const out = new THREE.BufferGeometry();
  let o = 0;
  // grupe: 0 = vrh/dno, 1 = stranice (ExtrudeGeometry redoslijed)
  const groups = [];
  parts.forEach((g) => {
    pos.set(g.attributes.position.array, o * 3);
    if (g.attributes.normal) nor.set(g.attributes.normal.array, o * 3);
    if (col && g.attributes.color) col.set(g.attributes.color.array, o * 3);
    (g.groups.length ? g.groups : [{ start: 0, count: g.attributes.position.count, materialIndex: 0 }]).forEach((gr) => groups.push({ start: o + gr.start, count: gr.count, materialIndex: gr.materialIndex }));
    o += g.attributes.position.count;
    g.dispose();
  });
  out.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  out.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
  if (col) out.setAttribute('color', new THREE.BufferAttribute(col, 3));
  if (!color) groups.forEach((g) => out.addGroup(g.start, g.count, g.materialIndex));
  return out;
}
