// Razvojni alat (npm run art): renderira kadrove podstranica i sprema ih kao WebP u zaec/assets/img/world/.
// ?s=ime-kadra  &save=1 sprema datoteku  &pr=2 nadovzorkovanje (renderira 2× pa smanjuje)
import { createStage } from './stage.js';
import { SCENES } from './scenes.js';

const q = new URLSearchParams(location.search);
const name = q.get('s') || Object.keys(SCENES)[0];
const nav = document.getElementById('nav');
nav.innerHTML = Object.keys(SCENES).map((k) => `<a href="?s=${k}">${k}</a>`).join('');
const spec = SCENES[name];
const w = spec.w || 1400, h = spec.h || 1050;
const stage = createStage({ canvas: document.getElementById('c'), w, h, pr: +(q.get('pr') || 2), fov: spec.fov || 32 });
await spec.build(stage);
stage.render();
// Reflector i sjene trebaju jedan kadar "zagrijavanja"
stage.render();
window.__stage = stage;
window.__art = { name, done: true };
if (q.get('save')) {
  const blob = await new Promise((r) => stage.renderer.domElement.toBlob(r, 'image/png'));
  const res = await fetch(`/save?name=${encodeURIComponent(spec.file)}&w=${w}&h=${h}&q=${spec.q || 80}${spec.blur ? `&blur=${spec.blur}` : ''}`, { method: 'POST', body: blob });
  window.__art.saved = await res.json();
}
