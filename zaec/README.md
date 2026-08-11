# ZAEC WordPress Theme — v1.5.0

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
