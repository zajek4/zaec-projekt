// U.02 · Webshop — katalog nacrtan kao police trgovine: pretinci s robom u obrisu i kostur naziva i cijene ispod
// svake police. Jedan proizvod je stvaran: kartica s pravim tekstom, varijantom i gumbom „Dodaj u košaricu“ (svjetlo).
// Put narudžbe ide iz kartice preko naplate do paketa s adresnicom koji odlazi preko desnog ruba. Oznake vežu dijelove
// s blokovima stranice (registar: „Osam stvari koje određuju webshop“). Bez cijena i brojki: cijena je kostur.
import { f } from './std.mjs';

export const meta = {
  slug: 'webshop',
  tvb: '420 40 780 585', // sličica na hubu: cijeli predmet usluge, ne samo svjetlo
  list: 'U2',
  name: 'Webshop',
  title: 'Katalog webshopa nacrtan kao police trgovine, s jednim stvarnim proizvodom i paketom na putu',
  desc: 'Police trgovine kao katalog webshopa: u pretincima su šalice, vaze, staklenke i zdjele nacrtane samo obrisom, a nazivi i cijene samo kao kostur. Jedan proizvod je stvaran i osvijetljen: kartica keramičke šalice s nazivom, odabirom boje i gumbom Dodaj u košaricu, na kojem je toplo svjetlo. Iz kartice vodi put narudžbe preko naplate do paketa s adresnicom koji odlazi preko desnog ruba. Oznake povezuju police s katalogom, naplatu s plaćanjem, paket s dostavom i točke na putu s GA4 e-commerce mjerenjem.',
  lamp: { time: '22:40 · NAKON SMJENE', search: 'webshop dostava Hrvatska' },
  mvb: '496 88 680 562',
  mobileCallout: null,
  index: 'POLICE KATALOGA', // stupac u kazalu usluga (≤ 15 znakova)
  tb: ['USLUGE', 'U.02', 'Webshop', 'KATALOG KAO POLICE', 'WEB · KATALOG · PLAĆANJE · DOSTAVA'],
};

const K = { x0: 616, x1: 1168, y0: 50, y1: 556 }; // kartica proizvoda
const T = 646; // lijevi rub teksta kartice
const BTN = { x0: 646, x1: 896, y: 404 }; // gumb (y = sredina)
const TOP = 40; // gornja daska police
const BOARDS = [300, 560]; // daske s robom
const FLOOR = 820; // podnožje
const RACK = [-200, 0, 200, 400, 600]; // stranice pretinaca
const LANE = 700; // put narudžbe

export function draw(b) {
  const ink = 'ln-2';
  // --- roba u obrisu: pogled sprijeda, dno u (x, y) ---
  const mug = (x, y, h, cls = ink) => {
    const w = h * 0.86;
    const r = h * 0.12;
    const L = x - w / 2;
    const R = x + w / 2;
    b.d(`M${f(L)} ${f(y - h)}V${f(y - r)}Q${f(L)} ${f(y)} ${f(L + r)} ${f(y)}H${f(R - r)}Q${f(R)} ${f(y)} ${f(R)} ${f(y - r)}V${f(y - h)}Z`, cls);
    b.d(`M${f(R)} ${f(y - h * 0.8)}C${f(R + h * 0.44)} ${f(y - h * 0.8)} ${f(R + h * 0.44)} ${f(y - h * 0.26)} ${f(R)} ${f(y - h * 0.26)}M${f(R)} ${f(y - h * 0.66)}C${f(R + h * 0.24)} ${f(y - h * 0.66)} ${f(R + h * 0.24)} ${f(y - h * 0.4)} ${f(R)} ${f(y - h * 0.4)}`, cls);
  };
  const vase = (x, y, h) => {
    const s = h / 150;
    const P = (dx, dy) => `${f(x + dx * s)} ${f(y - dy * s)}`;
    b.d(`M${P(-24, 0)}C${P(-62, 44)} ${P(-58, 96)} ${P(-15, 120)}L${P(-22, 150)}L${P(22, 150)}L${P(15, 120)}C${P(58, 96)} ${P(62, 44)} ${P(24, 0)}Z`, ink);
  };
  const jar = (x, y, w, h) => {
    b.rect(x - w / 2, y - h, w, h, ink, ' rx="10"');
    b.rect(x - w / 2 + 5, y - h - 16, w - 10, 16, ink, ' rx="3"');
  };
  const bottle = (x, y, h) => {
    const s = h / 160;
    const P = (dx, dy) => `${f(x + dx * s)} ${f(y - dy * s)}`;
    b.d(`M${P(-26, 0)}L${P(-26, 92)}C${P(-26, 116)} ${P(-9, 118)} ${P(-9, 134)}L${P(-9, 160)}L${P(9, 160)}L${P(9, 134)}C${P(9, 118)} ${P(26, 116)} ${P(26, 92)}L${P(26, 0)}Z`, ink);
  };
  const bowl = (x, y, w) => {
    const h = w * 0.38;
    b.d(`M${f(x - w / 2)} ${f(y - h)}Q${f(x - w / 2 + 4)} ${f(y - 9)} ${f(x - w / 6)} ${f(y - 9)}H${f(x + w / 6)}Q${f(x + w / 2 - 4)} ${f(y - 9)} ${f(x + w / 2)} ${f(y - h)}ZM${f(x - w / 7)} ${f(y - 9)}V${f(y)}H${f(x + w / 7)}V${f(y - 9)}`, ink);
  };
  const plates = (x, y, w, n) => {
    for (let i = 0; i < n; i++) b.rect(x - w / 2 + (i % 2) * 3, y - (i + 1) * 12, w - (i % 2) * 6, 10, ink, ' rx="5"');
  };
  const pot = (x, y, h) => {
    const w = h * 0.5;
    b.path([[x - w / 2, y - h * 0.4], [x + w / 2, y - h * 0.4], [x + w * 0.38, y], [x - w * 0.38, y]], ink);
    // tri lista: zašiljeni obrisi iz istog korijena
    const leaf = (tx, ty, bend) => {
      const [bx, by] = [x, y - h * 0.4];
      const [mx, my] = [(bx + tx) / 2, (by + ty) / 2];
      const [nx, ny] = [-(ty - by) * bend, (tx - bx) * bend];
      b.d(`M${f(bx)} ${f(by)}Q${f(mx + nx)} ${f(my + ny)} ${f(tx)} ${f(ty)}Q${f(mx - nx * 0.2)} ${f(my - ny * 0.2)} ${f(bx)} ${f(by)}Z`, ink);
    };
    leaf(x - h * 0.36, y - h * 0.98, 0.22);
    leaf(x + h * 0.04, y - h * 1.1, 0.2);
    leaf(x + h * 0.4, y - h * 0.86, -0.22);
  };
  const SLOTS = [
    // [lijevi rub pretinca, daska, roba]
    [-200, BOARDS[0], (x, y) => { jar(x + 70, y, 70, 96); bowl(x + 150, y, 84); }],
    [0, BOARDS[0], (x, y) => { vase(x + 66, y, 160); jar(x + 154, y, 56, 74); }],
    [200, BOARDS[0], (x, y) => { bottle(x + 62, y, 168); bottle(x + 134, y, 132); }],
    [400, BOARDS[0], (x, y) => { plates(x + 70, y, 104, 6); pot(x + 152, y, 150); }],
    [-200, BOARDS[1], (x, y) => { pot(x + 80, y, 140); }],
    [0, BOARDS[1], (x, y) => { bowl(x + 72, y, 116); jar(x + 158, y, 48, 110); }],
    [200, BOARDS[1], (x, y) => { mug(x + 58, y, 70); mug(x + 140, y, 70); }],
    [400, BOARDS[1], (x, y) => { vase(x + 92, y, 176); }],
    [-200, FLOOR, (x, y) => { vase(x + 100, y, 150); }],
    [0, FLOOR, (x, y) => { pot(x + 64, y, 160); plates(x + 152, y, 76, 8); }],
    [200, FLOOR, (x, y) => { jar(x + 64, y, 76, 120); bowl(x + 152, y, 80); }],
    [400, FLOOR, (x, y) => { bottle(x + 66, y, 160); mug(x + 142, y, 62); }],
  ];

  // 1 police: stranice, daske, podnožje
  b.g('nd nd-1', () => {
    for (const x of RACK) b.line(x, TOP, x, FLOOR, 'ln-2');
    for (const y of [TOP, ...BOARDS]) {
      b.line(-200, y - 14, RACK[RACK.length - 1] + 12, y - 14, 'ln-2');
      b.line(-200, y, RACK[RACK.length - 1] + 12, y, 'cut-w');
    }
    b.line(-200, FLOOR, RACK[RACK.length - 1] + 12, FLOOR, 'cut-w');
    b.line(-200, FLOOR + 22, RACK[RACK.length - 1] + 12, FLOOR + 22, 'ln-2');
  });

  // 2 roba u pretincima, ispod svake kostur naziva i cijene
  b.g('nd nd-2', () => {
    for (const [x, y, fn] of SLOTS) {
      fn(x, y);
      if (y !== FLOOR) {
        b.sk(x + 24, x + 136, y + 40, 'sk');
        b.sk(x + 24, x + 72, y + 68, 'sk-b');
      }
    }
  });

  // 3 kartica proizvoda: stvaran tekst; slika (šalica) desno
  b.g('nd nd-3', () => {
    b.rect(K.x0, K.y0, K.x1 - K.x0, K.y1 - K.y0, 'lit', ' rx="8"');
    mug(1014, 400, 160, 'lit-ln');
    b.line(930, 400, 1146, 400, 'lit-ln');
    b.say(T, 144, 'Keramička', 42, 't-real t-h');
    b.say(T, 192, 'šalica', 42, 't-real t-h');
    b.sk(T + 6, T + 118, 240, 'sk-b'); // cijena: samo kostur
    b.say(T, 300, 'Boja: bijela', 24, 't-real t-dim2');
    for (let i = 0; i < 3; i++) b.circle(T + 18 + i * 46, 338, 13, 'lit-ln');
    b.circle(T + 18, 338, 19, 'lit-ln');
  });

  // 4 gumb Dodaj u košaricu (svjetlo)
  const cx = (BTN.x0 + BTN.x1) / 2;
  b.g('nd nd-4', () => {
    b.rect(BTN.x0, BTN.y - 32, BTN.x1 - BTN.x0, 64, 'lamp-fill', ' rx="6"');
    b.say(cx - 6, BTN.y + 9, 'Dodaj u košaricu', 24, 't-real t-lamp', ' text-anchor="middle"'); // točka svjetla na „k“, ne u razmaku
  });

  // 5 put narudžbe: iz kartice preko naplate do paketa s adresnicom, koji izlazi preko desnog ruba
  const PAY = 852;
  const PX = 1072;
  b.g('nd nd-5', () => {
    b.poly([[700, K.y1], [700, LANE], [PX, LANE]], 'ln-3');
    b.poly([[PX - 22, LANE - 7], [PX - 12, LANE], [PX - 22, LANE + 7]], 'ln-2');
    // naplata: kartica za plaćanje
    b.rect(PAY - 50, LANE - 32, 100, 64, 'tile', ' rx="7"');
    b.line(PAY - 50, LANE - 15, PAY + 50, LANE - 15, 'ln-2');
    b.rect(PAY - 36, LANE - 2, 18, 14, 'ln-2', ' rx="2"');
    b.sk(PAY - 8, PAY + 32, LANE + 5, 'sk');
    // paket s adresnicom (pogled sprijeda), odrezan desnim rubom lista
    const top = LANE - 50;
    b.rect(PX, top, 180, 120, 'tile');
    b.line(PX, top + 22, PX + 180, top + 22, 'ln-h');
    b.rect(PX + 70, top, 26, 22, 'ln-h');
    b.rect(PX + 18, top + 40, 88, 62, 'ln-2');
    b.sk(PX + 32, PX + 92, top + 58, 'sk');
    b.sk(PX + 32, PX + 70, top + 82, 'sk');
    // točke mjerenja: košarica, naplata, kupnja
    for (const [x, y] of [[700, K.y1], [960, LANE], [PX, LANE]]) b.circle(x, y, 5, 'nib');
  });

  // 6 oznake i svjetlo
  b.g('nd nd-6', () => {
    b.callout('01', [500, FLOOR + 11], [[500, 900], [520, 900]], 'POLICE', '→ Katalog');
    b.callout('02', [PAY, LANE + 32], [[PAY, 794], [PAY - 12, 794]], 'NAPLATA', '→ Plaćanje', true);
    b.callout('03', [PX + 50, LANE + 70], [[PX + 50, 794], [PX + 38, 794]], 'PAKET', '→ Dostava', true);
    b.callout('04', [960, LANE], [[960, 604], [972, 604]], 'MJERENJE', '→ GA4 e-commerce');
    b.lamp({ at: [cx, BTN.y], r: 46, d: [cx + 16, 494, 'down'], m: [cx + 16, 486, 'down'] });
  });
}
