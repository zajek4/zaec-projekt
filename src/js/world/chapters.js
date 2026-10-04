// Knjiga poglavlja: kamera + stanje svijeta za svako sidro na stranici ([data-cam]).
// pos/target su u svjetskim koordinatama; `m` je mobilna kompozicija.

const DAY = {
  sky: ['#e3ddd1', '#f2ede4'], glow: ['#fff3dc', 0.55], fog: ['#efe9df', 42, 120],
  sun: ['#fff1da', 2.7, [12, 22, 10]], hemi: ['#fff8ec', '#9b8f76', 1.25],
  night: 0, bp: 0, explode: 0, spin: 0, capture: 0.92, rate: 1.15, dimW: 0, dimC: 0.35, flags: 0, exposure: 1,
};

const C = (base, over) => ({ ...base, ...over });

// Mobilna kompozicija: subjekt u gornjem dijelu ekrana, tekst ispod.
function mob(focus, dir, dist, lift, fov = 44) {
  const l = Math.hypot(...dir);
  const p = focus.map((f, i) => +(f + (dir[i] / l) * dist).toFixed(2));
  return { pos: p, target: [focus[0], focus[1] - lift, focus[2]], fov };
}

export const CHAPTERS = {
  hero: C(DAY, {
    cam: { pos: [33, 22, 44], target: [-10, -2, 0.5], fov: 34 },
    m: mob([0, -1, 0], [43, 26, 44], 64, 10.5),
  }),
  problem: C(DAY, {
    sky: ['#bdb9b2', '#d7d1c7'], glow: ['#ffffff', 0], fog: ['#d4cec4', 24, 72],
    sun: ['#e9edf3', 1.15, [-6, 20, 14]], hemi: ['#e1e5ea', '#857d70', 1.05],
    capture: 0.1, rate: 0.95, dimW: 0.9, dimC: 0,
    cam: { pos: [-25, 19, 40], target: [2.7, 0, 2.1], fov: 34 },
    m: mob([-4, 0, -1.5], [-27, 19, 38], 58, 9.5),
  }),
  trades: C(DAY, {
    sun: ['#fff1da', 2.9, [14, 20, 12]],
    cam: { pos: [-16, 12.5, 25], target: [-3.8, 1.2, -1.0], fov: 34 },
    m: mob([0, 1.5, 1.5], [-12, 11.5, 26], 36, 5.5),
    capture: 0.95, rate: 0.9,
  }),
  system: C(DAY, {
    sky: ['#102690', '#1d3ad0'], glow: ['#3a5cff', 0.4], fog: ['#1a36c4', 70, 170],
    sun: ['#ffffff', 1.4, [10, 18, 12]], hemi: ['#c9d6ff', '#203070', 1.0],
    bp: 1, explode: 1, spin: 0.45, capture: 0.95, rate: 0.6, dimC: 0,
    cam: { pos: [3, 6, 65], target: [-6.6, -3.5, 0], fov: 33 },
    m: mob([0, -4, 0], [0.1, 0.1, 1], 84, 11),
  }),
  system2: C(DAY, {
    sky: ['#102690', '#1d3ad0'], glow: ['#3a5cff', 0.4], fog: ['#1a36c4', 70, 170],
    sun: ['#ffffff', 1.4, [10, 18, 12]], hemi: ['#c9d6ff', '#203070', 1.0],
    bp: 1, explode: 1, spin: 1.25, capture: 0.95, rate: 0.6, dimC: 0,
    cam: { pos: [5, 13, 61], target: [-6.6, -4.2, 0], fov: 33 },
    m: mob([0, -4, 0], [0.15, 0.25, 1], 82, 11),
  }),
  night: C(DAY, {
    sky: ['#04060d', '#121a35'], glow: ['#28407e', 0.45], fog: ['#0f162b', 38, 110],
    sun: ['#9db1ff', 0.6, [-10, 18, -6]], hemi: ['#4a5c9a', '#171720', 0.42],
    night: 1, capture: 0.97, rate: 1.4, dimC: 0.2, exposure: 1.05,
    cam: { pos: [-37, 31.5, 25.6], target: [-9.5, 0.5, -6.8], fov: 34 },
    m: mob([0, 0, 0], [-27.5, 31, 32.4], 66, 11),
  }),
  p1: C(DAY, {
    sky: ['#e8d0bd', '#f6e6d6'], glow: ['#ffd2a1', 0.75], fog: ['#f3e2d1', 30, 95],
    sun: ['#ffd3a2', 2.3, [-18, 9, 8]], hemi: ['#ffe8d2', '#8e7a66', 1.15],
    flags: 1, capture: 0.95, rate: 0.7,
    cam: { pos: [-25, 11, 8.2], target: [-11, 1, -4.8], fov: 36 },
    m: mob([-9.2, 1, -2.9], [-14, 10, 13], 30, 4.5),
  }),
  p2: null,
  p3: null,
  p4: null,
  final: C(DAY, {
    sky: ['#e0d7c6', '#f2eadc'], glow: ['#ffe2b8', 0.65], fog: ['#efe6d8', 44, 125],
    sun: ['#ffe7c4', 2.9, [10, 18, 14]], capture: 1, rate: 1.9, dimC: 0.55,
    cam: { pos: [-38, 40, 56], target: [3, 9.5, 0], fov: 34 },
    m: mob([0, 0, 0], [-41, 30, 56], 72, 12),
  }),
};

const P = CHAPTERS.p1;
CHAPTERS.p2 = C(P, {
  cam: { pos: [-19.7, 10, 14], target: [-7.7, 1, 0], fov: 36 },
  m: mob([-5.7, 1, 1.6], [-12, 9, 14], 30, 4.5),
});
CHAPTERS.p3 = C(P, {
  sun: ['#ffdcb0', 2.5, [-14, 12, 10]],
  cam: { pos: [-10.8, 10, 20.2], target: [-4.8, 1, 3.2], fov: 36 },
  m: mob([-2.3, 1, 4.1], [-6, 9, 17], 30, 4.5),
});
CHAPTERS.p4 = C(P, {
  sun: ['#ffe2bd', 2.7, [-8, 15, 12]],
  capture: 1, rate: 1.4,
  cam: { pos: [5.7, 10.5, 20.6], target: [-2.3, 1.5, 4.6], fov: 36 },
  m: mob([0.8, 1.5, 3.0], [8, 9, 16], 30, 4.5),
});

export const DEFAULT_CHAPTER = 'hero';
