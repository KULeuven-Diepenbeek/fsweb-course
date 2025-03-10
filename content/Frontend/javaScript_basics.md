---
title: "JavaScript"
weight: 3
author: Arne Duyver
draft: false
---

_bron 1: Rich(er) client met Javascript: Cloud Computing & Toepassingen - 2020/2021 - Kris Aerts_</br>
_bron 2: Responsive Web Design with HTML5 and CSS - 4th edition - Ben Frain_</br>
_bron 3: [W3Schools](https://www.w3schools.com/html/default.asp)_


## JavaScript
Met HTML en CSS maak je in feite statische webpagina's in de zin dat de inhoud en de vormgeving vast zijn: de HTML en CSS blijven hetzelfde, ook wanneer je de pagina ververst. Als je bijvoorbeeld een klok wil maken waar de tijd live tickt en waar de achtergrond donkerder wordt naargelang de nacht valt, dan heb je nog iets extra nodig buiten HTML en CSS. Elke web-browser-bouwer kan hiervoor vrij een aantal talen kiezen, maar in de praktijk wordt énkel JavaScript (officieel ECMAscript) gebruikt.

Met JavaScript kan je direct reageren wanneer de gebruiker een veld van dat formulier invult, maar je kan ook veel andere dingen doen afhankelijk van de actie(s) van de gebruiker, tot zelfs volledige games spelen. Javascript zorgt er voor dat je allerlei dynamische effecten in webpagina's kan bekomen en hiermee verkrijg je volwaardige interactiviteit en dynamisch ogende webapplicaties.

JavaScript wordt dus gebruikt om interactie en dynamische functionaliteit aan je website toe te voegen. Het stelt ontwikkelaars in staat om webpagina's te manipuleren, gebruikersacties te verwerken en te communiceren met servers zonder de pagina opnieuw te laden. JavaScript is veelzijdig en wordt ondersteund door alle belangrijke webbrowsers. Het maakt deel uit van de frontend is vaak niet of minimaal aanwezig op statische websites.

Wat nog belangrijk is om te weten, is dat de JavaScript standaard (**ECMAScript**) beheerd wordt door _Ecma International_, vroeger ook wel de _European Computer Manufacturers Association (ECMA)_ genoemd. Een overzicht van de historische details zijn terug te vinden op de JS [wikipage](https://en.wikipedia.org/wiki/JavaScript).

{{% notice info %}}
We gaan er vanuit dat je al een basiskennis programmeren bezit. In deze sectie zoomen we vooral in op de interactie die JavaScript ons biedt met HTML-elementen en andere functionaliteiten die specifiek zijn voor het maken van websites.
{{% /notice %}}

### JavaScript is geen Java
Hoewel de namen vergelijkbaar zijn, zijn JavaScript en Java twee heel verschillende programmeertalen met verschillende toepassingen en eigenschappen. JavaScript is een scripttaal die voornamelijk wordt gebruikt voor het toevoegen van interactieve elementen aan webpagina's en het manipuleren van de DOM (Document Object Model). Het wordt direct in de browser uitgevoerd en is essentieel voor het creëren van dynamische en responsieve webapplicaties. Java daarentegen is een objectgeoriënteerde programmeertaal die vaak wordt gebruikt voor het ontwikkelen van server-side applicaties, mobiele apps (vooral Android), en enterprise-software. Java-code wordt gecompileerd naar bytecode die draait op de Java Virtual Machine (JVM), waardoor het platformonafhankelijk is. Ondanks de naamovereenkomst zijn de syntaxis, het gebruik en de onderliggende architectuur van JavaScript en Java dus fundamenteel verschillend.

De namen JavaScript en Java lijken op elkaar vanwege marketing en historische redenen. Toen JavaScript werd ontwikkeld door Brendan Eich bij Netscape in 1995, was Java al een populaire programmeertaal. Netscape zag een kans om mee te liften op het succes van Java en besloot de naam van hun nieuwe scripttaal te veranderen van "LiveScript" naar "JavaScript". Dit zorgde voor verwarring, maar het hielp ook om JavaScript snel bekendheid te geven. [[1]](https://www.tailorit.nl/trainingen/javascript-vs-java/), [[2]](https://www.skillvertex.com/blog/why-so-javascript-and-java-have-similar-name/)

### Een Rich client side experience
JavaScript speelt een cruciale rol in de ontwikkeling van Rich Internet Applications (RIA's). RIA's zijn webapplicaties die dezelfde functionaliteit en interactiviteit bieden als desktopapplicaties, maar toegankelijk zijn via een webbrowser. JavaScript maakt het mogelijk om dynamische en interactieve gebruikersinterfaces te creëren door het manipuleren van de DOM, het verwerken van gebruikersinvoer, en het communiceren met servers via AJAX (Asynchronous JavaScript and XML). Hierdoor kunnen RIA's snel reageren op gebruikersacties zonder de hele pagina te vernieuwen, wat resulteert in een vloeiendere en meer responsieve gebruikerservaring. Bekende voorbeelden van RIA's zijn _webmaildiensten, online tekstverwerkers, en interactieve dashboards_. 

### Hoe JavaScript toevoegen aan je website
Je kan JavaScipt rechtstreeks in je html-document toevoegen via het `<script>` element. _Deze manier wordt echter niet aangeraden._ Je kan het `<script>-element` toevoegen in de sectie `head` of in de `body` van je HTML-document. Het is echter aan te raden om scripts onderaan het `<body>-element` toe te voegen, omdat dit de laadtijd van een webpagina kan verbeteren. [[3]](https://www.shecodes.io/athena/37573-where-does-the-script-tag-go-in-html#:~:text=You%20can%20add%20the%20%3Cscript,body%3E%20of%20your%20HTML%20document.)<br />
Om de code leesbaar en herbruikbaar te houden en te maken, kan je er ook voor kiezen om de functie declaraties toch in de `head` te doen omdat die gebruikt wordt voor algemene definities.

```html
...
<script type="text/javascript">
  //Jouw code komt hier
</script>
...
```
_Je kan commentaar schrijven in JS met `//` zoals in Java of `/* */` zoals in CSS_

JavaScipts worden echter beter verzameld in een `scripts`-directory. Op die manier heb je betere scheiding van verantwoordelijkheden tussen HTML en JavaScript (JS). Je kan ook zeer makkelijk verschillende JS-scripts aanmaken voor je verschillende webpaginas. Je kan hier weer het `<script>-element` voor gebruiken, maar dit keer laten we de content leeg en verwijzen we met behulp van het `scr`-attribuut naar de juiste JS-file.
```html
...
<script type="text/javascript" src="./path_to_your/javascript_file.js"></script>
...
```
_Zo importeren we ook voorgemaakte libraries van JS of importeren we JS code vanaf een DNS_

Een veelgebruikte directory structuur voor het beheren van al je client-side files ziet er zo uit.
```
root/
|
+--- index.html
|   
+--- scripts/
|   |
|   +--- main.js
|   ...
+--- styles/
    |
    +--- main.css
    ...
...
```

### Basis JavaScript syntax
#### Variabelen
In talen zoals Java, C++, C#, ... moet je elke variabele die je gebruikt, verplicht declareren. In JS moet dit niet: je kan gewoon ter plekke een nieuwe variabele beginnen gebruiken. **Moderne stijlgidsen raden dit echter ten zeerste af!**  In Javascript heeft het echter geen zin om het type van een variabele te declareren omdat een variabele geen type heeft. De variabele kan in het begin een `integer` bevatten, even later een `String`, nog wat later een HTML-node, ... Je moet in feite dus alleen aangeven dat je een variabele gaat gebruiken. Tot ECMAScript 2015 kon je dit alleen met de `var` doen, bv. `var getal;` Sinds 2017 ondersteunen echter alle moderne browsers **ECMAScript 2015** en heb je ook de keuze uit `let` en `const`:
- `const` gebruik je om aan te geven dat de inhoud van een variabele constant is en dus niet mag veranderen.
- `let` is ingevoerd om beter aan te sluiten bij de praktijk van zowat alle andere programmeertalen. De let heeft **block scope**. Dat betekent dat de `let` enkel gekend is in de lexicale blok omsloten door accolades. In het voorbeeld hieronder is de i nà de lus niet meer gekend.
- `var`  heeft **function scope**. Dat betekent dat de variable "gehoist" wordt tot het niveau van de functie en dat je een herdeclaratie kan doen die dan direct impact heeft op functieniveau.
```javascript
for (let i=0; i<10; i++) { 
  console.log(i); 
}
console.log(i); // i is unknown here, because i defined with block scope in the loop

// VERSUS
for (var i=0; i<10; i++) { 
  console.log(i); 
}
console.log(i); // prints 10, because i has function scope.
```
**Omdat het gedrag van de let dus perfect overeenstemt met wat we in andere talen gewoon zijn, raden we aan om overal te declareren met let.**

Andere voorbeelden:
```javascript
var x = 1;                    // met 'var' definiëer je een variabele die beschikbaar blijft binnen de functie scope.
let y = "let";                // met 'let' definiëer je een variabele die beschikbaar blijft binnen de block scope. (bv enkel binnenin die if-statement)
const z = "Ik verander niet"; // met 'const' definiëer je een variabele die niet meer verandert
```

Dankzij onze kennis van Java en aanverwante talen is beginnen programmeren in Javascript enorm eenvoudig: de syntax met zijn accolades en punt-komma's en de belangrijkste controlestructuren zoals de toekenning, de `++`, `if-then-else`, de `for`, de `while`, ... zijn allemaal exact hetzelfde als in Java.

<details open>
<summary><i><b>Wil je toch even een herhaling in JavaScript klik dna hier om de code te bekijken </b></i>🔽</summary>
<p>

#### Types
```javascript
// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");
```

#### If, switch, for, while en try-catch
```javascript
//IF-STATEMENT
if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}

//SWITCH
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}

//FOR-LOOP
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}

//WHILE
while (condition) {
  // code block to be executed
}

//TRY CATCH
try {
  //Block of code to try
}
catch(err) {
  //Block of code to handle errors
}
finally {
  //Block of code to be executed regardless of the try / catch result
}
```
#### Functies en klassen definiëren
```javascript
//FUNCTIE
function(parameter) {
  //mijn code
  return result;
}

//EXAMPLE Class
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age(x) {
    return x - this.year;
  }
}
const myCar = new Car("Ford", 2014);
```

</p>
</details>

### Developper tools and logging
Om onze JS code te debuggen gaan we veel gebruik maken van de developper tools die beschikbaar zijn in je browser. In google chrome kan je de develepper tools openen met `F12`. De plaats waar we de meeste tijd gaan doorbrengen in de `console`. We kunnen namelijk allerhande informatie laten printen naar de console. Dit kan op volgende manieren:
```javascript
console.log("Ik ben een normaal log bericht");
console.debug("Ik ben een debug bericht");
console.error("Ik ben een error");
console.info("Ik ben info");
console.warn("Ik ben een warning");
```
In de developper console kan je dan ook filteren op de verschillende soorten logberichten.

### Webcontent inspecteren
Om informatie over bepaalde content op te vragen moeten we eerst weten hoe we HTML-elementen kunnen opvragen om ze daarna te inspecteren. 

Omdat HTML gebaseerd is op XML, heb je een boomstructuur en kan je relatief – gemakkelijk individuele takken opvragen. Stel dat je binnen het HTML-document twee divs hebt. Met `document.div[0]` en `document.div[1]` kan je dan de 1e en 2e div opvragen. De eerste div binnen de tweede div zou dan `document.div[1].div[0]` zijn. Op analoge wijze kan je eender welke blok opvragen. Deze techniek van het document doorlopen verwijst naar het **DOM – Document Object Model**.<br />
Het grote nadeel aan deze techniek is dat je sterk afhankelijk bent van de opbouw van je HTMLpagina, terwijl dit net iets is wat gemakkelijk wijzigt: je gaat blokken toevoegen, verwijderen of op andere plaatsen zetten, of zelfs bijna alles herstructureren. In zo een gevallen zou je al je verwijzingen naar elementen moeten wijzigen in je code en dat is niet houdbaar.

Daarom is één van de gemakkelijkste manieren om een specifiek element op te vragen gebaseerd op de `id`:
```javascript
document.getElementById("idName"); //returns an HTMLObject
``` 
**Als je een element in een HTML-pagina wilt opvragen, begin je altijd met het refereren naar het `document`-object.**

Omdat een `id` uniek is (of moet zijn) geeft deze functie één `HTML-node` terug. Het is een goed idee om die in een variabele op te slaan (`let mijn_html_object = document.getElementById("idName");`), omdat we dikwijls verschillende dingen met die node gaan doen, bijvoorbeeld de inhoud ervan aanpassen of de stijl op verschillende manieren aanpassen.

Andere manieren om een element te krijgen is via de klassenaam of de tagnaam. Hier wordt dan echter steeds een lijst greturned op basis van de volgorde in het HTML-bestand.
```javascript
document.getElementsByClassName("className");        //returns an HTMLCollection
document.getElementsByName("valueOfAttributeName");  //returns an HTMLCollection
document.getElementsByTagname("tagName");            //returns an HTMLCollection
```

Verder kan je ook `CSS-selector syntax` gebruiken om een element op te vragen. De `querySelector`-functie geeft telkens het eerste `HTMLObject` terug dat voldoet aan de query. De `querySelectorAll`-functie geeft een `NodeList` met alle objecten terug die voldoen aan de query.
```javascript
document.querySelector("#idName");     //returns an HTMLObject
document.querySelector(".className");  //returns an HTMLObject
document.querySelector("tagName.className:not(.className) tagName[attibuteName='attibuteValue']"); //returns an HTMLObject

document.querySelectorAll("#idName");  //returns a NodeList
```
_Sommige functies geven een HTMLCollection terug terwijl anderen een NodeList teruggeven. Een NodeList bevat bovenop descendent HTML-elementen ook de stukken tekst die tussen andere eventuele HTML-elementen gebruikt worden. Dit wordt belangrijk bij het opvragen van `children` (HTMLCollection) of `childNodes` (NodeList)_

Wil je over zo een lijst elementen itereren dan kan je de `for(let ... of ...)`-syntax gebruiken.

#### Informatie over elementen inspecteren
Nu we een element kunnen opvragen, kunnen we meer specifieke informatie over dat element inspecteren zoals de waarde van attributen, textcontent, descendents ...
```javaScript
console.log(html_object.innerText);
console.log(html_object.textContent);  
console.log(html_object.innerHTML); 
console.log(html_object.children); 
console.log(html_object.childNodes); 

console.log(html_object.getAttributeNames());
console.log(html_object.getAttribute("attributeName"));
console.log(html_object.getAttributeNode("attributeName"));

console.log(html_object.style.fontsize); //Dit werkt niet altijd op deze manier wanneer er specifieke CSS styling werd toegepast. 
//Gebruik dan volgende methode in de plaats:
console.log(window.getComputedStyle(html_object, null).getPropertyValue('font-size'));
```

{{% notice info %}}
Je kan de console gebruiken om te inspecteren welke attributen een HTML-element allemaal bevat. Bovendien kan je in de documentatie steeds terugvinden wat de return-typen zijn van de verschillende functie. Je kan echter ook zeer snel het type controleren met de JS-functie `typeof naamObject`.
{{% /notice %}}

{{% notice warning %}}
Wanneer een attribuut of object niet gevonden wordt, wordt meestal `undefined` gereturned.
{{% /notice %}}

#### Webcontent manipuleren
Je kan nu ook snel content aanpassen door de attribuut waarde te veranderen:
```javaScript
html_object.innerText = "nieweTekst";
html_object.innerText = '<h1 id="nieuweId" > Nieuwe header </h1>'; // Je kan dus zelfs dynamisch HTML-elementen toevoegen of verwijderen 
html_object.style.fontsize = "15px";

html_object.setAttribute("attributeName", "newValue");

//Examples
voornaamInput_object.setAttribute("value", "Arne");
inputCheckbox_object.setAttribute("checked", "true");
```

### Gebruiker interactie verwerken
Je kan rechtstreeks in een HTML-element functies (of zelfs gewoon JS code) toevoegen om uitgevoerd te worden bij bepaalde acties van de gebruiker.
```html
<button onclick="functionName">Click me</button>
<button onclick="console.log('button clicked')">Click me</button>
```
Dit doe je echter beter in de JavaScript file zelf door `eventListeners` te koppelen aan de gewenste HTML-elementen. Een aantal voorbeelden vind je hieronder. Je kan onder andere een listener toevoegen voor `click`, `mouseover`, `mouseout`, `mousemove` ...
```javascript
html_object.addEventListener("click", functionName);
// Je kan ook rechtrstreeks functies definiëren als parameter:
html_object.addEventListener("click", function(){alert("I was clicked");});
// Of door gebruik te maken van de pijl notatie:
html_object.addEventListener("click", () => {alert("I was clicked");});

//Je kan ook eventListeners toevoegen aan je window
window.addEventListener("resize", function() { console.log("resized window");});
```

#### Event-handlers in JavaScript
In plaats van zelf te kiezen wanneer code uitgevoerd wordt, willen we meer controle leggen bij de gebruiker, net zoals het in "echte" programma's gebeurt: de gebruiker kan hierbij beslissen wanneer er iets moet gebeuren, bv. wanneer hij op een toets drukt, met het gamepad speelt of met de muis een knop indrukt. Dit kunnen we ook in JS doen door code te laten reageren op **events**, de verzamelnaam voor alle gebeurtenissen die externe 'gebruikers' kunnen veroorzaken.

**Een volledig overzicht van events kan je [hier](https://www.w3schools.com/jsref/dom_obj_event.asp) terugvinden**

_Niet alle events zijn van toepassing op alle html-elementen, maar welke events op wat van toepassing zijn, is vrij vanzelfsprekend en daar gaan we dus niet dieper op in._

#### Het Event object
Net zoals in Java weet je op basis van de event-handler wel welk event er plaats vond: een muisklik, een toets ingedrukt, de muis bewogen, ... maar niet welke muistoets, op welke coördinaat, welke toets, ... Willen we dat toch weten, dan moeten we het `Event`-object gebruiken. Zo een object wordt automatisch aangemaakt in elke `event-handler` en krijgt daar de naam **`event`**. In de praktijk gaan we dit event doorgeven aan de functie die we in de event-handler oproepen, bv.
```
//html
<div id="naam" onclick="kijkEven(event); ">blabla</div> 
//javascript
function kijkEven(event) { alert(event); }
```
Je kan nu zien dat de browser in zijn `alert` `[object MouseEvent]` toont, wat aangeeft dat er zo een object is voor het muisevent, en dat je daarvan verschillende **eigenschappen** kan opvragen. Soortgelijk heb je ook een `KeyEvent` e.d. met zijn eigenschappen. Met deze eigenschappen kan je extra informatie opvragen, zoals de positie van de muisklik, de muistoets enzoverder. **Dergelijke eigenschappen kan je oproepen door achter de object-naam een punt te typen en dan de naam van de eigenschappen.**

Online kan je meer info vinden over de verschillende eigenschappen van de events. Op w3schools halen we al een lijst voor de [MouseEvent](https://www.w3schools.com/jsref/obj_mouseevent.asp) en de [KeyboardEvent](https://www.w3schools.com/jsref/obj_keyboardevent.asp).

#### Met alert, confirm en prompt kan je snel pop-up berichtjes toevoegen

De `alert()` is de `MsgBox()` van Javascript. Met deze functie kan je een boodschapvenster op het scherm toveren, bv. `alert("Hoe gaat het er mee?");`. Dit is een manier om (vrij opdringerig) met de gebruiker te communiceren, maar het kan ook handig zijn als foutopsporingshulpje. Je kan immers op verschillende plaatsen in je code een `alert()` zetten, wat een soort 'pauze'-functie verzorgt en waarmee je dus kan zien of en hoe lang je programma correct verloopt.

```javascript
//alert
alert("Alert message, click 'ok' to continue.");
//confirm
var confirmOutput = confirm("Confirm message, click 'ok' or 'cancel' to continue.");
console.log(confirmOutput)
//prompt
var promptOutput = prompt("The prompt message");
console.log(promptOutput)
```

### Forms and the value property
Zoals we eerder al zagen, is het formulier de plaats in HTML waar de gebruiker input kan geven over wat er moet gebeuren. In JS gaan we via een `event-handler` definiëren welke functie uitgevoerd moet worden. Dikwijls gaan we die aan een knop hangen, maar we moeten er dan wel voor opletten dat de knop van het `type="button"` is, en NIET van het `type="submit"`, want die tweede knop gaat de **action** uitvoeren en een volledig nieuw document inladen (zie PHP). Bovendien gaan we de formulierelementen met de naam via het attribuut `id`, bv. `id="tekst"` werken. Met dit `id` en de functie `document.getElementById()` kunnen we dan de form ophalen. Via **de eigenschap `.value`** kan je vervolgens de inhoud van het formulierveld ophalen.

_Bij PHP gaat het zo zijn dat je in het formulier een attribuut `action` moet gebruiken om aan te geven welk script de form moet verwerken. Met het attribuut `name` kies je een naam die je in PHP kan gebruiken in tegenstelling to JS waar we de naam van opgegeven in de `id` gebruiken._

#### De optelling en parseInt()
De `.value` property geeft altijd een `String` terug. Wanneer je dan twee invoerwaarden 'optelt', wordt de `+` van de `String` gebruikt, en dit is, net als in Java, de concatentatie: "Johnny" + " en " + "Marina" is dan "Johnny en Marina"; "33" + "4" is "334". Het eerste vindt iedereen logisch; het tweede veel minder. <br />
Om JS te dwingen de tekst als een getal te beschouwen, moet je de functie `parseInt()` gebruiken. Deze verwacht als parameter een tekst en zal zijn uiterste best doen om uit die tekst een geheel getal te halen. Wanneer dit niet lukt, zal hij de waarde `NaN` geven: **Not A Number**.

_Deze `parseInt()` geeft dus (meestal) een geheel getal terug. Wil je een niet-geheel getal, dan gebruik je `parseFloat()`._

Om te controleren of er effectief een getal `geparsed` kon worden, kan je de functie `isNaN(x)` gebruiken. Deze geeft een **boolean** terug met `true` als de parameter NaN is.

Om even terug te komen op de optelling: wanneer je getallen en teksten combineert in een optelling, doet Javascript dat van links naar rechts. `"De som van " + 3 + " en " + 4 + " is " + 3 + 4` geeft dan `"De som van 3 en 4 is 34"`, omdat je begint met tekst, daar dan 3 bij optelt, vervolgens " en ", 4, en " is ". Dit tussenresultaat is `"De som van 3 en 4 is"`. Hier 3 bij optellen plaatst 3 erachter, en vervolgens komt achter die tekst nog eens 4. `"De som van " + 3 + " en " + 4 + " is " + (3 + 4)` geeft wel `"De som van 3 en 4 is 7"`. **Haakjes spelen dus een belangrijke rol!**

### De style property
Om veranderingen te beklemtonen, kan het interessant zijn om hoofdingen te markeren, lettertypes en/of achtergronden te veranderen, ... In een static page gebruiken we CSS om die vormgeving in te stellen met de property `style` doen we dat in JavaScript. Deze eigenschap `style` is dus **de directe link tussen CSS en Javascript**. In feite is `style` niet zomaar een eigenschap, maar een echt object. Het heeft zelf verschillende eigenschappen die je stuk voor stuk kan veranderen. Zo zal volgende code de achtergrondkleur van de paragraaf veranderen wanneer je er op klikt.
```html
<p id="par" onclick="veranderParagraaf()">blablabla</p> 
  
<script type="text/javascript"> 
  function veranderParagraaf() { 
    var paragraaf = document.getElementById("par"); 
    paragraaf.style.backgroundColor = "red"; 
  } 
</script>
```

**Merk op dat het liggend teken in CSS niet gebruikt kan worden in Javascript (omdat het als 'min' geïnterpreteerd zou worden).** Daarom wordt het vervangen door een hoofdletter van het volgende woord: `background-color` is `backgroundColor` geworden. Een volledig overzicht van de eigenschappen die via het `.style`-element van JS aangepast kunnen worden, vind je op [hier](https://www.w3schools.com/Jsref/dom_obj_style.asp). 

Je kan ook `.style.cssText` gebruiken en dan de CSS-stijl als string meegeven, bv. <br />
`element.style.cssText = 'color:red;backgroundColor:yellow';`

#### De oude property opvragen
Bij het veranderen van de properties kan je in principe de oude waarde hergebruiken door de oude property op te vragen, bv.
```javascript
alert(document.getElementById('par').style.fontSize); 
```

Zo zou je bijvoorbeeld de margin kunnen verdubbelen of het lettertype `10%` groter zetten. Spijtig genoeg zijn er twee problemen:
1. de waarde die je in je CSS definieert komt niet zomaar in je JS terecht. Het is pas nadat je die met JS veranderd hebt, dat je de correcte waarde terug krijgt.
2. de waarde die je terugkrijgt heeft ook een eenheid, bv. 14px of 200%. Dat zijn tekstwaarden en die kan je niet zomaar vermenigvuldigen met 1,1 of 2 bij optellen.

Het eerste probleem kan je oplossen door de waarde met JS te initialiseren op het einde van de pagina, bv
```javascript
document.getElementById('par').style.fontSize = '14px';
```

Voor het tweede probleem gebruiken we de `parseInt` van hierboven, doen een bewerking en zetten er dan de de tekst `"px"` achter, zoals in volgend voorbeeld:
```html
<p id="par" onClick="veranderParagraaf()">blablabla</p> 

<script language="javascript"> 
  function veranderParagraaf() { 
    var paragraaf = document.getElementById("par"); 
    paragraaf.fontSize = (parseInt(paragraaf.fontSize) + 3) + "px"; 
  } 
</script>
```

### De className property
Wanneer je met CSS je stijlen in `classes` hebt ingedeeld kan je ook rechtstreeks de property **`className`** van het HTML-element gebruiken. Dan kan je in één keer een heel nieuwe stijl of animaties toekennen aan een specifiek HTML-element, bv.<br />
`document.getElementById('par').className = "red";`

## Content wegschrijven naar localstorage of sessionstorage
Je kan met JavaScript ook data opslaan in je browser. Dit is steeds een **`key-value` pair** waarbij beide waarde `Strings` zijn. Wegschrijven naar `localStorage` behoudt de data tussen sessies (sluiten en heropenen van de webpagina). Wegschrijven naar `sessionStorage` behoudt de data tussen sessies **NIET**. Maak gebruik van `JSON` om gemakkelijk data objecten op te slaan:
```javascript
//Het op te slagen object in JSON formaat
var testObject = { 
  'one': 1, 
  'two': 2, 'three': 3 
  };
//Opslaan in localStorage
localStorage.setItem('testObject', JSON.stringify(testObject));
//Inladen vanuit localStorage
var retrievedObject = localStorage.getItem('testObject');
var retrievedTestObject = JSON.parse(retrievedObject);

//idem voor sessionStorage.
```

_Vergeet je objecten dus niet te `JSON.stringify`-en om ze op te slaan en te `parse`-n om ze van text terug om te zetten naar waardige JS objecten._

## Synchroon vs Asynchroon

In het **synchrone** model stuur je **een request voor een nieuwe pagina** (via een link, een URL of een formulier) en vervangt de binnenkomende response de hele pagina. De server kan tijdens de uitvoering van zijn script (andere) webservices synchroon oproepen. De responses voor die requests moeten helemaal binnen zijn vooral het script verder gaat en op het einde de nieuwe pagina terug geeft. Dit systeem zie je hieronder:

<figure>
    <img src="/img/voorbeeldsynchroon.png" style="max-height: 15rem;"/>
    <figcaption>Voorbeeld Synchroon [<a href="https://www.researchgate.net/figure/Structure-of-Synchronous-Communication-in-Conventional-Webpage-Browsers_fig3_294783579">bron</a>]</figcation>
</figure>

Dit werkt goed voor een aantal toepassingen, zoals telefonie, maar voor de hedendaagse, veeleisende internetgebruiker is het asynchrone model véél gepaster. Hierbij wordt de request verstuurd en wacht de client niet op het antwoord van de server vooraleer verder te gaan. Ondertussen wacht er op de achtergrond een call-back tot de request terug is.

<figure>
    <img src="/img/synchroonvsasynchroon.png" style="max-height: 15rem;"/>
    <figcaption>Voorbeelden Synchroon vs Asynchroon</figcation>
</figure>

In het **asynchrone** model stuur je dus **een request voor nieuwe data** event-gebaseerd via Javascript: de gebruiker klikt op een knop, selecteert tekst, beweegt over een figuur, ... en als gevolg daarvan gaan we een request sturen. We wachten echter **niet** tot de response helemaal binnen is vooraleer de gebruiker nieuwe acties mag ondernemen, maar zorgen er voor dat de gebruiker verder kan blijven werken en bijkomende requests kan sturen. Het binnenkomen van de responses kan nu in een andere volgorde gebeuren dan het versturen van de request omdat de ene request meer tijd nodig kan hebben dan de andere.

<figure>
    <img src="/img/voorbeeldasynchroon.png" style="max-height: 15rem;"/>
    <figcaption>Voorbeeld Asynchroon [<a href="https://www.researchgate.net/figure/Structure-of-Asynchronous-Communication-in-AJAX-Webpage_fig4_294783579">bron</a>]</figcation>
</figure>

Een response die binnenkomt, zal er nu voor zorgen dat slechts een deel van de pagina aangepast wordt, bijvoorbeeld door tekst toe te voegen aan een `<div>`, door een formulierveld inhoud te geven, door menu-opties te veranderen, door bepaalde blokken van kleuren te veranderen, ... Hiervoor moeten we zowel de inhoud als de vormgeving van HTML-elementen op de huidige pagina kunnen veranderen. Hoe we dat laatste stuk doen, hebben we hierboven al verteld, maar de asynchrone communicatie met de server moeten we nog bespreken. Dit proces zie je hierboven. In deze voorbeeldfiguur komen de verschillende antwoorden nog in dezelfde volgorde binnen als de requests verstuurd zijn, maar het kan perfect zijn dat de eerste response pas binnenkomt als de response op de derde request al lang binnen is. We hebben dan een volledig **asynchroon** model.

Het grote voordeel van het asynchrone model is dat je veel directere interactie met de gebruiker kan krijgen. Het nadeel is dat het iets moeilijker is om te implementeren en dat je een extra technologie nodig hebt. Dat je hiervoor Javascript nodig hebt, zal je al wel doorhebben, want anders zouden we dit niet bespreken in het hoofdstuk Javascript. Concreet praten we dan over **Ajax**, wat meestal in combinatie met REST gebruikt wordt.

### REST met Javascript ≈ Ajax
De volgende stap is om de HTML-elementen te wijzigen, niet alleen maar op basis van vaste code of formulierinvoer, maar op basis van externe webpagina's/webservices. Hiervoor moeten we dus een (asynchroon) request kunnen sturen, en **wanneer we de response ontvangen** deze verwerken of rechtstreeks in een div plaatsen. Omdat de request dikwijls als XML terug komt, heb je 3 technologieën die samenkomen: Asynchroon, Javascript en XML. Dit wordt afgekort tot Ajax met de A van Asynchroon, de JA van Javascript en de X van XML. Tot enkele jaren geleden had je gespecialiseerde bibliotheken nodig zoals Prototype of jQuery om dit in verschillende browers op dezelfde manier te kunnen doen, maar nu kan dit gemakkelijk met fetch de bijhorende Promises en de functionele programmeerstijl.

#### Basisprincipe = request + response opvangen via call back functie

In zijn meest eenvoudige vorm ga je een webpagina opvragen door rechtstreeks zijn URL op te geven en plaatsen we de response rechtstreeks in een div. Deze vorm klinkt heel simplistisch, maar wordt toch heel veel gebruikt omdat je in die URL heel gemakkelijk GET-parameters mee kan geven. En wanneer de webservice direct HTML terug geeft, kan je die zonder problemen in een div plakken.

Het moeilijke is echter dat je die response asynchroon wil opvangen. Hiervoor moet je een `call back` functie definiëren die opgeroepen wordt ("call") wanneer de response terug komt ("back"). Voor de komst van `fetch` had je hiervoor redelijk veel boilerplate-code nodig en stond de callback redelijk ver van de oproep. Met fetch wordt het allemaal veel compacter. Hieronder overlopen we in kleine stappen het hele proces tot en met het opvangen van fouten.

#### Een request versturen
De request versturen is extreem eenvoudig: gebruik de `fetch`-functie met als enige parameter de URL van de service. Hieronder vind je een een minimalistisch voorbeeld:

```html
<html>
  <head>
    <script type="text/javascript">
      function fetchDemo() {
        fetch("https://jsonplaceholder.typicode.com/posts/1");
      }
    </script>
    <body>
      <div id="feedback"></div>
      <div id="input">
        <button onclick="fetchDemo()" type="button">fetch</button>
      </div> 
    </body>
  </head>
</html>
```
Wanneer je dit uitprobeert in je favoriete browser zie je niets omdat we nog een call-back gedefinieerd hebben. Als je echter de ontwikkelaaropties activeert en je bij het netwerkverkeer gaat kijken, kan je echter zien dat er een request verstuurd is.

<figure>
    <img src="/img/fetchnetworkcall.png" style="max-height: 15rem;"/>
</figure>

Je kan de request dan openklikken en de response bekijken, bijvoorbeeld als volgt:

<figure>
    <img src="/img/fetchnetworkresponse.png" style="max-height: 15rem;"/>
</figure>

#### Controleren of de reponse OK is
Met dergelijke request kunnen verschillende dingen mis gaan: het kan zijn dat de URL niet bestaat, dat je verkeerde argumenten meegeeft, dat je niet de juiste rechten hebt, ... Het is dan ook zaak eerst te controleren of de response ok is. Hiervoor ga je een eerste call-back definiëren. Hiervoor gebruik je de `then`-handler. De eerste then-handler neemt **als argument de response** en kan ofwel dat argument helemaal consumeren; ofwel een nieuwe Response terug geven. In de eerste versie hieronder geven we niks meer terug, maar vanaf de volgende sectie geven we een nieuwe response terug om zo het werk beter te verdelen.

De then-handler verwacht een functie-expressie: dit is ofwel een verwijzing naar een bestaande functie (gewoon de naam van de functie) ofwel een `lambda-expressie`. In Javascript heeft zo’n lamba-expressie de vorm parameter `=> return-waarde`. Zo is `x => x * 2` een functie in de vorm van een lambda-expressie die zijn parameter verdubbelt. Je mag ook verschillende statements samenzetten achter de `=>`, maar dan moet je die in een blok met accolades zetten en expliciet return gebruiken wanneer je iets wil terug geven.

In de eerste versie gebruiken we een lambda-expressie die de response in een alert plaatst.

```javascript
function fetchDemo() {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => alert(response));
}
```
<figure>
    <img src="/img/fetchresponse-example.png" style="max-height: 5rem;"/>
</figure>

Je ziet duidelijk in je alert dat je een object van het type Response terug krijgt uit de fetch. Met `console.log(response)` kan je het volledige object in de console bekijken.

<figure>
    <img src="/img/responseobject.png" style="max-height: 15rem;"/>
</figure>

Om te controleren of de response in orde is, moeten we de ok eigenschap opvragen met voor de hand liggende betekenis. De then-handler wordt dan als volgt:

```javascript
function fetchDemo() {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => {
    if (response.ok) alert("Alles ok");
    else alert("Niet ok");
  });
}
```

#### De response converteren naar het juiste formaat
Herinner je dat de laatste letter van de afkorting Ajax verwijst naar XML, maar dat er in de praktijk veel meer JSON wordt gebruikt. XML wordt hierbij als gewone tekst beschouwd, terwijl er voor JSON extra verwerking voorzien is. Bij JSON heb je immers een reeks velden met telkens een waarde. Door de response als JSON te verwerken bekom je dan een object met als data members de velden in de JSON-tekst. Om dit te faciliteren heeft men in fetch voor objecten van het type `Respons`e een methode `.text()` die de zuivere tekst-waarde terug geeft; of beter gezegd een **Promise** met als parameter een zuivere tekst; en een methode `.json()` die een **Promise** terug geeft met als parameter een JSON-object.

Omdat we in de Response van hierboven konden zien dat de service of `https://jsonplaceholder.typicode.com/posts/1` een JSON terug geeft, gebruiken we de `.json()`-methode.

```javascript
function fetchDemo() {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => {
    if (response.ok) return response.json();
    else alert("Niet ok");
  })
  .then(json => console.log(json));
}
```

#### Een aparte functie om de JSON te verwerken
Om de JSON verwerken, schrijf je best een aparte functie zodat je aparte verantwoordelijkheden mooi in aparte functies steekt. In het voorbeeld hieronder hebben we een (lege) functie `showData` gemaakt en die opgeroepen i.p.v. de `alert(json)`.
```javascript
function fetchDemo() {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => {
    if (response.ok) return response.json();
    else alert("Niet ok");
  })
  .then(json => showData(json));
}
function showData(json){

}
```
Dat is correct, maar het kan compacter door i.p.v. `json => showData(json)` gewoon de verwijzing naar de functie te vermelden. Dat zie je hieronder:
```javascript
function fetchDemo() {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => {
    if (response.ok) return response.json();
    else alert("Niet ok");
  })
  .then(showData);
}
function showData(json){

}
```
Om de functie showData nuttig in te vullen gebruiken we de querySelector, de eigenschap .innerHTML en de data members van het JSON-object. Bijkomend hebben we ook nog de stijl van de div aangepast.
```javascript
function showData(json){
  console.log(json);
  let fb = document.querySelector('#feedback');
  fb.innerHTML = json.title;
  fb.style.backgroundColor = "#ae8";
}
```

#### Fouten opvangen via catch
Het kan nog een tikkeltje beter: net als in Java kan je fouten opvangen via een try-catch-achtige structuur. Hiervoor moet je natuurlijk wel eerst een gepaste Exception gooien voor je die kan opvangen. Zo’n Exception gooi je door een Response.reject terug te geven met als parameter een passende foutmelding, bijvoorbeeld: `return Promise.reject("Wrong address");`<br />
Het opvangen van de exception doe je door een .catch toe te voegen aan de ketting van handlers, bijvoorbeeld als volgt: `.catch(err => alert(err));`<br />
Samen wordt dit als volgt:
```javascript
function fetchDemo() {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => {
    if (response.ok) return response.json();
    else return Promise.reject("Wrong address");
  })
  .then(showData)
  .catch(err => alert(err));
}
```
#### Get-Parameters toevoegen
In het voorbeeld hierboven zag je dat de laatste parameter van de GET-request `1` was (het laatste achter de `/` elke `/` staat voor een parameter die je meegeeft. In bovenstaand voorbeeld vragen we dus de `/posts` op van de api en daarvan de eerste `/1`). Wanneer je dit getal niet hard wil coderen, maar laten afhangen van de waarde die de gebruiker in een tekstvak invult, kan je op eenvoudige wijze met de querySelector het desbetreffende input-veld ophalen, met `.value` de waarde van het veld ophalen en dan een URL genereren.

#### Post-Parameters toevoegen
Soms gebruik je geen GET-request om dingen op te vragen (hierbij staat alle info in de url), maar gebruik je een POST-request, hierbij moet je extra info dan in de Post-parameters toevoegen. Dit is een tikkeltje moeilijker. De functie fetch krijgt nu als tweede parameter een object met daarin minstens 3 velden:
- **method**: om te kunnen zeggen dat we de gegevens met POST versturen 
- **headers**: om het formaat te beschrijven waarin we de gegevens versturen. JSON is hierbij het gemakkelijkste. 
- **body**: om de gegevens te versturen. Dit is een tikkeltje moeilijker omdat we eerst een gewoon object moeten maken, en dan dat object omzetten in JSON. Dat laatste kan je met `JSON.stringify(jsonObject)`.

Op [https://css-tricks.com/using-fetch/](https://css-tricks.com/using-fetch/) vind je hiervan volgend voorbeeld:

<figure>
    <img src="/img/postparams.png" style="max-height: 15rem;"/>
</figure>

Een voorbeeld voor onze eigen demo: 
```javascript
function fetchDemo() {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'My post for FSWEB',
      body: 'My super great post about what I learned during the FSWEB courses.',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(response => {
      if (response.ok) return response.json();
      else return Promise.reject("Wrong address");
    })
    .then(showData)
    .catch(err => alert(err));
}
```

### CSRF en CORS
In de beginjaren van het internet heerste er een zeer open filosofie: iedereen mocht probleemloos elkaars services gebruiken. Omdat er echt ook minder betrouwbare sujetten op het internet vertoeven, kwam men snel in de problemen: malafide lieden misbruikten andermans services voor eigen geldgewin en/of om mensen af te zetten of te hacken. Dit concept noemt men **Cross Site Request Forgery**, of afgekort CSRF: een valse of ongewenste request op je site.

Tegenwoordig is het standaard ingesteld dat services niet vanop andere computers opgeroepen kunnen worden. Laravel is hier zelfs nog extra streng in, want niemand, ook je eigen site niet, kan een POST-service van Laravel oproepen tenzij je het csrf-token meegeeft. Dat is veilig, maar tegelijk ook restrictief: het hele concept van Service Oriented Architectures vervalt dan. Gelukkig kan je dat dus ook terug open zetten. Dit noemt men dan **Cross-Origin Resource Sharing** of afgekort CORS. Je kan met CORS specifieke IP-adressen toegang geven of ook iedereen toegang geven, maar dat is dikwijls toch weer een tikkeltje te vrij. Daarom voorzien de meeste service-aanbieders nog een extra authenticatie, maar daar komen we laten op terug.

Het is afhankelijk van de programmeertaal waarin de service geschreven is, hoe je die CORS wordt open gezet.

### Extra voorbeelden op de async functions, promises, await & fetch from api's
Soms wil je dingen opvragen of kan het een tijd duren voordat een functie een return geeft. Om te voorkomen dat je gedurende die tijd niet kan interageren met de website, moet je gebruik maken van de `async` functions. Ergens in je functie gebruik je dan het woord `await` zodat de rest van je functie wacht en pas verder gaat wanneer je een return waarde hebt ontvangen. Tijdens het wachten kan dan andere code uitgevoerd worden.

```javascript
function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // Expected output: "resolved"
}

// MET: <button onclick="asyncCall()" type="button">async call</button>
```

Een voorbeeld waarvoor je vaak de `async function` gebruikt is bij het gebruik van api's om data op te halen/weg te schrijven zoals hierboven al uitgebreid aangehaald:
```html
<html>
<head>
  <script type="text/javascript">
    async function cuteDogPicture() {
      fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => {           // Parameter 'response' refers to the return of the function above this (fetch)
          return response.json();
        })
        .then((myContent) => {          // Parameter 'myContent' refers to the return of the function above this
          let fb = document.querySelector('#feedback');
          fb.innerHTML = "<img src='" + myContent['message'] + "'/>";
        });
    }
  </script>

<body>
  <div id="feedback"></div>
  <div id="input">
    <button onclick="cuteDogPicture()" type="button">fetch</button>
  </div>
</body>
</head>

</html>
```


## Opdrachten reeks 1
- Breid onderstaand voorbeeld, waar we de invoer in een tekstvak in een alert laten verschijnen, uit tot een formulier met twee velden: een voor de tekst en een voor kleur. Wanneer de gebruiker op de knop klikt, moet de tekst in een tweede div verschijnen met als achtergrondkleur de kleur die gebruiker ingegeven had. 
```javascript
// met invoer een html-input element van het type `text`, met als `id` "tekst"
function toonInvoer() { 
  var invoer = document.getElementById("tekst").value; 
  alert(invoer); 
}
```
- Maak een opteller in HTML en JavaScript: een simpel formulier met 2 tekstvakken waar men een getal moet invullen en een div waar je de uitkomst in zet. 
- Maak een quizje met drie meerkeuzevragen. Als men op het foute antwoord klikt, moet dat antwoord een rode achtergrond krijgen. Klikt men op het juiste antwoord, dan moet dit een groene achtergrond krijgen.

<br />

- Voeg op minstens 2 plaatsen JavaScript toe aan je portfolio website. Ten eerste zorg je ervoor dat wanneer mensen op de 'submit'-knop drukken in je contactenformulier dat je de data van de inputvelden op een correcte manier in een object variabele opslaat. Sla daarna de data op in je `sessionStorage` door gebruik te maken van JSON. Zorg er ook voor dat wanneer je je contactformulier opent het formulier al is ingevuld met de laatst opgeslagen gegevens indien ze bestaan.

- Zoek een interessante API die je kan oproepen met AJAX en kan gebruiken in je website. Maak het zo dat je verschillende oproepen kan doen op basis van de input van de gebruiker.


## Test jezelf

Klik [hier](https://www.w3schools.com/js/js_quiz.asp) om jezelf te testen met de online JS quiz van w3schools. Of klik [hier](https://www.w3schools.com/js/js_exercises.asp) voor wat extra oefeningen.