# Podstranice: odluke, testovi, samokritika

Bilješke radnika za podstranice (direktiva §15–20 i podstranični dio §23). Roadmap se ne dira; ovdje stoji što je
odlučeno, zašto i kako je provjereno.

## 1. Djelatnosti: sektori umjesto tabova (§17)

Izvor: `/mnt/project-files/zaec-signature/strategy/01-djelatnosti-nomenklatura.md`.

- Dvije razine u `zaec/inc/landing-industries.php`:
  - **sektor** (`zaec_sectors()`): 8 skupina + `ZAEC_SECTOR_OTHER` ("Nešto drugo"). Bira ga kupac u procjeni, u
    formi i na hubu.
  - **stranica djelatnosti**: postojećih 8 landing stranica, URL-ovi isti. Svaka ima `sector` i `label`
    (npr. `instalacije` / "Klima i grijanje"). Polje `tab` ostaje samo radi starih poveznica.
- Sve oznake su podaci u registru. Prikazuju se u: procjeni (chipovi), formi (select), hubu (indeks sektora),
  Izradi (kompaktna mreža), kickeru stranica djelatnosti, footeru (naslovi stranica), `llms.txt` (grupirano).
  Naslovnica i header ne čitaju djelatnosti (provjereno grepom na trenutnom stanju integracijske grane).
- **Bug s podacima ispravljen:** procjena je predodabirala prvu djelatnost, pa su neodabrani upiti stizali kao
  "Klima". Sada ništa nije predodabrano; sažetak kaže "nije odabrano".
- `?djelatnost=` prihvaća ključ sektora, slug stranice (sektor + naziv stranice u sažetku) i stari tab ("Klima").
- **Bug u `zaec_url()` ispravljen** (`inc/helpers.php`): putanja s upitom dobivala je kosu crtu iza vrijednosti
  (`/cijene?djelatnost=Klima/#konfigurator`), pa predodabir s CTA-a stranica djelatnosti nikad nije radio.
- Zahtjev prema vlasniku footera: poveznica "Sve djelatnosti" na dnu kolone (strategija, tablica 6).

Provjereno (Playwright, lokalni WP): bez parametra → ništa odabrano; `klima-i-grijanje` → Instalacije + "Klima i
grijanje"; `Klima` → Instalacije; `proizvodnja` → Proizvodnja; nepoznato → ništa. Klik na drugi sektor briše naziv
stranice. Slanje → forma dobiva sektor i vrstu projekta, i na `/kontakt/` preko sessionStorage.

## 2. Tamne površine na abyss paleti (§23)

`cta-band`, procesni blok (`.block--ink` + `.steps-row--ink`), istaknuta kolona usporedbe i istaknuta razina
održavanja koristili su sivu `--ink` (#141414) s toplim sivim tekstom, pa su izgledali kao drugi brand pored
naslovnice i footera. Sada su na `--abyss-*` tokenima, `em` u naslovima je ista plava kao na naslovnici (#9fb4ff),
a CTA traka ima jedan "upaljeni prozor" (lamp crta) i horizont prije footera. Gumb je `signal`, kao na naslovnici.
Nisu dirani (izvan opsega podstranica): `.quote`, `.stats`, `.next-card`, `.article-aside .box` u `wp.css`
(radovi i vodiči) — predlažem isti prijelaz kad ih netko bude dirao.

## 3. Procjena na Cijenama (§18, strategija 05 §2)

- **Tekstovi se više ne broje dvaput.** Funkcija "Pisanje tekstova" je uklonjena; tekstovi su samo u koraku 06
  ("Tekstovi i fotografije": Imam sve · Imam dio · Trebam pomoć s tekstovima). Bodovi i tjedni za korak 06 su isti
  kao prije za "Djelomično"/"Trebam pomoć".
- Korak 04 je "Što web još treba imati?", funkcije su u tri skupine (Sadržaj · Funkcije · Vidljivost i mjerenje),
  "GA4 i praćenje" je preimenovan u "Napredno mjerenje (oglasi, e-commerce, izvještaj)" jer je osnovno mjerenje upita
  uvijek uključeno. Bodovi funkcija nisu mijenjani.
- Uz svaku funkciju su tri crtice "utjecaj na opseg" (manji/srednji/veći), bez brojki; stvarni bodovi ostaju interni.
- Svaki korak ima odgovor u zaglavlju (npr. "WEB STRANICA", "NIJE ODABRANO"), korak 03 pomoćnu rečenicu, a "Nešto
  drugo" otvara polje "Čime točno?" koje ide u sažetak upita.
- Rezultat: razina s jednom rečenicom što znači, oznake granica razina na mjeraču, "Opseg najviše pomiče" (tri
  najveća doprinosa), sažetak s poveznicom "Odaberite" kad djelatnost nije odabrana.
- Donja granica roka raste s opsegom (`w0 ≥ w1/2`): prije je projekt razine XL mogao pisati "2–8 tjedana".
- Mobitel i tablet: dok je procjena na ekranu, a rezultat nije, traka pri dnu pokazuje razinu i rok i vodi na
  rezultat; traka za poziv se za to vrijeme skriva (`.cfg-docked`, samo u `components.css`).
- Bug iz direktive ("elementi padaju između drugih stavki"): odabir više ne mijenja dimenzije ni transform ničega u
  mreži (samo boja i sjena). Provjereno Playwrightom: 11 brzih klikova + 5 povrataka, pozicije svih stavki identične.

## 4. Forma za upit (zajednička, §20, strategija 05 §4)

- Polje "Telefon ili email" više nema `inputmode="email"` (na mobitelu je otvaralo tipkovnicu za email), placeholder
  je `09x xxx xxxx ili ime@tvrtka.hr`, ispod je kratka potvrda "Odgovaramo emailom" / "Javljamo se pozivom".
- Primjer u poruci je neutralan. Greške su povezane s poljem (`aria-describedby` samo dok greška postoji), a statusna
  poruka imenuje polja koja treba ispraviti.
- Spam: uz nonce, honeypot, minimalno vrijeme i rate limit, server sada odbija ime s poveznicom i poruku s više od tri
  poveznice ili BBCode/HTML poveznicom, s vidljivom porukom (stvaran klijent je može ispraviti). Isto pravilo u JS-u.
- `inline` argument forme: potvrda ostaje na stranici umjesto prelaska na `/hvala/` (Kontakt). `generate_lead` se
  šalje kao i prije; ostale forme i dalje idu na `/hvala/`.

## 5. Izrada: naslov je zgrada (design/03 §4, strategija 05 §1–2)

- Špica: skener se sam digne do crte iznad istaknute riječi (`promise` u `data-meta`), pa su „donose UPITE.“ i ulaz
  sagrađeni u prvom ekranu na svim širinama. Scroll dalje gradi prema vrhu.
- Crta i sjaj skenera široki su kao kula +8 % sa svake strane, s mekim rubom (`--scan-l`, `--scan-w` iz `left`/`right`
  u JSON-u kadra). Uvod je ograničen na prostor lijevo od kule (`--tl`: rub kule s bočnim pročeljem, scena je „cover“
  16:9), a ispod njega je sjena koja gasi crte nacrta u kadru. Na ekranima omjera 4:5–5:4 (npr. 900 × 1000) lijevo
  nema mjesta, pa uvod ide ispod pozornice kao na mobitelu.
- Nacrt je renderiran bez sjaja (`hero-izrada.js`: bloom 0 i tanje, prigušene crte za plan); riječi u nacrtu imaju obris
  2 px u boji crte lista. Lokalni render, bez troška.
- Prvi blok iza heroja je „Kako izgleda stranica koja zove“ u noći (`zaec_block_anatomy_tower`): lijevo kula iz
  mobilnog kadra (nacrt ispod, sagrađeno iznad s maskom po etažama `--f0…--f6`), desno sedam dijelova stranice. Dio
  stranice odozgo pali svoju etažu odozgo, zadnji (upit i poziv) pali ulaz; skrol natrag je gasi. Bez JS-a i uz
  smanjeno kretanje kula je sagrađena.
- „Što kupujete: odluke, ne stranice.“ zamjenjuje blok process: šest koraka iz `zaec_home_steps()` s onim što
  klijent dobiva na kraju svakog. „Primopredaja koju možete provjeriti.“ je popis provjera iz koraka Testiramo i
  Lansiramo, s pragovima Core Web Vitals (LCP do 2,5 s, INP do 200 ms, CLS do 0,1, Googleove „dobre“ vrijednosti).
  Rečenica „izmjereno pri primopredaji“ iz strategije 05 nije korištena dok je vlasnik ne potvrdi.
- „Kratki odgovor“ je sada „Ukratko“ (design/04 #9): tipografski blok bez okvira i ikone, `--fs-lead`, 38ch, u
  stupcu uvoda. Ispisuje ga `zaec_render_blocks` iza prvog bloka (druga sekcija stranice), najviše jednom; heroji ga
  više ne ispisuju.

Provjereno Playwrightom na lokalnom WP-u (build iz ove grane): prvi ekran na 360, 390, 900 × 1000, 1024, 1280, 1440 i
1920; slijed bloka s kulom na 390, 1024, 1440 i 1920 (paljenje etaža, sve upaljeno na kraju) i uz smanjeno kretanje;
„Ukratko“ na O nama, Cijenama, SEO-u, hubu djelatnosti, lokalnoj stranici, provjeri i hubu usluga (jednom po stranici).

Pregled 07 (design/07-pregled-izrade.md):
- Na mobitelu je uvod nakon kraja pina klizio preko kule i gumba na ulazu, jer je pozornica bila prikovana do kraja
  heroja. Pozornica i `.it-run` sada su u omotaču `.it-pin`, pa prikovanje završava s gradnjom: kula odlazi gore, a
  uvod dolazi ispod nje. `07-provjera-izrade.mjs`: bez preklapanja na svih šest širina.
- Kicker bloka „Što kupujete“ je „Odluke“ (bio je „Proces“).

## 6. Interno povezivanje i ljestvica ulaza (strategija 03 §2 i §4)

- Izrada: `related` sada vodi i na glavnu lokalnu stranicu (Izrada web stranica Osijek, umjesto AI vidljivosti koja
  ima dolazne veze s SEO-a, lokalnog SEO-a i GBP-a; rešetka ima tri mjesta).
- Hub djelatnosti dobiva `related`: Osijek, besplatna provjera vidljivosti, cijene. O nama ga je već imao.
- Google Business profil: uvod bloka „Što radimo na profilu“ razgraničava profil i lokalni SEO, s poveznicom. Uvodi
  blokova zato prolaze kroz `zaec_kses_text` (a, em, strong, br) umjesto `esc_html`.
- Stranice djelatnosti: ispod znakova povjerenja redak „Ili prvo besplatna provjera vidljivosti“ (`cta_industry_audit`).
  Na desktopu je izvan toka (`position: absolute` ispod tijela), jer je list nacrta smješten prema naslovu: redak ne
  mijenja visinu heroja. Provjera nacrta nakon toga i dalje 66/66.

## 7. Cijene: hero je kartica „Vaša procjena“ (design/04 #12, 05-reference)

- Umjesto slike monitora kadar nosi karticu „Vaša procjena“ iz procjene na stranici (`configurator.php` s argumentom
  `mirror`). Isti rezultat (opseg, okvirni rok, mjerač, presjek zgrade) računa `configurator.js` za obje kartice;
  vrsta projekta bira se i u kartici i mijenja prvo pitanje procjene ispod. Ostalih pet pitanja je ispod.
- Bez JS-a kartica pokazuje početno stanje bez gumba za vrstu. Početni rok u HTML-u sada je onaj koji procjena i
  izračuna (2–4 tjedna), pa se pri učitavanju ništa ne mijenja.
- Slika `usluga-procjena.webp` ostaje u registru za dijeljenje (og:image).
- Na mobitelu je presjek umanjen i bez natpisa katova. Provjereno: sinkronizacija kartice i procjene (miš i
  tipkovnica), najviša zgrada (webshop sa svim funkcijama) stane na 1440 i 390.

## 8. Nedosljednosti iz design/04 i QA N3

- #5: pozivi u heroju podstranica na ≤ 560 px uvijek su jedan ispod drugog, iste širine (kao `.btn-row`).
- #10: blok „Šest razloga da se javite danas“ ostaje samo na Cijenama (maknut s Usluga i O nama).
- #16: problemi (P.01–P.03) tintom; boja greške ostaje samo za validaciju forme.
- QA N3: na `paper-2` blokovima `--muted` je `#635f56` (4,9:1 umjesto 4,33:1). `.mk-in` je na naslovnici (3D nit).
- #11: Provjera vidljivosti i Google Business profil dobili su vlastite kadrove (`tools/art/scenes/profil.js`,
  lokalni render, bez troška). GBP: kartica profila nad oznakom na karti u nacrtu (fotografija radnje, zvjezdice,
  gumbi poziv / ruta / web, recenzije), tragovi pretraga dolaze s desne strane, ne preko kartice. Provjera: vaš obrt
  osvijetljen sprijeda, tri konkurenta u nacrtu iza svjetlosnog lista, uz svaku zgradu kota, crta mjerila preko vrhova.
  Bez brojeva i ocjena u kadru. Kartica GBP-a je u srednjoj trećini kadra jer naslov na 1280–1440 px ulazi u lijevi
  rub okvira. Provjereno na stranicama na 1440, 1280, 1024 i 390. Izvedenice (`-800.webp`, `og/*.jpg`) samo za ta
  dva kadra, s parametrima iz `derive.mjs`. SEO i dalje ima povećalo (design/04 ga zove klišejem), ali više ga ne dijeli.
- Otvoreno: #14 podnožje je u 3D niti.

## 9. Slike za dijeljenje (og:image) iz nacrta

- Djelatnosti i hub djelatnosti dijele se s vlastitim listom nacrta: `assets/img/og/nacrt-<slug>.jpg` (hub:
  `nacrt-djelatnosti.jpg`), 1200 × 630, lijevo naslov stranice i broj lista, desno list nacrta (desktop pogled).
  `zaec_og_image()` ih uzima prije slike iz registra; ako datoteke nema, ostaje dosadašnje pravilo.
- Izrada: `node tools/art/nacrt/og.mjs zaec/assets/img/og <slug>...` snima s lokalnog WP-a (stilovi i fontovi teme,
  zato build iz grane). Playwright nije ovisnost repozitorija (globalno instaliran, `PW_FROM`), adresa `ZAEC_URL`.
  Nakon promjene lista nacrta ili naslova djelatnosti sliku treba ponovno snimiti.

## 10. Nacrt: prag vidljivosti po oznaci (design/06, ponovni pregled)

- Umjesto jednog praga (omjer kadra ≥ 1,05) za sve što je lijevo od zone čitanja, generator za svaku takvu oznaku i
  ključ računa lijevi rub cijele grupe (tekst, vodilica, točka) i daje klasu `c-a70` … `c-a120`: prag
  (1200 − x + 8)/1000 zaokružen gore na 0,05 (`aspectClass` u `std.mjs`, container queryji u `hero.css`). Legenda
  građevine i ključevi trgovina i ugostiteljstva sada se vide od omjera 0,8, saloni 04 i stručne 02 od 0,75, vodo
  04 od 0,85; klima 04 i krov 03 i dalje traže širok kadar (1,05 i 1,10).
- Klima: na 1600 × 900 zadnji red naslova ulazi u list do x ≈ 199 u i dirao je oznaku 04. Tekst oznake sada počinje
  na x 214, a cijevi i odvod kondenzata su uz samo pročelje (x 427–443), desno od teksta.
- `build.mjs` preskače `og.mjs` (prije bi ga uvezao kao list).
- Provjera nacrta (`02-prototip/provjera-nacrta.mjs`, proširena na 10 veličina: uz 360, 390, 1024, 1280 × 720,
  1440, 1920 i 1280 × 800, 1366 × 768, 1536 × 864, 1600 × 900): 110/110 za hub i 10 listova. Og slike ponovno
  snimljene (gdje se oznake sada vide, vide se i na slici za dijeljenje).
- Svih 11 slika pregledano na kontaktnom listu; og:image provjeren u HTML-u svih 11 stranica.

## 11. Potvrda 08 (art direkcija, design/08-potvrda-pr7.md)

- A: na mobitelu (≤ 760 px ili uspravno) `.eh-copy` ima jedan stupac `minmax(0, 1fr)`. Kadar s `width: 100vw` i
  `margin-left: −gutter` prije je rastezao auto stupac kroz desni padding, pa su uvod i gumbi pune širine dolazili do
  ruba ekrana i gumbu se rezao kosi kut. Naslov je `min(--fs-d2, 10vw)` (bio 10.6vw), a donji razmak kartice na
  Cijenama prati ga. Provjereno na 30 stranica × 360, 390, 414, 560: desni rub gumba, naslova i uvoda je
  širina − gutter, bez vodoravnog skrola.
- B: gumb forme na uskom ekranu smije u dva retka (`white-space: normal`), pa Provjera na 360 px nema skrol.
- C: vrste u kartici Cijena su četiri u redu kad stanu (container query na `.est`: 342 px, mobilni gumbi 316 px),
  inače 2 × 2; nikad 3 + 1. D: `.est .cfg-result { align-items: end }`, pa rok stoji u ravnini s opsegom i kad
  „Okvirni rok izrade“ ide u dva retka. Oznaka „okvirni“ ostaje (procjena, ne obećanje).
- E: og slike nacrta imaju znak ZAEC i riječ „ZAEC“ od 30 px (čitljivo u feedu na 500 px). Svaka stranica s vlastitom
  slikom ima `og:image:alt`: list nacrta (naslov iz SVG-a), inače opis kadra iz registra.
- Nakon promjena: nacrt 110/110 na 10 veličina, Izrada 6/6 (07-provjera-izrade).

## 12. Pregled 09 (art direkcija, design/09-pregled-6f961c0.md)

- A (uski prozori): prozori 761–1100 px uži od kvadrata (npr. pola ekrana od 1920 px) dobivaju složeni raspored
  kao mobitel i uspravni tablet: uvjet postojećih mobilnih blokova proširen je s
  `(max-width: 1100px) and (max-aspect-ratio: 1/1)`, a tabletni pojas 761–1100 px vrijedi samo za prozore šire od
  kvadrata (`min-aspect-ratio: 1001/1000`, da se na točno 1 : 1 ne preklapaju). Isti uvjet imaju `sizes` slike u
  `editorial.php` i otvaranje kadra u `editorial.js`. Mobilni izrez nacrta na 761–1100 px ima tekst 15 u (17–24 px).
  Naslov u složenom rasporedu ima `max-width: 8.6em`, pa je prvi redak (u kadru) kratak.
- Ostaci na visokim desktop prozorima: FID 30 mA (električari) spušten uz toroid (y 340), ključ krova pomaknut na
  x 632 (uži, 150 u), naziv ključa trgovina iznad skice. Og slike tih triju listova ponovno snimljene.
- B (naglasak u kadru): `editorial.js` stavlja `<br class="eh-br">` ispred naglašene riječi kad bi ušla u kadar
  (barem trećina kutije retka; riječ koja već počinje redak se ne dira). Vrijedi i za složeni raspored. Tamni hero
  (Održavanje) se preskače jer je naglasak na noćnom papiru ionako zlatan. Bez JS-a ostaje prijelom iz CSS-a.
  GA4: „Znajte koji euro donosi *posao*.“ (naglasak u drugom retku).
- Provjera: nacrt 275/275 (11 listova × 25 veličina, uključujući 780 × 960, 900 × 1000, 960 × 1000, 1000 × 1000,
  1100 × 1000, 1100 × 1100, 1200 × 1200, 1280 × 1300, 1440 × 1200, 1920 × 1200); naglasak u kadru 0 na desktopu, na
  složenom rasporedu samo kutija drugog retka (3–16 %) i Održavanje; mobilni rub 120/120; Izrada 6/6.
