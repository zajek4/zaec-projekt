// Stvarni Osijek za listove s kartom (lokalni SEO, Google Business profil, Osijek): isti OSM podaci kao naslovnica
// (zaec/assets/data/osijek-city.bin, tools/build-city.mjs). Koordinate su metri od konkatedrale, x istok, y sjever.
// © OpenStreetMap contributors (ODbL): list koji crta kartu ispisuje atribuciju.
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
let cache = null;

export function city() {
  if (cache) return cache;
  const buf = readFileSync(join(here, '../../../zaec/assets/data/osijek-city.bin'));
  const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.length);
  const H = new Int32Array(ab, 0, 13);
  const D = new Int16Array(ab, 52);
  let o = 0;
  const read = (count, heads) => {
    const out = [];
    for (let i = 0; i < count; i++) {
      const h = [];
      for (let k = 0; k < heads; k++) h.push(D[o++]);
      const n = D[o++];
      const r = [];
      for (let k = 0; k < n; k++) r.push([D[o++] / 2, D[o++] / 2]);
      out.push({ h, r });
    }
    return out;
  };
  cache = { buildings: read(H[1], 2), roads: read(H[3], 1), water: read(H[5], 1) };
  return cache;
}

/**
 * Projekcija karte na list: o = [x, y] točka lista u kojoj je središte c = [mx, my] (m), s = jedinica lista po metru.
 * clip = [x0, y0, x1, y1] u jedinicama lista (s rubom). Vraća putanje (d) po vrsti ceste, vodu i zgrade.
 */
export function mapPaths({ o, c, s, clip, minLen = 0 }) {
  const { roads, water, buildings } = city();
  const P = ([x, y]) => [o[0] + (x - c[0]) * s, o[1] - (y - c[1]) * s];
  const inside = ([x, y]) => x > clip[0] && x < clip[2] && y > clip[1] && y < clip[3];
  const r1 = (n) => Math.round(n);
  // dio ceste unutar izreza (točke izvan se odbacuju, a dio prekida); zaokruženo na desetinku
  const line = (pts) => {
    const q = pts.map(P);
    const segs = [];
    let cur = null;
    for (let i = 1; i < q.length; i++) {
      if (inside(q[i - 1]) || inside(q[i])) {
        if (!cur) segs.push((cur = [q[i - 1]]));
        cur.push(q[i]);
      } else cur = null;
    }
    return segs
      .filter((sg) => sg.reduce((l, p, i) => (i ? l + Math.hypot(p[0] - sg[i - 1][0], p[1] - sg[i - 1][1]) : 0), 0) >= minLen)
      .map((sg) => 'M' + sg.map(([x, y]) => `${r1(x)} ${r1(y)}`).join('L'))
      .join('');
  };
  const byClass = {};
  for (const r of roads) {
    const k = r.h[0] & 15;
    byClass[k] = (byClass[k] || '') + line(r.r);
  }
  const poly = (list) =>
    list
      .map((w) => w.r.map(P))
      .filter((pts) => pts.some(inside))
      .map((pts) => 'M' + pts.map(([x, y]) => `${r1(x)} ${r1(y)}`).join('L') + 'Z')
      .join('');
  return {
    roads: byClass,
    water: poly(water),
    buildings: poly(buildings.filter((b) => !(b.h[1] & 8))),
    P,
  };
}
