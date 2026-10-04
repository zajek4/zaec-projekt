// Scena 03 — Osijek: poligonalni grad uz Dravu koji izrasta valom od konkatedrale.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { buildCathedral } from './cathedral.js';
import { glowPoints, seeded, smooth } from './lib.js';

const riverZ = (x) => -21 + Math.sin(x / 16) * 2.6 + Math.sin(x / 7) * 0.6;

function colored(g, color) {
  const geo = g.index ? g.toNonIndexed() : g;
  if (geo !== g) g.dispose();
  geo.deleteAttribute('uv');
  const c = new THREE.Color(color);
  const a = new Float32Array(geo.attributes.position.count * 3);
  for (let i = 0; i < geo.attributes.position.count; i++) c.toArray(a, i * 3);
  geo.setAttribute('color', new THREE.BufferAttribute(a, 3));
  if (!geo.attributes.normal) geo.computeVertexNormals();
  return geo;
}

/** Ubaci "rast" u standardni materijal: zgrade izrastaju valom od središta. */
function riseMaterial(params, uniforms) {
  const m = new THREE.MeshStandardMaterial(params);
  m.onBeforeCompile = (sh) => {
    sh.uniforms.uRise = uniforms.uRise;
    sh.uniforms.uDim = uniforms.uDim;
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nuniform float uRise;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nfloat dRise = length(position.xz) / 55.0;\ntransformed.y *= clamp((uRise * 1.6 - dRise) * 2.2, 0.0, 1.0);');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform float uDim;')
      .replace('#include <dithering_fragment>', '#include <dithering_fragment>\ngl_FragColor.rgb *= (1.0 - uDim * 0.75);');
  };
  m.customProgramCacheKey = () => 'zaec-rise';
  return m;
}

function riseLineMaterial(color, uniforms) {
  return new THREE.ShaderMaterial({
    uniforms: { ...uniforms, uColor: { value: new THREE.Color(color) } },
    transparent: true,
    depthWrite: false,
    vertexShader: /* glsl */ `uniform float uRise; varying float vY;
      void main(){ vec3 p = position; float d = length(p.xz) / 55.0; p.y *= clamp((uRise * 1.6 - d) * 2.2, 0.0, 1.0); vY = p.y;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); }`,
    fragmentShader: /* glsl */ `uniform vec3 uColor; uniform float uLines; varying float vY;
      void main(){ gl_FragColor = vec4(uColor, uLines * (0.35 + min(vY, 4.0) * 0.12)); }`,
  });
}

export function createCity({ lite }) {
  const rand = seeded(1945);
  const group = new THREE.Group();
  group.name = 'osijek';
  const U = { uRise: { value: 0 }, uDim: { value: 0 }, uLines: { value: 0.5 } };

  /* ── tlo s mekim rubom ── */
  const groundU = { uOpacity: { value: 1 } };
  const ground = new THREE.Mesh(
    new THREE.CircleGeometry(75, 48).rotateX(-Math.PI / 2),
    new THREE.ShaderMaterial({
      uniforms: groundU,
      transparent: true,
      depthWrite: false,
      vertexShader: /* glsl */ `varying vec2 vP; void main(){ vP = position.xz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: /* glsl */ `uniform float uOpacity; varying vec2 vP;
        float grid(vec2 p, float s){ vec2 g = abs(fract(p / s - 0.5) - 0.5) / fwidth(p / s); return 1.0 - min(min(g.x, g.y), 1.0); }
        void main(){ float d = length(vP); float a = 1.0 - smoothstep(35.0, 72.0, d);
          vec3 c = vec3(0.035, 0.05, 0.09) + grid(vP, 2.0) * 0.025;
          gl_FragColor = vec4(c, a * uOpacity); }`,
    }),
  );
  ground.position.y = -0.01;
  group.add(ground);

  /* ── Drava ── */
  const rv = [];
  const rvCol = [];
  const W = 4.2;
  for (let x = -72; x < 72; x += 2) {
    const z0 = riverZ(x), z1 = riverZ(x + 2);
    rv.push(x, 0.02, z0 - W, x + 2, 0.02, z1 - W, x, 0.02, z0 + W, x + 2, 0.02, z1 - W, x + 2, 0.02, z1 + W, x, 0.02, z0 + W);
  }
  const riverGeo = new THREE.BufferGeometry();
  riverGeo.setAttribute('position', new THREE.Float32BufferAttribute(rv, 3));
  const riverU = { uTime: { value: 0 }, uOpacity: { value: 1 } };
  const river = new THREE.Mesh(
    riverGeo,
    new THREE.ShaderMaterial({
      uniforms: riverU,
      transparent: true,
      depthWrite: false,
      vertexShader: /* glsl */ `varying vec2 vP; void main(){ vP = position.xz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: /* glsl */ `uniform float uTime; uniform float uOpacity; varying vec2 vP;
        void main(){ float s = sin(vP.x * 0.9 - uTime * 1.4 + sin(vP.y * 2.0) * 1.5) * sin(vP.x * 0.31 + uTime * 0.6);
          float glint = smoothstep(0.82, 1.0, s) * 0.35;
          float fade = 1.0 - smoothstep(40.0, 70.0, abs(vP.x));
          float edge = smoothstep(2.6, 4.2, abs(vP.y - (-21.0 + sin(vP.x / 16.0) * 2.6 + sin(vP.x / 7.0) * 0.6)));
          gl_FragColor = vec4(vec3(0.06, 0.13, 0.3) + glint * vec3(0.4, 0.55, 1.0) + edge * vec3(0.12, 0.2, 0.45), 0.95 * fade * uOpacity); }`,
    }),
  );
  group.add(river);

  /* ── blokovi ── */
  const parts = [];
  const windows = [];
  const occupied = (x, z, r) => {
    if (Math.abs(x) < 10.5 && z > -8 && z < 8.5) return true; // trg + konkatedrala
    if (z < riverZ(x) + W + 2.2) return true; // rijeka + šetnica
    if (Math.hypot(x + 15, z + 13) < 5) return true; // hotel
    return false;
  };
  const roofCols = ['#4a2a24', '#55302a', '#3d2622'];
  const wallCols = ['#161d2e', '#1a2236', '#141a29', '#1d2539'];
  const cell = 6.2;
  for (let gx = -8; gx <= 8; gx++) {
    for (let gz = -4; gz <= 7; gz++) {
      const cx = gx * cell + (rand() - 0.5) * 0.8;
      const cz = gz * cell + 1 + (rand() - 0.5) * 0.8;
      const d = Math.hypot(cx, cz);
      if (d > 50 || occupied(cx, cz, 3)) continue;
      if (rand() < 0.08) {
        // park: drveće
        for (let t = 0; t < 7; t++) {
          const g = new THREE.IcosahedronGeometry(0.55 + rand() * 0.35, 0).translate(cx + (rand() - 0.5) * 4, 0.6, cz + (rand() - 0.5) * 4);
          parts.push(colored(g, '#14332a'));
        }
        continue;
      }
      // perimetarski blok: 2–4 zgrade oko dvorišta
      const bw = 4.6, bd = 4.6;
      const center = Math.max(0, 1 - d / 46);
      const n = 2 + ((rand() * 3) | 0);
      for (let i = 0; i < n; i++) {
        const along = i % 2 === 0;
        const w = along ? bw : 1.4 + rand() * 0.6;
        const dd = along ? 1.4 + rand() * 0.6 : bd;
        const ox = along ? 0 : (i === 1 ? 1 : -1) * (bw / 2 - w / 2);
        const oz = along ? (i === 0 ? -1 : 1) * (bd / 2 - dd / 2) : 0;
        const h = 1.1 + rand() * 1.1 + center * 1.4;
        const x = cx + ox, z = cz + oz;
        parts.push(colored(new THREE.BoxGeometry(w, h, dd).translate(x, h / 2, z), wallCols[(rand() * wallCols.length) | 0]));
        if (rand() < 0.55) {
          const roof = new THREE.ConeGeometry(Math.max(w, dd) * 0.62, 0.9, 4, 1).rotateY(Math.PI / 4).scale(w / Math.max(w, dd), 1, dd / Math.max(w, dd)).translate(x, h + 0.45, z);
          parts.push(colored(roof, roofCols[(rand() * roofCols.length) | 0]));
        }
        // upaljeni prozori
        const nw = Math.round(w * h * 0.35);
        for (let k = 0; k < nw; k++) {
          const face = rand() < 0.5 ? 1 : -1;
          windows.push([x + (rand() - 0.5) * w * 0.85, 0.4 + rand() * (h - 0.6), z + face * (dd / 2 + 0.03)]);
        }
      }
    }
  }
  // Hotel Osijek: dvostruki neboder uz rijeku
  [[-16.5, -13.5, 7.6], [-13.2, -12.4, 6.6]].forEach(([x, z, h]) => {
    parts.push(colored(new THREE.BoxGeometry(2.6, h, 2.2).translate(x, h / 2, z), '#1c2a47'));
    for (let k = 0; k < 18; k++) windows.push([x + (rand() - 0.5) * 2.4, 0.5 + rand() * (h - 1), z + 1.13]);
  });
  // trg: popločenje
  parts.push(colored(new THREE.BoxGeometry(19, 0.04, 14.5).translate(0, 0.02, 0.2), '#141b2b'));

  const cityGeo = mergeGeometries(parts, false);
  parts.forEach((g) => g.dispose());
  const cityMat = riseMaterial({ vertexColors: true, flatShading: true, roughness: 0.85, metalness: 0.05 }, U);
  const cityMesh = new THREE.Mesh(cityGeo, cityMat);
  group.add(cityMesh);
  const cityEdgesGeo = new THREE.EdgesGeometry(cityGeo, 30);
  const cityLines = new THREE.LineSegments(cityEdgesGeo, riseLineMaterial('#5574c9', U));
  group.add(cityLines);

  const win = glowPoints({ count: windows.length, color: '#ffb35a', core: '#ffe2b0', size: 0.42 });
  windows.forEach((p, i) => {
    win.pos.set(p, i * 3);
    win.alpha[i] = rand() < 0.6 ? 0.15 + rand() * 0.6 : 0;
  });
  group.add(win.points);

  /* ── konkatedrala ── */
  const cathGeo = buildCathedral();
  const cathU = { uLift: { value: 0 }, uGlow: { value: 0.5 }, uAlpha: { value: 1 } };
  const cathMat = new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.75, metalness: 0.05, transparent: true });
  cathMat.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, cathU);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nuniform float uLift; varying float vH;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\ntransformed.y = transformed.y * uLift - (1.0 - uLift) * 0.4; vH = position.y;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform float uGlow; uniform float uAlpha; varying float vH;')
      .replace('#include <dithering_fragment>', '#include <dithering_fragment>\n gl_FragColor.rgb += vec3(1.0, 0.45, 0.22) * uGlow * 0.22 * (1.0 - smoothstep(0.0, 9.0, vH));\n gl_FragColor.a *= uAlpha;');
  };
  cathMat.customProgramCacheKey = () => 'zaec-cath';
  const cath = new THREE.Mesh(cathGeo, cathMat);
  group.add(cath);

  const flood = new THREE.PointLight('#ff9a5c', 0, 26, 1.4);
  flood.position.set(-2, 2, 9);
  group.add(flood);

  return {
    group,
    cathGeo,
    cathMat,
    update(s) {
      group.visible = s.alpha > 0.002;
      if (!group.visible) return;
      U.uRise.value = s.rise;
      U.uDim.value = s.dim;
      U.uLines.value = s.alpha * (0.35 + 0.65 * s.lines) * (1 - s.dim * 0.7);
      groundU.uOpacity.value = s.alpha;
      riverU.uOpacity.value = s.alpha * (1 - s.dim * 0.6);
      riverU.uTime.value = s.time;
      cathU.uLift.value = Math.max(0.001, s.cath);
      cathU.uGlow.value = 0.6 + s.glow;
      cathU.uAlpha.value = s.alpha * s.cathSolid;
      cath.visible = s.cathSolid > 0.01;
      cathMat.depthWrite = s.cathSolid > 0.6;
      flood.intensity = 14 * s.glow * s.alpha * s.cathSolid;
      win.uniforms.uPR.value = s.pr;
      win.uniforms.uOpacity.value = s.alpha * smooth(0.5, 1, s.rise) * (1 - s.dim * 0.8);
      if (!s.reduce) for (let i = 0; i < win.alpha.length; i += 23) win.alpha[i] = Math.random() < 0.02 ? (win.alpha[i] > 0 ? 0 : 0.7) : win.alpha[i];
      win.geometry.attributes.aAlpha.needsUpdate = true;
    },
    dispose() {
      group.traverse((o) => {
        o.geometry?.dispose();
        (Array.isArray(o.material) ? o.material : o.material ? [o.material] : []).forEach((m) => m.dispose());
      });
    },
  };
}
