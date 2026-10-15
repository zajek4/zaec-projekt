// U.09 · Brzina web stranice — filmska traka učitavanja mobilne stranice: kadrovi u razmacima od 0,5 s na osi
// vremena. Prazni kadrovi (čeka se server), raspored bez teksta (čeka se font), okvir slike bez slike, pa kadar u kojem
// se pojavi najveći element (LCP) — taj je stvaran i osvijetljen. Okomita crta na 2,5 s je Googleov prag „dobro“ za
// LCP (web.dev). Kadrovi prikazuju tijek, ne izmjerenu vrijednost neke stranice. Oznake vežu kadrove s blokom
// „Gdje se gubi brzina“ (hosting i cache, fontovi, slike).
import { aspectClass } from './std.mjs';

export const meta = {
  slug: 'brzina-web-stranice',
  tvb: '300 150 880 660', // sličica na hubu: cijeli predmet usluge, ne samo svjetlo
  list: 'U9',
  name: 'Brzina web stranice',
  title: 'Filmska traka učitavanja mobilne stranice s pragom LCP od 2,5 sekunde',
  desc: 'Kadrovi mobilne stranice dok se učitava, poredani na osi vremena u razmacima od pola sekunde. Prvi kadrovi su prazni jer se čeka server, u sljedećem je raspored bez teksta jer se čeka font, zatim tekst bez slike. U posljednjem kadru pojavljuje se najveći element, naslovna slika s bojlerom, uz natpis „Curi bojler?“, i on je osvijetljen toplim svjetlom. Okomita crta na 2,5 sekunde označava Googleov prag za dobar LCP. Oznake povezuju prazan kadar s hostingom i cacheom, skriveni tekst s fontovima i prazan okvir sa slikama.',
  lamp: { time: '07:50 · SLAB SIGNAL', search: 'curi bojler' },
  mvb: '510 112 680 562',
  mobileCallout: null,
  index: 'TRAKA KADROVA', // stupac u kazalu usluga (≤ 15 znakova)
  tb: ['ZAEC · USLUGE', 'U.09', 'Brzina web stranice', 'KADROVI UČITAVANJA', 'WEB · LCP · SLIKE · FONTOVI · CACHE'],
};

const S = 440; // jedinica po sekundi
const X = (t) => t * S; // 0 s na x = 0
const LIM = X(2.5); // prag LCP
const FW = 200; // kadar (zaslon mobitela)
const FH = 432;
const FY = 208; // gornji rub kadrova
const AX = FY + FH + 52; // os vremena
const IY = FY + 72; // okvir naslovne slike
const IH = 150;

export function draw(b) {
  // sadržaj kadra po stanju: 0 prazno, 1 raspored bez teksta, 2 tekst bez slike, 3 LCP
  const frame = (t, state) => {
    const x0 = X(t) - FW / 2;
    const L = x0 + 16;
    const R = x0 + FW - 16;
    b.rect(x0, FY, FW, FH, state === 3 ? 'lit' : 'ln-2', ' rx="12"');
    if (!state) return;
    // zaglavlje i gumb na dnu
    b.rect(L, FY + 18, 22, 22, 'ln-2', ' rx="4"');
    b.sk(L + 36, L + 82, FY + 29, 'sk');
    b.line(x0, FY + 56, x0 + FW, FY + 56, 'ln-h');
    b.rect(L, FY + FH - 62, R - L, 42, state === 1 ? 'ln-3' : 'ln-2', ' rx="6"');
    const ty = IY + IH;
    if (state === 1) {
      // tekst čeka font: samo obrisi redaka, slike još nema
      b.rect(L, ty + 26, (R - L) * 0.9, 26, 'ln-3', ' rx="3"');
      b.rect(L, ty + 74, R - L, 12, 'ln-3', ' rx="3"');
      b.rect(L, ty + 98, (R - L) * 0.74, 12, 'ln-3', ' rx="3"');
      return;
    }
    if (state === 2) {
      b.rect(L, IY, R - L, IH, 'ln-2');
      b.line(L, IY, R, IY + IH, 'ln-h');
      b.line(L, IY + IH, R, IY, 'ln-h');
      b.sk(L + 4, R - 30, ty + 40, 'sk-b');
    }
    b.sk(L + 4, R - 4, ty + 80, 'sk');
    b.sk(L + 4, L + (R - L) * 0.72, ty + 104, 'sk');
  };

  // 1 os vremena s crticama (0,1 s)
  b.g('nd nd-1', () => {
    b.line(-20, AX, 1176, AX, 'cut-w');
    b.poly([[1162, AX - 7], [1178, AX], [1162, AX + 7]], 'ln-2');
    for (let i = 1; i <= 26; i++) b.line(X(i / 10), AX, X(i / 10), AX + (i % 5 ? 8 : 18), 'ln-2');
  });

  // 2 kadrovi koji čekaju; okomice do trenutka na osi
  b.g('nd nd-2', () => {
    frame(0, 0);
    frame(0.5, 0);
    frame(1, 1);
    frame(1.5, 2);
    for (const t of [0, 0.5, 1, 1.5, 2]) b.line(X(t), FY + FH + 8, X(t), AX - 8, 'ln-3');
  });

  // 3 kadar LCP: stvaran naslov
  const cx = X(2);
  const L = cx - FW / 2 + 16;
  const R = cx + FW / 2 - 16;
  b.g('nd nd-3', () => {
    frame(2, 3);
    b.say(L + 2, IY + IH + 48, 'Curi bojler?', 27, 't-real t-h');
  });

  // 4 najveći element: naslovna slika (svjetlo) s crtežom bojlera
  b.g('nd nd-4', () => {
    b.rect(L, IY, R - L, IH, 'lamp-fill');
    // bojler: valjak na zidu (pogled sprijeda), termostat, dvije cijevi
    const y0 = IY + 14;
    b.line(cx - 20, y0, cx + 20, y0, 'lamp-ln');
    b.rect(cx - 30, y0 + 6, 60, 106, 'lamp-ln', ' rx="30"');
    b.circle(cx, y0 + 84, 6, 'lamp-ln');
    b.d(`M${cx - 14} ${y0 + 110}V${IY + IH - 8}M${cx + 14} ${y0 + 110}V${IY + IH - 8}`, 'lamp-ln');
  });

  // 5 prag 2,5 s i oznake vremena
  b.g('nd nd-5', () => {
    b.line(LIM, FY - 24, LIM, AX + 22, 'ln-sec');
    if (b.v !== 'm') {
      for (const t of [0.5, 1, 1.5, 2, 2.5]) {
        const x = X(t);
        const lab = t.toFixed(1).replace('.', ',') + (t === 2.5 ? ' s' : '');
        b.text(x, AX + 44, lab, x - 30 < 508 ? `t-dim c-wide ${aspectClass(x - 30)}` : 't-dim', ' text-anchor="middle"');
      }
    }
  });

  // 6 prag, oznake i svjetlo
  b.g('nd nd-6', () => {
    // prag: natpis uz crtu, okomito (čita se odozdo prema gore), desno od crte
    const k = b.v === 'm' ? 23 / 16 : 17 / 16;
    const rot = (x, t, cls) => b.P(`<text class="${cls}" text-anchor="end" transform="translate(${x} ${FY - 16}) rotate(-90)">${t}</text>`);
    rot(LIM + 12 + Math.round(17 * k), 'LCP DO 2,5 s', 't-call');
    rot(LIM + 12 + Math.round(37 * k), 'prag „dobro“ (Google)', 't-web');
    const y = AX + 96;
    b.callout('01', [X(0.5) + 44, FY + FH - 70], [[X(0.5) + 44, y], [X(0.5) + 56, y]], 'PRAZNO', '→ Hosting i cache');
    b.callout('02', [X(1) + 44, IY + IH + 39], [[X(1) + 44, y], [X(1) + 56, y]], 'ČEKA FONT', '→ Fontovi');
    b.callout('03', [X(1.5) + 44, IY + 34], [[X(1.5) + 44, y], [X(1.5) + 56, y]], 'BEZ SLIKE', '→ Slike');
    b.lamp({ at: [cx, IY + IH / 2], r: 56, d: [cx - 16 - 220, FY - 28, 'up'], m: [cx - 16 - 298, FY - 30, 'up'] });
  });
}
