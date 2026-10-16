// Noćno nebo: slabi pojas Mliječne staze + zvijezde, oboje iz jedne Higgsfield slike (tools/sky/build-sky.py).
// Pojas je tekstura niske razlučivosti (samo mekani sjaj i prašina, ~12 kB) na kugli oko kamere; zvijezde su točke
// stalne veličine u pikselima, pa su oštre na svakom zaslonu. Izvan pojasa su rijetke zvijezde polja (bez preuzimanja).
// Nebo prati kameru (beskonačno daleko), crta se prvo i ne piše dubinu: ne dira kadrove ni ostale slojeve.
// Dok se podaci ne učitaju (lijeno, ~27 kB), vide se samo zvijezde polja, pa prvi kadar nikad ne čeka nebo.
import * as THREE from 'three';
import { seeded } from './lib.js';

const R = 900;
// traka slike pokriva 360° dvaput (pola kruga po ponavljanju): pojas je upola uži i dvaput oštriji,
// a ponavljanje (180°) nikad ne stane u isti kadar
const REP = 2;
// galaktički okvir → svijet: jezgra gore desno u uvodu, pojas se diže iza ruba planeta pod ~55°, dalje od naslova
const ORIENT = new THREE.Euler(-0.5975, 1.5535, -0.0235, 'YXZ');

export function createSky({ lite, texUrl, starsUrl }) {
  const group = new THREE.Group();
  group.rotation.copy(ORIENT);
  group.renderOrder = -20;

  /* ── pojas ── */
  const bandU = {
    uTex: { value: null },
    uLat: { value: 0.45 }, // polovica visine trake u radijanima (iz zaglavlja podataka)
    uAmt: { value: 0 },
  };
  // samo traka kugle unutar ±uLat (gradi se kad stignu podaci): sjena se računa jedino na pikselima pojasa,
  // a u/v dolaze iz vrhova (bez trigonometrije po pikselu). SphereGeometry: x = −cos φ·sin θ, z = sin φ·sin θ,
  // pa je dužina zvijezda atan(z, x) = π − φ; v ide 0…1 od donjeg do gornjeg ruba trake.
  const band = new THREE.Mesh(
    new THREE.BufferGeometry(),
    new THREE.ShaderMaterial({
      uniforms: bandU,
      side: THREE.BackSide,
      depthTest: false,
      depthWrite: false,
      transparent: true,
      blending: THREE.AdditiveBlending,
      vertexShader: /* glsl */ `
        varying vec2 vUv;
        void main(){
          vUv = vec2(${REP.toFixed(1)} * (0.5 - uv.x) + 0.5, uv.y); // v: 0…1 preko trake (thetaStart…thetaLength)
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
      fragmentShader: /* glsl */ `
        uniform sampler2D uTex; uniform float uAmt; varying vec2 vUv;
        void main(){
          vec3 c = texture2D(uTex, vUv).rgb * uAmt;
          // dither: sjaj je na granici crne, bez njega se vide stepenice
          c += (fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) / 255.0;
          gl_FragColor = vec4(max(c, 0.0), 1.0);
        }`,
    })
  );
  band.renderOrder = -20;
  band.frustumCulled = false;
  band.visible = false;
  group.add(band);

  /* ── zvijezde: polje (odmah) + pojas (iz podataka) u jednoj geometriji ── */
  const FIELD = lite ? 320 : 640;
  const BAND = lite ? 1100 : 2600;
  const max = FIELD + BAND;
  const pos = new Float32Array(max * 3);
  const mag = new Float32Array(max);
  const tmp = new Float32Array(max);
  const ph = new Float32Array(max);
  const rand = seeded(99);
  for (let i = 0; i < FIELD; i++) {
    const u = rand() * 2 - 1, th = rand() * Math.PI * 2, q = Math.sqrt(1 - u * u);
    pos.set([Math.cos(th) * q * R, u * R, Math.sin(th) * q * R], i * 3);
    mag[i] = 0.05 + rand() * rand() * 0.55;
    tmp[i] = 0.35 + rand() * 0.5;
    ph[i] = rand() * 6.283;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('aMag', new THREE.BufferAttribute(mag, 1));
  g.setAttribute('aTmp', new THREE.BufferAttribute(tmp, 1));
  g.setAttribute('aPh', new THREE.BufferAttribute(ph, 1));
  g.setDrawRange(0, FIELD);
  const starU = { uPR: { value: 1 }, uOpacity: { value: 0 }, uTime: { value: 0 }, uTw: { value: 1 } };
  const stars = new THREE.Points(
    g,
    new THREE.ShaderMaterial({
      uniforms: starU,
      depthTest: false,
      depthWrite: false,
      transparent: true,
      blending: THREE.AdditiveBlending,
      vertexShader: /* glsl */ `
        attribute float aMag; attribute float aTmp; attribute float aPh;
        uniform float uPR; uniform float uTime; uniform float uTw;
        varying float vA; varying vec3 vC; varying float vPx;
        void main(){
          // titranje: sporo i plitko, jače kod slabijih zvijezda; bez pokreta (reduced motion) uTw = 0
          float tw = 1.0 - uTw * (0.22 + 0.2 * (1.0 - aMag)) * (0.5 + 0.5 * sin(uTime * (0.6 + fract(aPh * 3.7) * 1.4) + aPh));
          float px = (0.9 + aMag * aMag * 2.6) * uPR;
          vA = (0.12 + aMag * 0.88) * tw;
          // ispod 1,5 px točka gubi svjetlinu razmjerno površini, ne treperi kao piksel
          if (px < 1.5 * uPR) { vA *= px / (1.5 * uPR); px = 1.5 * uPR; }
          vC = mix(vec3(1.0, 0.86, 0.72), vec3(0.74, 0.82, 1.0), aTmp);
          vPx = px;
          gl_PointSize = px;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
      fragmentShader: /* glsl */ `
        uniform float uOpacity; varying float vA; varying vec3 vC; varying float vPx;
        void main(){
          float d = length(gl_PointCoord - 0.5) * 2.0;
          if (d > 1.0) discard;
          float k = clamp((vPx - 2.0) / 3.0, 0.0, 1.0);
          float prof = mix(1.0 - d * d * 0.6, pow(1.0 - d, 2.2), k);
          gl_FragColor = vec4(mix(vC, vec3(1.0), (1.0 - d) * 0.5) * prof * vA * uOpacity, 1.0);
        }`,
    })
  );
  stars.renderOrder = -19;
  stars.frustumCulled = false;
  group.add(stars);

  /* ── lijeno učitavanje pojasa ── */
  let bandIn = 0; // 0…1 dolazak pojasa (meko, bez skoka)
  let bandReady = false;
  let disposed = false;
  let started = false;
  function load() {
    if (started) return;
    started = true;
    const tex = new Promise((ok, no) => {
      const t = new THREE.TextureLoader().load(texUrl, ok, undefined, no);
      t.colorSpace = THREE.NoColorSpace;
      t.wrapS = THREE.RepeatWrapping;
      t.wrapT = THREE.ClampToEdgeWrapping;
      t.minFilter = THREE.LinearFilter; // šav dužine bez mipmapa; tekstura je na zaslonu uvijek povećana
      t.generateMipmaps = false;
      bandU.uTex.value = t;
    });
    const data = fetch(starsUrl).then((r) => (r.ok ? r.arrayBuffer() : Promise.reject(r.status)));
    Promise.all([tex, data])
      .then(([, buf]) => {
        if (disposed) return;
        const dv = new DataView(buf);
        const lat = (dv.getFloat32(0, true) * Math.PI) / 180 / REP;
        bandU.uLat.value = lat;
        band.geometry.dispose();
        band.geometry = new THREE.SphereGeometry(R, lite ? 48 : 72, 6, 0, Math.PI * 2, Math.PI / 2 - lat, lat * 2);
        const n = Math.min(Math.floor(BAND / REP), Math.floor((buf.byteLength - 4) / 6));
        for (let i = 0; i < n; i++) {
          const o = 4 + i * 6;
          const u = dv.getUint16(o, true) / 65535;
          const la = (dv.getInt16(o + 2, true) / 32767) * lat;
          const c = Math.cos(la);
          for (let k = 0; k < REP; k++) {
            // isto preslikavanje kao u shaderu pojasa (atan(z, x) · REP, asin(y))
            const lon = ((u - 0.5 + k) / REP) * Math.PI * 2;
            const j = FIELD + i * REP + k;
            pos.set([Math.cos(lon) * c * R, Math.sin(la) * R, Math.sin(lon) * c * R], j * 3);
            mag[j] = dv.getUint8(o + 4) / 255;
            tmp[j] = dv.getUint8(o + 5) / 255;
            ph[j] = ((i * REP + k) * 2.399) % 6.283;
          }
        }
        for (const k of ['position', 'aMag', 'aTmp', 'aPh']) g.attributes[k].needsUpdate = true;
        g.setDrawRange(0, FIELD + n * REP);
        bandReady = true;
      })
      .catch(() => {}); // bez podataka ostaje nebo kao prije (zvijezde polja)
  }

  return {
    group,
    load,
    /** opacity: kanal zvijezda iz knjige snimanja; band: koliko se pojas vidi (0…1) */
    update({ camera, opacity, band: bandK, pr, time, dt, reduce }) {
      group.position.copy(camera.position);
      if (bandReady && bandIn < 1) bandIn = reduce ? 1 : Math.min(1, bandIn + dt / 1.2);
      starU.uPR.value = pr;
      starU.uOpacity.value = opacity;
      starU.uTime.value = time;
      starU.uTw.value = reduce ? 0 : 1;
      stars.visible = opacity > 0.002;
      bandU.uAmt.value = opacity * bandK * bandIn * bandIn * (3 - 2 * bandIn);
      band.visible = bandU.uAmt.value > 0.002;
    },
    dispose() {
      disposed = true;
      g.dispose();
      stars.material.dispose();
      band.geometry.dispose();
      band.material.dispose();
      bandU.uTex.value?.dispose();
    },
  };
}
