// Nacrt djelatnosti: generira poglede svih listova u zaec/assets/img/nacrt/<slug>-{d,m,t}.svg
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

for (const file of readdirSync(here).filter((n) => n.endsWith('.mjs') && !['std.mjs', 'build.mjs'].includes(n))) {
  const sheet = await import(join(here, file));
  const { slug, lamp } = sheet.meta;
  if (only && only !== slug) continue;
  if (!registry.includes(`'${lamp.search}'`)) console.warn(`! ${slug}: pretraga "${lamp.search}" nije u registru (searches)`);
  const sizes = [];
  for (const v of ['d', 'm', 't']) {
    const svg = render(sheet, v);
    writeFileSync(join(out, `${slug}-${v}.svg`), svg + '\n');
    sizes.push(`${v} ${(svg.length / 1024).toFixed(1)} kB`);
  }
  console.log(`${slug}: ${sizes.join(' · ')}`);
}
