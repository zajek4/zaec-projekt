// U.06 · Google Business profil — kartica profila na karti, rastavljena na dijelove kao sklop na nacrtu. Gore je
// pruga stvarne karte Osijeka (OSM): Drava, Tvrđa i most prema Baranji, s našom oznakom. Dijelovi profila (zaglavlje,
// gumbi, podaci, fotografije, recenzije) razmaknuti su po osi; kostur su svi osim onoga što ZAEC postavlja: naziv i
// primarna kategorija (svjetlo, blok „Tri greške“: pogrešna kategorija) i poveznica na pravu stranicu weba.
// Primjer obrta je izmišljen i bez brojki (bez ocjene, broja recenzija i radnog vremena).
import { mapPaths } from './city.mjs';

export const meta = {
  slug: 'google-business-profil',
  tvb: '420 60 800 600', // sličica na hubu: cijeli predmet usluge, ne samo svjetlo
  list: 'U6',
  name: 'Google Business profil',
  title: 'Kartica Google Business profila rastavljena na dijelove, nad kartom Tvrđe u Osijeku',
  desc: 'Iznad je pruga stvarne karte Osijeka s Dravom i Tvrđom i oznakom obrta. Ispod nje je uvećana kartica profila rastavljena na dijelove kao sklop: zaglavlje, gumbi, podaci, fotografije i recenzije. Dijelovi su nacrtani kao kostur, a stvarni su i osvijetljeni samo naziv „Vaš obrt”, primarna kategorija Vodoinstalater i poveznica na stranicu weba za odčepljenje odvoda. Toplo svjetlo je na primarnoj kategoriji. Oznake povezuju kategoriju s postavljanjem profila, poveznicu s webom, fotografije sa stvarnim radovima i recenzije sa sustavom za recenzije.',
  lamp: { time: '07:15 · ZAČEPLJEN ODVOD', search: 'odčepljenje odvoda' },
  mvb: '500 110 680 562',
  mobileCallout: null,
  index: 'PROFIL NA KARTI', // stupac u kazalu usluga (≤ 15 znakova)
  tb: ['USLUGE', 'U.06', 'Google Business profil', 'PROFIL · RASTAVLJEN', 'WEB · KATEGORIJA · FOTO · RECENZIJE'],
};

const X0 = 560; // kartica profila
const X1 = 1130;
const P = 28; // unutarnji rub
const S = 0.45; // jedinica lista po metru (karta)
const C = [1600, 30]; // Tvrđa (m od konkatedrale)
const O = [860, 164];
const BAND = 300; // donji rub pruge karte

export function draw(b) {
  const m = b.v === 'm';
  const clip = m ? [480, 90, 1200, BAND] : [-20, -20, 1220, BAND];
  const map = mapPaths({ o: O, c: C, s: S, clip });
  // dio kartice: maska (karta ne prolazi kroz njega) i obris
  const slab = (y, h, cls = 'ln-2') => {
    b.rect(X0, y, X1 - X0, h, 'mask', ' rx="10"');
    b.rect(X0, y, X1 - X0, h, cls, ' rx="10"');
  };
  const PIN = [(X0 + X1) / 2, O[1] + 64]; // oznaka leži na osi sklopa, tik iznad kartice

  // 1 pruga karte: voda i ulice, rez ispod
  b.g('nd nd-1', () => {
    if (map.water) b.d(map.water, 'map-w');
    if (map.roads[2]) b.d(map.roads[2], 'map-2');
    if (map.roads[1]) b.d(map.roads[1], 'map-1');
    if (map.roads[4]) b.d(map.roads[4], 'map-1'); // ulice Tvrđe
    if (map.roads[0]) b.d(map.roads[0], 'map-0');
    b.rect(-200, BAND, 1600, 900, 'mask');
  });

  // 2 osi sklopa (dijelovi profila leže na njima) i kostur dijelova; cijeli sklop završava iznad sastavnice (y 836)
  const Y = { head: 236, act: 468, info: 554, foto: 652, rev: 746 };
  const H = { head: 216, act: 70, info: 82, foto: 78, rev: 72 };
  const END = Y.rev + H.rev;
  b.g('nd nd-2', () => {
    // os sklopa (crta-točka) i vodilice rubova: vide se u razmacima između dijelova
    b.line(PIN[0], PIN[1] + 8, PIN[0], END + 16, 'ln-con');
    for (const x of [X0 + 10, X1 - 10]) b.line(x, Y.head + H.head - 10, x, END - 10, 'ln-3');
    // gumbi: poziv, ruta, web, spremi
    slab(Y.act, H.act);
    for (let i = 0; i < 4; i++) {
      const cx = X0 + P + 44 + i * 138;
      b.circle(cx, Y.act + 27, 18, 'ln-2');
      b.sk(cx - 24, cx + 24, Y.act + 56, 'sk');
    }
    // podaci: područje rada, radno vrijeme, web
    slab(Y.info, H.info);
    b.circle(X0 + P + 12, Y.info + 26, 9, 'ln-2');
    b.sk(X0 + P + 40, X0 + P + 300, Y.info + 26, 'sk');
    // fotografije stvarnih radova
    slab(Y.foto, H.foto);
    const fw = (X1 - X0 - 2 * P - 2 * 14) / 3;
    for (let i = 0; i < 3; i++) {
      const x = X0 + P + i * (fw + 14);
      b.rect(x, Y.foto + 14, fw, 50, 'ln-2', ' rx="4"');
      b.line(x, Y.foto + 14, x + fw, Y.foto + 64, 'ln-3');
      b.line(x, Y.foto + 64, x + fw, Y.foto + 14, 'ln-3');
    }
    // recenzije: zvjezdice bez ocjene, kostur teksta
    slab(Y.rev, H.rev);
    for (let i = 0; i < 5; i++) b.star(X0 + P + 12 + i * 28, Y.rev + 26, 11, 'ln-2');
    b.sk(X0 + P + 164, X0 + P + 300, Y.rev + 26, 'sk');
    b.sk(X0 + P, X0 + P + 420, Y.rev + 52, 'sk');
  });

  // 3 orijentiri na karti i naša oznaka
  b.g('nd nd-3', () => {
    if (!m) {
      b.text(PIN[0] + 30, PIN[1] - 60, 'TVRĐA', 't-small');
      b.text(560, 40, 'DRAVA', 't-small');
      b.text(1172, 30, '© OPENSTREETMAP', 't-small', ' text-anchor="end"');
    }
    const [x, y] = PIN;
    const r = 15;
    const hy = y - r * 2.3;
    b.d(`M${x} ${y}L${(x - r * 0.88).toFixed(1)} ${(hy + r * 0.48).toFixed(1)}A${r} ${r} 0 1 1 ${(x + r * 0.88).toFixed(1)} ${(hy + r * 0.48).toFixed(1)}Z`, 'lit-ln');
    b.circle(x, hy, r * 0.36, 'lit-ln');
  });

  // 4 zaglavlje (stvarno): naziv, primarna kategorija, područje rada; poveznica na web
  b.g('nd nd-4', () => {
    b.rect(X0, Y.head, X1 - X0, H.head, 'mask', ' rx="10"');
    b.rect(X0, Y.head, X1 - X0, H.head, 'lit', ' rx="10"');
    b.say(X0 + P, Y.head + 64, 'Vaš obrt', 48, 't-real t-h');
    b.say(X0 + P + 262, Y.head + 120, 'Osijek i okolica', 26, 't-real t-dim2');
    // poveznica na pravu stranicu weba
    if (!m) {
      b.circle(X0 + P + 12, Y.info + 57, 9, 'lit-ln');
      b.say(X0 + P + 40, Y.info + 66, 'vasobrt.hr/odcepljenje-odvoda', 24, 't-real');
    }
    // primarna kategorija: svjetlo
    b.rect(X0 + P, Y.head + 86, 236, 50, 'lamp-fill', ' rx="25"');
    b.say(X0 + P + 118, Y.head + 120, 'Vodoinstalater', 26, 't-real t-lamp', ' text-anchor="middle"');
  });

  // 6 oznake (lijevo, u zoni naslova) i svjetlo
  b.g('nd nd-6', () => {
    const L = X0 - 64;
    b.callout('01', [X0 + P + 3, Y.info + 57], [[L, Y.info + 57]], 'POVEZNICA', '→ Prava stranica', true);
    b.callout('02', [X0 + 8, Y.foto + 39], [[L, Y.foto + 39]], 'FOTOGRAFIJE', '→ Stvarni radovi', true);
    b.callout('03', [X0 + P + 1, Y.rev + 26], [[L, Y.rev + 26]], 'RECENZIJE', '→ Bez muke', true);
    // svjetlo na kategoriji: točka na donjem luku slova s, vodilica kreće ispod retka
    const cx = X0 + P + 118;
    const cy = Y.head + 118;
    b.lamp({ at: [cx, cy], r: 52, d: [cx + 16, Y.head + 188, 'down'], m: [cx + 16, Y.head + 197, 'down'] });
  });
}
