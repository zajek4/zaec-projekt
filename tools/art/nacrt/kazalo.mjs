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
  tbFs: 18, // sastavnica na hubu: 18 u (16 u bi u manjem kadru huba bilo 10,9–11,4 px)
};

export function draw(b) {
  const m = b.v === 'm';
  // hub prikazuje cijeli list sitnije nego stranica djelatnosti: na desktopu veća slova (≥ 12 px u kadru);
  // na mobilnom CSS daje 23 u, pa zbijeni redovi bez zaglavlja i stupca pogleda: svih 11 redova iznad zatamnjenja
  // kadra (donjih 25 % izreza)
  // tablica počinje u zoni čitanja (x ≥ 508): na 1024 px prvi red naslova huba seže do x ≈ 496
  const x0 = 504; // crte i naslov tablice; tekst redova od x 524
  const x1 = 1192;
  const top = m ? 172 : 190;
  const rh = m ? 34 : 52;
  const cols = { n: 524, name: 582, view: 980 }; // najduži naziv (25 znakova, 22 u) do x 956, pogled (17 znakova, 18 u) do x 1188
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
    b.text(x0, top - (m ? 16 : 52), 'KAZALO LISTOVA', 't-call', ` font-weight="700"${fs(20)}`);
    if (m) return;
    // hub prikazuje list sitnije (kadar 0,68–0,71): zaglavlje 18 u da bude ≥ 12 px kao sav tekst
    b.text(cols.n + 30, top - 12, 'LIST', 't-small', `${fs(18)} text-anchor="end"`); // desno poravnato s brojevima, dalje od crte stupca
    b.text(cols.name, top - 12, 'DJELATNOST', 't-small', fs(18));
    b.text(cols.view, top - 12, 'POGLED · MJERILO', 't-small', fs(18));
  });

  // 3–4 redovi listova
  const row = (meta, i) => {
    const y = rowY(i) + rh / 2 + 8;
    b.text(cols.n, y, meta.list, 't-call', ` font-weight="700"${fs(22)}`);
    b.text(cols.name, y, meta.name, 't-call', fs(22));
    if (!m) b.text(cols.view, y, view(meta.view), 't-dim', fs(18));
    b.line(x0, rowY(i + 1), x1, rowY(i + 1), 'ln-frame');
  };
  b.g('nd nd-3', () => sheets.slice(0, 5).forEach((s, i) => row(s, i)));
  b.g('nd nd-4', () => sheets.slice(5).forEach((s, i) => row(s, i + 5)));

  // 6 red 11: vaša djelatnost (toplo)
  b.g('nd nd-6', () => {
    const y = rowY(10) + rh / 2 + 8;
    b.P('<g class="call lamp">');
    b.circle(x0 - 12, y - 7, 3.5, 'dot'); // točka svjetla: provjera i čitač crteža vide red 11 kao svjetlo
    b.text(cols.n, y, '11', 't-call', ` font-weight="700"${fs(22)}`);
    b.text(cols.name, y, 'Vaša djelatnost', 't-call', fs(22));
    if (!m) b.text(cols.view, y, 'NA UPIT', 't-dim', fs(18));
    b.P('</g>');
  });
}
