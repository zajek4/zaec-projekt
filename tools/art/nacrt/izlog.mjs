// Izlog noću — zajednički dijelovi listova za djelatnosti koje se biraju po prostoru i ljudima (ugostiteljstvo i
// smještaj, saloni, trgovine, stručne usluge, ustanove): pročelje osječke ulice noću u plavoj crti, a prizemlje
// jedne kuće (taj posao) svijetli toplim svjetlom; kroz staklo se vidi unutrašnjost u siluetama. Nacrt ostaje za
// zanate (docs/hero-art-direction.md). Isti list, mreža, svjetlo s pretragom i sastavnica kao nacrt, ali bez kota:
// umjesto vodilica brojevi stoje na dijelovima, a legenda je na nebu.

export const G = 800; // gornji rub pločnika
export const CURB = 838;

/** Ulica: pločnik, rubnik, kolnik (šrafura) i svjetlo iz izloga koje pada na pločnik. */
export function street(b, spill = []) {
  b.line(-200, G, 1400, G, 'cut-w');
  b.line(-200, CURB, 1400, CURB, 'ln-2');
  for (let x = -180; x < 1400; x += 64) b.line(x, G + 2, x, CURB - 2, 'ln-h');
  // svjetlo na pločniku: trapez od dna stakla prema rubniku
  for (const [x0, x1] of spill) b.path([[x0, G], [x1, G], [x1 + 34, CURB], [x0 - 34, CURB]], 'spill');
}

/** Rustika (vodoravni žljebovi) na pilastru ili prizemlju susjeda. */
export function rustica(b, x0, x1, y0, y1, step = 22) {
  b.rect(x0, y0, x1 - x0, y1 - y0, 'ln-2');
  for (let y = y0 + step; y < y1 - 4; y += step) b.line(x0, y, x1, y, 'ln-h');
}

/** Tamni prozor kata: okvir, križ, secesijski nadprozornik (luk) i klupčica. */
export function window(b, x, y, w, h, { arch = 10, hood = true } = {}) {
  const top = `M${x} ${y + arch}Q${x + w / 2} ${y - arch} ${x + w} ${y + arch}`;
  b.d(`${top}V${y + h}H${x}Z`, 'win');
  b.line(x + w / 2, y + 6, x + w / 2, y + h, 'ln-h');
  b.line(x, y + h * 0.42, x + w, y + h * 0.42, 'ln-h');
  if (hood) b.d(`M${x - 10} ${y + arch - 6}Q${x + w / 2} ${y - arch - 18} ${x + w + 10} ${y + arch - 6}`, 'ln-2');
  b.line(x - 8, y + h + 6, x + w + 8, y + h + 6, 'ln-2');
}

/** Topli izlog: staklo sa segmentnim lukom (crta i ispuna), prečka i unutrašnjost koju crta fn (siluete). */
export function shop(b, x, y, w, h, arch, fn) {
  const d = `M${x} ${y + arch}Q${x + w / 2} ${y - arch} ${x + w} ${y + arch}V${y + h}H${x}Z`;
  b.d(d, 'glow', ` fill="${b.url('gl')}"`);
  if (fn) fn();
  b.d(d, 'cut-w');
  b.line(x, y + 40, x + w, y + 40, 'ln-glass');
}

/** Toplo svjetlo u staklu: jače pod stropom, slabije prema rubovima (stvarne boje: sličica je <img> bez CSS-a). */
export const glowDefs = (b) => [
  `<radialGradient id="${b.id('gl')}" cx="50%" cy="30%" r="80%"><stop offset="0" stop-color="#ffd79e"/><stop offset=".55" stop-color="#e2b071"/><stop offset="1" stop-color="#9c7448"/></radialGradient>`,
];

/** Broj na dijelu (točka + broj) i legenda na nebu: „01 IZLOG → Galerija i tim“. */
export function marker(b, n, [x, y], dx = 10, dy = -10) {
  if (b.v !== 'd') return;
  b.P(`<g class="call c${n} mk">`);
  b.circle(x, y, 3.5, 'dot');
  b.text(x + dx, y + dy, n, 't-call t-n');
  b.P('</g>');
}
export function legend(b, x, y, items) {
  if (b.v !== 'd') return;
  b.P('<g class="call legend">');
  b.text(x, y, 'LEGENDA', 't-small');
  items.forEach(([n, a, c], i) => {
    const yy = y + 34 + i * 46;
    b.P(`<text class="t-call" x="${x}" y="${yy}"><tspan class="t-n">${n}</tspan>  ${a}</text>`);
    b.text(x, yy + 20, c, 't-web');
  });
  b.P('</g>');
}

// Dodatni dijelovi za listove 06, 07, 09 i 10 (kuća s apartmanima, trgovina, ured na katu, ustanova). Saloni ih ne
// koriste, pa se njihov list ne mijenja.

/** Klasicistički prozor: pravokutno staklo s nadsvjetlom i križem, ravni vijenčić iznad i klupčica. */
export function sash(b, x, y, w, h, { hood = true, sill = true, t = 0.3 } = {}) {
  b.rect(x, y, w, h, 'win');
  b.line(x + w / 2, y + h * t, x + w / 2, y + h, 'ln-h');
  b.line(x, y + h * t, x + w, y + h * t, 'ln-h');
  if (hood) {
    b.rect(x - 10, y - 20, w + 20, 8, 'ln-2');
    b.line(x - 4, y - 12, x + w + 4, y - 12, 'ln-h');
  }
  if (sill) b.line(x - 8, y + h + 6, x + w + 8, y + h + 6, 'ln-2');
}

/** Grilje: otvorena krila uz prozor ili zatvorena preko njega, s vodoravnim letvicama. */
export function shutters(b, x, y, w, h, open = true, step = 12) {
  const lw = w / 2;
  const leaves = open ? [x - lw - 3, x + w + 3] : [x, x + lw];
  for (const lx of leaves) {
    b.rect(lx, y, lw, h, open ? 'ln-2' : 'win');
    for (let yy = y + step; yy < y + h - 4; yy += step) b.line(lx + 4, yy, lx + lw - 4, yy, 'ln-h');
  }
}

/** Siluete namještaja iza stakla: stolica sa strane (s = 1 naslon lijevo, sjedalo desno; −1 obrnuto). */
export function sideChair(b, x, floor, s = 1) {
  const seat = floor - 40;
  b.d(`M${x} ${floor}V${floor - 88}`, 'sil-ln');
  b.d(`M${x + 28 * s} ${seat}V${floor}`, 'sil-ln');
  b.rect(s > 0 ? x - 2 : x - 30, seat - 5, 32, 6, 'sil');
  b.d(`M${x} ${floor - 86}H${x + 7 * s}V${floor - 62}H${x}`, 'sil-ln');
}

/** Stol: ploča, po želji stolnjak koji visi `cloth` u, noga i stopa. */
export function table(b, cx, floor, w, cloth = 0, h = 70) {
  const top = floor - h;
  b.rect(cx - w / 2, top, w, 6, 'sil');
  if (cloth) b.path([[cx - w / 2, top], [cx + w / 2, top], [cx + w / 2 + 3, top + cloth], [cx - w / 2 - 3, top + cloth]], 'sil');
  b.line(cx, top + 6, cx, floor - 4, 'sil-ln');
  b.rect(cx - 16, floor - 5, 32, 5, 'sil');
}

/** Viseća svjetiljka: vrpca od stropa i sjenilo (kao u salonu). */
export function pendant(b, x, y0, len, r = 14) {
  b.d(`M${x} ${y0}V${y0 + len}`, 'sil-ln');
  b.d(`M${x - r} ${y0 + len + 12}A${r} 12 0 0 1 ${x + r} ${y0 + len + 12}Z`, 'sil');
}
