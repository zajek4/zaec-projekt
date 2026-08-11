# ZAEC WordPress Theme v1.2 — hardening / regression pass

## Usporedba izvornog statičkog projekta i WordPress v1.1

Pregledani su dostavljeni `zaec-web-projekt (3).zip` i WordPress v1.1. Statički projekt ostaje referenca za hero/3D ponašanje, spacing i kompoziciju; WordPress verzija zadržava noviji CMS/CPT/cjenik sloj.

### Regresije koje su pronađene i popravljene

1. **Desna kartica djelatnosti izgubila je izvorni positioning.** U v1.1 je novi `.occ-controls` wrapper dobio `position: relative`, pa se `.occ-card` više nije pozicionirala prema cijelom `.hero-stage`. Wrapper je vraćen na `position: static`, čime se kartica ponovno veže uz hero stage i sjedi gore desno uz hologram kao u izvornom iskustvu.
2. **Djelatnosti su bile potpuno skrivene u aksonometriji.** To je uklonilo važan prodajni sadržaj upravo dok korisnik gleda glavni interaktivni element. U v1.2 kartica i tabovi ostaju vidljivi; automatski cycle se pauzira, ali ručni klik i tipkovničke strelice ostaju funkcionalni. Povratak iz aksonometrije i dalje vraća zadnju odabranu djelatnost.
3. **`Poseban opseg` bio je skriven zbog reveal klase.** `cijene.php` je imao `class="plan-band rv"`, dok GSAP reveal selector nije uključivao `.plan-band`. Element je zato mogao ostati trajno na `opacity: 0`. `rv` je uklonjen s tog poslovno važnog bloka; sada je vidljiv po defaultu.
4. **`K.01` i `K.03` namjerno su bili pomaknuti udesno.** Asimetrija je izgledala dekorativno, ali je razbijala čitanje procesa. U v1.2 svi `K.01–K.04` koriste jednu lijevo poravnatu code kolonu i kontinuiranu process liniju.
5. **Procesne ikone nisu objašnjavale web proces.** Dizalica i raketa zamijenjene su shemom `BRIEF → NACRT → BUILD → LIVE`; animacije sada prikazuju razgovor/checklistu, wireframe/cursor, slaganje modula/progress i objavu/check status.

## UX/content hardening

- Mikrocopy za osam djelatnosti više ne tvrdi neprovjerene "najčešće Google upite". Svaka djelatnost sada u jednoj rečenici objašnjava problem kupca, a tehnička napomena govori što ZAEC može konkretno složiti: hitni poziv, galeriju, booking, katalog, lokalne stranice, upit prema opsegu itd.
- Hero kartica koristi tekst **"Pronađite svoju djelatnost"** kako bi posjetitelj razumio zašto postoje tabovi.
- Mobile-first copy više ne koristi nepotvrđenu tvrdnju "više od polovice upita" niti obećanje "ispod 2 sekunde" bez mjerenja.
- Demo telefon je jasno demo: uklonjeni su `Perić`, `5.0 · 63 Google recenzije` i konkretni demo broj kao da su stvarni dokaz.
- Defaultni izmišljeni testimonials su uklonjeni. Ako nema potvrđenih izjava, sekcija pokazuje neutralan empty-state; Projects CPT ostaje jedini izvor stvarnih projektnih dokaza.

## Cjenik

Zadržan je v1.1 model **Predložak / Po nacrtu**, uz stalno vidljiv treći blok:

**Poseban opseg — Webshop, booking i integracije**

Webshop, rezervacije, višejezičnost i nestandardne integracije prvo dobivaju funkcionalni opseg i procjenu, a tek zatim cijenu i razvoj. Time se ne prodaje otvoreni scope niti skrivena višemjesečna obveza.

## Sigurna migracija postojećeg sadržaja

Tema sada ima data migration verziju `1.2.0`. Migracija mijenja occupation/process/mobile copy i uklanja stare demo testimonials **samo kada trenutna vrijednost još točno odgovara poznatom v1.1 defaultu**. Ručno uređena polja klijenta se ne prepisuju.

## QA

- 42 PHP datoteke: `php -l` bez syntax grešaka.
- First-party `home.module.js`, `global.js` i `404.module.js`: `node --check` prolazi.
- `front-page.css`, `global.css`, `content.css`, `projects.css` i `404.css`: `tinycss2` parser — 0 top-level parse grešaka.
- Kritične regresijske provjere: `Poseban opseg` nema `rv`; occupation wrapper nije `position: relative`; nema axonometric `aria-hidden/inert`; nema odd-step timeline offseta; novi process SVG ima sva četiri stanja.
- Chromium visual screenshot QA je pokušan, ali sandbox Chromium nije uspio inicijalizirati EGL/GPU backend. Zato završni vizualni regression i dalje treba napraviti na stvarnom WordPress stagingu na 320/375/390/768/desktop viewportima.
