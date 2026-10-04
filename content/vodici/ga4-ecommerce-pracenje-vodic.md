---
title: 'GA4 e-commerce praćenje: vodič za webshopove (WooCommerce)'
short: 'GA4 e-commerce praćenje'
description: 'Kako ispravno postaviti GA4 e-commerce praćenje za webshop: ključni događaji, dataLayer, Google Tag Manager, Consent Mode v2, provjera podataka i najčešće greške koje kvare izvještaje.'
date: '2026-10-04'
readMin: 10
kicker: 'Vodič · Analitika'
order: 3
---

Webshop bez ispravnog praćenja je kao trgovina bez blagajničkog izvještaja: znate da nešto prodajete, ali ne znate što, kome ni zašto. Google Analytics 4 može odgovoriti na ta pitanja — ali samo ako su e-commerce podaci postavljeni ispravno.

## Kratki odgovor

GA4 e-commerce praćenje bilježi ključne korake kupnje kao standardne događaje (`view_item`, `add_to_cart`, `begin_checkout`, `purchase`) s podacima o proizvodima, vrijednosti i valuti. Najpouzdanije se postavlja preko **dataLayera** iz webshopa i **Google Tag Managera**, uz **Consent Mode v2** zbog privole i provjeru u DebugViewu prije objave.

## Koje događaje pratiti

Google preporučuje standardni skup e-commerce događaja. Za većinu webshopova dovoljni su ovi:

| Događaj | Kada | Zašto je važan |
|---|---|---|
| `view_item_list` | Prikaz kategorije ili popisa | Koje kategorije privlače pažnju |
| `view_item` | Otvaranje proizvoda | Koji proizvodi zanimaju kupce |
| `add_to_cart` | Dodavanje u košaricu | Namjera kupnje |
| `begin_checkout` | Početak naplate | Gdje kupci odustaju |
| `add_shipping_info` / `add_payment_info` | Odabir dostave i plaćanja | Problemi s dostavom ili plaćanjem |
| `purchase` | Uspješna narudžba | Prihod, porez, dostava, artikli |

Važno je da **`purchase` ima jedinstveni `transaction_id`**, vrijednost i valutu (`EUR`), te popis artikala. Bez toga izvještaji o prihodu nisu pouzdani.

## Kako postaviti — korak po korak

### 1. Plan mjerenja

Prije bilo kakvog koda zapišite što želite znati: prihod po kanalu, najprodavanije proizvode, gdje kupci odustaju, koliko vrijedi kupac iz oglasa. Plan određuje koje događaje i parametre trebate.

### 2. dataLayer iz webshopa

Webshop treba u `dataLayer` poslati podatke o proizvodima i narudžbi u formatu koji GA4 očekuje. Za WooCommerce postoje provjereni dodaci koji to rade; važno je provjeriti da šalju ispravne cijene (s ili bez PDV-a — dosljedno), valutu i ID-eve proizvoda.

### 3. Google Tag Manager

U GTM-u postavite GA4 konfiguraciju i e-commerce oznake koje čitaju podatke iz dataLayera. Prednost GTM-a: kasnije dodajete oglasne oznake (Google Ads, Meta) bez diranja koda webshopa.

### 4. Consent Mode v2 i privola

Ako koristite analitičke ili oglasne kolačiće, trebate traku privole. **Consent Mode v2** omogućuje da se oznake ponašaju prema izboru posjetitelja, a Googleu daje signale potrebne za oglase u EU. Postavite zadano stanje „odbijeno” dok posjetitelj ne odluči.

### 5. Provjera prije objave

U GA4 **DebugViewu** prođite cijeli put kupnje: pregled proizvoda, košarica, naplata, kupnja. Provjerite da se svaki događaj pojavi jednom, s ispravnim vrijednostima. Zatim usporedite nekoliko dana podataka s narudžbama u webshopu.

### 6. Konverzije za oglase

Ako oglašavate, označite `purchase` kao ključni događaj i proslijedite ga Google Ads i Meta (preko GTM-a ili integracija). Kampanje tada optimiziraju za kupnje, a ne za klikove.

## Najčešće greške

1. **Duplirane kupnje** — stranica zahvale se ponovno učita i `purchase` se pošalje dvaput. Rješenje: jedinstveni `transaction_id` i zaštita od ponovnog slanja.
2. **Nedosljedan PDV** — negdje cijene s PDV-om, negdje bez. Izvještaji ne odgovaraju knjigovodstvu.
3. **Kriva ili nedostajuća valuta** — vrijednosti bez `currency` GA4 ne zbraja ispravno.
4. **Interni promet u podacima** — vaše testne narudžbe kvare brojke. Filtrirajte interni promet.
5. **Nema privole ili je pogrešno postavljena** — pravni rizik i gubitak podataka za oglase.
6. **Nikad provjereno** — postavljeno jednom i zaboravljeno. Promjena teme ili dodatka tiho prekine praćenje.

## Što dobivate kad je ispravno

- Prihod po kanalu: Google, oglasi, društvene mreže, e-mail.
- Najprodavaniji proizvodi i kategorije — i oni koji se gledaju, a ne kupuju.
- Točan korak u kojem kupci odustaju (dostava? plaćanje?).
- Oglasne kampanje koje optimiziraju za stvarne kupnje.

Ako želite da pregledamo vaše postojeće mjerenje ili ga postavimo ispočetka, pogledajte uslugu [GA4 i praćenje konverzija](page:usluge/ga4-i-pracenje-konverzija) ili se [javite](page:kontakt#upit).
