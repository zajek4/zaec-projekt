// LIST 00 · Djelatnosti (hub) — naslovni list kompleta: kazalo deset listova istog standarda.
// Nema toplog svjetla na crtežu; jedino toplo je red 11 "Vaša djelatnost", poziv za posao koji nije na popisu.
import * as klima from './klima-i-grijanje.mjs';
import * as vodo from './vodoinstalateri.mjs';
import * as elektro from './elektricari.mjs';
import * as krov from './krovopokrivaci.mjs';
import * as gradnja from './gradevina-i-adaptacije.mjs';
import * as smjestaj from './ugostiteljstvo-i-smjestaj.mjs';
import * as trgovine from './trgovine-i-webshop.mjs';
import * as saloni from './saloni-ljepote.mjs';
import * as struka from './strucne-usluge.mjs';
import * as ustanove from './ustanove-i-udruge.mjs';

const sheets = [klima, vodo, elektro, krov, gradnja, smjestaj, trgovine, saloni, struka, ustanove].map((s) => s.meta);

export const meta = {
  slug: 'djelatnosti',
  list: '00',
  name: 'Djelatnosti',
  view: 'KAZALO KOMPLETA',
  web: 'STRANICA ZA SVAKU DJELATNOST',
  title: 'Kazalo kompleta Nacrt djelatnosti',
  desc: `Naslovni list kompleta tehničkih crteža, jedan list po djelatnosti: ${sheets.map((m) => `${m.list} ${m.name}`).join(', ')}. Posljednji red, vaša djelatnost, označen je toplim svjetlom.`,
  lamp: null,
  mvb: '440 128 680 562',
  tvb: '440 120 760 570',
  mobileCallout: '',
};

export function draw(b) {
  const m = b.v === 'm';
  // hub prikazuje cijeli list sitnije nego stranica djelatnosti: na desktopu veća slova (≥ 12 px u kadru),
  // na mobilnom CSS već daje 21 px, pa samo zbijeni redovi bez stupca pogleda
  const x0 = 470;
  const x1 = 1180;
  const top = m ? 200 : 190;
  const rh = m ? 38 : 52;
  const cols = { n: 474, name: 532, view: 944 };
  const fs = (px) => (m ? '' : ` style="font-size:${px}px"`);
  const rowY = (i) => top + i * rh;
  const view = (v) => {
    const [a, scale] = v.split(' · M ');
    const w = a.split(' ')[0];
    return `${w === 'JEDNOPOLNA' ? 'SHEMA' : w}${scale ? ` · ${scale}` : ''}`;
  };

  // 1 okvir tablice
  b.g('nd nd-1', () => {
    b.line(x0, top, x1, top, 'cut-w');
    b.line(x0, rowY(11), x1, rowY(11), 'cut-w');
    if (!m) for (const x of [cols.name - 14, cols.view - 14]) b.line(x, top - 34, x, rowY(11), 'ln-frame');
  });

  // 2 zaglavlje
  b.g('nd nd-2', () => {
    b.text(x0, top - 52, 'KAZALO LISTOVA', 't-call', ` font-weight="700"${fs(20)}`);
    b.text(cols.n, top - 12, 'LIST', 't-small');
    b.text(cols.name, top - 12, 'DJELATNOST', 't-small');
    if (!m) b.text(cols.view, top - 12, 'POGLED · MJERILO', 't-small');
  });

  // 3–4 redovi listova
  const row = (meta, i) => {
    const y = rowY(i) + rh / 2 + (m ? 7 : 8);
    b.text(cols.n, y, meta.list, 't-call', ` font-weight="700"${fs(22)}`);
    b.text(cols.name, y, meta.name, 't-call', fs(22));
    if (!m) b.text(cols.view, y, view(meta.view), 't-dim', fs(18));
    b.line(x0, rowY(i + 1), x1, rowY(i + 1), 'ln-frame');
  };
  b.g('nd nd-3', () => sheets.slice(0, 5).forEach((s, i) => row(s, i)));
  b.g('nd nd-4', () => sheets.slice(5).forEach((s, i) => row(s, i + 5)));

  // 6 red 11: vaša djelatnost (toplo)
  b.g('nd nd-6', () => {
    const y = rowY(10) + rh / 2 + (m ? 7 : 8);
    b.P('<g class="call lamp">');
    b.text(cols.n, y, '11', 't-call', ` font-weight="700"${fs(22)}`);
    b.text(cols.name, y, 'Vaša djelatnost', 't-call', fs(22));
    if (!m) b.text(cols.view, y, 'NA UPIT', 't-dim', fs(18));
    b.P('</g>');
  });
}
