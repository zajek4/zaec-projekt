// U.07 · AI vidljivost — odgovor AI asistenta (općenit, bez imena i znakova proizvoda). Pitanje je stvarno, odgovor je
// kostur, a jedina stvarna rečenica je ona koja spominje naš obrt (svjetlo na nazivu). Rečenica je spojena s tri izvora
// nacrtana kao male kartice: web stranica, karta i recenzije; naš web je osvijetljen. Oznake vežu izvore s onim što AI
// stvarno koristi (blok „Kako radimo na AI vidljivosti“): sadržaj i schema, točni podaci, recenzije s kontekstom.
// Primjer obrta je izmišljen i bez brojki.
export const meta = {
  slug: 'ai-vidljivost',
  tvb: '400 300 760 570', // sličica na hubu: cijeli predmet usluge, ne samo svjetlo
  list: 'U7',
  name: 'AI vidljivost',
  title: 'Odgovor AI asistenta koji spominje vaš obrt, s tri izvora',
  desc: 'Razgovor s AI asistentom. Pitanje glasi: Curi bojler. Tko je dobar vodoinstalater u Osijeku? Odgovor je nacrtan kao kostur, a stvarna i osvijetljena je samo jedna rečenica: Vaš obrt — vodoinstalater u Osijeku. Rečenica je spojena s tri izvora nacrtana kao male kartice: web stranicom vasobrt.hr, kartom i recenzijama; naš web je osvijetljen. Toplo svjetlo je na nazivu obrta. Oznake povezuju pitanje s mjesečnom provjerom, web sa sadržajem i schemom, kartu s točnim podacima i recenzije s kontekstom.',
  lamp: { time: '22:10 · CURI BOJLER', search: 'tko je dobar vodoinstalater u Osijeku', searchShort: 'vodoinstalater u Osijeku' },
  mvb: '500 40 680 562',
  mobileCallout: null,
  tb: ['ZAEC · USLUGE', 'U.07', 'AI vidljivost', 'ODGOVOR AI-JA', 'WEB · SCHEMA · PODACI · RECENZIJE'],
};

const X0 = 560; // stupac odgovora
const X1 = 1150;

export function draw(b) {
  const m = b.v === 'm';
  const Q = [660, 48, X1, 180]; // oblačić pitanja
  const A = 318; // vrh osvijetljene rečenice
  const AH = 146;
  const CW = (X1 - X0 - 32) / 3;
  const CARD = { y: 548, h: 120, w: CW, x: [X0, X0 + CW + 16, X0 + 2 * (CW + 16)] };
  const port = (i) => [CARD.x[i] + CW / 2, A + AH];

  // 1 os razgovora
  b.g('nd nd-1', () => {
    b.line(X0 - 30, -20, X0 - 30, 1020, 'ln-con');
  });

  // 2 pitanje (stvarno, tinta) i kostur uvoda odgovora
  b.g('nd nd-2', () => {
    const [x0, y0, x1, y1] = Q;
    const r = 30;
    b.d(`M${x0 + r} ${y0}H${x1 - r}A${r} ${r} 0 0 1 ${x1} ${y0 + r}V${y1 - 6}A6 6 0 0 1 ${x1 - 6} ${y1}H${x0 + r}A${r} ${r} 0 0 1 ${x0} ${y1 - r}V${y0 + r}A${r} ${r} 0 0 1 ${x0 + r} ${y0}Z`, 'ln-2');
    b.say(x0 + 30, y0 + 54, 'Curi bojler. Tko je dobar', 32, 't-ui');
    b.say(x0 + 30, y0 + 98, 'vodoinstalater u Osijeku?', 32, 't-ui');
    // asistent: prsten na osi, uvod odgovora kao kostur
    b.circle(X0 - 30, 250, 16, 'mask');
    b.circle(X0 - 30, 250, 16, 'ln-2');
    b.circle(X0 - 30, 250, 4, 'nib');
    b.sk(X0, X1 - 90, 250, 'sk');
    b.sk(X0, X0 + 340, 282, 'sk');
  });

  // 3 izvori: male kartice; naš web je stvaran
  b.g('nd nd-3', () => {
    const [xw, xk, xr] = CARD.x;
    const { y, h, w } = CARD;
    // spojnice od rečenice do izvora
    for (const i of [1, 2]) b.line(port(i)[0], port(i)[1], port(i)[0], y, 'ln-3');
    b.line(port(0)[0], port(0)[1], port(0)[0], y, 'lit-ln');
    // karta: oznaka i retci
    b.rect(xk, y, w, h, 'ln-2', ' rx="10"');
    const px = xk + 32;
    const py = y + 48;
    b.d(`M${px} ${py}L${px - 8.8} ${py - 18.2}A10 10 0 1 1 ${px + 8.8} ${py - 18.2}Z`, 'ln-2');
    b.sk(xk + 58, xk + w - 22, y + 34, 'sk');
    b.sk(xk + 22, xk + w - 40, y + 78, 'sk');
    b.sk(xk + 22, xk + w - 76, y + 100, 'sk');
    // recenzije: zvjezdice (bez ocjene) i retci
    b.rect(xr, y, w, h, 'ln-2', ' rx="10"');
    for (let i = 0; i < 5; i++) b.star(xr + 32 + i * 24, y + 36, 9, 'ln-2');
    b.sk(xr + 22, xr + w - 22, y + 78, 'sk');
    b.sk(xr + 22, xr + w - 60, y + 100, 'sk');
    // naš web
    b.rect(xw, y, w, h, 'lit', ' rx="10"');
    if (!m) b.say(xw + 22, y + 44, 'vasobrt.hr', 24, 't-real');
    b.sk(xw + 22, xw + w - 22, y + 78, 'sk');
    b.sk(xw + 22, xw + w - 60, y + 100, 'sk');
  });

  // 4 jedina stvarna rečenica odgovora; priključci izvora na njezinu donjem rubu
  b.g('nd nd-4', () => {
    b.rect(X0, A, X1 - X0, AH, 'lit', ' rx="8"');
    b.say(X0 + 188, A + 50, '— vodoinstalater u Osijeku.', 28, 't-real');
    for (const i of [1, 2]) b.circle(...port(i), 7, 'mask');
    for (const i of [1, 2]) b.circle(...port(i), 7, 'ln-2');
    b.circle(...port(0), 7, 'mask');
    b.circle(...port(0), 7, 'lit-ln');
    b.circle(...port(0), 2.6, 'lit-star');
    b.rect(X0 + 20, A + 16, 152, 48, 'lamp-fill', ' rx="6"'); // istaknuto spominjanje u tekstu
    b.say(X0 + 96, A + 50, 'Vaš obrt', 28, 't-real t-lamp', ' text-anchor="middle"');
  });

  // 6 oznake i svjetlo
  b.g('nd nd-6', () => {
    const ly = CARD.y + CARD.h + 40;
    const at = (i) => [CARD.x[i] + 18, CARD.y + CARD.h];
    b.callout('01', [Q[0], 114], [[Q[0] - 22, 114]], 'PITANJE', '→ Mjesečna provjera', true);
    b.callout('02', at(0), [[at(0)[0], ly]], 'WEB', '→ Sadržaj i schema');
    b.callout('03', at(1), [[at(1)[0], ly]], 'KARTA', '→ Točni podaci');
    b.callout('04', at(2), [[at(2)[0], ly]], 'RECENZIJE', '→ S kontekstom');
    // svjetlo na nazivu: točka na donjem luku slova o, vodilica kreće ispod retka
    const cx = X0 + 104;
    const cy = A + 48;
    b.lamp({ at: [cx, cy], r: 50, d: [cx + 16, A + 112, 'down'], m: [cx + 16, A + 118, 'down'] });
  });
}
