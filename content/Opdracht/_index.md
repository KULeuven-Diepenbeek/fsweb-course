---
title: "Opdracht"
weight: 4
author: Arne Duyver
draft: false
---

Officiële opgave, zie <a href="https://toledo.kuleuven.be/">Toledo</a>

## FSWEB: Projectopdracht 2024-2025

In essentie mag je een eigen concept kiezen voor de website die je voor het project van "Full Stack Web Development" mag/moet maken. Hierbij gelden volgende **minimumvereisten**:

- Volg de logica van de HTML-elementen om je website te structureren (bv. één main-sectie, aside voor nevenstaande elementen, ...)
- Maak minstens de twee volgende pagina’s:
  - Een contact-pagina met pictogrammen voor de verschillende contactmethodes en een formulier om contact met je op te nemen.
  - Een login-pagina. Implementeer hierbij `user authentication` zodat je als gebruiker een gepersonaliseerde ervaring krijgt (anders heeft de login-pagina niet veel zin).
-	Zorg daarnaast voor minstens 3 andere webpagina’s met een duidelijk verschillend doel.
    -	Het is interessanter om duidelijk verschillende soorten pagina’s te maken dan varianten op hetzelfde.
-	Op elke pagina moet een navigatiemenu en een footer staan.
-	Gebruik een aparte CSS-file om je website te stylen.
-	Maak gebruik van een `flexbox` en/of `grid` voor het positioneren van de HTML-elementen
-	Voorzie minstens 1 afbeelding, 1 animation en 1 transition. (Waar nuttig)
-	Doe formuliervalidatie voor minstens twee soorten elementen, client- én serverside.
-	Je website moet responsive zijn voor minstens 3 schermgroottes:
    -	Een standaard laptop-scherm (14” of 15”, 1920x1080), enkel landscape
    -	Een tablet (bv. IPad Air), portrait & landscape
    -	Een smartphone (bv. IPhone SE of OnePlus Nord 2T 5G, Android 14):
afhankelijk van je eigen toestel kan je kiezen tussen iOS of Android.
-	Implementeer een volledige CRUD (create, read, update en delete), zowel op de backend als met local storage. 
-	Integreer op minstens 2 pagina’s informatie die je uit de database aan de serverkant ophaalt.
    -	_Maak hiervoor gebruik van het EER-schema en de SQL-database die je ontwikkeld hebt in de taak van het opleidingsonderdeel Databases (4290). **Indien je niet deelneemt aan dit opleidingsonderdeel kan een database aangeboden worden door de docenten**._ 
-	De Laravel-site moet (vrij) volledig uitgewerkt zijn. De versie in Sveltekit mag beperkter zijn.

_Met deze minimale vereisten kan je maximaal 16/20 halen voor dit deel van het project. Je bent dus vrij om dit voorstel uit te breiden. Correct uitgewerkte uitbreidingen kunnen voor een hogere score zorgen, maar enkel als aan de minimale vereisten voldaan is. Hou echter rekening met de werklast en met het feit dat je ook nog op de andere opleidingsonderdelen moet slagen._

Bedenk op tijd een voorstel van concept, want voor je database concept kan/moet je een eerste ruw idee hebben voor eind februari. Voor je finale idee krijg je wat langer tijd, nl. tot 26/3/2025.
Bezorg je concept per email naar <a href=mailto:Kris.Aerts@kuleuven.be>Kris.Aerts@kuleuven.be</a> én <a href=mailto:Arne.Duyver@kuleuven.be>Arne.Duyver@kuleuven.be</a>. Ten laatste voor de paasvakantie krijg je dan feedback over dit voorstel. Bespreek in deze email niet alleen het algemene concept, maar ook hoe je de verschillende minimumcriteria wil aanpakken. Tijdens de uitvoering van het project mag je van dit voorstel afwijken, maar we willen vermijden dat je vergeet hieraan te denken tijdens het bedenken van je concept. 

Ter inspiratie enkele voorbeelden (waarbij je zelf moet aanvullen wat er precies in zal zitten):
- Een (fake) dashboard voor een smarthome (lichten aan- en uitdoen, verwarming instellen, ...)
-	Een eenvoudige webshop 
-	Een online movie database met zoekfunctionaliteit en waar je filmbesprekingen kan toevoegen
-	Een website ter ondersteuning van een online game met cheats en een shop voor skins e.d. 
-	Een website voor een universiteit, waar je een studie kan kiezen, of kan in- en uitschrijven voor vakken
-	Een blogplatform waar mensen zelf een blog kunnen opstarten en artikels toevoegen aan een blog, met likes voor die post, ...

De opdracht moet je uiteindelijk uitvoeren in 2 verschillende frameworks (Laravel en Svelte/Sveltekit).

|Deel|Opdracht|Deadline|
|----|--------|--------|
|0.  |Concept | Woensdag 26/03/2025|
|1.  |Laravel | Het examen (TBD)|
|2.  |Svelte/Sveltekit | Het examen (TBD)|
|3.  |Verslagen | Het examen (TBD)|

Deel 1 en 2 worden **mondeling verdedigd**, en dit ten laatste **op het examen**. Vroeger mag ook. 

Zowel deel 1 als deel 2 zijn een **individueel project**. Voor deel 3 (de verslagen) is het voldoende om ze te uploaden via Toledo, maar hier kan wel een vraag over komen op de mondelinge verdediging van het project.

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

Naast je website dien je een **verslag van je website** in---van ongeveer 100 à 200 woorden---waarin je uitlegt wat de speciale kenmerken van je website zijn (wat-waarom-voor wie). Standaardformuleringen "op de login-pagina kan je inloggen" mag/moet je laten vallen.

Je dient verder ook nog een **verslag over de verschillende frameworks** te maken---van ongeveer 250 woorden---waarin je een vergelijking maakt tussen de werking van Laravel en SvelteKit. Wat was makkelijker in het ene framework, wat was moeilijker. Vermeld ook welk framework je meer geneigd bent om in de toekomst te gebruiken en waarom.

**Indienen doe je via Toledo; voeg enkel beide Word-bestanden toe. Zie boven.**

**ALVAST VEEL SUCCES!**
