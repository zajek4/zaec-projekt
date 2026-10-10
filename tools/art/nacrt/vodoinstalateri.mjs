// LIST 02 · Vodoinstalateri — pogled na zid kupaonice s instalacijom, M 1:20 (2,8 u = 1 cm).
// Vertikala odvoda Ø 110 i uspon hladne vode u kutu, zaporni ventil iza revizijskog otvora, bojler 80 L
// sa sigurnosnim ventilom na ulazu hladne vode, umivaonik na +0,85, kutni ventili, sifon i
// odvod u zidu s padom 2 % prema vertikali. Svjetlo: spoj tople vode na bojleru, kap — "curi bojler".
export const meta = {
  slug: 'vodoinstalateri',
  list: '02',
  name: 'Vodoinstalateri',
  view: 'POGLED NA ZID KUPAONICE A · M 1:20',
  web: 'HITNO · INTERVENCIJE · UPIT',
  title: 'Pogled na zid kupaonice s vodoinstalacijom, mjerilo 1:20',
  desc: 'Tehnički crtež zida kupaonice: vertikala odvoda i uspon vode u kutu, zaporni ventil iza revizijskog otvora, bojler sa sigurnosnim ventilom, umivaonik s kutnim ventilima i sifonom te odvod s padom prema vertikali. Oznake 01–04 povezuju dijelove instalacije s dijelovima weba vodoinstalatera. Spoj tople vode na bojleru, s kapi, označen je toplim svjetlom.',
  lamp: { time: '02:40 · HITNO', search: 'curi bojler' },
  mvb: '420 262 680 562',
  mobileCallout: 'c02',
};

export function draw(b) {
  const m = 280; // u po metru
  const FL = 880; // gotov pod
  const y = (h) => FL - h * m;
  const CEIL = y(2.6);
  const B = { x0: 600, x1: 726, y0: y(2.1), y1: y(2.1) + 224 }; // bojler Ø 45 × 80 cm
  const cIn = 640; // ulaz hladne
  const hOut = 686; // izlaz tople
  const basin = { x0: 820, x1: 1000, top: y(0.85) };
  const av = y(0.55); // kutni ventili
  const riser = 1135;
  const stack = [1068, 1099]; // vertikala odvoda Ø 110

  // 1 osi, fuge pločica
  b.g('nd nd-1', () => {
    for (let h = 0.3; h < 2.6; h += 0.3) b.line(380, y(h), 1180, y(h), 'ln-tile');
    for (let x = 380 + 0.6 * m; x < 1180; x += 0.6 * m) b.line(x, CEIL, x, FL, 'ln-tile');
    b.line((basin.x0 + basin.x1) / 2, basin.top - 120, (basin.x0 + basin.x1) / 2, FL + 30, 'ln-con');
    b.line((B.x0 + B.x1) / 2, B.y0 - 60, (B.x0 + B.x1) / 2, FL + 30, 'ln-con');
  });

  // 2 zid, pod, strop; vertikala i uspon u kutu
  b.g('nd nd-2', () => {
    b.line(380, CEIL, 1180, CEIL, 'ln-2');
    b.rect(380, FL, 800, 44, 'cut', ` fill="${b.url('hz')}"`);
    b.breakV(380, CEIL, FL);
    b.line(stack[0], CEIL, stack[0], FL, 'ln-3');
    b.line(stack[1], CEIL, stack[1], FL, 'ln-3');
    b.line(riser, CEIL, riser, FL, 'cut-w');
  });

  // 3 bojler, umivaonik, armature
  b.g('nd nd-3', () => {
    b.rect(B.x0, B.y0, B.x1 - B.x0, B.y1 - B.y0, 'cut-w', ' rx="30"');
    b.rect(B.x0 + 10, B.y0 + 10, B.x1 - B.x0 - 20, B.y1 - B.y0 - 30, 'ln-3', ' rx="24"'); // spremnik
    b.rect(B.x0 + 20, B.y0 + 18, 14, 8, 'ln-2'); // nosači
    b.rect(B.x1 - 34, B.y0 + 18, 14, 8, 'ln-2');
    b.rect(648, B.y1 - 18, 30, 12, 'ln-2'); // prirubnica grijača
    b.circle(663, B.y1 - 58, 9, 'ln-2'); // termostat
    // umivaonik u pogledu, slavina, kutni ventili
    b.d(`M${basin.x0} ${basin.top} H${basin.x1} V${basin.top + 10} Q${basin.x1 - 18} ${basin.top + 60} ${(basin.x0 + basin.x1) / 2} ${basin.top + 62} Q${basin.x0 + 18} ${basin.top + 60} ${basin.x0} ${basin.top + 10} Z`, 'cut-w');
    b.d(`M900 ${basin.top} V${basin.top - 26} H932 V${basin.top - 18} H912 V${basin.top}`, 'ln-2');
    for (const x of [880, 940]) {
      b.circle(x, av, 6, 'ln-2');
      b.line(x, av - 6, x, basin.top + 36, 'ln-2');
    }
  });

  // 4 razvod, sigurnosni ventil, sifon i odvod
  b.g('nd nd-4', () => {
    // hladna: uspon → zaporni ventil → kutni ventil → bojler (preko sigurnosnog ventila)
    b.poly([[riser, av], [940, av]], 'ln-2');
    b.poly([[940, av], [cIn, av], [cIn, B.y1]], 'ln-2');
    b.d(`M${cIn - 12} 572 L${cIn + 12} 584 V572 L${cIn - 12} 584 Z`, 'ln-2'); // sigurnosni ventil
    b.poly([[cIn + 12, 578], [cIn + 30, 578], [cIn + 30, 612]], 'ln-2');
    b.d(`M${cIn + 22} 612 H${cIn + 38} L${cIn + 33} 624 H${cIn + 27} Z`, 'ln-2'); // lijevak
    // topla: bojler → kutni ventil
    b.poly([[hOut, B.y1], [hOut, av + 22], [880, av + 22], [880, av + 6]], 'ln-2');
    // zaporni ventil na usponu, iza revizijskog otvora
    b.rect(1078, 612, 92, 88, 'ln-2');
    b.d(`M${riser - 9} 646 L${riser + 9} 664 V646 L${riser - 9} 664 Z`, 'ln-2');
    b.line(riser, 655, riser + 22, 642, 'ln-2');
    // sifon i odvod u zidu s padom prema vertikali
    b.d(`M910 ${basin.top + 62} V700 Q910 722 926 722 Q942 722 942 708 V700`, 'ln-2');
    b.poly([[942, 708], [960, 708], [960, 744]], 'ln-2');
    b.line(960, 744, stack[0], 749, 'ln-3');
    b.d(`M${stack[0] - 22} 741 l10 5 -10 5`, 'ln-dim');
  });

  // 5 kote
  b.g('nd nd-5', () => {
    // visina umivaonika i pad odvoda leže na mobilnom izrezu u zatamnjenju kadra
    if (b.v !== 'm') {
      b.dim([790, FL], [790, basin.top], '+0,85', { side: -12 });
      b.line(790, basin.top, basin.x0 - 4, basin.top, 'ln-dim');
      b.text(970, 772, 'PAD 2 %', 't-dim');
    }
    b.text(1040, CEIL + 40, 'Ø 110', 't-dim', ' text-anchor="end"');
  });

  // ključ: tlocrt kupaonice, strelica pogleda A na zid s instalacijom
  b.key(() => {
    const [kx, ky] = [800, 176];
    b.rect(kx, ky, 150, 96, 'ln-2');
    b.rect(kx, ky - 8, 150, 8, 'ln-2');
    b.rect(kx + 104, ky + 2, 18, 12, 'ln-2');
    b.rect(kx + 16, ky + 2, 30, 14, 'ln-2');
    b.line(kx + 75, ky + 84, kx + 75, ky + 30, 'ln-sec');
    b.d(`M${kx + 69} ${ky + 40} L${kx + 75} ${ky + 28} L${kx + 81} ${ky + 40}`, 'ln-2');
    b.text(kx + 84, ky + 80, 'A', 't-key');
    b.text(kx, ky + 122, 'KLJUČ · TLOCRT', 't-small');
  });

  // 6 oznake i svjetlo
  b.g('nd nd-6', () => {
    b.callout('01', [riser + 4, 650], [[1064, 560], [1056, 560]], 'ZAPORNI VENTIL', '→ Hitni poziv', true);
    b.callout('02', [B.x1, 380], [[780, 330], [800, 330]], 'BOJLER', '→ Intervencije');
    b.callout('03', [926, 722], [[926, 800], [760, 800]], 'SIFON · ODVOD', '→ Prije / poslije', true);
    b.callout('04', [cIn, 690], [[600, 650], [590, 650]], 'SPOJ', '→ Upit s fotografijom', true);
    b.rect(hOut - 7, B.y1 + 6, 14, 12, 'lamp-fill');
    b.d(`M${hOut} ${B.y1 + 24} Q${hOut + 5} ${B.y1 + 32} ${hOut} ${B.y1 + 36} Q${hOut - 5} ${B.y1 + 32} ${hOut} ${B.y1 + 24} Z`, 'lamp-fill');
    b.lamp({ at: [hOut, B.y1 + 18], d: [760, 470], m: [750, 470] });
  });
}
