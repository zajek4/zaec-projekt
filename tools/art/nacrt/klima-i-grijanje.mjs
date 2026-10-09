// LIST 01 · Klima i grijanje — presjek vanjskog zida sa split uređajem, M 1:10 (7 u = 1 cm).
// Unutra (desno): unutarnja jedinica na montažnoj ploči 15 cm ispod stropa — usisna rešetka s filtrom,
// izmjenjivač oko tangencijalnog ventilatora, posuda kondenzata, lamela na izlazu. Zid: opeka 25 cm +
// toplinska izolacija 10 cm. Proboj Ø 65 s padom prema van; cijevi i odvod kondenzata niz pročelje do vanjske
// jedinice na konzoli, 10 cm od pročelja, ispod crte naslova (design/06, 4). Svjetlo: lamela — "klima ne hladi".
export const meta = {
  slug: 'klima-i-grijanje',
  list: '01',
  name: 'Klima i grijanje',
  view: 'PRESJEK ZIDA A–A · M 1:10',
  web: 'MONTAŽA · SERVIS · TERMIN',
  title: 'Presjek vanjskog zida sa split klima uređajem, mjerilo 1:10',
  desc: 'Tehnički crtež: unutarnja jedinica ispod stropa s filtrom, izmjenjivačem, ventilatorom i lamelom, proboj kroz zid s padom prema van te vanjska jedinica na konzoli. Oznake 01–04 povezuju dijelove uređaja s dijelovima weba klima servisa. Lamela unutarnje jedinice označena je toplim svjetlom.',
  lamp: { time: '15:40 · SRPANJ', search: 'klima ne hladi' },
  mvb: '580 200 680 562',
  mobileCallout: 'c02',
};

export function draw(b) {
  const wo = 451; // vanjsko lice (žbuka)
  const ins = [455, 525]; // izolacija 10 cm
  const wi = 700; // unutarnje lice opeke
  const ceil = [30, 170];
  const U = { x0: 706, x1: 857, y0: 275, y1: 485 }; // unutarnja jedinica 22 × 30 cm
  const sl = { i: [455, 500], e: [476, 521] }; // proboj: unutra viši, vani niži
  const O = { x0: 171, x1: 381, y0: 574, y1: 910 }; // vanjska jedinica 30 × 48 cm, ispod naslova na 1280–1920 px
  const oc = (O.y0 + O.y1) / 2;
  const fan = [790, 418];

  // 1 osi i konstrukcijske crte
  b.g('nd nd-1', () => {
    b.line(wi + 3, 20, wi + 3, 980, 'ln-con');
    b.line(120, (sl.e[0] + sl.e[1]) / 2 - 2, 1180, (sl.i[0] + sl.i[1]) / 2 - 22, 'ln-con');
    b.line(fan[0], 230, fan[0], 760, 'ln-con');
    b.line(fan[0] - 120, fan[1], fan[0] + 60, fan[1], 'ln-con');
  });

  // 2 presjek: zid, izolacija, strop, proboj
  b.g('nd nd-2', () => {
    b.rect(ins[1], ceil[0], wi - ins[1], 980 - ceil[0], 'cut', ` fill="${b.url('hz')}"`);
    b.rect(ins[0], -10, ins[1] - ins[0], 1010, 'cut', ` fill="${b.url('wool-v')}"`);
    b.line(wo, -10, wo, 1010, 'ln-2');
    b.line(wi + 3, ceil[1], wi + 3, 1010, 'ln-2');
    b.rect(wi, ceil[0], 1150 - wi, ceil[1] - ceil[0], 'cut', ` fill="${b.url('hz2')}"`);
    b.breakV(1150, ceil[0], ceil[1]);
    b.path([[wo - 4, sl.e[0]], [wi + 3, sl.i[0]], [wi + 3, sl.i[1]], [wo - 4, sl.e[1]]], 'mask');
    b.line(wo - 4, sl.e[0], wi + 3, sl.i[0], 'ln-2');
    b.line(wo - 4, sl.e[1], wi + 3, sl.i[1], 'ln-2');
  });

  // 3 unutarnja jedinica
  b.g('nd nd-3', () => {
    b.rect(wi + 3, U.y0 - 10, 5, U.y1 - U.y0 - 10, 'ln-2'); // montažna ploča
    b.d(`M${U.x0} ${U.y1} V${U.y0} H${U.x1 - 22} Q${U.x1} ${U.y0} ${U.x1} ${U.y0 + 22} V445 Q${U.x1} 468 838 474`, 'cut-w');
    b.line(U.x0, U.y1, 792, U.y1, 'cut-w');
    for (let x = 722; x < U.x1 - 18; x += 9) b.line(x, U.y0, x, U.y0 + 7, 'ln-h'); // usisna rešetka
    b.line(716, 291, 846, 291, 'ln-3'); // filtar
    // izmjenjivač: gornji i prednji dio oko ventilatora, stražnji kosi
    b.path([[722, 302], [842, 302], [846, 314], [726, 314]], 'cut', ` fill="${b.url('hz')}"`);
    b.path([[834, 316], [846, 316], [850, 410], [838, 410]], 'cut', ` fill="${b.url('hz')}"`);
    b.path([[724, 318], [738, 318], [764, 372], [750, 372]], 'cut', ` fill="${b.url('hz')}"`);
    // tangencijalni ventilator
    b.circle(fan[0], fan[1], 32, 'ln-2');
    b.circle(fan[0], fan[1], 10, 'ln-2');
    for (let a = 0; a < 360; a += 24) {
      const r = (a * Math.PI) / 180;
      b.line(fan[0] + 22 * Math.cos(r), fan[1] + 22 * Math.sin(r), fan[0] + 31 * Math.cos(r + 0.35), fan[1] + 31 * Math.sin(r + 0.35), 'ln-h');
    }
    b.d('M828 414 V426 H854 V414', 'ln-2'); // posuda kondenzata
    for (let x = 806; x < 840; x += 9) b.line(x, 470, x + 2, 482, 'ln-beyond'); // okomite lamele iza
    // cijevi iz stražnjeg dijela u proboj, odvod kondenzata isprekidano
    for (const [dy, cls] of [[12, 'ln-2'], [22, 'ln-2']]) {
      b.poly([[U.x0 + 14, sl.i[0] + dy], [wi + 3, sl.i[0] + dy], [wo - 4, sl.e[0] + dy], [wo - 20, sl.e[0] + dy]], cls);
    }
    b.poly([[841, 426], [841, 438], [U.x0 + 18, 438], [U.x0 + 18, sl.i[0] + 34], [wi + 3, sl.i[0] + 34], [wo - 4, sl.e[0] + 34], [wo - 8, sl.e[0] + 34], [wo - 8, 980]], 'ln-3');
  });

  // 4 pročelje: vanjska jedinica na konzoli
  b.g('nd nd-4', () => {
    // cijevi uz pročelje (između jedinice i zida, uz samo lice), da oznaka 04 iznad jedinice ne leži na njima
    b.poly([[wo - 20, sl.e[0] + 12], [wo - 24, sl.e[0] + 12], [wo - 24, O.y1 - 70], [O.x1, O.y1 - 70]], 'ln-2');
    b.poly([[wo - 20, sl.e[0] + 22], [wo - 16, sl.e[0] + 22], [wo - 16, O.y1 - 46], [O.x1, O.y1 - 46]], 'ln-2');
    b.rect(O.x0, O.y0, O.x1 - O.x0, O.y1 - O.y0, 'cut-w');
    b.rect(O.x1 - 22, O.y0 + 16, 12, O.y1 - O.y0 - 32, 'cut', ` fill="${b.url('hz')}"`); // izmjenjivač
    b.rect(232, oc - 22, 20, 44, 'ln-2'); // glavčina ventilatora
    b.line(242, oc - 22, 262, O.y0 + 38, 'ln-2');
    b.line(242, oc + 22, 262, O.y1 - 38, 'ln-2');
    for (let y = O.y0 + 16; y < O.y1 - 12; y += 12) b.line(O.x0 - 5, y, O.x0 + 5, y, 'ln-h'); // rešetka
    b.d(`M285 ${O.y1 - 8} V${O.y1 - 89} Q285 ${O.y1 - 109} 306 ${O.y1 - 109} Q327 ${O.y1 - 109} 327 ${O.y1 - 89} V${O.y1 - 8}`, 'ln-2'); // kompresor
    b.circle(O.x1 - 6, O.y1 - 70, 6, 'ln-2');
    b.circle(O.x1 - 6, O.y1 - 46, 5, 'ln-2');
    // konzola: krak i kosnik u presjeku (kosnik izlazi iz lista kao i zid), sidra u zidu; gumeni podlošci
    b.rect(196, O.y1, 22, 8, 'ln-2');
    b.rect(334, O.y1, 22, 8, 'ln-2');
    b.rect(160, O.y1 + 8, wo - 160, 14, 'cut', ` fill="${b.url('hz')}"`);
    b.line(wo, O.y1 + 165, 182, O.y1 + 22, 'cut-w');
    b.line(wo - 2, O.y1 + 15, wo + 90, O.y1 + 15, 'ln-2');
  });

  // 5 kote
  b.g('nd nd-5', () => {
    b.dim([O.x1, O.y1 - 16], [wo, O.y1 - 16], '10', { side: -12 }); // ispod spojeva cijevi
    if (b.v !== 'm') b.text(560, sl.i[0] - 20, 'Ø 65', 't-dim');
    if (b.v !== 'm') b.text(600, sl.i[1] + 34, 'PAD PREMA VAN', 't-dim', ' transform="rotate(4.8 600 534)"');
  });

  // ključ: tlocrt sobe (vanjski zid gore), jedinica na zidu i crta presjeka A–A kroz nju
  b.key(() => {
    const [kx, ky] = [985, 676];
    b.rect(kx, ky, 170, 96, 'ln-2');
    b.rect(kx - 9, ky - 9, 188, 9, 'ln-2');
    b.rect(kx + 44, ky + 2, 32, 9, 'ln-2');
    b.rect(kx + 50, ky - 30, 20, 14, 'ln-2');
    b.line(kx + 60, ky - 52, kx + 60, ky + 116, 'ln-sec');
    b.text(kx + 66, ky - 46, 'A', 't-key');
    b.text(kx + 66, ky + 124, 'A', 't-key');
    b.text(kx - 9, ky + 146, 'KLJUČ · TLOCRT SOBE', 't-small');
  });

  // 6 oznake i svjetlo
  b.g('nd nd-6', () => {
    b.callout('01', [790, 291], [[870, 210], [890, 210]], 'FILTER', '→ FAQ: koliko često servis');
    b.callout('02', [U.x1, 365], [[870, 340], [882, 340]], 'UNUTARNJA JEDINICA', '→ Montaža · servis · čišćenje', false, { p: [[880, 365], [880, 300], [888, 300]], t2: '→ Montaža · servis' });
    b.callout('03', [612, 486], [[612, 730], [720, 730]], 'PROBOJ I CIJEVI', '→ Upit za termin');
    // tekst od x 214: zadnji red naslova na 1600 × 900 ulazi u list do x ≈ 199 u; cijevi su desno od teksta (427+)
    b.callout('04', [178, O.y0], [[178, 538], [206, 538]], 'VANJSKA JEDINICA', '→ Radovi i recenzije');
    b.P('<path class="lamp-fill" pathLength="1" d="M796 488 L846 471 L848 477 L798 494 Z"/>');
    b.lamp({ at: [822, 483], d: [890, 590, 'down'], m: [834, 600, 'down'] });
  });
}
