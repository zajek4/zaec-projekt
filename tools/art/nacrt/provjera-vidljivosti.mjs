// P.01 · Besplatna provjera vidljivosti — izvješće provjere kao ispitni list: Vaš obrt i tri konkurenta (K1–K3) u
// stupcima, retci su ono što provjeravamo (registar: Google profil, recenzije, web, brzina, mobitel, mjerenje, AI
// odgovori). Polja su prazna, kostur — rezultati se ne izmišljaju. Stvaran je naš stupac i blok „Tri koraka koja
// najviše donose“ (brojevi stvarni, koraci kostur jer ovise o provjeri). Pečat: ručna provjera.
export const meta = {
  slug: 'provjera-vidljivosti',
  tvb: '440 200 760 570', // sličica na hubu: cijeli predmet usluge, ne samo svjetlo
  list: 'P1',
  name: 'Provjera vidljivosti',
  title: 'Izvješće besplatne provjere vidljivosti: vaš obrt i tri konkurenta, tri koraka koja najviše donose',
  desc: 'Ispitni list izvješća provjere vidljivosti. U stupcima su vaš obrt i tri lokalna konkurenta, u retcima ono što se provjerava: Google profil, recenzije, sadržaj weba, brzina, mobitel, mjerenje i odgovori AI asistenata. Polja su prazna jer rezultat daje tek provjera. Osvijetljen je stupac vašeg obrta i blok s tri koraka koja najviše donose; pečat označava ručnu provjeru.',
  lamp: { time: '18:05 · KVAR KLIME', search: 'servis klime' },
  mvb: '504 60 680 562',
  mobileCallout: null,
  tb: ['ZAEC · PROVJERA', 'P.01', 'Provjera vidljivosti', 'IZVJEŠĆE PROVJERE', 'GOOGLE · RECENZIJE · WEB · AI'],
};

const PX0 = 520; // list izvješća
const PX1 = 1172;
const PY0 = 70;
const PY1 = 816;
const TX = 544; // unutarnji rub (tekst)
const C0 = 830; // stupac Vaš obrt
const C1 = 970; // K1, K2, K3
const CK = (PX1 - C1) / 3;
const HY = 140; // zaglavlje tablice
const RY = 250; // prvi redak
const RH = 48;
const LY = 222; // svjetlo i nazivi stupaca
const ROWS = ['GOOGLE PROFIL', 'RECENZIJE', 'WEB · SADRŽAJ', 'BRZINA', 'MOBITEL', 'MJERENJE', 'AI ODGOVORI'];
const TY = RY + RH * ROWS.length; // kraj tablice
const OY = TY + 16; // blok s tri koraka

export function draw(b) {
  // 1 list i rubrike
  b.g('nd nd-1', () => {
    b.rect(PX0, PY0, PX1 - PX0, PY1 - PY0, 'ln-2');
    for (let i = 1; i < ROWS.length; i++) b.line(PX0, RY + i * RH, PX1, RY + i * RH, 'ln-frame');
    for (let i = 1; i < 3; i++) b.line(C1 + i * CK, HY, C1 + i * CK, TY, 'ln-frame');
    b.line(C1, HY, C1, TY, 'ln-frame');
  });

  // 2 zaglavlje lista i tablice, nazivi redaka
  b.g('nd nd-2', () => {
    b.line(PX0, HY, PX1, HY, 'ln-2');
    b.line(PX0, RY, PX1, RY, 'ln-2');
    b.line(PX0, TY, PX1, TY, 'ln-2');
    b.line(C0, HY, C0, TY, 'ln-2');
    b.text(TX, 100, 'IZVJEŠĆE O VIDLJIVOSTI', 't-call');
    b.text(TX, b.v === 'm' ? 128 : 122, 'Google · karta · AI asistenti', 't-web');
    b.text((C1 + PX1) / 2, 178, 'KONKURENTI', 't-small', ' text-anchor="middle"');
    b.line(C1 + 14, 192, PX1 - 14, 192, 'ln-dim');
    for (let i = 0; i < 3; i++) b.text(C1 + CK * (i + 0.5), LY + 8, `K${i + 1}`, 't-call', ' text-anchor="middle"');
    // mobilni izrez: donjih 25 % kadra (od y ≈ 481) bez teksta, naziv retka tamo je kostur
    ROWS.forEach((t, i) => {
      const y = RY + i * RH + 30;
      if (b.v !== 'm' || y < 466) b.text(TX, y, t, 't-call');
      else b.sk(TX + 4, TX + 4 + t.length * 11, y - 6, 'sk');
    });
  });

  // 3 polja: kostur (rezultat daje tek provjera)
  b.g('nd nd-3', () => {
    ROWS.forEach((_, i) => {
      const y = RY + i * RH + RH / 2;
      b.sk(C0 + 30, C0 + 92, y, 'sk');
      for (let k = 0; k < 3; k++) b.sk(C1 + CK * k + 22, C1 + CK * (k + 1) - 22, y, 'sk');
    });
    // pečat: ručna provjera
    b.rect(1004, 80, 148, 60 - 2, 'ln-2', ' rx="3"');
    b.rect(1009, 85, 138, 48, 'ln-3', ' rx="2"');
    const m = b.v === 'm';
    b.text(1078, m ? 106 : 104, 'RUČNA', 't-small', ' text-anchor="middle"');
    b.text(1078, m ? 129 : 123, 'PROVJERA', 't-small', ' text-anchor="middle"');
  });

  // 4 naš stupac i tri koraka: stvarno
  b.g('nd nd-4', () => {
    b.rect(C0, HY, C1 - C0, TY - HY, 'lit');
    b.say(C0 + 40, LY + 8, 'Vaš obrt', 24, 't-real t-h');
    b.circle(C0 + 22, LY, 8, 'lamp-fill');
    b.rect(TX, OY, PX1 - 24 - TX, PY1 - 16 - OY, 'lit', ' rx="6"');
    b.say(TX + 24, OY + 46, 'Tri koraka koja najviše donose', 26, 't-real t-h');
    [0.7, 0.86, 0.6].forEach((w, i) => {
      const y = OY + 94 + i * 44;
      b.circle(TX + 44, y - 8, 16, 'lit-ln');
      b.say(TX + 44, y, String(i + 1), 20, 't-real t-b', ' text-anchor="middle"');
      b.sk(TX + 80, TX + 80 + (PX1 - 60 - TX - 80) * w, y - 8, 'sk');
    });
  });

  // 6 svjetlo: naš stupac
  b.g('nd nd-6', () => {
    // oznaka u praznom lijevom polju zaglavlja, kraj teksta 12 u prije crte stupca (širine: std.mjs, CH)
    b.lamp({ at: [C0 + 22, LY], r: 26, d: [C0 - 12 - 209, LY, 'h'], m: [C0 - 12 - 282, LY, 'h'] });
  });
}
