// LIST 00 · Djelatnosti (hub) — naslovni list kompleta: kazalo deset listova istog standarda.
// Nema toplog svjetla na crtežu; jedino toplo je red 11 "Vaša djelatnost", poziv za posao koji nije na popisu.
import { kazalo } from './kazalo-tab.mjs';
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
  head: 'DJELATNOSTI', // komplet su nacrti zanata i izlozi noću
  view: 'KAZALO KOMPLETA',
  web: 'STRANICA ZA SVAKU DJELATNOST',
  title: 'Kazalo listova djelatnosti',
  desc: `Naslovni list kompleta, jedan list po djelatnosti (nacrt za zanate, pročelje noću za ostale): ${sheets.map((m) => `${m.list} ${m.name}`).join(', ')}. Posljednji red, vaša djelatnost, označen je toplim svjetlom.`,
  lamp: null,
  mvb: '440 128 680 562',
  tvb: '440 120 760 570',
  mobileCallout: '',
  tbFs: 18, // sastavnica na hubu: 18 u (16 u bi u manjem kadru huba bilo 10,9–11,4 px)
};

export function draw(b) {
  // pogled lista u stupcu: prva riječ i mjerilo („PRESJEK · 1:10“); izlozi su svi pročelje noću
  const view = (v, head = '') => {
    if (head.includes('IZLOZI')) return 'PROČELJE · NOĆU';
    const [a, scale] = v.split(' · M ');
    const w = a.split(' ')[0];
    return `${w === 'JEDNOPOLNA' ? 'SHEMA' : w}${scale ? ` · ${scale}` : ''}`;
  };
  kazalo(b, sheets.map((s) => ({ n: s.list, name: s.name, view: view(s.view, s.head) })), {
    head: ['LIST', 'DJELATNOST', 'POGLED · MJERILO'],
    last: { n: '11', name: 'Vaša djelatnost', view: 'NA UPIT' },
  });
}
