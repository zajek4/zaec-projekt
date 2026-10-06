// Prednji sloj kadra: piksele uzima iz pozadine, prozirnost iz siluete (matte) iste kamere.
// Tako je predmet ispred naslova (npr. toranj) piksel-identičan pozadini — nema ruba ni razlike u boji.
// node tools/art/layers.mjs onama-bg onama-matte onama-tower
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

// Izrez: node tools/art/layers.mjs --crop kontakt-lit kontakt → hero/kontakt-lit-{d,m}.webp, samo okvir zgrade
// (meta.crop u postocima kadra) s mekim rubom alfe, da se šav s pozadinom ne vidi.
const DIR = 'zaec/assets/img/hero';
if (process.argv[2] === '--crop') {
  const [, name, metaName] = process.argv.slice(2);
  for (const comp of ['d', 'm']) {
    const meta = JSON.parse(fs.readFileSync(path.join(DIR, `${metaName}-${comp}.json`), 'utf8'));
    const c = meta.crop;
    const src = path.join(DIR, 'tmp', `${name}-${comp}.png`);
    const { width: W, height: H } = await sharp(src).metadata();
    const left = Math.round((c.x / 100) * W), top = Math.round((c.y / 100) * H);
    const width = Math.min(W - left, Math.round((c.w / 100) * W)), height = Math.min(H - top, Math.round((c.h / 100) * H));
    const rgb = await sharp(src).extract({ left, top, width, height }).removeAlpha().raw().toBuffer();
    // alfa: 1 u sredini, meki rub (dno ostaje tvrdo ako izrez dodiruje rub kadra)
    const fx = Math.round(width * 0.07), fy = Math.round(height * 0.035), hardBottom = top + height >= H - 1;
    const a = Buffer.alloc(width * height);
    for (let y = 0; y < height; y++) for (let x = 0; x < width; x++) {
      const ex = Math.min(1, x / fx, (width - 1 - x) / fx);
      const ey = Math.min(1, y / fy, hardBottom ? 1 : (height - 1 - y) / fy);
      const t = Math.max(0, Math.min(ex, ey));
      a[y * width + x] = Math.round(255 * t * t * (3 - 2 * t));
    }
    const out = path.join(DIR, `${name}-${comp}.webp`);
    const info = await sharp(rgb, { raw: { width, height, channels: 3 } }).joinChannel(a, { raw: { width, height, channels: 1 } }).webp({ quality: 78, alphaQuality: 70, effort: 6 }).toFile(out);
    console.log(out, `${width}×${height}`, Math.round(info.size / 1024) + ' kB');
  }
  process.exit(0);
}
const [bgName, matteName, outName] = process.argv.slice(2);
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
