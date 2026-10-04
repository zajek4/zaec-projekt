// Geografski podaci za uvodnu scenu (svijet → Europa → Hrvatska → Osijek).
// Izlaz: src/js/world3/data/geo.json  (kopno kao maska poligona globusa, Europa, Hrvatska, gradovi)
import fs from 'node:fs';
import { createRequire } from 'node:module';
import * as THREE from 'three';
import { feature } from 'topojson-client';
import { geoContains } from 'd3-geo';

const require = createRequire(import.meta.url);
const land110 = require('world-atlas/land-110m.json');
const countries50 = require('world-atlas/countries-50m.json');

const land = feature(land110, land110.objects.land);

/* ── 1. maska kopna za poligonalni globus (redoslijed lica = IcosahedronGeometry) ── */
function landMask(detail) {
  const g = new THREE.IcosahedronGeometry(1, detail);
  const p = g.attributes.position;
  const n = p.count / 3;
  const bits = new Uint8Array(Math.ceil(n / 8));
  const v = new THREE.Vector3();
  let count = 0;
  for (let f = 0; f < n; f++) {
    v.set(0, 0, 0);
    for (let k = 0; k < 3; k++) v.add(new THREE.Vector3().fromBufferAttribute(p, f * 3 + k));
    v.normalize();
    const lat = (Math.asin(v.y) * 180) / Math.PI;
    const lon = (Math.atan2(v.x, v.z) * 180) / Math.PI;
    if (geoContains(land, [lon, lat])) { bits[f >> 3] |= 1 << (f & 7); count++; }
  }
  console.log(`globus detail ${detail}: ${n} lica, kopno ${count}`);
  return Buffer.from(bits).toString('base64');
}

/* ── 2. Europa (države, pojednostavljeno) ── */
function dp(points, eps) {
  if (points.length < 3) return points;
  let dmax = 0, idx = 0;
  const [ax, ay] = points[0], [bx, by] = points[points.length - 1];
  const dx = bx - ax, dy = by - ay, len = Math.hypot(dx, dy) || 1e-9;
  for (let i = 1; i < points.length - 1; i++) {
    const [px, py] = points[i];
    const d = len < 1e-6 ? Math.hypot(px - ax, py - ay) : Math.abs(dy * px - dx * py + bx * ay - by * ax) / len;
    if (d > dmax) { dmax = d; idx = i; }
  }
  if (dmax > eps) return [...dp(points.slice(0, idx + 1), eps).slice(0, -1), ...dp(points.slice(idx), eps)];
  return [points[0], points[points.length - 1]];
}
const BBOX = [-12, 33, 44, 71];
const inBox = (c) => c[0] > BBOX[0] && c[0] < BBOX[2] && c[1] > BBOX[1] && c[1] < BBOX[3];
const fc = feature(countries50, countries50.objects.countries);
const europe = [];
for (const f of fc.features) {
  if (f.id === '191') continue; // Hrvatska ide iz preciznog OSM obrisa
  const polys = f.geometry.type === 'Polygon' ? [f.geometry.coordinates] : f.geometry.type === 'MultiPolygon' ? f.geometry.coordinates : [];
  for (const poly of polys) {
    if (!poly[0].some(inBox)) continue;
    const rings = poly.map((r) => dp(r, 0.035).map(([x, y]) => [+x.toFixed(2), +y.toFixed(2)])).filter((r) => r.length > 3);
    if (rings.length) europe.push({ id: f.id, name: f.properties.name, rings });
  }
}

/* ── 3. Hrvatska iz preciznog obrisa (v1.x, OSM): x = lon · cos(44,47°), y = -lat ──
   Obris je spremljen u ekvidistantnoj projekciji (x skaliran kosinusom srednje širine Hrvatske);
   K je izveden iz krajnjih točaka (Savudrija 13,49° E → x 9,634; Ilok 19,45° E → x 13,869). */
const K = (9.6344 / 13.4897 + 13.8688 / 19.4475) / 2;
const svg = fs.readFileSync('tools/hr-outline.svg', 'utf8');
const croatia = [...svg.matchAll(/M ([^M"]+)/g)].map((m) => {
  const nums = m[1].replace(/[LZz]/g, ' ').trim().split(/\s+/).map(Number);
  const ring = [];
  for (let i = 0; i + 1 < nums.length; i += 2) ring.push([+(nums[i] / K).toFixed(3), +(-nums[i + 1]).toFixed(3)]);
  return ring;
}).filter((r) => r.length > 3);

const cities = [
  ['Osijek', 18.6955, 45.555, 1], ['Zagreb', 15.98, 45.81, 1], ['Split', 16.44, 43.51, 1], ['Rijeka', 14.44, 45.33, 1],
  ['Zadar', 15.23, 44.12, 0], ['Dubrovnik', 18.09, 42.65, 0], ['Pula', 13.85, 44.87, 0], ['Varaždin', 16.34, 46.31, 0],
  ['Slavonski Brod', 18.01, 45.16, 0], ['Vukovar', 19.0, 45.35, 0], ['Đakovo', 18.41, 45.31, 0], ['Vinkovci', 18.8, 45.29, 0],
];
const capitals = [
  ['Beč', 16.37, 48.21], ['Budimpešta', 19.04, 47.5], ['München', 11.58, 48.14], ['Ljubljana', 14.51, 46.06], ['Beograd', 20.46, 44.79],
  ['Sarajevo', 18.41, 43.86], ['Milano', 9.19, 45.46], ['Berlin', 13.4, 52.52], ['Prag', 14.42, 50.08], ['Varšava', 21.01, 52.23],
  ['Pariz', 2.35, 48.86], ['Amsterdam', 4.9, 52.37], ['Rim', 12.5, 41.9], ['Zürich', 8.54, 47.37], ['Bratislava', 17.11, 48.15], ['London', -0.13, 51.51],
];

const out = {
  globe: JSON.parse(fs.existsSync('src/js/world3/data/geo.json') ? fs.readFileSync('src/js/world3/data/geo.json', 'utf8') : '{}').globe || { d48: landMask(48), d30: landMask(30) },
  europe,
  croatia,
  cities,
  capitals,
};
fs.mkdirSync('src/js/world3/data', { recursive: true });
fs.writeFileSync('src/js/world3/data/geo.json', JSON.stringify(out));
console.log('europa poligona:', europe.length, '· hrvatska prstenova:', croatia.length, '· KB:', Math.round(JSON.stringify(out).length / 1024));
