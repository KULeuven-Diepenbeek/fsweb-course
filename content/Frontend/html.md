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

### Een overzicht van de meest voorkomende HTML elementen en hun functies
<!-- 

#### \<a\> het anker element
>The a tag (short for anchor tag) is arguably the most important and defining tag of HTML. The
anchor tag is the tag used to link from the document a user is on to another document elsewhere
on the internet, or another point in the same document.
De link wordt meegegeven via het `href` attribuut, de tekst die getoond moet worden is de content van het anchor element.
- Refereren naar een lokaal bestand via relatieve paden
```html
<a href="index.html">The home page</a>
```
- Refereren naar een webpagina via url's
```html
<a href="www.google.com">google</a> 
```

-->

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