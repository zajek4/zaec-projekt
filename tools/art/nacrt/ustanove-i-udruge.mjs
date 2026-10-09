// LIST 10 · Ustanove i udruge — tlocrt prizemlja ustanove, M 1:100 (32 u = 1 m). Predvorje kao kralježnica od ulaza
// do dvorišnog zida, info pult uz ulaz, oglasna ploča, sobe lijevo, dvorana s podijem i arhiva desno; ispred ulaza
// podest sa stubama i rampa nagiba 5 %. Svjetlo: info pult u vrijeme upisa — "upis u vrtić + grad".
export const meta = {
  slug: 'ustanove-i-udruge',
  list: '10',
  name: 'Ustanove i udruge',
  view: 'TLOCRT PRIZEMLJA · M 1:100',
  web: 'NOVOSTI · DOKUMENTI · UPIT',
  title: 'Tlocrt prizemlja ustanove s rampom, mjerilo 1:100',
  desc: 'Tehnički crtež prizemlja ustanove: ulaz s podestom, stubama i rampom, predvorje s info pultom i oglasnom pločom, sobe, dvorana s podijem i arhiva. Oznake 01–04 povezuju dijelove ustanove s dijelovima weba ustanove ili udruge. Info pult uz ulaz označen je toplim svjetlom.',
  lamp: { time: 'RUJAN · UPISI', search: 'upis u vrtić + grad', searchShort: 'upis u vrtić' },
  mvb: '450 50 680 562',
  tvb: '400 180 640 480',
  mobileCallout: 'c02',
};

export function draw(b) {
  const s = 32;
  const X = (m) => 450 + m * s;
  const Y = (m) => 222 + m * s;
  const R = (x0, y0, x1, y1, cls, attrs = '') => b.rect(X(x0), Y(y0), (x1 - x0) * s, (y1 - y0) * s, cls, attrs);
  const L = (x0, y0, x1, y1, cls) => b.line(X(x0), Y(y0), X(x1), Y(y1), cls);
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
  const TOP = [[1, 4], [6, 8.2], [10, 13]];
  const BOT = [[1, 4], [6.2, 8], [10, 13.5]];
  const RIGHT = [[5, 10.5]];
  const P = { x0: 7.4, x1: 8.8, y0: 8.6, y1: 9.4 }; // info pult

  // 1 osi i granica
  b.g('nd nd-1', () => {
    L(5.08, -0.8, 5.08, 15, 'ln-con');
    L(9.08, -0.8, 9.08, 15, 'ln-con');
    L(-0.8, 4.08, 16.8, 4.08, 'ln-con');
  });

  // 2 vanjski i nosivi zidovi
  b.g('nd nd-2', () => {
    for (const [a, c] of segs(-0.3, 16.3, TOP)) R(a, -0.3, c, 0, 'wall');
    for (const [a, c] of segs(-0.3, 16.3, BOT)) R(a, 12, c, 12.3, 'wall');
    R(-0.3, 0, 0, 12, 'wall');
    for (const [a, c] of segs(0, 12, RIGHT)) R(16, a, 16.3, c, 'wall');
    for (const [a, c] of segs(0, 12, [[1.6, 2.6], [8.4, 9.4]])) R(5, a, 5.15, c, 'wall');
    for (const [a, c] of segs(0, 12, [[1.4, 2.6], [9.8, 11.2]])) R(9, a, 9.15, c, 'wall');
    R(0, 5.6, 5, 5.75, 'wall');
    for (const [a, c] of segs(9.15, 16, [[12.6, 13.6]])) R(a, 4, c, 4.15, 'wall');
    R(12, 0, 12.15, 4, 'wall');
  });

  // 3 prozori, vrata, podest, stube i rampa
  b.g('nd nd-3', () => {
    for (const [a, c] of TOP) win(a, -0.3, c, 0);
    for (const [a, c] of [[1, 4], [10, 13.5]]) win(a, 12, c, 12.3);
    for (const [a, c] of RIGHT) win(16, a, 16.3, c);
    door([6.2, 12], [6.2, 11.1], [7.1, 12]);
    door([8, 12], [8, 11.1], [7.1, 12]);
    door([5, 2.6], [4, 2.6], [5, 1.6]);
    door([5, 9.4], [4, 9.4], [5, 8.4]);
    door([9, 2.6], [8, 2.6], [9, 1.4]);
    door([9.15, 11.2], [10.55, 11.2], [9.15, 9.8]);
    door([13.6, 4.15], [13.6, 5.15], [12.6, 4.15]);
    // podest, tri stube, rampa 5 % uz pročelje s rukohvatima
    R(5.7, 12.3, 8.5, 13.8, 'ln-2');
    for (const y of [14.1, 14.4, 14.7]) L(5.7, y, 8.5, y, 'ln-2');
    L(5.7, 13.8, 5.7, 14.7, 'ln-2');
    L(8.5, 13.8, 8.5, 14.7, 'ln-2');
    R(0.6, 12.45, 5.7, 13.8, 'ln-2');
    for (const y of [12.6, 13.65]) L(0.4, y, 5.7, y, 'ln-h');
    b.d(`M${X(5.2)} ${Y(13.12)} H${X(2.3)} m8 -5 l-8 5 l8 5`, 'ln-2');
  });

  // 4 oprema: info pult, oglasna ploča, klupe, dvorana s podijem, police arhive
  b.g('nd nd-4', () => {
    R(5.15, 2.9, 5.32, 5.4, 'cut', ` fill="${b.url('dots')}"`);
    for (const y of [6.4, 7.6]) R(5.25, y, 5.75, y + 0.9, 'ln-2');
    R(14.2, 5.6, 16, 11, 'ln-2');
    for (const y of [5.9, 6.2]) L(13.9, y, 14.2, y, 'ln-2');
    for (let x = 9.9; x < 13.6; x += 0.85) for (let y = 5.6; y < 11.4; y += 0.8) R(x, y, x + 0.42, y + 0.4, 'ln-h', ' fill="none"');
    for (const y of [0.5, 1.5, 2.5]) R(12.6, y, 15.6, y + 0.45, 'ln-2');
    // sobe: stolovi
    for (const [cx, cy] of [[1.6, 2.4], [3.4, 2.4], [1.6, 8.6], [3.4, 8.6]]) R(cx - 0.6, cy - 0.4, cx + 0.6, cy + 0.4, 'ln-h', ' fill="none"');
  });

  // 5 nazivi i kota
  b.g('nd nd-5', () => {
    b.text(X(2.5), Y(4.4), 'SOBA 1', 't-dim', ' text-anchor="middle"');
    b.text(X(2.5), Y(10.4), 'SOBA 2', 't-dim', ' text-anchor="middle"');
    b.text(X(11.6), Y(5.2), 'DVORANA', 't-dim', ' text-anchor="middle"');
    b.text(X(15.1), Y(8.3) + 5, 'PODIJ', 't-dim', ' text-anchor="middle"');
    b.text(X(1.35), Y(13.12) + 5, '5 %', 't-dim', ' text-anchor="middle"');
    if (b.v !== 'm') b.dim([X(16.3) + 22, Y(-0.3)], [X(16.3) + 22, Y(12.3)], '12,60', { side: -12, ext: [[[X(16.3), Y(-0.3)], [X(16.3) + 28, Y(-0.3)]], [[X(16.3), Y(12.3)], [X(16.3) + 28, Y(12.3)]]] });
  });

  // ključ: čestica s ulicom i ulazom
  b.key(() => {
    const [kx, ky] = [962, 42];
    b.rect(kx, ky, 150, 66, 'ln-h', ' fill="none"');
    b.rect(kx + 30, ky + 10, 70, 46, 'ln-2', ' style="fill:rgba(227,233,255,.08)"');
    b.line(kx - 6, ky + 76, kx + 156, ky + 76, 'ln-2');
    b.d(`M${kx + 62} ${ky + 72} V${ky + 60} m-5 7 l5 -7 l5 7`, 'ln-2');
    b.text(kx, ky + 100, 'KLJUČ · SITUACIJA', 't-small');
  });

  // 6 oznake i svjetlo: info pult
  b.g('nd nd-6', () => {
    b.callout('01', [X(7.1), Y(12.15)], [[X(7.1), 740], [X(7.1) + 12, 740]], 'ULAZ', '→ Ulaz za svakog posjetitelja');
    b.callout('02', [X(5.32), Y(4.1)], [[X(5.32), 100], [X(5.32) + 12, 100]], 'OGLASNA PLOČA', '→ Novosti i projekti');
    b.callout('03', [X(3), Y(13.4)], [[X(3), 800], [X(3) + 12, 800]], 'RAMPA', '→ Pristupačnost');
    b.callout('04', [X(15.6), Y(1.5) + 7], [[1000, Y(1.5) + 7]], 'ARHIVA', '→ Dokumenti');
    b.path([[X(P.x0), Y(P.y0)], [X(P.x1), Y(P.y0)], [X(P.x1), Y(P.y1)], [X(P.x0 + 0.4), Y(P.y1)], [X(P.x0), Y(P.y1 - 0.4)]], 'lamp-fill');
    b.lamp({ at: [X((P.x0 + P.x1) / 2), Y((P.y0 + P.y1) / 2)], d: [725, 175, 'up'], m: [725, 180, 'up'] });
  });
}
