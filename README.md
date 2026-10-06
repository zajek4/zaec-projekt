# ZAEC — WordPress tema v2.3.0 (branch `v2-3d`)

Nadogradnja postojeće teme `zaec` (v1.13): low-poly 3D svijet (Three.js) kojim dirigira scroll (GSAP + Lenis), potpuno novi sadržaj, 10 usluga (web, webshop, landing, SEO, lokalni SEO, Google profil, AI vidljivost/GEO, GA4 i e-commerce praćenje, brzina, održavanje), 8 djelatnosti, procjena projekta bez javnog cjenika, besplatna provjera vidljivosti, radovi s dokazima, 6 vodiča.

## Instalacija / nadogradnja
1. Kopirajte mapu `zaec/` u `wp-content/themes/` (zamjenjuje v1.x — isti slug, iste postavke `zaec_options`, isti CPT `projekti` i ključevi landing stranica, pa sadržaj ostaje).
2. Otvorite wp-admin jednom: tema sama kreira nove stranice, vodiče (kategorija Vodiči) i postavke čitanja ako nisu postavljene. Postojeće stranice se ne diraju.
3. Izgled → **ZAEC postavke** (kontakt, primatelj forme, GTM ID, sameAs) i **ZAEC naslovnica** (tekstovi naslovnice, FAQ).

## Dokazi / rezultati
Projekti → polja *Izjava*, *Metrika prije/poslije*, *Screenshot dokaza*, *Izvor*. Metrika i screenshot prikazuju se **samo** kad je označeno „Potvrđeno” (stvarni podaci + dopuštenje klijenta). Izmišljene recenzije i brojke se ne objavljuju.

## Razvoj
```
npm install
npm run build      # vodiči (content/vodici/*.md) → seed, Vite → zaec/assets/build, ikone
```
Kadrovi podstranica (`zaec/assets/img/world/djelatnost-*.webp`, `usluga-*.webp`, `nacrt-404.webp`) renderiraju se iz koda: `npm run art`, zatim `http://127.0.0.1:5174/?s=<kadar>` (popis kadrova je na vrhu stranice; `&save=1` sprema WebP 1400×1050, renderiran 2× i smanjen). Izvori su u `tools/art/` — pozornica (`stage.js`: noćno nebo, mokri pod-zrcalo s mrežom nacrta, magla, bloom, filmski grade), alati (`kit.js`: rez "stvarno ↔ nacrt" s crtama i svjetlećim rubom, svjetlosni tragovi, rešetke, snopovi) i po jedan kadar za svaku djelatnost/uslugu u `scenes/`. Osijek i konkatedrala koriste iste podatke i model kao naslovnica.

## Naslovnica: Zemlja → Osijek (world3)
Jedan Three.js svijet kojim upravlja nativni scroll (`src/js/world3/`, kadrovi u `keyframes.js`; `m` = uspravni ekrani, `t` = uspravni tablet).
- Planet, mreža lukova i Europa/Hrvatska/Slavonija dijele jedno mjerilo karte (`lib.js`: `mapScale`, `Z_CITY`, `GLOBE_R` = točno 4 jedinice po stupnju); grad je u metrima i skalira se u isto mjerilo.
- Kamera je jedna krivulja: ključne slike se interpoliraju monotonom kubičnom krivuljom u logaritmu visine i u koordinatama karte (`index.js`: `buildCurve`, `stateAt`), pa se spuštanje ne zaustavlja na sidrima.
- Nema oblaka: karta je površina globusa koja se pri spuštanju "odmata" (`BEND_GLSL` u `lib.js`) i dijeli shader s planetom (maska kopna, matrica točaka, sunce). Spuštanjem pada sumrak (`dusk` u `keyframes.js`), pa se svjetla Slavonije i Osijeka pale kad nad njih padne noć.
- Hrvatska se ne izdiže: obris se iscrtava jednim potezom iz Osijeka (`trace`, `hl`), zatim se smiri.
- Priprema GPU-a: svi shaderi i geometrija prevode se i šalju iza postera (`prewarm`), svjetla su stalna u sceni (broj svjetala se ne mijenja) — nema prevođenja shadera usred scrolla.
- `npm run geo` — granice, gradovi, maska kopna (`land.png`, 1:50m) i detaljnija maska Europe (`land-eu.png`, 1:10m) iz Natural Earth podataka.
- `npm run city` — Osijek iz OpenStreetMapa (`zaec/assets/data/osijek-city.bin`: zgrade, ceste, Drava, trgovi, oznake). Ulaz `../cache/osm-center.json` ili Overpass. **© OpenStreetMap suradnici (ODbL)** — atribucija je na naslovnici i u podnožju i mora ostati.
- Konkatedrala: parametarski model `tools/cathedral/build-cathedral.mjs` (izvor istine) — tlocrt iz OSM-a, visine i ritam s fotografija i Higgsfield rekonstrukcija nedostajućih pogleda (bočno pročelje, tlocrt krovova, pročelje tornja, apsida). `npm run cathedral` → `gltfpack -cc -kn` → `zaec/assets/models/konkatedrala.glb` (~6 300 trokuta, ~65 kB, jedan poziv crtanja). Materijal je u boji vrhova (`COLOR_0.a` = cigla/kamen/škriljevac/vitraj/metal); shader dodaje sljubnice, reflektore, vitraje, isticanje i skener nacrta. Hotel Osijek je proceduralan (tlocrt iz OSM-a).
- Signal s tornja (`beam.js`): osni billboard (jezgra + oreol u shaderu), raste scrollom iz vrha križa i u nacrtu postaje okomita os; isti signal zatvara priču na globusu kod čvora „Vaša tvrtka”.
- Posteri (`world/poster*.webp`) su snimke prvog kadra; nakon promjene uvodnog kadra treba ih ponovno snimiti.

## SEO i AI vidljivost
Meta/OG/canonical, JSON-LD graf (ProfessionalService, Service, FAQPage, BreadcrumbList, Article, Person), robots.txt koji dopušta AI crawlere, `/llms.txt`, WP sitemap. Uz Yoast/Rank Math tema prepušta meta sloj dodatku.

## Napomene
- Domena još nije kupljena — canonical/OG koriste URL WordPress instalacije.
- Cijene namjerno nisu objavljene (pisana ponuda); provjerite s računovođom pravila o isticanju cijena (sidrene cijene) za vaš slučaj.
