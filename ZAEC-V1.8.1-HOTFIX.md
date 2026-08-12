# ZAEC v1.8.1 — HOTFIX (fatal parse error na produkciji)

Datum: 2026-08-12 · Baza: PR #1 (`arena/019ff238`, commit `ff8b76c` = v1.8.0)

## Uzrok pada stranice

`inc/defaults.php` je sadržavao **3 nedostajuća zareza** između stavki polja (ručno uređivanje bez PHP linta; builderov sandbox nema PHP):

| Linija (v1.8.0) | Stavka | Greška |
|---|---|---|
| ~26 | `services_note` | nedostaje `,` na kraju → fatal: unexpected `'poznato_kicker'` on line 28 |
| ~46 | `band_text` | nedostaje `,` |
| ~54 | `radovi_lead` | nedostaje `,` |

PHP fatal = bijeli ekran na cijeloj stranici uključujući /wp-admin.

## Popravak

Dodana 3 zareza. Nijedna druga izmjena logike nije radila — sve ostalo iz v1.8.0 ostaje netaknuto.

## QA proveden nad popravkom

- **PHP parse: 43/43 datoteka ČISTO** (parser `php-parser` — reproducira točno produkcijsku grešku prije popravka, potvrđuje čistoću poslije).
- **JS: 5/5 prolazi `node --check`** (home.module.js, project.module.js, global.js, 404.module.js, admin-fields.js).
- **CSS balans** `{}`/`()`: 0 odstupanja (projects.css, front-page.css, global.css, content.css, 404.css).
- **Funkcionalna recenzija v1.8.0 promjena:**
  - form-handler: ispravno riješen invalid-JSON (output buffering cleanup, endpoint za osvježavanje noncea uz cache, logiranje mail grešaka) — OK;
  - migracije 1.7.1/1.8.0: mijenjaju vrijednosti SAMO kad se točno podudaraju sa starim defaultima (ručno uređeni sadržaj klijenta siguran) — OK;
  - novi ključevi defaulta (`trust_stats`, `faqs`, `maintenance_*`, `band_next_cta`) postoje i koriste se konzistentno; sidro `#odrzavanje` postoji u cijene.php i odgovara footer linku — OK;
  - single-projekti.php: null-safe dohvat slika, crop fallback za mobitel, esc_url_raw na src-ovima iz sadržaja — OK.
- Verzija: `style.css` i `ZAEC_THEME_VERSION` → **1.8.1**.

## Vraćanje stranice (hitno)

1. cPanel → File Manager → `wp-content/themes/zaec/`
2. Zamijeni `inc/defaults.php` verzijom iz paketa `zaec-theme-v1.8.1.zip` (ili upload cijele 1.8.1 teme preko Izgled → Teme).
3. Stranica se odmah vraća; WP recovery mail nije potreban ako se datoteka zamijeni prije.

## Preporuka buildernom postupku

Sandbox nema PHP → izbjegla se provjera. Pravilo ubuduće: svaki PHP diff prolazi kroz parser/lint PRIJE deploya (ovdje se koristio Node `php-parser`), a izmjene se prvo vide na PR-u, ne direktno na produkciji.
