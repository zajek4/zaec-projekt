// Zajednički materijali svijeta + "nacrt" (blueprint) shader sloj.
import * as THREE from 'three';

// sRGB komponente (miješa se nakon tonemappinga)
export const U = {
  uBlueprint: { value: 0 },
  uBpColor: { value: new THREE.Vector3(0.11, 0.24, 0.86) },
  uTime: { value: 0 },
};

function inject(sh, extra = {}) {
  sh.uniforms.uBlueprint = U.uBlueprint;
  sh.uniforms.uBpColor = U.uBpColor;
  Object.assign(sh.uniforms, extra.uniforms || {});
  sh.fragmentShader = sh.fragmentShader
    .replace('#include <common>', `#include <common>\nuniform float uBlueprint;\nuniform vec3 uBpColor;\n${extra.fragDecl || ''}`)
    .replace('#include <color_fragment>', `#include <color_fragment>\n${extra.colorChunk || ''}`)
    .replace(
      '#include <dithering_fragment>',
      `#include <dithering_fragment>
       float bpL = 0.5 + 0.5 * clamp(dot(normal, normalize(vec3(0.35, 0.85, 0.45))), 0.0, 1.0);
       gl_FragColor.rgb = mix(gl_FragColor.rgb, uBpColor * (0.72 + 0.38 * bpL), uBlueprint * 0.93);`,
    );
  if (extra.vertDecl) sh.vertexShader = sh.vertexShader.replace('#include <common>', `#include <common>\n${extra.vertDecl}`);
  if (extra.vertChunk) sh.vertexShader = sh.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>\n${extra.vertChunk}`);
}

export function worldMaterial(opts = {}) {
  const { desat, emissive, emissiveIntensity = 0, roughness = 0.9, metalness = 0, transparent = false, opacity = 1 } = opts;
  const m = new THREE.MeshStandardMaterial({
    vertexColors: true,
    flatShading: true,
    roughness,
    metalness,
    side: THREE.DoubleSide,
    transparent,
    opacity,
  });
  if (emissive) {
    m.emissive = new THREE.Color(emissive);
    m.emissiveIntensity = emissiveIntensity;
  }
  m.onBeforeCompile = (sh) =>
    inject(sh, desat
      ? {
          uniforms: { uDesat: desat },
          fragDecl: 'uniform float uDesat;',
          colorChunk: 'float lum = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114)); diffuseColor.rgb = mix(diffuseColor.rgb, vec3(lum) * 0.78, uDesat);',
        }
      : {});
  m.customProgramCacheKey = () => (desat ? 'zaec-desat' : 'zaec');
  return m;
}

export function waterMaterial() {
  const m = new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.28, metalness: 0.05, side: THREE.DoubleSide });
  m.onBeforeCompile = (sh) =>
    inject(sh, {
      uniforms: { uTime: U.uTime },
      vertDecl: 'uniform float uTime;',
      vertChunk: 'transformed.y += sin(transformed.x * 2.1 + uTime * 1.6) * 0.035 + cos(transformed.z * 2.7 + uTime * 1.25) * 0.03;',
    });
  m.customProgramCacheKey = () => 'zaec-water';
  return m;
}

export function edgeMaterial() {
  return new THREE.LineBasicMaterial({ color: 0xdfe8ff, transparent: true, opacity: 0, depthWrite: false, fog: false });
}

/** Tekst na platnu → tekstura (natpisi, zastavice, "+1 upit"). */
export function textTexture(text, { w = 512, h = 128, bg = '#141414', fg = '#ffffff', accent = '#2f4ff5', size = 64, weight = 800, font = '"Archivo Variable", Archivo, system-ui, sans-serif', pad = 28, align = 'left', radius = 0 } = {}) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const ctx = c.getContext('2d');
  ctx.clearRect(0, 0, w, h);
  if (bg) {
    ctx.fillStyle = bg;
    if (radius) { ctx.beginPath(); ctx.roundRect(0, 0, w, h, radius); ctx.fill(); }
    else ctx.fillRect(0, 0, w, h);
  }
  if (accent) { ctx.fillStyle = accent; ctx.fillRect(pad - 4, h / 2 - size * 0.32, size * 0.36, size * 0.64); }
  ctx.fillStyle = fg;
  ctx.font = `${weight} ${size}px ${font}`;
  ctx.textBaseline = 'middle';
  ctx.textAlign = align;
  const x = align === 'center' ? w / 2 : pad + (accent ? size * 0.6 : 0);
  let s = size;
  while (ctx.measureText(text).width > w - x - pad && s > 12) { s -= 2; ctx.font = `${weight} ${s}px ${font}`; }
  ctx.fillText(text, x, h / 2 + 2);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}
