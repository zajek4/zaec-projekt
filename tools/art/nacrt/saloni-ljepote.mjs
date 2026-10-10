// LIST 08 · Saloni ljepote — izlog salona noću (tools/art/nacrt/izlog.mjs). Secesijska kuća s jednim katom i atikom;
// prizemlje je salon: natpis, dva izloga i staklena vrata s pločicom OTVORENO. Kroz staklo: ogledala, stolice, haube
// sušila i polica s proizvodima u siluetama. Lijevo susjed sa spuštenom roletom, desno rub sljedeće kuće.
// Svjetlo: jedno radno mjesto (ogledalo i stolica) — „frizer + grad“, utorak u 17:30, kao na prijašnjem listu.
import { G, street, rustica, window, shop, marker, legend, glowDefs } from './izlog.mjs';

export const meta = {
  slug: 'saloni-ljepote',
  list: '08',
  name: 'Saloni ljepote',
  head: 'ZAEC · DJELATNOSTI · IZLOZI',
  view: 'IZLOG SALONA NOĆU',
  web: 'CJENIK · TERMINI · RECENZIJE',
  title: 'Izlog frizerskog salona noću u osječkoj ulici',
  desc: 'Crtež pročelja secesijske kuće noću: prizemlje je salon s natpisom, dva izloga i staklenim vratima s pločicom Otvoreno. Kroz osvijetljeno staklo vide se ogledala, stolice, hauba sušila i polica s proizvodima. Susjedna trgovina ima spuštenu roletu. Legenda povezuje izlog s galerijom i timom, vrata s online rezervacijom, a natpis s recenzijama. Jedno radno mjesto označeno je toplim svjetlom.',
  lamp: { time: 'UTORAK · 17:30', search: 'frizer + grad' },
  mvb: '420 380 680 562',
  mobileCallout: null,
  defs: glowDefs,
};

export function draw(b) {
  const [L, R] = [430, 1130]; // kuća salona
  const GF = 556; // vrh prizemlja

  // 1 ulica i obrisi kuća
  b.g('nd nd-1', () => {
    street(b, [[472, 688], [724, 826], [862, 1088]]);
  });

  // 2 pročelja: susjed lijevo (roleta), kuća salona (kat, vijenac, atika), rub kuće desno
  b.g('nd nd-2', () => {
    // susjed: dvokatnica, prizemlje s roletom
    b.path([[80, G], [80, 250], [L, 250], [L, G]], 'ln-2', false);
    b.line(80, 270, L, 270, 'ln-2');
    for (const x of [120, 250]) {
      window(b, x, 310, 86, 120, { hood: false });
      window(b, x, 470, 86, 120, { hood: false });
    }
    rustica(b, 80, L, 620, G, 18);
    b.rect(130, 660, 250, 140, 'mask');
    b.rect(130, 660, 250, 140, 'ln-2');
    for (let y = 672; y < G; y += 12) b.line(132, y, 378, y, 'ln-h');
    // kuća salona
    b.path([[L, G], [L, 230], [R, 230], [R, G]], 'ln-2', false);
    b.rect(L - 14, 206, R - L + 28, 24, 'ln-2'); // vijenac
    for (let x = L - 6; x < R + 8; x += 18) b.line(x, 230, x, 238, 'ln-h');
    // atika: secesijski zabat s ovalnim prozorom
    const cx = (L + R) / 2;
    b.d(`M${cx - 150} 206C${cx - 120} 156 ${cx - 96} 104 ${cx} 92C${cx + 96} 104 ${cx + 120} 156 ${cx + 150} 206`, 'ln-2', ' fill="none"');
    b.P(`<ellipse class="win" cx="${cx}" cy="156" rx="30" ry="21"/>`);
    b.P(`<ellipse class="ln-h" cx="${cx}" cy="156" rx="42" ry="31"/>`);
    // kat: tri prozora, balkon s ogradom u sredini
    window(b, 482, 300, 108, 176);
    window(b, cx - 54, 286, 108, 214);
    window(b, R - 160, 300, 108, 176);
    b.rect(cx - 116, 500, 232, 14, 'ln-2');
    b.d(`M${cx - 108} 500V452H${cx + 108}V500`, 'ln-2', ' fill="none"');
    for (let x = cx - 92; x < cx + 100; x += 36) b.d(`M${x} 500C${x - 12} 484 ${x + 12} 470 ${x} 456`, 'ln-h', ' fill="none"');
    b.line(L, GF, R, GF, 'ln-2');
    // rub sljedeće kuće desno
    b.path([[R, 300], [1240, 300]], 'ln-2', false);
    window(b, R + 40, 360, 80, 150, { hood: false });
    rustica(b, R, 1240, 620, G, 18);
  });

  // 3 prizemlje salona: pilastri, natpis, izlozi i vrata (toplo staklo)
  b.g('nd nd-3', () => {
    rustica(b, L, L + 28, GF, G);
    rustica(b, R - 28, R, GF, G);
    b.rect(L + 40, GF + 10, R - L - 80, 40, 'lit');
    b.say((L + R) / 2, GF + 42, 'S A L O N', 34, 't-real t-b t-sign', ' text-anchor="middle"');
    // izlog A: dva ogledala i stolice
    shop(b, 472, 620, 216, 160, 14, () => {
      for (const x of [526, 634]) {
        b.circle(x, 676, 26, 'mirror');
        b.rect(x - 34, 712, 68, 8, 'sil');
        b.d(`M${x - 18} 780V760H${x - 22}V732Q${x - 22} 722 ${x - 12} 722H${x + 12}Q${x + 22} 722 ${x + 22} 732V760H${x + 18}V780Z`, 'sil');
      }
      b.d('M580 620V646', 'sil-ln');
      b.d('M566 658A14 12 0 0 1 594 658Z', 'sil');
    });
    // vrata s pločicom OTVORENO
    shop(b, 724, 616, 102, 184, 0, () => {
      b.rect(729, 684, 92, 32, 'plate', ' rx="3"');
      if (b.v !== 'm') b.say(775, 706, 'OTVORENO', 17, 't-plate', ' text-anchor="middle"');
      b.line(748, 684, 775, 664, 'sil-ln');
      b.line(802, 684, 775, 664, 'sil-ln');
    });
    b.line(812, 720, 812, 770, 'cut-w');
    // izlog B: hauba sušila, stolica i polica s proizvodima
    shop(b, 862, 620, 226, 160, 14, () => {
      b.d('M902 694A34 26 0 0 1 970 694Z', 'sil');
      b.line(936, 694, 936, 780, 'sil-ln');
      b.d('M912 780V760H908V734Q908 726 916 726H956Q964 726 964 734V760H960V780Z', 'sil');
      for (const y of [672, 724]) b.rect(1004, y, 76, 5, 'sil');
      [[1010, 16], [1024, 24], [1038, 12], [1052, 20], [1066, 18]].forEach(([x, h]) => b.rect(x, 672 - h, 9, h, 'sil', ' rx="2"'));
      [[1012, 20], [1030, 14], [1046, 22], [1062, 16]].forEach(([x, h]) => b.rect(x, 724 - h, 11, h, 'sil', ' rx="2"'));
      b.d('M994 620V646', 'sil-ln');
      b.d('M980 658A14 12 0 0 1 1008 658Z', 'sil');
    });
  });

  // 6 legenda, brojevi i svjetlo
  b.g('nd nd-6', () => {
    marker(b, '01', [688, 640], 10, -8);
    marker(b, '02', [826, 630], 10, -8);
    marker(b, '03', [R - 40, GF + 30], 10, -14);
    legend(b, 968, 44, [
      ['01', 'IZLOG', '→ Galerija i tim'],
      ['02', 'VRATA', '→ Online rezervacija'],
      ['03', 'NATPIS', '→ Recenzije'],
    ]);
    b.lamp({ at: [634, 700], r: 40, d: [512, 892, 'down'], m: [452, 520, 'up'] });
  });
}
