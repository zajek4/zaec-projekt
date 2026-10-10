// U.05 · Lokalni SEO — stvarna karta središta Osijeka (OSM, isti podaci kao naslovnica): Drava, konkatedrala, glavne
// ulice. Tri oznake na karti kao u lokalnom rezultatu; naša je svjetlo, uz nju kartica profila. Oznake vežu dijelove s
// tri čimbenika koje Google navodi za lokalni poredak (blok „Što odlučuje tko je na karti“): relevantnost, udaljenost
// i istaknutost. Obrt je primjer bez brojki; udaljenost je izmjerena na karti.
import { mapPaths } from './city.mjs';

export const meta = {
  slug: 'lokalni-seo',
  list: 'U5',
  name: 'Lokalni SEO',
  title: 'Karta središta Osijeka s tri oznake lokalnog rezultata pretrage',
  desc: 'Stvarna karta središta Osijeka s Dravom, konkatedralom i glavnim ulicama. Tri oznake prikazuju lokalni rezultat pretrage „električar osijek“; naša oznaka svijetli toplim svjetlom, a uz nju je kartica profila s kategorijom i ocjenom. Kota mjeri udaljenost do onoga tko traži. Oznake povezuju kategoriju s relevantnošću, udaljenost s područjem rada i recenzije s istaknutošću.',
  lamp: { time: '21:40 · NESTALO STRUJE', search: 'električar osijek' },
  mvb: '500 300 680 562',
  mobileCallout: null,
  tb: ['ZAEC · USLUGE', 'U.05', 'Lokalni SEO', 'KARTA SREDIŠTA OSIJEKA', 'WEB · PROFIL · RECENZIJE · STRANICE'],
};

const S = 0.42; // jedinica lista po metru
const C = [300, -500]; // središte izreza karte (m od konkatedrale)
const O = [600, 500];

export function draw(b) {
  const clip = b.v === 'm' ? [480, 280, 1200, 880] : [-20, -20, 1220, 1020];
  const m = mapPaths({ o: O, c: C, s: S, clip });
  // oznaka na karti: glava kruga i vrh u točki (x, y)
  const pin = (x, y, r, cls) => {
    const hy = y - r * 2.3;
    b.d(`M${x} ${y}L${(x - r * 0.88).toFixed(1)} ${(hy + r * 0.48).toFixed(1)}A${r} ${r} 0 1 1 ${(x + r * 0.88).toFixed(1)} ${(hy + r * 0.48).toFixed(1)}Z`, cls);
    b.circle(x, hy, r * 0.36, cls === 'lamp-fill' ? 'lamp-ln' : 'ln-2');
  };
  const PIN = [700, 470];
  const ASK = [830, 790];

  // 1 voda i sporedne ulice
  b.g('nd nd-1', () => {
    if (m.water) b.d(m.water, 'map-w');
    if (m.roads[2]) b.d(m.roads[2], 'map-2');
  });

  // 2 glavne ulice
  b.g('nd nd-2', () => {
    if (m.roads[1]) b.d(m.roads[1], 'map-1');
    if (m.roads[0]) b.d(m.roads[0], 'map-0');
  });

  // 3 orijentiri i područje rada (1 km)
  b.g('nd nd-3', () => {
    const [kx, ky] = m.P([0, 0]);
    b.circle(kx, ky, 5, 'nib');
    if (b.v === 'd') {
      b.text(kx + 14, ky + 6, 'KONKATEDRALA', 't-small c-wide c-a85');
      b.text(905, 158, 'DRAVA', 't-small');
      b.text(1172, 820, '© OPENSTREETMAP', 't-small', ' text-anchor="end"');
    }
    b.circle(PIN[0], PIN[1], 1000 * S, 'ln-3');
  });

  // 4 tri oznake lokalnog rezultata; naša s karticom profila
  b.g('nd nd-4', () => {
    pin(590, 772, 15, 'ln-2');
    pin(1080, 262, 15, 'ln-2');
    b.rect(744, 404, 276, 138, 'lit', ' rx="8"');
    b.say(766, 446, 'Vaš obrt', 28, 't-real t-h');
    b.say(766, 480, 'Električar · otvoreno', 23, 't-real t-dim2');
    for (let i = 0; i < 5; i++) b.star(777 + i * 26, 512, 10, 'lit-star');
    b.sk(912, 990, 512, 'sk');
    pin(PIN[0], PIN[1], 19, 'lamp-fill');
    // tko traži: točka i kota do naše oznake
    b.circle(ASK[0], ASK[1], 7, 'ln-2');
    b.circle(ASK[0], ASK[1], 2.5, 'nib');
  });

  // 5 kota udaljenosti
  b.g('nd nd-5', () => {
    const km = (Math.hypot(ASK[0] - PIN[0], ASK[1] - PIN[1]) / S / 1000).toFixed(1).replace('.', ',');
    b.dim([PIN[0] + 4, PIN[1] + 10], [ASK[0] - 4, ASK[1] - 10], `${km} KM`, { side: 16 });
  });

  // 6 oznake i svjetlo
  b.g('nd nd-6', () => {
    b.callout('01', [960, 471], [[960, 336], [968, 336]], 'KATEGORIJA', '→ Relevantnost');
    b.callout('03', [995, 512], [[1028, 512]], 'RECENZIJE', '→ Istaknutost');
    b.callout('02', [(PIN[0] + ASK[0]) / 2 + 8, (PIN[1] + ASK[1]) / 2], [[1000, 640]], 'UDALJENOST', '→ Područje rada');
    b.lamp({ at: [PIN[0], PIN[1] - 44], r: 34, d: [520, 360, 'up'], m: [520, 360, 'up'] });
  });
}
