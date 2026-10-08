// Scena 01 — planet iz niske orbite: kopno iz stvarne maske (2048×1024), digitalna matrica točaka,
// sunce iza gornjeg desnog ruba. Površina dijeli materijalni jezik s kartom (lib.js, EARTH_GLSL):
// ocean dublji daleko od obale i plići na šelfu, kopno slojevito (obala, unutrašnjost, visoke širine),
// odsjaj sunca na moru s Fresnelom, sumrak u dva tona. Atmosfera je jednostruko raspršenje (Rayleigh + Mie)
// kroz ljusku, pa su plavi rub, toplina uz terminator i prijelaz u svemir posljedica svjetla, a ne maske.
// Bez oblaka: čista silueta.
// Mreža komunikacija je zaseban modul (network.js) u istom koordinatnom sustavu (jedinična sfera).
import * as THREE from 'three';
import { ll2v, OSIJEK, DEG, glowPoints, lineMat, createEarthField, EARTH_GLSL, CIVIC } from './lib.js';

const ATMO_R = 1.032;

export function createGlobe({ geo, lite, landUrl, lightsUrl }) {
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
  const field = createEarthField();
  const land = new THREE.TextureLoader().load(landUrl, (t) => field.fill(t.image));
  land.colorSpace = THREE.NoColorSpace;
  land.format = THREE.RedFormat; // maska kopna: jedan kanal (¼ memorije i prijenosa na GPU)
  land.minFilter = THREE.LinearFilter; // bez mipmapa → nema šava na antimeridijanu
  land.generateMipmaps = false;
  land.wrapS = THREE.RepeatWrapping;
  // noćna svjetla (NASA/NOAA, tools/build-lights.py): oštra tekstura za točke + zamućeni sjaj u polju
  const lights = new THREE.TextureLoader().load(lightsUrl, (t) => field.fillLights(t.image));
  lights.colorSpace = THREE.NoColorSpace;
  lights.format = THREE.RedFormat;
  lights.minFilter = THREE.LinearFilter;
  lights.generateMipmaps = false;
  lights.wrapS = THREE.RepeatWrapping;
  const U = {
    uLand: { value: land },
    uField: { value: field.texture },
    uLights: { value: lights },
    uCivic: CIVIC,
    uSun: { value: new THREE.Vector3(0.78, 0.46, -0.95).normalize() },
    uTime: { value: 0 },
    uAlpha: { value: 1 },
    uDots: { value: 1 },
    uNight: { value: 1 },
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
      uniform sampler2D uLand; uniform vec3 uSun; uniform float uTime; uniform float uAlpha; uniform float uDots; uniform float uNight;
      varying vec3 vObj; varying vec3 vN; varying vec3 vW;
      ${EARTH_GLSL}
      void main(){
        vec3 o = normalize(vObj);
        float lat = asin(clamp(o.y, -1.0, 1.0));
        float lon = atan(o.x, o.z);
        vec2 uv = vec2((lon + 3.14159265) / 6.2831853, (lat + 1.5707963) / 3.14159265);
        float land = smoothstep(0.25, 0.75, texture2D(uLand, uv).r);
        vec4 F = texture2D(uField, uv);
        // digitalna matrica točaka na kopnu (razmak ~0,36°, ispravljen za širinu)
        vec2 g = vec2(lon * cos(lat), lat) / (0.36 * 0.0174533);
        vec2 f = fract(g) - 0.5;
        float aa = fwidth(length(f)) * 1.5;
        float dots = (1.0 - smoothstep(0.17 - aa, 0.17 + aa, length(f))) * land;
        vec3 n = normalize(vN);
        vec3 v = normalize(cameraPosition - vW);
        float mu = max(dot(n, v), 0.0);
        float ndl = dot(n, uSun);
        float day = smoothstep(-0.12, 0.38, ndl);
        vec3 landC = landTone(F, lat, lon) + dots * uDots * vec3(0.10, 0.2, 0.42);
        vec3 col = mix(oceanTone(F, mu), landC, land);
        col *= 0.2 + 1.35 * day;
        col += twilightTone(ndl, 0.03, 0.075) * (0.3 + 0.7 * land) * 0.42;
        // odsjaj sunca na moru: uska jezgra i široki mekani trag, jači pod kosim kutom (Fresnel)
        vec3 h = normalize(uSun + v);
        float nh = max(dot(n, h), 0.0);
        float fr = 0.02 + 0.98 * pow(1.0 - mu, 5.0);
        float glint = (pow(nh, 110.0) * 0.8 + pow(nh, 16.0) * 0.07) * (0.35 + 2.6 * fr);
        col += vec3(0.62, 0.72, 0.9) * glint * (1.0 - land) * smoothstep(-0.02, 0.22, ndl) * 0.62;
        // noćna strana: tiha matrica i svjetla naselja prema stvarnoj snimci; približavanjem Europi
        // gustoća naselja nazire se i danju (uCivic), kao tihi topli sloj u matrici
        float night = 1.0 - smoothstep(-0.06, 0.2, ndl);
        col += dots * uDots * vec3(0.08, 0.16, 0.38) * (1.0 - day) * 0.45;
        vec2 gc = floor(g) + 0.5;
        float latc = gc.y * 0.0062832;
        vec2 uvc = vec2((gc.x * 0.0062832 / max(cos(latc), 0.05) + 3.14159265) / 6.2831853, (latc + 1.5707963) / 3.14159265);
        vec4 cl = cityLights(uvc, eHash(floor(g)), dots, F, 1.0);
        float civ = uCivic * (1.0 - night);
        // danju je naselje jantarna točka u plavoj matrici (podatkovni sloj), noću stvarno svjetlo
        col = mix(col, civicTone(day), clamp(cl.a * civ, 0.0, 1.0));
        col += cl.rgb * night * uNight;
        col += hazeTone(mu, ndl);
        gl_FragColor = vec4(col, uAlpha);
      }`,
  });
  const planet = new THREE.Mesh(new THREE.SphereGeometry(1, lite ? 96 : 160, lite ? 64 : 112), planetMat);
  planet.renderOrder = 0;
  spin.add(planet);

  /* ── atmosfera: jednostruko raspršenje (Rayleigh + Mie) kroz tanku ljusku ──
     Zraka iz kamere siječe ljusku i (ako je pogodi) planet; duž nje se zbraja svjetlo sunca raspršeno
     prema kameri, oslabljeno optičkom dubinom prema suncu i prema kameri, uz sjenu planeta. Plavi rub,
     topliji ton uz terminator i mekani prijelaz u svemir proizlaze iz fizike, ne iz ručne maske.
     Debljina i visine skale su uvećane (~4×) da se rub čita na zaslonu; omjeri ostaju Zemljini. */
  const atmoU = { uSun: U.uSun, uAlpha: { value: 1 } };
  const atmo = new THREE.Mesh(
    new THREE.SphereGeometry(ATMO_R, lite ? 72 : 112, lite ? 48 : 72),
    new THREE.ShaderMaterial({
      uniforms: atmoU,
      side: THREE.FrontSide,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexShader: /* glsl */ `
        varying vec3 vW; varying vec3 vC; varying float vR;
        void main(){
          vec4 w = modelMatrix * vec4(position, 1.0);
          vW = w.xyz;
          vC = modelMatrix[3].xyz;
          vR = length(modelMatrix[0].xyz);
          gl_Position = projectionMatrix * viewMatrix * w;
        }`,
      fragmentShader: /* glsl */ `
        uniform vec3 uSun; uniform float uAlpha;
        varying vec3 vW; varying vec3 vC; varying float vR;
        #define NV ${lite ? 7 : 10}
        const float RA = ${ATMO_R.toFixed(3)};
        const float HR = 0.0072;
        const float HM = 0.0024;
        const vec3 BR = vec3(2.1, 4.9, 11.6);
        const float BM = 2.2;
        vec2 rsi(vec3 ro, vec3 rd, float r){
          float b = dot(ro, rd), c = dot(ro, ro) - r * r, d = b * b - c;
          if (d < 0.0) return vec2(1e5, -1e5);
          d = sqrt(d);
          return vec2(-b - d, -b + d);
        }
        // optička dubina prema suncu bez unutarnje petlje: Chapmanova funkcija (aproksimacija Schüler 2012)
        float chU(float X, float c){ float k = sqrt(1.5707963 * X); return k / ((k - 1.0) * c + 1.0); }
        float lightOD(float r, float c, float H){
          if (c >= 0.0) return H * exp(-(r - 1.0) / H) * chU(r / H, c);
          float rt = r * sqrt(max(1.0 - c * c, 0.0)); // najniža točka zrake prema suncu
          return H * (2.0 * sqrt(1.5707963 * rt / H) * exp(-max(rt - 1.0, -0.02) / H) - exp(-(r - 1.0) / H) * chU(r / H, -c));
        }
        void main(){
          vec3 ro = (cameraPosition - vC) / vR;
          vec3 rd = normalize(vW - cameraPosition);
          vec2 ta = rsi(ro, rd, RA);
          float t0 = max(ta.x, 0.0), t1 = ta.y;
          vec2 tp = rsi(ro, rd, 1.0);
          bool hit = tp.x < tp.y && tp.x > 0.0;
          if (hit) t1 = min(t1, tp.x);
          if (t1 <= t0) discard;
          // nad diskom je put kroz atmosferu kratak i jednoličan: dovoljno je manje uzoraka
          float inc = hit ? max(-dot(normalize(ro + rd * tp.x), rd), 0.0) : 0.0;
          int n = hit ? int(mix(float(NV), 4.0, smoothstep(0.12, 0.5, inc))) : NV;
          float ds = (t1 - t0) / float(n);
          vec3 sumR = vec3(0.0); vec3 sumM = vec3(0.0);
          float odR = 0.0, odM = 0.0;
          for (int i = 0; i < NV; i++){
            if (i >= n) break;
            vec3 p = ro + rd * (t0 + ds * (float(i) + 0.5));
            float r = length(p);
            float dR = exp(-(r - 1.0) / HR) * ds, dM = exp(-(r - 1.0) / HM) * ds;
            odR += dR; odM += dM;
            // sjena planeta: mekani rub (polusjena) umjesto tvrdog praga
            float along = dot(p, uSun);
            float lit = along > 0.0 ? 1.0 : smoothstep(0.985, 1.012, length(p - uSun * along));
            if (lit <= 0.0) continue;
            float cz = along / r;
            // ekstinkcija je ublažena (×0,55): pri tangencijalnom pogledu rub ostaje plavobijel, a ne maslinast
            vec3 tau = (BR * (odR + lightOD(r, cz, HR)) + BM * 1.1 * (odM + lightOD(r, cz, HM))) * 0.55;
            vec3 att = exp(-tau) * lit;
            sumR += dR * att; sumM += dM * att;
          }
          float c = dot(rd, uSun);
          float pR = 0.0597 * (1.0 + c * c);
          const float g = 0.78;
          float pM = 0.1194 * ((1.0 - g * g) * (1.0 + c * c)) / ((2.0 + g * g) * pow(1.0 + g * g - 2.0 * g * c, 1.5));
          vec3 L = 15.0 * (sumR * BR * pR + sumM * BM * pM);
          // nad diskom planeta raspršenje ostaje suzdržano (tamna kugla, čitljiva matrica);
          // prema rubu diska raste do pune vrijednosti pa između diska i ruba nema stepenice
          if (hit) L *= mix(0.45, 1.0, exp(-inc * 9.0));
          // tihi noćni sjaj gornje atmosfere: rub se nazire i na tamnoj strani
          float hmin = length(ro + rd * max(-dot(ro, rd), 0.0)) - 1.0;
          L += vec3(0.035, 0.07, 0.2) * exp(-pow((hmin - 0.012) / 0.007, 2.0)) * (hit ? 0.0 : 1.0);
          L = 1.0 - exp(-L * 1.15);
          gl_FragColor = vec4(L, uAlpha);
        }`,
    }),
  );
  atmo.renderOrder = 1;
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
    land,
    lights,
    field: field.texture,
    /** s: { alpha, spin, net, finale, dive, time, pr, reduce } */
    update(s) {
      group.visible = s.alpha > 0.002;
      if (!group.visible) return;
      spin.rotation.y = s.spin;
      U.uTime.value = s.time;
      U.uAlpha.value = s.alpha;
      U.uNight.value = 1 - s.dive;
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
      planet.geometry.dispose(); planetMat.dispose(); land.dispose(); lights.dispose(); field.texture.dispose();
      atmo.geometry.dispose(); atmo.material.dispose();
      borderGeo.dispose(); borderMat.dispose();
      hub.geometry.dispose(); hub.material.dispose();
    },
  };
}
