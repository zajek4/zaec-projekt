// LIST 07 · Trgovine i webshop — pogled na pročelje prizemne trgovine, M 1:50 (100 u = 1 m), uz detalj paketa
// u tri projekcije (nacrt, bokocrt, tlocrt), M 1:10. Iza stakla izloga isprekidano: police na stražnjem zidu;
// ispred njih podest s proizvodima. Svjetlo: jedan proizvod u izlogu — "naziv proizvoda + kupiti".
export const meta = {
  slug: 'trgovine-i-webshop',
  list: '07',
  name: 'Trgovine i webshop',
  view: 'POGLED NA PROČELJE · M 1:50',
  web: 'PROIZVODI · DOSTAVA · KONTAKT',
  title: 'Pogled na pročelje trgovine s izlogom i detalj paketa, mjerilo 1:50',
  desc: 'Tehnički crtež pročelja trgovine: izlog s podestom i proizvodima, police iza stakla, ulazna vrata s pločicom radnog vremena i natpis, uz detalj paketa u tri projekcije. Oznake 01–04 povezuju dijelove trgovine s dijelovima weba trgovine ili webshopa. Jedan proizvod u izlogu označen je toplim svjetlom.',
  lamp: { time: '22:15 · S KAUČA', search: 'naziv proizvoda + kupiti' },
  mvb: '450 282 680 562',
  tvb: '340 110 920 690',
  mobileCallout: 'c01',
};

export function draw(b) {
  const X = (m) => 430 + m * 100;
  const Y = (h) => 740 - h * 100;
  const R = (x0, h0, x1, h1, cls, attrs = '') => b.rect(X(x0), Y(h1), (x1 - x0) * 100, (h1 - h0) * 100, cls, attrs);
  const L = (x0, h0, x1, h1, cls) => b.line(X(x0), Y(h0), X(x1), Y(h1), cls);
  // paket 40 × 30 × 20 cm, detalj M 1:10 (2,4 u = 1 cm)
  const k = 2.4;
  const F = { x: 975, y: 200, w: 40 * k, h: 20 * k }; // nacrt
  const S = { x: 1095, y: 200, w: 30 * k, h: 20 * k }; // bokocrt
  const T = { x: 975, y: 268, w: 40 * k, h: 30 * k }; // tlocrt

  // 1 osi i projekcijske crte detalja
  b.g('nd nd-1', () => {
    b.line(400, Y(0), 950, Y(0), 'ln-con');
    if (b.v !== 'm') for (const yy of [F.y, F.y + F.h]) b.line(F.x + F.w, yy, S.x, yy, 'ln-con');
    if (b.v !== 'm') for (const xx of [F.x, F.x + F.w]) b.line(xx, F.y + F.h, xx, T.y, 'ln-con');
  });

  // 2 pročelje: rubovi, sokl, natpis, prekid iznad prizemlja
  b.g('nd nd-2', () => {
    L(0, 0, 0, 3.6, 'ln-2');
    L(5, 0, 5, 3.6, 'ln-2');
    b.breakH(Y(3.6), X(0), X(5));
    for (const [a, c] of [[0, 3.5], [4.6, 5]]) R(a, 0, c, 0.3, 'cut', ` fill="${b.url('hz')}"`);
    R(0.35, 2.95, 4.6, 3.4, 'ln-2');
    b.rect(X(-0.3), Y(0), 5.6 * 100, 12, 'cut', ` fill="${b.url('hz')}"`);
    b.line(X(-0.3), Y(0), X(5.3), Y(0), 'cut-w');
  });

  // 3 izlog i vrata
  b.g('nd nd-3', () => {
    R(0.35, 0.3, 3.05, 2.75, 'cut-w');
    R(0.43, 0.38, 2.97, 2.67, 'ln-2');
    R(3.5, 0, 4.6, 2.35, 'cut-w');
    R(3.58, 0.1, 4.52, 2.27, 'ln-2');
    R(3.5, 2.4, 4.6, 2.75, 'ln-2');
    L(4.4, 0.9, 4.4, 1.5, 'cut-w'); // ručka
    R(4.7, 1.4, 4.95, 1.8, 'ln-2'); // radno vrijeme
    for (const h of [1.5, 1.57, 1.64, 1.71]) L(4.74, h, 4.91, h, 'ln-h');
  });

  // 4 iza stakla: police i proizvodi (isprekidano), podest; detalj paketa
  b.g('nd nd-4', () => {
    for (const h of [1.35, 1.85, 2.35]) {
      L(0.55, h, 2.85, h, 'ln-beyond');
      for (let x = 0.65; x < 2.7; x += 0.42) R(x, h, x + 0.2 + ((x * 7) % 3) * 0.04, h + 0.22 + ((x * 5) % 2) * 0.06, 'ln-beyond');
    }
    R(0.75, 0.38, 2.65, 0.75, 'ln-2');
    R(0.95, 0.75, 1.3, 1.15, 'ln-2');
    b.d(`M${X(2.2)} ${Y(0.75)} V${Y(1.05)} L${X(2.26)} ${Y(1.18)} V${Y(1.3)} H${X(2.34)} V${Y(1.18)} L${X(2.4)} ${Y(1.05)} V${Y(0.75)}`, 'ln-2');
    // paket: nacrt, bokocrt, tlocrt; traka i adresnica
    if (b.v === 'm') return; // mobilni izrez: samo pročelje
    b.rect(F.x, F.y, F.w, F.h, 'cut-w');
    b.rect(F.x + F.w / 2 - 5, F.y, 10, F.h, 'ln-2');
    b.rect(S.x, S.y, S.w, S.h, 'cut-w');
    b.rect(S.x + S.w / 2 - 5, S.y, 10, S.h, 'ln-2');
    b.rect(T.x, T.y, T.w, T.h, 'cut-w');
    b.rect(T.x + T.w / 2 - 5, T.y, 10, T.h, 'ln-2');
    b.rect(T.x + 58, T.y + 10, 30, 22, 'ln-2');
    for (const dy of [17, 23, 28]) b.line(T.x + 62, T.y + dy, T.x + 84, T.y + dy, 'ln-h');
  });

  // 5 kote i nazivi
  b.g('nd nd-5', () => {
    b.dim([X(3.27), Y(0.3)], [X(3.27), Y(2.35)], '2,35', { side: 0 });
    b.text(X(2.475), Y(3.175) + 5, 'NATPIS', 't-small', ' text-anchor="middle"');
    if (b.v === 'd') {
      b.dim([F.x, F.y - 14], [F.x + F.w, F.y - 14], '40', { side: -8 });
      b.dim([S.x, S.y - 14], [S.x + S.w, S.y - 14], '30', { side: -8 });
      b.dim([S.x + S.w + 14, S.y], [S.x + S.w + 14, S.y + S.h], '20', { side: 10 });
      b.text(F.x, 372, 'DETALJ P · M 1:10', 't-small');
    }
  });

  // ključ: tlocrt trgovine, pogled A na pročelje
  b.key(() => {
    const [kx, ky] = [444, 120];
    b.rect(kx, ky, 140, 76, 'ln-2');
    b.line(kx + 10, ky + 8, kx + 130, ky + 8, 'ln-h');
    b.line(kx + 10, ky + 40, kx + 90, ky + 40, 'ln-h');
    b.rect(kx + 10, ky + 72, 70, 8, 'ln-2');
    b.rect(kx + 98, ky + 70, 22, 6, 'ln-2');
    b.line(kx + 70, ky + 120, kx + 70, ky + 90, 'ln-sec');
    b.d(`M${kx + 64} ${ky + 100} L${kx + 70} ${ky + 88} L${kx + 76} ${ky + 100}`, 'ln-2');
    b.text(kx + 80, ky + 118, 'A', 't-key');
    b.text(kx, ky + 150, 'KLJUČ · TLOCRT', 't-small');
  });

  // 6 oznake i svjetlo: jedan proizvod na podestu
  b.g('nd nd-6', () => {
    b.callout('01', [X(0.6), Y(2.5)], [[X(0.6), 320], [X(0.6) + 12, 320]], 'IZLOG', '→ Istaknuti proizvodi');
    b.callout('02', [X(2.82), Y(2.35)], [[740, 320], [752, 320]], 'POLICE', '→ Katalog');
    b.callout('03', [X(4.1), Y(0.5)], [[X(4.6), 786], [X(4.6) + 12, 786]], 'VRATA', '→ O trgovini i lokacija');
    b.callout('04', [T.x, T.y + 52], [[T.x - 16, T.y + 52], [T.x - 16, 410], [T.x - 8, 410]], 'PAKET', '→ Dostava i plaćanje');
    b.d(`M${X(1.52)} ${Y(0.75)} V${Y(1.2)} L${X(1.6)} ${Y(1.3)} H${X(1.98)} L${X(2.06)} ${Y(1.2)} V${Y(0.75)} Z M${X(1.52)} ${Y(1.2)} H${X(2.06)}`, 'lamp-fill');
    b.lamp({ at: [X(1.79), Y(1)], r: 36, d: [616, 806, 'down'], m: [616, 806, 'down'] });
  });
}
