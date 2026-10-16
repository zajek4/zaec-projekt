// LIST OS · Izrada web stranica Osijek — cijeli Osijek na stvarnoj karti (OSM, isti podaci kao naslovnica): Drava i
// glavne ulice. Svjetlo je sjedište studija (koordinate iz zadanih postavki teme), isprekidani krug je grad (3 km),
// a smjerovi na rubu kruga su Slavonija i Baranja s cestovnim udaljenostima zaokruženim na 5 km. Oznake vežu kartu s
// blokom „Što dobivate u Osijeku“: sastanak uživo, poznavanje tržišta, ostatak Hrvatske na daljinu.
import { mapPaths } from './city.mjs';

export const meta = {
  slug: 'izrada-web-stranica-osijek',
  list: 'OS',
  name: 'Osijek',
  view: 'KARTA GRADA · M 1:13 333',
  web: '',
  title: 'Karta Osijeka sa sjedištem studija i smjerovima prema Slavoniji i Baranji',
  desc: 'Stvarna karta Osijeka s Dravom i glavnim ulicama. Sjedište studija svijetli toplim svjetlom, isprekidani krug obuhvaća grad, a smjerovi na rubu vode prema Baranji, Đakovu i Vukovaru. Oznake: u Osijeku sastanak uživo, u Slavoniji i Baranji po dogovoru, za ostatak Hrvatske rad na daljinu.',
  lamp: { time: 'PON–PET · SASTANAK UŽIVO', search: 'izrada web stranica osijek', searchShort: 'web stranica osijek' },
  mvb: '520 170 680 562',
  mobileCallout: null,
  thumb: false,
  tb: ['WEB STUDIO · OSIJEK', 'LIST OS', 'Osijek', 'KARTA GRADA · M 1:13 333', 'OSIJEK · SLAVONIJA · BARANJA'],
};

const S = 0.075; // jedinica lista po metru
const C = [0, -700]; // središte izreza (m od konkatedrale)
const O = [860, 470];
const STUDIO = [50, -510]; // 45,5550 N · 18,6955 E (zaec/inc/options.php)

export function draw(b) {
  const clip = b.v === 'm' ? [500, 150, 1220, 760] : [-20, -20, 1220, 1020];
  const m = mapPaths({ o: O, c: C, s: S, clip, minLen: 6 });
  const [sx, sy] = m.P(STUDIO);
  const R = 3000 * S;

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

  // 3 grad (3 km) i orijentiri
  b.g('nd nd-3', () => {
    b.circle(sx, sy, R, 'ln-3');
    const [kx, ky] = m.P([0, 0]);
    b.circle(kx, ky, 4, 'nib');
    if (b.v === 'd') {
      b.text(kx - 12, ky - 10, 'KONKATEDRALA', 't-small', ' text-anchor="end"');
      b.text(1010, m.P([0, 400])[1] - 6, 'DRAVA', 't-small');
      b.text(1172, 820, '© OPENSTREETMAP', 't-small', ' text-anchor="end"');
    }
  });

  // 4 smjerovi prema Slavoniji i Baranji: strelica izvan kruga grada
  b.g('nd nd-4', () => {
    // [smjer u stupnjevima, natpis, mjesto natpisa (desktop) i poravnanje]
    const dirs = [
      [-80, 'BARANJA · 30 KM', [934, 150], 'start'],
      [128, 'ĐAKOVO · 35 KM', [652, 742], 'end'],
      [40, 'VUKOVAR · 35 KM', [1188, 700], 'end'],
    ];
    for (const [deg, t, [tx, ty], anchor] of dirs) {
      const a = (deg * Math.PI) / 180;
      const [c, s] = [Math.cos(a), Math.sin(a)];
      const p0 = [sx + c * (R + 12), sy + s * (R + 12)];
      const p1 = [sx + c * (R + 92), sy + s * (R + 92)];
      b.line(p0[0], p0[1], p1[0], p1[1], 'ln-2');
      const h = 10;
      b.poly([[p1[0] - h * Math.cos(a - 0.45), p1[1] - h * Math.sin(a - 0.45)], p1, [p1[0] - h * Math.cos(a + 0.45), p1[1] - h * Math.sin(a + 0.45)]], 'ln-2');
      if (b.v === 'd') b.text(tx, ty, t, 't-small', ` text-anchor="${anchor}"`);
    }
    b.circle(sx, sy, 15, 'lamp-fill');
    b.circle(sx, sy, 5, 'lamp-ln');
  });

  // 5 kota polumjera grada
  b.g('nd nd-5', () => {
    b.dim([sx + 20, sy], [sx + R, sy], '3 KM', { side: -12 });
  });

  // 6 oznake i svjetlo
  b.g('nd nd-6', () => {
    b.callout('01', [sx - R * 0.7, sy + R * 0.7], [[640, sy + R * 0.7 + 60], [622, sy + R * 0.7 + 60]], 'GRAD', '→ Kod vas ili na kavi', true);
    const tip = (deg) => [sx + Math.cos((deg * Math.PI) / 180) * (R + 92), sy + Math.sin((deg * Math.PI) / 180) * (R + 92)];
    b.callout('02', tip(-80), [[800, tip(-80)[1]], [790, tip(-80)[1]]], 'SLAVONIJA', '→ Uživo, po dogovoru', true);
    b.callout('03', tip(40), [[tip(40)[0], 760], [1096, 760]], 'HRVATSKA', '→ Na daljinu', true);
    b.lamp({ at: [sx, sy], r: 34, d: [560, 236, 'up'], m: [560, 236, 'up'] });
  });
}
