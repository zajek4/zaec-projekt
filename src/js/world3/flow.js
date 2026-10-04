// Scena 05 — put posjetitelja: kanali → stranica (5 "vrata") → ishodi.
// Ilustrativni model: svaka vrata propuštaju dio posjetitelja; loša/dobra izvedba mijenja omjer.
import * as THREE from 'three';
import { glowPoints, lineMat, seeded } from './lib.js';
import { toWorld, ZONES } from './wire.js';
import { GATES, conversion } from './gates.js';

export const CHANNELS = ['Google pretraga', 'Preporuka', 'Društvene mreže', 'Oglasi', 'AI pretraga'];
export const OUTCOMES = ['Poziv', 'Upit', 'Rezervacija', 'Kupnja'];
export { GATES, conversion };

const CH_X = -13.2;
const OUT_X = 13.8;
const chY = (i) => 8.3 - i * 1.65;
const outY = (i) => 7.1 - i * 1.65;

/** Catmull–Rom bez alokacija. */
function cr(p0, p1, p2, p3, t, out) {
  const t2 = t * t, t3 = t2 * t;
  out.x = 0.5 * (2 * p1.x + (-p0.x + p2.x) * t + (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * t2 + (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * t3);
  out.y = 0.5 * (2 * p1.y + (-p0.y + p2.y) * t + (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * t2 + (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * t3);
  out.z = 0.5 * (2 * p1.z + (-p0.z + p2.z) * t + (2 * p0.z - 5 * p1.z + 4 * p2.z - p3.z) * t2 + (-p0.z + 3 * p1.z - 3 * p2.z + p3.z) * t3);
  return out;
}

export function createFlow({ lite }) {
  const rand = seeded(2024);
  const group = new THREE.Group();
  group.name = 'tok';
  const N = lite ? 90 : 170;
  const TRAIL = 3;

  const channels = CHANNELS.map((_, i) => new THREE.Vector3(CH_X, chY(i), 0));
  const outcomes = OUTCOMES.map((_, i) => new THREE.Vector3(OUT_X, outY(i), 0));
  const zone = (k) => toWorld(ZONES[k][0], ZONES[k][1], 0.15);
  const gatePos = GATES.map((g) => zone(g.zone));
  const exit = new THREE.Vector3(8.2, 2.2, 0.15);

  /* ── vodilice (ovise o rasporedu: vodoravno za širok ekran, okomito za mobitel) ── */
  const tmp = new THREE.Vector3();
  const guideMat = lineMat('#3d5ccc', 0.25, true);
  const guideLines = new THREE.LineSegments(new THREE.BufferGeometry(), guideMat);
  group.add(guideLines);
  let portrait = false;
  function buildGuides() {
    const guide = [];
    const curveSeg = (a, b, c, d, n = 24) => {
      let prev = b.clone();
      for (let k = 1; k <= n; k++) {
        cr(a, b, c, d, k / n, tmp);
        guide.push(prev.x, prev.y, prev.z, tmp.x, tmp.y, tmp.z);
        prev = tmp.clone();
      }
    };
    const out = portrait ? new THREE.Vector3(0, 3, 0) : new THREE.Vector3(-3, 0, 0);
    const back = portrait ? new THREE.Vector3(0, -3, 0) : new THREE.Vector3(3, 0, 0);
    channels.forEach((c) => curveSeg(c.clone().add(out), c, gatePos[0], gatePos[1]));
    outcomes.forEach((o) => curveSeg(gatePos[4], exit, o, o.clone().add(back)));
    guideLines.geometry.dispose();
    guideLines.geometry = new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(guide, 3));
  }

  /* ── prstenovi vrata ── */
  const ringGeo = new THREE.BufferGeometry();
  const ringPts = [];
  for (let i = 0; i < 40; i++) {
    const a0 = (i / 40) * Math.PI * 2, a1 = ((i + 1) / 40) * Math.PI * 2;
    ringPts.push(Math.cos(a0), Math.sin(a0), 0, Math.cos(a1), Math.sin(a1), 0);
  }
  ringGeo.setAttribute('position', new THREE.Float32BufferAttribute(ringPts, 3));
  const rings = gatePos.map((p) => {
    const m = new THREE.LineBasicMaterial({ color: '#7f9fff', transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending });
    const r = new THREE.LineSegments(ringGeo, m);
    r.position.copy(p);
    r.scale.setScalar(0.42);
    group.add(r);
    return { r, m, hit: 0 };
  });
  const cGood = new THREE.Color('#7f9fff');
  const cBad = new THREE.Color('#ff6f5e');

  /* ── čvorovi ── */
  const nodes = glowPoints({ count: channels.length + outcomes.length, color: '#4f7bff', core: '#ffffff', size: 1.5 });
  [...channels, ...outcomes].forEach((p, i) => {
    p.toArray(nodes.pos, i * 3);
    nodes.size[i] = i < channels.length ? 1 : 1.2;
  });
  group.add(nodes.points);
  const outPulse = new Float32Array(outcomes.length);

  function layout(p) {
    portrait = p;
    channels.forEach((c, i) => (p ? c.set(-4.6 + i * 2.5, 12.4, 0) : c.set(CH_X, chY(i), 0)));
    outcomes.forEach((o, i) => (p ? o.set(-3.5 + i * 2.6, -2.4, 0) : o.set(OUT_X, outY(i), 0)));
    if (p) exit.set(0.4, -0.4, 0.15);
    else exit.set(8.2, 2.2, 0.15);
    [...channels, ...outcomes].forEach((v, i) => v.toArray(nodes.pos, i * 3));
    nodes.geometry.attributes.position.needsUpdate = true;
    buildGuides();
  }
  layout(false);

  /* ── posjetitelji ── */
  const live = glowPoints({ count: N * TRAIL, color: '#8fb0ff', core: '#ffffff', size: 0.85 });
  const lost = glowPoints({ count: N * TRAIL, color: '#ff6a55', core: '#ffd2c8', size: 0.75 });
  const won = glowPoints({ count: N, color: '#ffb23f', core: '#fff3d6', size: 1.6 });
  group.add(live.points, lost.points, won.points);

  const P = [];
  for (let i = 0; i < N; i++) {
    const wp = Array.from({ length: 8 }, () => new THREE.Vector3());
    P.push({ wp, s: 0, speed: 1, state: 0, wait: rand() * 7, vel: new THREE.Vector3(), pos: new THREE.Vector3(), hist: [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()], life: 0, out: 0 });
  }
  function spawn(p) {
    const c = (rand() * channels.length) | 0;
    p.out = (rand() * outcomes.length) | 0;
    p.wp[0].copy(channels[c]);
    GATES.forEach((g, k) => {
      p.wp[k + 1].copy(gatePos[k]).add(tmp.set((rand() - 0.5) * 2 * g.jx, (rand() - 0.5) * 2 * g.jy, (rand() - 0.5) * 0.4));
    });
    p.wp[6].copy(exit).add(tmp.set(0, (rand() - 0.5) * 1.4, 0));
    p.wp[7].copy(outcomes[p.out]);
    p.s = 0;
    p.speed = 0.75 + rand() * 0.5;
    p.state = 1;
    p.pos.copy(p.wp[0]);
    p.hist.forEach((h) => h.copy(p.pos));
  }
  const at = (p, s, out) => {
    const i = Math.min(6, Math.floor(s));
    const t = s - i;
    const w = p.wp;
    return cr(w[Math.max(0, i - 1)], w[i], w[i + 1], w[Math.min(7, i + 2)], t, out);
  };

  let states = [false, false, false, false, false];
  let emitted = 0, converted = 0;

  /** jedan korak simulacije svih posjetitelja + zapis u buffere */
  function simulate(dt) {
    for (let i = 0; i < N; i++) {
      const p = P[i];
      if (p.state === 0) {
        p.wait -= dt;
        if (p.wait <= 0) { spawn(p); emitted++; }
      } else if (p.state === 1) {
        const before = Math.floor(p.s);
        p.s += dt * p.speed * (p.s < 1 ? 0.7 : 1);
        const after = Math.floor(p.s);
        if (after !== before && after >= 1 && after <= 5) {
          const g = after - 1;
          const rate = states[g] ? GATES[g].good : GATES[g].bad;
          if (rand() > rate) {
            p.state = 2;
            p.life = 0;
            at(p, p.s, p.pos);
            p.vel.set((rand() - 0.5) * 2.4 + (p.pos.x > 0.4 ? 1.2 : -1.2), 0.6 + rand() * 0.8, 1 + rand() * 2.5);
            rings[g].hit = 1;
          }
        }
        if (p.state === 1) {
          if (p.s >= 7) {
            p.state = 3;
            p.life = 0;
            p.pos.copy(p.wp[7]);
            outPulse[p.out] = 1;
            converted++;
          } else at(p, p.s, p.pos);
        }
      } else if (p.state === 2) {
        p.life += dt;
        p.vel.y -= dt * 3.2;
        p.pos.addScaledVector(p.vel, dt);
        if (p.life > 1.5) { p.state = 0; p.wait = 0.2 + rand() * 1.5; }
      } else if (p.state === 3) {
        p.life += dt;
        if (p.life > 0.6) { p.state = 0; p.wait = 0.2 + rand() * 1.2; }
      }
      // trag
      if (dt > 0) {
        p.hist[2].copy(p.hist[1]);
        p.hist[1].copy(p.hist[0]);
        p.hist[0].copy(p.pos);
      }
      for (let k = 0; k < TRAIL; k++) {
        const j = i * TRAIL + k;
        const h = p.hist[k];
        const fade = 1 - k * 0.32;
        const onLive = p.state === 1;
        const onLost = p.state === 2;
        (onLive ? live : lost).pos.set([h.x, h.y, h.z], j * 3);
        live.alpha[j] = onLive ? fade * Math.min(1, p.s * 3) : 0;
        lost.alpha[j] = onLost ? fade * Math.max(0, 1 - p.life / 1.5) * 0.85 : 0;
        live.size[j] = lost.size[j] = 1 - k * 0.25;
      }
      won.alpha[i] = p.state === 3 ? Math.max(0, 1 - p.life / 0.6) : 0;
      won.size[i] = p.state === 3 ? 1 + p.life * 3 : 1;
      if (p.state === 3) p.pos.toArray(won.pos, i * 3);
    }
    [live, lost, won].forEach((g) => {
      g.geometry.attributes.position.needsUpdate = true;
      g.geometry.attributes.aAlpha.needsUpdate = true;
      g.geometry.attributes.aSize.needsUpdate = true;
    });

  }
  let warm = false;

  return {
    group,
    channelWorld: (i) => channels[i],
    outcomeWorld: (i) => outcomes[i],
    gateWorld: (i) => gatePos[i],
    setStates(next) { states = next.slice(); },
    setLayout(p) { if (p !== portrait) layout(p); },
    stats: () => ({ emitted, converted }),
    /** s: { alpha, time, dt, pr, reduce, focusGate } */
    update(s) {
      group.visible = s.alpha > 0.002;
      if (!group.visible) return;
      const dt = s.reduce ? 0 : Math.min(s.dt, 1 / 20);
      // prvi prikaz: posjetitelji su već raspoređeni po putu (i uz smanjeno kretanje)
      if (!warm) { warm = true; for (let k = 0; k < 180; k++) simulate(1 / 30); emitted = converted = 0; }
      guideMat.opacity = 0.22 * s.alpha;
      [nodes, live, lost, won].forEach((g) => { g.uniforms.uPR.value = s.pr; g.uniforms.uOpacity.value = s.alpha; });

      simulate(dt);

      // prstenovi i čvorovi
      rings.forEach((r, k) => {
        r.hit = Math.max(0, r.hit - dt * 2.5);
        r.m.color.copy(states[k] ? cGood : cBad);
        const focus = s.focusGate === k ? 1 : 0;
        r.m.opacity = s.alpha * (0.35 + r.hit * 0.6 + focus * 0.5);
        r.r.scale.setScalar(0.42 + r.hit * 0.25 + focus * 0.18 + Math.sin(s.time * 2 + k) * 0.02);
      });
      for (let k = 0; k < outcomes.length; k++) {
        outPulse[k] = Math.max(0, outPulse[k] - dt * 2);
        nodes.size[channels.length + k] = 1.2 + outPulse[k] * 1.4;
      }
      for (let k = 0; k < channels.length; k++) nodes.size[k] = 0.9 + Math.sin(s.time * 1.7 + k * 1.3) * 0.15;
      nodes.geometry.attributes.aSize.needsUpdate = true;
    },
    dispose() {
      group.traverse((o) => {
        o.geometry?.dispose();
        (Array.isArray(o.material) ? o.material : o.material ? [o.material] : []).forEach((m) => m.dispose());
      });
    },
  };
}
