# ZAEC WordPress Theme — v1.6.1

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
