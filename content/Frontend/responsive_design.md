---
title: "Responsive Design"
weight: 5
author: Arne Duyver
draft: false
---

## Starting fresh

Start je CSS file met volgende code om enkel "ongewenst" default gedrag van de browser te overschrijven:

```CSS
*,
*::before,
*::after {
  box-sizing: border-box; /* Zorgt ervoor dat default padding en border worden meegerekend met breedte en hoogte */
}

* {
  margin: 0;  /* Zorgt ervoor dat elk element default geen margin heeft */
  padding: 0; /* Zorgt ervoor dat elk element default geen padding heeft */
}
```

## Positioning (herhaling)

- `position: absolute;` item is verwijderd van het document.
  - `top`, `right`, `bottom`, `left` unlocked.
  - zet `position: relative;` in parent om het element relative te positioneren t.o.v. van parent i.p.v. hele document.
  - gebruik `z-index` om elementen naar voor te halen of naar achter te brengen.
  - (Wanneer je elementen met negatieve waarden niet meer passen op het scherm< verschijnt een scroll bar.Verwijder de scroll bar met `overflow: hidden;` in parent or body)
- `position: relative;` position relative t.o.v. parent en blijven in de normal flow van het document.
  - `top`, `right`, `bottom`, `left` unlocked.
- `position: static;` default, er gebeurt niks.
- `position: fixed;` gelijkaardig aan absolute en dus ook verwijderd uit document, maar item volgt nu met het scrollen en altijd relative t.o.v. het html element. (ideaal voor headers and footers)
- `position: sticky;` werkt alleen wanneer `top` of `bottom` property is meegegeven.
  - blijft enkel sticky binnen de parent.

_Voorbeeld zie [demo 1](#demo-1-positioning)_

### Flexbox
Geeft het element 2 assen om elementen op te plaatsen en de default as is horizontaal. Dus onze items worden niet meer boven elkaar getoond maar naast elkaar. 
Bijvoorbeeld:
```html
<div class="container">
  <div class="item item1">Item 1</div>
  <div class="item item2">Item 2</div>
  <div class="item item3">Item 3</div>
</div>
```
```css
.containter {
  display: flex;

  /*Verander de main axis: column , row (default)*/
  flex-direction: row;

  /*Hoe moeten de elementen geplaatst worden op de main axis: flex-start (default) , flex-end , center , space-between , space-around , space-evenly*/
  justify-content: flex-start;

  /*Hoe moeten de elementen geplaatst worden op de cross axis: flex-start (default) , flex-end , center , baseline*/
  align-items: flex-start;

  /*Hoe omgaan met overflow: nowrap (default) , wrap*/
  flex-wrap: wrap;
  /*Wrap unlocks align-content zelfde opties als `justify-content`*/
  align-content: flex-start;

  /*Plaats tussen elementen aanpassen: 0px (default)*/
  gap: 1em;
}

.item.item1{
  /* flex-grow: 1; */
  flex-shrink: 5; /*item 1 shrinkt 5x sneller dan de andere (0 item shrinkt niet)*/
  flex-basis: 300px; /*overschrijft breedte item in flex container*/
  
  /*SHORTHAND: grow shrink basis*/
  flex: 1;

  align-self: center; /*overschrijf align van container*/
  order: 2; /*verander de volgorde waarin elementen in flex container getoond worden t.o.v. volgorde in html bestand. (beter via HTML aanpassen)*/
}

.item.item2{
  flex-grow: 2; /*neemt dubbel zoveel plaats in als 1 en 3*/
}

.item.item3{
  flex-grow: 1;
}
```

<figure>
<img src="/img/flex-info.png" alt="drawing" style="max-height:40rem;"/>
<figcaption>Flex info <a href="https://medium.com/@MakeComputerScienceGreatAgain/understanding-flexbox-a-comprehensive-guide-992bcd5f04de">bron</a></figcation>
</figure>

_Voorbeeld zie [demo 2](#demo-2-flexbox)_

### Grid
Met behulp van **Grid** kan je items plaatsen op basis van een soort grid coördinaten:
Bijvoorbeeld:
```html
<div class="container">
  <div class="item item1">Item 1</div>
  <div class="item item2">Item 2</div>
  <div class="item item3">Item 3</div>
</div>
```
```css
.containter {
  display: grid;
  /*Geef het aantal rijen en kolommen mee*/
  grid-template-rows: 100px 100px 100px; /*3 rijen van 100px*/
  grid-template-columns: 100px 100px 100px; /*3 kolommen van 100px*/

  grid-gap: 1em 2em; /*eerst gap tussen rows dan columns*/

  /*Naamgeving grid vakken*/
  grid-template-areas:
    'header header header'
    'vak4 vak5 vak6'
    'vak7 vak8 vak9';
}

/*Items positioneren*/
.item.item1{
  grid-row-start: 1;
  grid-row-end: 2;
  /*SHORTHAND*/
  /* grid-row: 1 / 2; */
  grid-column-start: 1;
  grid-column-end: 4;
  /*SHORTHAND*/
  /* grid-column: 1 / 4; */

  /*Via area naam*/
  /* grid-area: header; */

  z-index: 1; /*to show on top, if overlapping*/
}
.item.item2{
  grid-row: span 2;
  grid-column: span 2;
}

.item.item3 {
  grid-area: 2 / 3 / 4 / 4;
}
```

- **Extra items toevoegen**: Als je extra items toevoegd terwijl je grid al vol is, dan krijg je een impliciet grid dat automatische een rij bijmaakt bijvoorbeeld. Met `grid-auto-rows: 100px` kan je een grootte van `100px` geven aan de automatisch gegenereerde rijen (idem `grid-auto-columns`). Met de `grid-auto-flow` property kan je de overflow op `columns` toepassen i.p.v. `rows`.
- **Sizing van de templates**: Je kan alle gebruikelijke units gebruiken maar ook een extra speciale unit, specifiek voor grids: `fr`. Deze **fractional** unit gebruikt dan een fractie van de ruimte beschikbaar door de container. Je kan ook de `minmax()` functie gebruiken bv. `minmax(100px, 3fr)`
- **De `repeat()` function**: met de repeat functie kan je snel meerdere waarden herhalen bv `repeat(3, 100px)`
- **Gridception**: Je hoeft je niet te beperken tot 1 grid om je website op te stellen. Je kan een grid onder een grid, in een grid, naast een grid ... gebruiken. Think, trail, error, repeat is hier de boodschap.
- **justify-items en align-items**: deze properties werken gelijkaardig aan de flexbox, maar dan binnenin 1 vak van je grid. (`stretch` = default, `start`, `end`, `baseline`, `center`)
  - Gebruik de **justify-self** en **align-self** properties in de individuele elementen om ze apart te stijlen.
-**Plaatsing grid binnenin container**: Gebruik `justify-content` en `align-content` properties van de container. (`start` , `end` , `center` , `baseline` , `space-between` , `space-around`, `space-evenly`)

<figure>
<img src="/img/grid-info.png" alt="drawing" style="max-height:40rem;"/>
<figcaption>Grid info <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fdev.to%2Fuzafar90%2Fa-comprehensive-guide-to-using-css-grid-for-creating-flexible-and-responsive-layouts-m4b&psig=AOvVaw0D3G40bRCDMYowZpINI_OO&ust=1709900931552000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMCPn8KT4oQDFQAAAAAdAAAAABA5">bron</a></figcation>
</figure>

_Voorbeeld zie [demo 3](#demo-3-grid)_

### Responsive grid zonder media queries
Example non responsive:
```css
.container {
  display: grid;
  grid-template-rows: repeat(4,100px);
  grid-template-columns: repeat(4, minmax(100px,1fr));
}
```
Example responsive:
```css
.container {
  display: grid;
  grid-template-rows: repeat(4,100px);
  /*Wrap item to next row if it doesn't fit*/
  grid-template-columns: repeat(auto-fit, minmax(100px,1fr));
}
```

### Oefening
Hieronder vind je een HTML-bestand inclusief CSS en JavaScript code voor de oefeningen. De gewenste positie en methode is steeds weergegeven als de tekst die je moet stylen. We gebruiken klassen om de gewenste styling te krijgen. De klassenamen zijn al ingevuld in de HTML, je moet dus enkel nog de CSS klassen aanvullen:

<details closed>
<summary><i><b>Klik hier om de start code te voor de oefening te zien/verbergen</b></i>🔽</summary>
<p>

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Flexbox and Grid Exercises</title>
  <style>
    body {
      font-family: Arial, sans-serif;
    }

    .exercise {
      margin-bottom: 20px;
      padding: 10px;
      border: 2px dashed gray;
    }

    .solution {
      display: none;
      margin-top: 10px;
    }

    /* Flex Center Exercise */
    .flex-center-container {
      /* TODO */
    }

    .flex-center-box {
      /* TODO */
    }

    /* Grid Left Half Exercise */
    .grid-half-container {
      /* TODO */
    }

    .grid-half-item {
      /* TODO */
    }

    /* Flex Space Between Exercise */
    .flex-space-between-container {
      /* TODO */
    }

    .flex-space-between-box {
      /* TODO */
    }

    /* Flex Column Exercise */
    .flex-column-container {
      /* TODO */
    }

    .flex-column-box {
      /* TODO */
    }

    /* Grid Three Columns Exercise */
    .grid-three-columns-container {
      /* TODO */
    }

    .grid-three-columns-item {
      /* TODO */
    }

    /* Grid Auto Rows Exercise */
    .grid-auto-rows-container {
      /* TODO */
    }

    .grid-auto-rows-item {
      /* TODO */
    }

    .grid-auto-rows-item-large {
      /* TODO */
    }

    /* Flex Wrap Exercise (New) */
    .flex-wrap-container {
      /* TODO */
    }

    .flex-wrap-box {
      /* TODO */
    }

    /* Grid Named Areas Exercise (New) */
    .grid-named-areas-container {
      /* TODO */
    }

    .grid-header {
      /* TODO */
    }

    .grid-sidebar {
      /* TODO */
    }

    .grid-content {
      /* TODO */
    }
  </style>
</head>

<body>
  <h1>Flexbox and Grid Exercises</h1>

  Flex Center Exercise
  <div class="exercise">
    <p>Exercise: Center this div using Flexbox.</p>
    <button onclick="toggleSolution('flex-center')">Show Solution</button>
    <div id="flex-center" class="solution">
      <div class="flex-center-container">
        <div class="flex-center-box">This div is centered using Flexbox.</div>
      </div>
    </div>
  </div>

  Grid Left Half Exercise
  <div class="exercise">
    <p>Exercise: This div needs to cover the left half of the width of the screen using Grid.</p>
    <button onclick="toggleSolution('grid-half')">Show Solution</button>
    <div id="grid-half" class="solution">
      <div class="grid-half-container">
        <div class="grid-half-item">This div covers the left half using Grid.</div>
        <div></div>
      </div>
    </div>
  </div>

  Flex Space Between Exercise
  <div class="exercise">
    <p>Exercise: Distribute elements evenly using Flexbox.</p>
    <button onclick="toggleSolution('flex-space-between')">Show Solution</button>
    <div id="flex-space-between" class="solution">
      <div class="flex-space-between-container">
        <div class="flex-space-between-box">Left</div>
        <div class="flex-space-between-box">Right</div>
      </div>
    </div>
  </div>

  Flex Column Exercise
  <div class="exercise">
    <p>Exercise: Arrange elements in a vertical column using Flexbox.</p>
    <button onclick="toggleSolution('flex-column')">Show Solution</button>
    <div id="flex-column" class="solution">
      <div class="flex-column-container">
        <div class="flex-column-box">Item 1</div>
        <div class="flex-column-box">Item 2</div>
      </div>
    </div>
  </div>

  Grid Three Columns Exercise
  <div class="exercise">
    <p>Exercise: Create a three-column layout using Grid.</p>
    <button onclick="toggleSolution('grid-three-columns')">Show Solution</button>
    <div id="grid-three-columns" class="solution">
      <div class="grid-three-columns-container">
        <div class="grid-three-columns-item">Column 1</div>
        <div class="grid-three-columns-item">Column 2</div>
        <div class="grid-three-columns-item">Column 3</div>
      </div>
    </div>
  </div>

  Grid Auto Rows Exercise
  <div class="exercise">
    <p>Exercise: Create a dynamic grid with auto-sized rows.</p>
    <button onclick="toggleSolution('grid-auto-rows')">Show Solution</button>
    <div id="grid-auto-rows" class="solution">
      <div class="grid-auto-rows-container">
        <div class="grid-auto-rows-item">Item 1</div>
        <div class="grid-auto-rows-item">Item 2</div>
        <div class="grid-auto-rows-item-large">Item spanning two columns</div>
        <div class="grid-auto-rows-item">Item 3</div>
        <div class="grid-auto-rows-item">Item 4</div>
      </div>
    </div>
  </div>

  Flex Wrap Exercise
  <div class="exercise">
    <p>Exercise: Use Flexbox to wrap child elements when overflowing.</p>
    <button onclick="toggleSolution('flex-wrap')">Show Solution</button>
    <div id="flex-wrap" class="solution">
      <div class="flex-wrap-container">
        <div class="flex-wrap-box">Box 1: This box will wrap</div>
        <div class="flex-wrap-box">Box 2: This box will wrap</div>
        <div class="flex-wrap-box">Box 3: This box will wrap</div>
        <div class="flex-wrap-box">Box 4: This box will wrap</div>
        <div class="flex-wrap-box">Box 5: This box will wrap</div>
        <div class="flex-wrap-box">Box 6: This box will wrap</div>
      </div>
    </div>
  </div>

  Grid Named Areas Exercise
  <div class="exercise">
    <p>Exercise: Use Grid named areas to position elements.</p>
    <button onclick="toggleSolution('grid-named-areas')">Show Solution</button>
    <div id="grid-named-areas" class="solution">
      <div class="grid-named-areas-container">
        <div class="grid-header">Header: Positioned using Grid named areas</div>
        <div class="grid-sidebar">Sidebar: Positioned using Grid named areas</div>
        <div class="grid-content">Content: Positioned using Grid named areas</div>
      </div>
    </div>
  </div>

  <script>
    function toggleSolution(id) {
      var solution = document.getElementById(id);
      solution.style.display = solution.style.display === 'none' ? 'block' : 'none';
    }
  </script>
</body>

</html>
```

</p>
</details>

<!-- EXSOL -->
<!--<details closed>
<summary><i><b><span style="color: #03C03C;">Solution:</span> Klik hier om de code te zien/verbergen</b></i>🔽</summary>
<p>

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Flexbox and Grid Exercises</title>
  <style>
    body {
      font-family: Arial, sans-serif;
    }

    .exercise {
      margin-bottom: 20px;
      padding: 10px;
      border: 2px dashed gray;
    }

    .solution {
      display: none;
      margin-top: 10px;
    }

    /* Flex Center Exercise */
    .flex-center-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 200px;
      border: 2px solid black;
    }

    .flex-center-box {
      padding: 10px;
      background-color: lightblue;
    }

    /* Grid Left Half Exercise */
    .grid-half-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      height: 200px;
      border: 2px solid black;
    }

    .grid-half-item {
      background-color: lightgreen;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* Flex Space Between Exercise */
    .flex-space-between-container {
      display: flex;
      justify-content: space-between;
      padding: 10px;
      border: 2px solid black;
    }

    .flex-space-between-box {
      padding: 10px;
      background-color: lightblue;
    }

    /* Flex Column Exercise */
    .flex-column-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 2px solid black;
      height: 200px;
    }

    .flex-column-box {
      padding: 10px;
      background-color: lightblue;
      margin: 5px;
    }

    /* Grid Three Columns Exercise */
    .grid-three-columns-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      padding: 10px;
      border: 2px solid black;
    }

    .grid-three-columns-item {
      background-color: lightgreen;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* Grid Auto Rows Exercise */
    .grid-auto-rows-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: minmax(100px, auto);
      gap: 10px;
      border: 2px solid black;
      padding: 10px;
    }

    .grid-auto-rows-item {
      background-color: lightgreen;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .grid-auto-rows-item-large {
      grid-column: span 2;
      background-color: lightcoral;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* Flex Wrap Exercise (New) */
    .flex-wrap-container {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      border: 2px solid black;
      padding: 10px;
    }

    .flex-wrap-box {
      padding: 10px;
      background-color: lightblue;
      width: 150px;
      text-align: center;
    }

    /* Grid Named Areas Exercise (New) */
    .grid-named-areas-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 100px 100px;
      grid-template-areas: "header header" "sidebar content";
      gap: 10px;
      border: 2px solid black;
      padding: 10px;
    }

    .grid-header {
      grid-area: header;
      background-color: lightyellow;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
    }

    .grid-sidebar {
      grid-area: sidebar;
      background-color: lightpink;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
    }

    .grid-content {
      grid-area: content;
      background-color: lightgray;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
    }
  </style>
</head>

<body>
  <h1>Flexbox and Grid Exercises</h1>

  Flex Center Exercise
  <div class="exercise">
    <p>Exercise: Center this div using Flexbox.</p>
    <button onclick="toggleSolution('flex-center')">Show Solution</button>
    <div id="flex-center" class="solution">
      <div class="flex-center-container">
        <div class="flex-center-box">This div is centered using Flexbox.</div>
      </div>
    </div>
  </div>

  Grid Left Half Exercise
  <div class="exercise">
    <p>Exercise: This div needs to cover the left half of the width of the screen using Grid.</p>
    <button onclick="toggleSolution('grid-half')">Show Solution</button>
    <div id="grid-half" class="solution">
      <div class="grid-half-container">
        <div class="grid-half-item">This div covers the left half using Grid.</div>
        <div></div>
      </div>
    </div>
  </div>

  Flex Space Between Exercise
  <div class="exercise">
    <p>Exercise: Distribute elements evenly using Flexbox.</p>
    <button onclick="toggleSolution('flex-space-between')">Show Solution</button>
    <div id="flex-space-between" class="solution">
      <div class="flex-space-between-container">
        <div class="flex-space-between-box">Left</div>
        <div class="flex-space-between-box">Right</div>
      </div>
    </div>
  </div>

  Flex Column Exercise
  <div class="exercise">
    <p>Exercise: Arrange elements in a vertical column using Flexbox.</p>
    <button onclick="toggleSolution('flex-column')">Show Solution</button>
    <div id="flex-column" class="solution">
      <div class="flex-column-container">
        <div class="flex-column-box">Item 1</div>
        <div class="flex-column-box">Item 2</div>
      </div>
    </div>
  </div>

  Grid Three Columns Exercise
  <div class="exercise">
    <p>Exercise: Create a three-column layout using Grid.</p>
    <button onclick="toggleSolution('grid-three-columns')">Show Solution</button>
    <div id="grid-three-columns" class="solution">
      <div class="grid-three-columns-container">
        <div class="grid-three-columns-item">Column 1</div>
        <div class="grid-three-columns-item">Column 2</div>
        <div class="grid-three-columns-item">Column 3</div>
      </div>
    </div>
  </div>

  Grid Auto Rows Exercise
  <div class="exercise">
    <p>Exercise: Create a dynamic grid with auto-sized rows.</p>
    <button onclick="toggleSolution('grid-auto-rows')">Show Solution</button>
    <div id="grid-auto-rows" class="solution">
      <div class="grid-auto-rows-container">
        <div class="grid-auto-rows-item">Item 1</div>
        <div class="grid-auto-rows-item">Item 2</div>
        <div class="grid-auto-rows-item-large">Item spanning two columns</div>
        <div class="grid-auto-rows-item">Item 3</div>
        <div class="grid-auto-rows-item">Item 4</div>
      </div>
    </div>
  </div>

  Flex Wrap Exercise
  <div class="exercise">
    <p>Exercise: Use Flexbox to wrap child elements when overflowing.</p>
    <button onclick="toggleSolution('flex-wrap')">Show Solution</button>
    <div id="flex-wrap" class="solution">
      <div class="flex-wrap-container">
        <div class="flex-wrap-box">Box 1: This box will wrap</div>
        <div class="flex-wrap-box">Box 2: This box will wrap</div>
        <div class="flex-wrap-box">Box 3: This box will wrap</div>
        <div class="flex-wrap-box">Box 4: This box will wrap</div>
        <div class="flex-wrap-box">Box 5: This box will wrap</div>
        <div class="flex-wrap-box">Box 6: This box will wrap</div>
      </div>
    </div>
  </div>

  Grid Named Areas Exercise
  <div class="exercise">
    <p>Exercise: Use Grid named areas to position elements.</p>
    <button onclick="toggleSolution('grid-named-areas')">Show Solution</button>
    <div id="grid-named-areas" class="solution">
      <div class="grid-named-areas-container">
        <div class="grid-header">Header: Positioned using Grid named areas</div>
        <div class="grid-sidebar">Sidebar: Positioned using Grid named areas</div>
        <div class="grid-content">Content: Positioned using Grid named areas</div>
      </div>
    </div>
  </div>

  <script>
    function toggleSolution(id) {
      var solution = document.getElementById(id);
      solution.style.display = solution.style.display === 'none' ? 'block' : 'none';
    }
  </script>
</body>

</html>
```

</p>
</details>-->

## Let's talk about Units
Zoals al eerder vermeld bestaan er verschillende soorten units in HTML/CSS, maar waarvoor gebruik je welke unit nu het beste? Hieronder vind je een aantal tips. 

Maar eerst volgt er nog een kleine uitleg over de abstracte unit **pixel** of `px`. Er bestaat namelijk wel wat verwarring op het internet over wat hoe groot `1px` juist is. Allereerst is het de kleinste unit die je kan gebruiken, maar hoe groot is het juist. We gaan geen exacte meting meegeven maar vertellen je wel waarvoor de pixel dient. De pixelgrootte is verschillend voor verschillende schremgrootten en met goede reden. De grootte van de pixel heeft te maken met de aangeraden kijkafstand ten opzichte van het scherm. De pixel unit zorgt er namelijk voor dat `10px` op een klein scherm er even groot zou moeten uitzien als `10px` op een groot scherm wanneer je rekening houd met de kijkafstand tot de twee schermen. In werkelijkheid is `10px` op het grote scherm groter, maar als je op de correcte afstand van het scherm zit zouden de groottes overeen moeten komen. Dit maakt de **pixel** de ideale basis unit voor je design. 

<figure>
<img src="/img/pixel_unit.png" alt="drawing" style="min-width: auto;"/>
<figcaption>Schema werking pixel unit <a href="https://fantasai.inkedblade.net/style/specs/css2.1/px-unit">bron</a></figcation>
</figure>

### Browser default font-size
De browser default font-size is `16px` voor de meeste moderne browsers. Gebruikers kunnen dit echter aanpassen naar hun accessibility noden. Daarom is het belangrijk specifieke absolute font-sizing te vermijden. Op die manier blijven de accessibility features bruikbaar.

Gebruik daarom steeds de `rem` unit om font-size mee te geven zodat alles mee scaled met de default waarde gebruikt door browser. We gebruiken `rem` omdat die steeds relatief is t.o.v. de root font-size. `em` is scaling t.o.v. de eigen parent maar dit kan snel de leesbaarheid van je code vermideren. De `em` unit is wel handig om bijvoorbeeld breedte, hoogte, padding, margins ... van een element in te stellen omdat je op die manier je grootte baseerd op font-size van zijn content. 

### % vh vw
- **Percentage** units zijn altijd relative t.o.v. hun parent. 
- **Viewport** units zijn altijd relative t.o.v. de schermgrootte.

Met `vh` kan je er bijvoorbeeld voor zorgen dat content steeds 80% van de hoogte van je scherm inneemt (`min-height: 80vh;`). 
**Let op** wanneer je een `vw` van 100 gebruikt, aangezien de viewport geen rekening houd met scrollbars, zal je bij 100 altijd een zeer kleine "irritante" horizontale scrollbar krijgen.

### ch
Een laatste unit die je voor een specifiek geval kan gebruiken is de `ch` (of character width) unit. Een bepaalde design filosofie stelt dat het een good practice is om textcontainers niet breder te maken dan 60 karakters. Door de styling `max-width: 60ch;` toe te passen, wordt automatisch deze good practice toegepast.


**99% van de tijd zal je dus enkel met de hierboven vermelde units werken**

_Voorbeeld zie [demo 4](#demo-4-units)_

## Media Queries

<figure>
<img src="/img/mediaQuery_syntax.jpg" alt="drawing" style="height:auto;"/>
<figcaption>Media query syntax <a href="https://dev.to/codewithtee/css-media-queries-16mj">bron</a></figcation>
</figure>

- **Media-type**: kies tussen `screen`, `print`, `speech` of `all` (default)
- **Expression to test**: verschil `min-width`, `max-width`. Wanneer je je website voor desktop designed dan gebruik je media queries met `max-width` om ze ook responsive te maken op kleinere viewports. Vice versa als je je website designed voor mobile, gebruik dan `min-width` op responsive te zijn op grotere viewports.
- **Conditional CSS**: style je elementen zoals ze er moeten uitzien op de gequeriede media.

_Je kan dus voor veel verschillende screen sizes custom CSS schrijven._

Voorbeeld:
```CSS
@media (min-width: 500px){
  html {
    color: red;
  }
}
```

_Voorbeeld zie [demo 5](#demo-5-media-query)_

### Extra media queries

Je kan ook verschillende CSS files gebruiken om de verschillende layouts te definiëren. Via het `<link>` element kan je dan alle CSS bestanden laten laden bij de verschillende omstandigheden:

```html
<!-- Load in `portrait-screen.css` when screen is in portrait mode -->
<link rel="stylesheet" media="screen and (orientation: portrait)" href="portrait-screen.css"/>
```

Je kan hetzelfde breiken met imports in je `main.css` file:

```css
@import url("portrait-screen.css") screen and (orientation: portrait);
```

Je kan media queries ook **inverteren** met behulp van het keyword `not`:
```CSS
@media not (orientation: portrait) { ... }
```
Je kan media queries ook **combineren** met behulp van het keyword `and`:
```CSS
@media screen and (orientation: portrait) and (min-width: 500px) { ... }
```

_Voorbeeld zie [demo 6](#demo-6-media-queries)_

**Lijst met veelgebruikte eigenschappen waar media queries op kunnen testen**:
- `width`: The viewport width.
- `height`: The viewport height.
- `orientation`: This capability checks whether a device is portrait or landscape in orientation.
- `aspect-ratio`: The ratio of width to height based on the viewport width and height. A
16:9 widescreen display can be written as aspect-ratio: 16/9.
- `color`: The number of bits per color component. For example, min-color: 16 will check
that the device has 16-bit color.
- `color-index`: The number of entries in the color lookup table (the table is how a device
changes one set of colors to another) of the device. Values must be numbers and cannot
be negative.
- `monochrome`: This capability tests how many bits per pixel are in a monochrome frame
buffer. The value would be a number (integer), for example, monochrome: 2, and cannot
be negative.
- `resolution`: This capability can be used to test screen or print resolution; for example,
min-resolution: 300dpi. It can also accept measurements in dots per centimeter; for
example, min-resolution: 118dpcm.
74 Media Queries and Container Queries
- `scan`: This can be either progressive or interlace, features largely particular to TVs. For
example, a 720p HD TV (the “p” part of 720p indicates “progressive”) could be targeted
with scan: progressive, while a 1080i HD TV (the “i” part of 1080i indicates "interlaced")
could be targeted with scan: interlace.
- `grid`: This capability indicates whether or not the device is grid orbitmap-based.
- `prefers-color-scheme`: The theme selected by the user in the browser settings ("light" or dark).

_Alle bovenstaande functies, met uitzondering van scan, raster en prefers-color-scheme, kunnen voorafgegaan worden door `min-` of `max-` om
bereiken te maken._

## Workflow

**Workflow versie 1**: ontwerp je website voor een specifieke viewport, maar laat zo veel mogelijk aan de defaults van de browser over. Test daarna voor andere viewports en pas eventueel je CSS code aan zodat ze automatisch meer responsive is. Schrijf ten slotte scpecifieke media queries voor die dingen die niet automatisch aangepast kunnen worden.

**Workflow versie 2**: Bepaal op voorhand een aantal media query breakpoints (XL, L, M, S, XS) en maak elk ervan responsive.

## UI design mock ups

Wanneer je start aan het ontwerp van je website is HTML-code schrijven niet de eerste stap. In de eerste plaats ga je nadenken **wat** je wil bereiken met je website, **wie** je wil bereiken met je website. Al je design keuzes moeten een antwoord geven op die vraag. In de eerste plaats ga je nadenken over wat de **content** van je website gaat zijn (wat moet er allemaal op mijn website beschikbaar zijn, wat zijn de functionaliteiten). Ten tweede ga je proberen die content op de beste manier te **presenteren**. Voor deze laatste stap kan je gebruik maken van een UI design tool. Daarmee kan je snel UI mock ups maken die je dan als referentie kan gebruiken bij het implementeren van je website. 

Bekende voorbeelden van zo een design tools zijn: [Figma](https://www.figma.com/ui-design-tool/) (free), [Sketch](https://www.sketch.com/pricing/), [Invision](https://www.invisionapp.com/), [Adobe XD](https://helpx.adobe.com/be_nl/xd/get-started.html), [Proto](https://proto.io/) ...


## Other practical responsive tips

- Gebruik container utility classes om je media queries simpel te structureren. (eventueel met max-width container gelijk aan min-width van query)
- Snapping vs resizing (eigen keuze)
- Maak `img` responsive met `display: block ; max-width: 100%;`
- Gebruik `min-height` i.p.v. `height` (idem `max-width` and `width`)
- Center met `margin-left: auto ; margin-right: auto;`
- Pas geen CSS aan dat niet nodig is. Zo behoud je het default gedrag opgelegd door de browser.
- `Width: auto;` werkt soms beter dan `width: 100%;`
- Zet de `flex-wrap` property op `wrap`, wanneer je een flexbox gebruikt.
- Vermijd media-queries waar mogelijk. (uitzondering bv. echt grote layout wijzigingen voor andere schermtypes)

<!-- TODO ## Easy dark mode example the right way
Een goede manier om een darkmode toe te voegen aan je website is gebruik te maken van CSS-variabelen voor je kleurenpallet. Dit is echter niet voldoende aangezien sommige HTML-elementen dan nog niet de correcte styling hebben. Hiervoor moeten we dus ook de color-scheme zelf aanpassen.
```html
html {
  color-scheme: dark light;
}
```

_Voorbeeld zie [demo 7](#demo-3-light-dark-theme)_ -->

<!-- TODO ## Simple interactive design example

_Voorbeeld zie [demo 8](#demo-8-interactive-example)_ -->

## [Opdrachten](https://github.com/KULeuven-Diepenbeek/fsweb-demos-exercises-student/)

**Update je portfolio website**
1. Maak een keuze of je je website ontwikkeld voor desktop first of mobile first. En voeg de [clean slate code](#starting-fresh) toe bovenaan je CSS. (Pas nu dan eventuele padding/margins toe op de juiste plaatsen)
2. Bepaal 5 sizes waarvoor je media queries gaat schrijven en maak correct gebruik van min- of max-width op basis van je keuze in opdracht 1.
3. Gebruik flexboxes waar nodig.
4. Gebruik grid om de globale layout van je webpagina te bepalen. Tips voor layouts vind je [hier](/content/Frontend/html_basics.md#common-website-layouts)
5. Voorzie een checkbox en gebruik variables, CSS en javascript om een darkmode toe te voegen.
6. Animeer je navigatiebar en voeg en de checkbox toe om te switchen tussen light- en darkmode.
7. Experimenteer met een UI/UX tool. (Maak jouw ideale portfolio website in deze tool. Maak een mock up voor desktop en mobile)
<!-- https://www.figma.com/file/VqBqi98Ftkuts26CIMu3YH/Figma-basics?type=design&node-id=1669-162202&mode=design&t=rLbw3b4bzB9dkwnf-0 -->

## Demos

#### Demo 1: positioning
<details closed>
<summary><i><b> Klik hier om de code te zien/verbergen</b></i>🔽</summary>
<p>

In de demo staat voor het gemak alle HTML, CSS en eventuele JavaScript in één HTML-bestand.

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Design Demo: positioning</title>
  <style>
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    * {
      padding: 0;
      margin: 0;

    }

    :root {
      --item-size: 100px;
    }

    body {
      height: 200vh;
      padding: 20px;
      /* tegen de overflow van item5 */
      overflow-x: hidden;
    }

    .container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      row-gap: 20px;
      gap: 20px;

      background-color: aquamarine;
      padding: 10px;

      /* item 5 nu relative */
      /* position: relative; */

    }

    .item {
      width: var(--item-size);
      height: var(--item-size);
      background-color: lightblue;
      border: solid blue;
      border-radius: 10%;
      text-align: center;
      padding-top: 20px;
    }

    /* Item 5 "verwijderd" uit document */
    /* .item5 {
      position: absolute;
      top: 0px;
      right: -30px;
      z-index: 1;
    } */

    /* Item 1 blijft in normal flow document */
    /* .item1 {
      position: relative;
      top: 10px;
      left: 20px
    } */

    /* Item 2 fixed doorheen scroll */
    /* .item2 {
      position: fixed;
      top: 0px;
      left: 0px;
      width: 100%;
      border-radius: 0%;
      border: none;
      height: 10vh;
    } */

    /* Item 3 sticky */
    /* .item3 {
      position: sticky;
      top: 10px;
      right: 0px;
    } */
  </style>
</head>

<body>
  <div class="container">
    <div class="item item1">item1</div>
    <div class="item item2">item2</div>
    <div class="item item3">item3</div>
    <div class="item item4">item4</div>
    <div class="item item5">item5</div>
    <div class="item item6">item6</div>
    <div class="item item7">item7</div>
    <div class="item item8">item8</div>
    <div class="item item9">item9</div>
  </div>
</body>

</html>
```

</p>
</details>

#### Demo 2: flexbox
<details closed>
<summary><i><b> Klik hier om de code te zien/verbergen</b></i>🔽</summary>
<p>

In de demo staat voor het gemak alle HTML, CSS en eventuele JavaScript in één HTML-bestand.

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Design Demo: flexbox</title>
  <style>
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    * {
      padding: 0;
      margin: 0;

    }

    :root {
      --item-size: 100px;
    }

    body {
      height: 200vh;
      padding: 20px;
    }

    .item {
      width: var(--item-size);
      height: var(--item-size);
      background-color: lightblue;
      border: solid blue;
      border-radius: 10%;
      text-align: center;
      padding-top: 20px;
    }

    .container {
      background-color: aquamarine;
      padding: 10px;
      height: 90vh;

      display: flex;
      /* flex-direction: column; */

      justify-content: flex-start;
      align-items: flex-start;

      /* flex-wrap: wrap; */
      align-content: flex-start;

      /* gap: 1em; */
    }

    .item.item1 {
      /* font-size: 2em; */
      flex-grow: 1;
      /* flex-shrink: 5; */
      /* flex-basis: 300px; */

      /* flex: 1; */

      /* align-self: center; */
      /* order: 2; */
    }

    .item.item2 {
      flex-grow: 2;
    }

    .item.item3 {
      flex-grow: 1;
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="item item1">item1</div>
    <div class="item item2">item2</div>
    <div class="item item3">item3</div>
    <!-- <div class="item item4">item4</div>
    <div class="item item5">item5</div>
    <div class="item item6">item6</div>
    <div class="item item7">item7</div>
    <div class="item item8">item8</div>
    <div class="item item9">item9</div> -->
  </div>
</body>

</html>
```

</p>
</details>

#### Demo 3: grid
<details closed>
<summary><i><b> Klik hier om de code te zien/verbergen</b></i>🔽</summary>
<p>

In de demo staat voor het gemak alle HTML, CSS en eventuele JavaScript in één HTML-bestand.

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Design Demo: grid</title>
  <style>
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    * {
      padding: 0;
      margin: 0;

    }

    :root {
      --item-size: 100px;
    }

    body {
      /* height: 200vh; */
      padding: 20px;
    }

    .item {
      background-color: lightblue;
      border: solid blue;
      border-radius: 10%;
      text-align: center;
      padding-top: 20px;
    }

    .container {
      background-color: aquamarine;
      padding: 10px;
      display: grid;
      grid-template-rows: repeat(3, 100px);
      grid-template-columns: 100px 100px 100px;
      /* grid-template-columns: 1fr 20% 1fr; */
      /* grid-gap: 1em 2em; */

      grid-template-areas:
        'header header header'
        '1 1 1'
        'vak7 vak8 vak9';
    }

    .item.item1 {
      /* grid-row-start: 1;
      grid-row-end: 2; */

      /* grid-column-start: 1;
      grid-column-end: 4; */
      /* grid-column: 1/4; */

      grid-area: header;
      z-index: 2;
    }

    .item.item2 {
      grid-row: span 2;
      grid-column: span 2;
      justify-self: flex-end;
      align-self: stretch;

    }

    .item.item3 {
      grid-area: 2 / 3 / 4 / 4;
      /*rowstart, columnstart, rowend, columnend*/
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="item item1">item1</div>
    <div class="item item2">item2</div>
    <div class="item item3">item3</div>
  </div>
</body>

</html>
```

</p>
</details>

#### Demo 4: units
<details closed>
<summary><i><b> Klik hier om de code te zien/verbergen</b></i>🔽</summary>
<p>

In de demo staat voor het gemak alle HTML, CSS en eventuele JavaScript in één HTML-bestand.

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Design Demo: units</title>
  <style>
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    * {
      padding: 0;
      margin: 0;
    }

    /* chrome://settings/fonts */
    html {
      /* font-size: 24px; */
    }

    .container {
      background-color: lightgray;
      /* margin-left: auto;
      margin-right: 10px;
      margin-top: 10px;
      margin-bottom: 10px;
      padding: 0.3em; */
      /* max-width: 400px; */
    }

    h1 {
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 0.5em;
      width: fit-content;
      border: solid purple;
      font-size: 2rem;
    }

    p {
      border: solid blue;
      font-size: 1rem;
      margin-left: auto;
      margin-right: auto;
      width: 60ch;
      /*500px, 80% , 80vw , 60ch*/
    }
  </style>
</head>

<body>
  <div class="container">
    <h1>Header</h1>
    <p>
      Veniam aliqua exercitation dolore eiusmod aliquip et ad nulla aliquip quis. Quis ullamco quis sint proident veniam culpa id tempor pariatur. Ad
      nisi aliquip magna ullamco sit deserunt elit eu nisi. Irure cillum nostrud nisi exercitation in. Cupidatat ex anim id pariatur aliqua tempor
      consequat nostrud reprehenderit ad reprehenderit ea nostrud commodo. Voluptate qui nulla ea eiusmod commodo proident. Quis non esse ullamco
      tempor.
    </p>
  </div>
</body>

</html>
```

</p>
</details>

#### Demo 5: media query
<details closed>
<summary><i><b> Klik hier om de code te zien/verbergen</b></i>🔽</summary>
<p>

In de demo staat voor het gemak alle HTML, CSS en eventuele JavaScript in één HTML-bestand.

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Design Demo: media query</title>
  <style>
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    padding: 0;
    margin: 0;
  }

  .container {
    background-color: lightgray;
    margin: 10px;
    padding: 0.3em;
    max-width: 400px;
  }

  h1 {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0.5em;
    width: fit-content;
    border: solid purple;
    font-size: 2rem;
  }

  p {
    border: solid blue;
    font-size: 1rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
    margin-top: 1rem;
    width: 80%;
    /*500px, 80% , 80vw , 60ch*/
  }

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 200px;
  }

  @media (min-width:636px) {
    img {
      position: absolute;
      top: 75px;
      right: 60px;
      width: calc(100% - 420px);
      max-width: 200px;
    }
  }
  </style>
</head>

<body>
  <div class="container">
    <h1>Header</h1>
    <img src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png">
    <p>
      Veniam aliqua exercitation dolore eiusmod aliquip et ad nulla aliquip quis. Quis ullamco quis sint proident veniam culpa id tempor pariatur. Ad
      nisi aliquip magna ullamco sit deserunt elit eu nisi. Irure cillum nostrud nisi exercitation in. Cupidatat ex anim id pariatur aliqua tempor
      consequat nostrud reprehenderit ad reprehenderit ea nostrud commodo. Voluptate qui nulla ea eiusmod commodo proident. Quis non esse ullamco
      tempor.
    </p>

  </div>
</body>

</html>
```

</p>
</details>

#### Demo 6: media queries
<details closed>
<summary><i><b> Klik hier om de code te zien/verbergen</b></i>🔽</summary>
<p>

In de demo staat voor het gemak alle HTML, CSS en eventuele JavaScript in één HTML-bestand.

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Design Demo: media queries</title>
  <style>
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    * {
      padding: 0;
      margin: 0;
    }

    .container {
      background-color: lightgray;
      margin: 10px;
      padding: 0.3em;
      max-width: 400px;
    }

    h1 {
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 0.5em;
      width: fit-content;
      border: solid purple;
      font-size: 2rem;
    }

    p {
      border: solid blue;
      font-size: 1rem;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 1rem;
      margin-top: 1rem;
      width: 80%;
      /*500px, 80% , 80vw , 60ch*/
    }

    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 200px;
    }

    @media (min-width:636px) {
      .container {
        max-width: 100%;
      }

      .wrapper {
        display: flex;
        gap: 10px;
      }
    }
  </style>
</head>

<body>
  <div class="container">
    <h1>Header</h1>
    <div class="wrapper">

      <p>
        Veniam aliqua exercitation dolore eiusmod aliquip et ad nulla aliquip quis. Quis ullamco quis sint proident veniam culpa id tempor pariatur.
        Ad
        nisi aliquip magna ullamco sit deserunt elit eu nisi. Irure cillum nostrud nisi exercitation in. Cupidatat ex anim id pariatur aliqua tempor
        consequat nostrud reprehenderit ad reprehenderit ea nostrud commodo. Voluptate qui nulla ea eiusmod commodo proident. Quis non esse ullamco
        tempor.
      </p>
      <img src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png">
    </div>

  </div>
</body>

</html>
```

</p>
</details>

<!-- TODO 
#### Demo 7: light dark theme
<details closed>
<summary><i><b> Klik hier om de code te zien/verbergen</b></i>🔽</summary>
<p>

In de demo staat voor het gemak alle HTML, CSS en eventuele JavaScript in één HTML-bestand.

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Design Demo: light dark theme</title>
  <style>
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    * {
      padding: 0;
      margin: 10px;
    }

    /* :root {
      --base: lightgrey;
      --text: black;
    }

    @media (prefers-color-scheme: dark) {
      :root {
        color-scheme: dark;
        --base: black;
        --text: lightgrey;
      }
    } */

    html {
      /* color-scheme: light dark; */
    }

    [data-theme="light"] {
      color-scheme: light;
      --base: lightgrey;
      --text: black;
    }

    [data-theme="dark"] {
      color-scheme: dark;
      --base: black;
      --text: lightgrey;
    }

    body {
      padding: 20px;
      color: var(--text);
      background-color: var(--base);
    }

    p {
      height: 200px;
      width: 400px;
      overflow-y: scroll;
    }
  </style>
</head>

<body>
  <h1>Dark or light</h1>
  <input type="checkbox" checked data-theme="light" name="themeswitcher" id="themeswitcher">
  Select for darkmode.<br />
  Example imput
  <input type="text">
  <p>Irure ex mollit dolore nostrud ut. Consectetur proident velit sint et. Laborum nisi magna culpa ipsum anim tempor do aute minim ut ea ut officia
    do. Et nulla et voluptate id. Labore nostrud sit amet excepteur laborum laboris dolore reprehenderit veniam ipsum mollit quis
    dolor.<br /><br />Irure ex
    mollit dolore nostrud ut. Consectetur proident velit sint et. Laborum nisi magna culpa ipsum anim tempor do aute minim ut ea ut officia
    do. Et nulla et voluptate id. Labore nostrud sit amet excepteur laborum laboris dolore reprehenderit veniam ipsum mollit quis
    dolor.<br /><br />Irure ex
    mollit dolore nostrud ut. Consectetur proident velit sint et. Laborum nisi magna culpa ipsum anim tempor do aute minim ut ea ut officia
    do. Et nulla et voluptate id. Labore nostrud sit amet excepteur laborum laboris dolore reprehenderit veniam ipsum mollit quis
    dolor.<br /><br />Irure ex
    mollit dolore nostrud ut. Consectetur proident velit sint et. Laborum nisi magna culpa ipsum anim tempor do aute minim ut ea ut officia
    do. Et nulla et voluptate id. Labore nostrud sit amet excepteur laborum laboris dolore reprehenderit veniam ipsum mollit quis dolor.</p>

  <script>
    const themeSwitcher = document.querySelector("#themeswitcher");

    themeSwitcher.addEventListener("change", () => {
      if (themeSwitcher.checked === false) {
        document.documentElement.setAttribute("data-theme", "light");
      }
      if (themeSwitcher.checked === true) {
        document.documentElement.setAttribute("data-theme", "dark");
      }
    });

  </script>
</body>

</html>
```

</p>
</details>

#### Demo 8: interactive example
<details closed>
<summary><i><b> Klik hier om de code te zien/verbergen</b></i>🔽</summary>
<p>

In de demo staat voor het gemak alle HTML, CSS en eventuele JavaScript in één HTML-bestand.

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Design Demo 1: units</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <style>
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    * {
      padding: 0;
      margin: 0;
    }

    @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

    :root {
      --bgColor: #1F3B4D;
      --darkColor: #24262b;
      --secColor: #F1F1E6;
      --highlightColor: #00C6B1;
      --fontColor: #F0FBFF;
      --headerheight: 45px;
    }

    body {
      font-family: "Open Sans", sans-serif;
      background-color: var(--bgColor);
    }

    /* Navigation menu */
    nav {
      height: 90vh;
      position: fixed;
      left: 0;
      top: var(--headerheight);
      width: 250px;
      transform: translateX(-250px);
      transition: transform 250ms ease-in-out;
      background: linear-gradient(180deg, var(--bgColor) 0%, #009FF5 100%);
    }

    nav ul {
      list-style: none;
      border-top: 1px solid rgba(255, 255, 255, 0.10);
    }

    nav ul li {
      color: #fff;
      font-weight: bold;
      padding: 20px;
      cursor: pointer;
      border-bottom: 1px solid rgba(255, 255, 255, 0.10);
    }

    nav ul li a {
      color: #fff;
      text-decoration: none;
    }

    /* Menu checkbox */
    input[type=checkbox].openSidebarMenu {
      transition: all 0.3s;
      position: fixed;
      top: 20px;
      left: 20px;
      /*style your checkbox*/
      -webkit-appearance: none;
      background-color: var(--highlightColor);
      padding: 3px 9px;
      border-radius: 3px;
      display: inline-block;
    }

    input[type="checkbox"].openSidebarMenu:checked~nav {
      transform: translateX(0);
    }

    /* Styling header */
    header {
      background-color: var(--bgColor);
      padding: 5px 5px 5px 5px;
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      height: var(--headerheight) !important;
      display: flex;
    }

    .header-right {
      margin-left: auto;
      margin-right: 24px;
    }

    header a {
      color: var(--secColor);
      padding: 4px;
      font-size: 1rem;
      border-radius: 8px;
      margin-right: 3px;
      margin-top: 3px;
    }

    header a:hover {
      background-color: var(--secColor);
      color: black;
    }

    header a.active {
      background-color: var(--highlightColor);
      color: white;
    }

    /*Main*/
    main {
      background-color: var(--secColor);
      border-radius: 4px;
      min-height: 90vh;
      color: black;
      padding: 20px 10px;
      margin-top: var(--headerheight);
      margin-left: 24px;
      margin-right: 24px;
    }
  </style>
</head>

<body>
  <header>
    <div class="header-right">
      <a href="">Home</a>
      <a href="">Contact</a>
      <a href="">About</a>
    </div>
  </header>
  
  <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu">
  <nav>
    <ul>
      <li>Arne Duyver</li>
      <li><a href="" target="_self"><i class="fa fa-info"></i> Directories</a></li>
      <li><a href="" target="_self"><i class="fa fa-gear"></i> Settings</a></li>
    </ul>
  </nav>
  
  <main>
    <h1>My super awesome website</h1>
    <p>Reprehenderit labore elit ea nisi exercitation commodo mollit amet proident. Duis quis dolore tempor eiusmod officia nulla adipisicing proident
      occaecat. Minim laborum consequat quis culpa. Aute labore duis irure ullamco nostrud sint velit. Nulla esse reprehenderit nostrud dolore ex
      exercitation.
    </p>
    <br />
    <p>
      Eu mollit consequat ullamco esse. Dolore labore Lorem duis velit ipsum ad consectetur ipsum voluptate reprehenderit tempor id aute. Non esse
      culpa occaecat est proident eu officia dolor reprehenderit. Ipsum irure cupidatat cupidatat consequat magna excepteur cupidatat est. Eiusmod
      irure ut commodo eiusmod. Ex nulla exercitation commodo adipisicing sunt deserunt ex commodo non.
    </p>
  </main>

</html>
```

</p>
</details>

END TODO -->