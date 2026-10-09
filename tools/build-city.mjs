// Razvojni alat: stvarni Osijek iz OpenStreetMap podataka → kompaktni binarni zapis za world3.
// © OpenStreetMap contributors (ODbL) — atribucija je prikazana na stranici.
//
// Ulaz:  ZAEC_OSM=datoteka.json[,druga.json…] (Overpass "out geom"; spaja se i uklanjaju duplikati po type+id),
//        inače ../cache/osm-center.json (ako ne postoji, dohvaća se s overpass-api.de)
// Izlaz: zaec/assets/data/osijek-city.bin + ispis ishodišta (konkatedrala) za lib.js
//
// Koordinate: metri od središta konkatedrale; x = istok, y = sjever; Int16 u jedinicama od 0,5 m.
// Zgrade iz multipoligon relacija ulaze s dvorištima: unutarnji prsten je zapis odmah iza svoje zgrade, vrsta | 8.
import fs from 'node:fs';
import path from 'node:path';

const CACHE = path.resolve('../cache/osm-center.json');
const OUT = path.resolve('zaec/assets/data/osijek-city.bin');
const CATHEDRAL = 834820275;
const HOTEL = 40467690;
const SQUARE = 26792054;
const RIVER = 299389;
const BB = '45.530,18.600,45.590,18.790';
const HOLE = 8;
// Drava se reže na pravokutnik oko grada (m od konkatedrale): rijeka se u sceni gasi do 3,4 km (waterMaterial),
// a dalje bi se samo sjenčala nevidljiva površina (najskuplji shader u kadru iz zraka)
const WATER_CLIP = [-3600, -3000, 3600, 2800];
// ulice se zapisuju za cijelo izgrađeno područje grada (isti pravokutnik kao široka karta svjetla, LM_WIDE u
// city-look.js; [zapad, jug, istok, sjever] u m), zgrade samo do R_BUILD oko konkatedrale (dalje se ne grade)
const KEEP = [-6400, -3600, 5600, 2600];
const R_BUILD = 2650;
const inKeep = ([x, y]) => x > KEEP[0] && x < KEEP[2] && y > KEEP[1] && y < KEEP[3];
const mid = (r) => r.reduce((s, p) => [s[0] + p[0] / r.length, s[1] + p[1] / r.length], [0, 0]);

async function load() {
  if (process.env.ZAEC_OSM) {
    const seen = new Map();
    for (const f of process.env.ZAEC_OSM.split(',')) {
      for (const e of JSON.parse(fs.readFileSync(f, 'utf8')).elements) {
        const k = e.type + e.id, prev = seen.get(k);
        if (!prev || (!prev.geometry && !prev.members && (e.geometry || e.members))) seen.set(k, e);
      }
    }
    return { elements: [...seen.values()] };
  }
  if (fs.existsSync(CACHE)) return JSON.parse(fs.readFileSync(CACHE, 'utf8'));
  const q = `[out:json][timeout:240];(way["building"](${BB});relation["building"](${BB});way["highway"](${BB});relation["natural"="water"](45.525,18.580,45.595,18.810);way["place"="square"](${BB});way["leisure"="park"](${BB});way["landuse"="grass"](${BB}););out geom;`;
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
const height = (tags) => {
  const t = tags.building;
  let h = parseFloat(tags.height);
  const lv = parseFloat(tags['building:levels']);
  if (!(h > 0)) h = (lv > 0 ? lv : LEVELS[t] ?? 2.6) * 3.2 + (lv > 0 && lv <= 4 ? 0.8 : 0);
  return Math.min(120, Math.max(2.6, h));
};
for (const e of osm.elements) {
  if (!e.tags?.building || e.type !== 'way' || !e.geometry || e.id === CATHEDRAL || e.id === HOTEL) continue;
  const r = closedRing(e.geometry, 0.45);
  if (!r) continue;
  if (Math.hypot(...mid(r)) > R_BUILD) continue;
  if (area(r) < 0) r.reverse(); // CCW (x istok, y sjever)
  buildings.push({ h: height(e.tags), k: KIND(e.tags.building), r, holes: [] });
}
// multipoligoni (zgrade s dvorištem ili iz više dijelova); vanjski prsten koji je i sam označen kao zgrada već je gore
const shut = (g) => g.length > 3 && Math.abs(g[0].lat - g[g.length - 1].lat) < 1e-9 && Math.abs(g[0].lon - g[g.length - 1].lon) < 1e-9;
const inRing = (x, y, r) => { let s = false; for (let i = 0, j = r.length - 1; i < r.length; j = i++) if (r[i][1] > y !== r[j][1] > y && x < ((r[j][0] - r[i][0]) * (y - r[i][1])) / (r[j][1] - r[i][1]) + r[i][0]) s = !s; return s; };
let relN = 0, holeN = 0;
for (const e of osm.elements) {
  if (e.type !== 'relation' || !e.tags?.building || e.tags.type !== 'multipolygon' || !e.members) continue;
  const role = (ro) => e.members.filter((m) => m.type === 'way' && m.role === ro && m.geometry && !(ro === 'outer' && byId.get('way' + m.ref)?.tags?.building));
  const rings = (ro) => assemble(role(ro).map((m) => m.geometry)).filter(shut).map((g) => closedRing(g, 0.45)).filter(Boolean);
  const inners = rings('inner');
  for (const r of rings('outer')) {
    if (Math.hypot(...mid(r)) > R_BUILD) continue;
    if (area(r) < 0) r.reverse();
    const holes = inners.filter((q) => inRing(q[0][0], q[0][1], r) && Math.abs(area(q)) > 12).map((q) => (area(q) > 0 ? q.reverse() : q)); // CW
    buildings.push({ h: height(e.tags), k: KIND(e.tags.building), r, holes });
    relN++; holeN += holes.length;
  }
}

/* ── ceste ── */
// Koji su dijelovi ulica osvijetljeni: OSM za Osijek nema ulične svjetiljke, pa je kriterij izgrađenost iz
// stvarnih tlocrta (svih zgrada, i izvan R_BUILD) u ćelijama od 80 m. Sporedna ulica svijetli gdje uz nju stoje
// zgrade (≥ 4 u 240 × 240 m), glavna cesta gdje je uz nju naselje (≥ 6 u 400 × 400 m); u središtu (1,5 km) sve.
// Polja i ceste između naselja ostaju tamne. Neosvijetljeni dijelovi zapisuju se samo blizu središta (mostovi,
// šetnica uz Dravu se pali u city.js), s oznakom rang | 16.
const UC = 80, UX0 = KEEP[0] - 400, UY0 = KEEP[1] - 400;
const UW = Math.ceil((KEEP[2] - KEEP[0] + 800) / UC), UH = Math.ceil((KEEP[3] - KEEP[1] + 800) / UC);
const dens = new Uint16Array(UW * UH);
for (const e of osm.elements) {
  if (!e.tags?.building) continue;
  const g = e.type === 'way' ? e.geometry : e.type === 'relation' ? e.members?.find((m) => m.role === 'outer' && m.geometry)?.geometry : null;
  if (!g) continue;
  const [x, y] = mid(g.map(toM));
  const i = Math.floor((x - UX0) / UC), j = Math.floor((y - UY0) / UC);
  if (i >= 0 && j >= 0 && i < UW && j < UH) dens[j * UW + i]++;
}
const built = (x, y, need, rr) => {
  const i = Math.floor((x - UX0) / UC), j = Math.floor((y - UY0) / UC);
  let n = 0;
  for (let b = j - rr; b <= j + rr; b++) for (let a = i - rr; a <= i + rr; a++) if (a >= 0 && b >= 0 && a < UW && b < UH) n += dens[b * UW + a];
  return n >= need;
};
const RCLS = { motorway: 0, trunk: 0, primary: 0, secondary: 0, tertiary: 1, primary_link: 1, secondary_link: 1, tertiary_link: 1, residential: 2, unclassified: 2, living_street: 2, service: 3, pedestrian: 4, footway: 5, path: 5, cycleway: 5, steps: 5, track: 5 };
const UNLIT = 16;
const roads = [];
let litKm = 0;
for (const e of osm.elements) {
  const c = RCLS[e.tags?.highway];
  if (c === undefined || e.type !== 'way' || !e.geometry) continue;
  if (e.tags.area === 'yes') continue;
  const m = e.geometry.map(toM);
  if (!m.some(inKeep)) continue;
  // pješačke staze dalje od središta nemaju svjetiljke ni trag na karti svjetla (city.js), pa se ne zapisuju
  if (c === 5 && !m.some((p) => Math.hypot(p[0], p[1]) < 950)) continue;
  const ok = (x, y) => Math.hypot(x, y) < 1500 || (c <= 1 ? built(x, y, 6, 2) : built(x, y, 4, 1));
  // točke svakih ~25 m; uzastopne s istim stanjem čine jedan dio (dijelovi se dodiruju u zajedničkoj točki)
  const runs = [];
  let run = null, state = null;
  for (let i = 0; i < m.length; i++) {
    const [ax, ay] = m[i], [px, py] = i ? m[i - 1] : m[i];
    const steps = i ? Math.max(1, Math.ceil(Math.hypot(ax - px, ay - py) / 25)) : 0;
    for (let k = i ? 1 : 0; k <= steps; k++) {
      const t = steps ? k / steps : 1, q = [px + (ax - px) * t, py + (ay - py) * t];
      const st = ok(q[0], q[1]);
      if (st !== state) { if (run) { run.push(q); runs.push({ lit: state, r: run }); } run = [q]; state = st; } else run.push(q);
    }
  }
  if (run && run.length >= 2) runs.push({ lit: state, r: run });
  for (const { lit, r } of runs) {
    const near = r.some((p) => Math.hypot(p[0], p[1]) < 2700);
    if (!lit && !near) continue;
    const pts = dp(r, near ? (c <= 2 ? 1.2 : 1.8) : 3);
    if (pts.length < 2) continue;
    roads.push({ c: c | (lit ? 0 : UNLIT), r: pts });
    if (lit) litKm += pts.reduce((s, p, i) => (i ? s + Math.hypot(p[0] - pts[i - 1][0], p[1] - pts[i - 1][1]) : 0), 0) / 1000;
  }
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
      r = clipRect(r, ...WATER_CLIP);
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
  if (r && Math.hypot(...mid(r)) < R_BUILD) { if (area(r) < 0) r.reverse(); areas.push({ t: e.id === SQUARE ? 3 : t, r }); }
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
const flat = buildings.flatMap((b) => [{ h: b.h, k: b.k, r: b.r }, ...b.holes.map((r) => ({ h: b.h, k: b.k | HOLE, r }))]);
const lens = [
  block(flat, (b) => [Math.round(b.h * 2), b.k]),
  block(roads, (r) => [r.c]),
  block(water, (w) => [w.t]),
  block(areas, (a) => [a.t]),
  block(marks, (m) => [m.id]),
];
const header = new Int32Array([3, flat.length, lens[0], roads.length, lens[1], water.length, lens[2], areas.length, lens[3], marks.length, lens[4], Math.round(LON0 * 1e6), Math.round(LAT0 * 1e6)]);
const body = new Int16Array(data);
fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, Buffer.concat([Buffer.from(header.buffer), Buffer.from(body.buffer)]));
const roadKm = roads.reduce((s, r) => s + r.r.reduce((t, p, i) => (i ? t + Math.hypot(p[0] - r.r[i - 1][0], p[1] - r.r[i - 1][1]) : 0), 0), 0) / 1000;
console.log(`ishodište (konkatedrala): lon ${LON0}, lat ${LAT0} · osvijetljeno ${litKm.toFixed(0)} km ulica`);
console.log(`zgrade ${buildings.length} (iz relacija ${relN}, dvorišta ${holeN}) · ceste ${roads.length} (${roadKm.toFixed(0)} km) · voda ${water.length} · površine ${areas.length} · ${(fs.statSync(OUT).size / 1024).toFixed(0)} kB`);
const hot = byId.get('way' + HOTEL);
console.log('hotel centar m:', toM({ lon: (hot.bounds.minlon + hot.bounds.maxlon) / 2, lat: (hot.bounds.minlat + hot.bounds.maxlat) / 2 }).map((v) => v.toFixed(1)).join(', '));
