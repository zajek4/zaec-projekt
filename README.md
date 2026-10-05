# ZAEC — WordPress tema v2.2.0 (branch `v2-3d`)

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
3D renderi za podstranice: `CAPTURE=1 npx vite build`, `node tools/capture-server.mjs`, otvorite `http://127.0.0.1:4399/tools/capture.html`.

## Naslovnica: Zemlja → Osijek (world3)
Jedan Three.js svijet kojim upravlja nativni scroll (`src/js/world3/`, kadrovi u `keyframes.js`; `m` = uspravni ekrani, `t` = uspravni tablet).
- Planet, mreža lukova, oblaci i Europa/Hrvatska/Slavonija dijele jedno mjerilo karte (`lib.js`: `mapScale`, `Z_CITY`); grad je u metrima i skalira se u isto mjerilo.
- `npm run geo` — granice, gradovi i maska kopna (`zaec/assets/img/world/land.png`) iz Natural Earth podataka.
- `npm run city` — Osijek iz OpenStreetMapa (`zaec/assets/data/osijek-city.bin`: zgrade, ceste, Drava, trgovi, oznake). Ulaz `../cache/osm-center.json` ili Overpass. **© OpenStreetMap suradnici (ODbL)** — atribucija je na naslovnici i u podnožju i mora ostati.
- Konkatedrala: Higgsfield model iz fotografija, ispravljen u Blenderu (`tools/blender/konkatedrala-ispravak.py`), zatim `gltfpack -cc -kn` → `zaec/assets/models/konkatedrala.glb` (meshopt + kvantizacija, ~0,8 MB). Hotel Osijek je proceduralan (tlocrt iz OSM-a).
- Posteri (`world/poster*.webp`) su snimke prvog kadra; nakon promjene uvodnog kadra treba ih ponovno snimiti.

## SEO i AI vidljivost
Meta/OG/canonical, JSON-LD graf (ProfessionalService, Service, FAQPage, BreadcrumbList, Article, Person), robots.txt koji dopušta AI crawlere, `/llms.txt`, WP sitemap. Uz Yoast/Rank Math tema prepušta meta sloj dodatku.

## Napomene
- Domena još nije kupljena — canonical/OG koriste URL WordPress instalacije.
- Cijene namjerno nisu objavljene (pisana ponuda); provjerite s računovođom pravila o isticanju cijena (sidrene cijene) za vaš slučaj.
