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
