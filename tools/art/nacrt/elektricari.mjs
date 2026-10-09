// LIST 03 · Električari — jednopolna shema kućnog razdjelnika R1, bez mjerila (simboli prema IEC 60617).
// Izvori gore: mreža preko dvosmjernog brojila i glavne sklopke (lijevo), FN elektrana preko izmjenjivača (desno).
// Potrošači dolje: skupina strujnih krugova iza zajedničke zaštitne strujne sklopke (FID) i novi krug punjača
// s vlastitom FID i trofaznim prekidačem. Svjetlo: novi krug punjača — "ugradnja punjača za auto".
export const meta = {
  slug: 'elektricari',
  list: '03',
  name: 'Električari',
  view: 'JEDNOPOLNA SHEMA R1 · BEZ MJERILA',
  web: 'USLUGE · OVLAŠTENJA · UPIT',
  title: 'Jednopolna shema kućnog razdjelnika s novim krugom punjača',
  desc: 'Tehnički crtež: priključak na mrežu preko brojila, glavna sklopka, zaštitna strujna sklopka i strujni krugovi kuće, fotonaponska elektrana s izmjenjivačem te novi strujni krug punjača za električni automobil. Oznake 01–04 povezuju dijelove sheme s dijelovima weba električara. Novi krug punjača označen je toplim svjetlom.',
  lamp: { time: '19:30 · AUTO U GARAŽI', search: 'ugradnja punjača za auto' },
  mvb: '520 250 680 562',
  tvb: '340 14 940 705',
  mobileCallout: 'c04',
};

export function draw(b) {
  const S1 = 260; // sabirnica iza glavne sklopke
  const S2 = 380; // sabirnica skupine iza FID
  const feed = 560;
  const fid = 640;
  const ev = 1000;
  const fn = 1080;
  const LOAD = 591;
  const circuits = [
    [620, 'RASVJETA', 'B10', 'lamp'],
    [690, 'UTIČNICE', 'B16', 'socket'],
    [760, 'KUHINJA', 'B16', 'socket'],
    [830, 'KUPAONICA', 'B16', 'socket'],
    [900, 'KLIMA', 'B16', 'motor'],
  ];

  // kontakt sklopke na okomitoj crti: nepomični gore (y0), zakretni dolje (y1)
  const contact = (x, y0, y1) => `M${x} ${y1} L${x - 13} ${y0 + 3}`;
  const cross = (x, y) => `M${x - 5} ${y - 5} L${x + 5} ${y + 5} M${x - 5} ${y + 5} L${x + 5} ${y - 5}`;
  const stub = (x, y) => `M${x - 7} ${y} H${x + 7}`;
  const toroid = (x, y) => `M${x - 11} ${y} A11 4.5 0 1 0 ${x + 11} ${y} A11 4.5 0 1 0 ${x - 11} ${y}`;
  // okidni član FID: kutija uz sklopku, isprekidana veza do toroida i do kontakta
  const relay = (x, side) => {
    const bx = side < 0 ? x - 40 : x + 26;
    b.rect(bx, 303, 14, 16, 'ln-2');
    const ix = side < 0 ? bx + 7 : bx + 7;
    b.poly([[x + side * 11, 346], [ix, 346], [ix, 319]], 'ln-3');
    b.line(side < 0 ? bx + 14 : bx, 311, x - 6.5, 311, 'ln-3');
  };

  // 1 konstrukcijske crte redova i ormar razdjelnika
  b.g('nd nd-1', () => {
    for (const yy of [S1, S2, LOAD]) b.line(420, yy, 1180, yy, 'ln-con');
    b.rect(470, 148, 670, 322, 'ln-beyond');
  });

  // 2 priključak: mreža, brojilo, glavna sklopka, sabirnica
  b.g('nd nd-2', () => {
    b.line(feed, 18, feed, 66, 'ln-2');
    b.rect(feed - 25, 66, 50, 46, 'ln-2');
    for (const yy of [126, 134, 142]) b.line(feed - 8, yy + 6, feed + 8, yy - 6, 'ln-2'); // tri vodiča
    b.line(feed, 112, feed, 170, 'ln-2');
    b.d(`${stub(feed, 170)} ${contact(feed, 170, 206)}`, 'ln-2');
    b.line(feed, 206, feed, S1, 'ln-2');
    b.line(540, S1, 1100, S1, 'cut-w');
  });

  // 3 skupina kuće: FID, sabirnica skupine, prekidači i trošila
  b.g('nd nd-3', () => {
    b.line(fid, S1, fid, 292, 'ln-2');
    b.d(`${stub(fid, 292)} ${contact(fid, 292, 328)} ${toroid(fid, 346)}`, 'ln-2');
    relay(fid, -1);
    b.line(fid, 328, fid, S2, 'ln-2');
    b.line(600, S2, 920, S2, 'cut-w');
    for (const [x, , , kind] of circuits) {
      b.line(x, S2, x, 412, 'ln-2');
      b.d(`${cross(x, 412)} ${contact(x, 412, 446)}`, 'ln-2');
      b.line(x, 446, x, LOAD - 13, 'ln-2');
      if (kind === 'lamp') {
        b.circle(x, LOAD, 12, 'ln-2');
        b.d(`M${x - 8.5} ${LOAD - 8.5} L${x + 8.5} ${LOAD + 8.5} M${x - 8.5} ${LOAD + 8.5} L${x + 8.5} ${LOAD - 8.5}`, 'ln-2');
      } else if (kind === 'socket') {
        b.d(`M${x - 13} ${LOAD + 9} A13 13 0 0 1 ${x + 13} ${LOAD + 9} M${x - 16} ${LOAD + 9} H${x + 16}`, 'ln-2');
        b.line(x, LOAD - 13, x, LOAD - 4, 'ln-2');
      } else {
        b.circle(x, LOAD, 13, 'ln-2');
      }
    }
    for (const x of [feed, fid, ev, fn]) b.circle(x, S1, 3, 'nib');
    for (const [x] of [[fid], ...circuits]) b.circle(x, S2, 3, 'nib');
  });

  // 4 FN elektrana: paneli, izmjenjivač, prekidač; oprema novog kruga (FID i prekidač) bez žice
  b.g('nd nd-4', () => {
    b.rect(1040, 28, 80, 48, 'ln-2');
    for (const x of [1060, 1080, 1100]) b.line(x, 28, x, 76, 'ln-h');
    b.line(1040, 52, 1120, 52, 'ln-h');
    b.line(fn, 76, fn, 98, 'ln-2');
    b.rect(1058, 98, 44, 40, 'ln-2');
    b.line(1058, 138, 1102, 98, 'ln-h');
    b.d('M1064 106 H1074 M1064 111 H1074 M1084 129 q3 -5 6 0 t6 0', 'ln-2');
    b.line(fn, 138, fn, 202, 'ln-2');
    b.d(`${cross(fn, 202)} ${contact(fn, 202, 236)}`, 'ln-2');
    b.line(fn, 236, fn, S1, 'ln-2');
    relay(ev, 1);
  });

  // 5 oznake opreme
  b.g('nd nd-5', () => {
    b.text(feed + 14, 34, 'NN MREŽA', 't-dim');
    b.text(feed, 95, 'kWh', 't-dim', ' text-anchor="middle"');
    b.text(feed + 36, 95, 'BROJILO', 't-dim');
    b.text(feed + 15, 192, 'GLAVNA SKLOPKA', 't-dim');
    if (b.v !== 'm') b.text(594, 316, 'FID 30 mA', 't-dim', ' text-anchor="end"'); // mobilni izrez je reže
    b.text(986, 316, 'FID 30 mA', 't-dim', ' text-anchor="end"');
    b.text(1062, 230, 'B16 · 3P', 't-dim', ' text-anchor="end"');
    b.text(ev + 10, 444, 'C16 · 3P', 't-dim');
    for (const [x, name, cb, kind] of circuits) {
      b.text(x + 8, 444, cb, 't-dim');
      b.P(`<text class="t-dim" transform="translate(${x + 19} 566) rotate(-90)">${name}</text>`);
      if (kind === 'motor') b.text(x, LOAD + 5, 'M', 't-dim', ' text-anchor="middle"');
    }
    if (b.v !== 'm') b.text(470, 492, 'RAZDJELNIK R1', 't-small');
  });

  // ključ: tlocrt kuće s garažom, razdjelnik R1 i mjesto punjača P, trasa novog kabela
  b.key(() => {
    const [kx, ky] = [670, 40];
    b.rect(kx, ky, 90, 64, 'ln-2');
    b.rect(kx + 90, ky + 16, 46, 48, 'ln-2');
    b.rect(kx + 4, ky + 22, 6, 14, 'ln-2');
    b.rect(kx + 126, ky + 42, 6, 14, 'ln-2');
    b.poly([[kx + 10, ky + 29], [kx + 20, ky + 29], [kx + 20, ky + 49], [kx + 126, ky + 49]], 'ln-3');
    b.text(kx + 14, ky + 20, 'R', 't-key');
    b.text(kx + 112, ky + 36, 'P', 't-key');
    b.text(kx, ky + 88, 'KLJUČ · TLOCRT KUĆE', 't-small');
  });

  // 6 oznake i svjetlo: novi krug punjača (žica, kontakti, toroid) i zidni punjač u garaži
  b.g('nd nd-6', () => {
    b.callout('01', [fid - 6.5, 311], [[700, 300], [708, 300]], 'FID', '→ Ovlaštenja');
    b.callout('02', [620, LOAD + 12], [[620, 760], [640, 760]], 'STRUJNI KRUGOVI', '→ Kvarovi · instalacije');
    b.callout('03', [1040, 52], [[1000, 52]], 'FN ELEKTRANA', '→ Solari', true);
    b.callout('04', [ev, 712], [[ev, 770], [ev + 12, 770]], 'PUNJAČ', '→ Brzi upit');
    b.d(`M${ev} ${S1} V292 ${stub(ev, 292)} ${contact(ev, 292, 328)} ${toroid(ev, 346)} M${ev} 328 V412 ${cross(ev, 412)} ${contact(ev, 412, 446)} M${ev} 446 V660`, 'lamp-ln');
    b.rect(ev - 24, 660, 48, 52, 'lamp-fill', ' rx="4"');
    b.circle(ev, 686, 9, 'ln-2');
    b.lamp({ at: [ev, 686], r: 44, d: [689, 0, 'h'], m: [600, 0, 'h'] });
  });
}
