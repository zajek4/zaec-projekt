// Scena 02 — Europa → Hrvatska → Slavonija: karta je nastavak globusa, ne nova scena.
// Teren dijeli jezik planeta (maska kopna, matrica točaka, sunce) i pri prijelazu se "odmata" s kugle
// (BEND), pa nema skoka mjerila ni stila. Hrvatska se ne izdiže: obris se iscrtava jednim potezom
// iz Osijeka (scroll vodi pero), vrhunac sjaja dolazi kad se krug zatvori, zatim se smiri.
// Spuštanjem pada sumrak (SUN_MAP): noć prelazi kartu, a svjetla gradova pale se tek kad je nad njima mrak.
import * as THREE from 'three';
import { proj, glowPoints, seeded, smooth, BEND, BEND_GLSL, SUN_MAP, DAY_EDGE, OSIJEK, MAPK, COSLAT, EARTH_GLSL, CIVIC } from './lib.js';

const f = (v) => (Number.isInteger(v) ? v.toFixed(1) : String(v));
// detaljna tekstura kopna (build-geo.mjs, korak 6): lon −30…60, lat 25…75
const EU_BOX = [-30, 25, 60, 75];

/* ───────── debela linija u prostoru zaslona (obris Hrvatske) ─────────
   Svaki segment je pravokutnik proširen u pikselima; aU je udaljenost duž prstena (0…1) za iscrtavanje. */
function ribbon(rings) {
  const P = [], Q = [], side = [], end = [], u = [], isl = [];
  rings.forEach((r, ri) => {
    let L = 0;
    const acc = [0];
    for (let i = 1; i < r.length; i++) { L += Math.hypot(r[i][0] - r[i - 1][0], r[i][1] - r[i - 1][1]); acc.push(L); }
    for (let i = 0; i < r.length - 1; i++) {
      const a = r[i], b = r[i + 1];
      const ua = acc[i] / L, ub = acc[i + 1] / L;
      // dva trokuta: (A,−) (A,+) (B,−) · (B,−) (A,+) (B,+)
      const verts = [[a, b, -1, 0, ua], [a, b, 1, 0, ua], [b, a, -1, 1, ub], [b, a, -1, 1, ub], [a, b, 1, 0, ua], [b, a, 1, 1, ub]];
      for (const [p, q, sd, e, uu] of verts) {
        P.push(p[0], 0.05, p[1]); Q.push(q[0], 0.05, q[1]);
        side.push(sd); end.push(e); u.push(uu); isl.push(ri === 0 ? 0 : 1);
      }
    }
  });
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3));
  g.setAttribute('aQ', new THREE.Float32BufferAttribute(Q, 3));
  g.setAttribute('aSide', new THREE.Float32BufferAttribute(side, 1));
  g.setAttribute('aEnd', new THREE.Float32BufferAttribute(end, 1));
  g.setAttribute('aU', new THREE.Float32BufferAttribute(u, 1));
  g.setAttribute('aIsl', new THREE.Float32BufferAttribute(isl, 1));
  g.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 400);
  return g;
}

export function createEurope({ geo, lite, landTex, fieldTex, lightsTex, landEuUrl }) {
  const rand = seeded(11);
  const group = new THREE.Group();
  group.name = 'europa';
  const disposables = [];
  const track = (o) => { disposables.push(o); return o; };

  /* ── 1. teren: nastavak planeta ── */
  const loader = new THREE.TextureLoader();
  const tex = (url) => {
    const t = track(loader.load(url));
    t.colorSpace = THREE.NoColorSpace;
    t.format = THREE.RedFormat; // maska: jedan kanal (¼ memorije i prijenosa)
    t.generateMipmaps = false;
    t.minFilter = THREE.LinearFilter;
    return t;
  };
  const TU = {
    uLandW: { value: landTex },
    uLandE: { value: tex(landEuUrl) },
    uField: { value: fieldTex },
    uLights: { value: lightsTex },
    uCivic: CIVIC,
    uBend: BEND,
    uSunMap: SUN_MAP,
    uDayEdge: DAY_EDGE,
    uAlpha: { value: 0 },
    uDots: { value: 1 },
    uGrat: { value: 0 },
    uNightL: { value: 1 },
    uDim: { value: 0 },
  };
  const X0 = -140, X1 = 118, Z0 = -118, Z1 = 84;
  const terrainGeo = track(new THREE.PlaneGeometry(X1 - X0, Z1 - Z0, lite ? 96 : 140, lite ? 76 : 110).rotateX(-Math.PI / 2).translate((X0 + X1) / 2, 0, (Z0 + Z1) / 2));
  const terrainMat = track(new THREE.ShaderMaterial({
    uniforms: TU,
    transparent: true,
    depthWrite: false,
    polygonOffset: true,
    polygonOffsetFactor: -2,
    polygonOffsetUnits: -8,
    vertexShader: /* glsl */ `
      ${BEND_GLSL}
      varying vec2 vXZ; varying vec3 vW;
      void main(){
        vXZ = position.xz;
        vec4 w = modelMatrix * vec4(bendPos(position), 1.0);
        vW = w.xyz;
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,
    fragmentShader: /* glsl */ `
      uniform sampler2D uLandW; uniform sampler2D uLandE; uniform vec3 uSunMap; uniform vec2 uDayEdge;
      uniform float uAlpha; uniform float uDots; uniform float uGrat; uniform float uNightL; uniform float uDim;
      ${BEND_GLSL}
      ${EARTH_GLSL}
      varying vec2 vXZ; varying vec3 vW;
      float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float dotField(vec2 g, float r){
        vec2 q = fract(g) - 0.5;
        float aa = fwidth(length(q)) * 1.2;
        return 1.0 - smoothstep(r - aa, r + aa, length(q));
      }
      void main(){
        float latD = ${f(OSIJEK[1])} - vXZ.y / ${f(MAPK)};
        float lonD = ${f(OSIJEK[0])} + vXZ.x / ${f(MAPK * COSLAT)};
        vec2 uvE = vec2((lonD - ${f(EU_BOX[0])}) / ${f(EU_BOX[2] - EU_BOX[0])}, (latD - ${f(EU_BOX[1])}) / ${f(EU_BOX[3] - EU_BOX[1])});
        float inE = step(0.0, uvE.x) * step(uvE.x, 1.0) * step(0.0, uvE.y) * step(uvE.y, 1.0);
        vec2 uvW = vec2((lonD + 180.0) / 360.0, (latD + 90.0) / 180.0);
        float lw = texture2D(uLandW, uvW).r;
        float le = texture2D(uLandE, uvE).r;
        float land = smoothstep(0.25, 0.75, mix(lw, le, inE));
        // ista matrica kao na globusu (0,36°); kako se kamera spušta, ulaze 4× i 16× gušće razine,
        // pa točke na zaslonu ostaju sitne — detalj raste sa spuštanjem umjesto da se točke napuhuju
        float lat = latD * 0.0174533, lon = lonD * 0.0174533;
        vec2 g = vec2(lon * cos(lat), lat) / (0.36 * 0.0174533);
        float cellPx = 1.0 / max(length(fwidth(g)), 1e-5);
        float lev = clamp(log2(cellPx / 7.0) * 0.5, 0.0, 2.0);
        float l0 = floor(lev);
        float k0 = exp2(l0 * 2.0);
        float fr = smoothstep(0.55, 1.0, lev - l0);
        float rr = mix(0.17, 0.12, clamp(lev, 0.0, 1.0));
        float dm = mix(dotField(g * k0, rr), dotField(g * k0 * 4.0, rr), fr) * land;
        float dots = dm * uDots;
        vec3 n = sphereNormal(vXZ);
        vec3 v = normalize(cameraPosition - vW);
        float ndl = dot(n, uSunMap);
        float day = smoothstep(uDayEdge.x, uDayEdge.y, ndl);
        float mu = max(dot(n, v), 0.0);
        vec4 F = texture2D(uField, uvW);
        vec3 landC = landTone(F, lat, lon) + dots * vec3(0.10, 0.2, 0.42);
        vec3 col = mix(oceanTone(F, mu), landC, land);
        col *= 0.2 + 1.35 * day;
        // sumrak: topla traka koja putuje preko karte
        float mid = (uDayEdge.x + uDayEdge.y) * 0.5, wid = (uDayEdge.y - uDayEdge.x) * 0.32;
        col += twilightTone(ndl, mid, wid) * (0.3 + 0.7 * land) * 0.3;
        // noćna strana (kao na globusu): tiha matrica i svjetla naselja iz snimke; svaka razina matrice
        // ima svoje ćelije (središte ćelije → uv), pa spuštanjem gradovi dobivaju sve finiju strukturu
        float night = 1.0 - day;
        col += dots * vec3(0.08, 0.16, 0.38) * night * 0.45;
        vec2 c0 = (floor(g * k0) + 0.5) / k0, c1 = (floor(g * k0 * 4.0) + 0.5) / (k0 * 4.0);
        float la0 = c0.y * 0.0062832, la1 = c1.y * 0.0062832;
        vec2 u0 = vec2((c0.x * 0.0062832 / cos(la0) + 3.14159265) / 6.2831853, (la0 + 1.5707963) / 3.14159265);
        vec2 u1 = vec2((c1.x * 0.0062832 / cos(la1) + 3.14159265) / 6.2831853, (la1 + 1.5707963) / 3.14159265);
        float ambK = 1.0 - 0.75 * smoothstep(0.0, 1.0, lev);
        vec4 cl = mix(cityLights(u0, h21(floor(g * k0) + k0 - 1.0), dotField(g * k0, rr) * land, F, ambK), cityLights(u1, h21(floor(g * k0 * 4.0) + k0 * 4.0 - 1.0), dotField(g * k0 * 4.0, rr) * land, F, ambK), fr);
        float civ = uCivic * day;
        col = mix(col, civicTone(day) * (1.0 - uDim * 0.55), clamp(cl.a * civ * uNightL, 0.0, 1.0));
        col += cl.rgb * night * 1.3 * uNightL;
        // geografska mreža (1°) — tanka, samo dok je pogled regionalan
        vec2 gl = vec2(lonD, latD);
        vec2 gd = abs(fract(gl - 0.5) - 0.5) / fwidth(gl);
        col += vec3(0.10, 0.16, 0.34) * (1.0 - min(min(gd.x, gd.y), 1.0)) * uGrat;
        col += hazeTone(mu, ndl) * (1.0 - uDim);
        col *= 1.0 - uDim * 0.55;
        // rubovi terena nestaju meko (nikad se ne vidi kraj karte)
        float r = length(vXZ * vec2(1.0, 1.15));
        float edge = 1.0 - smoothstep(85.0, 128.0, r);
        gl_FragColor = vec4(col, uAlpha * edge);
      }`,
  }));
  const terrain = new THREE.Mesh(terrainGeo, terrainMat);
  terrain.renderOrder = 1;
  terrain.frustumCulled = false;
  group.add(terrain);

  /* ── 2. granice država (savijaju se s kartom) ── */
  const lineShader = (color, additive = true) => {
    const U = { uColor: { value: new THREE.Color(color) }, uOpacity: { value: 0 }, uBend: BEND };
    const m = new THREE.ShaderMaterial({
      uniforms: U,
      transparent: true,
      depthWrite: false,
      depthTest: false,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
      vertexShader: /* glsl */ `${BEND_GLSL}
        void main(){ gl_Position = projectionMatrix * modelViewMatrix * vec4(bendPos(position), 1.0); }`,
      fragmentShader: /* glsl */ `uniform vec3 uColor; uniform float uOpacity; void main(){ gl_FragColor = vec4(uColor, uOpacity); }`,
    });
    return { m: track(m), U };
  };
  const borderSeg = [];
  for (const country of geo.europe) {
    for (const r of country.rings) {
      for (let i = 0; i < r.length - 1; i++) {
        const [x1, z1] = proj(r[i][0], r[i][1]);
        const [x2, z2] = proj(r[i + 1][0], r[i + 1][1]);
        borderSeg.push(x1, 0.04, z1, x2, 0.04, z2);
      }
    }
  }
  const borders = lineShader('#4d68c4');
  const borderLines = new THREE.LineSegments(track(new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(borderSeg, 3))), borders.m);
  borderLines.renderOrder = 2;
  borderLines.frustumCulled = false;
  group.add(borderLines);

  /* ── 3. Hrvatska: blaga ispuna + obris koji se iscrtava ── */
  const croRings = geo.croatia.map((ring) => ring.map(([lon, lat]) => proj(lon, lat)));
  // glavni prsten počinje u točki najbližoj Osijeku i ide prema sjeveru (uz Dravu), pa niz obalu i natrag
  {
    const main = croRings[0].slice(0, -1);
    let area = 0;
    for (let i = 0; i < main.length; i++) { const a = main[i], b = main[(i + 1) % main.length]; area += a[0] * b[1] - b[0] * a[1]; }
    if (area > 0) main.reverse(); // z = −sjever: negativna površina = smjer suprotan kazaljci (sjever → zapad → jug)
    let k = 0, best = Infinity;
    main.forEach(([x, z], i) => { const d = x * x + z * z; if (d < best) { best = d; k = i; } });
    const rot = main.slice(k).concat(main.slice(0, k));
    rot.push(rot[0]);
    croRings[0] = rot;
  }
  const RU = { uBend: BEND, uRes: { value: new THREE.Vector2(1, 1) }, uWidth: { value: 6 }, uCore: { value: 0.2 }, uTrace: { value: 0 }, uHL: { value: 0 }, uOpacity: { value: 0 }, uTime: { value: 0 } };
  const outlineMat = track(new THREE.ShaderMaterial({
    uniforms: RU,
    transparent: true,
    depthWrite: false,
    depthTest: false,
    side: THREE.DoubleSide,
    blending: THREE.CustomBlending,
    blendEquation: THREE.MaxEquation,
    blendSrc: THREE.OneFactor,
    blendDst: THREE.OneFactor,
    vertexShader: /* glsl */ `
      ${BEND_GLSL}
      attribute vec3 aQ; attribute float aSide; attribute float aEnd; attribute float aU; attribute float aIsl;
      uniform vec2 uRes; uniform float uWidth;
      varying float vS; varying float vU; varying float vIsl;
      void main(){
        vec4 cp = projectionMatrix * modelViewMatrix * vec4(bendPos(position), 1.0);
        vec4 cq = projectionMatrix * modelViewMatrix * vec4(bendPos(aQ), 1.0);
        vec2 sp = cp.xy / cp.w * uRes, sq = cq.xy / cq.w * uRes;
        float dirS = aEnd < 0.5 ? 1.0 : -1.0;
        vec2 dir = normalize((sq - sp) * dirS + vec2(1e-6, 0.0));
        vec2 nrm = vec2(-dir.y, dir.x);
        vec2 off = nrm * aSide * uWidth - dir * dirS * uWidth * 0.35;
        gl_Position = cp;
        gl_Position.xy += off / uRes * cp.w;
        vS = aSide; vU = aU; vIsl = aIsl;
      }`,
    fragmentShader: /* glsl */ `
      uniform float uCore; uniform float uTrace; uniform float uHL; uniform float uOpacity; uniform float uTime;
      varying float vS; varying float vU; varying float vIsl;
      void main(){
        // otoci se iscrtavaju u drugoj polovici poteza, svi zajedno
        float tr = vIsl > 0.5 ? smoothstep(0.4, 0.98, uTrace) : uTrace;
        float drawn = smoothstep(tr + 0.0015, tr - 0.0015, vU) * step(0.0005, tr);
        float d = abs(vS);
        float aa = fwidth(d) * 1.2;
        float core = 1.0 - smoothstep(uCore - aa, uCore + aa, d);
        float halo = exp(-d * d * 7.0);
        // vrh pera: kratak svijetli rep dok potez putuje
        float live = (1.0 - smoothstep(0.96, 1.0, uTrace)) * step(vIsl, 0.5);
        float head = exp(-pow((tr - vU) * 70.0, 2.0)) * live;
        float tail = exp(-max(tr - vU, 0.0) * 18.0) * live;
        float glow = uHL * (0.55 + 0.45 * tail) + head * 1.6;
        vec3 cCore = mix(vec3(0.62, 0.72, 1.0), vec3(1.0, 0.92, 0.8), head);
        vec3 cHalo = vec3(0.18, 0.32, 1.0);
        vec3 c = cCore * core * (0.45 + 0.55 * glow) + cHalo * halo * glow * 0.5;
        gl_FragColor = vec4(c * drawn * uOpacity, 1.0);
      }`,
  }));
  const outline = new THREE.Mesh(track(ribbon(croRings)), outlineMat);
  outline.renderOrder = 6;
  outline.frustumCulled = false;
  group.add(outline);
  // vrh pera: točka koja putuje obrisom
  const mainRing = croRings[0];
  const mainAcc = [0];
  for (let i = 1; i < mainRing.length; i++) mainAcc.push(mainAcc[i - 1] + Math.hypot(mainRing[i][0] - mainRing[i - 1][0], mainRing[i][1] - mainRing[i - 1][1]));
  const mainLen = mainAcc[mainAcc.length - 1];
  const pen = glowPoints({ count: 1, color: '#9cb4ff', core: '#ffffff', size: 0.5, depthTest: false, bend: true });
  pen.uniforms.uMin.value = 7;
  pen.uniforms.uMax.value = 22;
  pen.points.renderOrder = 7;
  group.add(pen.points);
  // ispuna: Hrvatska se nježno "upali" kad se obris zatvori
  const shape = (ring) => new THREE.Shape(ring.map(([x, z]) => new THREE.Vector2(x, -z)));
  const fillGeo = track(new THREE.ShapeGeometry(croRings.map(shape), 1).rotateX(-Math.PI / 2));
  fillGeo.translate(0, 0.02, 0);
  const fill = lineShader('#1d3bd6');
  fill.m.side = THREE.DoubleSide;
  const fillMesh = new THREE.Mesh(fillGeo, fill.m);
  fillMesh.renderOrder = 3;
  fillMesh.frustumCulled = false;
  group.add(fillMesh);

  /* ── 4. gradovi i lukovi prema Europi ── */
  const cityPts = glowPoints({ count: geo.cities.length, color: '#6f93ff', core: '#ffffff', size: 0.11, bend: true, depthTest: false });
  geo.cities.forEach(([, lon, lat, big], i) => {
    const [x, z] = proj(lon, lat);
    cityPts.pos[i * 3] = x; cityPts.pos[i * 3 + 1] = 0.06; cityPts.pos[i * 3 + 2] = z;
    cityPts.size[i] = i === 0 ? 2.6 : big ? 1.3 : 0.8;
  });
  cityPts.uniforms.uMin.value = 2;
  cityPts.points.renderOrder = 8;
  group.add(cityPts.points);

  const arcs = [];
  const arcSeg = [];
  geo.capitals.forEach(([, lon, lat]) => {
    const [x, z] = proj(lon, lat);
    const a = new THREE.Vector3(0, 0.06, 0);
    const b = new THREE.Vector3(x, 0.06, z);
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
  const arcLine = lineShader('#4a6ff0');
  const arcLines = new THREE.LineSegments(track(new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(arcSeg, 3))), arcLine.m);
  arcLines.frustumCulled = false;
  arcLines.renderOrder = 4;
  group.add(arcLines);
  const capPts = glowPoints({ count: geo.capitals.length, color: '#4f7bff', core: '#dfe7ff', size: 0.32, bend: true });
  geo.capitals.forEach(([, lon, lat], i) => {
    const [x, z] = proj(lon, lat);
    capPts.pos[i * 3] = x; capPts.pos[i * 3 + 1] = 0.08; capPts.pos[i * 3 + 2] = z;
  });
  capPts.uniforms.uMin.value = 1.5;
  group.add(capPts.points);
  const TRAIL = 5;
  const pulses = glowPoints({ count: arcs.length * TRAIL, color: '#7f9fff', core: '#ffffff', size: 0.36, bend: true });
  pulses.uniforms.uMin.value = 1.2;
  group.add(pulses.points);

  /* ── 5. noćna svjetla: gradovi, mjesta Slavonije i sela uz ceste između njih ──
     Pale se tek kad sumrak prijeđe preko njih (nightOnly), a svako ima svoj prag (aWake). */
  const TOWNS = [['Đakovo', 18.41, 45.31, 1], ['Vukovar', 19.0, 45.35, 1], ['Vinkovci', 18.8, 45.29, 0.95], ['Valpovo', 18.42, 45.66, 0.6], ['Belišće', 18.4, 45.68, 0.5], ['Našice', 18.1, 45.49, 0.6], ['Beli Manastir', 18.6, 45.77, 0.6], ['Donji Miholjac', 18.17, 45.76, 0.5], ['Čepin', 18.565, 45.524, 0.45], ['Tenja', 18.749, 45.497, 0.35], ['Bilje', 18.743, 45.606, 0.35], ['Darda', 18.692, 45.627, 0.35]];
  const towns = TOWNS.map(([, lon, lat, w]) => [...proj(lon, lat), w]);
  // ostali hrvatski gradovi (pale se redom kako noć putuje preko zemlje)
  const BIG = geo.cities.slice(1).map(([, lon, lat, big]) => [...proj(lon, lat), big ? 1.6 : 0.8]);
  // ceste kao lanci sela: Osijek prema okolnim mjestima i mjesta međusobno
  const T = Object.fromEntries(TOWNS.map((t, i) => [t[0], towns[i]]));
  const O = [0, 0];
  const ROADS = [[O, T['Đakovo']], [O, T['Vinkovci']], [O, T['Vukovar']], [O, T['Valpovo']], [T['Valpovo'], T['Donji Miholjac']], [O, T['Našice']], [O, T['Beli Manastir']], [T['Vinkovci'], T['Vukovar']], [T['Đakovo'], T['Vinkovci']], [T['Đakovo'], T['Našice']], [T['Našice'], T['Donji Miholjac']]];
  const LN = lite ? 1700 : 3200;
  const lights = glowPoints({ count: LN, color: '#ffae58', core: '#fff0d0', size: 0.24, depthTest: false, nightOnly: true });
  lights.uniforms.uMin.value = 1.1;
  lights.uniforms.uFall.value = 1;
  lights.uniforms.uMax.value = 9;
  lights.points.renderOrder = 9;
  const gauss = () => Math.sqrt(-2 * Math.log(rand() + 1e-6)) * Math.cos(rand() * Math.PI * 2);
  for (let i = 0; i < LN; i++) {
    let x, z, bright = 1, size = 1;
    const r = rand();
    if (r < 0.2) {
      // prigradska naselja oko Osijeka (u samom gradu su stvarna ulična svjetla iz city.js)
      do { x = gauss() * 0.3; z = gauss() * 0.22; } while (Math.hypot(x, z * 1.4) < 0.12);
      bright = 0.7;
    } else if (r < 0.62) {
      const t = towns[(rand() * towns.length) | 0];
      const sp = 0.012 + t[2] * 0.028;
      x = t[0] + gauss() * sp; z = t[1] + gauss() * sp;
    } else if (r < 0.86) {
      // sela uz ceste: nakupine od nekoliko svjetala, malo odmaknute od pravca
      const [a, b] = ROADS[(rand() * ROADS.length) | 0];
      const t = 0.08 + rand() * 0.84;
      const nx = -(b[1] - a[1]), nz = b[0] - a[0], nl = Math.hypot(nx, nz) || 1;
      const off = Math.sin(t * 9 + a[0]) * 0.03 + gauss() * 0.012;
      x = a[0] + (b[0] - a[0]) * t + (nx / nl) * off + gauss() * 0.006;
      z = a[1] + (b[1] - a[1]) * t + (nz / nl) * off + gauss() * 0.006;
      bright = 0.55; size = 0.75;
    } else {
      const c = BIG[(rand() * BIG.length) | 0];
      const sp = 0.03 + c[2] * 0.05;
      x = c[0] + gauss() * sp; z = c[1] + gauss() * sp;
      size = 1.4;
    }
    lights.pos[i * 3] = x; lights.pos[i * 3 + 1] = 0.05; lights.pos[i * 3 + 2] = z;
    lights.alpha[i] = (0.2 + rand() * 0.8) * bright;
    lights.size[i] = (0.5 + rand() * rand() * 1.8) * size;
    lights.wake[i] = rand() * 0.9;
  }
  group.add(lights.points);

  /* ── 6. svjetlosna kupola nad Osijekom: grad se vidi kao topli sjaj prije nego što se razaznaju ulice ── */
  const DU = { uOpacity: { value: 0 }, uR: { value: 1 } };
  const dome = new THREE.Mesh(
    track(new THREE.PlaneGeometry(2, 2).rotateX(-Math.PI / 2)),
    track(new THREE.ShaderMaterial({
      uniforms: DU,
      transparent: true,
      depthWrite: false,
      depthTest: false,
      blending: THREE.AdditiveBlending,
      vertexShader: /* glsl */ `uniform float uR; varying vec2 vP; void main(){ vP = position.xz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x * uR, 0.03, position.z * uR, 1.0); }`,
      fragmentShader: /* glsl */ `uniform float uOpacity; varying vec2 vP;
        void main(){ float r = length(vP * vec2(1.0, 1.25)); float a = exp(-r * r * 5.5) * 0.8 + exp(-r * r * 26.0) * 0.6;
          gl_FragColor = vec4(vec3(1.0, 0.56, 0.24) * a * uOpacity, 1.0); }`,
    })),
  );
  dome.renderOrder = 5;
  dome.frustumCulled = false;
  group.add(dome);

  const tmp = new THREE.Vector3();
  const allPts = [cityPts, capPts, pulses, lights, pen];

  return {
    group,
    towns: TOWNS.map((t) => t[0]),
    townWorld(i, out = new THREE.Vector3()) {
      return out.set(towns[i][0], 0.06, towns[i][1]).applyMatrix4(group.matrixWorld);
    },
    cityWorld(i, out = new THREE.Vector3()) {
      return out.fromArray(cityPts.pos, i * 3).applyMatrix4(group.matrixWorld);
    },
    /** s: { alpha, Z, time, dt, pr, reduce, net, trace, hl, dusk, night, mapFade, res } */
    update(s) {
      group.visible = s.alpha > 0.002;
      if (!group.visible) return;
      const a = s.alpha;
      const Z = s.Z;
      const fade = 1 - s.mapFade;
      TU.uAlpha.value = a;
      // matrica je jezik globusa: puna pri prijelazu, tiha nad Hrvatskom, nestaje prije Slavonije
      TU.uDots.value = 1 - 0.55 * smooth(0.9, 1.0, Z) - 0.45 * smooth(1.0, 1.3, Z);
      TU.uGrat.value = smooth(0.94, 1.05, Z) * (1 - smooth(1.3, 1.6, Z)) * 0.5;
      // svjetla naselja ostaju kroz Hrvatsku; nad Slavonijom ih preuzimaju stvarna mjesta i grad
      TU.uNightL.value = 1 - smooth(1.2, 1.5, Z);
      TU.uDim.value = smooth(1.5, 1.9, Z);
      borders.U.uOpacity.value = 0.55 * a * fade * (1 - 0.5 * s.hl);
      // obris Hrvatske
      RU.uRes.value.set(s.res[0] / 2, s.res[1] / 2);
      RU.uWidth.value = 7 * s.pr;
      RU.uCore.value = 0.16;
      RU.uTrace.value = s.trace;
      RU.uHL.value = s.hl;
      // obris se nakon vrhunca smiri, a prije bliskog pogleda na Slavoniju nestane (pojednostavljena granica)
      RU.uOpacity.value = a * (1 - smooth(1.12, 1.42, Z));
      RU.uTime.value = s.time;
      const live = s.trace > 0.002 && s.trace < 0.985;
      if (live) {
        const d = s.trace * mainLen;
        let j = 1;
        while (j < mainAcc.length - 1 && mainAcc[j] < d) j++;
        const t = (d - mainAcc[j - 1]) / Math.max(1e-6, mainAcc[j] - mainAcc[j - 1]);
        pen.pos[0] = mainRing[j - 1][0] + (mainRing[j][0] - mainRing[j - 1][0]) * t;
        pen.pos[1] = 0.06;
        pen.pos[2] = mainRing[j - 1][1] + (mainRing[j][1] - mainRing[j - 1][1]) * t;
        pen.geometry.attributes.position.needsUpdate = true;
      }
      pen.uniforms.uOpacity.value = live ? a * Math.min(1, s.trace * 30, (0.985 - s.trace) * 30) : 0;
      fill.U.uOpacity.value = a * (0.05 + 0.1 * s.hl) * smooth(0.82, 1, s.trace) * (1 - smooth(1.25, 1.6, Z));
      // gradovi i Europa
      cityPts.uniforms.uOpacity.value = a * smooth(0.5, 0.95, s.trace) * fade;
      arcLine.U.uOpacity.value = 0.42 * a * s.net * fade;
      capPts.uniforms.uOpacity.value = a * s.net * fade;
      pulses.uniforms.uOpacity.value = a * s.net * fade;
      // noćna svjetla i kupola
      lights.uniforms.uOpacity.value = a * (1 - smooth(1.78, 1.97, Z));
      lights.uniforms.uWake.value = 0.15 + s.night * 1.0;
      // kupola je fizički sjaj nad gradom (≈15 km): ne raste sa zoomom i nestaje prije poniranja u ulice
      DU.uR.value = 0.6;
      DU.uOpacity.value = a * s.night * smooth(1.05, 1.35, Z) * (1 - smooth(1.6, 1.8, Z)) * 0.5;
      allPts.forEach((p) => { p.uniforms.uPR.value = s.pr; });
      arcs.forEach((arc, i) => {
        if (!s.reduce) arc.t = (arc.t + s.dt * arc.speed) % 1;
        for (let k = 0; k < TRAIL; k++) {
          const t = arc.dir > 0 ? arc.t - k * 0.02 : 1 - arc.t + k * 0.02;
          const ff = Math.min(arc.pts.length - 1.001, Math.max(0, t * (arc.pts.length - 1)));
          const j = Math.floor(ff);
          tmp.copy(arc.pts[j]).lerp(arc.pts[j + 1], ff - j).toArray(pulses.pos, (i * TRAIL + k) * 3);
          pulses.alpha[i * TRAIL + k] = (1 - k / TRAIL) * Math.min(1, arc.t * 6) * Math.min(1, (1 - arc.t) * 6);
        }
      });
      if (s.net * fade > 0.01) {
        pulses.geometry.attributes.position.needsUpdate = true;
        pulses.geometry.attributes.aAlpha.needsUpdate = true;
      }
    },
    dispose() {
      disposables.forEach((o) => o.dispose());
      allPts.forEach((p) => { p.geometry.dispose(); p.material.dispose(); });
    },
  };
}
