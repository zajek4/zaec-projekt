// U.10 · Održavanje weba — dnevnik održavanja kao knjiga s rubrikama: tjedni teku slijeva (prošlost ispod naslova)
// do ovog tjedna uz desni rub, provjere su retci (popis iz registra: ažuriranja s provjerom rada, kopije izvan servera,
// nadzor dostupnosti, mjesečna provjera forme, brzina). Sve su upisi tintom; stvarna je samo ovotjedna provjera forme
// — probni upit koji je stigao — jer je najskuplji kvar onaj koji nitko ne primijeti (blok „Kvarovi koje ne vidite“).
// Tjedni su relativni (bez datuma), bez brojki o klijentu. Svjetlo: upit s forme kasno navečer nakon pretrage
// „adaptacija kupaonice“ (registar, pretrage Građevine) — stiže jer je forma ovaj tjedan provjerena.
export const meta = {
  slug: 'odrzavanje-weba',
  tvb: '480 160 720 540', // sličica na hubu: cijeli predmet usluge, ne samo svjetlo
  list: 'U10',
  name: 'Održavanje weba',
  title: 'Dnevnik održavanja web stranice: tjedni upisi provjera, osvijetljena ovotjedna provjera forme',
  desc: 'Dnevnik održavanja nacrtan kao tablica: tjedni teku slijeva do ovog tjedna uz desni rub, a retci su provjere — provjera forme, ažuriranja s provjerom rada, sigurnosna kopija izvan servera, nadzor dostupnosti i brzina. Upisi su tintom: kvačice, kvadratići kopija i neprekinuta crta nadzora; kota pokazuje četiri tjedna između probnih upita. Stvaran i osvijetljen je samo ovotjedni upis provjere forme: probni upit je stigao. Toplo svjetlo je kontrolna lampica tog upisa.',
  lamp: { time: '22:40 · UPIT S WEBA', search: 'adaptacija kupaonice' },
  mvb: '500 130 680 562',
  mobileCallout: null,
  index: 'DNEVNIK RADOVA', // stupac u kazalu usluga (≤ 15 znakova)
  tb: ['USLUGE', 'U.10', 'Održavanje weba', 'DNEVNIK ODRŽAVANJA', 'WEB · AŽURIRANJA · KOPIJE · FORMA'],
};

const R = 860; // lijevi rub stupca provjera; ovaj tjedan je stupac [R − CW, R]
const CW = 40; // tjedan = jedno polje rešetke lista
const N = 22; // tjedana u kadru (do lijevog ruba lista)
const XE = 1172; // desni rub tablice
const LX = 884; // tekst stupca provjera

// retci: naziv, opseg (riječi iz razina u registru), vrh, visina
const ROWS = [
  { id: 'forma', y: 220, h: 170 },
  { id: 'azur', t: 'AŽURIRANJA', s: 's provjerom rada', y: 390, h: 92 },
  { id: 'kopija', t: 'SIGURNOSNA KOPIJA', s: 'izvan servera', y: 482, h: 92 },
  { id: 'dost', t: 'DOSTUPNOST', s: 'nadzor', y: 574, h: 92 },
  { id: 'brzina', t: 'BRZINA', s: 'razina Aktivno', y: 666, h: 92 },
];
const BOT = 758;
const cx = (k) => R - CW * k - CW / 2; // središte stupca k (0 = ovaj tjedan)
const row = (id) => ROWS.find((r) => r.id === id);
const mid = (id) => row(id).y + row(id).h / 2;
// ažuriranja izlaze kad izađu: nepravilan ritam (crtež, ne podatak)
const AZ = new Set([1, 3, 4, 6, 9, 10, 12, 15, 17, 18, 20, 22]);

export function draw(b) {
  const tick = (x, y, s = 1, cls = 'ln-2') => b.poly([[x - 9 * s, y], [x - 3 * s, y + 7 * s], [x + 10 * s, y - 9 * s]], cls);

  // 1 rubrike: vodoravne crte redaka i tjedni stupci
  b.g('nd nd-1', () => {
    for (let k = 1; k <= N; k++) b.line(R - CW * k, ROWS[0].y, R - CW * k, BOT, k % 4 === 0 ? 'ln-3' : 'ln-tile');
    for (const r of ROWS.slice(1)) b.line(-20, r.y, XE, r.y, 'ln-frame');
    b.line(R, -20, R, 1020, 'ln-con'); // os „sada“: lijevo je prošlost, desno popis provjera
    b.line(R, ROWS[0].y, R, BOT, 'ln-2');
  });

  // 2 okvir tablice i os tjedana
  b.g('nd nd-2', () => {
    b.line(-20, ROWS[0].y, XE, ROWS[0].y, 'ln-2');
    b.line(-20, BOT, XE, BOT, 'ln-2');
    for (let k = 0; k <= N; k++) b.line(R - CW * k, BOT, R - CW * k, BOT + (k % 4 === 0 ? 14 : 7), 'ln-dim');
    if (b.v === 'd') {
      b.text(XE, ROWS[0].y - 16, 'DNEVNIK · vasobrt.hr', 't-small', ' text-anchor="end"');
      b.text(cx(0), BOT + 40, 'OVAJ TJ.', 't-small', ' text-anchor="middle"');
      for (const k of [4, 8]) b.text(R - CW * k, BOT + 40, `−${k} TJ.`, 't-small', ' text-anchor="middle"');
    }
    // mobilni izrez: donjih 25 % kadra (od y 130 + 0,75 · 562 ≈ 551) bez teksta
    const ok = (y) => b.v !== 'm' || y < 540;
    for (const r of ROWS.slice(1)) {
      const y2 = r.y + 38 + (b.v === 'm' ? 29 : 22);
      if (ok(y2)) {
        b.text(LX, r.y + 38, r.t, 't-call');
        b.text(LX, y2, r.s, 't-web');
      } else if (ok(r.y + 38)) b.text(LX, r.y + 38, r.t, 't-call');
      else b.sk(LX + 4, LX + 4 + r.t.length * 11, r.y + 32, 'sk'); // ispod: naziv kao kostur
    }
  });

  // 3 upisi tintom: forma jednom mjesečno, ažuriranja kad izađu, kopija svaki tjedan, nadzor stalno, brzina mjesečno
  b.g('nd nd-3', () => {
    for (let k = 4; k <= N; k += 4) tick(cx(k), mid('forma'));
    for (const k of AZ) tick(cx(k), mid('azur'));
    for (let k = 0; k <= N; k++) b.rect(cx(k) - 6, mid('kopija') - 6, 12, 12, 'ln-2');
    b.sk(-20, cx(0) + 6, mid('dost'), 'sk');
    for (let k = 2; k <= N; k += 4) tick(cx(k), mid('brzina'));
  });

  // 5 kota razmaka probnih upita: jednom mjesečno
  b.g('nd nd-5', () => {
    const y = mid('forma') - 46;
    b.dim([cx(8), y], [cx(4), y], '4 TJEDNA', { ext: [[[cx(8), y - 8], [cx(8), mid('forma') - 16]], [[cx(4), y - 8], [cx(4), mid('forma') - 16]]] });
  });

  // 4 ovotjedna provjera forme: stvaran upis
  b.g('nd nd-4', () => {
    const r = row('forma');
    b.rect(R - CW - 4, r.y + 8, 1184 - (R - CW - 4), r.h - 16, 'lit', ' rx="6"');
    b.say(LX, r.y + 50, 'Provjera forme', 24, 't-real t-dim2');
    b.say(LX, r.y + 100, 'Probni upit', 40, 't-real t-h');
    b.say(LX, r.y + 144, 'je stigao.', 40, 't-real t-h');
    // ovotjedno polje: upaljena kontrolna lampica (točka svjetla u prstenu, kao na karti Lokalnog SEO-a)
    b.rect(cx(0) - 16, mid('forma') - 16, 32, 32, 'lamp-fill', ' rx="5"');
    b.circle(cx(0), mid('forma'), 7.5, 'lamp-ln');
  });

  // 6 svjetlo
  b.g('nd nd-6', () => {
    const x = cx(0);
    const y = mid('forma');
    b.lamp({ at: [x, y], r: 34, d: [x - 16 - 231, 176, 'up'], m: [x - 16 - 313, 182, 'up'] });
  });
}
