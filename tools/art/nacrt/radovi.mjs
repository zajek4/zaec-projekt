// LIST R · Radovi — ormar za nacrte (plan chest) u pročelju, M 1:10, i uokviren list na zidu iznad njega.
// Ideja stranice Radovi: javno pokazujemo samo izbor, rad na zidu je objavljen uz dopuštenje klijenta (svjetlo),
// a ladice su radovi koji ostaju između nas i klijenta. Svaki objavljeni rad ima isti sadržaj: problem, rješenje
// i ishod (kartica u ladici). Kote su crtež, ne izmjereni predmet.
export const meta = {
  slug: 'radovi',
  list: 'R',
  name: 'Radovi',
  view: 'ORMAR ZA NACRTE · M 1:10',
  web: '',
  title: 'Ormar za nacrte s ladicama i uokvirenim listom na zidu, mjerilo 1:10',
  desc: 'Tehnički crtež ormara za nacrte sa šest plitkih ladica i uokvirenim listom na zidu iznad njega. List na zidu svijetli toplim svjetlom: to je rad objavljen uz dopuštenje klijenta. Ladice su radovi koji nisu javni, a kartica na ladici nosi problem, rješenje i ishod.',
  lamp: null,
  mvb: '470 130 730 603',
  mobileCallout: 'c03',
  thumb: false,
  tb: ['ARHIVA RADOVA', 'LIST R', 'Radovi', 'ORMAR ZA NACRTE · M 1:10', 'JAVNO SAMO UZ DOPUŠTENJE KLIJENTA'],
};

const X0 = 620; // lijevi rub ormara
const X1 = 1100; // desni rub
const GY = 812; // pod
const TOP = 452; // gornja ploča
const N = 6; // ladice

export function draw(b) {
  const dh = (GY - 44 - (TOP + 14)) / N; // visina ladice

  // 1 pod i os
  b.g('nd nd-1', () => {
    b.rect(560, GY, 632, 12, 'wool', ` fill="${b.url('hz')}"`);
    b.line((X0 + X1) / 2, 120, (X0 + X1) / 2, GY + 10, 'ln-con');
  });

  // 2 obris ormara: pod, tijelo, gornja ploča, postolje
  b.g('nd nd-2', () => {
    b.line(560, GY, 1192, GY, 'cut');
    b.rect(X0 - 10, TOP, X1 - X0 + 20, 14, 'ln-2');
    b.rect(X0, TOP + 14, X1 - X0, GY - 44 - TOP - 14, 'ln-2');
    b.rect(X0 + 16, GY - 44, X1 - X0 - 32, 44, 'ln-2');
    b.rect(X0 + 28, GY - 36, X1 - X0 - 56, 28, 'ln-h', ` fill="${b.url('hz2')}"`);
  });

  // 3 ladice: fronta, ručka, držač kartice
  b.g('nd nd-3', () => {
    for (let i = 0; i < N; i++) {
      const y = TOP + 14 + i * dh;
      b.rect(X0 + 8, y + 5, X1 - X0 - 16, dh - 10, 'ln-h');
      const cx = (X0 + X1) / 2;
      b.d(`M${cx - 46} ${(y + dh / 2 + 8).toFixed(1)}v6h92v-6`, 'ln-2', ' fill="none"');
      b.rect(X0 + 30, y + dh / 2 - 14, 74, 22, 'ln-2');
      b.sk(X0 + 40, X0 + 94, y + dh / 2 - 3, 'sk');
    }
  });

  // 4 list na zidu (svjetlo): okvir, paspartu i shema objavljenog rada
  b.g('nd nd-4', () => {
    const [fx, fy, fw, fh] = [700, 150, 320, 236];
    b.line((X0 + X1) / 2, 120, fx + 40, fy, 'ln-h');
    b.line((X0 + X1) / 2, 120, fx + fw - 40, fy, 'ln-h');
    b.circle((X0 + X1) / 2, 120, 3, 'nib');
    b.rect(fx, fy, fw, fh, 'ln-2');
    b.rect(fx + 22, fy + 22, fw - 44, fh - 44, 'lamp-fill');
    const [ix, iy, iw] = [fx + 40, fy + 40, fw - 80];
    b.line(ix, iy + 14, ix + iw, iy + 14, 'lamp-ln');
    b.rect(ix, iy + 30, iw * 0.56, 54, 'lamp-ln');
    b.sk(ix + iw * 0.64, ix + iw, iy + 40, 'sk');
    b.sk(ix + iw * 0.64, ix + iw * 0.9, iy + 58, 'sk');
    b.sk(ix + iw * 0.64, ix + iw * 0.8, iy + 76, 'sk');
    for (let k = 0; k < 3; k++) b.rect(ix + k * (iw / 3) + 2, iy + 104, iw / 3 - 8, 34, 'lamp-ln');
  });

  // 5 kota visine
  b.g('nd nd-5', () => {
    const dx = X1 + 50;
    b.dim([dx, GY], [dx, TOP], '90 CM', { side: 16, ext: [[[X1 + 14, TOP], [dx + 8, TOP]], [[X1 - 12, GY - 2], [dx + 8, GY - 2]]] });
  });

  // 6 oznake i svjetlo
  b.g('nd nd-6', () => {
    b.callout('01', [700, 268], [[640, 268], [602, 268]], 'LIST NA ZIDU', '→ Objavljeno uz dopuštenje', true);
    b.callout('02', [X0 + 8, TOP + 14 + 3.5 * dh], [[580, TOP + 14 + 3.5 * dh]], 'LADICE', '→ Radovi koji nisu javni', true);
    b.callout('03', [X0 + 104, TOP + 14 + 0.5 * dh], [[X0 + 140, TOP - 34], [X0 + 170, TOP - 34]], 'KARTICA', '→ Problem · rješenje · ishod', false, { p: [[X0 + 104, 404], [X0 + 124, 404]], t2: '→ Problem i ishod' });
    b.P('<g class="call lamp">');
    b.circle(860, 268, 44, 'halo');
    b.P('</g>');
  });
}
