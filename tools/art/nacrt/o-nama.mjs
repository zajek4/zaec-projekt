// LIST 00 · O nama — pročelje zvonika konkatedrale sv. Petra i Pavla u Osijeku, M 1:500 (8 u = 1 m).
// Shematski crtež prema fotografijama: portal s wimpergom, veliki prozor, galerija, dva prozora, sat, zvonik s
// dvama otvorima i wimpergama, kutne fijale, osmerostrani šiljak, jabuka i križ. Jedina izmjerena kota je visina
// do vrha križa, 90 m. Oznake vežu dijelove zvonika s načinom rada studija (načela na stranici O nama), svjetlo je
// sat s radnim vremenom. Sastavnica: odgovorna osoba i sjedište; {owner}, {adresa} i {sati} puni tema iz postavki
// (inc/hero.php, zaec_nacrt), zato se ne mogu razići s podacima na ostatku weba.
export const meta = {
  slug: 'o-nama',
  list: '00',
  name: 'O nama',
  view: 'PROČELJE ZVONIKA · M 1:500',
  web: '',
  title: 'Pročelje zvonika konkatedrale sv. Petra i Pavla u Osijeku, mjerilo 1:500',
  desc: 'Tehnički crtež zvonika konkatedrale u Osijeku, visokog 90 m od tla do križa. Oznake povezuju dijelove zvonika s načinom rada studija: portal je prvi razgovor, kontrafori nacrt prije dizajna, a vrh jedna osoba koja odgovara za projekt. Sat je označen toplim svjetlom s radnim vremenom. U sastavnici su odgovorna osoba i sjedište studija.',
  lamp: null,
  mvb: '470 80 680 562',
  mobileCallout: 'c03',
  thumb: false,
  tb: ['ZAEC · WEB STUDIO · OSIJEK', 'LIST 00', '{owner}', 'ODGOVORNA OSOBA ZA SVAKI PROJEKT', '{adresa}'],
};

const CX = 900; // os zvonika
const GY = 812; // tlo (sastavnica počinje na 836)
const s = 8; // 1 m
const X = (m) => CX + m * s;
const Y = (m) => GY - m * s;

export function draw(b) {
  const L = (x0, y0, x1, y1, cls) => b.line(X(x0), Y(y0), X(x1), Y(y1), cls);
  const R = (x0, y0, x1, y1, cls, attrs = '') => b.rect(X(x0), Y(y1), (x1 - x0) * s, (y1 - y0) * s, cls, attrs);
  const P = (list, cls, close = true) => b.path(list.map(([x, y]) => [X(x), Y(y)]), cls, close);
  const both = (fn) => [-1, 1].forEach(fn);
  // šiljasti luk (jednakostranični): od podnožja y0 do pete luka, pa dva luka do tjemena
  const arch = (xc, w, y0, spring, cls = 'ln-2') => {
    const r = (w * s).toFixed(1);
    const top = spring + w * 0.866;
    b.d(`M${X(xc - w / 2)} ${Y(y0)}V${Y(spring)}A${r} ${r} 0 0 1 ${X(xc)} ${Y(top).toFixed(1)}A${r} ${r} 0 0 1 ${X(xc + w / 2)} ${Y(spring)}V${Y(y0)}`, cls, ' fill="none"');
  };
  const gable = (xc, half, y0, top, cls = 'ln-2') => P([[xc - half, y0], [xc, top], [xc + half, y0]], cls, false);
  const balusters = (x0, x1, y0, y1, step) => {
    L(x0, y0, x1, y0, 'ln-2');
    L(x0, y1, x1, y1, 'ln-2');
    for (let x = x0 + step / 2; x < x1; x += step) L(x, y0, x, y1, 'ln-h');
  };

  // 1 os zvonika i tlo
  b.g('nd nd-1', () => {
    L(0, -1.5, 0, 91.5, 'ln-con');
    b.rect(560, GY, 632, 12, 'wool', ` fill="${b.url('hz')}"`);
  });

  // 2 obris: tlo, tijelo zvonika, kontrafori, bočni brodovi
  b.g('nd nd-2', () => {
    b.line(560, GY, 1192, GY, 'cut');
    R(-7.5, 0, 7.5, 66, 'ln-2');
    // kontrafori na uglovima: četiri stupnja s kosim okapnicama, uz tijelo zvonika
    both((k) => {
      const st = [[0, 14, 9], [14, 30, 8.6], [30, 46, 8.2], [46, 60, 7.9]];
      const pts = [[k * 7.5, 0]];
      st.forEach(([y0, y1, x], i) => {
        pts.push([k * x, y0 + (i ? 0.6 : 0)], [k * x, y1]);
      });
      pts.push([k * 7.5, 60]);
      P(pts, 'ln-2', false);
    });
    // bočni brodovi (desno i lijevo od zvonika) i krov glavnog broda iza zvonika
    both((k) => {
      P([[k * 9, 0], [k * 18, 0], [k * 18, 19], [k * 9, 26]], 'ln-2', false);
      L(k * 9, 33.5, k * 19.5, 23.8, 'ln-beyond');
      // bočni portal s wimpergom i fijalom na uglu
      arch(k * 13.5, 2.8, 0, 4.2);
      gable(k * 13.5, 2.2, 6.4, 10.6);
      R(k * 18 - 0.7, 19, k * 18 + 0.7, 21.5, 'ln-2');
      gable(k * 18, 0.7, 21.5, 25.5);
    });
  });

  // 3 portal, veliki prozor, galerija, dva prozora
  b.g('nd nd-3', () => {
    // stube i portal
    L(-5, 0.45, 5, 0.45, 'ln-h');
    arch(0, 7, 0.45, 7);
    arch(0, 5, 0.45, 7);
    L(-2.5, 7, 2.5, 7, 'ln-h');
    L(0, 0.45, 0, 7, 'ln-h');
    gable(0, 4.3, 12.2, 19.6);
    L(0, 19.6, 0, 20.9, 'ln-2');
    b.circle(X(0), Y(15.2), 1.1 * s, 'ln-2');
    // vijenac
    L(-7.5, 20.2, 7.5, 20.2, 'ln-2');
    L(-7.5, 20.8, 7.5, 20.8, 'ln-h');
    // veliki prozor: tri polja pod šiljastim lukom i krug u tjemenu
    arch(0, 6, 22, 29);
    for (const x of [-1, 1]) L(x, 22, x, 28.4, 'ln-h');
    for (const x of [-2, 0, 2]) arch(x, 2, 27.4, 28.4, 'ln-h');
    b.circle(X(0), Y(31.5), 1 * s, 'ln-h');
    // galerija s balustradom
    L(-7.5, 35.4, 7.5, 35.4, 'ln-2');
    balusters(-7.2, 7.2, 36, 37.1, 0.72);
    // dva prozora
    for (const x of [-1.6, 1.6]) arch(x, 2, 38.6, 43.6);
  });

  // 4 sat, zvonik, fijale, šiljak, križ
  b.g('nd nd-4', () => {
    // sat (svjetlo): kazaljke na 9 h, početak radnog vremena
    b.circle(X(0), Y(49.2), 2 * s, 'lamp-fill');
    L(0, 49.2, -1.05, 49.2, 'lamp-ln');
    L(0, 49.2, 0, 50.75, 'lamp-ln');
    // vijenac ispod zvonika
    L(-7.7, 52.6, 7.7, 52.6, 'ln-2');
    L(-7.5, 53.2, 7.5, 53.2, 'ln-h');
    // zvonik: dva visoka otvora s grilijama i wimpergama, fijala među njima
    for (const x of [-2.15, 2.15]) {
      arch(x, 2.3, 54.4, 61.4);
      for (let y = 55.2; y < 61.2; y += 0.8) L(x - 1.15, y, x + 1.15, y, 'ln-h');
      gable(x, 1.75, 63, 67.8);
    }
    gable(0, 0.4, 62.4, 68.6);
    // gornji vijenac s balustradom
    balusters(-7.5, 7.5, 66, 67.2, 0.75);
    // kutne fijale
    both((k) => {
      R(k * 7.4 - 0.7, 60, k * 7.4 + 0.7, 66.6, 'ln-2');
      gable(k * 7.4, 0.7, 66.6, 73.4);
    });
    // osmerostrani šiljak: tri vidljive plohe, prsten, tri luminare
    gable(0, 5, 67.2, 88);
    for (const x of [-2.1, 2.1]) L(x, 67.2, 0, 88, 'ln-h');
    L(-2.4, 78, 2.4, 78, 'ln-h');
    gable(0, 0.75, 70.4, 73.2, 'ln-h');
    for (const x of [-3.4, 3.4]) gable(x, 0.5, 68.6, 70.8, 'ln-h');
    // jabuka i križ
    b.circle(X(0), Y(88.4), 0.36 * s, 'ln-2');
    L(0, 88.76, 0, 90, 'ln-2');
    L(-0.45, 89.4, 0.45, 89.4, 'ln-2');
  });

  // 5 kota visine i ključ
  b.g('nd nd-5', () => {
    const dx = X(20.5);
    b.dim([dx, GY], [dx, Y(90)], '90 m', { side: 16, ext: [[[X(0.8), Y(90)], [dx + 8, Y(90)]], [[X(18.4), GY - 2], [dx + 8, GY - 2]]] });
  });
  b.key(() => {
    // tlocrt crkve: zvonik na pročelju (lijevo), brod, transept, svetište; točka je nacrtano pročelje
    const [kx, ky] = [1018, 112];
    b.rect(kx, ky + 22, 16, 16, 'ln-2');
    b.rect(kx + 16, ky + 18, 84, 24, 'ln-2');
    b.rect(kx + 74, ky, 22, 60, 'ln-2');
    b.d(`M${kx + 100} ${ky + 18}h10l8 6v12l-8 6h-10`, 'ln-2', ' fill="none"');
    b.circle(kx - 6, ky + 30, 2.5, 'dot');
    b.text(kx - 6, ky + 92, 'KLJUČ · TLOCRT', 't-small');
  });

  // 6 oznake i svjetlo
  b.g('nd nd-6', () => {
    b.callout('01', [X(-1.4), Y(4.5)], [[X(-11), 700], [682, 700]], 'PORTAL', '→ Prvi razgovor', true);
    b.callout('02', [X(-8.2), Y(40)], [[790, 532], [745, 532]], 'KONTRAFOR', '→ Nacrt prije dizajna', true);
    b.callout('03', [X(-1.7), Y(80)], [[800, Y(80)]], 'VRH', '→ Jedna osoba odgovara', true, { p: [[852, Y(80)]] });
    // svjetlo: sat; vodoravna vodilica ulijevo, tekst ispod nje (iznad bi na 1024 × 768 dirao drugi redak naslova).
    // Širina iz zadanih vrijednosti (PON–PET · 9–17 H), jer {sati} puni tema
    const [cx, cy] = [X(0), Y(49.2)];
    const k = b.v === 'm' ? 23 / 16 : 17 / 16;
    const q = b.v === 'm' ? 'web stranica Osijek' : 'izrada web stranica Osijek';
    const w = Math.max('PON–PET · 9–17 H'.length * 10.9, (q.length + 2) * 9.9) * k;
    const lx = X(-7.9) - 14 - w;
    b.P('<g class="call lamp">');
    b.circle(cx, cy, 30, 'halo');
    b.circle(cx, cy, 3.5, 'dot');
    b.poly([[cx - 22, cy], [lx, cy]], 'ln-lead');
    b.text(lx, cy + 24 * k, '{sati}', 't-call');
    b.text(lx, cy + 44 * k, `„${q}“`, 't-web');
    b.P('</g>');
  });
}
