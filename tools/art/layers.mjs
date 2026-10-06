// Prednji sloj kadra: piksele uzima iz pozadine, prozirnost iz siluete (matte) iste kamere.
// Tako je predmet ispred naslova (npr. toranj) piksel-identičan pozadini — nema ruba ni razlike u boji.
// node tools/art/layers.mjs onama-bg onama-matte onama-tower
import path from 'node:path';
import sharp from 'sharp';

const [bgName, matteName, outName] = process.argv.slice(2);
const DIR = 'zaec/assets/img/hero';
for (const [comp, also] of [['d', 1600], ['m', 720]]) {
  const bg = path.join(DIR, `${bgName}-${comp}.webp`);
  const matte = path.join(DIR, 'tmp', `${matteName}-${comp}.png`);
  const meta = await sharp(bg).metadata();
  const alpha = await sharp(matte).resize(meta.width, meta.height).extractChannel(3).toBuffer();
  const rgb = await sharp(bg).removeAlpha().toBuffer();
  const out = path.join(DIR, `${outName}-${comp}.webp`);
  const img = sharp(rgb).joinChannel(alpha);
  const a = await img.clone().webp({ quality: 80, alphaQuality: 85, effort: 6 }).toFile(out);
  const b = await sharp(out).resize(also).webp({ quality: 80, alphaQuality: 85, effort: 6 }).toFile(out.replace(/\.webp$/, `-${also}.webp`));
  console.log(out, Math.round(a.size / 1024) + ' kB', also + ':', Math.round(b.size / 1024) + ' kB');
}
