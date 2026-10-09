// LIST 08 · Saloni ljepote — tlocrt salona, M 1:50 (64 u = 1 m). Četiri radna mjesta uz zid s ogledalima, svako s
// krugom okretanja stolice Ø 1,50 m; dva mjesta za pranje uz desni zid; recepcija uz ulaz, čekaonica uz lijevi zid,
// polica s proizvodima. Svjetlo: jedno radno mjesto (ogledalo, pult i stolica) — "frizer + grad".
export const meta = {
  slug: 'saloni-ljepote',
  list: '08',
  name: 'Saloni ljepote',
  view: 'TLOCRT SALONA · M 1:50',
  web: 'CJENIK · TERMINI · RECENZIJE',
  title: 'Tlocrt frizerskog salona, mjerilo 1:50',
  desc: 'Tehnički crtež salona: četiri radna mjesta uz zid s ogledalima i krugom okretanja stolice, mjesta za pranje, recepcija uz ulaz i čekaonica. Oznake 01–04 povezuju dijelove salona s dijelovima weba salona ljepote. Jedno radno mjesto označeno je toplim svjetlom.',
  lamp: { time: 'UTORAK · 17:30', search: 'frizer + grad' },
  mvb: '440 60 680 562',
  mobileCallout: 'c03',
};

export function draw(b) {
  const s = 64;
  const X = (m) => 440 + m * s;
  const Y = (m) => 230 + m * s;
  const R = (x0, y0, x1, y1, cls, attrs = '') => b.rect(X(x0), Y(y0), (x1 - x0) * s, (y1 - y0) * s, cls, attrs);
  const L = (x0, y0, x1, y1, cls) => b.line(X(x0), Y(y0), X(x1), Y(y1), cls);
  const hz = ` fill="${b.url('hz')}"`;
  const stations = [2.6, 4.1, 5.6, 7.1];
  const LAMP = 1;
  const CY = 0.95; // središte stolice od zida s ogledalima
  // radno mjesto: pult s ogledalom na zidu, stolica (sjedalo i naslon)
  const station = (c) => `M${X(c - 0.5)} ${Y(0)} H${X(c + 0.5)} V${Y(0.35)} H${X(c - 0.5)} Z M${X(c - 0.28)} ${Y(CY)} a${0.28 * s} ${0.28 * s} 0 1 0 ${0.56 * s} 0 a${0.28 * s} ${0.28 * s} 0 1 0 ${-0.56 * s} 0 Z`;

  // 1 osi radnih mjesta
  b.g('nd nd-1', () => {
    for (const c of stations) L(c, -0.6, c, 1.9, 'ln-con');
    L(-0.6, CY, 8.6, CY, 'ln-con');
  });

  // 2 zidovi u presjeku s otvorima za vrata i izlog
  b.g('nd nd-2', () => {
    R(-0.25, -0.25, 8.25, 0, 'cut', hz);
    R(-0.25, 0, 0, 6, 'cut', hz);
    R(8, 0, 8.25, 6, 'cut', hz);
    for (const [a, c] of [[-0.25, 0.6], [1.6, 2], [5.8, 8.25]]) R(a, 6, c, 6.25, 'cut', hz);
  });

  // 3 radna mjesta: ogledala, pultovi, stolice i krugovi okretanja
  b.g('nd nd-3', () => {
    stations.forEach((c, i) => {
      L(c - 0.45, 0.05, c + 0.45, 0.05, 'ln-2'); // ogledalo
      b.circle(X(c), Y(CY), 0.75 * s, 'ln-3');
      if (i === LAMP) return;
      b.d(station(c), 'ln-2');
      b.d(`M${X(c - 0.24)} ${Y(CY + 0.2)} A${0.32 * s} ${0.32 * s} 0 0 0 ${X(c + 0.24)} ${Y(CY + 0.2)}`, 'ln-2');
    });
  });

  // 4 pranje, recepcija, čekaonica, polica; vrata i izlog
  b.g('nd nd-4', () => {
    for (const c of [3.2, 4.2]) {
      R(7.5, c - 0.3, 8, c + 0.3, 'ln-2');
      b.P(`<ellipse class="ln-2" cx="${X(7.76)}" cy="${Y(c)}" rx="${0.15 * s}" ry="${0.2 * s}"/>`);
      R(6.3, c - 0.28, 7.45, c + 0.28, 'ln-2', ` rx="${0.12 * s}"`);
      L(7.1, c - 0.28, 7.1, c + 0.28, 'ln-h');
    }
    b.d(`M${X(2.2)} ${Y(4.3)} H${X(3.6)} V${Y(4.6)} Q${X(2.9)} ${Y(5.15)} ${X(2.2)} ${Y(4.6)} Z`, 'cut-w');
    b.circle(X(2.9), Y(3.95), 0.22 * s, 'ln-2');
    R(0, 2.4, 0.8, 4.4, 'ln-2');
    L(0.2, 2.4, 0.2, 4.4, 'ln-h');
    for (const y of [3.07, 3.73]) L(0.2, y, 0.8, y, 'ln-h');
    b.circle(X(1.4), Y(3.4), 0.35 * s, 'ln-2');
    R(0, 0.6, 0.35, 2, 'ln-2');
    for (const y of [0.95, 1.3, 1.65]) L(0, y, 0.35, y, 'ln-h');
    // ulazna vrata i izlog
    L(1.6, 6, 1.6, 5, 'ln-2');
    b.d(`M${X(0.6)} ${Y(6)} A${s} ${s} 0 0 1 ${X(1.6)} ${Y(5)}`, 'ln-h', ' fill="none"');
    R(2, 6, 5.8, 6.25, 'ln-2');
    L(2, 6.125, 5.8, 6.125, 'ln-h');
  });

  // 5 kote i nazivi
  b.g('nd nd-5', () => {
    if (b.v !== 'm') b.dim([X(-0.25), Y(6.25) + 34], [X(8.25), Y(6.25) + 34], '8,50', { side: -10 });
    b.text(X(5.6), Y(b.v === 'm' ? 3.6 : 3.82), 'PRANJE', 't-dim', ' text-anchor="middle"'); // mobilni: iznad zatamnjenja kadra
  });

  // detalj S: radno mjesto s krugom okretanja stolice
  b.key(() => {
    const [cx, cy] = [1062, 492];
    b.line(cx - 32, 430, cx + 32, 430, 'cut-w');
    b.rect(cx - 32, 430, 64, 22, 'ln-2');
    b.circle(cx, cy, 18, 'ln-2');
    b.circle(cx, cy, 48, 'ln-3');
    b.dim([cx - 48, cy + 62], [cx + 48, cy + 62], 'Ø 1,50', { side: 18, ext: [[[cx - 48, cy], [cx - 48, cy + 68]], [[cx + 48, cy], [cx + 48, cy + 68]]] });
    b.text(1000, 610, 'DETALJ S · M 1:25', 't-small');
  });

  // 6 oznake i svjetlo: jedno radno mjesto
  b.g('nd nd-6', () => {
    const c4 = stations[3];
    b.callout('01', [X(c4) + 0.28 * s, Y(CY)], [[990, Y(CY)]], 'RADNO MJESTO', '→ Cjenik');
    b.callout('02', [X(2.9), Y(4.75)], [[X(2.9), 690], [X(2.9) + 12, 690]], 'RECEPCIJA', '→ Online rezervacija');
    b.callout('03', [X(stations[2]), Y(0.05)], [[X(stations[2]), 96], [X(stations[2]) + 14, 96]], 'OGLEDALA', '→ Galerija i tim');
    b.callout('04', [X(0.4), Y(3.4)], [[X(0.4), 760], [X(0.4) + 12, 760]], 'ČEKAONICA', '→ Recenzije');
    const c = stations[LAMP];
    b.d(station(c), 'lamp-fill');
    b.lamp({ at: [X(c), Y(CY)], d: [545, 170, 'up'], m: [497, 176, 'up'] });
  });
}
