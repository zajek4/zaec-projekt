// U.08 · GA4 i praćenje konverzija — jednopolna shema mjerenja, istim simbolima kao list električara (IEC 60617):
// tri izvora (klik na poziv, poslana forma, kupnja) na sabirnici dataLayera, tag manager kao pretvarač, sklopka
// privole koju pokreće traka privole (Consent Mode v2), GA4 kao mjerni instrument, grananje prema oglasima i izvještaju
// i žarulja konverzije s pravim nazivom GA4 događaja (registar: tablica „Što točno pratimo“). Bez brojki.
export const meta = {
  slug: 'ga4-i-pracenje-konverzija',
  tvb: '400 160 800 600', // sličica na hubu: cijeli predmet usluge, ne samo svjetlo
  list: 'U8',
  name: 'GA4 i praćenje konverzija',
  title: 'Jednopolna shema mjerenja: od klika i forme do konverzije u GA4',
  desc: 'Shema nacrtana kao jednopolna električna shema. Gore su tri izvora: klik na poziv, poslana forma i kupnja, spojeni na sabirnicu dataLayer. Ispod je tag manager kao pretvarač, pa sklopka privole koju pokreće traka privole, zatim GA4 kao mjerni instrument. Iza njega se vod grana prema oglasima i izvještaju, a završava žaruljom konverzije s nazivom događaja generate_lead, osvijetljenom toplim svjetlom. Lijevo je ključ: stranica na mobitelu s tri mjesta na kojima nastaju izvori. Oznake povezuju tag manager, privolu i događaje s dijelovima usluge.',
  lamp: { time: '10:05 · POSLAN UPIT', search: 'servis klime cijena' },
  mvb: '480 378 680 562',
  mobileCallout: null,
  short: 'GA4 i konverzije', // naziv u kazalu usluga (puni naziv je preširok za stupac)
  tb: ['ZAEC · USLUGE', 'U.08', 'GA4 i praćenje konverzija', 'SHEMA MJERENJA', 'WEB · GTM · PRIVOLA · GA4'],
};

const SX = 820; // glavni vod
const IN = [[610, 'KLIK NA POZIV'], [SX, 'POSLANA FORMA'], [1030, 'KUPNJA']];
const BUS = 196;
const GTM = [262, 350]; // pretvarač (tag manager)
const SW = [418, 488]; // sklopka privole: nepomični kontakt, zakretni
const M = [574, 46]; // GA4: mjerni instrument
const J = 664; // čvor grananja
const L = [738, 20]; // žarulja konverzije

export function draw(b) {
  const m = b.v === 'm';
  const contact = (x, y0, y1) => `M${x - 8} ${y0}H${x + 8}M${x} ${y1}L${x - 16} ${y0 + 4}`;
  const blade = (y) => SX - (16 * (SW[1] - y)) / (SW[1] - SW[0] - 4); // x zakretnog kontakta na visini y

  // 1 konstrukcijske crte razina
  b.g('nd nd-1', () => {
    for (const y of [BUS, M[0], J]) b.line(-20, y, 1220, y, 'ln-con');
  });

  // 2 izvori, sabirnica, pretvarač, sklopka, instrument, vod do žarulje
  b.g('nd nd-2', () => {
    for (const [x] of IN) {
      b.circle(x, 108, 8, 'ln-2');
      b.line(x, 116, x, BUS, 'ln-2');
    }
    b.line(574, BUS, 1066, BUS, 'cut-w');
    b.line(-20, BUS, 566, BUS, 'ln-beyond'); // dataLayer ide kroz cijeli web
    b.line(SX, BUS, SX, GTM[0], 'ln-2');
    b.rect(SX - 60, GTM[0], 120, GTM[1] - GTM[0], 'ln-2');
    b.line(SX - 60, GTM[1], SX + 60, GTM[0], 'ln-h');
    b.line(SX, GTM[1], SX, SW[0], 'ln-2');
    b.d(contact(SX, SW[0], SW[1]), 'ln-2');
    b.line(SX, SW[1], SX, M[0] - M[1], 'ln-2');
    b.circle(SX, M[0], M[1], 'ln-2');
    b.line(SX, M[0] + M[1], SX, L[0] - L[1], 'ln-2');
    // grananje: oglasi lijevo, izvještaj desno
    b.line(648, J, 992, J, 'ln-2');
    b.circle(640, J, 8, 'ln-2');
    b.circle(1000, J, 8, 'ln-2');
    for (const x of [...IN.map((q) => q[0]), SX]) b.circle(x, BUS, 3, 'nib');
    b.circle(SX, J, 3, 'nib');
  });

  // 3 traka privole: kostur trake s gumbom, isprekidana veza do sklopke
  b.g('nd nd-3', () => {
    const ty = SW[0] + 8;
    b.rect(574, ty, 150, 60, 'ln-2', ' rx="6"');
    b.sk(592, 690, ty + 20, 'sk');
    b.sk(592, 640, ty + 40, 'sk');
    b.rect(660, ty + 32, 48, 18, 'ln-2', ' rx="9"');
    b.line(724, ty + 30, blade(ty + 30), ty + 30, 'ln-3');
  });

  // 4 oznake opreme i žarulja konverzije s nazivom događaja
  b.g('nd nd-4', () => {
    if (!m) for (const [x, t] of IN) b.text(x, 80, t, 't-dim', ' text-anchor="middle"');
    if (!m) b.text(925, BUS - 12, 'DATALAYER', 't-dim', ' text-anchor="middle"');
    b.text(574, SW[0] - 6, 'TRAKA PRIVOLE', 't-dim');
    b.text(SX, M[0] + 6, 'GA4', 't-dim', ' text-anchor="middle"');
    b.text(640, J - 22, 'OGLASI', 't-dim', ' text-anchor="middle"');
    b.text(1000, J - 22, 'IZVJEŠTAJ', 't-dim', ' text-anchor="middle"');
    const [ly, r] = L;
    b.circle(SX, ly, r, 'lamp-fill');
    const k = r * 0.7;
    b.d(`M${SX - k} ${ly - k}L${SX + k} ${ly + k}M${SX - k} ${ly + k}L${SX + k} ${ly - k}`, 'lamp-ln');
    b.say(SX + 40, ly + 10, 'generate_lead', 32, 't-real');
  });

  // ključ: stranica na mobitelu i tri mjesta na kojima nastaju izvori (isti priključni kružić kao gore na shemi)
  b.key(() => {
    const [kx, ky, kw, kh] = [340, 500, 140, 270];
    const port = (x, y) => b.circle(x, y, 6, 'ln-2');
    b.rect(kx, ky, kw, kh, 'ln-2', ' rx="16"');
    b.sk(kx + 18, kx + 62, ky + 24, 'sk');
    b.sk(kx + 18, kx + 120, ky + 54, 'sk-b');
    b.sk(kx + 18, kx + 92, ky + 74, 'sk');
    // poziv
    b.rect(kx + 18, ky + 92, 72, 24, 'ln-2', ' rx="12"');
    port(kx + 112, ky + 104);
    // forma
    b.rect(kx + 18, ky + 134, 104, 18, 'ln-2', ' rx="4"');
    b.rect(kx + 18, ky + 158, 104, 18, 'ln-2', ' rx="4"');
    b.rect(kx + 18, ky + 184, 60, 22, 'ln-2', ' rx="11"');
    port(kx + 100, ky + 195);
    // košarica
    b.rect(kx + 18, ky + 222, 46, 30, 'ln-2', ' rx="4"');
    b.sk(kx + 74, kx + 112, ky + 230, 'sk');
    port(kx + 112, ky + 246);
    b.text(kx, ky + kh + 30, 'KLJUČ · STRANICA', 't-small');
  });

  // 6 oznake i svjetlo
  b.g('nd nd-6', () => {
    const gy = (GTM[0] + GTM[1]) / 2;
    b.callout('01', [SX + 60, gy], [[948, gy]], 'TAG MANAGER', '→ Sve oznake');
    const sy = SW[0] + 38;
    b.callout('02', [blade(sy), sy], [[948, sy]], 'PRIVOLA', '→ Consent Mode v2');
    b.callout('03', [SX + M[1], M[0]], [[948, M[0]]], 'DOGAĐAJ', '→ Što točno pratimo');
    b.lamp({ at: [SX, L[0]], r: 40, d: [SX - 16 - 221, L[0], 'h'], m: [SX - 16 - 300, L[0], 'h'] });
  });
}
