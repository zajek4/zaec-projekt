// LIST 05 · Građevina i adaptacije — tlocrt stana s konvencijom rušenje / novo, M 1:50 (64 u = 1 m).
// Postojeći zidovi puni, zidovi za rušenje isprekidani, novi zid šrafiran. Ruši se zid između boravka i kuhinje
// i stari zid kupaonice; novi zid pomiče kupaonicu u hodnik (4,5 → 6,4 m²). Svjetlo: kupaonica nakon adaptacije.
export const meta = {
  slug: 'gradevina-i-adaptacije',
  list: '05',
  name: 'Građevina i adaptacije',
  view: 'TLOCRT · RUŠENJE / NOVO · M 1:50',
  web: 'PROJEKTI · PROCES · UPIT',
  title: 'Tlocrt stana s označenim rušenjem i novim zidovima, mjerilo 1:50',
  desc: 'Tehnički crtež adaptacije stana: postojeći zidovi puni, zidovi za rušenje isprekidani, novi zid šrafiran. Zid između boravka i kuhinje se ruši, a kupaonica se novim zidom širi u hodnik. Oznake 01–04 povezuju dijelove nacrta s dijelovima weba izvođača radova. Nova kupaonica označena je toplim svjetlom.',
  lamp: { time: 'SUBOTA · OBILAZAK STANA', search: 'adaptacija kupaonice cijena' },
  mvb: '510 68 680 562',
  tvb: '390 150 640 480',
  mobileCallout: 'c03',
  // gušća šrafura za tanke nove zidove (10 cm = 6,4 u)
  defs: (b) => [`<pattern id="${b.id('hz4')}" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="4" class="ln-h"/></pattern>`],
};

export function draw(b) {
  const s = 64;
  const X = (m) => 420 + m * s;
  const Y = (m) => 176 + m * s;
  const R = (x0, y0, x1, y1, cls, attrs = '') => b.rect(X(x0), Y(y0), (x1 - x0) * s, (y1 - y0) * s, cls, attrs);
  const area = (x0, y0, x1, y1) => ((x1 - x0) * (y1 - y0)).toFixed(1).replace('.', ',');
  const label = (x, y, name, a) => {
    if (b.v === 'm' && x < 3.5) return; // mobilni izrez počinje u sobi 1
    b.text(X(x), Y(y), name, 't-dim', ' text-anchor="middle"');
    b.text(X(x), Y(y) + 20, `${a} m²`, 't-dim', ' text-anchor="middle"');
  };
  // prozor u otvoru zida: dvije crte okvira i staklo
  const win = (x0, y0, x1, y1) => {
    R(x0, y0, x1, y1, 'ln-2');
    if (x1 - x0 > y1 - y0) b.line(X(x0), Y((y0 + y1) / 2), X(x1), Y((y0 + y1) / 2), 'ln-h');
    else b.line(X((x0 + x1) / 2), Y(y0), X((x0 + x1) / 2), Y(y1), 'ln-h');
  };
  // vrata: krilo od šarke i luk otvaranja
  const door = (hinge, leaf, from) => {
    b.line(X(hinge[0]), Y(hinge[1]), X(leaf[0]), Y(leaf[1]), 'ln-2');
    const r = Math.hypot(leaf[0] - hinge[0], leaf[1] - hinge[1]) * s;
    const cw = (from[0] - hinge[0]) * (leaf[1] - hinge[1]) - (from[1] - hinge[1]) * (leaf[0] - hinge[0]) > 0 ? 1 : 0;
    b.d(`M${X(from[0])} ${Y(from[1])} A${r} ${r} 0 0 ${cw} ${X(leaf[0])} ${Y(leaf[1])}`, 'ln-h', ' fill="none"');
  };

  // 1 osi zidova
  b.g('nd nd-1', () => {
    for (const m of [0.125, 3.56, 6.875]) b.line(X(-0.5), Y(m), X(9.5), Y(m), 'ln-con');
    for (const m of [0.125, 3.66, 6.36, 8.875]) b.line(X(m), Y(-0.5), X(m), Y(7.5), 'ln-con');
  });

  // 2 postojeći zidovi (puni), s otvorima za prozore i vrata
  b.g('nd nd-2', () => {
    for (const [a, c] of [[0, 1], [2.4, 4.4], [5.6, 7.3], [8, 9]]) R(a, 0, c, 0.25, 'wall');
    for (const [a, c] of [[0, 0.9], [3.3, 5], [5.9, 9]]) R(a, 6.75, c, 7, 'wall');
    for (const [a, c] of [[0.25, 4.3], [5.7, 6.75]]) R(0, a, 0.25, c, 'wall');
    for (const [a, c] of [[0.25, 5.4], [6.4, 6.75]]) R(8.75, a, 9, c, 'wall');
    for (const [a, c] of [[0.25, 2.5], [3.3, 5.2], [6, 6.3]]) R(a, 3.5, c, 3.62, 'wall');
    R(3.6, 0.25, 3.72, 3.5, 'wall');
    for (const [a, c] of [[0.25, 3.9], [4.7, 6.75]]) R(6.3, a, 6.42, c, 'wall');
  });

  // 3 rušenje: zid boravak / kuhinja i stari zid kupaonice
  b.g('nd nd-3', () => {
    R(4.4, 3.62, 4.52, 6.75, 'ln-3');
    R(6.42, 2.2, 8.75, 2.32, 'ln-3');
  });

  // 4 novi zid, prozori, vrata, oprema
  b.g('nd nd-4', () => {
    for (const [a, c] of [[6.42, 7.3], [8.1, 8.75]]) R(a, 2.98, c, 3.12, 'cut', ` fill="${b.url('hz4')}"`);
    for (const [a, c] of [[1, 2.4], [4.4, 5.6], [7.3, 8]]) win(a, 0, c, 0.25);
    for (const [a, c] of [[0.9, 3.3], [5, 5.9]]) win(a, 6.75, c, 7);
    win(0, 4.3, 0.25, 5.7);
    door([3.3, 3.5], [3.3, 2.7], [2.5, 3.5]);
    door([6, 3.5], [6, 2.7], [5.2, 3.5]);
    door([6.3, 4.7], [5.5, 4.7], [6.3, 3.9]);
    door([8.1, 3], [8.1, 2.2], [7.3, 3]);
    door([8.75, 6.4], [7.75, 6.4], [8.75, 5.4]);
    // kupaonica: tuš, WC, umivaonik, perilica
    R(7.85, 0.25, 8.75, 1.15, 'ln-2');
    b.d(`M${X(7.85)} ${Y(0.25)} L${X(8.75)} ${Y(1.15)} M${X(7.85)} ${Y(1.15)} L${X(8.75)} ${Y(0.25)}`, 'ln-h');
    R(6.5, 0.25, 6.95, 0.42, 'ln-2');
    b.P(`<ellipse class="ln-2" cx="${X(6.725)}" cy="${Y(0.72)}" rx="${0.18 * s}" ry="${0.27 * s}"/>`);
    R(8.3, 1.6, 8.75, 2.2, 'ln-2');
    b.P(`<ellipse class="ln-2" cx="${X(8.5)}" cy="${Y(1.9)}" rx="${0.14 * s}" ry="${0.2 * s}"/>`);
    R(6.42, 2.35, 7, 2.93, 'ln-2');
    b.circle(X(6.71), Y(2.64), 0.2 * s, 'ln-2');
    // kuhinjski blok uz vanjski zid: sudoper i ploča
    R(4.52, 6.15, 6.3, 6.75, 'ln-2');
    R(4.75, 6.27, 5.25, 6.63, 'ln-2');
    for (const [cx, cy] of [[5.6, 6.32], [5.95, 6.32], [5.6, 6.6], [5.95, 6.6]]) b.circle(X(cx), Y(cy), 0.09 * s, 'ln-2');
    // ulaz
    b.d(`M${X(9.55)} ${Y(5.9)} H${X(9.08)} m8 -5 l-8 5 l8 5`, 'ln-2');
  });

  // 5 kote i površine
  b.g('nd nd-5', () => {
    if (b.v !== 'm') b.dim([X(0), Y(7.55)], [X(9), Y(7.55)], '9,00', { side: -10, ext: [[[X(0), Y(7.1)], [X(0), Y(7.65)]], [[X(9), Y(7.1)], [X(9), Y(7.65)]]] });
    label(1.92, 1.75, 'SOBA 1', area(0.25, 0.25, 3.6, 3.5));
    label(4.95, 1.75, 'SOBA 2', area(3.72, 0.25, 6.3, 3.5));
    label(7.55, 1.45, 'KUPAONICA', area(6.42, 0.25, 8.75, 3));
    label(7.55, 4.5, 'HODNIK', area(6.42, 3.1, 8.75, 6.75));
    label(2.6, 5, 'BORAVAK + KUHINJA', area(0.25, 3.62, 6.3, 6.75));
    b.text(X(9.1), Y(5.62), 'ULAZ', 't-small');
  });

  // ključ: konvencija crtanja
  b.key(() => {
    const kx = 444;
    [['wall', 'POSTOJEĆE'], ['ln-3', 'RUŠENJE'], ['cut', 'NOVO']].forEach(([cls, t], i) => {
      const yy = 50 + i * 26;
      b.rect(kx, yy, 40, 9, cls, cls === 'cut' ? ` fill="${b.url('hz4')}"` : '');
      b.text(kx + 54, yy + 10, t, 't-small');
    });
    b.text(kx, 150, 'KLJUČ · OZNAKE', 't-small');
  });

  // 6 oznake i svjetlo: pod nove kupaonice
  b.g('nd nd-6', () => {
    b.callout('01', [X(4.46), Y(5.8)], [[X(4.46), 720], [X(4.46) - 16, 720]], 'RUŠENJE', '→ Proces', true);
    b.callout('02', [X(8.4), Y(3.05)], [[1004, 405]], 'NOVI ZIDOVI', '→ Usluge');
    b.callout('03', [X(8.53), Y(2.1)], [[1004, 312]], 'KUPAONICA', '→ Projekti');
    b.callout('04', [X(7.55), Y(4.5) + 26], [[X(7.55), 720], [X(7.55) + 12, 720]], 'KOTE (m²)', '→ Upit prema opsegu');
    R(6.42, 0.25, 8.75, 3, 'lamp-fill', ' style="fill:rgba(255,207,138,.09)"'); // cijela prostorija: tiša ispuna od malog elementa
    b.lamp({ at: [X(8.3), Y(0.7)], d: [650, 130, 'up'], m: [536, 130, 'up'] });
  });
}
