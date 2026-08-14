# ZAEC WordPress Theme — v1.11.8

Custom WordPress tema migrirana iz dostavljenog ZAEC statičkog projekta. Nema page buildera ni obavezne ACF Pro ovisnosti.

## Aktivacija

1. Instalirajte/aktivirajte temu `zaec`.
2. Kreirajte stranicu **Naslovnica**.
3. `Settings → Reading` → postavite statičnu naslovnicu.
4. Uredite naslovnicu; pojavljuje se **ZAEC — sadržaj naslovnice**.
5. `Appearance → Menus` dodijelite **Glavna navigacija**. Landing anchori s podstranica automatski vode na home URL.
6. `Appearance → ZAEC postavke` unesite potvrđene kontaktne/pravne/business podatke i email recipient forme.
7. Po potrebi kreirajte Blog stranicu i dodijelite je kao Posts page.
8. Za custom landing stranice odaberite template **ZAEC — Full Width**.

## Projekti / Radovi CPT

Tema registrira CPT **Projekti** s javnim archiveom `/radovi/`.

- Naslov, case-study tekst, excerpt i featured image koriste standardni WordPress editor.
- Meta box **ZAEC — podaci projekta** sadrži oznaku projekta, uslugu, lokaciju, godinu, tehnologije, live URL i samo potvrđeni rezultat/ishod.
- Checkbox **Istakni na naslovnici** kontrolira homepage selekciju. Ako nijedan projekt nije označen, naslovnica uzima najnovije objavljene projekte.
- Na čistoj instalaciji tema jednokratno pripremi tri navedena ZAEC projekta (CZA Osijek, Eurokontrola, Daj Gric). Ako već postoji barem jedan projekt, seed se preskače.
- Ne unosite izmišljene rezultate. Polje rezultata smije ostati prazno.

## Cjenik v1.1

Ponuda je podijeljena u dvije staze: **Predložak** i **Po nacrtu**. Defaultni cjenik izričito odvaja domenu/hosting od cijene izrade i ograničava uključenu post-launch podršku na 14 dana tehničkog jamstva. Novi sadržaj, nove funkcije i održavanje ugovaraju se zasebno.

## Mail

Forma koristi `wp_mail()`. Na produkciji konfigurirajte pouzdani SMTP/transactional transport; tema ne hardkodira vanjske API ključeve.

## SEO

Bez SEO plugina tema emitira osnovni meta/OG sloj, LocalBusiness i dinamični FAQPage. Kod Yoast/Rank Math/AIOSEO detekcije business meta/schema se prepušta pluginu kako se ne bi duplicirao; FAQ ostaje vezan uz stvarno prikazana ZAEC FAQ polja.

## Performance / mobile

- Homepage: GSAP + ScrollTrigger + ScrollTo + Lenis + Three/home module.
- Obične stranice/postovi/arhive: global/content CSS + lagani global JS.
- Projects archive/single: dodatni `projects.css`, bez homepage animation stacka.
- 404: zaseban Three.js module i 404 CSS.
- WebGL mobile DPR je kontrolirano podignut radi oštrijih linija, bez nekontroliranog 3×/4× rendera.
- Contact layout na mobilnom prelazi u eksplicitni column flow s `min-width: 0` zaštitom od horizontalnog overflowa.

## Važno prije publishanja

Provjerite stvarne poslovne podatke, testimonials i svaku marketinšku tvrdnju. CPT projekti namjerno nema lažne fallback klijente ni rezultate.

## v1.2 hardening

- Djelatnosti uz 3D kuću ponovno ostaju vidljive u svim desktop hero fazama; desna kartica je ponovno pozicionirana prema cijelom hero stageu kao u statičkom originalu.
- Tijekom aksonometrije automatska rotacija djelatnosti staje, ali ručni tabovi ostaju dostupni i funkcionalni.
- `Poseban opseg` više ne ovisi o reveal animaciji i zato ne može ostati skriven na `opacity: 0`.
- Proces `K.01–K.04` koristi stabilnu lijevu code kolonu i novu semantičku shemu brief → nacrt → build → live.
- Demo mobitel je jasno označen kao koncept strukture; ne koristi izmišljene osobe, rezultate, termine, kontakte ni lažne događaje.
- Google ocjena 4.9/5 prikazana je kao primjer proof elementa i smije ostati javna samo ako je stvarno potvrđena za konkretan posao.
- Prazne recenzije imaju pošten empty-state; poznati stari demo testimonials uklanjaju se migracijom samo ako nisu uređivani.
- Migration `1.2.0` mijenja samo vrijednosti koje još točno odgovaraju prethodnim defaultima, pa ručne izmjene klijenta ostaju netaknute.


## v1.3

- 3D kuća "Villa N": medium-class blueprint (više volumena, lučni trijem, erker, dormeri, složeni krov) umjesto dječje simetrične kutije.
- Kontakt: javni telefon 095 561 2522; email forme ide na interni recipient i nije obavezno javni.
- Footer: jasniji linkovi + minimalni pravni podaci obrta (naziv, MB, adresa, nositelj).
- Nova sekcija stack: Google Business / Analytics / Search Console / WooCommerce / Corvus Pay — bez lažnih partner badgeova.
- Copy/FAQ: Hrvatska + remote, bez nepotvrđenih city-listi kao dokaza.

## v1.4.4

- Copy naslovnice sada polazi od poslovne svrhe weba: razumjeti ponudu, izgraditi povjerenje i dovesti posjetitelja do poziva ili upita.
- Zamijenjene su generičke ili preoštre tvrdnje u sekcijama Poznato, Metoda, Mobile-first, Radovi i FAQ.
- Trust traka više ne prodaje "2 načina izrade / 1 odgovorna osoba / mjesečne pakete", nego ističe Google ocjenu 4.9/5 te jasnu svrhu kontaktnog puta. Ocjenu treba objaviti samo nakon provjere stvarnog izvora.
- Mobile-first telefon sada koristi strukturu inspiriranu servisnom stranicom za klime: problem → usluga → dokaz → jasan kontakt, bez izmišljenih cijena, termina i lažnih obavijesti.
- Na mobilnoj navigaciji poziv je diskretna bijela ikona uz hamburger; plavi CTA ostaje u sadržaju, a kontaktne kartice imaju zaobljene rubove.
- Veliki ZAEC u footeru vraćen je unutar iste content mreže kao i ostatak footera.
- Migracija `1.4.4` mijenja samo poznate stare default vrijednosti; ručno uređeni sadržaj klijenta se ne prepisuje.

## v1.5.0

- Naslovnica vraća jači autorski ZAEC glas: manje apstraktnih fraza, više jasnih odgovora na pitanje čemu web služi i kako dovodi do kontakta.
- Primarno obraćanje je usmjereno na majstore, servisne i lokalne uslužne djelatnosti; Centar za autizam, Eurokontrola i Daj Gric pokazuju da ista disciplina strukture radi i za ustanovu, B2B uslugu i restoran.
- Dodana su tri stvarna projekta kao početni CPT sadržaj, samo ako u postojećem portfoliju još nema projekata. Ako projekti već postoje, tema ih ne dira.
- Dodana je potvrđena testimonial izjava Dominika, CEO-a Daj Grica, prema dostavljenom sadržaju.
- Trust traka sada ističe tri stvarna projekta, Google ocjenu 4.9/5, jasan cilj weba i direktan put do kontakta.
- Migracija `1.5.0` ponovno mijenja samo poznate stare default vrijednosti; ručne izmjene ostaju sačuvane.

## v1.6.0

- Radovi se prikazuju i kada WordPress baza još nema kreirane CPT zapise: naslovnica koristi sigurni fallback s tri stvarna projekta, a admin seed ih kasnije pripremi kao uređive projekte.
- Dodane su stvarne featured slike za CZA Osijek, Eurokontrolu i Daj Gric te direktni `Live` linkovi na karticama.
- Hero animacija sada ranije uvodi `Web koji razumije vaš zanat`; početni tekst se pri scrollu spušta i odbluruje dok se kuća rastavlja, a novi sadržaj ulazi paralelno, bez mrtvog prijelaza.
- Build sequence sada ima smisleniju web metaforu: domena/hosting → struktura/sadržaj → UX/UI → funkcije/kontakt → SEO/sigurnost → objava/mjerenje.
- Mobile telefon sada koristi realističniji klimatski servisni flow inspiriran dostavljenim primjerom, a tri lebdeće kartice ostaju izvan telefona: Google recenzije, Zatraži procjenu i Kontakt na jednom mjestu.
- Uklonjena je poruka `Objaviti samo uz potvrđene recenzije` iz vizualnog prikaza.
- FAQ sada objašnjava mogućnost dugoročne suradnje kroz jasan opseg, prioritete i povjerenje — bez obaveznih maglovitih paketa.
- Footer legalni red i veliki ZAEC imaju isti max-width i konzistentniji spacing.
- `ZAEC` je uklonjen iz izraza `Provjeren ZAEC layout` kako copy ne bi zvučao samohvalno.
- Migracija `1.6.0` dodaje novi FAQ i ažurira samo poznate stare vrijednosti.

## v1.6.1

- `.occ-card` je povećan i dobio je zreliju HUD hijerarhiju, corner-bracket detalje, refresh flicker i suptilni desktop tilt.
- Floating HUD kartice uz telefon veće su, vizualno usklađene s case-study HUD jezikom i interaktivne; CTA kartice vode na stvarni upit ili poziv.
- Telefon koristi lokalni klima-service scenarij s pravim `tel:+385955612522` linkom; recenzije su označene kao Google recenzije bez nove lažne brojke.
- Build sequence povezuje arhitektonske slojeve s domenom/hostingom, strukturom, UX/UI-jem, funkcijama, SEO-om i mjerenjem.
- `Definirajmo opseg` sada vodi na `#poseban-opseg`, a sljedeći CTA iz banda vodi na `#upit` i prefilla `Poseban opseg`.
- Forma ima nonce refresh za page-cache, čisti accidental AJAX output uz debug log, razlikuje invalid JSON od server poruke i zadržava native no-JS fallback.
- Dodan je `wp_mail_failed` debug zapis za SMTP/PHPMailer probleme; SMTP transport i dalje ostaje u pluginu.
- Dodani su magnetic primary CTA pomak, aktivno stanje desktop navigacije i reduced-motion fallback za HUD animacije.
- Single projekt dobio je fullscreen HUD case-study predložak s opcionalnim panelima, LIVE/prev/next navigacijom, unutarnjim scrollom sadržaja i GSAP boot-up intro animacijom.
- Dodani su cross-browser fallbackovi za Opera/Safari/Firefox/Edge: backdrop blur, mask, clip/overflow, viewport jedinice, aspect ratio, inset i WebGL failure path.
- 404 i homepage Three.js sada imaju statičan, namjeran fallback bez praznog canvasa i bez nastavka render loopa nakon gubitka konteksta.
- Inquiry AJAX sada ima nonce refresh, output-buffer dijagnostiku, jasne JSON/server greške i `wp_mail_failed` zapis za SMTP audit.
- Theme version: `1.6.1`.

## v1.7.0

- Single projekt je redizajniran iz starog HUD panela u odobreni Showroom koncept.
- Dodano je opcionalno meta polje **Screenshot mobitela** (`_zaec_project_shot_mobile`), uz backward-compatible fallback na featured screenshot.
- Hero koristi laptop + mobitel uređaje, bento ključne podatke, opcionalnu scenu ekrana, editorial priču i veliku Next project karticu.
- Sadržaj i meta paneli pojavljuju se samo kada stvarni podaci postoje; nema praznih scena ni izmišljenih rezultata.
- Single projekt dobiva uvjetni GSAP + ScrollTrigger modul, a fallback ostaje statičan i potpun bez JS-a ili uz reduced motion.
- Theme version: `1.7.0`.

## v1.7.1

- Single projekt Showroom naslovi dobili su sigurniji fluidni box: ascender/descender padding, puni završetak clip reveala i wrapping za duga hrvatska imena.
- Završna scena je zatamnjeniji kino-kadar s jeftinim CSS glow/grain efektom, jačim LIVE CTA-om i velikom klikabilnom karticom sljedećeg projekta. Ako sljedeći projekt ne postoji, kartica se ne renderira.
- Truth audit je uklonio nepotvrđenu Google ocjenu iz zadane trust trake; vraćeni su samo postojeći podaci: 3 projekta, 14 dana tehničkog jamstva, jasan opseg i direktan put do kontakta.
- Hero copy i opisi koji su zvučali kao neprovjerena vremenska obećanja ublaženi su bez gubitka prodajne jasnoće.
- `COPY-BASELINE-front-page.md` nije bio dostupan u repozitoriju; za audit je korišten postojeći odobreni v1.2/v1.6 sadržaj i pravilo da nepotvrđena tvrdnja ne ide na stranicu.
- Vlasnik prije objave treba dostaviti samo podatke koji nedostaju: potvrđene Google recenzije, dodatne mobilne screenshotove i mjerene rezultate projekata ako ih želi javno navesti.
- Theme version: `1.7.1`.

## v1.8.0

- Showroom 2.0 single-project predložak ostaje uvjetan prema stvarnim podacima, s potpunim reduced-motion/no-JS fallbackom.
- Truth-first ponuda ne prikazuje nepotvrđenu Google ocjenu; dodano je opcionalno održavanje s jasnim granicama opsega.
- Produkcijski PHP defaults hotfix provjeren je parserom nakon popravka zareza.

## v1.8.1

- Hero vraća i učvršćuje 3D kuću **Villa N**: realniji arhitektonski raspored, dvije etaže, glavni ulaz, pravilniji prozorski ritam, erker, balkon, lučni bočni ulaz, dormeri, dimnjak, nadstrešnice i temeljne linije.
- Prozori sada imaju vanjski okvir, uvučeno ostakljenje, impost/mullion i podprozornik; vrata imaju prag, nadvoj, panele i kvaku umjesto nerealnih križeva.
- Zadržane su interakcije: auto-orbit, drag/orbit, klik za izolaciju sloja, scroll aksonometrija, rastavljanje/sastavljanje kuće i animirani slojevi za klimu, vodu, struju, krov, gradnju, smještaj, trgovinu i ostale usluge.
- No-WebGL/no-JS fallback više nije generička kućica nego namjerni arhitektonski outline s istim ritmom otvora i oznakama Villa N.
- Prvi kadar više se ne proglašava neuspjelim samo zato što Safari/iOS kasnije odradi compositor tick; fallback se uključuje samo kod stvarne greške modula/renderera.
- Mikro-savjeti za klimu, električare i krovopokrivače objašnjavaju put do relevantnijeg upita, bez obećanja prometa ili prihoda.
- Theme version: `1.8.1`.

## v1.9.2

- Planet/Earth hero experiment removed from the active homepage; the original architectural house hero is restored as the first interactive scene.
- Existing truth-first copy, maintenance offer, projects/showroom and form hardening remain intact.
- Occupation HUD remains interactive with Klima-servisi, voda, struja, krov and other service rows; ordinary HUD copy is deliberately compact.
- Theme version: `1.9.2`.

## v1.9.6

- Stable recovery release based on the verified pre-planet house hero baseline.
- Planetary experiments and their extra WebGL/postprocessing assets are not part of this release.
- Keeps the existing content, maintenance offer, project/showroom work, form hardening and occupation HUD.
- Theme version: `1.9.6`.

## v1.9.8

- Restored the verified stable house-first homepage baseline.
- Removed the planet experiment and its additional WebGL assets from the active theme.
- Preserved the original Villa N interactions, scroll axonometry, parallax and occupation HUD.
- Theme version: `1.9.8`.

## v1.10.0

- Single projekt je redizajniran iz Showroom uređaja u **Tehnički dosje** (Blueprint Case Study v2).
- Hero koristi browser-frame live preview s crop markovima umjesto laptop/telefon mockupa; kod projekta ima type-in ulaz, a preview suptilni scroll parallax + tilt samo na finim pokazivačima.
- Dodan je fiksni lijevi rail (00–04) s progress-fillom i aktivnom sekcijom te tanka gornja progress traka; rail se renderira samo za stvarno prisutne sekcije.
- Dosje je spec-sheet s numeriranim redovima (usluga, lokacija, godina, tehnologije) i istaknutim `[ ISHOD ]` blokom koji je vidljiv odmah nakon heroja — rezultat je sticky uz dosje, a prikazuje se samo ako je potvrđen.
- Priča, pinana galerija ekrana i outro (veliki LIVE CTA + sljedeći projekt) ostaju uvjetni prema stvarnim podacima.
- Sav motion ostaje reverzibilan: reduced-motion/no-JS fallback je potpun i statičan, galerija bez JS-a postaje vertikalni stack, a stari HUD/Showroom single CSS je uklonjen iz projekta.
- Theme version: `1.10.0`.

## v1.10.1

- Single projekt više ne koristi Lenis smooth scroll — bio je uzrok sporog/nepravilnog scrollanja jer radi bez svog CSS sloja i bori se s pinanom galerijom. Vraćen je nativni scroll uz ScrollTrigger scrub; galerija sada prati scroll 1:1 (`scrub: true`, bez `anticipatePin`).
- Dugi jednočlani naslovi (npr. „Eurokontrola") dobivaju prilagođenu veličinu slova i pravilno lomljenje (`hyphens` + `overflow-wrap: break-word`) umjesto rezanja usred riječi (`anywhere`).
- Rail anchor linkovi koriste čiste `#id` sekcije + `scroll-margin-top`, a navigacija i dalje ispravno vodi na `home/#sekcija` s podstranica.
- Theme version: `1.10.1`.

## v1.10.2

- **Footer/nav anchor linkovi sada rade i na naslovnici.** `home.module.js` je koristio nedefiniranu varijablu `BODY` u `closeMenu()`, pa je svaki klik na `#sekciju` na front-pageu bacao grešku prije scrolla. Varijabla je definirana i scroll-lock mobilnog izbornika sada radi ispravno.
- **Naslov se više nikad ne lomi usred riječi.** Uklonjena je hyphenacija (`EUROKON-TROLA`) i dodan fit-text koji prilagođava veličinu slova najdužoj riječi (uz re-fit na resize i nakon učitavanja fonta); isto vrijedi i za naslov sljedećeg projekta.
- Theme version: `1.10.2`.

## v1.11.0

- **Nova prva sekcija naslovnice — "Signal Grid" (globus).** Blueprint globus s dot-matrix površinom, obrisom Hrvatske, čvorovima (ZAEC · Osijek + gradovi HR + remote) i lukovima s putujućim pulsom koji stižu u hub uz "signal primljen" prsten — metafora upita koji dolazi do tvrtke. Spora auto-rotacija + drag (desktop), hover na čvor, scroll-exit handoff (globus se smanjuje/bluruje dok kuća preuzima scenu).
- **Kuća je pomaknuta u drugu sekciju** i ostaje netaknuta kao prva numerirana blueprint sekcija; rail i numeracija 00–10 nisu mijenjani jer su vezani uz klijentov sadržaj.
- Performansa: render globusa se pauzira izvan viewporta i kad je tab skriven; DPR i gustoća točaka su smanjeni na slabijim uređajima; na touchu drag ne otima scroll stranice. Reduced-motion bez render petlje, no-JS/no-WebGL SVG fallback.
- Copy je uređiv kroz novu grupu polja **Mreža · globus** na naslovnici.
- Theme version: `1.11.0`.

## v1.11.1

- **Globus je redizajniran iz "lažne Zemlje" u hologramski blueprint planet.** Sfera je sada čitljiva (gradijent + fresnel rub svjetla + atmosferski halo), a ravnomjerna Fibonacci površina zamjenjuje nasumične točke — više nema "guste mrlje" ni praznine.
- Obris Hrvatske je čista linija s halo om, a gradovi su oznake umjesto točkastog klastera; lukovi su cijevi s kometima koji skaču od čvora do čvora uz "signal primljen" prsten.
- Dodano zvjezdano polje oko globusa i cinematic ulaz (easeOutBack pop + postupno paljenje slojeva) nakon preloadera.
- Theme version: `1.11.1`.

## v1.11.2

- **Hero je zamijenjen 2D "kartom povezanosti" (nema više kugle ni WebGL-a).** Prepoznatljiv obris Hrvatske crta se i zatvara (draw-in), u pozadini blijeda Europa-konstelacija, a čvorovi — gradovi ("ljudi"), tri stvarna rada ("tvrtke"), Google Business i europska tržišta — povezani su linijama s pulsom.
- **Interakcija je samo suptilni nagib/parallax po mišu** — bez drag/orbit kontrole smjera; na touchu bez interakcije.
- Google Business je uključen skromno (pin + veza s hubom) jer je postavljanje Google Business profila stvarni dio usluge — bez tvrdnji o pozicijama.
- Fallback (no-JS/no-WebGL/reduced-motion) je sada statična karta s obrisom Hrvatske i čvorovima.
- Theme version: `1.11.2`.

## v1.11.3

- **Točan vektorski obris Republike Hrvatske.** Ručno crtani obris zamijenjen je glatkom SVG putanjom generiranom iz Natural Earth podataka (prepoznatljiv: Istra, jadranska obala do Dubrovnika, istočna granica); dodan i samostalni `assets/images/hr-outline.svg`.
- **Obris se iscrtava dinamično pri učitavanju** (stroke-dashoffset draw-in na SVG vektoru), a čvorovi na canvasu koriste istu projekciju pa su točno poravnati s obrisom.
- **Hero sadržaj prati širinu ostatka stranice** — content wrapper je ograničen na ~1336px (`--net-max`).
- Theme version: `1.11.3`.

## v1.11.4

- **Precizniji i jači obris Hrvatske.** Kopnenoj granici (Natural Earth) dodani su otoci — Krk, Cres, Lošinj, Rab, Pag, Dugi otok, Brač, Hvar, Korčula, Mljet i Vis; obris je veći, s halo sjajem, debljim stroke-om i jačim glowom.
- **Topologija mreže.** Linije više ne vode sve u Osijek: grad ↔ grad unutar Hrvatske, Europa → gradovi (izvana prema unutra) i djelatnosti ↔ gradovi; pulsovi s vremena nasumično "skaču" s veze na vezu, uz povremene ping prstenove.
- **Ikonice djelatnosti umjesto imena klijenata.** Webshop (trgovina), Obrt (kaciga/zanat) i Usluge (aktovka) — precizno iscrtane; Google Business je zadržan kao dio stvarne usluge.
- **Jača dinamika/interakcija** — izraženiji nagib i parallax po mišu uz blagi ambient drift; naslov "Vaš posao. Na karti." s usklađenim font-size i line-height.
- Theme version: `1.11.4`.

## v1.11.5

- **Puno precizniji i jači obris Hrvatske.** Kopnena granica je detaljno rekonstruirana (~100 točaka: Istra, Kvarner, Dalmacija, Sava/Una/Dinarsko gorje, Slavonija, Mura/Drava/Dunav), uz 15 točno pozicioniranih otoka (Krk, Cres, Lošinj, Rab, Pag, Ugljan, Pašman, Dugi otok, Brač, Hvar, Šolta, Korčula, Mljet, Lastovo, Vis). Obris je deblji (3.6px + široki halo 10px) i ima snažniji glow/fill.
- **Uklonjen sav tekst i ikonice** — čvorovi su sada isključivo pulsirajuće točke/krugovi sa svijetlom jezgrom; putujuće linije s pulsom ostaju, a pulsovi nasumično skaču s veze na vezu.
- **Novi copy**: „Vaš posao zaslužuje da bude nađen." uz jasniji benefit lead.
- Theme version: `1.11.5`.

## v1.11.6

- **Precizan obris Republike Hrvatske iz autoritativnog OSM izvora.** Obris je sada generiran iz detaljnih geografskih podataka (georgique/world-geojson): točna kopnena granica (~190 pojednostavljenih točaka) + 19 stvarnih otoka (Cres, Krk, Brač, Hvar, Pag, Korčula, Rab, Dugi otok, Mljet, Vis, Lošinj, Pašman, Ugljan…). Više nema ručno crtane aproksimacije.
- Čvorovi na canvasu koriste identičnu projekciju kao SVG obris (gradovi sjedaju točno na kartu).
- **Novi copy**: „Ljudi vas traže. Dovedimo ih do vas." + konkretan benefit lead (web + Google Business).
- Theme version: `1.11.6`.

## v1.11.7

- **PageSpeed/LCP.** Preloader više ne čeka `window.load` (sav 3D JS + fontovi) — gasi se odmah po parsiranju DOM-a i traje ~0.9 s umjesto ~2.3 s; hero tekst se otkriva rano. Funkcionalni refresh (`ScrollTrigger.refresh`, autoplay djelatnosti) i dalje se radi na `load`.
- **Render-blocking.** Vendor skripte (GSAP, ScrollTrigger, ScrollTo, Lenis) dobivaju `defer`; Google Fonts se učitavaju asinkrono (preload + onload swap + noscript fallback).
- **Gustiša mreža** — 23 veze (grad↔grad, Europa→gradovi, djelatnosti→gradovi) i 10 putujućih pulsova.
- **Kraći, mekši hero copy**: „Ljudi vas već traže." + „Predstavimo vas tako da vas lako nađu…".
- Theme version: `1.11.7`.

## v1.11.8

- **Mobile-first hero.** Karta se na mobitelu pomiče ispod sadržaja (bez preklapanja s tekstom/CTA), vanjski čvorovi se skaliraju uz kartu, a obris se smanjuje na mjeru; naslov, lead i gumbi dobivaju uravnotežen mobile raster (50px tap target, full-width CTA).
- **UX/poliranje**: skriven scroll-cue i meta na mobitelu, `touch-action: manipulation` na CTA (bez dvostrukog tap-zooma), uklonjen 3D perspective na mobitelu radi performansi.
- Preloader edge-case: ako se modul učita nakon `load`, funkcionalni refresh se i dalje izvršava.
- Theme version: `1.11.8`.
