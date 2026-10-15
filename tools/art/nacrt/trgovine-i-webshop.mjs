// LIST 07 · Trgovine i webshop — izlog trgovine noću (tools/art/nacrt/izlog.mjs). Prizemna kuća u Donjem gradu sa
// zabatom prema ulici; lijevo dvorišni zid s kapijom. Široki izlog u tri polja: postolje s jednim proizvodom
// (čajnik pod reflektorom) i police pune robe u siluetama (staklenke, složeni tekstil, košare, kutije, stolna
// svjetiljka, boce). Na staklenim vratima pločica ZATVORENO, iza njih paketi spremni za dostavu: trgovina je zatvorena,
// a prodaja ide dalje. Svjetlo: proizvod na postolju — u 22:15 netko s kauča traži „naziv proizvoda + kupiti“.
import { G, street, shop, marker, legend, glowDefs, sash } from './izlog.mjs';

export const meta = {
  slug: 'trgovine-i-webshop',
  list: '07',
  name: 'Trgovine i webshop',
  head: 'ZAEC · DJELATNOSTI · IZLOZI',
  view: 'IZLOG TRGOVINE NOĆU',
  web: 'KATALOG · PLAĆANJE · DOSTAVA',
  title: 'Izlog trgovine noću u osječkoj ulici',
  desc: 'Crtež pročelja prizemne kuće sa zabatom prema ulici noću: široki izlog s policama punim robe u siluetama (staklenke, složeni tekstil, košare, kutije, stolna svjetiljka i boce) i jednim proizvodom na postolju pod reflektorom, staklena vrata s pločicom Zatvoreno i paketima spremnima za dostavu. Iznad izloga je natpis Trgovina. Legenda povezuje police s katalogom, postolje sa stranicom proizvoda, a pakete s dostavom i plaćanjem. Proizvod na postolju označen je toplim svjetlom.',
  lamp: { time: '22:15 · S KAUČA', search: 'naziv proizvoda + kupiti' },
  mvb: '440 330 680 562',
  mobileCallout: null,
  defs: glowDefs,
};

export function draw(b) {
  const [L, R] = [340, 1150]; // kuća sa zabatom
  const cx = (L + R) / 2;
  const EV = 476; // vijenac na dnu zabata
  const top = 132; // sljeme
  const k = (EV - top) / (cx - L); // nagib zabata

  // 1 ulica i svjetlo na pločniku
  b.g('nd nd-1', () => {
    street(b, [[500, 900], [936, 1046]]);
  });

  // 2 pročelja: dvorišni zid s kapijom, kuća sa zabatom (tavanski prozori, odušak), rub kuće desno
  b.g('nd nd-2', () => {
    // dvorišni zid i kapija s krovićem
    b.rect(-200, 590, L - 4 + 200, 10, 'ln-2');
    b.line(-200, 600, -200, G, 'ln-2');
    b.path([[150, 612], [240, 566], [330, 612]], 'ln-2', false);
    b.line(160, 612, 320, 612, 'ln-2');
    b.rect(176, 620, 128, G - 620, 'mask');
    b.rect(176, 620, 128, G - 620, 'ln-2');
    for (let x = 192; x < 304; x += 16) b.line(x, 622, x, G, 'ln-h');
    for (const y of [650, 760]) b.line(176, y, 304, y, 'ln-h');
    b.circle(292, 712, 2.5, 'nib');
    // zabat: dvostruka crta strehe, vijenac, odušak i dva tavanska prozora
    b.path([[L - 16, EV], [cx, top - 12], [R + 16, EV]], 'ln-2', false);
    b.path([[L + 6, EV], [cx, top + 6], [R - 6, EV]], 'ln-h', false);
    b.circle(cx, 236, 18, 'win');
    for (const a of [0, 45, 90, 135]) {
      const r = (a * Math.PI) / 180;
      b.line(cx - 18 * Math.cos(r), 236 - 18 * Math.sin(r), cx + 18 * Math.cos(r), 236 + 18 * Math.sin(r), 'ln-h');
    }
    sash(b, cx - 58, 296, 42, 62, { hood: false, t: 0.45 });
    sash(b, cx + 16, 296, 42, 62, { hood: false, t: 0.45 });
    b.rect(L - 10, EV, R - L + 20, 14, 'ln-2');
    b.line(L, EV + 22, R, EV + 22, 'ln-h');
    // zidovi i lezene na uglovima
    b.path([[L, G], [L, EV + 14], [R, EV + 14], [R, G]], 'ln-2', false);
    b.rect(L, EV + 22, 22, G - EV - 22, 'ln-2');
    b.rect(R - 22, EV + 22, 22, G - EV - 22, 'ln-2');
    // prozor stana uz trgovinu: roleta napola spuštena
    sash(b, 392, 596, 70, 150);
    b.rect(392, 596, 70, 66, 'win');
    for (let y = 604; y < 662; y += 8) b.line(394, y, 460, y, 'ln-h');
    // rub više kuće desno
    b.path([[R + 26, G], [R + 26, 300], [1240, 300]], 'ln-2', false);
    b.line(R + 26, 312, 1240, 312, 'ln-h');
    sash(b, R + 44, 360, 80, 140, { hood: false });
    sash(b, R + 44, 600, 80, 150, { hood: false });
  });

  // 3 trgovina: natpis, izlog u tri polja, vrata s pločicom i paketima (toplo staklo)
  b.g('nd nd-3', () => {
    b.rect(500, 504, 546, 46, 'lit');
    b.say(cx + 18, 539, 'TRGOVINA', 30, 't-real t-b t-sign', ' text-anchor="middle"');
    shop(b, 500, 576, 400, 200, 0, () => {
      // postolje s proizvodom (čajnik) i reflektor
      b.line(565, 616, 565, 624, 'sil-ln');
      b.d('M557 624H573L577 640H553Z', 'sil');
      b.rect(538, 712, 54, 64, 'sil');
      b.d('M541 712Q539 684 565 680Q591 684 589 712Z', 'sil');
      b.d('M555 680Q565 670 575 680Z', 'sil');
      b.circle(565, 669, 3, 'sil');
      b.d('M543 702Q530 698 523 684L527 682Q534 692 545 694Z', 'sil');
      b.d('M587 690Q603 692 600 704Q597 712 588 709', 'sil-ln');
      // police: srednje polje (staklenke, tekstil, košare), desno (kutije, svjetiljka, vaza, boce)
      for (const [x0, x1] of [[640, 760], [780, 892]]) {
        for (const x of [x0 + 2, x1 - 2]) b.line(x, 628, x, 776, 'sil-ln');
        for (const y of [664, 716, 770]) b.rect(x0, y, x1 - x0, 4, 'sil');
      }
      [[650, 18, 26], [672, 16, 20], [692, 20, 30], [716, 16, 22], [736, 18, 26]].forEach(([x, w, h]) => {
        b.rect(x, 664 - h, w, h, 'sil', ' rx="4"');
        b.rect(x - 1, 664 - h - 5, w + 2, 5, 'sil');
      });
      [[650, 40, 4], [702, 46, 5]].forEach(([x, w, n]) => {
        for (let i = 0; i < n; i++) b.rect(x + (i % 2) * 2, 709 - i * 8, w - 2, 6, 'sil', ' rx="3"');
      });
      [[652, 46], [706, 46]].forEach(([x, w]) => {
        b.path([[x, 740], [x + w, 740], [x + w - 6, 770], [x + 6, 770]], 'sil');
        b.d(`M${x + 8} 740Q${x + w / 2} 716 ${x + w - 8} 740`, 'sil-ln');
      });
      b.rect(790, 636, 30, 28, 'sil');
      b.rect(824, 646, 24, 18, 'sil');
      b.rect(852, 626, 30, 38, 'sil');
      b.d('M794 690L800 670H820L826 690Z', 'sil');
      b.line(810, 690, 810, 712, 'sil-ln');
      b.rect(800, 710, 20, 6, 'sil');
      b.d('M848 716Q838 700 848 690V682H862V690Q872 700 862 716Z', 'sil');
      for (const x of [796, 818, 840, 862]) {
        b.rect(x - 7, 736, 14, 34, 'sil', ' rx="3"');
        b.rect(x - 3, 722, 6, 16, 'sil');
      }
    });
    for (const x of [630, 770]) b.line(x, 576, x, 776, 'cut-w');
    // vrata: pločica ZATVORENO, iza stakla paketi za dostavu
    shop(b, 936, 566, 110, 234, 0, () => {
      b.rect(940, 668, 102, 32, 'plate', ' rx="3"');
      if (b.v !== 'm') b.say(991, 690, 'ZATVORENO', 17, 't-plate', ' text-anchor="middle"');
      b.line(962, 668, 991, 648, 'sil-ln');
      b.line(1020, 668, 991, 648, 'sil-ln');
      for (const [x, y, w, h] of [[944, 744, 64, 56], [952, 702, 46, 42], [1012, 764, 30, 36]]) {
        b.rect(x, y, w, h, 'sil');
        b.line(x + w / 2, y, x + w / 2, y + h, '', ' stroke="#ffe3b8" stroke-opacity=".55" stroke-width="2"');
        b.rect(x + 6, y + 8, Math.min(16, w / 2 - 10), 10, '', ' fill="#ffe3b8" fill-opacity=".8"');
      }
    });
    b.line(1034, 712, 1034, 740, 'cut-w');
  });

  // 6 legenda, brojevi i svjetlo
  b.g('nd nd-6', () => {
    marker(b, '01', [900, 640], 8, -8);
    marker(b, '02', [592, 744], 10, -8);
    marker(b, '03', [1046, 760], 10, -8);
    legend(b, 968, 44, [
      ['01', 'POLICE', '→ Katalog / webshop'],
      ['02', 'POSTOLJE', '→ Stranica proizvoda'],
      ['03', 'PAKETI', '→ Dostava i plaćanje'],
    ]);
    b.lamp({ at: [565, 694], r: 44, d: [512, 440, 'up'], m: [470, 444, 'up'] });
  });
}
