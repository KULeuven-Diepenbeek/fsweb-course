---
title: "Extra"
weight: 7
author: Arne Duyver
draft: false
---

_bron 1: Responsive Web Design with HTML5 and CSS - 4th edition - Ben Frain_</br>
_bron 2: [W3Schools](https://www.w3schools.com/html/default.asp)_

## Webbrowser developer tools

De developer tools in webbrowsers zijn krachtige hulpmiddelen die web developers helpen bij het **bouwen, testen en debuggen** van websites. Deze tools zijn ingebouwd in de meeste moderne browsers, zoals Google Chrome, Mozilla Firefox (Firebug), Microsoft Edge en Safari.
- **HTML en CSS-structuur inspecteren (en bewerken)**: Met de _Elements_ of _Inspector_ tab kun je de DOM (Document Object Model) van een pagina bekijken, elementen selecteren en hun stijlen aanpassen. Dit is bijzonder handig voor het snel testen van CSS-aanpassingen en het identificeren van problemen met de layout of styling van een pagina. 
- **debuggen van JavaScript-code**: De _Console_ tab stelt je in staat om JavaScript-commando's uit te voeren, foutmeldingen te bekijken en logberichten te inspecteren. De _Sources_ tab biedt een volledige debugger waarmee je door je code kunt stappen, breakpoints kunt instellen en de waarden van variabelen kunt controleren. Dit maakt het veel eenvoudiger om fouten in je code op te sporen en op te lossen.
- **Network**: Hiermee kan je het netwerkverkeer van je webpagina monitoren. Je kunt zien welke bestanden worden geladen, hoe lang dit duurt en of er fouten optreden bij het laden van resources. Dit is essentieel voor het optimaliseren van de prestaties van je website en het identificeren van eventuele problemen met serververzoeken.
- **het geheugen inspecteren**: de _Memory_ tab helpt je bij het opsporen van memory leaks en inefficiënties het bekijken van opgeslagen cookies en andere storage.
- **testen van de toegankelijkheid en responsiviteit** van je website. Met de _Accessibility_ tab kun je controleren of je website voldoet aan toegankelijkheidsrichtlijnen, terwijl de _Device Mode_ je in staat stelt om je website te testen op verschillende schermgroottes en apparaten. Dit helpt je om ervoor te zorgen dat je website voor iedereen toegankelijk en gebruiksvriendelijk is, ongeacht het apparaat dat ze gebruiken.
- **Performance**: Daarnaast bieden de ontwikkelaarstools ook hulpmiddelen voor het analyseren van de prestaties van je webpagina. Dit stelt je in staat om de laadtijd en rendering van je pagina te meten bijvoorbeeld.
.

## Web development met VSCode
Lijst van handige VSCode extensies voor web development:
- HTML CSS Support
- HTML Boilerplate
- HTML Snippets
- Live Server (Five Server)
- HTML Format
- JavaScript (ES6) code snippets
- IntelliSense for CSS class names in HTML

## Je Eigen Webpagina Hosten op GitHub Pages

Je kunt je eigen webpagina eenvoudig hosten op **GitHub Pages** door een repository aan te maken en je HTML-, CSS- en JavaScript-bestanden daarin te plaatsen. Volg deze stappen om je site live te zetten:

1. Maak een GitHub-repository aan
Ga naar [GitHub](https://github.com), log in en maak een nieuwe repository aan. Je kunt ervoor kiezen om de repository openbaar of privé te maken (let op: GitHub Pages werkt alleen voor privé-repositories met een betaald plan).

2. Upload je websitebestanden
Voeg je HTML-, CSS- en andere benodigde bestanden toe aan de repository. Dit kan via de GitHub-interface of door de bestanden lokaal te committen en te pushen met Git.

3. Activeer GitHub Pages
  - Ga naar de repository-instellingen (**Settings**).
  - Scroll naar het gedeelte **Pages**.
  - Kies de juiste bron (meestal de **main** of **master** branch).
  - Selecteer eventueel een specifieke map zoals `/docs` als je bestanden daar staan.

4. Publiceer en bekijk je site
Nadat je GitHub Pages hebt ingeschakeld, genereert GitHub een URL voor je website, meestal in de vorm van:


Na enkele minuten is je site live!

### Extra: Frameworks en Geavanceerde Opties
Voor een eenvoudige site hoef je alleen een `index.html` in de root van je repository te plaatsen. Wil je een geavanceerdere site? Dan kun je frameworks zoals **Jekyll** of **Hugo** gebruiken, die GitHub Pages direct ondersteunt.


<!-- ## Extra tips and tricks

1. Alles is een Box in HTML (Box-model). In de mozilla firefox browser kan je live veranderingen aanbrengen aan.
<img src="/img/margin_padding.png" alt="drawing" style="max-height: 10rem;"/>

2. Je kan CSS variabelen overschrijven door van het Cascading-principe gebruik te maken. Dit wordt vooral handig wanneer we transitions bekijken in Advanced CSS

3. Je kan CSS variabelen in andere CSS variabelen gebruiken.

4. Je kan in de Calc-functie (CSS) verschillende units door elkaar gebruiken.

5. Je kan een counter gebruiken om eigen hoofdingen te specialiseren.

6. Je kan de `focus-within` pseudo klasse gebruiken om rechtstreeks te interageren met content in een dropdown menu.

7. Plaats meerdere variabelen in een object wanneer je ze `console.log()`-ed om de namen van de variabelen weer te geven.

8. Gebruik de `console.table()` functie om meerdere dezelfde objecten in een lijst overzichtelijk te loggen.

9. Gebruik `%c` in een log-statement om CSS stylin toe te passen.

10. Gebruik `console.trace()` binnenin een functie om ook de hele stack trace te loggen.

11. Maak gebruik van de backtick \` notatie in Strings om eenvoudig variabelen toe te voegen.


## Extra opdracht
Bestudeer grondig de webpagina die gegenereerd wordt door intellij wanneer je testen uitvoert. Gebruik je eigen skills om nu een kopie te maken van deze webpagina, zonder naar de broncode te gaan kijken. Maak een eigen JSON-object aan waar de informatie van de testen inzit die je dan uitleest met JavaScript om de content van je webpagina dynamisch te genereren. <a href="https://github.com/KULeuven-Diepenbeek/fsweb-course/blob/main/static/files/frontendExercise.zip">file</a>

## Opgaven

1. Doe de [HTML exercises](https://www.w3schools.com/html/exercise.asp) op w3schools.com
2. Doe de [CSS exercises](https://www.w3schools.com/css/exercise.asp) op w3schools.com
3. Doe de [JavaScript exercises](https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_variables1) op w3schools.com -->