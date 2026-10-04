// Upiti kao svjetleće točke: putuju od pretrage do vašeg obrta (ili konkurenta).
import * as THREE from 'three';
import { textTexture } from './materials.js';

const TRAIL = 14;
const W_ROUTES = [['west', 0.4], ['east', 0.24], ['north', 0.2], ['sky', 0.16]];

export class Leads {
  constructor({ routes, max = 36, onArrive = () => {}, pixelRatio = 1 }) {
    this.routes = routes;
    this.max = max;
    this.onArrive = onArrive;
    this.items = Array.from({ length: max }, () => ({ active: false, t: 0, speed: 0, curve: null, len: 1, target: 'W', jitter: new THREE.Vector3() }));
    this.acc = 0;
    this.group = new THREE.Group();
    this.group.name = 'leads';

    const n = max * TRAIL;
    this.pos = new Float32Array(n * 3);
    this.alpha = new Float32Array(n);
    this.size = new Float32Array(n);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aAlpha', new THREE.BufferAttribute(this.alpha, 1).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aSize', new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage));
    g.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 60);
    this.uniforms = {
      uColor: { value: new THREE.Color('#2f4ff5') },
      uCore: { value: new THREE.Color('#e9eeff') },
      uScale: { value: 1150 * pixelRatio },
      uBoost: { value: 1 },
    };
    const m = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending,
      vertexShader: /* glsl */ `
        attribute float aAlpha; attribute float aSize;
        uniform float uScale; uniform float uBoost;
        varying float vA;
        void main(){
          vA = aAlpha;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * uScale * uBoost / max(1.0, -mv.z);
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: /* glsl */ `
        uniform vec3 uColor; uniform vec3 uCore; varying float vA;
        void main(){
          vec2 c = gl_PointCoord - 0.5; float d = length(c);
          if (d > 0.5) discard;
          float halo = smoothstep(0.5, 0.0, d);
          float core = smoothstep(0.2, 0.05, d);
          vec3 col = mix(uColor, uCore, core * 0.85);
          gl_FragColor = vec4(col, (halo * 0.55 + core) * vA);
        }`,
    });
    this.points = new THREE.Points(g, m);
    this.points.frustumCulled = false;
    this.points.renderOrder = 5;
    this.group.add(this.points);

    // prstenovi dolaska
    const ringGeo = new THREE.RingGeometry(0.42, 0.52, 28);
    ringGeo.rotateX(-Math.PI / 2);
    this.rings = Array.from({ length: 8 }, () => {
      const r = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: '#2f4ff5', transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide }));
      r.visible = false;
      r.renderOrder = 4;
      r.userData.life = 0;
      this.group.add(r);
      return r;
    });

    // "+1 upit"
    const tex = textTexture('+1 upit', { w: 256, h: 96, size: 50, bg: '#2f4ff5', fg: '#ffffff', accent: null, align: 'center', radius: 48 });
    this.tags = Array.from({ length: 5 }, () => {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, opacity: 0 }));
      s.scale.set(1.9, 0.71, 1);
      s.visible = false;
      s.renderOrder = 6;
      s.userData.life = 0;
      this.group.add(s);
      return s;
    });
    this._v = new THREE.Vector3();
  }

  pickRoute(capture, rand = Math.random) {
    if (rand() > capture) return ['comp', 'C'];
    let r = rand(), acc = 0;
    for (const [name, w] of W_ROUTES) { acc += w; if (r <= acc) return [name, 'W']; }
    return ['west', 'W'];
  }

  spawn(curve, target) {
    const it = this.items.find((i) => !i.active);
    if (!it) return null;
    it.active = true;
    it.t = 0;
    it.curve = curve;
    it.len = curve.getLength();
    it.speed = 5.2 + Math.random() * 1.6; // jedinica/s
    it.target = target;
    it.jitter.set((Math.random() - 0.5) * 0.35, (Math.random() - 0.5) * 0.18, (Math.random() - 0.5) * 0.35);
    return it;
  }

  spawnFrom(point, endPoint) {
    const mid = point.clone().lerp(endPoint, 0.5);
    mid.y += 2.5 + point.distanceTo(endPoint) * 0.18;
    const c = new THREE.CatmullRomCurve3([point.clone().setY(point.y + 0.3), mid, endPoint.clone()], false, 'centripetal');
    return this.spawn(c, 'W');
  }

  ping(at, tag = true) {
    const r = this.rings.find((x) => x.userData.life <= 0) || this.rings[0];
    r.position.set(at.x, 0.07, at.z);
    r.userData.life = 1;
    r.visible = true;
    if (tag) {
      const s = this.tags.find((x) => x.userData.life <= 0);
      if (s) {
        s.position.set(at.x, at.y + 2.0, at.z);
        s.userData.life = 1;
        s.userData.y0 = at.y + 2.0;
        s.visible = true;
      }
    }
  }

  update(dt, { rate = 1, capture = 0.9, running = true }) {
    if (running && rate > 0) {
      this.acc += dt * rate;
      while (this.acc >= 1) {
        this.acc -= 1;
        const [name, target] = this.pickRoute(capture);
        this.spawn(this.routes[name], target);
      }
    }
    const p = this.pos, a = this.alpha, s = this.size, v = this._v;
    for (let i = 0; i < this.max; i++) {
      const it = this.items[i];
      const base = i * TRAIL;
      if (!it.active) {
        for (let k = 0; k < TRAIL; k++) a[base + k] = 0;
        continue;
      }
      it.t += (it.speed * dt) / it.len;
      if (it.t >= 1) {
        it.active = false;
        const end = it.curve.getPoint(1);
        this.ping(end, it.target === 'W');
        this.onArrive(it.target);
        for (let k = 0; k < TRAIL; k++) a[base + k] = 0;
        continue;
      }
      const fadeIn = Math.min(1, it.t * 12);
      for (let k = 0; k < TRAIL; k++) {
        const tk = Math.max(0, it.t - k * 0.0085);
        it.curve.getPointAt(tk, v);
        const j = (base + k) * 3;
        p[j] = v.x + it.jitter.x * (1 - it.t);
        p[j + 1] = v.y + it.jitter.y;
        p[j + 2] = v.z + it.jitter.z * (1 - it.t);
        const f = 1 - k / TRAIL;
        a[base + k] = fadeIn * (k === 0 ? 1 : f * f * 0.75);
        s[base + k] = k === 0 ? 1.0 : 0.62 * f + 0.1;
      }
    }
    const g = this.points.geometry;
    g.attributes.position.needsUpdate = true;
    g.attributes.aAlpha.needsUpdate = true;
    g.attributes.aSize.needsUpdate = true;

    for (const r of this.rings) {
      if (r.userData.life <= 0) continue;
      r.userData.life -= dt / 1.2;
      const t = 1 - Math.max(0, r.userData.life);
      r.scale.setScalar(0.4 + t * 3.4);
      r.material.opacity = (1 - t) * 0.85;
      if (r.userData.life <= 0) r.visible = false;
    }
    for (const sp of this.tags) {
      if (sp.userData.life <= 0) continue;
      sp.userData.life -= dt / 1.7;
      const t = 1 - Math.max(0, sp.userData.life);
      sp.position.y = sp.userData.y0 + t * 1.3;
      sp.material.opacity = t < 0.15 ? t / 0.15 : Math.max(0, 1 - (t - 0.55) / 0.45);
      if (sp.userData.life <= 0) sp.visible = false;
    }
  }

  clear() {
    this.items.forEach((i) => (i.active = false));
    this.alpha.fill(0);
    this.points.geometry.attributes.aAlpha.needsUpdate = true;
  }

  dispose() {
    this.points.geometry.dispose();
    this.points.material.dispose();
    this.rings.forEach((r) => r.material.dispose());
    this.rings[0]?.geometry.dispose();
    this.tags.forEach((s) => { s.material.map?.dispose(); s.material.dispose(); });
  }
}
