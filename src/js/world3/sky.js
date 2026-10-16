// Noćno nebo: pojas Mliječne staze iz Higgsfield slike + prave zvijezde (Yale Bright Star Catalogue), tools/sky/build-sky.py.
// Pojas je tekstura niske razlučivosti (samo mekani sjaj i prašina, ~20 kB) na traci kugle oko kamere; zvijezde su
// točke stalne veličine u pikselima, pa su oštre na svakom zaslonu. Prave zvijezde stoje u galaktičkim koordinatama,
// pa su zviježđa (Orion, Škorpion, Veliki medvjed …) prava, a pojas leži na galaktičkom ekvatoru.
// Nebo prati kameru (beskonačno daleko), crta se prvo i ne piše dubinu: ne dira kadrove ni ostale slojeve.
// Dok se podaci ne učitaju (lijeno, ~45 kB), vidi se samo slabo polje zvijezda, pa prvi kadar nikad ne čeka nebo.
import * as THREE from 'three';
import { seeded } from './lib.js';

const R = 900;
// traka slike pokriva 360° dvaput (pola kruga po ponavljanju): pojas je upola uži i dvaput oštriji,
// a ponavljanje (180°) nikad ne stane u isti kadar
const REP = 2;
// galaktički okvir → svijet. Svemir: jezgra gore desno u uvodu, pojas se diže iza ruba planeta pod ~55°, dalje od
// naslova. Grad: pojas se pruža nebom iznad konkatedrale (jezgra lijevo izvan kadra). Nebo se okreće dok je potpuno
// ugašeno (karta Europe … Slavonija, 1 < Z < 1,5), pa se okret nikad ne vidi.
const ORIENT = new THREE.Quaternion().setFromEuler(new THREE.Euler(-0.5975, 1.5535, -0.0235, 'YXZ'));
const ORIENT_CITY = new THREE.Quaternion().setFromEuler(new THREE.Euler(0.3112, 2.6347, 0.4225, 'YXZ'));

export function createSky({ lite, texUrl, starsUrl }) {
  const group = new THREE.Group();
  group.quaternion.copy(ORIENT);
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

  /* ── zvijezde u jednoj geometriji: slabo polje (odmah, nasumično) + prave zvijezde iz kataloga (zviježđa)
     + zvijezde pojasa iz slike; prave i pojas stižu s podacima ── */
  const FIELD = lite ? 200 : 400;
  const REAL = 2847; // sve do 5,5 magnitude i na mobitelu: točke su jeftine, a nebo nad gradom bez njih je prazno
  const BAND = lite ? 1600 : 2800;
  const max = FIELD + REAL + BAND;
  const pos = new Float32Array(max * 3);
  const mag = new Float32Array(max);
  const tmp = new Float32Array(max);
  const ph = new Float32Array(max);
  const rand = seeded(99);
  for (let i = 0; i < FIELD; i++) {
    const u = rand() * 2 - 1, th = rand() * Math.PI * 2, q = Math.sqrt(1 - u * u);
    pos.set([Math.cos(th) * q * R, u * R, Math.sin(th) * q * R], i * 3);
    mag[i] = 0.04 + rand() * rand() * 0.3;
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
          float px = (1.0 + aMag * aMag * 3.2) * uPR;
          vA = (0.3 + aMag * 0.7) * tw;
          // ispod 1,5 px točka gubi svjetlinu razmjerno površini, ne treperi kao piksel
          if (px < 1.5 * uPR) { vA *= px / (1.5 * uPR); px = 1.5 * uPR; }
          vC = mix(vec3(1.0, 0.76, 0.52), vec3(0.62, 0.74, 1.0), aTmp);
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

  /* ── lijeno učitavanje pojasa i zvijezda ── */
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
        const nReal = dv.getUint32(4, true);
        const put = (j, lon, la, o) => {
          const c = Math.cos(la);
          pos.set([Math.cos(lon) * c * R, Math.sin(la) * R, Math.sin(lon) * c * R], j * 3);
          mag[j] = dv.getUint8(o + 4) / 255;
          tmp[j] = dv.getUint8(o + 5) / 255;
          ph[j] = (j * 2.399) % 6.283;
        };
        let j = FIELD;
        // prave zvijezde: galaktička dužina u okviru neba (x prema središtu Galaktike), širina ±90°
        for (let i = 0; i < Math.min(REAL, nReal); i++) {
          const o = 8 + i * 6;
          put(j++, (dv.getUint16(o, true) / 65535) * Math.PI * 2, (dv.getInt16(o + 2, true) / 32767) * Math.PI / 2, o);
        }
        const o0 = 8 + nReal * 6;
        const n = Math.min(Math.floor(BAND / REP), Math.floor((buf.byteLength - o0) / 6));
        for (let i = 0; i < n; i++) {
          const o = o0 + i * 6;
          const u = dv.getUint16(o, true) / 65535;
          const la = (dv.getInt16(o + 2, true) / 32767) * lat;
          // isto preslikavanje kao u shaderu pojasa (atan(z, x) · REP, asin(y))
          for (let k = 0; k < REP; k++) put(j++, ((u - 0.5 + k) / REP) * Math.PI * 2, la, o);
        }
        for (const k of ['position', 'aMag', 'aTmp', 'aPh']) g.attributes[k].needsUpdate = true;
        g.setDrawRange(0, j);
        bandReady = true;
      })
      .catch(() => {}); // bez podataka ostaje samo slabo polje zvijezda
  }

  return {
    group,
    load,
    /** opacity: kanal zvijezda iz knjige snimanja; band: koliko se pojas vidi (0…1); city: nebo nad gradom */
    update({ camera, opacity, band: bandK, city, pr, time, dt, reduce }) {
      group.position.copy(camera.position);
      group.quaternion.copy(city ? ORIENT_CITY : ORIENT);
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
