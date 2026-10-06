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
const stage = createStage({ canvas: document.getElementById('c'), w, h, pr: +(q.get('pr') || spec.pr || 2), fov: spec.fov || 32, alpha: !!spec.cutout });
await spec.build(stage);
// izrez (sloj s prozirnom pozadinom, npr. toranj ispred naslova): bez neba, poda i obrade slike
const draw = () => { if (spec.cutout) { stage.camera.updateMatrixWorld(); stage.renderer.setClearColor(0x000000, 0); stage.renderer.render(stage.scene, stage.camera); } else stage.render(); };
draw();
// Reflector i sjene trebaju jedan kadar "zagrijavanja"
draw();
window.__stage = stage;
window.__art = { name, done: true, meta: stage.meta || null };
if (q.get('save')) {
  const blob = await new Promise((r) => stage.renderer.domElement.toBlob(r, 'image/png'));
  const res = await fetch(`/save?name=${encodeURIComponent(spec.file)}&w=${w}&h=${h}&q=${spec.q || 80}${spec.blur ? `&blur=${spec.blur}` : ''}${spec.also ? `&also=${spec.also}` : ''}`, { method: 'POST', body: blob });
  const saved = await res.json();
  if (stage.meta && spec.metaFile) await fetch(`/save?name=${encodeURIComponent(spec.metaFile)}`, { method: 'POST', body: JSON.stringify(stage.meta) });
  window.__art.saved = saved;
}
