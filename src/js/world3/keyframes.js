// Knjiga snimanja: svaka ključna slika odgovara jednom [data-cam] sidru u DOM-u.
// Kamera: meta (tx,ty,tz) u svjetskim jedinicama pri zoomu Z, sferni odmak (az, el u °, dist),
// leća sx/sy = pomak sadržaja kao udio ekrana (+sx desno, +sy gore).
// fit = širina motiva (svjetske jedinice) koja mora stati u kadar — kamera se sama odmiče na uskim ekranima.
export const DEF = {
  Z: 0, tx: 0, ty: 0, tz: 0, az: 0, el: 20, dist: 30, fov: 34, sx: 0, sy: 0, fit: 0,
  idle: 0, net: 0, finale: 0,
  lift: 0,
  rise: 0, cath: 0, glow: 0, dim: 0, lines: 0.4, cathSolid: 1,
  morph: 0, wire: 0,
  flow: 0, layers: 0, layersA: 0,
  labOsijek: 0, labCities: 0, labCity: 0, labFlow: 0, labLayers: 0, labFinale: 0,
  stars: 1,
};
export const KEYS = Object.keys(DEF);

const city = { rise: 1, cath: 1, stars: 0.5 };
const web = { ...city, Z: 2, dim: 0.94, lines: 0, cathSolid: 0, wire: 1, morph: 1, glow: 0 };

/** Desktop kompozicije + mobilne izmjene (m). */
export const FRAMES = {
  hero: { fit: 23, Z: 0, ty: -10, az: -14, el: 24, dist: 47, sx: 0.2, sy: 0.02, idle: 1, net: 0.65, m: { dist: 66, sx: 0, sy: 0.22 } },
  world: { fit: 26, Z: 0.1, ty: -7, az: 14, el: 32, dist: 46, sx: -0.2, net: 1, labOsijek: 1, m: { dist: 62, sx: 0, sy: 0.2 } },
  europe: { fit: 36, Z: 0.94, tx: -6.5, ty: 0, tz: -1, az: 0, el: 62, dist: 50, sx: 0.17, net: 0.7, m: { dist: 76, sx: 0, sy: 0.18 } },
  croatia: { fit: 19, Z: 1, tx: -6, ty: 0.5, tz: 4.2, az: -10, el: 52, dist: 31, sx: 0.16, lift: 1, net: 0.5, labCities: 1, m: { dist: 44, sx: 0, sy: 0.16 } },
  osijek: { fit: 62, Z: 2, tx: -2, ty: 0, tz: -7, az: 24, el: 42, dist: 92, sx: 0.12, ...city, glow: 0.3, lift: 1, labCity: 1, ease: 'dive', m: { dist: 120, sx: 0, sy: 0.16 } },
  cathedral: { fit: 13, Z: 2, tx: -2.4, ty: 6.4, tz: 0, az: -40, el: 12, dist: 33, sx: -0.2, ...city, glow: 1, dim: 0.35, lines: 0.2, m: { dist: 36, sx: 0, sy: 0.14 } },
  arch: { fit: 14, Z: 2, tx: 0.4, ty: 5.6, az: 0, el: 4, dist: 30, sx: 0.17, ...city, glow: 0.4, dim: 0.78, lines: 0, cathSolid: 0.22, wire: 1, m: { dist: 44, sx: 0, sy: 0.16 } },
  web: { fit: 13.5, ...web, tx: 0.4, ty: 4.7, az: 0, el: 0, dist: 23, sx: 0.15, m: { dist: 34, sx: 0, sy: 0.18 } },
  flow: { fit: 33, ...web, tx: 0.3, ty: 4.7, az: 0, el: 0, dist: 45, sx: 0, sy: 0.11, flow: 1, labFlow: 1, m: { dist: 50, fit: 15, tx: 0.4, ty: 5, sy: 0.19 } },
  'layers-a': { fit: 17, ...web, wire: 0, tx: 0.4, ty: 4.7, az: -50, el: 16, dist: 37, sx: 0.17, layers: 0.12, layersA: 1, labLayers: 1, m: { dist: 54, sx: 0, sy: 0.17 } },
  'layers-b': { fit: 17, ...web, wire: 0, tx: 0.4, ty: 4.7, az: -38, el: 14, dist: 35, sx: 0.17, layers: 0.86, layersA: 1, labLayers: 1, m: { dist: 52, sx: 0, sy: 0.17 } },
  'layers-c': { fit: 16, ...web, wire: 0, tx: 0.4, ty: 4.7, az: -20, el: 9, dist: 29, sx: 0.17, layers: 1, layersA: 1, labLayers: 0.4, m: { dist: 46, sx: 0, sy: 0.17 } },
  final: { fit: 23, Z: 0, ty: -10, az: 22, el: 38, dist: 50, sx: 0.21, finale: 1, net: 1, labFinale: 1, m: { dist: 70, sx: 0, sy: 0.25 } },
};

export function frameState(id, mobile) {
  const f = FRAMES[id];
  if (!f) return null;
  const out = { ...DEF, ...f, ...(mobile && f.m ? f.m : {}) };
  delete out.m;
  return out;
}
