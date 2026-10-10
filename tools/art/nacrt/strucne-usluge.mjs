// LIST 09 · Stručne usluge — tlocrt ureda, M 1:50 (56 u = 1 m). Prijem uz ulaz, sala za sastanke iza staklene
// pregrade, šest radnih mjesta u otvorenom uredu, arhiva s policama. Svjetlo: stol u sali za sastanke, ponedjeljak
// prije početka radnog dana — "knjigovodstvo za obrt".
export const meta = {
  slug: 'strucne-usluge',
  list: '09',
  name: 'Stručne usluge',
  view: 'TLOCRT UREDA · M 1:50',
  web: 'USLUGE · TIM · UPIT',
  title: 'Tlocrt ureda stručne službe, mjerilo 1:50',
  desc: 'Tehnički crtež ureda: prijem uz ulaz, sala za sastanke iza staklene pregrade, šest radnih mjesta i arhiva s policama. Oznake 01–04 povezuju dijelove ureda s dijelovima weba stručne usluge. Stol u sali za sastanke označen je toplim svjetlom.',
  lamp: { time: 'PONEDJELJAK · 08:50', search: 'knjigovodstvo za obrt' },
  mvb: '440 36 680 562',
  mobileCallout: 'c02',
};

export function draw(b) {
  const s = 56;
  const X = (m) => 440 + m * s;
  const Y = (m) => 220 + m * s;
  const R = (x0, y0, x1, y1, cls, attrs = '') => b.rect(X(x0), Y(y0), (x1 - x0) * s, (y1 - y0) * s, cls, attrs);
  const L = (x0, y0, x1, y1, cls) => b.line(X(x0), Y(y0), X(x1), Y(y1), cls);
  const hz = ` fill="${b.url('hz')}"`;
  const segs = (a0, a1, gaps) => {
    const out = [];
    let a = a0;
    for (const [g0, g1] of gaps) {
      out.push([a, g0]);
      a = g1;
    }
    out.push([a, a1]);
    return out;
  };
  const win = (x0, y0, x1, y1) => {
    R(x0, y0, x1, y1, 'ln-2');
    if (x1 - x0 > y1 - y0) L(x0, (y0 + y1) / 2, x1, (y0 + y1) / 2, 'ln-h');
    else L((x0 + x1) / 2, y0, (x0 + x1) / 2, y1, 'ln-h');
  };
  const door = (hinge, leaf, from) => {
    L(hinge[0], hinge[1], leaf[0], leaf[1], 'ln-2');
    const r = Math.hypot(leaf[0] - hinge[0], leaf[1] - hinge[1]) * s;
    const cw = (from[0] - hinge[0]) * (leaf[1] - hinge[1]) - (from[1] - hinge[1]) * (leaf[0] - hinge[0]) > 0 ? 1 : 0;
    b.d(`M${X(from[0])} ${Y(from[1])} A${r} ${r} 0 0 ${cw} ${X(leaf[0])} ${Y(leaf[1])}`, 'ln-h', ' fill="none"');
  };
  const TOP = [[1, 3], [5, 6], [6.8, 7.8], [8.6, 9.6]];
  const BOT = [[1, 2], [3.6, 6.4]];
  const T = { cx: 2, cy: 2.1, rx: 1.2, ry: 0.55 }; // stol za sastanke

  // 1 osi pregrada
  b.g('nd nd-1', () => {
    L(4.05, -0.6, 4.05, 7.6, 'ln-con');
    L(-0.6, 4.25, 10.6, 4.25, 'ln-con');
    L(7.05, 4.4, 7.05, 7.6, 'ln-con');
  });

  // 2 vanjski zidovi u presjeku
  b.g('nd nd-2', () => {
    for (const [a, c] of segs(-0.25, 10.25, TOP)) R(a, -0.25, c, 0, 'cut', hz);
    for (const [a, c] of segs(-0.25, 10.25, BOT)) R(a, 7, c, 7.25, 'cut', hz);
    R(-0.25, 0, 0, 7, 'cut', hz);
    for (const [a, c] of segs(0, 7, [[1, 3.5]])) R(10, a, 10.25, c, 'cut', hz);
  });

  // 3 staklena pregrada sale, zidovi arhive, prozori i vrata
  b.g('nd nd-3', () => {
    for (const x of [4, 4.1]) L(x, 0, x, 4.3, 'ln-2');
    for (const [a, c] of segs(0, 4.1, [[3, 3.9]])) for (const y of [4.2, 4.3]) L(a, y, c, y, 'ln-2');
    for (const [a, c] of segs(7, 10, [[7.3, 8.2]])) R(a, 4.9, c, 5, 'wall');
    R(7, 5, 7.1, 7, 'wall');
    for (const [a, c] of TOP) win(a, -0.25, c, 0);
    win(3.6, 7, 6.4, 7.25);
    win(10, 1, 10.25, 3.5);
    door([3.9, 4.25], [3.9, 3.35], [3, 4.25]);
    door([2, 7], [2, 6], [1, 7]);
    door([8.2, 4.95], [8.2, 4.05], [7.3, 4.95]);
  });

  // 4 namještaj: stolice sale, ekran, prijem, radna mjesta, police arhive
  b.g('nd nd-4', () => {
    for (const x of [1.3, 2, 2.7]) {
      R(x - 0.22, 1.12, x + 0.22, 1.48, 'ln-2');
      R(x - 0.22, 2.72, x + 0.22, 3.08, 'ln-2');
    }
    L(0.08, 1.3, 0.08, 2.9, 'cut-w');
    R(1.6, 4.9, 3.2, 5.5, 'cut-w');
    b.circle(X(2.4), Y(4.62), 0.22 * s, 'ln-2');
    for (const y of [5.4, 6]) R(0.1, y, 0.55, y + 0.45, 'ln-2');
    for (const x0 of [4.8, 6.6, 8.4]) {
      for (const [y0, cy] of [[0, 1.05], [2.4, 3.45]]) {
        R(x0, y0, x0 + 1.4, y0 + 0.7, 'ln-2');
        L(x0 + 0.4, y0 + 0.18, x0 + 1, y0 + 0.18, 'ln-h');
        b.circle(X(x0 + 0.7), Y(cy), 0.24 * s, 'ln-2');
      }
    }
    for (const x0 of [7.55, 8.35, 9.15]) {
      R(x0, 5.4, x0 + 0.42, 6.75, 'ln-2');
      for (let y = 5.7; y < 6.7; y += 0.3) L(x0, y, x0 + 0.42, y, 'ln-h');
    }
  });

  // 5 nazivi i kota fasade
  b.g('nd nd-5', () => {
    if (b.v !== 'm') b.text(X(5.4), Y(5.7), 'HODNIK', 't-dim', ' text-anchor="middle"'); // mobilni: u zatamnjenju kadra
    if (b.v !== 'm') b.dim([X(10.25) + 26, Y(-0.25)], [X(10.25) + 26, Y(4.9)], '5,15', { side: -12, ext: [[[X(10.25), Y(-0.25)], [X(10.25) + 32, Y(-0.25)]], [[X(10.25), Y(4.9)], [X(10.25) + 32, Y(4.9)]]] });
  });

  // ključ: tlocrt kata s uredom i stubištem
  b.key(() => {
    const [kx, ky] = [872, 58];
    b.rect(kx, ky, 136, 70, 'ln-2');
    b.rect(kx + 4, ky + 4, 62, 62, 'ln-2', ' style="fill:rgba(227,233,255,.08)"');
    b.rect(kx + 74, ky + 30, 26, 36, 'ln-h', ' fill="none"');
    for (let y = ky + 34; y < ky + 66; y += 6) b.line(kx + 74, y, kx + 100, y, 'ln-h');
    b.text(kx, ky + 96, 'KLJUČ · TLOCRT KATA', 't-small');
  });

  // 6 oznake i svjetlo: stol za sastanke
  b.g('nd nd-6', () => {
    b.callout('01', [X(2.4), Y(5.2)], [[X(2.4), 700], [X(2.4) + 12, 700]], 'PRIJEM', '→ Upit prema opsegu');
    b.callout('02', [X(0.6), Y(1)], [[X(0.6), 70], [X(0.6) + 12, 70]], 'SASTANAK', '→ Kako izgleda suradnja');
    b.callout('03', [X(5.5), Y(3.05)], [[X(5.5), 650], [900, 650]], 'RADNA MJESTA', '→ Tim i ovlaštenja');
    b.callout('04', [X(9.36), Y(6.1)], [[1030, Y(6.1)]], 'ARHIVA', '→ Reference');
    b.d(`M${X(T.cx - T.rx)} ${Y(T.cy)} A${T.rx * s} ${T.ry * s} 0 1 0 ${X(T.cx + T.rx)} ${Y(T.cy)} A${T.rx * s} ${T.ry * s} 0 1 0 ${X(T.cx - T.rx)} ${Y(T.cy)} Z`, 'lamp-fill');
    b.lamp({ at: [X(T.cx), Y(T.cy)], r: 40, d: [570, 150, 'up'], m: [570, 185, 'up'] });
  });
}
