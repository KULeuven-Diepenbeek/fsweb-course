---
title: "Opdracht"
weight: 4
author: Arne Duyver
draft: false
---

Officiële opgave, zie <a href="https://toledo.kuleuven.be/">Toledo</a>

## FSWEB: Projectopdracht 2025-2026, De sociale kaart voor jongeren

De sociale kaart is een redelijk droge website waarmee je hulp- en zorgverleners in Vlaanderen kan opzoeken. De site is in essentie niet meer dan een formulier waarin je kan invullen naar wat je op zoek bent, en in welke locale dat moet zijn. De uitkomst geeft dan zowel zorgverleners (meer medische en/of klinische beroepen), hulpverleners (breder en dus ook sociaal, maatschappelijk, …) en instellingen (CAW, …). Om het algemeen te houden, noemen we die hieronder “actoren”.

Een jongerenversie moet meer drempelverlagend zijn en de bezoeker beter begeleiden in de zoektocht naar de juiste hulp. Duidelijke rubrieken zoals “Ik wil op eigen benen staan”, “Er is een noodgeval”, “ik wil een klacht indienen”, … kunnen daarbij helpen. De relatief droge data van de sociale kaart moet daarvoor verrijkt worden gegevens over toegankelijk- en betaalbaarheid en de mate waarin het initiatief zich specifiek op jongeren richt. Ook een indeling in de rubrieken van hierboven is belangrijk.

Hiervoor moet in dit vak (FSWEB) een website gemaakt worden dat een meer basic versie van de database (uit het vak DAB) gebruikt.

_De database wordt jullie aangeboden in de week van 23/03/2026 wanneer we de lessen rond laravel en mysql gezien hebben_

Hierbij gelden volgende technische **minimumvereisten** voor de website:

- Volg de logica van de HTML-elementen om je website te structureren (bv. één main-sectie, aside voor nevenstaande elementen, ...)
- Maak minstens de drie volgende pagina’s:
  - Een map view pagina zoals ook te zien is op deze url [De sociale kaart in kaartvorm](https://www.google.com/maps/d/u/0/viewer?mid=1QodGcXUQ-SIqoW8G-ulEjYXAQKCQ6bM&ll=50.91566005817988%2C4.216426199999974&z=8). Je kan hiervoor de [leaflet api](https://leafletjs.com/) gebruiken of google maps api.
  - Een login-pagina. Implementeer hierbij `user authentication` zodat je als administrator een gepersonaliseerde ervaring krijgt en elementen aan de website kan updaten. (Bijvoorbeeld extra organisaties toevoegen). Niet alleen administrators moeten kunnen inloggen maar ook organisaties die hun gegevens willen updaten. (Bijvoorbeeld: Apotheek Peeters is verhuisd en wil zijn adres updaten).
  - Een zoekpagina gelijkaardig aan de [originele sociale kaart website](https://www.desocialekaart.be/) maar met focus op jongeren en een meer intuïtieve gebruikers interface.
-	Zorg daarnaast voor minstens 2 andere webpagina’s met een duidelijk verschillend doel.
    -	Het is interessanter om duidelijk verschillende soorten pagina’s te maken dan varianten op hetzelfde. (Je mag deze zelf een invulling geven)
-	Op elke pagina moet een navigatiemenu en een footer staan.
-	Gebruik een aparte CSS-file om je website te stylen.
-	Maak gebruik van een `flexbox` en/of `grid` voor het positioneren van de HTML-elementen
-	Voorzie minstens 1 afbeelding, 1 animation en 1 transition. (Waar nuttig)
-	Doe formuliervalidatie voor minstens twee soorten elementen, client- én serverside.
-	Je website moet responsive zijn voor minstens 2 schermgroottes:
    -	Een standaard laptop-scherm (14” of 15”, 1920x1080), enkel landscape
    -	Een smartphone (bv. IPhone SE of OnePlus Nord 2T 5G, Android 14):
afhankelijk van je eigen toestel kan je kiezen tussen iOS of Android.
-	Implementeer een volledige CRUD (create, read, update en delete), zowel op de backend als met local storage. 
    - In local/session storage moet je de zoekgegevens van de gebruikers stoppen zodat jongeren zich niet moeten inloggen, maar dat ze wanneer ze een volgende keer naar de website surfen hun favoriete diensten wel snel kunnen terugvinden.
-	De Laravel-site moet (vrij) volledig uitgewerkt zijn. De versie in Sveltekit mag beperkter zijn.

Voor de verdere indeling en specifieke uitwerking rekenen we op de individuele invulling van de student. Aangezien jullie de doelgroep van zo een website zouden kunnen zijn ... Hoe wil jij dat de website werkt en wat denk je dat jongeren kan helpen snel de juiste hulp te vinden en jongeren kan aantrekken om hiervan gebruik te maken?

_Met deze minimale vereisten kan je maximaal 16/20 halen voor dit deel van het project. Je bent dus vrij om dit voorstel uit te breiden. Correct uitgewerkte uitbreidingen kunnen voor een hogere score zorgen, maar enkel als aan de minimale vereisten voldaan is. Hou echter rekening met de werklast en met het feit dat je ook nog op de andere opleidingsonderdelen moet slagen._

Deze vraag werd ons rechtstreeks gesteld van een medewerkster van de website en ze willen graag dat wij hun helpen met een efficiënte, bruikbare en aantrekkelijke website. Midden mei zitten we terug samen met hen en willen we al een deel van jullie projecten tonen om aan hen ook feedback te vragen wat ze willen hebben, want moesten ze zeer blij zijn met het resultaat kan het zijn dat we met jou contact opnemen om na de cursus de website eventueel voor hen beschikbaar te stellen. Daarom willen we voor zondag 03/05/2026 23u59 een eerste versie van je Laravel project ontvangen, je zal hier dan ook informatieve feedback op krijgen (staat dus nog niet op punten). De uiteindelijke verdediging van je website zal ergens vlak voor of tijdens de examen periode ingepland worden voor een mondelinge verdediging.

|Deel|Opdracht|Deadline|
|----|--------|--------|
|0.  |Eerste versie | Zondag 03/05/2026 23u59|
|1.  |Laravel | Het examen (TBD)|
|2.  |Svelte/Sveltekit | Het examen (TBD)|
|3.  |Verslag | Het examen (TBD)|

Deel 1 en 2 worden **mondeling verdedigd**, en dit ten laatste **op het examen**. Vroeger mag ook. 

Zowel deel 1 als deel 2 zijn een **individueel project**. Voor deel 3 (de verslagen) is het voldoende om ze te uploaden via Toledo, maar hier kan wel een vraag over komen op de mondelinge verdediging van het project.

**Indienen deel 0** Zip de rootfolder van je gehele website (heel het Laravel project) en geef het de benaming _"AchternaamVoornaam_Laravel.zip"_. Upload dit zipbestand op Toledo.

**Indienen deel 1** Zip de rootfolder van je gehele website (heel het Laravel project) en geef het de benaming _"AchternaamVoornaam_Laravel.zip"_. Upload dit zipbestand op Toledo.

**Indienen deel 2** Zip de rootfolder van je gehele website (heel het Svelte/Sveltekit project) en geef het de benaming _"AchternaamVoornaam_Svelte.zip"_. Upload dit zipbestand op Toledo.

**Indienen deel 3** Upload de twee verslagen (_"VoornaamAchternaam_verslagWebsite.docx"_ en _"AchternaamVoornaam_verslagVerschil.docx"_)

### Deel 1: Laravel

Deadline: zie boven

Maak voor de backend functionaliteit van je project gebruik van Laravel en zijn integratie met de MySQL database. 

**Indienen doe je via Toledo; voeg enkel je zip bestand toe. Zie boven.**

### Deel 2: SvelteKit

Deadline: zie boven

Herbruik zoveel mogelijk de frontend van je Laravel website uit deel 1, maar maak ze meer reactive met de mogelijkheden die Svelte biedt. Indien je ervoor gekozen hebt om meer te implementeren in je website dan het minimum in deel 1, dan is het NIET nodig deze extraatjes ook in Svelte/Sveltekit te implementeren. Verder moet de website een gelijkwaardige kopie vormen van je project uit deel 1. Op dit deel kan je dus het maximum van de punten behalen door enkel de minimumvereisten van het vorige deel te implementeren.

**Indienen doe je via Toledo; voeg enkel je zip bestand toe. Zie boven.**

### Deel 3: Verslagen

Deadline: zie boven

<!-- Naast je website dien je een **verslag van je website** in---van ongeveer 100 à 200 woorden---waarin je uitlegt wat de speciale kenmerken van je website zijn (wat-waarom-voor wie). Standaardformuleringen "op de login-pagina kan je inloggen" mag/moet je laten vallen. -->

Je dient verder ook nog een **verslag over de verschillende frameworks** te maken---van ongeveer 250 woorden---waarin je een vergelijking maakt tussen de werking van Laravel en SvelteKit. Wat was makkelijker in het ene framework, wat was moeilijker. Vermeld ook welk framework je meer geneigd bent om in de toekomst te gebruiken en waarom.

**Indienen doe je via Toledo; voeg enkel het Word-bestand toe. Zie boven.**

**ALVAST VEEL SUCCES!**


### DE DATABASE

In [deze zipfolder](/files/database_opdracht.zip) kan je een folder terugvinden met 2 sql files om een eigen MySql database te laten genereren (met eventueel dummydata). Aangezien dit ingebouwd is in Laravel kan je in de zipfolder ook alle Modellen, migrations en een database seeder terugvinden.

{{% notice info %}}
Je mag de database zelf ook uitbreiden of meer dummy data gebruiken, maar conceptueel is wat hier is aangeboden voldoende.
{{% /notice %}}

# Uitleg van de databasestructuur

In deze database slaan we gegevens op over **organisaties**, die we "actoren" noemen.  
Denk hierbij aan jeugdhuizen, hulpdiensten, welzijnsorganisaties, medische praktijken, enzovoort.

De database is bewust **vereenvoudigd** opgebouwd zodat ze makkelijk te begrijpen is, maar toch voldoende krachtig blijft om realistische data op te slaan.


## 1. De centrale tabel: Actor

De belangrijkste tabel in de database is de tabel **`actor`**.

Een *actor* stelt één organisatie voor.

In deze tabel bewaren we alle basisinformatie van een organisatie, zoals:

- de publieke naam van de organisatie  
- de categorie waartoe de organisatie behoort  
- het adres (straat, nummer, gemeente, postcode, coördinaten)  
- de betaalwijze (bijvoorbeeld gratis, sociaal tarief of online betaling)  
- de leeftijdscategorie waarop de organisatie zich richt  
- de aangeboden diensten (als vrije tekst)  
- eventuele opmerkingen  
- de datum waarop de gegevens laatst werden aangepast  

Belangrijk:  
**De actor is het centrale punt van de database.**  
Alle andere gegevens hangen op één of andere manier samen met een actor.

## 2. Categorie

Elke actor behoort tot **exact één categorie**.

Voorbeelden van categorieën zijn:
- Vrije tijd  
- Gezondheid 
- Welzijn
- Onderwijs
- Op eigen benen staan
- Hulpverlening
- Noodgevallen
- Inspraak
- Klachten
- Overheidsdiensten

Dit betekent dat:
- één categorie meerdere actoren kan bevatten  
- maar een actor slechts tot één categorie kan behoren  

Technisch wordt dit gerealiseerd via een foreign key:
- `actor.categorie_id` verwijst naar `categorie.id`

## 3. Rubrieken

Naast categorieën bestaan er ook **rubrieken**.  
Rubrieken vormen een meer gedetailleerde indeling en zijn hiërarchisch opgebouwd.

Elke rubriek heeft:
- een **ID als string** (bijvoorbeeld `11`, `11.02`, `11.02.04`)  
- een naam  
- een level (niveau), bijvoorbeeld:
  - level 1 = hoofdniveau  
  - level 2 = subniveau  
  - level 3 = detailniveau  

Voorbeeld:
- `11` → JONGEREN  
- `11.02` → Jeugdwelzijnswerk  
- `11.02.04` → Vrijetijdsinitiatieven  


### Relatie tussen actor en rubriek

Een actor kan tot **meerdere rubrieken** behoren.  
En een rubriek kan ook aan **meerdere actoren** gekoppeld zijn.

Dit is dus een **veel-op-veel relatie (many-to-many)**.

Daarom gebruiken we een tussentabel: **`actor_rubriek`**

Deze tabel bevat enkel:
- `actor_id`
- `rubriek_id`

## 4. Adres (in de actor)

Elke actor heeft **exact één adres**.

In plaats van een aparte tabel te maken, hebben we ervoor gekozen om het adres rechtstreeks in de `actor`-tabel op te slaan.

De adresgegevens bestaan uit:
- straatnaam  
- huisnummer  
- busnummer  
- gemeente  
- postcode  
- latitude en longitude (geografische coördinaten)  

Waarom deze keuze?
- eenvoudiger model  
- minder tabellen nodig  
- minder complexe queries  


## 5. Contactgegevens

Een actor kan **meerdere contactgegevens** hebben.

Voorbeelden:
- telefoonnummer  
- e-mailadres  
- website of sociale media  

Daarom gebruiken we een aparte tabel: **`contactgegeven`**

Elke rij in deze tabel bevat:
- het type (mail, telefoonnr, online)  
- de waarde (bijvoorbeeld het telefoonnummer of e-mailadres)  
- een verwijzing naar de actor  

Relatie:
- één actor → meerdere contactgegevens  


## 6. Openingsuren

Een actor kan ook **meerdere openingsuren** hebben.

Daarom bestaat er een aparte tabel: **`openingsuur`**

Elke openingsuur bevat:
- dag van de week (bijvoorbeeld maandag, dinsdag, …)  
- startuur  
- einduur  
- type (bijvoorbeeld open, online, op afspraak, telefonisch)  
- een verwijzing naar de actor  

Relatie:
- één actor → meerdere openingsuren  


## 7. Gebruikers

De tabel **`gebruiker`** stelt de personen voor die met het systeem werken.

Elke gebruiker heeft:
- een rol:
  - administrator (beheerder van het systeem)
  - actorbeheerder (beheerder van één actor)
- een e-mailadres  
- een wachtwoord  

### Relatie tussen gebruiker en actor

Een gebruiker kan gekoppeld zijn aan een actor.

Dit betekent:
- een actor kan een contactpersoon hebben (een gebruiker)  
- een gebruiker kan verantwoordelijk zijn voor het beheren van een actor  

Dit wordt gerealiseerd via:
- `gebruiker.actor_id`
- `actor.contactpersoon_gebruiker_id`


# Samenvatting van de relaties

## Eén-op-veel relaties
- één categorie → meerdere actoren  
- één actor → meerdere contactgegevens  
- één actor → meerdere openingsuren  

## Veel-op-veel relatie
- actor ↔ rubriek (via `actor_rubriek`)  

## Optionele één-op-één relatie
- actor ↔ gebruiker (contactpersoon)

# 🧠 Conceptueel uitgelegd

Je kan de database als volgt samenvatten:

> Een actor (organisatie) is het centrale element.  
Elke actor hoort bij één categorie en heeft één adres.  
Daarnaast kan een actor meerdere rubrieken, contactgegevens en openingsuren hebben.  
Gebruikers beheren actoren en kunnen eraan gekoppeld zijn als contactpersoon.