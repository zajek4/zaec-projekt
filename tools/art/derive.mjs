// Izvedene slike iz kadrova podstranica (pokrenuti nakon spremanja kadrova):
// - world/<ime>-800.webp: manja inačica za mobitele i rešetke kartica (srcset)
// - og/<ime>.jpg: 1200×630 za dijeljenje (WebP ne prihvaćaju sve mreže, npr. LinkedIn)
// node tools/art/derive.mjs
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const SRC = 'zaec/assets/img/world';
for (const f of fs.readdirSync(SRC).filter((n) => /^(djelatnost|usluga)-[a-z0-9-]+\.webp$/.test(n) && !n.endsWith('-800.webp'))) {
  const base = f.replace(/\.webp$/, '');
  const small = await sharp(path.join(SRC, f)).resize(800, 600, { kernel: 'lanczos3' }).webp({ quality: 76, effort: 6, smartSubsample: true }).toFile(path.join(SRC, base + '-800.webp'));
  const og = await sharp(path.join(SRC, f)).resize(1200, 630, { fit: 'cover', position: 'centre' }).jpeg({ quality: 80, mozjpeg: true }).toFile(path.join('zaec/assets/img/og', base + '.jpg'));
  console.log(base, Math.round(small.size / 1024) + ' kB (800)', Math.round(og.size / 1024) + ' kB (og)');
}
