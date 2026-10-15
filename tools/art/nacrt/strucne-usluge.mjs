// LIST 09 · Stručne usluge — ured na katu noću (tools/art/nacrt/izlog.mjs). Modernistička katnica iz tridesetih:
// ravni krov s tankom pločom i cijevnom ogradom terase, stubišni toranj s prozorom od staklene opeke i nadstrešnicom
// nad ulazom, prizemlje obloženo kamenim pločama i tamno. Na katu svijetli trakasti prozor ureda: police s
// registratorima, stol sa stolnom svjetiljkom i dvije stolice, uokvirena ovlaštenja i biljka. Uz ulaz ploča sa
// zvoncima, svijetli samo pločica URED. Svjetlo: stol u uredu — siječanj u 17:15, već je mrak: „knjigovodstvo za obrt“.
import { G, street, shop, marker, legend, glowDefs, sash, sideChair } from './izlog.mjs';

export const meta = {
  slug: 'strucne-usluge',
  list: '09',
  name: 'Stručne usluge',
  head: 'ZAEC · DJELATNOSTI · IZLOZI',
  view: 'UREDI NA KATU NOĆU',
  web: 'USLUGE · TIM · UPIT',
  title: 'Ured na katu modernističke zgrade noću u osječkoj ulici',
  desc: 'Crtež pročelja modernističke katnice noću. Prizemlje obloženo kamenim pločama je tamno: ulaz u stubišnom tornju s nadstrešnicom i uz njega ploča sa zvoncima na kojoj svijetli samo pločica Ured. Na katu svijetli trakasti prozor ureda: police s registratorima, stol sa stolnom svjetiljkom i dvije stolice, uokvirena ovlaštenja i biljka. Legenda povezuje ploču s timom i ovlaštenjima, police s referencama, a stol s upitom prema opsegu. Stol u uredu označen je toplim svjetlom.',
  lamp: { time: 'SIJEČANJ · 17:15', search: 'knjigovodstvo za obrt' },
  mvb: '480 300 680 562',
  mobileCallout: null,
  defs: glowDefs,
};

export function draw(b) {
  const [L, R] = [440, 1150]; // zgrada: toranj 440–560, krilo 560–1150
  const [T0, T1] = [440, 560];
  const FL = 580; // pod kata / vrh prizemlja
  const [WX, WY, WW, WH] = [600, 420, 510, 154]; // trakasti prozor ureda

  // 1 ulica (svjetlo je na katu, na pločnik ne pada)
  b.g('nd nd-1', () => {
    street(b, []);
  });

  // 2 pročelja: stara kuća lijevo, modernistička katnica (toranj, ploča krova, ograda terase, kameno prizemlje), susjed desno
  b.g('nd nd-2', () => {
    // stara jednokatnica s vijencem
    b.path([[-200, 268], [T0 - 4, 268]], 'ln-2', false);
    b.rect(-200, 252, T0 + 196, 16, 'ln-2');
    for (const x of [130, 300]) {
      sash(b, x, 330, 76, 150);
      sash(b, x, 600, 76, 160);
    }
    b.line(-200, 560, T0 - 4, 560, 'ln-h');
    // stubišni toranj: kapa, tri žlijeba, staklena opeka
    b.rect(T0 - 8, 222, T1 - T0 + 16, 8, 'ln-2');
    b.path([[T0, G], [T0, 230], [T1, 230], [T1, G]], 'ln-2', false);
    for (const y of [252, 260, 268]) b.line(T0 + 14, y, T1 - 14, y, 'ln-h');
    const [gx, gw] = [474, 52];
    b.rect(gx, 300, gw, 250, 'win');
    for (let y = 313; y < 550; y += 13) b.line(gx, y, gx + gw, y, 'ln-h');
    for (const x of [gx + 13, gx + 26, gx + 39]) b.line(x, 300, x, 550, 'ln-h');
    // krilo: tanka ploča krova, ograda terase, kat
    b.rect(T1, 296, R - T1 + 16, 10, 'ln-2');
    b.path([[T1, 306], [R, 306], [R, G]], 'ln-2', false);
    for (const y of [344, 352, 360]) b.line(888, y, R - 20, y, 'ln-h');
    for (const y of [266, 280]) b.line(840, y, R + 4, y, 'ln-2');
    for (let x = 840; x <= R + 4; x += 78) b.line(x, 262, x, 296, 'ln-2');
    // prizemlje: kamene ploče (vodoravne reške, okomite naizmjence)
    b.line(T1, FL, R, FL, 'ln-2');
    for (let i = 0, y = FL + 44; y < G; i++, y += 44) {
      b.line(T1, y, R, y, 'ln-h');
      for (let x = T1 + (i % 2 ? 49 : 98); x < R; x += 98) b.line(x, y - 44, x, y, 'ln-h');
    }
    b.line(T1, FL, T1, G, 'ln-2');
    // dva tamna prozora prizemlja s čeličnim okvirom
    for (const x of [724, 936]) {
      b.rect(x, 630, 170, 104, 'win');
      for (const xx of [x + 57, x + 113]) b.line(xx, 630, xx, 734, 'ln-h');
      b.line(x, 664, x + 170, 664, 'ln-h');
      b.line(x - 8, 740, x + 178, 740, 'ln-2');
    }
    // ulaz: dvokrilna vrata s nadsvjetlom, nadstrešnica
    b.rect(T0 + 18, 616, 84, G - 616, 'win');
    b.line(T0 + 18, 650, T0 + 102, 650, 'ln-h');
    b.line(T0 + 60, 650, T0 + 60, G, 'ln-h');
    for (const x of [T0 + 52, T0 + 68]) b.line(x, 700, x, 740, 'ln-2');
    b.rect(T0 - 14, 592, 186, 8, 'ln-2');
    // ploča sa zvoncima: četiri pločice, svijetli samo URED (ostale su kostur)
    b.rect(568, 626, 104, 156, 'mask');
    b.rect(568, 626, 104, 156, 'ln-2');
    [638, 674, 710, 746].forEach((y, i) => {
      if (i === 1) {
        b.rect(576, y, 74, 28, 'lit');
        b.say(613, y + 22, 'URED', 23, 't-plate', ' text-anchor="middle"');
      } else {
        b.rect(576, y, 74, 28, 'ln-h');
        b.sk(588, 636, y + 14);
      }
      b.circle(661, y + 14, 4.5, i === 1 ? 'lit' : 'ln-2');
    });
    // susjed desno: niža kuća s krovom
    b.path([[R + 12, G], [R + 12, 500], [1240, 500]], 'ln-2', false);
    b.path([[R + 12, 500], [1210, 440], [1240, 440]], 'ln-2', false);
    sash(b, R + 40, 600, 76, 150, { hood: false });
  });

  // 3 ured na katu: trakasti prozor (toplo staklo) u pet polja
  b.g('nd nd-3', () => {
    shop(b, WX, WY, WW, WH, 0, () => {
      const floor = WY + WH;
      // police s registratorima (lijevo i desno)
      for (const [x0, x1] of [[608, 694], [1016, 1102]]) {
        for (const x of [x0, x1]) b.line(x, 468, x, floor, 'sil-ln');
        [500, 537, floor - 3].forEach((y, j) => {
          b.rect(x0, y, x1 - x0, 4, 'sil');
          for (let x = x0 + 5, n = 0; x < x1 - 9; x += 12, n++) {
            const h = 28 - ((n + j) % 3 === 1 ? 4 : 0);
            b.rect(x, y - h, 10, h, 'sil');
            b.circle(x + 5, y - h + 9, 2.4, 'glow', ` fill="${b.url('gl')}"`);
          }
        });
      }
      // stol (sa strane) sa stolnom svjetiljkom i registratorima; stolica klijenta i uredska stolica
      b.rect(732, floor - 72, 132, 6, 'sil');
      b.line(740, floor - 66, 740, floor, 'sil-ln');
      b.rect(820, floor - 66, 40, 66, 'sil');
      b.rect(756, floor - 78, 16, 6, 'sil');
      b.d(`M764 ${floor - 78}L754 ${floor - 104}L776 ${floor - 120}`, 'sil-ln');
      b.d(`M764 ${floor - 120}A14 11 0 0 1 792 ${floor - 120}Z`, 'sil', ` transform="rotate(34 778 ${floor - 120})"`);
      for (let i = 0; i < 3; i++) b.rect(806, floor - 80 - i * 5, 34, 4, 'sil');
      sideChair(b, 712, floor, 1);
      b.d(`M880 ${floor - 46}L887 ${floor - 104}Q889 ${floor - 112} 897 ${floor - 110}L895 ${floor - 46}Z`, 'sil');
      b.rect(848, floor - 48, 46, 7, 'sil', ' rx="3"');
      b.line(862, floor - 62, 884, floor - 62, 'sil-ln');
      b.line(872, floor - 39, 872, floor - 10, 'sil-ln');
      b.line(850, floor - 7, 894, floor - 7, 'sil-ln');
      for (const x of [852, 892]) b.circle(x, floor - 3, 3, 'sil');
      // uokvirena ovlaštenja i biljka
      for (const x of [922, 962]) {
        b.rect(x, 474, 28, 36, 'sil-ln');
        b.rect(x + 7, 482, 14, 3, 'sil');
      }
      b.path([[934, floor], [962, floor], [966, floor - 30], [930, floor - 30]], 'sil');
      b.d(`M948 ${floor - 30}Q930 ${floor - 60} 922 ${floor - 74}Q940 ${floor - 62} 948 ${floor - 40}Q950 ${floor - 80} 958 ${floor - 96}Q960 ${floor - 66} 952 ${floor - 34}Q968 ${floor - 58} 984 ${floor - 66}Q968 ${floor - 46} 956 ${floor - 30}Z`, 'sil');
    });
    for (const x of [702, 804, 906, 1008]) b.line(x, WY, x, WY + WH, 'cut-w');
    b.rect(WX - 10, WY + WH, WW + 20, 6, 'ln-2');
  });

  // 6 legenda, brojevi i svjetlo
  b.g('nd nd-6', () => {
    marker(b, '01', [672, 640], 10, -8);
    marker(b, '02', [651, WY], 10, -10);
    marker(b, '03', [864, WY], 10, -10);
    legend(b, 968, 44, [
      ['01', 'PLOČA', '→ Tim i ovlaštenja'],
      ['02', 'POLICE', '→ Reference'],
      ['03', 'STOL', '→ Upit prema opsegu'],
    ]);
    b.lamp({ at: [790, 486], r: 40, d: [600, 370, 'up'], m: [592, 382, 'up'] });
  });
}
