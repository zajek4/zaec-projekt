// LIST 06 · Ugostiteljstvo i smještaj — kuća s apartmanima noću (tools/art/nacrt/izlog.mjs). Klasicistička jednokatnica
// sa šest osi i krovom na četiri vode; lijevo kolni ulaz u dvorište, do njega prozor s rešetkom. U prizemlju svijetle
// recepcija (pult, zvonce, ploča s ključevima), ulazna vrata sa stubištem prema sobama i blagovaonica za doručak.
// Natpis na tri jezika, na katu tamni prozori soba s griljama (neke zatvorene). Svjetlo: ploča s ključevima —
// gost na putu u 22:10 traži „apartmani + mjesto“.
import { G, street, rustica, shop, marker, legend, glowDefs, sash, shutters, sideChair, table, pendant } from './izlog.mjs';

export const meta = {
  slug: 'ugostiteljstvo-i-smjestaj',
  list: '06',
  name: 'Ugostiteljstvo i smještaj',
  head: 'ZAEC · DJELATNOSTI · IZLOZI',
  view: 'RECEPCIJA APARTMANA NOĆU',
  web: 'SMJEŠTAJ · GALERIJA · UPIT',
  title: 'Kuća s apartmanima noću u osječkoj ulici',
  desc: 'Crtež pročelja klasicističke jednokatnice noću. U prizemlju su osvijetljeni recepcija s pultom, zvoncem i pločom s ključevima, staklena ulazna vrata sa stubištem prema sobama i blagovaonica sa stolom, stolicama i švedskim stolom. Iznad recepcije je natpis Apartmani na tri jezika, na katu su tamni prozori soba s griljama, a lijevo kolni ulaz u dvorište. Legenda povezuje sobe sa smještajem i galerijom, recepciju s upitom i rezervacijom, a natpis s više jezika. Ploča s ključevima označena je toplim svjetlom.',
  lamp: { time: '22:10 · NA PUTU', search: 'apartmani + mjesto' },
  mvb: '490 330 680 562',
  mobileCallout: null,
  defs: glowDefs,
};

export function draw(b) {
  const [L, R] = [200, 1160]; // kuća: šest osi po 160 u
  const ax = (i) => L + 80 + i * 160; // osi 280 … 1080
  const GF = 516; // kordonski vijenac (pod kata)

  // 1 ulica i svjetlo na pločniku
  b.g('nd nd-1', () => {
    street(b, [[544, 656], [710, 810], [864, 976], [1024, 1136]]);
  });

  // 2 pročelja: susjed lijevo (prizemnica), kuća s apartmanima (krov, dimnjaci, kat s griljama, kolni ulaz), rub kuće desno
  b.g('nd nd-2', () => {
    // susjed: prizemnica s krovom na četiri vode
    b.path([[-200, 452], [110, 452], [190, 532]], 'ln-2', false);
    b.rect(-200, 532, 392, 12, 'ln-2');
    b.line(L, 544, L, G, 'ln-2');
    sash(b, 70, 616, 76, 140);
    sash(b, -110, 616, 76, 140);
    // krov s crijepom i dva dimnjaka
    const eave = 290;
    const ridge = 214;
    const run = 110;
    b.path([[L - 10, eave], [L - 10 + run, ridge], [R + 10 - run, ridge], [R + 10, eave]], 'ln-2', false);
    for (const y of [234, 254, 274]) {
      const k = ((eave - y) / (eave - ridge)) * run;
      b.line(L - 10 + k, y, R + 10 - k, y, 'ln-h');
    }
    for (const x of [430, 866]) {
      b.rect(x, 178, 30, 62, 'mask');
      b.rect(x, 178, 30, 62, 'ln-2');
      b.rect(x - 6, 170, 42, 8, 'ln-2');
    }
    b.rect(L - 16, eave, R - L + 32, 16, 'ln-2'); // vijenac
    b.line(L - 8, eave + 22, R + 8, eave + 22, 'ln-h');
    b.path([[L, G], [L, eave + 16], [R, eave + 16], [R, G]], 'ln-2', false);
    // kat: šest prozora soba; grilje otvorene ili zatvorene
    const open = [true, false, true, false, false, true];
    for (let i = 0; i < 6; i++) {
      const x = ax(i) - 40;
      sash(b, x, 338, 80, 146);
      shutters(b, x, 338, 80, 146, open[i]);
    }
    // kordonski vijenac i ugaoni kvadri prizemlja
    b.line(L, GF, R, GF, 'ln-2');
    b.line(L, GF + 8, R, GF + 8, 'ln-h');
    rustica(b, L, L + 22, GF + 8, G, 20);
    rustica(b, R - 22, R, GF + 8, G, 20);
    // kolni ulaz u dvorište: kameni okvir s lukom, zaglavnim kamenom, nadsvjetlom s rešetkom i krilima s vratašcima
    const [gx, gs, gr] = [280, 694, 54];
    b.d(`M${gx - 66} ${G}V${gs}A66 66 0 0 1 ${gx + 66} ${gs}V${G}`, 'ln-2');
    b.d(`M${gx - gr} ${gs}A${gr} ${gr} 0 0 1 ${gx + gr} ${gs}Z`, 'win');
    for (const a of [30, 60, 90, 120, 150]) {
      const r = (a * Math.PI) / 180;
      b.line(gx, gs, gx + gr * Math.cos(r), gs - gr * Math.sin(r), 'ln-h');
    }
    b.path([[gx - 10, gs - 72], [gx + 10, gs - 72], [gx + 7, gs - 48], [gx - 7, gs - 48]], 'mask');
    b.path([[gx - 10, gs - 72], [gx + 10, gs - 72], [gx + 7, gs - 48], [gx - 7, gs - 48]], 'ln-2');
    b.rect(gx - gr, gs, gr * 2, G - gs, 'ln-2');
    b.line(gx, gs, gx, G, 'ln-2');
    b.rect(gx - gr + 8, gs + 12, gr - 16, 44, 'ln-h');
    b.rect(gx - gr + 8, gs + 64, gr - 16, 42, 'ln-h');
    b.rect(gx + 10, gs + 14, gr - 20, G - gs - 14, 'ln-2'); // vratašca u desnom krilu
    b.circle(gx + gr - 18, 752, 2.5, 'nib');
    for (const s of [-1, 1]) b.d(`M${gx + s * 66} ${G - 22}Q${gx + s * 80} ${G - 20} ${gx + s * 80} ${G}`, 'ln-2');
    // prozor s rešetkom (soba u prizemlju)
    const wx = ax(1) - 40;
    sash(b, wx, 626, 80, 150, { t: 0 });
    for (let x = wx + 10; x < wx + 80; x += 12) b.line(x, 626, x, 776, 'ln-2');
    for (const y of [662, 742]) b.line(wx, y, wx + 80, y, 'ln-2');
    // rub više kuće desno
    b.path([[R + 22, G], [R + 22, 250], [1240, 250]], 'ln-2', false);
    b.line(R + 22, 262, 1240, 262, 'ln-h');
    sash(b, R + 52, 346, 80, 146, { hood: false });
    rustica(b, R + 22, 1240, GF + 8, G, 20);
  });

  // 3 prizemlje: natpis, recepcija, ulazna vrata sa stubištem, blagovaonica (toplo staklo)
  b.g('nd nd-3', () => {
    b.rect(540, 538, 276, 60, 'lit');
    b.say(678, 568, 'APARTMANI', 28, 't-real t-b t-sign', ' text-anchor="middle"');
    b.say(678, 593, 'ZIMMER · ROOMS', b.v === 'm' ? 23 : 18, 't-real t-sign', ' text-anchor="middle"');
    // recepcija: pult sa zvoncem, na zidu ploča s ključevima
    shop(b, 544, 626, 112, 150, 0, () => {
      b.rect(572, 676, 60, 42, 'sil-ln');
      const keys = [[1, 1, 0, 1], [1, 0, 1, 1]];
      keys.forEach((row, j) => row.forEach((k, i) => {
        const [x, y] = [584 + i * 12, 684 + j * 18];
        b.circle(x, y, k ? 2.6 : 1.6, 'sil');
        if (k) b.rect(x - 2.5, y + 2, 5, 9, 'sil');
      }));
      b.rect(548, 724, 104, 7, 'sil');
      b.rect(554, 731, 92, 45, 'sil');
      b.d('M620 724A10 8 0 0 1 640 724Z', 'sil');
      b.circle(630, 714, 2.5, 'sil');
    });
    // ulazna vrata s nadsvjetlom; iza stakla stubište prema sobama
    shop(b, 710, 614, 100, 186, 0, () => {
      const st = [[710, 800]];
      for (let i = 0; i < 7; i++) st.push([710 + i * 13, 786 - i * 14], [723 + i * 13, 786 - i * 14]);
      b.path([...st, [810, 702], [810, 716], [728, 800]], 'sil');
      b.line(712, 744, 800, 650, 'sil-ln');
    });
    b.line(726, 682, 726, 722, 'cut-w');
    // blagovaonica: stol sa stolicama, švedski stol s vrčem, šalicama i zdjelom
    shop(b, 864, 626, 112, 150, 0, () => {
      pendant(b, 920, 626, 22);
      table(b, 920, 776, 60, 18);
      b.rect(915, 692, 10, 14, 'sil', ' rx="3"');
      sideChair(b, 876, 776, 1);
      sideChair(b, 964, 776, -1);
    });
    shop(b, 1024, 626, 112, 150, 0, () => {
      pendant(b, 1080, 626, 22);
      b.rect(1040, 690, 82, 4, 'sil');
      for (let y = 674; y < 690; y += 4) b.rect(1046, y, 28, 2.5, 'sil');
      for (const x of [1086, 1104]) {
        b.rect(x, 677, 11, 13, 'sil');
        b.d(`M${x + 11} 680Q${x + 17} 683 ${x + 11} 687`, 'sil-ln');
      }
      b.rect(1030, 722, 100, 6, 'sil');
      b.rect(1036, 728, 88, 48, 'sil');
      b.d('M1043 722V706Q1043 698 1049 696L1047 690H1057Q1059 698 1059 706V722Z', 'sil');
      b.d('M1059 701Q1067 704 1059 714', 'sil-ln');
      b.rect(1074, 712, 12, 10, 'sil');
      b.rect(1074, 700, 12, 10, 'sil');
      b.d('M1098 710A14 11 0 0 0 1126 710Z', 'sil');
    });
  });

  // 6 legenda, brojevi i svjetlo
  b.g('nd nd-6', () => {
    marker(b, '01', [800, 400], 10, -8);
    marker(b, '02', [810, 680], 10, -8);
    marker(b, '03', [816, 568], 10, -8);
    legend(b, 968, 44, [
      ['01', 'SOBE', '→ Sobe i galerija'],
      ['02', 'RECEPCIJA', '→ Upit / rezervacija'],
      ['03', 'NATPIS', '→ Više jezika'],
    ]);
    b.lamp({ at: [602, 697], r: 40, d: [518, 892, 'down'], m: [520, 470, 'up'] });
  });
}
