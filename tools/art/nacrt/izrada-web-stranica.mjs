// U.01 · Izrada web stranica — samo sličica za arak na hubu Usluga (stranica ima svoj potpisni hero: naslov je
// zgrada, template-parts/hero/izrada.php). Ista zgrada u crti lista: šest etaža visokih kao riječi naslova
// („Izrada web stranica koje donose upite.“), gornje četiri u nacrtu, donje dvije sagrađene (toplo staklo),
// crta skenera na granici i kota etaža desno; ulaz u prizemlju, susjedi u obrisu.
import { G, street, glowDefs } from './izlog.mjs';

export const meta = {
  slug: 'izrada-web-stranica',
  name: 'Izrada web stranica',
  title: 'Zgrada od riječi naslova: gornje etaže u nacrtu, donje sagrađene',
  desc: 'Uska zgrada od šest etaža visokih kao riječi naslova. Gornje četiri nacrtane su crtom, donje dvije su sagrađene i svijetle toplo, a u prizemlju je ulaz.',
  lamp: null,
  views: ['t'],
  tvb: '250 110 960 720',
  defs: glowDefs,
  index: 'KATOVI STRANICE', // stupac u kazalu usluga (≤ 15 znakova)
  tb: ['USLUGE', 'U.01', 'Izrada web stranica', 'ZGRADA OD RIJEČI', 'WEB · STRUKTURA · TEKST · MJERENJE'],
};

const [L, R] = [570, 870];
// etaže od vrha: visina (u) kao visina riječi u heroju, sagrađeno ili nacrt
const FLOORS = [[62, 0], [96, 0], [52, 0], [88, 0], [108, 1], [74, 1]];
const ENTRY = 110;

export function draw(b) {
  const top = G - ENTRY - FLOORS.reduce((s, [h]) => s + h, 0) - FLOORS.length * 10;

  // 1 ulica i susjedi u obrisu
  b.g('nd nd-1', () => {
    street(b, [[L + 40, R - 40]]);
    b.path([[330, G], [330, 560], [540, 560], [540, G]], 'ln-2', false);
    b.path([[910, G], [910, 430], [1100, 430], [1100, G]], 'ln-2', false);
    b.path([[1100, G], [1100, 360], [1230, 360]], 'ln-2', false);
    for (const [x0, x1, y0] of [[350, 520, 600], [930, 1080, 470]]) for (let y = y0; y < G - 40; y += 56) b.line(x0, y, x1, y, 'ln-h');
  });

  // 2–4 etaže: ploča (prepust 14 u) pa staklo s prečkama; gornje u nacrtu, donje toplo
  let y = top;
  let scan = 0;
  FLOORS.forEach(([h, built], i) => {
    b.g(`nd nd-${2 + Math.min(2, i >> 1)}`, () => {
      b.rect(L - 14, y, R - L + 28, 10, 'ln-2');
      const gy = y + 10;
      if (built) {
        if (!scan) scan = y;
        b.rect(L, gy, R - L, h, 'glow', ` fill="${b.url('gl')}"`);
        for (let x = L + 75; x < R; x += 75) b.line(x, gy, x, gy + h, 'sil-ln');
        b.rect(L, gy, R - L, h, 'cut-w');
      } else {
        b.rect(L, gy, R - L, h, 'win');
        for (let x = L + 75; x < R; x += 75) b.line(x, gy, x, gy + h, 'ln-h');
        b.line(L - 22, gy + h / 2, L, gy + h / 2 - 18, 'ln-3'); // bočni brid u nacrtu
      }
    });
    y += 10 + h;
  });

  // 5 prizemlje: nadstrešnica i ulaz; kota etaža desno
  b.g('nd nd-5', () => {
    b.rect(L - 22, y, R - L + 44, 12, 'ln-2');
    for (const x of [L + 24, L + 106, L + 188]) b.rect(x, y + 30, 70, G - y - 30, 'win');
    b.line(R + 34, top, R + 34, scan, 'ln-dim');
    let ty = top;
    for (const [h] of FLOORS.slice(0, 4)) { b.line(R + 24, ty, R + 44, ty, 'ln-dim'); ty += 10 + h; }
    b.line(R + 24, scan, R + 44, scan, 'ln-dim');
  });

  // 6 crta skenera: granica nacrta i sagrađenog
  b.g('nd nd-6', () => {
    b.line(L - 40, scan, R + 40, scan, 'lamp-ln');
  });
}
