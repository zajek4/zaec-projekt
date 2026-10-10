// U.04 · SEO — jedan rezultat pretrage, uvećan kao detalj na listu. Rezultati iznad i ispod su kostur (nacrt), samo
// naš je stvaran: pravi tekst u toplom svjetlu. Svjetlo je gumb Nazovi, jer se SEO mjeri pozivima, ne pozicijama.
// Oznake vežu dijelove rezultata s dijelovima SEO-a na stranici (registar: blok „Šest dijelova SEO-a“).
// Primjer obrta je izmišljen i bez brojki (bez ocjene, broja recenzija i pozicije).
export const meta = {
  slug: 'seo',
  list: 'U4',
  name: 'SEO',
  title: 'Rezultat pretrage za vodoinstalatera u Osijeku, uvećan kao detalj tehničkog crteža',
  desc: 'Uvećan rezultat Google pretrage „hitni vodoinstalater“. Rezultati iznad i ispod nacrtani su samo kao kostur, a jedan je stvaran i osvijetljen: naziv obrta, adresa stranice, naslov, opis, ocjena i gumb Nazovi. Oznake povezuju naslov sa sadržajem, adresu sa strukturom i ocjenu sa schema podacima; toplo svjetlo je na gumbu Nazovi.',
  lamp: { time: '08:12 · POZIV', search: 'hitni vodoinstalater' },
  mvb: '520 362 680 562',
  mobileCallout: null,
  tb: ['ZAEC · USLUGE', 'U.04', 'SEO', 'REZULTAT PRETRAGE · UVEĆANO', 'WEB · SADRŽAJ · STRUKTURA · SCHEMA'],
};

const X0 = 560; // lijevi rub stupca rezultata (stvaran tekst je cijeli u zoni čitanja, x ≥ 508)
const X1 = 1150;

export function draw(b) {
  // kostur jednog rezultata: ikona, naziv i adresa, naslov u dva retka, opis
  const ghost = (y, w = [0.36, 0.86, 0.58, 0.96, 0.7]) => {
    const W = X1 - X0;
    b.circle(X0 + 18, y + 8, 16, 'ln-2');
    b.sk(X0 + 50, X0 + 50 + W * 0.2, y, 'sk');
    b.sk(X0 + 50, X0 + 50 + W * w[0], y + 24, 'sk');
    b.sk(X0, X0 + W * w[1], y + 80, 'sk-b');
    b.sk(X0, X0 + W * w[2], y + 124, 'sk-b');
    b.sk(X0, X0 + W * w[3], y + 172, 'sk');
    b.sk(X0, X0 + W * w[4], y + 204, 'sk');
  };

  // 1 os stupca i razdjelnici rezultata
  b.g('nd nd-1', () => {
    b.line(X0 - 30, -20, X0 - 30, 1020, 'ln-con');
    for (const y of [160, 806]) b.line(X0 - 30, y, X1 + 60, y, 'ln-beyond');
  });

  // 2 rezultat iznad (kostur, odrezan vrhom lista) i ispod
  b.g('nd nd-2', () => {
    ghost(-80);
    ghost(846, [0.5, 0.82, 0.55, 0.92, 0.66]);
  });

  // 3 naš rezultat: stvaran tekst
  b.g('nd nd-3', () => {
    b.rect(X0 - 30, 186, X1 - X0 + 60, 594, 'lit', ' rx="6"');
    b.circle(X0 + 22, 238, 22, 'lit-ln');
    b.say(X0 + 22, 246, 'V', 22, 't-real t-b', ' text-anchor="middle"');
    b.say(X0 + 62, 231, 'Vaš obrt', 25, 't-real');
    b.say(X0 + 62, 263, 'vasobrt.hr › hitne-intervencije', 22, 't-real t-dim2');
    b.say(X0, 348, 'Hitne intervencije', 50, 't-real t-h');
    b.say(X0, 408, 'vodoinstalatera', 50, 't-real t-h');
    b.say(X0, 468, 'u Osijeku · 0–24', 50, 't-real t-h');
    b.say(X0, 528, 'Curi bojler ili je pukla cijev? Dolazimo isti', 26, 't-real t-p');
    b.say(X0, 564, 'dan, a cijenu izlaska znate unaprijed.', 26, 't-real t-p');
    for (let i = 0; i < 5; i++) b.star(X0 + 13 + i * 31, 612, 12, 'lit-star');
    b.sk(X0 + 176, X0 + 330, 612, 'sk');
    const chip = (x, w, label) => {
      b.rect(x, 654, w, 58, 'lit-ln', ' rx="29"');
      b.say(x + w / 2, 692, label, 23, 't-real t-dim2', ' text-anchor="middle"');
    };
    chip(X0, 184, 'Web stranica');
    chip(X0 + 200, 124, 'Upute');
  });

  // 4 gumb Nazovi (svjetlo)
  b.g('nd nd-4', () => {
    b.rect(X0 + 340, 654, 150, 58, 'lamp-fill', ' rx="29"');
    b.say(X0 + 415, 692, 'Nazovi', 23, 't-real t-lamp', ' text-anchor="middle"');
  });

  // 6 oznake (lijevo, u zoni naslova: vide se kad ih kadar pokazuje cijele) i svjetlo
  b.g('nd nd-6', () => {
    const L = X0 - 64;
    b.callout('02', [X0 + 52, 256], [[L, 256]], 'ADRESA', '→ Struktura', true);
    b.callout('01', [X0 - 8, 390], [[L, 390]], 'NASLOV', '→ Sadržaj', true);
    b.callout('03', [X0 - 8, 612], [[L, 612]], 'OCJENA', '→ Schema', true);
    const cx = X0 + 415;
    b.lamp({ at: [cx, 683], r: 50, d: [cx - 16 - 242, 762, 'down'], m: [cx - 16 - 327, 762, 'down'] });
  });
}
