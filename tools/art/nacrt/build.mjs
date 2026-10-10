// Nacrt djelatnosti (i list O nama): generira poglede svih listova u zaec/assets/img/nacrt/<slug>-{d,m,t}.svg
// i provjerava da pretraga svjetla postoji u registru (searches), a oznake ciljaju dijelove weba (onweb/structure).
// node tools/art/nacrt/build.mjs [slug]
import { readdirSync, writeFileSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { render } from './std.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const out = join(here, '../../../zaec/assets/img/nacrt');
mkdirSync(out, { recursive: true });
const only = process.argv[2];
const registry = readFileSync(join(here, '../../../zaec/inc/landing-industries.php'), 'utf8');

for (const file of readdirSync(here).filter((n) => n.endsWith('.mjs') && !['std.mjs', 'build.mjs', 'og.mjs'].includes(n))) {
  const sheet = await import(join(here, file));
  const { slug, lamp } = sheet.meta;
  if (only && only !== slug) continue;
  if (lamp && !registry.includes(`'${lamp.search}'`)) console.warn(`! ${slug}: pretraga "${lamp.search}" nije u registru (searches)`);
  // sastavnica na tabletnih 17 u: redovi stanu u 440 u (36 znakova)
  for (const [k, t] of sheet.meta.tb ? sheet.meta.tb.slice(3).map((t, i) => [`tb${i + 3}`, t]) : [['view', sheet.meta.view], ['web', `WEB · ${sheet.meta.web}`]]) if (t.length > 36) console.warn(`! ${slug}: ${k} "${t}" je dulji od 36 znakova`);
  const sizes = [];
  // list izvan kompleta nema sličicu (kazalo na hubu prikazuje samo djelatnosti)
  for (const v of sheet.meta.thumb === false ? ['d', 'm'] : ['d', 'm', 't']) {
    const svg = render(sheet, v);
    writeFileSync(join(out, `${slug}-${v}.svg`), svg + '\n');
    sizes.push(`${v} ${(svg.length / 1024).toFixed(1)} kB`);
  }
  console.log(`${slug}: ${sizes.join(' · ')}`);
}
