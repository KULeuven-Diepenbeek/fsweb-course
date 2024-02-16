---
title: "HTML"
weight: 1
author: Arne Duyver
draft: false
---

_bron 1: Responsive Web Design with HTML5 and CSS - 4th edition - Ben Frain_</br>
_bron 2: [W3Schools](https://www.w3schools.com/html/default.asp)_

## HyperText Markup language
HTML staat voor 'HyperText Markup Language' en is een manier om content te markeren zodat het door een technologie begrepen kan worden. HTML is essentieel voor menselijk begrijpbare webcontent.
</br>Je markeert tekstinhoud met tags/elements om structuur aan te brengen.

### Elements, Tags en Attributes
Een **HTML element** wordt gedefiniëerd een openingstag, elementinhoud en een sluitingstag. Een **HTML tag** wordt weergegeven met de naam van het element binnen in "< ... >" bv. `<p>`. Een sluitingstag bevat nog een "/" voor de element naam bv. `</p>`. Elke openingstag **moet** meestal ook gevolgd worden door een sluitingstag van hetzelfde element bv. `<p> ... </p>`. Een uitzondering op deze regel zijn een aantal **self-closing elements** die geen elementinhoud bevatten. Een self-closing element bevat dus maar één tag waarin de "/" na de elementnaam komt en voor de sluitende ">" bv. `<img/>`.

Een element kan verschillende **attributes** bevatten die extra informatie over een HTML element bevatten. Deze attributen kunnen het gedrag of uiterlijk van een element wijzigen, de functionaliteit ervan definiëren of andere details specificeren, zoals de relatie met andere elementen of het gedrag als reactie op gebruikersinteracties. 
</br>Attributen worden aan HTML-elementen toegevoegd met behulp van _name-value pairs_ binnen de openingstag van het element. Enkele veelgebruikte HTML-attributen zijn.
</br>Een veelgebruikt attribuut is '`id`' dat je helpt een specifiek element terug te vinden met behulp van JavaScript bijvoorbeeld. Op volgende manier gebruik je attributen in HTML tags (Een element kan meerdere attributen bevatten):
```html
<p id="paragraaf1" value="1">...</p>
```

Een element kan meerdere andere elementen bevatten. Hier spreken we dan van **nested elements**, bv.:
```html
<p id="paragraaf1" value="1">
    <h1>...</h1>
    <a>...</a>
</p>
```

### Structuur van een HTML-document
Je kan eender welke simpele tekst- of code-editor gebruiken om HTML bestanden aan te maken of te bewerken (bv. notepad, notepad++, vscode, sublime text, atom, vim, nano ...). Een HTML bestand zou volgende hoofdstuctuur moeten volgen:
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        ...
    </head>
    <body>
        ...
    </body>
</html>
```

- **Doctype**: Hiermee geven we weer welk type dit document is. In ons geval dus steeds html.
- **html element**: Het HTML element met de naam 'html'. Dit wordt de **root tag** van het HTML bestand genoemd, want alle html code moet binnen de `<html>` en `</html>` tags staan
    - **lang attribuut**: Met het language attribuut geven we meer informatie mee aan de webbrowser door te vermelden dat de content op deze webpagina in het Engels (`en`) geschreven is. (Nederlands =  `nl`)
- **head element**: dit is een container voor de volgende metadata: `<title>`, `<style>`, `<meta>`, `<link>`, `<script>` and `<base>`.
    - **meta element**: wordt gebruikt om de karakterset/encoding, paginabeschrijving, trefwoorden, auteur van het document en viewport settings te declareren.
        - **character encoding**: dit verteld de webbrowser hoe de karakters gecodeerd zijn zodat hij ze correct kan decoderen. Tenzij je een goede reden hebt is de gebruikte codering normaal `utf-8`.
- **body element**: een element container die al de overige inhoud van het HTML bevat. De headers, paragrafen, de tekst ...

### Types van HTML elements
- **Sectioning elements**: elementen die worden gebruikt om de structuur van een webpagina te definiëren door secties van inhoud te scheiden. Bv. `<header>` en `<footer>`.
- **Grouping elements**: elementen die worden gebruikt om meerdere inhoudsitems te groeperen of te bundelen onder één overkoepelend element. Bv. `<div>` en `<span>`.
- **Text-level semantics**: dit verwijst naar de manier waarop HTML elements de betekenis en structuur van tekst op een webpagina definiëren. Deze elementen worden gebruikt om specifieke delen van de tekst te markeren en hun semantische betekenis aan te geven. Bv. `<em>` en `<strong>`.

### Een overzicht een deel HTML elementen
#### Anchor element


### Mappenstructuur voor je webpagina's
```
root
|
+--- html
    |
    +--- index.html
    |
    +--- about
    |    |
    |    +--- about.html
    |
    +--- contact
    |    |
    |    +--- contact.html
    ...
+--- assets
    |
    +--- images
        |
        +--- image1.png
...
```

### HTML vs HTML5

HTML5 is de nieuwere versie van HTML met een aantal nuttige voordelen. Zo is HTML5 zeer vrijgevend gezind in het weglaten van bepaalde attributen en gebruikt HTML5 default waarden voor attributen die nodig zijn maar niet specifiek uitgetyped werden. W Bijvoorbeeld:

```html
<link href="CSS/main.css" rel="stylesheet" type="text/css" />
```
HTML5:
```html
<link href=CSS/main.css rel=stylesheet >
```
Merk op dat in het HTML5 voorbeeld geen "/" heeft voor het sluitende groter dan teken, geen quotes gebruikt voor de value van het attribuut 'href' en 'rel' en er geen attribuut 'type' gedefinieerd is. HTML5 zal hier echter niet moeilijk over doen.  

<!-- TODO: fix icon -->
> <i class="fa-solid fa-circle-exclamation" aria-hidden="true"></i>
> In het algemeen is het wel een goede strategie om je HTML bestand zo specifiek mogelijk te coderen om problemen in een later stadium te vermijden.

Aangezien HTML5 dus gewoon de nieuwere versie is van HTML gaan we dit gebruiken.

## Opdrachten
1. Maak een HTML-bestand en noem het portfolio.html
2. Geef de titel van je webpagina de naam "<naam> portfolio".
3. Voeg jezelf toe als auteur van de webpagina
4. Gebruik het header element om de onderstaande structuur aan te brengen aan je webpagina.
    - Expertise
    - Over mij
    - Mijn projecten
    - Technische vaardigheden en CV
    - Contact
5. Gebruik de relevante html elementen om het volgende toe te voegen aan je webpagina: voeg boven de header expertise een welkomstbericht toe. (Voor inspiratie voor het tekstje kan je ChatGPT gebruiken, de vormgeving doe je ZELF). Emphasize een aantal inspirerende woorden door ze in het vetgedrukt/schuin te zetten.
6. Voeg ook een mooie afbeelding toe die je online ophaalt. Gerbuik hiervoor het 'figure' element en voeg een caption toe
7. Plaats de welkomsttekst binnenin een div en geef die div de klassenaam 'welcometext'.
8. Geef in de Expertise sectie een lijst waarin je je eigen vaardigheden in de verf zet. (je kan ook inspiratie opdoen op andere portfolio websites).
9. Plaats in de Expertise sectie ook een link naar de sectie Technische vaardigheden en CV
10. Plaats in de 'Over mij' je favoriete quote van je lievelingsfilm/-boek in de Over mij sectie. Gerbuik hier het juiste element voor.
11. Geef ook wat meer informatie over jezelf en plaats minstens één belangrijke zin in een span en geef die de id 'important-sentence'.
12. Plaats hier ook een afbeelding (de afbeelding moet je lokaal hebben staan)
13. Maak onder de sectie 'Mijn projecten' subsecties voor alle projecten die je al eens gemaakt hebt. Bijvoorbeeld je project van ELSY van het eerste jaar, je PES project, eigen andere projecten …
14. Onder technische vaardigheden maak je een tabel met je verschillende opleidingen in (naam opleiding, startjaar, eindjaar). Voeg ook een lijst met beheerste talen toe en link hier ergens naar  volgende webpagina: [https://detaalbrigade.nl/taalniveaus/](https://detaalbrigade.nl/taalniveaus/ )
15. Breng wat meer structuur aan in je teksten met divs, paragrafen en line breaks. Voeg ook eens wat symbolen via hun htmlcode toe waar nuttig. Gebruik verschillende achtergrond kleurtjes om te bekijken hoe de verschillende structuren werken (doe dit ook voor je span).
16. Gerbuik inputs boxen, knoppen, checkboxen, … om een contactformulier aan te maken. Je vindt hier ontelbare voorbeelden van op het internet. 
17. Neem nu je 'Contact' sectie en plaats die in een nieuw bestand genaamd 'contact.html' en plaats deze in de subfolder genaamd 'contact'.
18. Maak footer aan waarmee je navigeert naar je 'contact' page van je website.
19. Voeg in je head een link toe naar fa-icons zodat je die icoontjes kan gebruiken: 
<br/>`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">`
20. Voeg aan je footer ook een link toe via een icoon naar je Github profiel en een icoon voor je linkedIn profiel (indien je dat hebt)