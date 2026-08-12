# PROMPT-AKTIVAN — ZAEC v1.8.0 · Single projekt "Showroom 2.0" + sadržaj koji prodaje istinom

> **STATUS: ✅ IZVRŠEN (2026-08-11/12).** Otpremljeno kao v1.8.0 (PR #1) + sigurnosni hotfix v1.8.1 (popravak produkcijskog parse errora). Ovaj prompt **nemoj ponovno izvršavati** — služi kao zapis onoga što je napravljeno. Sljedeći korak: vizualna provjera v1.8.1 na stagingu, zatim novi prompt za novu iteraciju.
> **Ciljna verzija: 1.8.0.** Isporuka mora biti **produkcijski spremna** — definicija dolje u QA-u.

## TKO SI

**Elitni tim**: vodeći svjetski marketing i copywriting stručnjaci, nagrađivani web/UI dizajneri i senior fullstack developeri — razina tvrtke od 2 milijuna € godišnje. Svaka rečenica i svaki piksel prolaze filter: "bi li ovo potpisao najbolji studio na svijetu?"

Nenagrdno: **POVJERENJE I ISTINA.** Svaka tvrdnja provjeriva; nema izmišljenih ocjena, brojki, obećanja. Publika su obrtnici — laž proziru iz daljine. Elitni marketing ne laže; istinu prezentira tako moćno da laž nikad nije potrebna. **Istina je funkcionalnost ovog weba.**

I jednako nenagrdno: **PRODAJA BEZ PRODAJE.** Stranica prodaje tako što klijent sam zaključi da to želi — mi ne guramo, mi dokazujemo. Ton je savjetnika koji daje razloge, opcije i izlaz ("slobodno recite ne"), nikad prodavača s pritiskom. Ako bi rečenica prošla na televizijskoj prodaji u 2 ujutro — na ovom webu joj nije mjesto.

## STATUS PROJEKTA

Tema na **v1.7.0** (front-page funkcionalnosti + Showroom v1 single projekt; meta polje `_zaec_project_shot_mobile` postoji). Cross-browser fallback sustav iz v1.7.0 zadrži i proširi. Opseg: dva zadatka ispod.

---

## ZADATAK 1 — Single projekt: REDIZAJN "Showroom 2.0" (kinematografska case-study stranica)

Dosadašnji Showroom v1 funkcionira, ali nema "wow". Novi smjer: **cinematic case study** po uzoru na najbolje nagrađivane project-page rade 2026 (kinetic tipografija koja nikad ne blokira čitanje, "camera-move" prijelazi između scena, pinned horizontalna galerija, disciplina performansi). Art direction: `koncept-single-hero.png`, `koncept-single-galerija.png` — kao smjer, ne pixel-perfect.

Dizajn-sistem nepromijenjen: tamno (#0d0d0c obitelj), off-white tipografija, **jedna ZAEC akcentna boja**, mono oznake, hairline obrubi 1px, film grain suptilan. Demo-copy nigdje; sadržaj isključivo iz podataka projekta.

**S01 · Hero "Otvaranje"** (vidi `koncept-single-hero.png`)
- Full-viewport, tamno. Mono kicker `[ CODE · DJELATNOST ]`. Naslov u display veličini, `clamp()` fluidan (~44–128 px), **kinetic ulaz po riječima kroz masku — krajnje stanje UVIJEK potpuno vidljivo** (dosadašnji bug isječenih naslova: riješi u korijenu; ascender/descender zona hrvatskih slova đ ž š č ć nikad odrezana).
- Meta chips u jednom redu (lokacija · godina · djelatnost). Magnetski primarni CTA **"Posjeti uživo ↗"** (`website_url`, postoji samo ako postoji podatak).
- Glavni vizual: **browser okvir čisti CSS** (hairline, točkice) s featured screenshotom: ulaz `scale .94→1` + `rotateX(6°)→0` settle, suptilni glare sweep jednom, zatim cursor-parallax ±6 px (samo fine-pointer, GSAP `quickTo`). Naslov smije diskretno preklapati gornji rub okvira (editorial drama), bez rezanja teksta.
- Nema featured slike → hero ostaje čisto tipografski, ništa "prazno".

**S02 · Ključni podaci — sticky rail**
- Lijevo sticky: skraćeni naslov + meta + ponovljeni CTA. Desno teče: `result` kao veliki statement postavljen većom tipografijom, tehnologije kao chipovi. Mask reveal na ulasku (batch, ne po slovu). Nema podataka → scena ne postoji. Mobilno: sticky rail postaje običan uvodni blok.

**S03 · Ekrani — pinned horizontalna galerija** (vidi `koncept-single-galerija.png`)
- Desktop: ScrollTrigger pina sekciju i vodoravno prevodi okvire kako se skrola: `[ DESKTOP ]` browser screenshot, `[ MOBILE ]` phone okvir (`shot_mobile` ili crop), `[ DETALJ ]` dodatne slike iz sadržaja. Svaki okvir: lagani unutarnji parallax slike, mikro-tilt na hover, mono caption. Indikator napretka `01 / 0n`. Podrži drag/swipe.
- Mobilno i reduced-motion/no-JS: **vertikalni stack s revealom** — nikad slomljena galerija. Scena se renderira samo ako postoji barem jedna slika.
- Lenis već postoji — koristi postojeću integraciju iz `home.module.js` (jedna Lenis instanca, ScrollTrigger sinkroniziran, `resize` debounce refresh).

**S04 · Priča — editorial**
- `the_content()` ~68ch; slike u sadržaju: clip reveal + unutarnji parallax (transform only); `blockquote` = pull-quote (akcentna linija); tanka scroll-progress linija uz stupac. Nema efekata koji smetaju čitanju.

**S05 · Finale** (vidi `koncept-single-galerija.png`, donja scena)
- Tamna full-bleed scena: screenshot sljedećeg projekta zatamnjen ~55 %, ogroman "sljedeći projekt →" naslov + strelica; hover: slika `scale 1.04` + brightness poraste; cijeli blok jedan link. Sporedni link "svi projekti". Scena vizualno **prelazi u footer iste podloge** — stranica završava kao zadnji kadar filma, ne "još jednom sekcijom". Nema sljedećeg projekta → scena ne postoji.

**Interakcije (samo desktop fine-pointer, sve `transform/opacity`):** magnetski gumbi, hero cursor-parallax, pin + horizontal scroll + drag, hover tilt, grain. **Svaki efekt ima tri stanja: puni / reduced-motion (statično) / bez JS-a (statično i potpuno).**

**Tehnička izvedba:** `single-projekti.php` + `projects.css` + `project.module.js` (pattern iz `home.module.js`), enqueue samo na `is_singular('projekti')`. LCP slika `eager`/`fetchpriority="high"` + `srcset/sizes`; ostale slike lijene. ScrollTrigger cleanup; bez layout thrasha; `will-change` skidaj nakon animacija. iOS Safari pin ispravan (transform pinType prema GSAP smjernicama s Lenis). Bez novih biblioteka.

## ZADATAK 2 — SADRŽAJ: pouzdano, privlačno, ugodno čitanju

Referenca tona: **`COPY-BASELINE-front-page.md`** (odobreni glas: konkretno, pošteno, jezikom obrtnika). Piši iz stola kupca: majstor koji je možda već platio web koji nije zaživio; prepoznaje poštenje, prozire dim.

### 2.1 Poznate greške koje se moraju popraviti
- **"U izradu ulaze brzina, struktura, GBP i mjerenje. Shop i integracije — samo kada stvarno trebaju."** → razdvoji: **"Uključeno u svaku izradu, bez doplate"** (brzina, jasna struktura, postavljen Google Business profil, Analytics/mjerenje) + shop/integracije pozitivno: "narasli li posao do shopa ili rezervacija — poseban opseg, isto pravilo: opseg i cijena prije koda."
- **Kolizija riječi "nacrt":** naslov sekcije Metoda (*"Svaka stranica kreće od nacrta."*) zbunjuje jer je "Po nacrtu" ime cjeničke razine. **Riječ "nacrt" od sada postoji SAMO u kontekstu cijena.** Naslov Metode preimenuj — smjer (ne doslovno): *"Svaka stranica ima jedan posao."* / lead *"Prije dizajna zajedno definiramo što vaš klijent treba saznati i što treba učiniti."* Podnaslovi konkretni: Prava poruka / Jasan sljedeći korak / Dokazi koji se mogu provjeriti. Ton: suradnički, ne "sud" (prošli tekst "Prije koda, razlog… / Ne počinjemo od boje gumba" djeluje odbojno-poučavajuće).
- **Repetitivno "Prvo, prvo…"** — inventar svih H2/H3 i kicker-a; isti početak max 1× po stranici; strukture raznolike, ton jednak.

### 2.2 Novi stup: "Što vašem poslu znači profesionalna stranica" — jezikom koji svi razumiju
Sadržaj mora jasno i pošteno odgovoriti **zašto trebaju — i što ako još ne trebaju**:
- Objašnjenje bez žargona, kroz scene iz stvarnog posla: preporuka vas dovede do Googla, a stranica je razgovor koji se dogodi kad vas netko navečer "provjerava"; ponuda, područje rada i iskustva stoje napisani — ne ponavljate ih 30 puta tjedno telefonom; vaš kanal, ne algoritam koji mijenja pravila.
- **Poštena granica ("možda vam još ne treba"):** ako vam kalendar već puca od posla i ne želite rasti — recite im da čekaju; taj jedan iskreni "ne treba vam" gradi više povjerenja nego bilo koji naslov. To je posebnost ovog weba i jedan od najjačih prodajnih poteza.
- Primjeri koristi po djelatnostima ostaju: funkcionalnost → korist (poziv u jednom dodirom; upiti i kad spavate; manje istih telefonskih pitanja). Bez izmišljenih statistika.
- **Tehnička kvaliteta kao prodajni argument (pošteno):** temelj spreman za Rank Math/Yoast (čist semantički HTML, meta i struktura spremni); **pregledan, komentiran CSS koji može preuzeti i drugi developer — nema lock-ina, to je dokaz povjerenja**; mjerenje od prvog dana. Jasna rečenica: zdrav temelj ne jamči prvu stranicu Googlea — ali bez njega je nema ni uz najbolji sadržaj.

### 2.3 TON — prodaja koja ne izgleda kao prodaja

Web prodaje, ali klijent mora osjetiti da **sam odlučuje**:

- **Savjetnik, ne prodavač:** svaka stranica prvo pomaže razumjeti (opcije, razlike, što je pametno u kojoj situaciji); prodaja je posljedica razumijevanja, ne nagovaranja. Poruka zvuči "pomažemo vam odlučiti", ne "moramo vam prodati".
- **Zabranjeni mehanizmi pritiska:** nema urgencije ("ponuda ističe"), odbrojavanja, lažne oskudice, prekriženih cijena bez osnove, clickbait naslova, dark-pattern trikova — i to se ne radi, i to se **ne kaže** (ne hvalimo se time; to se vidi).
- **CTA je poziv na korak, ne okidač:** dopušteno: "Javite nam se", "Zatražite ponudu", "Definirajmo opseg", "Posjeti uživo ↗". Zabranjeno: "KUPI ODMAH", "NE PROPUSTITE", "REZERVIRAJTE DOK NIJE KASNO". Uz primarni CTA uvijek stoji smirivač: "poziv ne košta ništa" / "bez obaveze" / "možete reći ne".
- **Dokaz umjesto obećanja:** što se može pokazati (proces, cijena unaprijed, stvarni rad, granice usluge) — pokaži, ne tvrdi. Vrhunac prodaje je kad čitatelj sam pomisli "ovaj zna što radi" — bez da smo to napisali.
- **Izlaz uvijek otvoren:** u svakom koraku jasno piše gdje klijent može stati bez troška. Paradoks koji radi: otvoreni izlaz je ono što većinu uvuče unutra.

### 2.4 Arhitektura ponude koja ima smisla (productizirane usluge, bez "ubijanja")
Usluge se prezentiraju kao **profesionalni proizvodi s jasnim granicama** — kao što to rade ozbiljni studiji, samo originalnije i iskrenije:
- Svaka usluga ima napisano **što ulazi u cijenu, što ne ulazi i kad se naplaćuje dodatno** — granice nisu škrtost nego predvidivost: klijent uvijek zna cijenu prije nego išta krene, a studio radi dogovoreno, ne "dok se ne sviđa". Uobliči to u princip: *"sve ima cijenu unaprijed — iznenađenja nema ni za vas ni za nas."*
- Opcije su normalne i časne: predložak ili po nacrtu, jedna ili dvije runde korekcija, jamstvo 14 dana — a sve izvan toga postoji kao **održavanje, satnica ili poseban opseg** i tako se i zove. Nema ispričavanja tonom; ton je siguran studij s procesom.
- Originalnost: bez tuđih fraza. Zadrži i produbi vlastite obrasce ("cijena prije koda", "možete reći ne", "nacrt na papiru prije razvoja") — to je prepoznatljivost ZAEC-a, ne kopiraj konkurencijske nazive paketa.
- **Održavanje (dva nivoa, opcionalno):** — vidi specifikaciju u 2.5. Pozicioniranje: mir za one koji ne žele misliti na tehničke stvari; nikad kao obaveza.

### 2.5 NOVA USLUGA — mjesečno održavanje
Vlasnik ima primarni posao → **nikakva obećanja tipa 24/7 ili "odmah"**. Formulacije poštene i zaštitne. Bez kontradikcije sa "0 € obaveznih mjesečnih paketa" (održavanje je izbor, ne uvjet; stat po potrebi preformuliraj u "0 € obaveznih pretplata"). Vizualno u skladu s postojećim karticama cijena, blok odvojen od A/B planova:
- **ODRŽAVANJE · OSNOV — 29 €/mj:** ažuriranje jezgre, tema i dodataka s provjerom · tjedna sigurnosna kopija · nadzor dostupanosti i osnovna sigurnosna provjera · tromjesečna kontrola brzine · odgovor unutar 1 radnog dana.
- **ODRŽAVANJE · PLUS — 69 €/mj:** sve iz OSNOV + 30 min izmjena sadržaja mjesečno (ne prenosi se) · prioritet u redu čekanja · kratki godišnji pregled stanja.
- Napomene: bez ugovorne obveze (prekid krajem mjeseca) · "odgovaramo unutar jednog radnog dana; ako stranica ne radi, problem ide na vrh reda" · prvenstveno stranice koje smo sami složili; tuđe nakon kratke besplatne provjere · veće izmjene nisu "sitnica": po satu ili kao poseban opseg.
- Dodaj FAQ: "Nudite li mjesečno održavanje?" + "Preuzimate li održavanje tuđe stranice?" + "Trebam li uopće web stranicu?" (pošten odgovor prema 2.2).

### 2.6 Full copy audit
Prođi sve stranice (front 01–10, single projekti, 404, footer). Svaka rečenica daje stvarni razlog za ZAEC ili se piše iznova/briše. Zadrži poštene mehanizme: CASE STUDY · U PRIPREMI, POTVRĐENE IZJAVE pravilo, demo-oznake na mockovima, prave cijene, pravi broj 095 561 2522. Hrvatski: ispravna ijekavica i dijakritika, topla profesionalnost, bez klišea. Nedostaje li stvaran podatak (npr. klijentska izjava) → pošteni empty-state + changelog bilješka što vlasnik treba dostaviti.

## TEHNIČKA PRAVILA

- WordPress standardi: `esc_html()`/`esc_url()`/`esc_attr()`, i18n; defaultove polja mijenjaj samo migracijom koja ne prepisuje ručno uređene vrijednosti.
- Bez novih biblioteka (GSAP + ScrollTrigger + Lenis postoje). CSS čitljiv, komentiran, konzistentnih prefiksa — sada je to i prodajni argument, drži dosljednost.
- **Cross-browser (obavezno): Chrome, Safari (macOS+iOS), Opera, Opera GX, Firefox, Edge** na 320 / 375 / 390 / 768 / 1440 px. Pixel paritet, 0 errora, fallbackovi uredni (`vh` prije `svh`, `-webkit-` parovi, `overflow: clip` → `hidden`, statično bez JS-a).
- Performanse: LCP čuvan; animacije transform/opacity; pasivni listeneri; 60 fps cilj i na srednjoj klasi Androida.
- Pristupačnost: logičan redoslijed naslova, AA kontrast (i na tamnom finalu), vidljiv fokus, tipkovnicom sve dosegljivo, reduced-motion statično.

## QA — definicija "produkcijski spremno"

Zahtjev je **top, spremno za produkciju**. Znači:
- Nema `TODO`/placeholdera, `console.log` ostataka, mrtvih linkova ili kontrola koje ništa ne rade.
- `php -l` (ako dostupan) i `node --check` čisti. Bez PHP/JS upozorenja u logovima.
- No-JS i reduced-motion prikazi izgledaju **namjerno**, ne polomljeno.
- Naslovi projekata: cijeli, vidljivi, dijakritika netaknuta, svih širina i browsera.
- Riječ "nacrt" pojavljuje se **isključivo u kontekstu cjenika**; naslov Metode preimenovan; nema dvaju uzastopnih naslova istim početkom.
- Sadržaj sadrži poštenu granicu "možda vam još ne treba" (2.2) i principe granica usluga (2.4) — pročitano naglas zvuči sigurno, ne obrambeno.
- **Ton-quality check:** nema ijednog mehanizma pritiska (urgencija, odbrojavanje, lažna oskudica, prekrižene cijene bez osnove); svaki primarni CTA ima smirivač uz sebe; stranicu čitaj naglas kao skeptičan klijent — zvuči li kao savjetnik koji ti dopušta i "ne"? Ako ijedna rečenica zvuči kao TV-prodaja, pada.
- Održavanje: opcionalno, bez obećanja dostupnosti koja se ne mogu držati.
- **Truth audit:** pročitaj kao oprezan majstor — sve neprovjerivo van ili preoblikovano u istinu.
- Verzija → **1.8.0** (`style.css` + gdje god se verzija vodi) + changelog na hrvatskom: (a) Showroom 2.0 redizajn, (b) copy prepravke (popis), (c) nova usluga održavanja, (d) što vlasnik treba dostaviti od stvarnih podataka.

## PRILOG — utemeljenje cijena održavanja (kontekst, ne za objavu)

HR 2026: paketi održavanja 45–150 €/mj; intervencije 30–70 €/h. Inozemstvo: basic €30–80, standard €80–200. ZAEC 29/69 € namjerno ispod sredine — jednostavan ulaz, rast kroz povjerenje, konzistentno s cjenikom izrade (390–1.490 €).
