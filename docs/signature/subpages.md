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
