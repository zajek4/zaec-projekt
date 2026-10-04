// Razvojni alat: stvarni Osijek iz OpenStreetMap podataka → kompaktni binarni zapis za world3.
// © OpenStreetMap contributors (ODbL) — atribucija je prikazana na stranici.
//
// Ulaz:  ../cache/osm-center.json (Overpass "out geom"; ako ne postoji, dohvaća se s overpass-api.de)
// Izlaz: zaec/assets/data/osijek-city.bin + ispis ishodišta (konkatedrala) za lib.js
//
// Koordinate: metri od središta konkatedrale; x = istok, y = sjever; Int16 u jedinicama od 0,5 m.
import fs from 'node:fs';
import path from 'node:path';

const CACHE = path.resolve('../cache/osm-center.json');
const OUT = path.resolve('zaec/assets/data/osijek-city.bin');
const CATHEDRAL = 834820275;
const HOTEL = 40467690;
const SQUARE = 26792054;
const RIVER = 299389;

async function load() {
  if (fs.existsSync(CACHE)) return JSON.parse(fs.readFileSync(CACHE, 'utf8'));
  const q = '[out:json][timeout:90];(way["building"](45.546,18.650,45.574,18.712);relation["building"](45.546,18.650,45.574,18.712);way["highway"](45.546,18.650,45.574,18.712);relation["natural"="water"](45.540,18.630,45.580,18.730);way["place"="square"](45.546,18.650,45.574,18.712);way["leisure"="park"](45.546,18.650,45.574,18.712);way["landuse"="grass"](45.546,18.650,45.574,18.712););out geom;';
  const res = await fetch('https://overpass-api.de/api/interpreter', { method: 'POST', body: new URLSearchParams({ data: q }), headers: { 'User-Agent': 'ZAEC-theme-build/1.0' } });
  const j = await res.json();
  fs.mkdirSync(path.dirname(CACHE), { recursive: true });
  fs.writeFileSync(CACHE, JSON.stringify(j));
  return j;
}

const osm = await load();
const byId = new Map(osm.elements.map((e) => [e.type + e.id, e]));

/* ── ishodište: težište tlocrta konkatedrale ── */
const cath = byId.get('way' + CATHEDRAL);
let A = 0, cx = 0, cy = 0;
{
  const g = cath.geometry;
  for (let i = 0; i < g.length - 1; i++) {
    const a = g[i], b = g[i + 1];
    const f = a.lon * b.lat - b.lon * a.lat;
    A += f; cx += (a.lon + b.lon) * f; cy += (a.lat + b.lat) * f;
  }
  A /= 2; cx /= 6 * A; cy /= 6 * A;
}
const LON0 = +cx.toFixed(6), LAT0 = +cy.toFixed(6);
const KX = 111320 * Math.cos((LAT0 * Math.PI) / 180);
const KY = 111132.954 - 559.822 * Math.cos(2 * LAT0 * Math.PI / 180);
const toM = (p) => [(p.lon - LON0) * KX, (p.lat - LAT0) * KY];

/* ── pomoćne funkcije ── */
function dp(pts, eps) {
  if (pts.length < 3) return pts;
  const keep = new Uint8Array(pts.length);
  keep[0] = keep[pts.length - 1] = 1;
  const stack = [[0, pts.length - 1]];
  while (stack.length) {
    const [s, e] = stack.pop();
    const [ax, ay] = pts[s], [bx, by] = pts[e];
    const len = Math.hypot(bx - ax, by - ay);
    let md = -1, mi = -1;
    for (let i = s + 1; i < e; i++) {
      const [px, py] = pts[i];
      const d = len < 1e-6 ? Math.hypot(px - ax, py - ay) : Math.abs((bx - ax) * (ay - py) - (ax - px) * (by - ay)) / len;
      if (d > md) { md = d; mi = i; }
    }
    if (md > eps) { keep[mi] = 1; stack.push([s, mi], [mi, e]); }
  }
  return pts.filter((_, i) => keep[i]);
}
const area = (r) => { let a = 0; for (let i = 0, j = r.length - 1; i < r.length; j = i++) a += (r[j][0] - r[i][0]) * (r[j][1] + r[i][1]); return a / 2; };
function closedRing(geom, eps) {
  let r = geom.map(toM);
  if (r.length > 1 && Math.hypot(r[0][0] - r[r.length - 1][0], r[0][1] - r[r.length - 1][1]) < 0.01) r.pop();
  r = dp([...r, r[0]], eps);
  r.pop();
  // ukloni uzastopne duplikate
  r = r.filter((p, i) => i === 0 || Math.hypot(p[0] - r[i - 1][0], p[1] - r[i - 1][1]) > 0.25);
  return r.length >= 3 && Math.abs(area(r)) > 2 ? r : null;
}
/** Spoji članove multipoligona u zatvorene prstenove. */
function assemble(ways) {
  const segs = ways.map((w) => w.slice());
  const rings = [];
  while (segs.length) {
    let ring = segs.shift();
    let guard = 0;
    while (guard++ < 5000) {
      const a = ring[0], b = ring[ring.length - 1];
      if (Math.abs(a.lat - b.lat) < 1e-9 && Math.abs(a.lon - b.lon) < 1e-9) break;
      const i = segs.findIndex((s) => {
        const s0 = s[0], s1 = s[s.length - 1];
        return (Math.abs(s0.lat - b.lat) < 1e-9 && Math.abs(s0.lon - b.lon) < 1e-9) || (Math.abs(s1.lat - b.lat) < 1e-9 && Math.abs(s1.lon - b.lon) < 1e-9);
      });
      if (i < 0) break;
      let s = segs.splice(i, 1)[0];
      if (!(Math.abs(s[0].lat - b.lat) < 1e-9 && Math.abs(s[0].lon - b.lon) < 1e-9)) s = s.reverse();
      ring = ring.concat(s.slice(1));
    }
    rings.push(ring);
  }
  return rings;
}
/** Sutherland–Hodgman rezanje prstena na pravokutnik. */
function clipRect(r, x0, y0, x1, y1) {
  const edges = [[(p) => p[0] >= x0, (a, b) => [x0, a[1] + ((b[1] - a[1]) * (x0 - a[0])) / (b[0] - a[0])]], [(p) => p[0] <= x1, (a, b) => [x1, a[1] + ((b[1] - a[1]) * (x1 - a[0])) / (b[0] - a[0])]], [(p) => p[1] >= y0, (a, b) => [a[0] + ((b[0] - a[0]) * (y0 - a[1])) / (b[1] - a[1]), y0]], [(p) => p[1] <= y1, (a, b) => [a[0] + ((b[0] - a[0]) * (y1 - a[1])) / (b[1] - a[1]), y1]]];
  let out = r;
  for (const [inside, cut] of edges) {
    const inp = out;
    out = [];
    for (let i = 0; i < inp.length; i++) {
      const a = inp[(i + inp.length - 1) % inp.length], b = inp[i];
      if (inside(b)) { if (!inside(a)) out.push(cut(a, b)); out.push(b); } else if (inside(a)) out.push(cut(a, b));
    }
    if (!out.length) return null;
  }
  return out;
}

/* ── zgrade ── */
const LEVELS = { house: 2, detached: 2, semidetached_house: 2, terrace: 2, residential: 3, apartments: 5, garage: 1, garages: 1, shed: 1, roof: 1, carport: 1, hut: 1, kiosk: 1, commercial: 3, retail: 2, office: 4, industrial: 2, warehouse: 2, school: 3, university: 4, hospital: 4, church: 3, chapel: 1, public: 3, civic: 3, hotel: 5, kindergarten: 1, service: 1, transportation: 2, train_station: 2, yes: 2.6 };
const KIND = (t) => (['house', 'detached', 'semidetached_house', 'terrace', 'residential'].includes(t) ? 1 : ['apartments', 'hotel', 'office', 'hospital', 'university'].includes(t) ? 2 : ['church', 'chapel', 'cathedral'].includes(t) ? 3 : ['garage', 'garages', 'shed', 'roof', 'carport', 'hut', 'kiosk', 'service'].includes(t) ? 4 : ['industrial', 'warehouse', 'commercial', 'retail'].includes(t) ? 5 : 0);
const buildings = [];
for (const e of osm.elements) {
  if (!e.tags?.building || e.type !== 'way' || !e.geometry || e.id === CATHEDRAL || e.id === HOTEL) continue;
  const r = closedRing(e.geometry, 0.45);
  if (!r) continue;
  const t = e.tags.building;
  let h = parseFloat(e.tags.height);
  const lv = parseFloat(e.tags['building:levels']);
  if (!(h > 0)) h = (lv > 0 ? lv : LEVELS[t] ?? 2.6) * 3.2 + (lv > 0 && lv <= 4 ? 0.8 : 0);
  h = Math.min(120, Math.max(2.6, h));
  if (area(r) < 0) r.reverse(); // CCW (x istok, y sjever)
  buildings.push({ h, k: KIND(t), r });
}

/* ── ceste ── */
const RCLS = { motorway: 0, trunk: 0, primary: 0, secondary: 0, tertiary: 1, primary_link: 1, secondary_link: 1, tertiary_link: 1, residential: 2, unclassified: 2, living_street: 2, service: 3, pedestrian: 4, footway: 5, path: 5, cycleway: 5, steps: 5, track: 5 };
const roads = [];
for (const e of osm.elements) {
  const c = RCLS[e.tags?.highway];
  if (c === undefined || e.type !== 'way' || !e.geometry) continue;
  if (e.tags.area === 'yes') continue;
  const pts = dp(e.geometry.map(toM), c <= 2 ? 1.2 : 1.8);
  if (pts.length >= 2) roads.push({ c, r: pts });
}

/* ── Drava (multipoligon), rezano na ±3,4 km ── */
const water = [];
const river = byId.get('relation' + RIVER);
if (river) {
  const outer = river.members.filter((m) => m.type === 'way' && m.role === 'outer' && m.geometry).map((m) => m.geometry);
  const inner = river.members.filter((m) => m.type === 'way' && m.role === 'inner' && m.geometry).map((m) => m.geometry);
  for (const [role, set] of [[0, outer], [1, inner]]) {
    for (const ring of assemble(set)) {
      let r = ring.map(toM);
      r = dp(r, 2.5);
      r = clipRect(r, -3400, -2600, 3400, 2600);
      if (r && r.length >= 3 && Math.abs(area(r)) > 50) {
        if ((area(r) < 0) !== (role === 1)) r.reverse();
        water.push({ t: role, r });
      }
    }
  }
}

/* ── trg, parkovi, travnjaci ── */
const areas = [];
for (const e of osm.elements) {
  if (e.type !== 'way' || !e.geometry) continue;
  const t = e.tags?.place === 'square' ? 0 : e.tags?.leisure === 'park' ? 1 : e.tags?.landuse === 'grass' ? 2 : -1;
  if (t < 0) continue;
  const r = closedRing(e.geometry, 0.8);
  if (r) { if (area(r) < 0) r.reverse(); areas.push({ t: e.id === SQUARE ? 3 : t, r }); }
}

/* ── posebni orijentiri (tlocrti za ručno modelirane zgrade) ── */
const landmark = (id) => { const e = byId.get('way' + id); const r = closedRing(e.geometry, 0.2); if (area(r) < 0) r.reverse(); return r; };
const marks = [{ id: 1, r: landmark(CATHEDRAL) }, { id: 2, r: landmark(HOTEL) }];

/* ── zapis ── */
const q = (v) => Math.max(-32767, Math.min(32767, Math.round(v * 2)));
const data = [];
const block = (list, head) => {
  const start = data.length;
  for (const it of list) {
    data.push(...head(it), it.r.length);
    for (const [x, y] of it.r) data.push(q(x), q(y));
  }
  return data.length - start;
};
const lens = [
  block(buildings, (b) => [Math.round(b.h * 2), b.k]),
  block(roads, (r) => [r.c]),
  block(water, (w) => [w.t]),
  block(areas, (a) => [a.t]),
  block(marks, (m) => [m.id]),
];
const header = new Int32Array([2, buildings.length, lens[0], roads.length, lens[1], water.length, lens[2], areas.length, lens[3], marks.length, lens[4], Math.round(LON0 * 1e6), Math.round(LAT0 * 1e6)]);
const body = new Int16Array(data);
fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, Buffer.concat([Buffer.from(header.buffer), Buffer.from(body.buffer)]));
const roadKm = roads.reduce((s, r) => s + r.r.reduce((t, p, i) => (i ? t + Math.hypot(p[0] - r.r[i - 1][0], p[1] - r.r[i - 1][1]) : 0), 0), 0) / 1000;
console.log(`ishodište (konkatedrala): lon ${LON0}, lat ${LAT0}`);
console.log(`zgrade ${buildings.length} · ceste ${roads.length} (${roadKm.toFixed(0)} km) · voda ${water.length} · površine ${areas.length} · ${(fs.statSync(OUT).size / 1024).toFixed(0)} kB`);
const hot = byId.get('way' + HOTEL);
console.log('hotel centar m:', toM({ lon: (hot.bounds.minlon + hot.bounds.maxlon) / 2, lat: (hot.bounds.minlat + hot.bounds.maxlat) / 2 }).map((v) => v.toFixed(1)).join(', '));
