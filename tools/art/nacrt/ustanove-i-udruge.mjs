// LIST 10 · Ustanove i udruge — ulaz ustanove noću (tools/art/nacrt/izlog.mjs). Barokna jednokatnica kao u Tvrđi:
// visoki krov s krovnim prozorima, srednji rizalit s lezenama, trokutnim zabatom i natpisom u frizu, prozori s uškama.
// Svijetli predvorje: kroz lijevi prozor oglasna ploča s pribodenim listovima, kroz kameni portal s lukom fenjer i
// unutarnja staklena vrata, kroz desni prozor info pult. Pred portalom podest i dvije stube, uz njih rampa s
// rukohvatima. Svjetlo: oglasna ploča — u rujnu su upisi: „upis u vrtić + grad“.
import { G, street, shop, marker, legend, glowDefs } from './izlog.mjs';

export const meta = {
  slug: 'ustanove-i-udruge',
  list: '10',
  name: 'Ustanove i udruge',
  head: 'DJELATNOSTI · IZLOZI',
  view: 'ULAZ USTANOVE NOĆU',
  web: 'NOVOSTI · DOKUMENTI · UPIT',
  title: 'Ulaz ustanove noću u baroknoj zgradi',
  desc: 'Crtež pročelja barokne jednokatnice noću: visoki krov s krovnim prozorima, srednji rizalit s trokutnim zabatom i natpisom Ustanova u frizu. Osvijetljeno je predvorje: kroz lijevi prozor vidi se oglasna ploča s pribodenim listovima, kroz kameni portal s lukom fenjer i unutarnja staklena vrata, a kroz desni prozor info pult. Pred portalom su podest i dvije stube, a uz njih rampa s rukohvatima. Legenda povezuje oglasnu ploču s novostima i projektima, rampu s pristupačnošću, a pult s dokumentima. Oglasna ploča označena je toplim svjetlom.',
  lamp: { time: 'RUJAN · UPISI', search: 'upis u vrtić + grad', searchShort: 'upis u vrtić' },
  mvb: '400 300 680 562',
  mobileCallout: null,
  defs: glowDefs,
};

/** Barokni prozor: staklo s križem, okvir s uškama, segmentni nadprozornik i klupčica. */
function baroque(b, x, y, w, h, { hood = true } = {}) {
  b.rect(x, y, w, h, 'win');
  b.line(x + w / 2, y, x + w / 2, y + h, 'ln-h');
  b.line(x, y + h * 0.32, x + w, y + h * 0.32, 'ln-h');
  const [fx, fy, fw] = [x - 8, y - 8, w + 16];
  b.path([[fx, y + h + 4], [fx, fy + 16], [fx - 5, fy + 16], [fx - 5, fy], [fx + fw + 5, fy], [fx + fw + 5, fy + 16], [fx + fw, fy + 16], [fx + fw, y + h + 4]], 'ln-2', false);
  if (hood) b.d(`M${fx - 8} ${fy - 6}Q${x + w / 2} ${fy - 26} ${fx + fw + 8} ${fy - 6}`, 'ln-2');
  b.rect(x - 12, y + h + 4, w + 24, 6, 'ln-2');
}

export function draw(b) {
  const [L, R] = [230, 1090]; // zgrada
  const C = 660; // os portala i rizalita
  const [RL, RR] = [470, 850]; // rizalit
  const EV = 292; // vrh vijenca
  const SC = 540; // vijenac između katova
  const LAND = 774; // podest pred portalom
  const [PW, PS] = [56, 694]; // polumjer luka portala, visina pete luka
  const [GY, GH] = [612, 88]; // prozori prizemlja
  const [r0, r1] = [C + PW + 46, 1040]; // rampa: gornji i donji kraj

  // 1 ulica i svjetlo iz predvorja
  b.g('nd nd-1', () => {
    street(b, [[508, 572], [C - PW + 4, C + PW - 4], [748, 812]]);
  });

  // 2 pročelja: susjedi, krov s krovnim prozorima, zabat rizalita, kat s prozorima s uškama, tamni prozori prizemlja
  b.g('nd nd-2', () => {
    // susjed lijevo: niža kuća s vijencem
    b.rect(-200, 340, L - 4 + 200, 12, 'ln-2');
    for (const x of [44, 144]) {
      baroque(b, x, 400, 56, 120, { hood: false });
      baroque(b, x, GY, 56, 110, { hood: false });
    }
    // susjed desno: prizemnica s krovom
    b.path([[R + 14, G], [R + 14, 480], [1240, 480]], 'ln-2', false);
    b.path([[R + 14, 480], [1160, 420], [1240, 420]], 'ln-2', false);
    // krov: četiri vode, dva krovna prozora
    const ridge = 214;
    b.path([[L - 6, EV - 18], [L + 84, ridge], [R - 84, ridge], [R + 6, EV - 18]], 'ln-2', false);
    for (const x of [370, 950]) {
      b.rect(x - 22, 230, 44, 44, 'mask');
      b.d(`M${x - 22} 274V250Q${x} 226 ${x + 22} 250V274`, 'ln-2');
      b.d(`M${x - 14} 274V254Q${x} 240 ${x + 14} 254V274Z`, 'win');
    }
    // vijenac, zidovi, kvadri na uglovima
    b.rect(L - 14, EV - 18, R - L + 28, 18, 'ln-2');
    b.line(L - 6, EV + 6, R + 6, EV + 6, 'ln-h');
    b.path([[L, G], [L, EV], [R, EV], [R, G]], 'ln-2', false);
    for (let y = SC + 10, i = 0; y < G - 4; y += 26, i++) {
      const w = i % 2 ? 22 : 34;
      b.rect(L, y, w, Math.min(26, G - y), 'ln-h');
      b.rect(R - w, y, w, Math.min(26, G - y), 'ln-h');
    }
    // rizalit: lezene, trokutni zabat s okulusom
    for (const x of [RL, RR - 18]) b.rect(x, EV, 18, G - EV, 'ln-2');
    b.path([[RL - 14, EV - 18], [C, EV - 92], [RR + 14, EV - 18]], 'ln-2');
    b.path([[RL + 12, EV - 24], [C, EV - 80], [RR - 12, EV - 24]], 'ln-h');
    b.P(`<ellipse class="win" cx="${C}" cy="${EV - 46}" rx="24" ry="14"/>`);
    // kat: prozori s uškama (krila po dva, rizalit tri)
    for (const x of [270, 370, 515, C - 30, 745, 890, 990]) baroque(b, x, 384, 60, 124);
    // vijenac između katova
    b.rect(L - 6, SC, R - L + 12, 10, 'ln-2');
    // prizemlje krila: tamni prozori s rešetkom
    for (const x of [272, 372, 892, 992]) {
      b.rect(x, GY, 56, GH, 'win');
      for (let xx = x + 11; xx < x + 56; xx += 11) b.line(xx, GY, xx, GY + GH, 'ln-h');
      b.rect(x - 6, GY - 6, 68, GH + 6, 'ln-2');
      b.rect(x - 12, GY + GH, 80, 6, 'ln-2');
    }
    // portal: arhivolt, impost, zaglavni kamen
    const ar = PW + 16;
    b.d(`M${C - ar} ${LAND}V${PS}A${ar} ${ar} 0 0 1 ${C + ar} ${PS}V${LAND}`, 'ln-2');
    b.path([[C - 12, PS - ar - 10], [C + 12, PS - ar - 10], [C + 8, PS - PW + 6], [C - 8, PS - PW + 6]], 'mask');
    b.path([[C - 12, PS - ar - 10], [C + 12, PS - ar - 10], [C + 8, PS - PW + 6], [C - 8, PS - PW + 6]], 'ln-2');
    for (const s of [-1, 1]) b.rect(s < 0 ? C - ar - 4 : C + PW, PS - 6, 20, 6, 'ln-2');
    // kameni okviri osvijetljenih prozora
    for (const x of [508, 748]) {
      b.rect(x - 6, GY - 6, 76, GH + 6, 'ln-2');
      b.rect(x - 12, GY + GH, 88, 6, 'ln-2');
    }
  });

  // 3 natpis u frizu, osvijetljeno predvorje (prozor, portal, prozor); podest, stube i rampa
  b.g('nd nd-3', () => {
    b.rect(RL + 40, EV + 14, RR - RL - 80, 40, 'lit');
    b.say(C, EV + 44, 'USTANOVA', 26, 't-real t-b t-sign', ' text-anchor="middle"');
    // oglasna ploča s pribodenim listovima
    shop(b, 508, GY, 64, GH, 0, () => {
      b.rect(514, GY + 44, 52, 40, 'sil');
      [[518, 3, 13, 16], [534, 6, 12, 12], [549, 2, 13, 17], [519, 23, 15, 13], [538, 22, 11, 15], [552, 24, 11, 12]].forEach(([x, dy, w, h]) => {
        b.rect(x, GY + 46 + dy, w, h, '', ' fill="#fff3dc"');
        b.circle(x + w / 2, GY + 48 + dy, 1.6, 'sil');
      });
    });
    // portal: fenjer, unutarnja staklena vrata
    const arch = `M${C - PW} ${LAND}V${PS}A${PW} ${PW} 0 0 1 ${C + PW} ${PS}V${LAND}Z`;
    b.d(arch, 'glow', ` fill="${b.url('gl')}"`);
    b.line(C, PS - PW, C, 664, 'sil-ln');
    b.d(`M${C - 8} 664H${C + 8}L${C + 11} 671L${C + 6} 684H${C - 6}L${C - 11} 671Z`, 'sil');
    b.rect(C - 32, 700, 64, LAND - 700, 'sil-ln');
    b.line(C, 700, C, LAND, 'sil-ln');
    b.line(C - 32, 726, C + 32, 726, 'sil-ln');
    b.d(arch, 'cut-w');
    // info pult sa zaštitnim staklom i letcima
    shop(b, 748, GY, 64, GH, 0, () => {
      b.rect(752, GY + 54, 56, 6, 'sil');
      b.rect(756, GY + 60, 48, GH - 60, 'sil');
      b.rect(760, GY + 22, 40, 32, 'sil-ln');
      b.rect(786, GY + 42, 12, 12, 'sil');
    });
    // podest i dvije stube
    b.rect(C - PW - 40, LAND, r0 - (C - PW - 40), 13, 'ln-2');
    b.rect(C - PW - 52, LAND + 13, r0 - (C - PW - 52) - 8, G - LAND - 13, 'ln-2');
    // rampa: kosina, dva rukohvata sa stupićima i vodoravnim produžecima
    b.path([[r0, LAND], [r1, G], [r0, G]], 'ln-2');
    const rail = (dy) => [[r0 - 20, LAND - dy], [r0, LAND - dy], [r1, G - dy], [r1 + 24, G - dy]];
    b.poly(rail(56), 'ln-2');
    b.poly(rail(26), 'ln-h');
    for (let x = r0 + 4; x <= r1; x += 72) {
      const y = LAND + ((x - r0) / (r1 - r0)) * (G - LAND);
      b.line(x, y, x, y - 56, 'ln-2');
    }
  });

  // 6 legenda, brojevi i svjetlo
  b.g('nd nd-6', () => {
    marker(b, '01', [540, GY - 6], 10, -10);
    marker(b, '02', [r1, G - 56], 10, -10);
    marker(b, '03', [780, GY - 6], 10, -10);
    legend(b, 968, 44, [
      ['01', 'OGLASNA PLOČA', '→ Novosti i projekti'],
      ['02', 'RAMPA', '→ Pristupačnost'],
      ['03', 'PULT', '→ Dokumenti'],
    ]);
    b.lamp({ at: [540, GY + 64], r: 38, d: [508, 878, 'down'], m: [470, 470, 'up'] });
  });
}
