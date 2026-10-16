// LIST 03 · Stolarija, kuhinje i interijeri — pogled prozora iznutra, 1200 × 1400 mm, M 1:10.
// Dvokrilni prozor sa stupom: lijevo krilo okretno, desno okretno-nagibno. Simbol otvaranja po normi: isprekidane
// crte kreću od strane šarki, vrh trokuta je na strani kvake. Svjetlo: toplo okno desnog krila (kuća navečer).
export const meta = {
  slug: 'stolarija-kuhinje-i-interijeri',
  list: '03',
  name: 'Stolarija i interijeri',
  view: 'POGLED PROZORA · M 1:10',
  web: 'RADOVI · MATERIJALI · UPIT',
  title: 'Pogled dvokrilnog prozora s kotama, mjerilo 1:10',
  desc: 'Tehnički crtež prozora 1200 × 1400 mm gledanog iznutra: okvir, srednji stup, dva krila sa simbolom otvaranja (lijevo okretno, desno okretno-nagibno), kvake, klupica i kote. Oznake 01–03 povezuju dijelove prozora s dijelovima weba stolarije. Okno desnog krila označeno je toplim svjetlom.',
  lamp: { time: 'NEDJELJA · PRIJE ZIME', search: 'zamjena prozora cijena', searchShort: 'zamjena prozora' },
  mvb: '440 220 680 562',
  mobileCallout: '', // mobilni izrez je uzak: samo svjetlo
};

export function draw(b) {
  const k = 0.3667; // u po mm: 1200 mm = 440 u
  const X = (mm) => 536 + mm * k;
  const Y = (mm) => 200 + mm * k;
  const R = (x0, y0, x1, y1, cls, attrs = '') => b.rect(X(x0), Y(y0), (x1 - x0) * k, (y1 - y0) * k, cls, attrs);
  const L = (x0, y0, x1, y1, cls) => b.line(X(x0), Y(y0), X(x1), Y(y1), cls);
  // krila: vanjski rub krila i rub stakla (profil krila 80 mm)
  const sash = { l: [70, 565], r: [635, 1130] };
  const glass = (s) => [s[0] + 80, 150, s[1] - 80, 1250];

  // 1 osi: sredina otvora i visina kvake
  b.g('nd nd-1', () => {
    L(600, -120, 600, 1520, 'ln-con');
    L(-120, 700, 1320, 700, 'ln-con');
  });

  // 2 otvor u zidu, okvir (štok) i srednji stup
  b.g('nd nd-2', () => {
    R(-40, -40, 1240, 1400, 'ln-h'); // špaleta
    R(0, 0, 1200, 1400, 'cut-w');
    R(70, 70, 1130, 1330, 'ln-2');
    R(565, 70, 635, 1330, 'ln-2');
    // klupica s okapnicom
    R(-80, 1400, 1280, 1440, 'ln-2');
    L(-80, 1452, 1280, 1452, 'ln-h');
  });

  // 3 krila i stakla
  b.g('nd nd-3', () => {
    for (const s of [sash.l, sash.r]) {
      R(s[0], 70, s[1], 1330, 'cut-w');
      const [a, c, d, e] = glass(s);
      R(a, c, d, e, 'ln-2');
      // brtva: tanka crta 12 mm uz staklo
      R(a - 12, c - 12, d + 12, e + 12, 'ln-h');
    }
  });

  // 4 simboli otvaranja i kvake
  b.g('nd nd-4', () => {
    const [la, lb, lc, ld] = glass(sash.l);
    const [ra, rb, rc, rd] = glass(sash.r);
    // lijevo: okretno, šarke lijevo → vrh na desnoj strani (kvaka uz stup)
    b.poly([[X(la), Y(lb)], [X(lc), Y((lb + ld) / 2)], [X(la), Y(ld)]], 'ln-3');
    // desno: okretno (šarke desno) i nagibno (šarke dolje)
    b.poly([[X(rc), Y(rb)], [X(ra), Y((rb + rd) / 2)], [X(rc), Y(rd)]], 'ln-3');
    b.poly([[X(ra), Y(rd)], [X((ra + rc) / 2), Y(rb)], [X(rc), Y(rd)]], 'ln-3');
    // kvake na visini osi (700 mm)
    for (const x of [535, 665]) {
      R(x - 12, 660, x + 12, 740, 'ln-2');
      L(x, 700, x, 850, 'ln-2');
    }
  });

  // 5 kote
  b.g('nd nd-5', () => {
    b.dim([X(0), Y(-150)], [X(1200), Y(-150)], '1200', { ext: [[[X(0), Y(-50)], [X(0), Y(-170)]], [[X(1200), Y(-50)], [X(1200), Y(-170)]]] });
    if (b.v !== 'm') {
      b.dim([X(0), Y(-75)], [X(600), Y(-75)], '600', { ext: [[[X(600), Y(-50)], [X(600), Y(-95)]]] });
      b.dim([X(600), Y(-75)], [X(1200), Y(-75)], '600');
    }
    b.dim([X(-110), Y(1400)], [X(-110), Y(0)], '1400', { ext: [[[X(-50), Y(0)], [X(-130), Y(0)]], [[X(-90), Y(1400)], [X(-130), Y(1400)]]] });
    if (b.v !== 'm') {
      b.text(X(318), Y(1215), 'OKRETNO', 't-small', ' text-anchor="middle"');
      b.text(X(882), Y(1215), 'OKR.-NAGIBNO', 't-small', ' text-anchor="middle"');
    }
  });

  // 6 oznake i svjetlo: okno desnog krila
  b.g('nd nd-6', () => {
    const [ra, rb, rc, rd] = glass(sash.r);
    b.callout('01', [X(1110), Y(330)], [[992, Y(330)], [1000, Y(330)]], 'KRILO', '→ Galerija radova');
    b.callout('02', [X(1165), Y(820)], [[992, Y(820)], [1000, Y(820)]], 'PROFIL', '→ Materijali');
    b.callout('03', [X(1280), Y(1420)], [[X(1280), Y(1440) + 40], [X(1280) + 8, Y(1440) + 40]], 'MJERE', '→ Upit s mjerama');
    R(ra, rb, rc, rd, 'lamp-fill', ' style="fill:rgba(255,207,138,.09)"');
    b.lamp({ at: [X((ra + rc) / 2), Y(980)], d: [600, 800, 'down'], m: [470, 300, 'up'] });
  });
}
