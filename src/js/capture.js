// Samo za razvoj (CAPTURE=1 npm run build): renderira mirne kadrove svijeta i šalje ih capture serveru.
import '@fontsource-variable/archivo/standard.css';
import '@fontsource/instrument-serif/400-italic.css';
import { createWorld } from './world/world.js';

const canvas = document.getElementById('c');
await document.fonts.ready;
const world = createWorld({ canvas, capture: true });
async function save(name, cnv, type = 'image/webp', q = 0.95, extra = '') {
  const blob = await new Promise((r) => cnv.toBlob(r, type, q));
  const res = await fetch(`/save?name=${encodeURIComponent(name)}${extra}`, { method: 'POST', body: blob });
  return res.json();
}
window.cap = { world, save, canvas };
