// Scena 01 — planet iz niske orbite: kopno iz stvarne maske (2048×1024), digitalna matrica točaka,
// osvjetljenje sunca s gornje desne strane, odsjaj oceana, proceduralni oblaci i tanka atmosfera.
// Mreža komunikacija je zaseban modul (network.js) u istom koordinatnom sustavu (jedinična sfera).
import * as THREE from 'three';
import { ll2v, OSIJEK, DEG, glowPoints, lineMat } from './lib.js';
import { SNOISE } from './noise.glsl.js';

export function createGlobe({ geo, lite, landUrl }) {
  const group = new THREE.Group();
  group.name = 'planet';
  const spin = new THREE.Group();
  group.add(spin);

  // Poravnanje: Osijek → +y, sjever → −z, istok → +x.
  const la = OSIJEK[1] * DEG, lo = OSIJEK[0] * DEG;
  const up = ll2v(OSIJEK[0], OSIJEK[1]);
  const north = new THREE.Vector3(-Math.sin(la) * Math.sin(lo), Math.cos(la), -Math.sin(la) * Math.cos(lo)).normalize();
  const east = new THREE.Vector3().crossVectors(north, up).normalize();
  const src = new THREE.Matrix4().makeBasis(east, up, north);
  const tgt = new THREE.Matrix4().makeBasis(new THREE.Vector3(1, 0, 0), new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, -1));
  group.quaternion.setFromRotationMatrix(new THREE.Matrix4().multiplyMatrices(tgt, src.clone().transpose()));

  /* ── planet ── */
  const land = new THREE.TextureLoader().load(landUrl);
  land.colorSpace = THREE.NoColorSpace;
  land.minFilter = THREE.LinearFilter; // bez mipmapa → nema šava na antimeridijanu
  land.generateMipmaps = false;
  land.wrapS = THREE.RepeatWrapping;
  const U = {
    uLand: { value: land },
    uSun: { value: new THREE.Vector3(0.78, 0.46, -0.95).normalize() },
    uTime: { value: 0 },
    uAlpha: { value: 1 },
    uCloud: { value: 1 },
    uDots: { value: 1 },
    uOct: { value: lite ? 3 : 5 },
  };
  const planetMat = new THREE.ShaderMaterial({
    uniforms: U,
    transparent: true,
    vertexShader: /* glsl */ `
      varying vec3 vObj; varying vec3 vN; varying vec3 vW;
      void main(){
        vObj = position;
        vN = normalize(mat3(modelMatrix) * position);
        vec4 w = modelMatrix * vec4(position, 1.0);
        vW = w.xyz;
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,
    fragmentShader: /* glsl */ `
      uniform sampler2D uLand; uniform vec3 uSun; uniform float uTime; uniform float uAlpha; uniform float uCloud; uniform float uDots; uniform int uOct;
      varying vec3 vObj; varying vec3 vN; varying vec3 vW;
      ${SNOISE}
      void main(){
        vec3 o = normalize(vObj);
        float lat = asin(clamp(o.y, -1.0, 1.0));
        float lon = atan(o.x, o.z);
        vec2 uv = vec2((lon + 3.14159265) / 6.2831853, (lat + 1.5707963) / 3.14159265);
        float land = smoothstep(0.25, 0.75, texture2D(uLand, uv).r);
        // digitalna matrica točaka na kopnu (razmak ~0,5°, ispravljen za širinu)
        vec2 g = vec2(lon * cos(lat), lat) / (0.36 * 0.0174533);
        vec2 f = fract(g) - 0.5;
        float aa = fwidth(length(f)) * 1.5;
        float dots = (1.0 - smoothstep(0.17 - aa, 0.17 + aa, length(f))) * land;
        vec3 n = normalize(vN);
        vec3 v = normalize(cameraPosition - vW);
        float ndl = dot(n, uSun);
        float day = smoothstep(-0.12, 0.38, ndl);
        // oblaci: tanki slojevi, sporo putuju
        float cl = fbm3(o * 3.1 + vec3(uTime * 0.004, 0.0, uTime * 0.002), uOct) * 0.5 + 0.5;
        float wisp = fbm3(o * 9.0 - vec3(0.0, uTime * 0.006, 0.0), uOct > 3 ? 3 : 2) * 0.5 + 0.5;
        float clouds = smoothstep(0.56, 0.86, cl * 0.85 + wisp * 0.25) * uCloud;
        vec3 ocean = vec3(0.008, 0.016, 0.04);
        vec3 landC = vec3(0.036, 0.055, 0.085) + dots * uDots * vec3(0.10, 0.2, 0.42);
        vec3 col = mix(ocean, landC, land);
        col *= 0.22 + 1.35 * day;
        // odsjaj sunca na moru
        vec3 h = normalize(uSun + v);
        col += vec3(0.55, 0.62, 0.8) * pow(max(dot(n, h), 0.0), 60.0) * (1.0 - land) * day * 0.55;
        // noćna strana: slabašan sjaj točaka (gradovi kao matrica)
        col += dots * uDots * vec3(0.08, 0.16, 0.38) * (1.0 - day) * 0.45;
        // oblaci osvijetljeni suncem, tamni na noćnoj strani
        col = mix(col, vec3(0.62, 0.68, 0.8) * (0.05 + 0.85 * day), clouds * 0.8);
        // atmosferska izmaglica prema rubu (jače na osunčanoj strani)
        float fres = pow(1.0 - max(dot(n, v), 0.0), 2.6);
        col += vec3(0.16, 0.42, 1.0) * fres * (0.14 + 1.05 * smoothstep(-0.2, 0.6, ndl));
        gl_FragColor = vec4(col, uAlpha);
      }`,
  });
  const planet = new THREE.Mesh(new THREE.SphereGeometry(1, lite ? 96 : 160, lite ? 64 : 112), planetMat);
  planet.renderOrder = 0;
  spin.add(planet);

  /* ── atmosfera: tanka ljuska, osvijetljena sa stražnje strane ── */
  const atmoU = { uSun: U.uSun, uAlpha: { value: 1 } };
  const atmo = new THREE.Mesh(
    new THREE.SphereGeometry(1.028, 96, 64),
    new THREE.ShaderMaterial({
      uniforms: atmoU,
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexShader: /* glsl */ `varying vec3 vN; varying vec3 vW; void main(){ vN = normalize(mat3(modelMatrix) * position); vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
      fragmentShader: /* glsl */ `uniform vec3 uSun; uniform float uAlpha; varying vec3 vN; varying vec3 vW;
        void main(){
          vec3 n = normalize(vN); vec3 v = normalize(cameraPosition - vW);
          float rim = pow(clamp(-dot(n, v), 0.0, 1.0), 0.55);
          float edge = smoothstep(0.0, 0.35, 1.0 - rim);
          float sun = smoothstep(-0.35, 0.7, dot(n, uSun));
          float fwd = pow(max(dot(normalize(-v), uSun), 0.0), 6.0); // naspramno svjetlo uz rub
          vec3 c = mix(vec3(0.10, 0.22, 0.75), vec3(0.45, 0.7, 1.0), sun);
          float a = rim * edge * (0.12 + 0.9 * sun + 0.8 * fwd);
          gl_FragColor = vec4(c * a, a * uAlpha);
        }`,
    }),
  );
  group.add(atmo);

  /* ── granice Europe i Hrvatske (tanke, digitalne) ── */
  const seg = [];
  const a = new THREE.Vector3(), b = new THREE.Vector3();
  const pushRings = (rings, r) => {
    for (const ring of rings) for (let i = 0; i < ring.length - 1; i++) {
      ll2v(ring[i][0], ring[i][1], r, a); ll2v(ring[i + 1][0], ring[i + 1][1], r, b);
      seg.push(a.x, a.y, a.z, b.x, b.y, b.z);
    }
  };
  geo.europe.forEach((c) => pushRings(c.rings, 1.0012));
  pushRings(geo.croatia, 1.0016);
  const borderGeo = new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(seg, 3));
  const borderMat = lineMat('#5b7bd8', 0.3, true);
  spin.add(new THREE.LineSegments(borderGeo, borderMat));

  /* ── čvor Osijek (jak u finalu: "vaša tvrtka") ── */
  const osijek = ll2v(OSIJEK[0], OSIJEK[1]);
  const hub = glowPoints({ count: 1, color: '#ffb23f', core: '#fff3d6', size: 0.05 });
  osijek.clone().multiplyScalar(1.004).toArray(hub.pos, 0);
  hub.uniforms.uMin.value = 4;
  spin.add(hub.points);

  return {
    group,
    spin,
    sun: U.uSun.value,
    /** s: { alpha, spin, net, finale, dive, time, pr, reduce } */
    update(s) {
      group.visible = s.alpha > 0.002;
      if (!group.visible) return;
      spin.rotation.y = s.spin;
      U.uTime.value = s.time;
      U.uAlpha.value = s.alpha;
      planetMat.depthWrite = s.alpha > 0.5;
      U.uDots.value = 0.7 + 0.3 * s.net;
      atmoU.uAlpha.value = s.alpha * (1 - s.dive * 0.85);
      borderMat.opacity = s.alpha * (0.12 + 0.3 * s.dive + 0.1 * s.net) * (1 - s.finale * 0.5);
      hub.uniforms.uPR.value = s.pr;
      hub.uniforms.uOpacity.value = s.alpha * (0.35 + 0.65 * Math.max(s.finale, s.net * 0.6));
      hub.size[0] = (1 + s.finale * 1.8) * (0.85 + 0.15 * Math.sin(s.time * 2.2));
      hub.geometry.attributes.aSize.needsUpdate = true;
    },
    /** Svjetska pozicija Osijeka (za oznake). */
    osijekWorld(out = new THREE.Vector3()) {
      return out.copy(osijek).multiplyScalar(1.02).applyMatrix4(spin.matrixWorld);
    },
    dispose() {
      planet.geometry.dispose(); planetMat.dispose(); land.dispose();
      atmo.geometry.dispose(); atmo.material.dispose();
      borderGeo.dispose(); borderMat.dispose();
      hub.geometry.dispose(); hub.material.dispose();
    },
  };
}
