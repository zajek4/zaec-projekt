// LIST 04 · Krovopokrivači — presjek krovišta A–A, M 1:20 (prototip art direkcije, prenesen 1:1).
// Redoslijed slojeva: rog → izolacija → paropropusna folija → kontraletve 5 cm → letve 3/5 na 33 cm → crijep
// s nosom na letvi; oluk na strehi, sljemenjača i sljemenjak. Svjetlo: crijep pomaknut nakon nevremena.
import { H, W } from './std.mjs';

export const meta = {
  slug: 'krovopokrivaci',
  list: '04',
  name: 'Krovopokrivači',
  view: 'PRESJEK KROVIŠTA A–A · M 1:20',
  web: 'RADOVI · MATERIJALI · PROCJENA',
  title: 'Presjek krovišta, mjerilo 1:20',
  desc: 'Tehnički crtež krova nagiba 40°: rog, toplinska izolacija, kontraletve, letve i crijep, oluk na strehi i sljeme. Oznake 01–04 povezuju dijelove krova s dijelovima weba krovopokrivača. Jedan crijep pomaknut je nakon nevremena i označen toplim svjetlom.',
  lamp: { time: '23:10 · NAKON NEVREMENA', search: 'popravak krova nakon nevremena', searchShort: 'popravak krova' },
  mvb: '470 300 680 562',
  mobileCallout: 'c02',
};

export function draw(b) {
  const A = 40;
  const rad = (A * Math.PI) / 180;
  const ex = 650;
  const ey = 740; // oslonac roga na zidnoj ploči
  const L = 640; // oslonac → sljeme uz kosinu
  const cm = 3.6;
  const g = (x, y) => [ex + x * Math.cos(rad) + y * Math.sin(rad), ey - x * Math.sin(rad) + y * Math.cos(rad)];
  const path = (list, cls, close = true, attrs = '') => b.path(list.map(([x, y]) => g(x, y)), cls, close, attrs);

  // 1 konstrukcija
  b.g('nd nd-1', () => {
    const a = g(-330, 0);
    const c = g(L + 70, 0);
    b.line(a[0], a[1], c[0], c[1], 'ln-con');
    b.line(300, ey, W - 20, ey, 'ln-con');
    const [sx] = g(L, 0);
    b.line(sx, 30, sx, H - 30, 'ln-con');
  });

  // 2 nosiva konstrukcija: zid, serklaž, zidna ploča, rog, izolacija, folija, kontraletve
  const r = 18 * cm;
  const k = 5 * cm;
  b.g('nd nd-2', () => {
    b.rect(ex - 80, ey + 42, 118, H - ey, 'cut', ` fill="${b.url('hz')}"`);
    b.rect(ex - 80, ey + 12, 118, 30, 'cut', ` fill="${b.url('hz')}"`);
    b.rect(ex - 30, ey - 2, 52, 14, 'cut-w');
    path([[-150, 0], [L, 0], [L, -r], [-150, -r]], 'cut-w');
    path([[24, -3], [L - 24, -3], [L - 24, -r + 3], [24, -r + 3]], 'wool', true, ` fill="${b.url('wool')}"`);
    path([[-150, -r - 2], [L, -r - 2]], 'ln-3', false);
    path([[-150, -r - 2], [L, -r - 2], [L, -r - 2 - k], [-150, -r - 2 - k]], 'cut-w');
  });

  // 3 pokrov: letve 3/5 na 33 cm i crijep (nagnute pločice: sjedaju na letvu gore, na crijep ispod dolje)
  const lb = -r - 2 - k;
  const bt = lb - 3 * cm;
  const t = 2.2 * cm;
  const tl = 42 * cm;
  const xs = [];
  const tiles = [];
  const LAMP = 2;
  b.g('nd nd-3', () => {
    for (let x = -128; x < L - 60; x += 33 * cm) {
      path([[x, lb], [x + 5 * cm, lb], [x + 5 * cm, bt], [x, bt]], 'cut');
      xs.push(x);
    }
    xs.forEach((x, i) => {
      const top = x + 5 * cm + 4;
      const low = top - tl;
      tiles.push([low, top]);
      if (i === LAMP) {
        // pomaknut: zakrenut i podignut s letve
        path([[low + 10, bt - t - 30], [top + 16, bt - 12], [top + 12, bt - 12 - t], [low + 6, bt - 2 * t - 30]], 'lamp-fill');
        return;
      }
      path([[low, bt - t], [top, bt], [top, bt - t], [low, bt - 2 * t]], 'tile');
      path([[top - 6, bt], [top - 2, bt], [top - 2, bt + 3 * cm * 0.6], [top - 6, bt + 3 * cm * 0.6]], 'nib');
    });
    // sljeme: druga polovica krova (iza presjeka) isprekidano, sljemenjača i sljemenjak
    const [apx, apy] = g(L, bt - 2 * t);
    b.d(`M${apx.toFixed(1)} ${apy.toFixed(1)} l${(220 * Math.cos(rad)).toFixed(1)} ${(220 * Math.sin(rad)).toFixed(1)}`, 'ln-beyond');
    const [rx, ry] = g(L, -r / 2);
    b.rect(rx - 14, ry - 6, 28, 34, 'cut', ` fill="${b.url('hz')}"`);
    b.d(`M${(apx - 34).toFixed(1)} ${(apy + 8).toFixed(1)} Q${apx.toFixed(1)} ${(apy - 34).toFixed(1)} ${(apx + 34).toFixed(1)} ${(apy + 8).toFixed(1)}`, 'tile');
  });
  const [apx, apy] = g(L, bt - 2 * t);

  // 4 streha i oluk
  const [gx, gy] = g(-150, bt - 2 * t);
  b.g('nd nd-4', () => {
    b.d(`M${(gx - 58).toFixed(1)} ${(gy + 10).toFixed(1)} a28 28 0 0 0 56 0 M${(gx - 2).toFixed(1)} ${(gy + 10).toFixed(1)} l6 -6`, 'cut-w', ' fill="none"');
    b.line(gx - 36, gy + 38, gx - 36, H + 10, 'ln-2');
    b.line(gx - 24, gy + 38, gx - 24, H + 10, 'ln-2');
  });

  // 5 kote
  b.g('nd nd-5', () => {
    const R = 150;
    const a0 = [ex + R, ey];
    const a1 = [ex + R * Math.cos(rad), ey - R * Math.sin(rad)];
    b.d(`M${a0[0].toFixed(1)} ${a0[1].toFixed(1)} A${R} ${R} 0 0 0 ${a1[0].toFixed(1)} ${a1[1].toFixed(1)}`, 'ln-dim', ' fill="none"');
    const m = [ex + (R + 16) * Math.cos(rad / 2), ey - (R + 16) * Math.sin(rad / 2)];
    b.text(m[0], m[1] + 5, '40°', 't-dim');
    if (b.v !== 'm') {
      const a = g(xs[3] + 5 * cm, bt - 2 * t - 18);
      const c = g(xs[4] + 5 * cm, bt - 2 * t - 18);
      b.P('<g class="dim-33">');
      b.line(a[0], a[1], c[0], c[1], 'ln-dim');
      for (const q of [a, c]) b.line(q[0] - 6, q[1] + 6, q[0] + 6, q[1] - 6, 'ln-dim');
      const mm = [(a[0] + c[0]) / 2, (a[1] + c[1]) / 2];
      b.P(`<text class="t-dim" text-anchor="middle" transform="translate(${(mm[0] - 10).toFixed(1)} ${(mm[1] - 10).toFixed(1)}) rotate(-40)">33</text></g>`);
    }
    // visinska kota sljemena: na mobilnom izrezu bila bi u zatamnjenju kadra
    if (b.v !== 'm') {
      const [, sy] = g(L, 0);
      const X = W - 34;
      b.line(X, ey, X, sy, 'ln-dim');
      for (const yy of [ey, sy]) {
        b.line(X - 6, yy + 6, X + 6, yy - 6, 'ln-dim');
        b.line(X - 16, yy, X + 8, yy, 'ln-dim');
      }
      b.P(`<text class="t-dim" text-anchor="middle" transform="translate(${X - 12} ${((ey + sy) / 2).toFixed(1)}) rotate(-90)">+2,52</text>`);
    }
  });

  // ključ: tlocrt krova (streha dolje i gore, sljeme po sredini); presjek A–A ide okomito preko sljemena
  b.key(() => {
    const [kx, ky] = [560, 64];
    b.rect(kx, ky + 14, 170, 100, 'ln-2');
    b.line(kx, ky + 64, kx + 170, ky + 64, 'ln-2');
    // nagib: strelice niz krovne plohe, od sljemena prema strehi
    for (const [y0, y1] of [[ky + 54, ky + 28], [ky + 74, ky + 100]]) {
      const d = y1 > y0 ? -6 : 6;
      b.d(`M${kx + 40} ${y0} V${y1} m-4 ${d} l4 ${-d} l4 ${d}`, 'ln-dim');
    }
    b.line(kx + 118, ky - 4, kx + 118, ky + 132, 'ln-sec');
    b.text(kx + 122, ky - 8, 'A', 't-key');
    b.text(kx + 122, ky + 148, 'A', 't-key');
    b.text(kx, ky + 178, 'KLJUČ · TLOCRT KROVA', 't-small');
  });

  // 6 oznake i svjetlo
  b.g('nd nd-6', () => {
    let [lo, tp] = tiles[4];
    let c = g((lo + tp) / 2, bt - 2 * t);
    b.callout('01', c, [[c[0] + 60, c[1] + 120], [c[0] + 90, c[1] + 120]], 'POKROV', '→ Vrste krova');
    c = g(xs[1] + 8, lb - 2);
    b.callout('02', c, [[c[0] + 64, c[1] + 64], [c[0] + 94, c[1] + 64]], 'LETVE · KONTRALETVE', '→ Proces i jamstvo', false, { p: [[850, 655], [862, 655]], t1: 'LETVE' });
    b.callout('03', [gx - 30, gy + 18], [[gx - 90, gy - 60], [gx - 120, gy - 60]], 'OLUK · OPŠAV', '→ Limarski radovi', true);
    c = [apx, apy - 14];
    b.callout('04', c, [[c[0] - 60, c[1] - 80], [c[0] - 90, c[1] - 80]], 'SLJEME', '→ Prije / poslije', true);
    [lo, tp] = tiles[LAMP];
    c = g((lo + tp) / 2 + 8, bt - 2 * t - 26);
    // tekst svjetla počinje na x 508: najuži vidljivi kadar (tablet, 47vw) vidi od x ≈ 492
    b.lamp({ at: c, d: [508, c[1] - 198], m: [480, c[1] - 174] });
  });
}
