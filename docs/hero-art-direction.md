# Heroji podstranica — art direction (v2-hero)

Naslovnica je uvodna špica: jedna neprekinuta kamera od orbite do Osijeka, noć, svjetlo kao značenje
("svako svjetlo je nečiji posao"), nacrt ↔ stvarnost (skener koji zgradu pretvara u nacrt), konkatedrala i
signal s tornja. **Naslovnica se ne dira.** Podstranice su sljedeća poglavlja istog filma.

## Zašto su stari heroji bili slabiji
- Isti predložak za 30+ stranica: tekst lijevo, slika desno — slika je bila ilustracija pored teksta, ne scena.
- Tipografija i slika nisu dijelile kompoziciju: naslov nije znao gdje je zgrada, zgrada nije ostavila mjesta naslovu.
- Nema pokreta s namjerom ni prijelaza: hero je završavao rubom, sljedeća sekcija počinjala na praznom papiru.
- Svjetla podloga (papir) na svakoj stranici prekidala je noćnu atmosferu koju naslovnica gradi.

## Razine
| Razina | Stranice | Pristup |
|---|---|---|
| **1 — potpis** | Izrada web stranica, Kontakt (O nama do 10. 10. 2026, vidi ispod) | Jedna ideja po stranici, vlastiti kadar (desktop 16:9 i zaseban mobilni 9:16), slojevi, vlastiti pokret i vlastiti prijelaz u sekciju 2 |
| **2 — urednički** | Ostale usluge, djelatnosti, Usluge/Djelatnosti (hubovi), Osijek, Provjera vidljivosti, Cijene, Radovi, O nama (list nacrta 00) | Prevelik kadar koji izlazi iz rešetke i preko ruba ekrana; naslov prelazi s papira u kadar i mijenja boju (mix-blend: difference — jedan tekst, bez kopije); filmski "slate" s oznakom kadra; suzdržan pokret |
| **3 — tihi** | Vodiči (i svaka stranica bez slike) | Tipografski hero bez slike: naslov, uvod, kotna crta nacrta s metapodacima |

Članci, privatnost, pojedinačni projekti, hvala i 404 imaju vlastite, već tihe predloške (ne prolaze kroz
`page-hero`) i nisu mijenjani. Razina se bira u `inc/hero.php` (`zaec_hero_kind`): ključ `'hero'` u registru
ima prednost, inače odlučuje tip stranice.

## Razina 1 — koncepti

### Izrada web stranica — "Od nacrta do zgrade"
*Što samo ova stranica može reći:* web se gradi kao zgrada, od temelja do krune — a redoslijed katova je
stvarni redoslijed stranice koja zove (iz sekcije "Kako izgleda stranica koja zove").
- **Kadar:** noćni ugao ulice; sedam etaža jedne zgrade = sedam dijelova stranice. Temelj (prizemlje, izlog i
  vrata) je *Upit i poziv*, kruna (penthouse sa svijetlećim okvirom) je *Hero*. Okolni grad ostaje nacrt —
  gradi se samo vaša zgrada.
- **Ideja:** vodoravni skener (isti jezik kao na naslovnici) diže se scrollom. Ispod crte je zgrada sagrađena i
  osvijetljena, iznad je još nacrt. **Ista crta reže i naslov**: ispod nje su slova ispunjena, iznad samo obris.
  Tipografija se gradi zajedno sa zgradom.
- **Prvi kadar:** prizemlje već svijetli (temelj = upit), sve iznad je plavi nacrt, naslov u obrisu.
- **Prijelaz:** kad je zgrada gotova, kadar se smanjuje u stupac sekcije 2, a sedam dijelova stranice prolazi
  pored nje — svaki osvjetljava svoju etažu. Hero postaje ilustracija sljedeće sekcije.
- *Odbačeno:* 3D tekst kao skyline (trik), "portal" kroz izlog u trgovinu (preteško za prvi dojam, zamagljuje poruku).

### O nama — "Mali studio. Velika odgovornost."
> **Od 10. 10. 2026 zamijenjeno** (vlasnik: „O nama treba bit drugačiji hero“): urednički hero s listom nacrta 00
> (`tools/art/nacrt/o-nama.mjs`). Naslov je vodoravan, na papiru; list u istom crtačkom standardu kao djelatnosti
> crta pročelje zvonika konkatedrale s kotom 90 m. Oznake vežu dijelove zvonika s načelima rada (portal: prvi
> razgovor, kontrafor: nacrt prije dizajna, vrh: jedna osoba odgovara), svjetlo je sat s radnim vremenom, a u
> sastavnici stoji odgovorna osoba i sjedište iz postavki teme. Na mobitelu gumb je u prvom ekranu (design/04, 17).
> Opis ispod je prva verzija, za povijest.

*Što samo ova stranica može reći:* omjer. Jedan upaljen prozor malog studija i toranj od 90 metara.
- **Kadar:** pogled odozdo s trga na konkatedralu sv. Petra i Pavla; signal s tornja odlazi izvan kadra.
  Dolje u uglu jedan topao prozor.
- **Ideja:** "Mali studio." je sitan, monospace, uz taj prozor. "Velika odgovornost." je golema i stoji **iza tornja**
  (toranj je zaseban sloj s alfa maskom iz iste kamere) — toranj stoji između dviju riječi.
- **Špica pri učitavanju:** grad u mraku → pali se prozor → "Mali studio." → pale se reflektori na tornju → iza
  tornja se diže "Velika odgovornost."
- **Prijelaz:** slojevi se razdvajaju po dubini; signal s tornja nastavlja kao tanka okomita crta niz stranicu u
  sekciju "Zašto ZAEC".
- *Odbačeno:* portret osnivača (nemamo stvarnu fotografiju, a izmišljena osoba nije opcija), "jedan prozor u
  tamnom gradu" bez tornja (preslabo).

### Kontakt — "Vaše svjetlo je sljedeće"
*Što samo ova stranica može reći:* na naslovnici "svako svjetlo je nečiji posao". Ovdje forma pali svjetlo.
- **Kadar:** Osijek noću odozgo, signal s konkatedrale u daljini; jedna zgrada u prvom planu je tamna — označena
  kao "vaš obrt".
- **Ideja:** forma je u prvom ekranu, dio kompozicije (ne ispod nje). Svako ispunjeno polje pali etažu te
  zgrade; slanjem se zgrada potpuno osvijetli. Interakcija vizualizira obećanje — da vas se vidi.
- **Prijelaz:** nema pinanja (forma ne smije bježati); ispod slijede telefon, WhatsApp, adresa i koraci nakon upita.
- *Odbačeno:* "signal" kao okomita crta do forme (lijepo, ali bez interakcije), golema tipografija s tornjem.

### Kontakt — kako je izvedeno
- Kadar s visine krovova (arhitektonska kamera, bez nagiba): uska secesijska kuća s pet etaža i okvirom na krovu
  stoji u nizu nižih susjeda u kojima već gori svjetlo; grad i susjedi su u plavom nacrtu, konkatedrala sa
  signalom na horizontu. Desktop: kuća u sredini, forma desno; mobitel: zaseban kadar, kuća lijevo, oznake etaža desno.
- Dva prolaza iz iste kamere: tamna kuća (cijeli kadar) i osvijetljena kuća — iz koje se izrezuje samo okvir
  zgrade s mekim rubom (`layers.mjs --crop`, ~15 kB). Maska izreza ima vodoravnu traku po etaži čiju prozirnost
  (`--f0…--f4`, `--fc`) pali forma.
- Polja odozdo prema gore: ime, kontakt, djelatnost, usluga, poruka; slanje pali krunu i signal, a prelazak na
  zahvalu čeka da se taj trenutak odigra (`zaec:sent` u `form.js`). Mjerač u zaglavlju forme ponavlja stanje.
- Sekcija 2 ostaje u istoj noći: koraci nakon upita pale se redom, ispod su izravni kontakti.

## Ključni vizuali razine 1 (v2-hero-kv)
Prva verzija je i dalje bila "naslov + lijepa pozadina". Sva tri heroja sada su jedna ideja: **tipografija kao
arhitektura**, svaki put drukčije. Kadar je režiran *za* tekst: kamera, položaj predmeta i prazan prostor računaju
se iz mjera teksta ili polja, a tekst je živ (SVG `<text>` s `textLength`, H1 je cijela rečenica za čitače).

- **Izrada web stranica — naslov je zgrada.** Svaka riječ naslova je etaža; riječ ispunjava širinu pročelja, a
  visina etaže je visina te riječi izmjerena iz fonta stranice (WEB je dvorana, STRANICA uski kat). Zgrada je
  izgrađena iz tih mjera. Iznad skenera riječ je obris (nacrt), ispod natpis tintom na toplom staklu. Gumb stoji
  u ulazu. *Trenutak:* sagrađena kula u kojoj se naslov čita kao natpisi na prozorima.
  *Odbačeno:* naslov pored zgrade (stara verzija), riječi kao neonski natpisi na krovu.
- **O nama — tipografija kao mjera.** "Velika odgovornost." stoji okomito i dugačka je točno kao toranj
  konkatedrale od tla do vrha šiljka: pomoćne crte s tornja, kotna crta i 90 m. "Mali studio." visok je kao
  jedini upaljeni prozor na istom trgu. Omjer veličina slova je poruka. Špica: prozor se upali, pa kotna crta
  raste od tla do šiljka i za sobom ispisuje naslov.
  *Odbačeno:* projekcija slova na toranj (nepoštovanje prema crkvi), naslov ispred/iza tornja (stara verzija).
- **Kontakt — zgrada je forma.** Pročelje sprijeda; svaka etaža ima jednu traku prozora i u njoj stoji polje
  forme. Ispunjeno polje pali svoj prozor (tekst postaje tinta na toplom staklu), vrata su gumb, a naslov je
  neonski natpis na krovu koji se pali nakon slanja. Forma je ista kao drugdje — raspored je samo CSS.
  *Odbačeno:* forma u kartici pored zgrade (stara verzija), mjerač napretka.

Higgsfield i dalje nije upotrebljiv: CDN s generiranim datotekama (cdn.higgsfield.ai, *.cloudfront.net)
blokiran je mrežnim pravilima okruženja. Kadrovi su zato renderirani iz koda — što ovim konceptima ionako treba
(piksel-točne mjere iz kamere, zasebne mobilne kompozicije).

## Razina 2 — urednički hero
- Kadar (postojeći renderi `world/*`) izlazi preko desnog ruba ekrana; na mobitelu je od ruba do ruba na vrhu.
- Naslov je jedan tekst: bijel s `mix-blend-mode: difference` daje tamnu tintu na papiru i svijetla slova u kadru;
  istaknuta riječ (#c7a31b) je na papiru signalno plava, u kadru zlatna. Na mobitelu prvi redak sjeda u kadar.
- "Slate": oznaka kadra (npr. U.04) i opis scene (iz alt teksta, `aria-hidden` jer je alt već na slici).
- Hubovi (Usluge, Djelatnosti) umjesto niza jamstava dobivaju kontaktni arak — kadrove svojih stranica kao navigaciju.
- Pokret: kadar se otvara s ruba s kojeg izlazi, slika se smiri iz blagog približavanja; pri scrollu slika klizi
  sporije od okvira. Bez kretanja: završno stanje.

## Produkcija slika
Kadrovi se renderiraju iz koda (`tools/art`, isti model konkatedrale i podaci grada kao naslovnica), jer
koncepti traže piksel-točno poravnate slojeve iz iste kamere (nacrt/stvarno, alfa maska tornja, osvjetljenje
etaža) i zasebnu mobilnu kompoziciju — to generirana slika ne može jamčiti. Higgsfield je bio predviđen za
fotorealističnu doradu, ali CDN s generiranim datotekama (cdn.higgsfield.ai, *.cloudfront.net) blokiran je
mrežnim pravilima okruženja.

## Tehnika
- Infrastruktura (dijeljeno): `template-parts/hero/*`, `src/js/hero/core.js` (smanjeno kretanje, scroll
  napredak, učitavanje slojeva, "cover" kutija scene s cqw jedinicama za poravnanje teksta i slike),
  `src/css/hero.css`.
- Režija (po stranici): `src/js/hero/izrada.js`, `onama.js`, `kontakt.js`, `editorial.js`; tihi hero je samo CSS.
- Kadrovi: `tools/art/scenes/hero-izrada.js`, `hero-onama.js`, `hero-kontakt.js` (`npm run art`, `?s=kontakt-bg-d&save=1`),
  zatim `node tools/art/layers.mjs onama-bg onama-matte onama-tower` i `node tools/art/layers.mjs --crop kontakt-lit kontakt`.
- Zaglavlje na potpisnim herojima kreće tamno već u HTML-u (prvi prikaz, rad bez JS-a).
- Bez JS-a ili uz smanjeno kretanje svaki hero prikazuje završno stanje (sagrađeno, osvijetljeno, ispunjen naslov).
- LCP: prvi sloj se preloada po mediju (desktop/mobilni), slojevi u WebP-u, alfa slojevi samo gdje treba.
