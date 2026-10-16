// LIST 08 · Proizvodnja i industrija — prirubnica, pogled i presjek A–A, M 1:2 (radionički crtež dijela).
// Strani nabavljač čita crtež prije cijene: mjere, materijal i tolerancije. Svjetlo: provrt koji kupac traži po crtežu.
export const meta = {
  slug: 'proizvodnja-i-industrija',
  list: '08',
  name: 'Proizvodnja i industrija',
  view: 'POGLED I PRESJEK A–A · M 1:2',
  web: 'PROIZVODI · CERTIFIKATI · UPIT',
  title: 'Radionički crtež prirubnice u pogledu i presjeku, mjerilo 1:2',
  desc: 'Tehnički crtež prirubnice: pogled sprijeda sa središnjim otvorom i šest provrta na diobenom krugu te presjek A–A sa šrafiranim materijalom, uz kote promjera i debljine. Oznake 01–03 povezuju dijelove crteža s dijelovima weba proizvođača. Jedan provrt označen je toplim svjetlom.',
  lamp: { time: 'PON 07:30 · NABAVNA SLUŽBA', search: 'CNC obrada po narudžbi', searchShort: 'CNC obrada' },
  mvb: '420 180 680 562',
  mobileCallout: '', // mobilni izrez je uzak: samo svjetlo
};

export function draw(b) {
  const cx = 700;
  const cy = 430;
  const R = 170; // vanjski promjer 340
  const rb = 70; // središnji otvor 140
  const rp = 140; // diobeni krug 280
  const rh = 16; // provrti 6 × 32
  const sx0 = 940;
  const sx1 = 990; // presjek: debljina 50
  const holes = [30, 90, 150, 210, 270, 330].map((a) => [cx + rp * Math.cos((a * Math.PI) / 180), cy + rp * Math.sin((a * Math.PI) / 180)]);
  const lit = holes[2]; // 150° — dolje lijevo

  // 1 osi i diobeni krug
  b.g('nd nd-1', () => {
    b.line(cx - R - 40, cy, sx1 + 30, cy, 'ln-con');
    b.line(cx, cy - R - 40, cx, cy + R + 40, 'ln-con');
    b.circle(cx, cy, rp, 'ln-con');
    for (const y of [cy - rp, cy + rp]) b.line(sx0 - 14, y, sx1 + 14, y, 'ln-con');
  });

  // 2 pogled: obris, skošenje, središnji otvor
  b.g('nd nd-2', () => {
    b.circle(cx, cy, R, 'cut-w');
    b.circle(cx, cy, R - 10, 'ln-h');
    b.circle(cx, cy, rb, 'ln-2');
    b.circle(cx, cy, rb + 8, 'ln-h');
  });

  // 3 provrti
  b.g('nd nd-3', () => {
    for (const [x, y] of holes) b.circle(x, y, rh, 'ln-2');
  });

  // 4 presjek A–A: materijal šrafiran, provrti skriveni
  b.g('nd nd-4', () => {
    b.rect(sx0, cy - R, sx1 - sx0, R - rb, 'cut', ` fill="${b.url('hz')}"`);
    b.rect(sx0, cy + rb, sx1 - sx0, R - rb, 'cut', ` fill="${b.url('hz')}"`);
    for (const y of [cy - rp, cy + rp]) for (const d of [-rh, rh]) b.line(sx0, y + d, sx1, y + d, 'ln-3');
    // trag presjeka na pogledu
    if (b.v !== 'm') {
      b.text(sx0 - 4, cy - R - 20, 'A–A', 't-small');
    }
  });

  // 5 kote
  b.g('nd nd-5', () => {
    b.dim([cx - R, cy - R - 24], [cx + R, cy - R - 24], 'Ø 340', { ext: [[[cx - R, cy - 20], [cx - R, cy - R - 34]], [[cx + R, cy - 20], [cx + R, cy - R - 34]]] });
    b.dim([cx - rb, cy + 26], [cx + rb, cy + 26], 'Ø 140', { side: 18 });
    b.dim([sx0, cy + R + 28], [sx1, cy + R + 28], '50', { side: 18, ext: [[[sx0, cy + R + 4], [sx0, cy + R + 38]], [[sx1, cy + R + 4], [sx1, cy + R + 38]]] });
    if (b.v !== 'm') b.text(cx + rh + 10, cy - rp + 6, '6× Ø 32', 't-dim');
  });

  // 6 oznake i svjetlo
  b.g('nd nd-6', () => {
    b.callout('01', [sx1, cy - R + 30], [[1004, cy - R + 30], [1012, cy - R + 30]], 'PRESJEK', '→ Proizvodi');
    b.callout('02', [sx1 - 12, cy + R - 40], [[1004, cy + R - 40], [1012, cy + R - 40]], 'MATERIJAL', '→ Certifikati');
    b.callout('03', [(sx0 + sx1) / 2, cy + R + 28], [[(sx0 + sx1) / 2, cy + R + 90], [1012, cy + R + 90]], 'TOLERANCIJE', '→ Upit za ponudu');
    b.circle(lit[0], lit[1], rh, 'lamp-fill');
    b.lamp({ at: lit, d: [596, 690, 'down'], m: [440, 250, 'up'] });
  });
}
