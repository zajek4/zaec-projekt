// AVIF inačice slika uz postojeći WebP (isti naziv, .avif). AVIF q45 drži točkastu matricu postera
// vizualno istom kao WebP, uz 35–55 % manje bajtova.
// Upotreba:  node tools/build-avif.mjs zaec/assets/img/world/poster.webp zaec/assets/img/world/poster-m.webp
import { statSync } from 'node:fs';
import sharp from 'sharp';

const files = process.argv.slice(2);
if (!files.length) {
  console.error('Upotreba: node tools/build-avif.mjs <slika.webp> […]');
  process.exit(1);
}
for (const f of files) {
  const out = f.replace(/\.(webp|png|jpe?g)$/i, '.avif');
  const info = await sharp(f).avif({ quality: 45, effort: 9 }).toFile(out);
  const src = statSync(f).size;
  console.log(`${out}: ${(info.size / 1024).toFixed(1)} kB (izvor ${(src / 1024).toFixed(1)} kB)`);
}
