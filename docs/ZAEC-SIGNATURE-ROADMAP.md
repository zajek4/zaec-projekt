# ZAEC — Signature Edition: roadmap i dnevnik rada

Grana: `feat/zaec-signature-experience-u5s6e3` (od `main` @ 1260d19, koji već sadrži v2-hero-kv kroz PR #5).
Ništa se ne spaja u `main` bez odobrenja. Produkcijski WordPress se ne dira.

## Kako nastaviti nakon prekida

1. `git checkout feat/zaec-signature-experience-u5s6e3 && git pull`
2. Build:
   - normalno: `npm ci && npm run build`
   - ako `registry.npmjs.org` nije dostupan (mrežna pravila cloud okruženja): `bash tools/offline-kit/setup.sh && bun tools/offline-kit/build.mjs`
     (izvori three r186 / gsap 3.15.0 / lenis 1.3.26 s GitHuba, fontovi iz postojećeg builda; izlaz je isti raspored kao Vite).
     Kit nakon Buna snižava izlaz na ES2020 globalnim TypeScriptom (`ZAEC_TS`) i provjerava ga acornom (`ZAEC_ACORN`),
     kao `target: 'es2020'` u Viteu. Prije spajanja u `main` ipak pokrenuti `npm ci && npm run build` gdje je registar dostupan.
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
- **Osijek (faza 5):** grad više nije ružičasti volumen nego noćni grad. Temelj je karta uličnog svjetla
  (`city-look.js`): platno 2048² (1024 na mobitelu) preko ±2,6 km, na koje se crtaju ulice po rangu (širina i jačina),
  lokve svjetiljki, trgovi, izlozi gradskih kuća i fasade uz Dravu; pojačanje po zonama (Gornji grad i Tvrđa
  svjetliji). Iz iste karte čitaju tlo (toplo svjetlo ulica, mreža se izdaleka ne gubi), zgrade (topli odsjaj
  ulice na donjim katovima), trgovi/parkovi i voda (odsjaji). Zgrade: vlastiti shader, ravne normale, mjesečina i
  nebo hladno, prozori proceduralno po profilu zgrade (kuća, stambena, gradska kuća s izlozima u prizemlju, hala),
  izdaleka prelaze u prosječan sjaj (bez treperenja), petina prozora se polako pali/gasi. Krovovi: dvostrešni,
  poluskošeni i četverostrešni (nagib 38–46°), mansarde u središtu, ravni s atikom i strojarnicom, dimnjaci;
  crijep 88 %, škriljevac ostalo, redovi pokrova nestaju prije nego bi treperili. Drava: voda na −2,4 m s nasipima
  (9 m kose obale), mostovi samo gdje stvarne OSM ceste prelaze vodu (bez izmišljenih), valići nizvodno, Fresnel,
  izduženi odsjaji svjetla s obale. Svjetiljke: topla LED-bijela na glavnim, natrijeva na sporednim ulicama.
  Prije ovoga su voda, trgovi i parkovi bili nevidljivi (trokuti okrenuti naopačke, odbacivani) — popravljeno.
- **Nacrt (faza 6):** skener sada traje dulje (pola prijelaza katedrala → nacrt), a kad prođe, crtež dobiva
  arhitektonske oznake (`blueprint.js`): liniju tla, os tornja (crta-točka), kotnu liniju visine s kosim
  crticama i pomoćnom crtkanom linijom s vrha te oznaku "90 m · visina tornja". U kadru mreže mjerne linije zgrade
  produljuju se u crtkane konstrukcijske pravce (udesno i gore, lijevo je tekst), a prema kadru weba ti isti pravci
  legnu na stupce i redove okvira stranice (mreža rasporeda iza žičanog okvira). Zatamnjenje grada u poglavljima
  nacrta računa se u izlaznom prostoru (kao prije novog shadera), pa grad ne natječe s crtežom.
- **"Devedeset metara" provjereno:** 90 m navode opis kulturnog dobra (Konzervatorski odjel u Osijeku, preko
  bus.hr), Lonely Planet i drugi; engleska Wikipedija navodi 94 m. Model konkatedrale visok je 94 m s križem.
  Tekst ostaje "90 m"; kota se crta do 90 m, križ je iznad nje.
- **Most iz priče u posao (faza 7):** prva sekcija na papiru postaje osmo poglavlje filma (`08 — ZAEC`, `#zaec`),
  prema smjernicama niti za sadržaj (`strategy/04-naslovnica.md`): naslov "Svako svjetlo je nečiji posao. *Naš* je
  da se vaš vidi." preuzima motiv filma; "Dobri ste u svom poslu" je otišao jer je zvučao pokroviteljski za B2B i
  ustanove, a tri od četiri boli ponavljale su poglavlja filma. Lijevo (ljepljivo): tko smo i za koga, poziv na upit
  i prvi korak (razgovor od dvadesetak minuta i pisana procjena). Desno legenda nacrta: Što radimo (poveznice na
  usluge), Za koga (djelatnosti), Kako radimo (nacrt prije dizajna, fiksna cijena, jedna osoba od početka do kraja),
  Što dobivate (radovi). Svaki red ima prozor koji se upali kad red uđe u kadar. "Već ste se jednom opekli?" prelazi
  u lead Ulaganja; `slav_lead` ispravljen (pekara i klima servis ne natječu se za iste pretrage; laboratorij =
  stvarni projekt Eurokontrola). Sve tvrdnje već postoje na webu. Tekstovi su zadane vrijednosti; uređeni tekstovi
  iz administracije imaju prednost — na produkciji provjeriti opciju `zaec_home_texts` prije objave.
- **Leća za uspravne zaslone:** sekcije s `data-lens` mjere svoj tekst; dok tekst prolazi gornjom polovicom ekrana,
  kamera pomiče motiv u slobodni pojas ispod njega. Popravlja crnu sličicu na mobitelu (~4100 px, postojala i prije)
  gdje je grad bio ispod tamne podloge teksta; podloga je uža i prozirnija. Leća je dodana i konkatedrali i
  nacrtu; računa da dno ekrana zauzima traka s pozivima (motiv ide u pojas između teksta i trake).
- **Organizacija (od faze 6):** ova nit vodi 3D priču, naslovnicu i integraciju grane/PR-a #6. Faze 8–9 (podstranice,
  cijene, kontakt) radi zasebna nit na vlastitoj grani; SEO/sadržaj, dizajn-istraživanje i QA pišu u
  `/mnt/project-files/zaec-signature/{strategy,design,qa/audit}`. Grana podstranica spaja se u ovu nakon QA-a,
  build se radi ovdje. Ništa ne ide u `main` bez odobrenja.
- **Tipografska skala i gumbi (smjernice `design/01`):** tokeni `--fs-d1…d4`, `--fs-h3/h4/lead/body/ui/small/label/micro`,
  razmaci, proredi, širine reza i mjere u `:root` u `global.css`; aliasi `--fs-hero/--fs-h2/--fs-mono` drže stari kod.
  Prored displaya 0,97 (kvačice Č Š Ž Đ više ne diraju silazne poteze). H1 podstranica = `min(--fs-d2, 10.6vw)`;
  heroji podstranica imaju svoje veličine u `hero.css`/`sub.css` (nit podstranica). Kurziv u naslovu 1,06em s
  proredom 0; u razdvojenim naslovima maska riječi dobiva vlastiti prored (inače bi kurziv bio odrezan — uhvaćeno
  na snimci heroja). Filmski naslovi naslovnice (`.h2--sub`, `.h2--path`, `.h2--final`) zadržavaju svoje veličine jer
  su komponirani s 3D kadrom.
  Gumbi: hover samo za fini pokazivač; pritisak stisne obje plohe i pokaže ispunu i na dodir; fokus je **outline na
  kosoj plohi** (`::before`), ne `box-shadow` kao u prijedlogu, jer `hero.css`/`sub.css` postavljaju `box-shadow`
  obrubu ghost gumba i pregazili bi prsten; u noći primarni se puni papirom, prsten je #9fb4ff, a na papiru signal.
  Onemogućeno/učitavanje, `.btn-row` (stupac ispod 560 px). Gumbi u heroju naslovnice: optički pomak 6 px i stupac
  na mobitelu; "Dalje" u formi cilja je primarni (signal). Usluge u mobilnom izborniku su popis poveznica, ne pilule.
  Ništa ispod 11 px u `global.css`/`home.css`: informacija 12 px (filmska traka, OSM zasluga, lijevak, oznake
  usporedbe, tablica, koraci forme), dekor 11 px (uputa za scroll, potpis branda), kartografske oznake (aria-hidden)
  10 px. Naslovi stupaca i pravni red u footeru prešli na `--abyss-muted` (kontrast 6,8 : 1). Natpis usporedbe dobio
  tamnu podlogu (na mobitelu je prelazio preko svijetle polovice i nije se mogao pročitati).

- **Primarni poziv (odluka, vrijedi za sve niti):** primarni gumb u sadržaju ostaje signal plava. Iznimka su
  stalno vidljive pozicije na noći — gumb u zaglavlju i donja traka upita na mobitelu — gdje je gumb **papir**
  (`--paper`, tinta) na `#04050b`. Tako je korisnik izričito tražio za mobilnu traku ("tamna #04050b, svijetli ili
  diskretno topli CTA", bez zelenog "Nazovite" i intenzivno plavog gumba); papir drži jedan primarni poziv po
  kadru i ne natječe se s plavim gumbom poglavlja. "Nazovite" nije ni u jednoj sticky ili primarnoj poziciji;
  telefon je na stranici Kontakt i u stupcu kontakta u footeru. `zaec_inquiry_url()` vodi na formu na istoj
  stranici (naslovnica `#kontakt`, Kontakt `#upit`) ili na formu na Kontaktu.
- **Izbornik usluga:** tri skupine kao na naslovnici (Izgradnja → Vidljivost → Rast), isti URL-ovi; na mobitelu
  naslovi skupina iznad popisa poveznica.
- **Noćni prozori:** svaka zgrada ima razinu aktivnosti (dio gotovo taman, dio živ), stanovi se pale po jedinicama,
  dio prozora tek prigušen ili hladan (zaslon); izlozi različito otvoreni. Bez treperenja (promjene svakih ~140 s
  samo za mali dio jedinica).
- **Konkatedrala (bez novog modela):** vitraji s olovnim okvirima i manje zasićeni; krovovi u hladnoj noći, zidovi
  topli, reflektori u podnožju u lepezama, pročelje prema trgu svjetlije; u zvoniku iznad sata iza žaluzina tek
  naslutljivo toplo svjetlo. Geometrija tornja se nije mijenjala: `gltfpack` (npm) nije dostupan u ovom okruženju,
  a bez referentnih fotografija promjena proporcija bila bi nagađanje. Potrebne fotografije: vidi "Otvoreno".
- **Snop s tornja:** najviše ~60 % prijašnje jačine, uži, iznad ~100 m prelazi u nit; križ ostaje vidljiv. Ostaje kao
  motiv (fizički grad → digitalna točka), ali više ne nadjačava toranj.
- **Lite način:** ostaje na `hardwareConcurrency <= 4`. Broj su logičke niti: 4 niti danas imaju slabiji prijenosnici
  (i3, Celeron, stariji 4c/4t) sa slabom integriranom grafikom; snažniji 4-jezgreni imaju 8 niti. Regulator DPR-a
  se sada i oporavlja (nakon ~10 s glatkih sličica), ne broji zagušenje dok se grad priprema, a razinu koja je
  dvaput bila spora više ne vraća.
- **QA N4 (daj-gric.jpg):** slika ostaje u temi namjerno: projekt je u wp-adminu prebačen u skicu, ne obrisan,
  i njegov zapis i dalje pokazuje na nju. Javno se nigdje ne koristi.

## Faze

| Faza | Stanje |
|---|---|
| 1 Audit i kreativna inteligencija | ✓ audit, snimke prije; Inspo/SEO Machine — vidi bilješke |
| 2 Temelji (bugovi, interakcije, tokeni) | ✓ vrata, procjena, tokeni, tipografska skala i gumbi (`global.css`, naslovnica); veličine heroja podstranica — nit podstranica |
| 3 Zemlja | ✓ atmosfera, ocean, kopno, kadrovi (desktop + uspravno), posteri |
| 4 Svjetla Europe | ✓ svjetla iz NASA/NOAA snimke, jantarni dnevni sloj, sumrak s istoka |
| 5 Osijek (krovovi, rasvjeta, Drava) | ✓ karta uličnog svjetla, prozori i izlozi, krovovi, Drava s nasipima i mostovima, leća za mobitel |
| 6 Konkatedrala i nacrt | ✓ kota 90 m, os, tlo, konstrukcijski pravci → mreža stranice, sporiji skener, leća |
| 7 Naslovnica: urednički dio, prefooter, footer, Daj Gric | ✓ prefooter, footer, Daj Gric, poglavlje 08 — ZAEC (most iz priče u ponudu) |
| 8 Izrada web stranica | predano niti za podstranice |
| 9 Djelatnosti, cijene, o nama, kontakt | djelomično: bug procjene ✓; ostalo predano niti za podstranice |
| 10 SEO i sadržaj | otvoreno |
| 11 Performanse, pristupačnost, QA | ✓ nalazi QA za 3D/naslovnicu (V1, V2, S1–S8, S14, N1, N2, N5); mjerenje na stvarnim uređajima otvoreno |
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
- Osijek: snimke prije/poslije 1440×900 (prijelaz 4050, Osijek 4500, konkatedrala 5400) i 390×844 (prijelaz,
  Hrvatska 1941–3200, Osijek 3685–4529, konkatedrala), krupni kadrovi krovova i vode iz debug kamere.
  `qa/faza-5-prije-poslije.png` u projektnim datotekama.
- Poglavlje 08 — ZAEC: PHP lint; snimke 1440×900 (tri pozicije), 1024×768 i 390×844; bez JS grešaka.
- Nacrt: snimke 1440×900 (5400–8100, svakih 150–450 px) i 390×844 (5429–8300), uključujući sredine prijelaza;
  oznaka "90 m" ne prekriva naslov ni na jednom. Bez JS grešaka u konzoli. Napomena: u softverskom rendereru kamera
  kasni za scrollom (sličica traje ~150 ms, korak prigušenja je ograničen), pa snimke na sidrima trebaju ~4 s.
- Tipografija i gumbi: snimke 1440×900 (heroj, 08, usporedba, usluge, "možda", ulaganje, upit, footer) i 390×844
  (heroj u dvije pozicije, karta, Slavonija, Osijek, nacrt, put do upita, 08, usporedba, upit, footer, otvoren
  izbornik); fokus tipkovnicom na sedam gumba/poveznica u noći i na papiru (`:focus-visible` potvrđen, prsten prati
  kosinu). Bez JS grešaka.
- Cijena grada (swiftshader, CPU, 1440×900, DPR 1, sinkronizirano `readPixels`): Osijek 68 → ~120–138 ms/sličici,
  konkatedrala 121 → ~155–172 ms. Najviše troše shader zgrada (~37–50 ms) i tlo preko cijelog ekrana (~22–31 ms).
  CPU renderer pretjeruje cijenu fragment shadera; na GPU-u mjeriti u fazi 11. Postojeći regulator spušta DPR
  kad sličica traje > 24 ms.

- Završni prolaz (prozori, konkatedrala, CTA, QA): snimke prije/poslije 1440×900 (3600, 4050, 4500, 5400) i 390×844
  (3714, 4150, 4558, 5458), krupni kadrovi konkatedrale i zvonika (DPR 2), nacrt 6300, mreža 7200, web 8100, mobitel
  6302/7146; 360×640 i 320×640 za traku upita. `qa/zavrsni-prolaz/` u projektnim datotekama.
- Build snižen na ES2020: 0 `static {}` i 0 logičkih dodjela u izlazu, acorn parsira sve datoteke kao ES2020;
  naslovnica (3D kroz poglavlja) i konfigurator na /cijene/ rade u Chromiumu bez JS grešaka. U starom Safariju nije
  provjereno (nema ga u okruženju).
- Kontrast (vlastita skripta, približno: najbliža neprozirna pozadina): footer i sažetak procjene više se ne javljaju;
  preostali nalazi su lažno pozitivni (gumbi crtaju ispunu pseudo-elementom) ili postojeći `.mk-in` (N3).
- Tipkovnica: mobilni izbornik, 40 Tab koraka → 34 u izborniku, 3 na gumbu izbornika, 3 u pregledniku, 0 na stranici
  iza; Escape vraća fokus, `inert` uklonjen. Vrh naslovnice: 25 Tab koraka, 0 nevidljivih.
- Oznake: "Vaša tvrtka" na 390 i 1024 skrivena kad bi bila ispod forme, na 1440 vidljiva; oznake kanala na 1024 od
  26 px od ruba (prije −10 px). Naslovi na 1920: poglavlja u 2–3 retka (prije do 4).
- Performanse (SwiftShader, CPU; relativno, ne GPU): vrijeme sličice nakon završnog prolaza jednako prijašnjem unutar
  šuma (desktop 78–83 / 78 / 172–181 ms na 3600 / 4050 / 5400; mobitel 4× CPU 25–29 / 33–38 / 70–80 ms). Karta svjetla
  (~150 ms na glavnoj niti na desktopu) sada se crta u Workeru; maska Drave skratila učitavanje grada ~470 → ~380 ms
  (profil, 4× CPU). Ukupno dugih zadaća u prvih 12 s na mobitelu 4× CPU: 2,4–2,5 s → 2,2–2,7 s (šum veći od razlike);
  najdulja 640–670 → 580–650 ms. Ostatak je prevođenje shadera i slanje tekstura pri prvom crtanju.
  Napomena: okruženje ima 4 niti, pa desktop ovdje radi u lite načinu.

## Samokritika (0–10)

| Faza | Dizajn | Kreativnost | Upotrebljivost | Tehnika | Napomena |
|---|---|---|---|---|---|
| 5 Osijek | 7,5 | 7 | 8 | 7 | Grad se čita kao noćni Osijek; krovovi izbliza tamni, cijena na CPU-u visoka |
| 6 Nacrt | 8 | 8 | 8 | 7,5 | Kota i pravci daju nacrtu smisao; na desktopu toranj na trenutak prolazi ispod teksta |
| 7 Poglavlje 08 | 8 | 8 | 8,5 | 8 | Motiv filma nastavljen na papiru; odgovara tko/što/za koga/kako početi |
| 2 Skala i gumbi | 8 | 7 | 8,5 | 8 | Jedan sustav umjesto procjene od slučaja do slučaja; filmski naslovi namjerno izvan skale |
| Završni prolaz: prozori | 8 | 7,5 | — | 8 | Grad više ne izgleda "sav upaljen"; iz zraka i dalje nedostaje istok (podaci) |
| Završni prolaz: konkatedrala | 8 | 7,5 | — | 7,5 | Ravnoteža toplih zidova i tamnih krovova, tih snop; geometrija tornja nepromijenjena |
| Mobilni CTA | 8,5 | 7 | 9 | 8,5 | Jedan poziv, ne prekriva formu ni footer |

## Otvoreno

- `registry.npmjs.org` je blokiran mrežnim pravilima okruženja; build je Bunom, snižen na ES2020 (vidi gore). Prije
  spajanja u `main` pokrenuti `npm ci && npm run build` gdje je registar dostupan i commitati taj izlaz.
- **Svjetla grada iz zraka i centar oko trga (zahtjev korisnika, točke 1 i 2) čekaju podatke.** `overpass-api.de`,
  `api.openstreetmap.org`, `upload.wikimedia.org` i `commons.wikimedia.org` vraćaju 403 (pravila mreže okruženja).
  Postojeći `osijek-city.bin` pokriva 18,650–18,712° E: istočni dio grada (Donji grad prema 18,73°) nije u njemu,
  a zgrade iz OSM relacija (multipoligoni) nisu uvezene, pa u blokovima oko konkatedrale ima rupa. Bez podataka se
  praznine ne popunjavaju izmišljenim zgradama. Kad se domene dopuste: proširiti bbox, uvesti relacije, ponovno
  izgraditi `osijek-city.bin` (`npm run city`).
- **Konkatedrala, za vjernost tornja trebaju fotografije:** (1) toranj frontalno s Trga Ante Starčevića, cijela visina
  od portala do križa; (2) toranj dijagonalno (kut sjeveroistok ili jugoistok), da se vide dvije strane zvonika;
  (3) krupno: kat sa satom i zvonik iznad njega (otvori, žaluzine, vimperzi, fijale); (4) prijelaz zvonika u šiljak
  (galerija, lukarne); (5) noćna fotografija iz iste točke kao (1), za raspored reflektora; (6) zračna ili s visine
  (dron / Hotel Osijek) prema lađi i krovovima. Uz to `gltfpack` (npm) za ponovnu izgradnju modela.
- Sekcija iznad footera na nekim podstranicama (CTA traka) još koristi sivu `--ink`; ujednačiti s `--abyss` (faza 12).
- Nacrt, desktop: riješeno zadrškom kanala (`hold`); lađa na ~6000 px još malo dira naslov nacrta.
- Osijek: krovovi izbliza i dalje dosta tamni; Drava na kadru Osijeka tamna (obalne svjetiljke se iz tog kuta
  fizički ne zrcale). Preklapanje oznaka Slavonije na mobitelu riješeno izbjegavanjem sudara.
- Footer: stupac "Djelatnosti" još navodi stare obrtničke nazive; uskladiti sa sektorima nakon spajanja grane
  podstranica (PR #7).
- Kategorije djelatnosti u procjeni ("Voda", "Struja"…) — nova nomenklatura (faza 9/10).

## Sljedeći korak

Integracija grane podstranica (PR #7) nakon QA-a, footer prema sektorima; podaci za istok grada i centar čim
mreža dopusti OSM; faza 12.

## Commitovi

- `a431f50` Offline build kit (Bun)
- `01cc977` Portfelj: Daj Gric povučen (reverzibilno)
- `2702cf7` Naslovnica: put do upita bez skokova, prefooter, mobilni završni kadar
- `96168d5` Procjena: popravljen pad blokova, presjek zgrade
- `b8e4968` Footer u dubokoj noći, tokeni `--abyss`
- `4644aef` Zemlja: atmosfera s raspršenjem, ocean, kopno, kadrovi
- `5515519` Svjetla Europe iz NASA/NOAA snimke
- `5c2d62d` Osijek: noćni grad, Drava, leća za uspravne zaslone
- `080163d` Nacrt: kota tornja, os, konstrukcijski pravci, mreža stranice
- `7ffe5f0` Naslovnica: most iz priče u posao
- `c4b28ae` (faza 7) Poglavlje 08 — ZAEC prema smjernicama za sadržaj; oznake bez preklapanja; zadrška tornja
- `28d86c2` Tipografska skala i sustav gumba prema smjernicama dizajna
- `ea6ef9d` Jedan primarni poziv na upit; izbornik usluga u tri skupine
- `d26a0c7` Grad i konkatedrala: prirodnija noćna svjetla, tiši snop s tornja
- `3265d61` Nalazi QA: ES2020 build, kontrast, modalni izbornik, oznake, karta svjetla izvan glavne niti
- `b2aca60` 3D: lakše pokretanje (maska Drave, brži blur, odgođena priprema nacrta)
- `4152c6f` Nalazi QA (nisko): slojevi, oznake uz rub, traka upita na uskim zaslonima
