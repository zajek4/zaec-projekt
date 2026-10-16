// U.03 · Landing stranice — oglas i stranica na koju vodi, jedno uz drugo. Oglas je kostur s oznakom OGLAS; njegov
// naslov je stvaran i ponavlja se na vrhu jedne duge stranice (kota „=“ između njih). Izbornik je uklonjen (crtkano,
// kao uklonjeni dio na nacrtu). Na stranici je stvaran samo naslov i jedan gumb (svjetlo); razlozi, dokaz i pitanja su
// kostur. Oznake vežu dijelove s anatomijom landinga (registar: „Od klika na oglas do upita“). Primjer je bez brojki.
export const meta = {
  slug: 'landing-stranice',
  tvb: '470 60 720 540', // sličica na hubu: cijeli predmet usluge, ne samo svjetlo
  list: 'U3',
  name: 'Landing stranice',
  title: 'Oglas i landing stranica s istim naslovom i jednim gumbom',
  desc: 'Lijevo je oglas nacrtan kao kostur s oznakom OGLAS i stvarnim naslovom „Servis klime prije ljeta“. Desno je jedna duga stranica: izbornik je uklonjen i nacrtan samo crtkano, na vrhu je isti naslov, a ispod njega jedini gumb, Zatražite termin, na kojem je toplo svjetlo. Znak jednakosti između dvaju naslova označava istu poruku. Ostatak stranice, tri razloga, dokaz i pitanja, nacrtan je samo kao kostur. Oznake povezuju isti naslov s obećanjem iz oglasa, uklonjeni izbornik s jednim gumbom, tri kartice s dijelom Zašto baš vi i citat s dokazom.',
  lamp: { time: '17:30 · PRVA VRUĆINA', search: 'servis klime cijena' },
  mvb: '494 144 680 562',
  mobileCallout: null,
  index: 'OGLAS I LANDING', // stupac u kazalu usluga (≤ 15 znakova)
  tb: ['USLUGE', 'U.03', 'Landing stranice', 'OGLAS I STRANICA', 'WEB · OGLAS · NASLOV · JEDAN GUMB'],
};

const P = { x0: 820, x1: 1170, top: 40, bot: 812 }; // stranica (traka)
const PX = P.x0 + 26; // lijevi rub sadržaja stranice
const PR = P.x1 - 26;
const A = { x0: 500, x1: 748, y0: 216, y1: 470 }; // oglas
const H1 = 304; // osnovna crta prvog retka obaju naslova
const CTA = { y: 500, h: 68 };
const HDR = P.top + 32; // sredina zaglavlja

export function draw(b) {
  // 1 obrisi: stranica (dno odrezano — nastavlja se) i oglas
  b.g('nd nd-1', () => {
    b.poly([[P.x0, P.bot], [P.x0, P.top], [P.x1, P.top], [P.x1, P.bot]], 'ln-2');
    b.breakH(P.bot, P.x0, P.x1);
    b.rect(A.x0, A.y0, A.x1 - A.x0, A.y1 - A.y0, 'ln-2', ' rx="8"');
  });

  // 2 kostur: zaglavlje s uklonjenim izbornikom, oglas, dijelovi stranice ispod prvog ekrana
  b.g('nd nd-2', () => {
    for (const dy of [-9, 0, 9]) b.line(PX, HDR + dy, PX + 26, HDR + dy, 'ln-3');
    b.rect(PX + 112, HDR - 13, 26, 26, 'ln-2', ' rx="4"');
    b.sk(PX + 152, PX + 226, HDR, 'sk');
    b.line(P.x0, P.top + 64, P.x1, P.top + 64, 'ln-h');
    // oglas: oznaka, adresa, opis
    b.text(A.x0 + 22, A.y0 + 40, 'OGLAS', 't-small');
    b.sk(A.x0 + 106, A.x0 + 196, A.y0 + 34, 'sk');
    b.sk(A.x0 + 24, A.x1 - 28, H1 + 76, 'sk');
    b.sk(A.x0 + 24, A.x1 - 66, H1 + 104, 'sk');
    b.sk(A.x0 + 24, A.x1 - 112, H1 + 132, 'sk');
    // tri razloga
    const ry = 598;
    for (let i = 0; i < 3; i++) {
      const x = PX + i * 104;
      b.rect(x, ry, 90, 92, 'ln-2', ' rx="6"');
      b.circle(x + 24, ry + 26, 10, 'ln-2');
      b.sk(x + 16, x + 74, ry + 58, 'sk');
      b.sk(x + 16, x + 50, ry + 76, 'sk');
    }
    // dokaz: citat
    const dy = 722;
    b.line(PX, dy - 6, PX, dy + 44, 'ln-2');
    b.sk(PX + 20, PR - 16, dy + 6, 'sk');
    b.sk(PX + 20, PR - 76, dy + 32, 'sk');
    // pitanja
    b.line(PX, 774, PR, 774, 'ln-h');
    b.sk(PX + 4, PR - 104, 794, 'sk');
    b.line(PR - 14, 794, PR, 794, 'ln-2');
    b.line(PR - 7, 787, PR - 7, 801, 'ln-2');
  });

  // 3 stvarno: naslov oglasa i isti naslov na vrhu stranice
  b.g('nd nd-3', () => {
    b.say(A.x0 + 24, H1, 'Servis klime', 29, 't-real t-h');
    b.say(A.x0 + 24, H1 + 35, 'prije ljeta', 29, 't-real t-h');
    b.rect(P.x0 + 10, P.top + 76, P.x1 - P.x0 - 20, 468, 'lit', ' rx="6"');
    b.sk(PX, PX + 76, H1 - 80, 'sk-b');
    b.say(PX, H1, 'Servis klime', 46, 't-real t-h');
    b.say(PX, H1 + 54, 'prije ljeta', 46, 't-real t-h');
    b.sk(PX, PR - 8, H1 + 106, 'sk');
    b.sk(PX, PR - 64, H1 + 134, 'sk');
  });

  // 4 jedini gumb (svjetlo)
  const cx = (PX + PR) / 2;
  b.g('nd nd-4', () => {
    b.rect(PX, CTA.y - CTA.h / 2, PR - PX, CTA.h, 'lamp-fill', ' rx="6"');
    b.say(cx, CTA.y + 9, 'Zatražite termin', 25, 't-real t-lamp', ' text-anchor="middle"');
  });

  // 5 ista poruka: znak jednakosti između naslova oglasa i naslova stranice
  const EQ = (A.x1 + P.x0) / 2;
  const ey = H1 - 12;
  b.g('nd nd-5', () => {
    const x1 = A.x0 + 222;
    const x2 = PX - 12;
    b.line(x1, ey, EQ - 14, ey, 'ln-dim');
    b.line(EQ + 14, ey, x2, ey, 'ln-dim');
    for (const x of [x1, x2]) b.line(x, ey - 8, x, ey + 8, 'ln-dim');
    b.line(EQ - 9, ey - 4, EQ + 9, ey - 4, 'ln-2');
    b.line(EQ - 9, ey + 4, EQ + 9, ey + 4, 'ln-2');
  });

  // 6 oznake i svjetlo
  b.g('nd nd-6', () => {
    b.callout('01', [EQ, ey - 10], [[EQ, 170], [EQ - 12, 170]], 'ISTI NASLOV', '→ Obećanje iz oglasa', true);
    b.callout('02', [PX - 6, HDR], [[P.x0 - 34, HDR]], 'BEZ IZBORNIKA', '→ Jedan gumb', true);
    b.callout('03', [PX, 644], [[P.x0 - 34, 644]], 'TRI RAZLOGA', '→ Zašto baš vi', true);
    b.callout('04', [PX, 740], [[P.x0 - 34, 740]], 'CITAT', '→ Dokaz', true);
    b.lamp({ at: [cx, CTA.y], r: 48, d: [522, 556, 'down'], m: [510, 546, 'down'] });
  });
}
