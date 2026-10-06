// Zajednički dijelovi kadrova: kuće, prozori, rasvjeta okoline.
import * as THREE from 'three';
import { mat, box, gable, canvasTex, light, V } from '../kit.js';
import { PAL } from '../stage.js';

/** Topli prozor: tamni okvir + emitirajuće staklo s blagim gradijentom interijera. */
let winTex = null;
export function windowTex() {
  if (winTex) return winTex;
  winTex = canvasTex(64, 128, (x, w, h) => {
    const g = x.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, '#ffdca8'); g.addColorStop(0.55, '#ffb664'); g.addColorStop(1, '#c46a22');
    x.fillStyle = g; x.fillRect(0, 0, w, h);
    // zavjesa / silueta namještaja
    x.fillStyle = 'rgba(80,30,5,0.35)'; x.fillRect(0, h * 0.72, w, h * 0.28);
    x.fillStyle = 'rgba(255,240,220,0.35)'; x.fillRect(w * 0.08, 0, w * 0.12, h);
  });
  return winTex;
}

export function addWindow(parent, cut, { w = 1.4, h = 1.6, x = 0, y = 1, z = 0, ry = 0, lit = 1, frame = '#1a1c22', depth = 0.12, mullion = true } = {}) {
  const g = new THREE.Group();
  const glass = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat({ color: '#000000', emissive: '#ffffff', ei: 1.6 * lit, emissiveMap: windowTex(), rough: 0.2 }, cut));
  glass.position.z = 0.012;
  g.add(glass);
  const fm = mat({ color: frame, rough: 0.5, metal: 0.4 }, cut);
  const t = 0.07;
  box(w + t * 2, t, depth, fm, 0, -h / 2 - t, depth / 2, 0, g);
  box(w + t * 2, t, depth, fm, 0, h / 2, depth / 2, 0, g);
  box(t, h, depth, fm, -w / 2 - t / 2, -h / 2, depth / 2, 0, g);
  box(t, h, depth, fm, w / 2 + t / 2, -h / 2, depth / 2, 0, g);
  if (mullion) box(t * 0.7, h, depth * 0.6, fm, 0, -h / 2, depth * 0.3, 0, g);
  g.position.set(x, y, z);
  g.rotation.y = ry;
  parent.add(g);
  return g;
}

export function nightLights(scene, { key = [-20, 9, -24], keyI = 2.6, fill = [22, 14, 18], fillI = 0.3, hemi = 0.3, target = [0, 2, 0], shadow = 26 } = {}) {
  light(scene, 'hemi', '#24305f', hemi, [0, 30, 0], null, { ground: '#07080c' });
  const k = light(scene, 'dir', '#ffb36b', keyI, key, target, { shadow });
  light(scene, 'dir', '#6d86ff', fillI, fill, target);
  return k;
}

export { PAL, V };
