// LIST 06 · Ugostiteljstvo i smještaj — situacija i tlocrt prizemlja malog pansiona s terasom i bazenom, M 1:100
// (32 u = 1 m). Recepcija i salon uz ulaz, dvije sobe s kupaonicama na hodniku, terasa s pergolom (iznad, isprekidano)
// uz bazen, parkiralište uz ulicu. Svjetlo: dvije ležaljke na terasi uz bazen — "smještaj s bazenom".
export const meta = {
  slug: 'ugostiteljstvo-i-smjestaj',
  list: '06',
  name: 'Ugostiteljstvo i smještaj',
  view: 'SITUACIJA · TLOCRT · M 1:100',
  web: 'SMJEŠTAJ · GALERIJA · UPIT',
  title: 'Tlocrt malog pansiona s terasom i bazenom, mjerilo 1:100',
  desc: 'Tehnički crtež: recepcija i salon uz ulaz, dvije sobe s kupaonicama, terasa s pergolom uz bazen i parkiralište uz ulicu. Oznake 01–04 povezuju dijelove objekta s dijelovima weba za smještaj ili restoran. Ležaljke na terasi uz bazen označene su toplim svjetlom.',
  lamp: { time: 'SIJEČANJ · PLANIRANJE LJETA', search: 'smještaj s bazenom' },
  mvb: '510 22 680 562',
  tvb: '404 126 768 576',
  mobileCallout: 'c02',
};

export function draw(b) {
  const s = 32;
  const X = (m) => 420 + m * s;
  const Y = (m) => 110 + m * s;
  const R = (x0, y0, x1, y1, cls, attrs = '') => b.rect(X(x0), Y(y0), (x1 - x0) * s, (y1 - y0) * s, cls, attrs);
  const L = (x0, y0, x1, y1, cls) => b.line(X(x0), Y(y0), X(x1), Y(y1), cls);
  // zid po osi s otvorima: [od, do] duž zida
  const wallH = (y0, y1, x0, x1, gaps = []) => {
    let a = x0;
    for (const [g0, g1] of gaps) {
      R(a, y0, g0, y1, 'wall');
      a = g1;
    }
    R(a, y0, x1, y1, 'wall');
  };
  const wallV = (x0, x1, y0, y1, gaps = []) => {
    let a = y0;
    for (const [g0, g1] of gaps) {
      R(x0, a, x1, g0, 'wall');
      a = g1;
    }
    R(x0, a, x1, y1, 'wall');
  };
  const door = (hinge, leaf, from) => {
    L(hinge[0], hinge[1], leaf[0], leaf[1], 'ln-2');
    const r = Math.hypot(leaf[0] - hinge[0], leaf[1] - hinge[1]) * s;
    const cw = (from[0] - hinge[0]) * (leaf[1] - hinge[1]) - (from[1] - hinge[1]) * (leaf[0] - hinge[0]) > 0 ? 1 : 0;
    b.d(`M${X(from[0])} ${Y(from[1])} A${r} ${r} 0 0 ${cw} ${X(leaf[0])} ${Y(leaf[1])}`, 'ln-h', ' fill="none"');
  };
  const win = (x0, y0, x1, y1) => {
    R(x0, y0, x1, y1, 'ln-2');
    if (x1 - x0 > y1 - y0) L(x0, (y0 + y1) / 2, x1, (y0 + y1) / 2, 'ln-h');
    else L((x0 + x1) / 2, y0, (x0 + x1) / 2, y1, 'ln-h');
  };

  // 1 granica čestice, ulica, osi
  b.g('nd nd-1', () => {
    b.poly([[X(8), Y(18.5)], [X(23), Y(18.5)], [X(23), Y(0.5)], [X(0), Y(0.5)], [X(0), Y(18.5)], [X(0.5), Y(18.5)]], 'ln-sec');
    L(-1, 19.4, 24, 19.4, 'ln-2');
    L(7, 1, 7, 12, 'ln-con');
    L(19.25, 1.5, 19.25, 12, 'ln-con');
  });

  // 2 zgrada: vanjski i unutarnji zidovi
  b.g('nd nd-2', () => {
    wallH(2, 2.3, 1.5, 12.5, [[2.4, 4.4], [6.2, 7.8], [9.8, 11.4]]);
    wallH(9.7, 10, 1.5, 12.5, [[2.6, 3.6]]);
    wallV(1.5, 1.8, 2.3, 9.7, [[4, 6]]);
    wallV(12.2, 12.5, 2.3, 9.7, [[3.2, 5.2], [8.6, 9.5]]);
    wallV(5.5, 5.65, 2.3, 9.7, [[8.55, 9.45]]);
    wallV(9, 9.15, 2.3, 8.2);
    wallH(8.2, 8.35, 5.65, 12.2, [[7.5, 8.4], [11, 11.9]]);
    for (const dx of [0, 3.5]) {
      wallH(6.1, 6.2, 5.65 + dx, 7.4 + dx, [[6.2 + dx, 6.9 + dx]]);
      wallV(7.3 + dx, 7.4 + dx, 6.2, 8.2);
    }
  });

  // 3 oprema: recepcija, salon, sobe; vrata i prozori
  b.g('nd nd-3', () => {
    for (const [a, c] of [[2.4, 4.4], [6.2, 7.8], [9.8, 11.4]]) win(a, 2, c, 2.3);
    win(1.5, 4, 1.8, 6);
    R(12.2, 3.2, 12.5, 5.2, 'ln-2');
    door([3.6, 10], [3.6, 9], [2.6, 10]);
    door([5.65, 9.45], [6.55, 9.45], [5.65, 8.55]);
    door([8.4, 8.2], [8.4, 7.3], [7.5, 8.2]);
    door([11.9, 8.2], [11.9, 7.3], [11, 8.2]);
    door([12.2, 9.5], [13.1, 9.5], [12.2, 8.6]);
    // recepcija: pult u obliku slova L
    b.path([[X(4), Y(7.4)], [X(5.3), Y(7.4)], [X(5.3), Y(8.8)], [X(4.9), Y(8.8)], [X(4.9), Y(7.8)], [X(4), Y(7.8)]], 'ln-2');
    // salon: dva stola sa stolicama
    for (const cx of [2.75, 4.55]) {
      b.circle(X(cx), Y(4.3), 0.45 * s, 'ln-2');
      for (const a of [90, 270]) {
        const r = (a * Math.PI) / 180;
        b.circle(X(cx) + 0.75 * s * Math.cos(r), Y(4.3) + 0.75 * s * Math.sin(r), 0.17 * s, 'ln-h', ' fill="none"');
      }
    }
    // sobe: bračni krevet, kupaonica s tušem
    for (const dx of [0, 3.5]) {
      R(6.6 + dx, 2.3, 8.2 + dx, 4.3, 'ln-2');
      L(6.6 + dx, 2.75, 8.2 + dx, 2.75, 'ln-h');
      R(5.65 + dx, 7.3, 6.55 + dx, 8.2, 'ln-2');
      b.d(`M${X(5.65 + dx)} ${Y(7.3)} L${X(6.55 + dx)} ${Y(8.2)} M${X(5.65 + dx)} ${Y(8.2)} L${X(6.55 + dx)} ${Y(7.3)}`, 'ln-h');
      b.P(`<ellipse class="ln-2" cx="${X(6.95 + dx)}" cy="${Y(7.75)}" rx="${0.17 * s}" ry="${0.25 * s}"/>`);
    }
  });

  // 4 terasa s pergolom, bazen, parkiralište, staza
  b.g('nd nd-4', () => {
    R(12.5, 2.5, 16.5, 11, 'ln-2');
    for (let y = 3; y < 11; y += 0.5) L(12.5, y, 16.5, y, 'ln-tile');
    for (const [px, py] of [[12.8, 6.6], [16, 6.6], [12.8, 10.6], [16, 10.6]]) R(px - 0.12, py - 0.12, px + 0.12, py + 0.12, 'ln-2');
    R(12.8, 6.6, 16, 10.6, 'ln-beyond');
    for (let x = 13.4; x < 16; x += 0.6) L(x, 6.6, x, 10.6, 'ln-beyond');
    R(16.5, 2, 22.5, 11.5, 'ln-2');
    R(17, 3, 21.5, 10, 'ln-2');
    R(17.15, 3.15, 21.35, 9.85, 'water');
    for (const [wx, wy] of [[18, 4.6], [19.6, 5.8], [18.4, 7.4], [20, 8.6]]) {
      b.d(`M${X(wx)} ${Y(wy)} q${0.25 * s} ${-0.2 * s} ${0.5 * s} 0 t${0.5 * s} 0`, 'ln-h', ' fill="none"');
    }
    for (const yy of [9.2, 9.5]) L(17.15, yy, 18.4, yy, 'ln-2');
    // parkiralište: tri mjesta 2,5 × 5 m, jedan auto (obris)
    L(0.5, 13.2, 8, 13.2, 'ln-2');
    for (const x of [0.5, 3, 5.5, 8]) L(x, 13.2, x, 18.5, 'ln-2');
    b.rect(X(0.85), Y(13.7), 1.8 * s, 4.3 * s, 'ln-beyond', ` rx="${0.5 * s}"`);
    // staza do ulaza
    L(2.4, 10, 2.4, 13.2, 'ln-2');
    L(3.8, 10, 3.8, 13.2, 'ln-2');
    for (let y = 10.6; y < 13.2; y += 0.6) L(2.4, y, 3.8, y, 'ln-tile');
    b.circle(X(20.5), Y(15.5), 1.2 * s, 'ln-h', ' fill="none"');
    b.circle(X(20.5), Y(15.5), 2, 'nib');
  });

  // 5 kote i nazivi
  b.g('nd nd-5', () => {
    b.dim([X(1.5), Y(1.35)], [X(12.5), Y(1.35)], '11,00', { side: -10 });
    b.dim([X(17), Y(10.75)], [X(21.5), Y(10.75)], '4,50', { side: 18 });
    if (b.v !== 'm') b.text(X(3.5), Y(6.5), 'RECEPCIJA', 't-dim', ' text-anchor="middle"');
    b.text(X(7.3), Y(5.3), 'SOBA 1', 't-dim', ' text-anchor="middle"');
    b.text(X(10.7), Y(5.3), 'SOBA 2', 't-dim', ' text-anchor="middle"');
    b.text(X(19.25), Y(6.6), 'BAZEN', 't-dim', ' text-anchor="middle"');
    if (b.v !== 'm') b.text(X(23.6), Y(19.4) + 22, 'ULICA', 't-small', ' text-anchor="end"');
  });

  // ključ: blok s česticom i strelica sjevera
  b.key(() => {
    const [kx, ky] = [444, 744];
    for (const [dx, dy, w, h] of [[0, 0, 40, 30], [44, 0, 34, 30], [0, 34, 40, 26], [82, 0, 30, 30]]) b.rect(kx + dx, ky + dy, w, h, 'ln-h', ' fill="none"');
    b.rect(kx + 44, ky + 34, 68, 26, 'ln-2');
    b.line(kx - 6, ky + 68, kx + 120, ky + 68, 'ln-2');
    b.circle(kx + 150, ky + 30, 16, 'ln-2');
    b.d(`M${kx + 150} ${ky + 8} L${kx + 144} ${ky + 34} L${kx + 150} ${ky + 30} L${kx + 156} ${ky + 34} Z`, 'ln-2');
    b.text(kx + 146, ky + 6, 'S', 't-key');
    b.text(kx, ky + 94, 'KLJUČ · SITUACIJA', 't-small');
  });

  // 6 oznake i svjetlo: ležaljke na terasi uz bazen
  b.g('nd nd-6', () => {
    b.callout('01', [X(11.6), Y(7.2)], [[X(11.6), 560], [X(11.6) + 12, 560]], 'SOBE', '→ Smještaj ili meni');
    b.callout('02', [X(16), Y(10.5)], [[1000, 500], [1008, 500]], 'TERASA', '→ Galerija');
    b.callout('03', [X(4.25), Y(15.5)], [[700, 645]], 'ULAZ · PARKING', '→ Lokacija');
    b.callout('04', [X(4.6), Y(7.65)], [[X(4.6), 490], [570, 490]], 'RECEPCIJA', '→ Upit / rezervacija');
    b.d(['15', '15.85'].map((x) => `M${X(+x)} ${Y(3.6)} h${0.7 * s} v${2 * s} h${-0.7 * s} Z M${X(+x)} ${Y(4.1)} h${0.7 * s}`).join(' '), 'lamp-fill');
    b.lamp({ at: [X(15.78), Y(4.6)], d: [628, 80, 'up'], m: [536, 80, 'up'] });
  });
}
