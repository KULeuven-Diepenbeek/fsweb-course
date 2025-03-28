---
title: "CSS"
weight: 2
author: Arne Duyver
draft: false
---

_bron 1: HTML, CSS, Bootstrap & Blade. Vormgeving in Laravel. Cursus: Cloud Computing & Toepassingen - 2020/2021 - Kris Aerts_</br>
_bron 2: Responsive Web Design with HTML5 and CSS - 4th edition - Ben Frain_</br>
_bron 3: [W3Schools](https://www.w3schools.com/html/default.asp)_

## Cascading Style Sheet
HTML alleen maakt een website niet visueel aantrekkelijk. CSS is dan nodig voor de vormgeving. Met CSS-regels kun je ontwerpen hoe de afzonderlijke componenten die je eerder in HTML hebt gedefinieerd, moeten worden weergegeven. Je kan CSS dus gebruiken om het ontwerp en de lay-out van een webpagina te definiëren. Je kan bijvoorbeeld tekstkleuren, tekstgroottes, randen, achtergrondkleuren, kleurverlopen enzovoort definiëren.

Vooraleer we dit doen en de algemene regels bespreken, willen we wel vermelden dat we slechts een beperkt deel van CSS zien. Het doel van deze cursus is enkel individuele pagina’s toch wat vormgeving te kunnen geven zodat we op zijn minst wat accenten kunnen leggen en de verschillende onderdelen van een webpagina kunnen positioneren. We gaan geen professioneel ogende sites maken met complexe layoutschema’s of uitgebreide websites met uitgebreide navigatie. Daarom mag en zal onze portie CSS relatief beperkt blijven.

### CSS definiëren op verschillende niveaus
CSS kan op verschillende manieren worden gedefinieerd: in een apart `CSS`-bestand, in de `<head>` van je HTML-document, of inline in de open-tag van een `HTML`-element. Elk van deze methoden heeft zijn eigen voor- en nadelen, afhankelijk van de situatie en het doel van de styling.

**Een apart CSS bestand**<br>
Het gebruik van een apart CSS-bestand is de meest gebruikelijke en aanbevolen methode. Dit zorgt voor een _duidelijke scheiding tussen de structuur (HTML) en de opmaak (CSS)_, wat de _leesbaarheid_ en _onderhoudbaarheid_ van de code bevordert. Bovendien kunnen meerdere HTML-pagina's dezelfde CSS-bestand gebruiken, wat consistentie in de styling garandeert en de laadtijd van de website kan verbeteren door caching. 
<br>Je gebruikt hiervoor het `<link\>`-element in de `head` van je HTML-bestand. Als `href`-attribuut geef je het pad naar je `.css`-bestand mee:
```html
<head>
    <link rel="stylesheet" href="mystyle.css">
</head>
```

**In het HTML-element `<style>` in de `head` van je HTML-bestand**<br>
Het definiëren van CSS in de `<head>` van een HTML-document, ook wel interne of embedded CSS genoemd, kan handig zijn voor _kleinere projecten_ of wanneer _specifieke stijlen alleen voor een enkele pagina gelden_. Dit kan echter de leesbaarheid van de HTML-code verminderen en maakt het moeilijker om stijlen te hergebruiken op andere pagina's.
```html
<head>
    <style>
      /*Write your CSS code here*/
    <style>
</head>
```

_Met `/*` en `*/` kan je commentaar schrijven bij je CSS-code. Bv. `/* Dit is een CSS comment*/`_

**Inline CSS: het `style`-attribuut**<br>
Met inline CSS wordt de styling direct in de open-tag van een HTML-element geplaatst. Dat kan nuttig zijn voor _snelle, eenmalige aanpassingen_ of voor het toepassen van _unieke stijlen op specifieke elementen_. Deze methode wordt echter over het algemeen afgeraden omdat het de HTML-code rommelig maakt en de scheiding tussen structuur en opmaak vervaagt. Bovendien is inline CSS moeilijker te onderhouden en te updaten.
```html
<htmlElement style="property1:value1 ; property2:value2;">
  ...
</htmlElement>
```

{{% notice info %}}
Met een goede code-editor krijg je vaak hints over welke css-properties en corresponderende values allemaal mogelijk zijn. Dat versnelt de productie significant.
{{% /notice %}}

De plaats van het definiëren van de CSS-code is dus een afweging tussen de specificiteit, leesbaarheid, onderhoudbaarheid en herbruikbaarheid van de code

### Syntax 
Een CSS-rule (CSS-regel) bestaat steeds uit een **selector** en één of meerdere **declaraties**. De declaraties moeten tussen accolades geplaatst worden: `{` en `}`. Elke declaratie bestaat op zijn beurt uit een **property** gevolgd door een `:`, een geschikte **value** en wordt afgesloten met een `;`.
<img src="/img/css_syntax.png" alt="drawing" style="max-height: 10rem;"/>

### Selectors, Pseudo-classes en Pseudo-elements
Een selector is een patroon dat wordt gebruikt om HTML-elementen te selecteren die je wilt stylen. Je kan op verschillende manieren elementen selecteren, met behulp van:
- **een element selector** kan je alle HTML-elementen van een bepaald type selecteren en stylen. Bijvoorbeeld, de selector `p` selecteert alle paragraafelementen (`<p>`) op een webpagina. 
- **een klasse selector**: kan je all HTML-elementen van een bepaalde klasse selecteren en stylen. Bijvoorbeeld, de selector `.mijnKlasseNaam` selecteert alle elementen (`<element class="mijnKlasseNaam">`) op een webpagina.
- **een id selector**: kan je het HTML-element met een bepaalde id selecteren en stylen. Bijvoorbeeld, de selector `#mijnIdNaam` selecteert het element (`<element id="mijnIdNaam">`) op een webpagina.
- **een samengestelde/complexe selector**: bv. `li.belangrijk`. Dit betekent dat elke `li` met als klasse `belangrijk` de bijhorende vormgeving moet krijgen, en de andere `li`’s niet, evenmin als de elementen van klasse belangrijk die géén `li` zijn. Wanneer je een spatie laat tussen de combinatie, bv. `p .belangrijk`, betekent dit "met daarbinnen", dus elk element met klasse belangrijk binnen een `p` krijgt de vormgeving, maar andere elementen binnen `p` niet, evenmin als elementen met klasse belangrijk die niet binnen `p` staan.
  - **een attribuut selector**:  je kan dan ook nog dieper gaan selecteren op attributen (`[attribuut="waarde"]`). Bijvoorbeeld, de selector die de `<p>`-elementen selecteert die als waarde `yes` van het attribuut `mijnAttribuut` hebben ziet er als volgt uit: `p[mijnAttribuut=yes]`.
 
```css
elementName {...;}
.className {...;}
#idName {...;}
/*Dit is een comment*/

element:pseudo-classname {...;}
/*e.g.: a:hover{...;}*/

element::pseudo-elementname {...;} 
/*e.g.: h1:before{...;}*/

/*Attribute selectors*/
element[attribute] {...;}
element[attribute="value"] {...;}
element[attribute~="value"] {...;} /*contains specific words*/
element[attribute|="value"] {...;} /*specific value or followed by - */
element[attribute^="value"] {...;} /*starts with specific value*/
element[attribute$="value"] {...;} /*ends with specific value*/
element[attribute*="value"] {...;} /*contains a specified value*/
```

**Types of combinators:**
- descendant selector (space) specifies all descendants
- child selector (>) only goes one deep
- adjacent sibling selector (+) selects an element that is directly after another specific element.
- general sibling selector (~) selects all elements that are next siblings of a specified element.

### Margin, padding en outline
<img src="/img/margin_padding.png" alt="drawing" style="max-height: 10rem;"/>
<img src="/img/outline.png" alt="drawing" style="max-height: 10rem;"/>

### Sizing
- **Absolute**: `px`, `pt`, `pc`, `in`, `cm`, `mm`
- **Relative**: `%`, `em`, `rem`, `ex`, `ch`, `fr`
- **Viewport** (define in head): `vw`, `vh`, `vmin`, `vmax`

_We gaan in 99% van de gevallen enkel gebruik maken van `px`, `rem` en `%` (af en toe `em` relatief t.o.v. font-size eigen element)!!!_

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Positioning
- **Static**: An element with `position: static;` is not positioned in any special way; it is always positioned according to the normal flow of the page.
<br>Static positioned elements are not affected by the top, bottom, left, and right properties.
- **Relative**: An element with `position: relative;` is positioned relative to its normal position.
<br>Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position. Other content will not be adjusted to fit into any gap left by the element.
- **Fixes**: An element with `position: fixed;` is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. The top, right, bottom, and left properties are used to position the element.
<br>A fixed element does not leave a gap in the page where it would normally have been located.
- **Absolute**: An element with `position: absolute;` is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).
<br>Absolute positioned elements are removed from the normal flow, and can overlap elements.
- **Sticky**: An element with `position: sticky;` is positioned based on the user's scroll position.
<br>A sticky element toggles between `relative` and `fixed`, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed).

### List of usefull properties
```css
#elementId {
  background-color: red; /*rgb(255,0,0) , #FF0000, hsl(0, 100%, 50%) , rgba(255,0,0,0.5), hsla(0, 100%, 50%, 0.5)*/
  opacity: 0.3; /*Doorschijnbaarheid 0-1*/
  background-image: url("image.jpg");
  background-repeat: repeat-x; /*repeat-y, no-repeat*/
  background-position: right top;
  background-attachment: fixed; /*scroll*/

  border-style: dotted; /*dashed, solid, double, groove, ridge, inset, outset, none, hidden*/
  /*border-top-style, border-right-style, border-bottom-style, border-left-style*/
  border-width: 5rem; /*top right bottom left*/
  border-width: black;
  border-radius: 5px;

  margin: 10px; /*top right bottom left*/
  /*margin-top, margin-right, margin-bottom, margin-left*/
  padding: 10px; /*top right bottom left*/
  /*padding-top, padding-right, padding-bottom, padding-left*/

  height: 200rem;
  max-height: 20px;
  width: 80%; /*relative to parent*/
  max-width: 60ch;

  outline: 1px solid red; /*width style color*/
  outline-offset: 15px;

  color: black; /*Text color*/
  text-align: center; /*left, right, justify*/
  text-align-last: center; /*right, justify*/
  direction: rtl; /*ltr*/
  vertical-align: baseline; /*text-top, text-bottom, sub, super*/
  text-decoration-line: overline; /*line-through, underline, overline underline*/
  text-decoration-color: red;
  text-decoration-style: solid; /*double, dotted, dashed, wavy*/
  text-decoration-thickness: 5px;
  text-transform: uppercase; /*lowecase, capitalize*/
  text-indent: 5px; /*first line indent*/
  letter-spacing: -2px;
  line-height: 0.8;
  word-spacing: 5rem;
  white-space: nowrap;
  text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue; /*horizontal vertical blur color, ...*/
  font-family: "Times New Roman", Times, serif; /*desired, fallback1, fallback2*/
  font-style: normal; /*itallic, oblique*/
  font-weight: normal; /*bold*/
  font-size: 0.5rem;
  font-variant: normal; /*small-caps*/

  overflow-x: scroll; /*hidden, auto, visible*/
  overflow-y: scroll; /*hidden, auto, visible*/

  display: inline; /*block, inline-block, contents, flex, grid*/
  position: static; /*relative, fixed, absolute, sticky (to parent)*/
  bottom: 0;
  right: 0;
  z-index: -1; /*lower = further in background*/

  float: right; /*left, none, inherit*/
  /*in parent*/  clear: left; /*right, none, inherit*/

  box-sizing: content-box; /*border-box*/

  /*IF display: flex*/
  flex-direction: row; /*column, column-reverse, row-reverse*/
  flex-wrap: wrap; /*nowrap, wrap-reverse*/
  /*flex-flow: row wrap;*/ /*direction wrap*/
  justify-content: flex-start; /*center, flex-end, space-around, space-between*/
  align-items: stretch; /*baseline, flex-start, center, flex-end*/
  align-content: space-between; /*space-around, stretch, center, flex-start, flex-end*/

  /*IF display: grid*/

}

ul {
  list-style-type: circle; /*square, upper-roman, lower-alpha, none*/
  list-style-image: url('sqpurple.gif');
  list-style-position: outside; /*inside*/
}

table {
  border-collapse: collapse;
}

tr:nth-child(even) {background-color: #f2f2f2;}

input {
  outline: none;
}

a:link {...;}
a:visited {...;}
a:hover {...;}
a:active {...;}

/*COUNTERS*/
#containerElement {
  counter-reset: section;
}
element::before{
  counter-increment: section;
  content: "Section " counter(section) ": ";
}

```

<!-- TODO add flex-items and grid above -->

### Icons
```html
<script src="https://kit.fontawesome.com/yourcode.js" crossorigin="anonymous"></script> <!-- In the head -->
<i class="fas fa-cloud"></i>
```

### Text effects

**text-overflow**: hoe moet verborgen overflowing content weergegeven worden?
- clip
- ellipsis
_overflow moet hidden zijn (werkt niet vij overflow visible)_
```css
#textOverflow {
  text-overflow: clip;
  overflow: hidden;
}
#textOverflow2 {
  text-overflow: ellipsis;
  overflow: hidden;
}
```

**word-wrap**: om lange woorden op te breken en te wrappen naar de volgende regel
```css
#wordWrap {
  word-wrap: break-word;
}
```

**word-break**: hoe moeten lijnen text gebroken worden.
```css
#wordWrap {
  word-break: keep-all;
}
#wordWrap2 {
  word-break: break-all;
}
```

**writing-mode**: horizontaal of verticaal.
```css
#writingMode {
  writing-mode: horizontal;
}
#writingMode {
  writing-mode: vertical;
}
```

### Calculations
e.g.:
- `width: calc(100% - 100px);`
- `width: max(50%, 300px);`
- `width: min(50%, 300px);`

### CSS variables
```css
  :root {
    --blue: #1e90ff;
    --white: #ffffff;
  }
  
  body { background-color: var(--blue); }
```

### Extra

**Andere CSS files importeren in de `main.css`**
```css
@import url('./animations.css');
```
**Moet helemaal in het begin van je CSS-file staan**

**!important**: om alle andere styling te overschrijven.
```css
element {
  background-color: red !important;
}
```

**simple linear gradient**: gebruik `background-image` property en niet `background-color`. 
```css
#grad {
  background-image: linear-gradient(to right, red , yellow); /*direction, color-stop1, color-stop2, ...*/
}
```

**Divs, columns, User Interface**
```css
div {
  column-count: 3;
  column-gap: 40px;
  column-width: 100px;
  column-rule-style: solid;
  column-rule-width: 1px;
  column-rule-color: lightblue;
  /*element inside the div*/ column-span: all;

  resize: horizontal; /*vertical, both*/
  overflow: auto;
}
```

**img**:
```css
img {
  border-radius: 8px;
  opacity: 0.5;
  filter: grayscale(100%);
  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
  -webkit-box-reflect: below; /*above, left, right*/
  object-fit: cover; /*contain, fill, none, scale-down*/
  object-position: 80% 100%;
  -webkit-mask-image: url(img1.png);
  mask-image: url(img1.png);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}
```

## Opdrachten
1. Maak je footer fixed onderaan de pagina
2. Voeg een afbeelding van jezelf (of) een stockfoto toe aan je over mij sectie en zorg ervoor dat de afbeelding steeds rechts staat
3. Maak een nav sectie die 2 anchor elementen heeft: 1 voor de home page en een voor de contact page.
4. Gebruik volgende [bron](https://www.w3schools.com/css/css_navbar.asp) om je nav sectie te stijlen zodat je een verticale navigatie sectie hebt aan de linkerkant van je pagina die 100% van de hoogte in beslag neemt. 
5. Gebruik een input checkbox die je gefixed houd in de linkerboven hoek. Zorg ervoor dat je navigatie sectie verborgen wordt wanneer de checkbox niet is aangevinkt en getoond wordt wanneer je de checkbox aanduidt.
6. Gebruik volgende [bron](https://www.w3schools.com/css/css_form.asp) om je formulier in je contact pagina te stijlen..
7. Gebruik volgende [bron](https://www.w3schools.com/css/css_website_layout.asp) om de globale layout van je site te updaten.
8. Zorg al voor een responsive design door al je font-sizes aan te passen aan een vaste font-size die zich aanpast aan de grootte van de pagina.
9. Kies een leuke font voor je pagina en eventueel complementaire fonts voor speciale secties zoals quotes. (zorg ook voor fallback fonts)
10. Gebruik icons in plaats van tekst in je navigation sectie.
11. Geef je creativiteit de vrije loop om je site zo mooi mogelijk te maken.

## Test jezelf

Klik [hier](https://www.w3schools.com/css/css_quiz.asp) om jezelf te testen met de online HTML quiz van w3schools. Of klik [hier](https://www.w3schools.com/css/css_exercises.asp) voor wat extra oefeningen.

## Libraries en CDN
Je kunt **libraries** zoals CSS-frameworks toevoegen aan je websitecode om je ontwikkelproces te versnellen en consistente, professionele ontwerpen te creëren. Dit doe je door de benodigde bestanden te downloaden en lokaal op te slaan, waarna je ze via `<link>`-tags in de `<head>` van je HTML-document opneemt. Bijvoorbeeld, voor Bootstrap, een populaire CSS-library, zou je een link naar het gedownloade CSS-bestand toevoegen:
```html
<link rel="stylesheet" href="path/to/bootstrap.min.css">
```
Een eenvoudigere manier om libraries toe te voegen is via een **Content Delivery Network (CDN)**. CDNs hosten de bestanden van de library op servers over de hele wereld, waardoor je website sneller kan laden doordat de bestanden van een server dichtbij de gebruiker worden opgehaald. Om een library via een CDN toe te voegen, hoef je alleen maar een `<link>`-tag met de URL van de CDN op te nemen in je HTML-document. Voor Bootstrap zou dit er als volgt uitzien:
```html
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
```
Het gebruik van een CDN heeft als voordeel dat je geen bestanden lokaal hoeft op te slaan en te beheren, en dat de laadtijd van je website kan verbeteren door de geografische spreiding van de CDN-servers.

## Bootstrap
Met het beperkte stuk HTML en CSS dat we hierboven hebben behandeld, kun je functionele HTML-pagina's maken die met CSS worden gestyled. Veel ingenieurs zijn echter niet altijd bedreven in het creëren van aantrekkelijke layouts. Daarom kan het een goed idee zijn om gebruik te maken van kant-en-klare layouts en deze aan te passen naar je eigen smaak. Omdat er veel vraag is naar dergelijke oplossingen, zijn er verschillende frameworks ontwikkeld waarmee je de layout van webpagina's kunt instellen. Wij richten ons hier op Bootstrap, een simpel en beginnersvriendelijk framework voor responsive designs.

Bootstrap werkt door een verzameling van CSS- en JavaScript-componenten te voorzien die je kunt gebruiken om je webpagina's snel te stylen en functionaliteit toe te voegen via class names.
1. Voeg Bootstrap via CDN of link naar gedownloade bestanden toe aan je HTML-bestand.
2. Bootstrap biedt een breed scala aan vooraf ontworpen componenten zoals knoppen, formulieren, navigatiebalken en kaarten. Je kunt deze componenten eenvoudig in je HTML-code opnemen door de juiste **Bootstrap-classes** toe te voegen.

```html
...
    <div class="container mt-5">
        <!-- Bootstrap-knop -->
        <button type="button" class="btn btn-primary">Klik hier</button>
    </div>
...
```
3. Bootstrap heeft een krachtig **grid-systeem** waarmee je de layout van je pagina kunt structureren. Het grid-systeem is gebaseerd op **rows** en **columns**, en maakt het eenvoudig om responsieve layouts te creëren die zich aanpassen aan verschillende schermgroottes.
```html
...
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-4">
                <div class="p-3 border bg-light">Kolom 1</div>
            </div>
            <div class="col-md-4">
                <div class="p-3 border bg-light">Kolom 2</div>
            </div>
            <div class="col-md-4">
                <div class="p-3 border bg-light">Kolom 3</div>
            </div>
        </div>
    </div>
...
```
{{% notice info %}}
Hoewel Bootstrap veel standaardstijlen biedt, kun je deze altijd aanpassen door je **eigen CSS** toe te voegen of de bestaande Bootstrap-klassen te **overschrijven**.
{{% /notice %}}

Een aantal handige links:
- [Bootstrap documentatie](https://getbootstrap.com/docs/4.3/getting-started/introduction/)
- [w3schools tutorial](https://www.w3schools.com/bootstrap4/bootstrap_get_started.asp)
- [tutorialrepublic bootstrap](https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/bootstrap-get-started.php)