// Geografski podaci za uvodnu scenu (svijet → Europa → Hrvatska → Osijek).
// Izlaz: src/js/world3/data/geo.json  (kopno kao maska poligona globusa, Europa, Hrvatska, gradovi)
import fs from 'node:fs';
import { createRequire } from 'node:module';
import * as THREE from 'three';
import { feature } from 'topojson-client';
import { geoArea, geoContains, geoEquirectangular, geoPath } from 'd3-geo';
import sharp from 'sharp';

const require = createRequire(import.meta.url);
const land110 = require('world-atlas/land-110m.json');
const land50 = require('world-atlas/land-50m.json');
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
// Rezni okvir: velike države (Rusija, Kazahstan…) i prstenovi preko antimeridijana inače stvaraju
// goleme trokute preko cijele karte. Reže se Sutherland–Hodgmanom prije triangulacije.
const CLIP = [-32, 26, 62, 74];
function clipRing(r) {
  const [x0, y0, x1, y1] = CLIP;
  const tests = [[(p) => p[0] >= x0, (a, b) => [x0, a[1] + ((b[1] - a[1]) * (x0 - a[0])) / (b[0] - a[0])]], [(p) => p[0] <= x1, (a, b) => [x1, a[1] + ((b[1] - a[1]) * (x1 - a[0])) / (b[0] - a[0])]], [(p) => p[1] >= y0, (a, b) => [a[0] + ((b[0] - a[0]) * (y0 - a[1])) / (b[1] - a[1]), y0]], [(p) => p[1] <= y1, (a, b) => [a[0] + ((b[0] - a[0]) * (y1 - a[1])) / (b[1] - a[1]), y1]]];
  let out = r.slice(0, -1);
  for (const [inside, cut] of tests) {
    const inp = out; out = [];
    for (let i = 0; i < inp.length; i++) {
      const a = inp[(i + inp.length - 1) % inp.length], b = inp[i];
      if (inside(b)) { if (!inside(a)) out.push(cut(a, b)); out.push(b); } else if (inside(a)) out.push(cut(a, b));
    }
    if (out.length < 3) return null;
  }
  out.push(out[0]);
  return out;
}
const ringArea = (r) => { let a = 0; for (let i = 0; i < r.length - 1; i++) a += r[i][0] * r[i + 1][1] - r[i + 1][0] * r[i][1]; return a / 2; };
function cleanRing(r) {
  const out = [];
  for (const p of r) { const q = out[out.length - 1]; if (!q || Math.abs(q[0] - p[0]) > 1e-4 || Math.abs(q[1] - p[1]) > 1e-4) out.push(p); }
  return out.length >= 4 && Math.abs(ringArea(out)) > 0.002 ? out : null;
}
const fc = feature(countries50, countries50.objects.countries);
const europe = [];
for (const f of fc.features) {
  if (f.id === '191') continue; // Hrvatska ide iz preciznog OSM obrisa
  const polys = f.geometry.type === 'Polygon' ? [f.geometry.coordinates] : f.geometry.type === 'MultiPolygon' ? f.geometry.coordinates : [];
  for (const poly of polys) {
    if (!poly[0].some(inBox)) continue;
    // vanjski prsten mora preživjeti rezanje; rupe se režu zasebno i odbacuju ako nestanu
    const rings = [];
    poly.forEach((r, ri) => {
      let c = clipRing(r);
      if (!c) return;
      c = cleanRing(dp(c, 0.035).map(([x, y]) => [+x.toFixed(2), +y.toFixed(2)]));
      if (c) rings.push(c); else if (ri === 0) rings.length = 0;
    });
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
  ['Osijek', 18.675555, 45.560846, 1], ['Zagreb', 15.98, 45.81, 1], ['Split', 16.44, 43.51, 1], ['Rijeka', 14.44, 45.33, 1],
  ['Zadar', 15.23, 44.12, 0], ['Dubrovnik', 18.09, 42.65, 0], ['Pula', 13.85, 44.87, 0], ['Varaždin', 16.34, 46.31, 0],
  ['Slavonski Brod', 18.01, 45.16, 0], ['Vukovar', 19.0, 45.35, 0], ['Đakovo', 18.41, 45.31, 0], ['Vinkovci', 18.8, 45.29, 0],
];
const capitals = [
  ['Beč', 16.37, 48.21], ['Budimpešta', 19.04, 47.5], ['München', 11.58, 48.14], ['Ljubljana', 14.51, 46.06], ['Beograd', 20.46, 44.79],
  ['Sarajevo', 18.41, 43.86], ['Milano', 9.19, 45.46], ['Berlin', 13.4, 52.52], ['Prag', 14.42, 50.08], ['Varšava', 21.01, 52.23],
  ['Pariz', 2.35, 48.86], ['Amsterdam', 4.9, 52.37], ['Rim', 12.5, 41.9], ['Zürich', 8.54, 47.37], ['Bratislava', 17.11, 48.15], ['London', -0.13, 51.51],
];

/* ── 4. čvorovi mreže: ravnomjerno raspoređene točke na kopnu (Fibonaccijeva sfera) ── */
const land50f = feature(land50, land50.objects.land);
const nodes = [];
{
  const N = 9000;
  const ga = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < N; i++) {
    const y = 1 - (i / (N - 1)) * 2;
    const lat = (Math.asin(y) * 180) / Math.PI;
    const lon = ((((i * ga * 180) / Math.PI) % 360) + 540) % 360 - 180;
    if (lat < -58 || lat > 72) continue;
    if (geoContains(land50f, [lon, lat])) nodes.push([+lon.toFixed(1), +lat.toFixed(1)]);
  }
  console.log('čvorovi na kopnu:', nodes.length);
}

/* ── 5. tekstura kopna (ekvidistantna, 2048×1024) za orbitalni kadar ── */
{
  const W = 2048, H = 1024;
  const proj = geoEquirectangular().scale(W / (2 * Math.PI)).translate([W / 2, H / 2]);
  const d = geoPath(proj)(land50f);
  const svgTex = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}"><rect width="100%" height="100%" fill="#000"/><path d="${d}" fill="#fff"/></svg>`;
  fs.mkdirSync('zaec/assets/img/world', { recursive: true });
  await sharp(Buffer.from(svgTex)).greyscale().png({ compressionLevel: 9, palette: true, colours: 16 }).toFile('zaec/assets/img/world/land.png');
  console.log('land.png', Math.round(fs.statSync('zaec/assets/img/world/land.png').size / 1024), 'kB');
}

/* ── 6. detaljnija tekstura kopna za Europu (1:10m, lon −30…60, lat 25…75) ──
   Karta se pri spuštanju "odmata" s kugle i dijeli shader s globusom; ova tekstura drži obalu oštrom
   do mjerila Hrvatske (≈0,045° po pikselu). Granice: EU_BOX u europe.js. */
{
  const land10 = require('world-atlas/land-10m.json');
  const land10f = feature(land10, land10.objects.land);
  // pojedini poligoni u 1:10m imaju obrnut sferni smjer (d3 bi crtao komplement) — preokreni ih
  for (const ft of land10f.features ?? [land10f]) {
    const g = ft.geometry;
    const polys = g.type === 'Polygon' ? [g.coordinates] : g.coordinates;
    for (const poly of polys) if (geoArea({ type: 'Polygon', coordinates: poly }) > 2 * Math.PI) poly.forEach((r) => r.reverse());
  }
  const [LO0, LA0, LO1, LA1] = [-30, 25, 60, 75];
  const W = 2048, H = Math.round((W * (LA1 - LA0)) / (LO1 - LO0)); // isto mjerilo po obje osi
  const k = W / ((LO1 - LO0) * (Math.PI / 180));
  const proj = geoEquirectangular().scale(k).translate([k * -LO0 * (Math.PI / 180), k * LA1 * (Math.PI / 180)]);
  const d = geoPath(proj)(land10f);
  const svgTex = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}"><rect width="100%" height="100%" fill="#000"/><path d="${d}" fill="#fff"/></svg>`;
  await sharp(Buffer.from(svgTex)).greyscale().png({ compressionLevel: 9, palette: true, colours: 16 }).toFile('zaec/assets/img/world/land-eu.png');
  console.log('land-eu.png', Math.round(fs.statSync('zaec/assets/img/world/land-eu.png').size / 1024), 'kB');
}

const out = {
  globe: JSON.parse(fs.existsSync('src/js/world3/data/geo.json') ? fs.readFileSync('src/js/world3/data/geo.json', 'utf8') : '{}').globe || { d48: landMask(48), d30: landMask(30) },
  europe,
  croatia,
  cities,
  capitals,
  nodes,
};
fs.mkdirSync('src/js/world3/data', { recursive: true });
fs.writeFileSync('src/js/world3/data/geo.json', JSON.stringify(out));
console.log('europa poligona:', europe.length, '· hrvatska prstenova:', croatia.length, '· KB:', Math.round(JSON.stringify(out).length / 1024));
