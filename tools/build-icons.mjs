// Skupi Solar ikone korištene u PHP predlošcima → zaec/inc/icons-data.php (inline SVG, bez runtime JS-a).
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const set = require('@iconify-json/solar/icons.json');

const files = [];
(function walk(d) {
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f);
    if (fs.statSync(p).isDirectory()) { if (!/assets/.test(p)) walk(p); }
    else if (p.endsWith('.php') && !p.endsWith('icons-data.php')) files.push(p);
  }
})('zaec');

const names = new Set(['arrow-right', 'phone', 'check-circle', 'close', 'alt-arrow-down', 'letter', 'clipboard-check']);
// Svaki navodnicima omeđen naziv koji postoji u Solar setu (ikone se navode i u nizovima registra).
const re = [/'([a-z0-9]+(?:-[a-z0-9]+)*)'/g];
for (const f of files) {
  const s = fs.readFileSync(f, 'utf8');
  for (const r of re) for (const m of s.matchAll(r)) names.add(m[1]);
}
const out = {};
const missing = [];
const exists = (n) => [`${n}-linear`, `${n}-line-duotone`].some((k) => set.icons[k]);
for (const n of [...names].filter(exists).sort()) {
  const key = [`${n}-linear`, `${n}-line-duotone`, `${n}-bold`, n].find((k) => set.icons[k]);
  if (!key) { missing.push(n); continue; }
  out[n] = set.icons[key].body;
  const bold = set.icons[`${n}-bold`];
  if (bold) out[`${n}@bold`] = bold.body;
}
const esc = (s) => s.split('\\').join('\\\\').split("'").join("\\'");
let php = "<?php\n// Generirano: tools/build-icons.mjs — Solar ikone (Iconify, CC BY 4.0). Ne uređivati ručno.\nif ( ! defined( 'ABSPATH' ) ) { exit; }\nreturn array(\n";
for (const [k, v] of Object.entries(out)) php += `\t'${k}' => '${esc(v)}',\n`;
php += ");\n";
fs.writeFileSync('zaec/inc/icons-data.php', php);
console.log(`ikone: ${Object.keys(out).length}`, missing.length ? `NEDOSTAJU: ${missing.join(', ')}` : '');
if (missing.length) process.exitCode = 1;
