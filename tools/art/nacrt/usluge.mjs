// U.00 · Usluge (hub) — naslovni list usluga, isti standard kao kazalo djelatnosti (kazalo-tab.mjs): deset listova
// U.01–U.10 s onim što je na svakom nacrtano. Topli red je prvi korak koji hub nudi: besplatna provjera.
import { existsSync } from 'node:fs';
import { kazalo } from './kazalo-tab.mjs';

const SLUGS = ['izrada-web-stranica', 'webshop', 'landing-stranice', 'seo', 'lokalni-seo', 'google-business-profil', 'ai-vidljivost', 'ga4-i-pracenje-konverzija', 'brzina-web-stranice', 'odrzavanje-weba'];
const sheets = [];
for (const s of SLUGS) {
  const f = new URL(`./${s}.mjs`, import.meta.url);
  if (existsSync(f)) sheets.push((await import(f)).meta);
}

export const meta = {
  slug: 'usluge',
  name: 'Usluge',
  title: 'Kazalo listova usluga',
  desc: `Naslovni list usluga: jedan list po usluzi, s onim što je na njemu nacrtano: ${sheets.map((m) => `${m.tb[1]} ${m.tb[2]}`).join(', ')}. Posljednji red, besplatna provjera vidljivosti, označen je toplim svjetlom.`,
  lamp: null,
  mvb: '440 128 680 562',
  tvb: '440 120 760 570',
  mobileCallout: '',
  tbFs: 18, // kao kazalo djelatnosti: sastavnica u manjem kadru huba
  tb: ['USLUGE', 'U.00', 'Usluge', 'KAZALO USLUGA', 'WEB · PRETRAGA · USPOREDBA · KONTAKT'],
};

export function draw(b) {
  // stupac „na listu“: meta.index (kraći naziv) ili prvi dio pogleda iz sastavnice
  kazalo(b, sheets.map((m) => ({ n: m.tb[1], name: m.short || m.tb[2], view: m.index || m.tb[3].split(' · ')[0] })), {
    head: ['ŠIFRA', 'USLUGA', 'NA LISTU'],
    // šifre počinju na x 540: na 1024 × 768 zadnji redak naslova huba seže do x ≈ 527. Naziv do 22 znaka (meta.short)
    // završava do x ≈ 944, pogled do 15 znakova (meta.index) od x 1000 do ≈ 1188
    cols: { n: 540, nEnd: 600, name: 616, view: 1000 },
    last: { n: 'P.01', name: 'Besplatna provjera', view: 'BEZ OBVEZE' },
  });
}
