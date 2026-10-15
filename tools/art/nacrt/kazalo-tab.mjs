// Kazalo kompleta — tablica listova istog standarda za naslovni list huba: djelatnosti (kazalo.mjs) i usluge
// (usluge.mjs). Redovi [{ n, name, view }] i zadnji, topli red (posao koji nije na popisu ili prvi korak).
// Hub prikazuje cijeli list sitnije nego podstranica: na desktopu veća slova (≥ 12 px u kadru); na mobilnom CSS
// daje 23 u, pa zbijeni redovi bez zaglavlja i stupca pogleda: svih 11 redova iznad zatamnjenja kadra (donjih 25 %).
// Tablica počinje u zoni čitanja (x ≥ 508): na 1024 px prvi red naslova huba seže do x ≈ 496.
export function kazalo(b, rows, { title = 'KAZALO LISTOVA', head, cols: c = {}, last }) {
  const m = b.v === 'm';
  const x0 = 504; // crte i naslov tablice; tekst redova od x 524
  const x1 = 1192;
  const top = m ? 172 : 190;
  const rh = m ? 34 : 52;
  // najduži naziv (25 znakova, 22 u) do x 956, pogled (17 znakova, 18 u) do x 1188
  const cols = { n: 524, nEnd: 554, name: 582, view: 980, ...c };
  const fs = (px) => (m ? '' : ` style="font-size:${px}px"`);
  const rowY = (i) => top + i * rh;
  const n = rows.length + 1;

  // 1 okvir tablice
  b.g('nd nd-1', () => {
    b.line(x0, top, x1, top, 'cut-w');
    b.line(x0, rowY(n), x1, rowY(n), 'cut-w');
    if (!m) for (const x of [cols.name - 14, cols.view - 14]) b.line(x, top - 34, x, rowY(n), 'ln-frame');
  });

  // 2 zaglavlje
  b.g('nd nd-2', () => {
    b.text(x0, top - (m ? 16 : 52), title, 't-call', ` font-weight="700"${fs(20)}`);
    if (m) return;
    // hub prikazuje list sitnije (kadar 0,68–0,71): zaglavlje 18 u da bude ≥ 12 px kao sav tekst
    b.text(cols.nEnd, top - 12, head[0], 't-small', `${fs(18)} text-anchor="end"`); // desno poravnato s brojevima, dalje od crte stupca
    b.text(cols.name, top - 12, head[1], 't-small', fs(18));
    b.text(cols.view, top - 12, head[2], 't-small', fs(18));
  });

  // 3–4 redovi listova
  const row = (r, i) => {
    const y = rowY(i) + rh / 2 + 8;
    b.text(cols.n, y, r.n, 't-call', ` font-weight="700"${fs(22)}`);
    b.text(cols.name, y, r.name, 't-call', fs(22));
    if (!m) b.text(cols.view, y, r.view, 't-dim', fs(18));
    b.line(x0, rowY(i + 1), x1, rowY(i + 1), 'ln-frame');
  };
  const half = Math.ceil(rows.length / 2);
  b.g('nd nd-3', () => rows.slice(0, half).forEach((r, i) => row(r, i)));
  b.g('nd nd-4', () => rows.slice(half).forEach((r, i) => row(r, i + half)));

  // 6 zadnji red (toplo)
  b.g('nd nd-6', () => {
    const y = rowY(n - 1) + rh / 2 + 8;
    b.P('<g class="call lamp">');
    b.circle(x0 - 12, y - 7, 3.5, 'dot'); // točka svjetla: provjera i čitač crteža vide red kao svjetlo
    b.text(cols.n, y, last.n, 't-call', ` font-weight="700"${fs(22)}`);
    b.text(cols.name, y, last.name, 't-call', fs(22));
    if (!m) b.text(cols.view, y, last.view, 't-dim', fs(18));
    b.P('</g>');
  });
}
