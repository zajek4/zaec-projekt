// Scena 01 — poligonalni svijet: fasetirani globus, kopno kao podignuta lica,
// granice Europe, čvorovi (tvrtke) i lukovi (pretrage) s putujućim signalima.
import * as THREE from 'three';
import { ll2v, OSIJEK, DEG, glowPoints, lineMat, arcPoints, seeded } from './lib.js';

function decodeMask(b64) {
  const bin = atob(b64);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

export function createGlobe({ geo, lite }) {
  const rand = seeded(7);
  const detail = lite ? 30 : 48;
  const mask = decodeMask(lite ? geo.globe.d30 : geo.globe.d48);

  const group = new THREE.Group();
  group.name = 'globus';
  const spin = new THREE.Group();
  group.add(spin);

  // Poravnanje: Osijek → +y, sjever → −z, istok → +x.
  const la = OSIJEK[1] * DEG, lo = OSIJEK[0] * DEG;
  const up = ll2v(OSIJEK[0], OSIJEK[1]);
  const north = new THREE.Vector3(-Math.sin(la) * Math.sin(lo), Math.cos(la), -Math.sin(la) * Math.cos(lo)).normalize();
  const east = new THREE.Vector3().crossVectors(north, up).normalize();
  const src = new THREE.Matrix4().makeBasis(east, up, north);
  const tgt = new THREE.Matrix4().makeBasis(new THREE.Vector3(1, 0, 0), new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, -1));
  const align = new THREE.Matrix4().multiplyMatrices(tgt, src.clone().transpose());
  group.quaternion.setFromRotationMatrix(align);

  /* ── ocean + kopno (lica ikosaedra) ── */
  const ico = new THREE.IcosahedronGeometry(1, detail);
  const P = ico.attributes.position;
  const faces = P.count / 3;
  const oceanCol = new Float32Array(P.count * 3);
  const landPos = [];
  const landCol = [];
  const centroids = [];
  const c = new THREE.Color();
  const v = new THREE.Vector3();
  for (let f = 0; f < faces; f++) {
    const isLand = (mask[f >> 3] >> (f & 7)) & 1;
    const shade = 0.9 + rand() * 0.2;
    c.setRGB(0.028 * shade, 0.045 * shade, 0.085 * shade);
    for (let k = 0; k < 3; k++) c.toArray(oceanCol, (f * 3 + k) * 3);
    if (isLand) {
      v.set(0, 0, 0);
      const lc = new THREE.Color().setRGB(0.055 * shade, 0.085 * shade, 0.17 * shade);
      for (let k = 0; k < 3; k++) {
        const x = P.getX(f * 3 + k), y = P.getY(f * 3 + k), z = P.getZ(f * 3 + k);
        landPos.push(x * 1.006, y * 1.006, z * 1.006);
        landCol.push(lc.r, lc.g, lc.b);
        v.x += x; v.y += y; v.z += z;
      }
      centroids.push(v.clone().normalize());
    }
  }
  ico.setAttribute('color', new THREE.BufferAttribute(oceanCol, 3));
  const globeMat = new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.82, metalness: 0.15, transparent: true });
  const ocean = new THREE.Mesh(ico, globeMat);
  spin.add(ocean);

  const landGeo = new THREE.BufferGeometry();
  landGeo.setAttribute('position', new THREE.Float32BufferAttribute(landPos, 3));
  landGeo.setAttribute('color', new THREE.Float32BufferAttribute(landCol, 3));
  landGeo.computeVertexNormals();
  const landMat = new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.7, metalness: 0.1, emissive: new THREE.Color('#0d1a3a'), emissiveIntensity: 0.35, transparent: true });
  const landMesh = new THREE.Mesh(landGeo, landMat);
  spin.add(landMesh);

  // točkice kopna (podatkovna tekstura)
  const step = lite ? 2 : 1;
  const dotCount = Math.ceil(centroids.length / step);
  const dots = glowPoints({ count: dotCount, color: '#5f7fd6', core: '#bcd0ff', size: 0.016, additive: true });
  for (let i = 0, j = 0; i < centroids.length; i += step, j++) {
    centroids[i].clone().multiplyScalar(1.009).toArray(dots.pos, j * 3);
    dots.alpha[j] = 0.25 + rand() * 0.35;
  }
  spin.add(dots.points);

  /* ── granice Europe ── */
  const seg = [];
  const a = new THREE.Vector3(), b = new THREE.Vector3();
  for (const country of geo.europe) {
    for (const ring of country.rings) {
      for (let i = 0; i < ring.length - 1; i++) {
        ll2v(ring[i][0], ring[i][1], 1.0075, a);
        ll2v(ring[i + 1][0], ring[i + 1][1], 1.0075, b);
        seg.push(a.x, a.y, a.z, b.x, b.y, b.z);
      }
    }
  }
  for (const ring of geo.croatia) {
    for (let i = 0; i < ring.length - 1; i++) {
      ll2v(ring[i][0], ring[i][1], 1.0085, a);
      ll2v(ring[i + 1][0], ring[i + 1][1], 1.0085, b);
      seg.push(a.x, a.y, a.z, b.x, b.y, b.z);
    }
  }
  const borderGeo = new THREE.BufferGeometry();
  borderGeo.setAttribute('position', new THREE.Float32BufferAttribute(seg, 3));
  const borderMat = lineMat('#4a66b8', 0.55);
  const borders = new THREE.LineSegments(borderGeo, borderMat);
  spin.add(borders);

  /* ── atmosfera ── */
  const atmoUniforms = { uColor: { value: new THREE.Color('#3b6bff') }, uOpacity: { value: 1 } };
  const atmo = new THREE.Mesh(
    new THREE.SphereGeometry(1.2, 64, 32),
    new THREE.ShaderMaterial({
      uniforms: atmoUniforms,
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexShader: /* glsl */ `varying vec3 vN; varying vec3 vV; void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }`,
      fragmentShader: /* glsl */ `uniform vec3 uColor; uniform float uOpacity; varying vec3 vN; varying vec3 vV; void main(){ float f = pow(clamp(-dot(vN, vV), 0.0, 1.0), 1.7); gl_FragColor = vec4(uColor, f * 0.95 * uOpacity); }`,
    }),
  );
  group.add(atmo); // ne vrti se

  /* ── čvorovi i lukovi ── */
  const osijek = ll2v(OSIJEK[0], OSIJEK[1]);
  const nodes = [osijek.clone()];
  geo.capitals.forEach(([, lon, lat]) => nodes.push(ll2v(lon, lat)));
  geo.cities.forEach(([, lon, lat]) => nodes.push(ll2v(lon, lat)));
  const extra = lite ? 70 : 140;
  for (let i = 0; i < extra; i++) nodes.push(centroids[(rand() * centroids.length) | 0].clone());
  const nodePts = glowPoints({ count: nodes.length, color: '#4f7bff', core: '#e8eeff', size: 0.065 });
  const nodeBase = new Float32Array(nodes.length);
  nodes.forEach((n, i) => {
    n.clone().multiplyScalar(1.012).toArray(nodePts.pos, i * 3);
    nodeBase[i] = i === 0 ? 2.4 : i < 1 + geo.capitals.length ? 1.2 : 0.55 + rand() * 0.5;
    nodePts.size[i] = nodeBase[i];
  });
  spin.add(nodePts.points);

  const arcs = [];
  const arcSeg = [];
  const pairs = [];
  // 1/3 lukova vodi u Osijek (lokalno sidro, mreža bez granica)
  const arcCount = lite ? 34 : 64;
  for (let i = 0; i < arcCount; i++) {
    const toOsijek = i % 3 === 0;
    const ia = 1 + ((rand() * (nodes.length - 1)) | 0);
    const ib = toOsijek ? 0 : 1 + ((rand() * (nodes.length - 1)) | 0);
    if (ia === ib || nodes[ia].angleTo(nodes[ib]) < 0.03) continue;
    pairs.push([ia, ib, toOsijek]);
  }
  pairs.forEach(([ia, ib, toO]) => {
    const pts = arcPoints(nodes[ia], nodes[ib], 40, 0.22).map((p) => p.multiplyScalar(1.012));
    arcs.push({ pts, toO, t: rand(), speed: 0.12 + rand() * 0.18 });
    for (let i = 0; i < pts.length - 1; i++) arcSeg.push(pts[i].x, pts[i].y, pts[i].z, pts[i + 1].x, pts[i + 1].y, pts[i + 1].z);
  });
  const arcGeo = new THREE.BufferGeometry();
  arcGeo.setAttribute('position', new THREE.Float32BufferAttribute(arcSeg, 3));
  const arcMat = lineMat('#3d63e0', 0.22, true);
  const arcLines = new THREE.LineSegments(arcGeo, arcMat);
  spin.add(arcLines);

  const TRAIL = 6;
  const pulses = glowPoints({ count: arcs.length * TRAIL, color: '#6f93ff', core: '#ffffff', size: 0.06 });
  spin.add(pulses.points);
  const tmp = new THREE.Vector3();

  function sampleArc(pts, t, out) {
    const f = Math.min(pts.length - 1.001, Math.max(0, t * (pts.length - 1)));
    const i = Math.floor(f);
    return out.copy(pts[i]).lerp(pts[i + 1], f - i);
  }

  const materials = [globeMat, landMat, dots.material, borderMat, nodePts.material, arcMat, pulses.material];

  return {
    group,
    spin,
    /**
     * @param {object} s  { alpha, spin, net, finale, time, dt, pr }
     */
    update(s) {
      group.visible = s.alpha > 0.002;
      if (!group.visible) return;
      spin.rotation.y = s.spin;
      globeMat.opacity = landMat.opacity = s.alpha;
      globeMat.transparent = landMat.transparent = s.alpha < 0.999;
      globeMat.depthWrite = landMat.depthWrite = s.alpha > 0.5;
      dots.uniforms.uOpacity.value = s.alpha;
      borderMat.opacity = 0.5 * s.alpha * (0.6 + s.net * 0.4);
      atmoUniforms.uOpacity.value = s.alpha * (1 - s.dive * 0.9);
      nodePts.uniforms.uOpacity.value = s.alpha;
      arcMat.opacity = (0.22 + 0.22 * s.net + 0.25 * s.finale) * s.alpha;
      pulses.uniforms.uOpacity.value = s.alpha;
      [dots, nodePts, pulses].forEach((p) => (p.uniforms.uPR.value = s.pr));
      // čvorovi pulsiraju; Osijek (ili "vaša tvrtka") jače u finalu
      for (let i = 0; i < nodes.length; i++) {
        const w = Math.sin(s.time * 1.6 + i * 1.7) * 0.5 + 0.5;
        nodePts.size[i] = nodeBase[i] * (0.75 + 0.5 * w) * (i === 0 ? 1 + s.finale * 2.2 : 1);
        nodePts.alpha[i] = i === 0 ? 1 : 0.55 + 0.45 * w;
      }
      nodePts.geometry.attributes.aSize.needsUpdate = true;
      nodePts.geometry.attributes.aAlpha.needsUpdate = true;
      // signali putuju lukovima
      const speedK = 0.6 + s.net * 0.8 + s.finale;
      arcs.forEach((arc, i) => {
        if (!s.reduce) arc.t = (arc.t + s.dt * arc.speed * speedK) % 1;
        const vis = arc.toO ? 0.55 + s.finale * 0.45 : 0.6 * (1 - s.finale * 0.6);
        for (let k = 0; k < TRAIL; k++) {
          sampleArc(arc.pts, Math.max(0, arc.t - k * 0.018), tmp);
          tmp.toArray(pulses.pos, (i * TRAIL + k) * 3);
          pulses.alpha[i * TRAIL + k] = vis * (1 - k / TRAIL) * Math.min(1, arc.t * 8) * Math.min(1, (1 - arc.t) * 10);
          pulses.size[i * TRAIL + k] = k === 0 ? 1.4 : 0.9 - k * 0.1;
        }
      });
      pulses.geometry.attributes.position.needsUpdate = true;
      pulses.geometry.attributes.aAlpha.needsUpdate = true;
      pulses.geometry.attributes.aSize.needsUpdate = true;
    },
    /** Svjetska pozicija Osijeka (za oznake). */
    osijekWorld(out = new THREE.Vector3()) {
      return out.copy(osijek).multiplyScalar(1.02).applyMatrix4(spin.matrixWorld);
    },
    dispose() {
      materials.forEach((m) => m.dispose());
      [ico, landGeo, dots.geometry, borderGeo, nodePts.geometry, arcGeo, pulses.geometry, atmo.geometry].forEach((g) => g.dispose());
      atmo.material.dispose();
    },
  };
}
