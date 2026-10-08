# ZAEC — Signature Edition: roadmap i dnevnik rada

Grana: `feat/zaec-signature-experience-u5s6e3` (od `main` @ 1260d19, koji već sadrži v2-hero-kv kroz PR #5).
Ništa se ne spaja u `main` bez odobrenja. Produkcijski WordPress se ne dira.

## Kako nastaviti nakon prekida

1. `git checkout feat/zaec-signature-experience-u5s6e3 && git pull`
2. Build:
   - normalno: `npm ci && npm run build`
   - ako `registry.npmjs.org` nije dostupan (mrežna pravila cloud okruženja): `bash tools/offline-kit/setup.sh && bun tools/offline-kit/build.mjs`
     (izvori three r186 / gsap 3.15.0 / lenis 1.3.26 s GitHuba, fontovi iz postojećeg builda; izlaz je isti raspored kao Vite).
3. Lokalni WordPress za vizualni QA (bez MySQL-a): WordPress 6.8.3 i `sqlite-database-integration` kloniraju se s GitHuba,
   tema se poveže simboličkom vezom, `php -S 127.0.0.1:8080 router.php`. Screenshotovi: Playwright + Chromium (swiftshader WebGL).
4. Pročitati "Otvoreno" i "Sljedeći korak" na dnu.

## Polazno stanje (audit, faza 1)

Sustav je zreo i vrijedan: jedan Three.js svijet (`src/js/world3/`) s monotonom kamerom kroz ključne slike, karta koja se
"odmata" s globusa, OSM Osijek, parametarska konkatedrala (glb ~65 kB), skener stvarnost→nacrt, signal s tornja, 7 slojeva
weba, put do upita. Podstranice imaju tri razine heroja (`docs/hero-art-direction.md`). Ne gradi se ništa ispočetka.

Snimke prije (1440×900, 25 scroll pozicija) pregledane su u pregledniku. Najslabija mjesta po važnosti:

| # | Mjesto | Problem | Faza |
|---|---|---|---|
| 1 | Procjena, "Što još treba raditi?" | GSAP `from({y})` prepisuje CSS 3D transform bloka → blok pada kroz druge; stog se gradi iznova pri svakoj promjeni; redoslijed po popisu, ne po visini; tjedni s decimalom (11.5) | 2 ✓ |
| 2 | "Ista stranica. Drugačija struktura." | opisi vrata zamjenjuju se `display:none` (skok sadržaja), trake lijevka mijenjaju gradijent bez tranzicije, brojevi lijevka skaču, više paralelnih tweenova pri brzom klikanju, `aria-live` čita svaki međubroj | 2 ✓ |
| 3 | Footer | siva #141414, CTA preklapa tekst, nije dio noćnog sustava | 7 ✓ |
| 4 | Prefooter | "Osijek → cijela Hrvatska" ispod oznake; na mobitelu telefon preko oznake i planeta | 7 ✓ |
| 5 | Portfelj | Daj Gric u seedu i javno | 7 ✓ |
| 6 | Grad (Osijek) | krovovi su ravni/generički, rasvjeta ujednačena, Drava plosnata | 5 |
| 7 | Svjetla Europe | svjetla se pale tek nad Slavonijom; kontinent nema civilizacijski potpis | 4 |
| 8 | Zemlja | atmosferski rub i raspršenje mogu biti fizički uvjerljiviji | 3 |
| 9 | Djelatnosti | kategorije "Voda/Struja/Krov" preoštro pojednostavljene; heroji umjetni | 9/10 |
| 10 | "Dobri ste u svom poslu…" | prijelaz iz filma u ponudu; preispitati | 7 |

## Odluke

- **Baza:** `main` (v2-3d više ne postoji na remoteu, v2-hero-kv je spojen).
- **Build bez npm-a:** Bun 1.4 bundler s zamjenskim `node_modules` (vidi gore). Output zrcali `vite.config.mjs`
  (ulazi `app`/`home`, `chunks/`, `assets/`; gates je zaseban dijeljeni chunk da world3 nikad ne uvozi `home.js`).
  Kad je npm dostupan, `npm run build` ostaje izvor istine.
- **Daj Gric:** uklonjen iz seeda (nove instalacije ga nikad ne dobivaju). Postojeće instalacije: jednokratna, reverzibilna
  migracija (`zaec_retired_projects_v1`) prebacuje projekt u skicu i bilježi `_zaec_project_retired`; do tada filter
  `pre_get_posts` izbacuje ga iz svih javnih upita, a pojedinačna stranica vraća 404. Ništa se ne briše. Popis je u
  `zaec_retired_project_hosts()` (po domeni, jer ID-jevi se razlikuju između instalacija). Bez izjava klijenata blok
  dokaza se ne prikazuje (nema praznog okvira); zamjenski projekti/izjave nisu izmišljeni.
- **Vrata (put do upita):** oba opisa dijele istu ćeliju mreže → visina kartice = dulji opis, raspored se ne pomiče.
  Odlazeći opis kratko (0,22 s), dolazeći s odgodom (0,1 s + 0,38 s), blagi blur; prekidač zadržava zamah (`ease-back`),
  pritisak ima vlastiti mikrorazmjer. Lijevak: jedan tween stanja za sve brojeve (broj upita, postoci vrata, brojke lijevka)
  — brzo klikanje ga samo preusmjeri; trake su `scaleX` s kaskadom 40 ms. Čitač ekrana dobiva samo konačni broj.
- **Procjena:** umjesto CSS-3D blokova koji padaju — presjek zgrade u nacrtu: temelj (SEO + mjerenje), tijelo (vrsta
  projekta; visina = opseg: landing 22, web 34, webshop 44 px), katovi = funkcije, atika na vrhu. Svaki kat ima stalno
  mjesto (redoslijed popisa), elementi se ne grade iznova (ključevi), novi kat raste iz nule i kratko se upali toplim
  svjetlom prozora ("svako svjetlo je nečiji posao"), uklonjeni se skupi pa nestane, ponovni klik usred izlaska ga vraća.
  Panel je u dubokoj noći. Sažetak koristi kratke nazive; puni nazivi idu u upit.
- **Footer:** `--abyss` paleta (#04050b → #111729, linije u plavom tonu), horizont na vrhu nastavlja rub planeta iz
  prefootera, kolone Usluge/Djelatnosti/Studio/Kontakt, telefon istaknut, pravni red s poveznicama, golemi ZAEC kao
  gradijent koji nestaje u tami. Bez dodatnog CTA bloka: stranice već završavaju CTA trakom ili formom (izbjegnuto
  dupliciranje). Mobitel: brend → kontakt → dvije kolone poveznica.
- **Prefooter:** uklonjeno "Osijek → cijela Hrvatska"; "Dalje" dobiva vlastiti red s razdjelnikom (zrak iznad);
  veći razmak forma ↔ telefon. Mobitel: novi kadar `final.m` (planet u donjoj polovici), sadržaj gore, 52vh zraka
  na dnu u kojem planet i "Vaša tvrtka" završavaju priču prije horizonta footera; telefon u vlastitoj kartici.
- **Tokeni:** `--abyss*`, `--lamp` u `global.css` — temelj za ujednačavanje noćnih površina u fazi 2/12.
- **Zemlja (faza 3):** atmosfera je jednostruko raspršenje (Rayleigh + Mie) kroz ljusku polumjera 1,032 R:
  zraka iz kamere, 10 uzoraka (7 na mobitelu; nad diskom do 4), optička dubina prema suncu analitički
  (Chapmanova aproksimacija, bez unutarnje petlje), mekana polusjena planeta, ekstinkcija ublažena da rub ostane
  plavobijel. Debljina i visine skale uvećane ~4× radi čitljivosti, omjeri Zemljini. Površina: polje šelfa,
  kontinentalnosti i obale izvodi se u pregledniku iz postojeće maske kopna (512×256, ~5 ms, bez preuzimanja);
  `EARTH_GLSL` (lib.js) dijele globus i karta pa odmatanje ostaje bez šava. Odsjaj mora s Fresnelom, sumrak u dva
  tona. Kadar: desktop planet veći, rub dijagonalno prema gore desno; uspravno obzor Europe u gornjoj polovici,
  tekst na tamnoj podlozi (podloga više ne završava tvrdim rubom). Posteri ponovno snimljeni iz novog kadra.
- **Svjetla (faza 4):** izvor je NASA/NOAA "Earth's City Lights" (javno vlasništvo; `tools/build-lights.py`,
  `img/world/lights.webp`, 67 kB). Prikaz je stiliziran i tako se i opisuje: svaka ćelija matrice točaka pali se
  prema gustoći svjetla na tom mjestu (uv središta ćelije + hash), jezgre metropola toplobijele, predgrađa
  natrijeva narančasta, rijetko hladni LED; regionalni sjaj iz zamućenog kanala. Ispod praga snimke tiha pozadina
  rijetkih slabih svjetala (čuva "detalje na Africi"), stišana na finijim razinama karte. Danju se približavanjem
  Europi (`CIVIC`, Z 0,3→0,95) gusta urbana područja pojavljuju kao jantarne točke u plavoj matrici (podatkovni
  sloj, ne fizička svjetla). Sumrak dolazi s istoka: Europa `dusk` 0,1, Hrvatska 0,6 (Slavonija već pali svjetla),
  Slavonija 1. Atribucija u podnožju naslovnice.

## Faze

| Faza | Stanje |
|---|---|
| 1 Audit i kreativna inteligencija | ✓ audit, snimke prije; Inspo/SEO Machine — vidi bilješke |
| 2 Temelji (bugovi, interakcije, tokeni) | djelomično: vrata ✓, procjena ✓, tokeni ✓; tipografska skala i gumbi — otvoreno |
| 3 Zemlja | ✓ atmosfera, ocean, kopno, kadrovi (desktop + uspravno), posteri |
| 4 Svjetla Europe | ✓ svjetla iz NASA/NOAA snimke, jantarni dnevni sloj, sumrak s istoka |
| 5 Osijek (krovovi, rasvjeta, Drava) | otvoreno |
| 6 Konkatedrala i nacrt | otvoreno |
| 7 Naslovnica: urednički dio, prefooter, footer, Daj Gric | djelomično: prefooter ✓, footer ✓, Daj Gric ✓; sekcija "Dobri ste…" — otvoreno |
| 8 Izrada web stranica | otvoreno |
| 9 Djelatnosti, cijene, o nama, kontakt | djelomično: bug procjene ✓ |
| 10 SEO i sadržaj | otvoreno |
| 11 Performanse, pristupačnost, QA | otvoreno |
| 12 Završna art direkcija i PR | otvoreno |

## Testiranje (stvarno izvršeno)

- PHP lint (PHP 8.3) za sve izmijenjene PHP datoteke: bez grešaka.
- Build (offline kit, Bun): prolazi.
- Daj Gric: lokalni WP s ručno dodanim projektom (stanje kao na postojećoj instalaciji) → naslovnica 0 pojavljivanja,
  /radovi/ 0, /radovi/daj-gric/ 404; nakon admin_init migracije oba zapisa su `draft`, featured 0, retired datum postavljen.
- Vrata: Playwright, 1440×900 — visine kartica prije/tijekom/poslije prijelaza 111 px (bez pomaka), panel 328 px;
  12 brzih klikova → stanje i brojke lijevka konzistentni (950 / 428 / 150 / 37 / 15), bez JS grešaka.
- Procjena: 3 brza klika, 12 brzih klikova, trostruki klik istog polja, promjena vrste projekta → redoslijed katova
  uvijek točan, bez duplikata; snimke tijekom i nakon animacije pregledane.
- Footer: 1440×900 i 390×844 pregledani. Prefooter: 1440×900 i 390×844 (tri scroll pozicije) pregledani.
- Zemlja: snimke prije/poslije 1440×900 (heroj, mreža, rub izbliza), 390×844, 768×1024, 360×640, 1280×720, 1920×1080;
  prijelaz globus → karta (1350–1800 px) bez šava; finale. Bez JS grešaka u konzoli.
- Cijena atmosfere izmjerena samo relativno, u softverskom rendereru (swiftshader, CPU): ~60 % vremena sličice
  na kadru heroja. To nije mjera za stvarni GPU; mjerenje na uređajima ostaje za fazu 11.
- Svjetla: snimke 1440×900 i 390×844 na kadrovima mreža, Europa, Hrvatska, Slavonija i u poniranju (1350–1800 px).

## Otvoreno

- `registry.npmjs.org` je blokiran mrežnim pravilima okruženja; build je Bunom (vidi gore). Pri prvoj prilici
  pokrenuti `npm ci && npm run build` i usporediti.
- Sekcija iznad footera na nekim podstranicama (CTA traka) još koristi sivu `--ink`; ujednačiti s `--abyss` (faza 12).
- Kategorije djelatnosti u procjeni ("Voda", "Struja"…) — nova nomenklatura (faza 9/10).

## Sljedeći korak

Faza 5 (Osijek: krovovi, rasvjeta, Drava), zatim 6, 8 i 9.

## Commitovi

- `a431f50` Offline build kit (Bun)
- `01cc977` Portfelj: Daj Gric povučen (reverzibilno)
- `2702cf7` Naslovnica: put do upita bez skokova, prefooter, mobilni završni kadar
- `96168d5` Procjena: popravljen pad blokova, presjek zgrade
- `b8e4968` Footer u dubokoj noći, tokeni `--abyss`
- `4644aef` Zemlja: atmosfera s raspršenjem, ocean, kopno, kadrovi
- (faza 4) Svjetla Europe iz NASA/NOAA snimke
