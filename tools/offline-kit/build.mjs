// Offline build (Bun) koji zrcali vite.config.mjs → zaec/assets/build/{app,home}.{js,css}, chunks/, assets/.
// Pokretanje iz korijena repozitorija: bun tools/offline-kit/build.mjs  (prethodno tools/offline-kit/setup.sh)
import { rmSync, mkdirSync, copyFileSync, readdirSync, readFileSync, writeFileSync, renameSync } from 'node:fs';
import { createHash } from 'node:crypto';
const KIT = process.env.ZAEC_KIT || '/tmp/zaec-offline-kit';
const out = process.argv[2] || 'zaec/assets/build';
rmSync(out, { recursive: true, force: true });
const r = await Bun.build({
  // gates.js je zaseban ulaz: chunk world3 nikad ne smije uvoziti home.js (učitava se s ?ver=…, modul bi se izvršio dvaput)
  entrypoints: ['src/js/app.js', 'src/js/home.js', 'src/js/world3/gates.js'],
  outdir: out, target: 'browser', format: 'esm', splitting: true, minify: true,
  external: ['/__ZAEC_ASSETS__/*', './img/*'],
  naming: { entry: '[name].[ext]', chunk: 'chunks/[name]-[hash].[ext]', asset: 'assets/[name]-[hash].[ext]' },
});
if (!r.success) { for (const l of r.logs) console.error(l); process.exit(1); }
// gates.js kao ulaz samo prisiljava Bun da gates izdvoji u zaseban dijeljeni chunk; sama ulazna datoteka nije potrebna.
const chunkFiles = () => ['app.js', 'home.js', ...readdirSync(`${out}/chunks`).map((c) => `chunks/${c}`)];
if (chunkFiles().some((f) => readFileSync(`${out}/${f}`, 'utf8').includes('gates.js'))) throw new Error('gates.js je uvezen — provjeri podjelu chunkova');
rmSync(`${out}/gates.js`);
// assets: fontovi iz kita (stalna imena), noise.png s hashom
mkdirSync(`${out}/assets`, { recursive: true });
for (const f of readdirSync(`${KIT}/assets`)) if (/\.(woff2?|png)$/.test(f) && !f.startsWith('noise')) copyFileSync(`${KIT}/assets/${f}`, `${out}/assets/${f}`);
const noise = readFileSync('src/css/img/noise.png');
const nname = `noise-${createHash('sha256').update(noise).digest('base64url').slice(0, 8)}.png`;
writeFileSync(`${out}/assets/${nname}`, noise);
for (const c of ['app.css', 'home.css']) {
  const p = `${out}/${c}`;
  writeFileSync(p, readFileSync(p, 'utf8').replaceAll('/__ZAEC_ASSETS__/', './assets/').replace(/url\((["']?)\.\/img\/noise\.png\1\)/g, `url(./assets/${nname})`));
}
for (const f of [...chunkFiles(), 'app.css', 'home.css']) {
  console.log(f.padEnd(34), (readFileSync(`${out}/${f}`).length / 1024).toFixed(1) + ' kB');
}
