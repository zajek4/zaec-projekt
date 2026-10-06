// Knjiga snimanja: svaka ključna slika odgovara jednom [data-cam] sidru u DOM-u.
// Kamera: meta (tx,ty,tz) u svjetskim jedinicama pri zoomu Z, sferni odmak (az, el u °, dist), nagib (roll, °),
// leća sx/sy = pomak sadržaja kao udio ekrana (+sx desno, +sy gore).
// fit = širina motiva (svjetske jedinice) koja mora stati u kadar — kamera se sama odmiče na uskim ekranima.
// Kanali priče: trace (pero obrisa Hrvatske 0…1), hl (sjaj obrisa), dusk (sumrak 0 dan … 1 noć),
// focus (konkatedrala kao glavni motiv), beam (snop s vrha tornja), scan (zgrada → nacrt, odozgo prema dolje).
// Između ključnih slika engine interpolira glatkom krivuljom (index.js), pa se kamera ne zaustavlja na sidrima.
import { Z_CITY } from './lib.js';

export const DEF = {
  Z: 0, tx: 0, ty: 0, tz: 0, az: 0, el: 20, dist: 30, fov: 34, roll: 0, sx: 0, sy: 0, fit: 0,
  idle: 0, net: 0, conv: 0, finale: 0,
  trace: 0, hl: 0, dusk: 0,
  focus: 0, beam: 0, scan: 0,
  rise: 0, cath: 0, glow: 0, dim: 0, lines: 0.4, cathSolid: 1,
  morph: 0, wire: 0,
  flow: 0, layers: 0, layersA: 0, assemble: 0,
  labOsijek: 0, labCities: 0, labTowns: 0, labCity: 0, labFlow: 0, labLayers: 0, labFinale: 0,
  stars: 1,
};
export const KEYS = Object.keys(DEF);

const ZC = Z_CITY;
const city = { Z: ZC, rise: 1, cath: 1, stars: 0.35, trace: 1, dusk: 1 };
const web = { ...city, dim: 0.95, lines: 0, cathSolid: 0, wire: 1, morph: 2, glow: 0, scan: 1 };

/** Desktop kompozicije + uspravne izmjene (m) + dodatne izmjene za uspravni tablet (t, širina ≥ 600 px). */
export const FRAMES = {
  // niska orbita: rub planeta ulazi odozdo/zdesna, sunce gore desno, crni prostor iznad teksta
  hero: { Z: 0, tx: 0, ty: 0, tz: -2, az: 4, el: 9, dist: 8.6, fov: 44, roll: -19, sx: 0.2, sy: -0.09, idle: 1, net: 0.85, m: { dist: 13, fov: 50, roll: -8, sx: 0, sy: 0.05 } },
  world: { Z: 0.12, tx: 0, ty: -1.4, tz: -1.5, az: 8, el: 30, dist: 21, fov: 38, roll: -6, sx: -0.2, net: 1, conv: 0.18, labOsijek: 1, fit: 20, m: { dist: 30, sx: 0, sy: 0.2, roll: 0 } },
  // pero obrisa kreće iz Osijeka već na europskom kadru (iskra), a krug se zatvara na hrvatskom
  europe: { Z: 0.94, tx: -6.5, ty: 0, tz: -1, az: 0, el: 62, dist: 50, sx: 0.17, net: 0.7, conv: 0.4, trace: 0.035, hl: 0.35, fit: 36, m: { dist: 76, sx: 0, sy: 0.18 } },
  croatia: { Z: 1, tx: -6, ty: 0.5, tz: 4.2, az: -10, el: 52, dist: 31, sx: 0.16, net: 0.5, conv: 0.6, trace: 1, hl: 1, dusk: 0.42, labCities: 1, fit: 19, m: { dist: 44, sx: 0, sy: 0.16 } },
  slavonia: { Z: 1.55, tx: 4.2, ty: 0, tz: 9.5, az: 10, el: 56, dist: 92, sx: -0.16, trace: 1, hl: 0.22, dusk: 1, labTowns: 1, stars: 0.6, fit: 100, m: { sx: 0, sy: 0.16 } },
  osijek: { ...city, tx: 21, ty: 1, tz: -13, az: 30, el: 36, dist: 100, sx: 0.06, glow: 0.3, focus: 0.12, labCity: 1, fit: 62, m: { sx: 0, sy: 0.16 } },
  cathedral: { ...city, tx: 0.6, ty: 7.4, tz: 0.6, az: 52, el: 8, dist: 32, sx: -0.18, glow: 1, dim: 0.35, lines: 0.2, focus: 1, beam: 1, fit: 13, m: { dist: 36, sx: 0, sy: 0.14 } },
  arch: { ...city, tx: 0, ty: 6.4, tz: 0, az: 0, el: 4, dist: 31, sx: 0.17, glow: 0.4, dim: 0.8, lines: 0, focus: 0.5, beam: 0.3, scan: 1, wire: 1, fit: 14, m: { dist: 44, sx: 0, sy: 0.16 } },
  grid: { ...city, tx: 0.2, ty: 6.2, az: 0, el: 2, dist: 30, sx: 0.17, dim: 0.92, lines: 0, cathSolid: 0, scan: 1, wire: 1, morph: 1, glow: 0, fit: 14, m: { dist: 44, sx: 0, sy: 0.16 } },
  web: { ...web, tx: 0.4, ty: 4.7, az: 0, el: 0, dist: 23, sx: 0.15, fit: 13.5, m: { dist: 34, sx: 0, sy: 0.18 } },
  flow: { ...web, fit: 31, tx: 0.3, ty: 4.7, az: 0, el: 0, dist: 42.5, sx: 0, sy: 0.085, flow: 1, labFlow: 1, m: { dist: 57, fit: 15, tx: 0.4, ty: 5, sy: 0.235 }, t: { dist: 43, sy: 0.12 } },
  'layers-a': { ...web, wire: 0, tx: 0.6, ty: 4.2, az: -26, el: 32, dist: 35, sx: 0.17, layers: 0.14, layersA: 1, labLayers: 1, fit: 15, m: { dist: 54, sx: 0, sy: 0.17 } },
  'layers-b': { ...web, wire: 0, tx: 0.6, ty: 4.2, az: -22, el: 30, dist: 35, sx: 0.17, layers: 1, layersA: 1, labLayers: 1, fit: 15, m: { dist: 52, sx: 0, sy: 0.17 } },
  'layers-c': { ...web, wire: 0, tx: 0.4, ty: 4.2, az: -14, el: 22, dist: 33, sx: 0.25, layers: 1, layersA: 1, assemble: 1, labLayers: 0, fit: 14, m: { dist: 46, sx: 0, sy: 0.17 } },
  final: { Z: 0, tx: 0.2, ty: -0.4, tz: -2.2, az: 28, el: 16, dist: 13.5, fov: 40, roll: -10, sx: 0.2, sy: -0.12, finale: 1, net: 1, conv: 1, labFinale: 1, m: { dist: 17, fov: 48, roll: -4, sx: 0, sy: 0.24 } },
};

export function frameState(id, mobile, tablet = false) {
  const f = FRAMES[id];
  if (!f) return null;
  const out = { ...DEF, ...f, ...(mobile && f.m ? f.m : {}), ...(mobile && tablet && f.t ? f.t : {}) };
  delete out.m;
  delete out.t;
  return out;
}
