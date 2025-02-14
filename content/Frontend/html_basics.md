---
title: "HTML"
weight: 1
author: Arne Duyver
draft: false
---

_bron 1: HTML, CSS, Bootstrap & Blade. Vormgeving in Laravel. Cursus: Cloud Computing & Toepassingen - 2020/2021 - Kris Aerts_</br>
_bron 2: Responsive Web Design with HTML5 and CSS - 4th edition - Ben Frain_</br>
_bron 3: [W3Schools](https://www.w3schools.com/html/default.asp)_

## HyperText Markup language
HTML staat voor 'HyperText Markup Language' en is een manier om text content te markeren zodat het door een programmeertaal of webbrowser begrepen kan worden. HTML is essentieel voor menselijk begrijpbare webcontent. Je markeert tekstinhoud met tags/elements om structuur en inhoud aan te brengen. HTML is dus een standaard voor het structuren van informatie via een markup-taal gebaseerd op XML, en kan in eender welke browser getoond worden zoals Firefox, Edge, Chrome, Safari, Opera, ...

Het grote voordeel is dat we zelf geen software moeten gaan installeren de computer van gebruikers en dat we voortdurend updates aan de software kunnen aanbrengen zonder dat we deze expliciet moeten distribueren naar de eindgebruiker. Je kan HTML (en CSS) statisch schrijven of dynamisch laten genereren via een programmeertaal en bijhorend framework, zoals PHP en Laravel, Java en Tomcat, C# en ASP, Flask en Jinja, ...

Samengevat is HTML de markup-taal waarmee we via tags informatie kunnen structuren.

HTML beschrijft enkel de structuur, en géén vormgeving. Dat doen we in CSS.

Merk ten slotte op dat HTML afgeleid is van XML en dat ook CSS een strikte structuur heeft. Om dit te controleren kan je o.a. volgende validators gebruiken:
- Validator voor HTML [http://validator.w3.org/](http://validator.w3.org/)


### Elements, Tags en Attributes
Een **HTML element** wordt gedefiniëerd door een open-tag, elementinhoud en een sluit-tag. Een **HTML tag** wordt weergegeven met de naam van het element binnenin "< ... >" en bestaat steeds uit kleine letters bv. `<p>`. Een sluit-tag bevat nog een "/" voor de element naam bv. `</p>`. Elke open-tag **moet** meestal ook gevolgd worden door een sluit-tag van hetzelfde element bv. `<p> ... </p>`. Een uitzondering op deze regel zijn een aantal **self-closing elements** die geen elementinhoud bevatten. Een self-closing element bevat dus maar één tag waarin de "/" na de elementnaam komt en voor de sluitende ">" bv. `<img src="/img/html_syntax.png"/>` of `<br/>`.

<figure>
<img src="/img/html_syntax.png" alt="drawing" style="max-height: 10rem;"/>
<figcaption>HTML syntax and structure of an HTML element <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.codingame.com%2Fplaygrounds%2F8240%2Fhtml-syntax-for-beginners&psig=AOvVaw3mywD2Isv3nxKmiqCebZu9&ust=1709383397838000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLi7jcWL04QDFQAAAAAdAAAAABAD">bron</a></figcation>
</figure>

Een element kan verschillende **attributes** bevatten die extra informatie over een HTML element bevatten. Deze attributen kunnen het gedrag of uiterlijk van een element wijzigen, de functionaliteit ervan definiëren of andere details specificeren, zoals de relatie met andere elementen of het gedrag als reactie op gebruikersinteracties. 
<br/>Attributen worden in de open-tag aan HTML-elementen toegevoegd met behulp van _name-value pairs_ binnen de open-tag van het element. De belangrijkste attributen die wij gebruiken zijn `id`, `class` en `style`. Enkele andere veelgebruikte HTML-attributen zijn: `href`, `src` ...

Op volgende manier gebruik je attributen in HTML tags (Een element kan meerdere attributen bevatten en je zelf ook eigen attributen toevoegen):
```html
<p attributeName="attributeValue">...</p>
```

Twee belangrijke attributen zijn '`id`' en '`class`' die je helpen een specifiek element terug te vinden met behulp van CSS-selectors of JavaScript. 
```html
<p id="paragraaf1" class="specialeParagraafKlasse" value="1">...</p>
```
><i class="fa fa-info-circle"></i> Een element kan maximaal één `id` hebben maar wel meerdere `class` namen.

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
- **html element**: Het HTML element met de naam 'html'. Dit wordt de **root tag** van het HTML bestand genoemd, want alle html code moet binnen de `<html>` en `</html>` tags staan. Deze tags geven aan waar het html-document begint en eindigt.
    - **lang attribuut**: Met het language attribuut geven we meer informatie mee aan de webbrowser door te vermelden dat de content op deze webpagina in het Engels (`en`) geschreven is. (Nederlands =  `nl`)
    - Binnen html zijn er slechts twee tags mogelijk: de `<head>` en de `<body>` voor respectievelijk informatie in de header die niet rechtstreeks voor de lezer bestemd is en anderzijds de body die de feitelijke inhoud van het document bevat.
- **head element**: dit is een container voor de volgende metadata: `<title>`, `<style>`, `<meta>`, `<link>` and `<base>`. (eventueel ook `<script>`)
    - **meta element**: wordt gebruikt om de karakterset/encoding, paginabeschrijving, trefwoorden, auteur van het document en viewport settings te declareren.
        - **character encoding**: dit verteld de webbrowser hoe de karakters gecodeerd zijn zodat hij ze correct kan decoderen. Tenzij je een goede reden hebt is de gebruikte codering normaal `utf-8`.
- **body element**: een element container die al de overige inhoud van het HTML bevat. De headers, paragrafen, de tekst ...

#### Boomstructuur

Bij het werken met deze tags is het zéér belangrijk dat we een **boomstructuur** aanhouden: elke tag moet volledig binnen een andere zitten. Anders gezegd betekent dit dat je een omsluitende tag pas mag afsluiten wanneer je alle binnenliggende tags afgesloten hebt. Concreet mag je de `</html>` pas afsluiten na de `</body>`. Het feit dat je een boomstructuur krijgt, betekent dat je gemakkelijk deeltakken van het document kan selecteren.

<figure>
<img src="/img/html_tree.png" alt="drawing" style="max-height: 10rem;"/>
</figure>

### Types van HTML elements
- **Sectioning elements**: elementen die worden gebruikt om de structuur van een webpagina te definiëren door secties van inhoud te scheiden door de verschillende delen semantische betekenissen mee te geven. Bv. `<h1>`, ..., `<h6>`, `<p>`, `<header>` en `<footer>`.<br>
Zoals bv. deze webpagina is opgebouwd uit hoofdstuktitels, paragraaf- en subparagraaf-titels van elk een verschillende grootte, of een krant waar je hoofdingen in verschillende groottes hebt afhankelijk van de belangrijkheid van het nieuws.
<br><br>In HTML hebben we 6 soorten hoofdingen, gaande van `<h1>`, `<h2>`, `<h3>` tot `<h6>` en daarnaast de `<p>` waarin je de eigenlijke paragraaf tekst zet. In principe hoef je niet te weten hoe groot de verschillende headers zijn: de browser is vrij dit zelf te bepalen zolang h1 maar belangrijker is dan h2 (enzoverder), maar sowieso kan je met CSS deze vormgeving nog wijzigen. <br>
De `<p>` plaatst de tekst in principe links uitgelijnd en laat steeds een witte regel tussen twee paragrafen, maar ook dit kan je veranderen met CSS.
<br><br>Visuele onderverdelingen zijn de `<br>` (break) en de `<hr>` (horizontal ruler). De eerste voegt een blanco regel toe, terwijl de tweede een horizontale scheider plaatst. 

- **Grouping elements**: elementen die worden gebruikt om meerdere inhoudsitems te groeperen of te bundelen onder één overkoepelend element. Deze elementen dragen niet echt bij tot de inhoud van het document op zich, maar helpen wel de structuur te verfijnen. Enerzijds gaat het om structurende onderverdelingen: tags die een aantal andere tags samen groeperen tot een nieuwe deelverzameling: een sectie van het document. 
<br>Bv. `<div>` wordt hiervoor het meest gebruikt. Het is wel een eigenschap van de div dat ze zorgt voor het begin van een nieuwe regel. `<span>` heeft dezelfde inhoudelijke betekenis, maar zorgt niet voor een visueel zichtbaar nieuwe regel en wordt daarom eerder binnen tags gebruikt.

- **Opsommingen**: Voor de opsomming hebben we enerzijds de keuze uit de geordende lijst `<ol>` (ordered list) of de niet-geordende lijst `<ul>` (unordered list), waarbij elk lijst-element op zijn beurt een `<li>` is (listitem).

- **Hypertext**: De tags die we voordien zagen, waren puur text-based en gaan voorbij aan de rijkdom van html, een rijkdom die we onder de noemer Hypertext kunnen plaatsen: html biedt immers de kans om meer dan alleen tekst te tonen: figuren, videos, geluiden en hyperlinks: doorverwijzingen naar andere documenten of naar andere plaatsen binnen het huidige document.
    - `<a>` de anker tag: Bij deze tag heb je enerzijds de linktitel: de tekst die (meestal) in het blauw op je webpagina verschijnt, en anderzijds de link zelf: de pagina waar je naar toe springt wanneer je op de link klikt. De linktitel is de inhoud van de tag, terwijl je de link zelf via het attribuut href moet meegeven, <br>bv. `<a href=http://www.google.be>De bekendste zoekmachine</a>`<br>
    Je kan ook links (ankers) binnen je webpagina maken. Dan moet je het attribuut name gebruiken, <br>bv. `<a name=”halfweg”>...</a>`. Om dan naar zo’n anker te verwijzen, moet je als href # gebruiken + de naam van het anker, <br>bv. `<a href=”#halfweg”>`...
    - `<img>` de image-tag: Dit is een **replaced tag** omdat hij wordt vervangen door de figuur waarnaar verwezen wordt in het `src`-attribuut. Dit attribuut is dan ook verplicht. Daarnaast is ook het attribuut `alt` verplicht voor zoekmachines en blinden of slechtzienden waarbij schermlees software dan de `alt`-tag voorleest. <br>bv. `<img src=”...” alt=”...” />`
    - Voor video- en audio-fragmenten heeft men de `<video>`- en `<audio>`-tag voorzien, maar in de praktijk worden echter heel dikwijls iframes gebruikt. Sowieso gebruiken de meeste mensen de embeddable code die krijgen ze van sites zoals youtube of spotify en daarom gaan we daar hier niet dieper op in.

- **Text-level semantics**: dit verwijst naar de manier waarop HTML elements de betekenis en structuur van tekst op een webpagina definiëren. Deze elementen worden gebruikt om specifieke delen van de tekst te markeren en hun semantische betekenis aan te geven. Bv. `<em>` en `<strong>`.
<br><br>Andere markeringen zijn:
    - `<title>` Verschijnt in de titelbalk van de browser en bij de bookmark. Deze tag moet wel in de head van het html-document.
    - `<cite>` Een citaat uit een andere tekst.
    - `<code>` Voor programmacode.

- _**Opgelet: witruimte**:_ Opvallend binnen HTML is dat eender welke hoeveelheid witruimte beschouwd wordt als het begrip “witruimte” waarvoor de browser slechts **één** spatie zal gebruiken. Of je dus 7 spaties gebruikt of 13 enters of 8 tabs, 3 enters en 22 spaties, dit komt allemaal overeen met “witruimte”.

## HTML-entities

Omdat de verschillende talen in de wereld veel verschillende accenten hebben, is er gekozen voor een overdraagbaar systeem van accenten: men doet dit met **HTML-entities**. Dit zijn speciale codes waarmee je speciale tekens kan weergeven. Dit beperkt zich niet alleen tot accenten, maar ook tot tekens zoals `&`, `€`, `<` en `>` (want die laatste worden anders als deel van een tag beschouwd), ... Typisch is dat ze allen **beginnen met `&` en afgesloten worden met `;`**, bv. `&amp;` geeft &amp; of `&euro;` geeft &euro;.

Voor de accenten heb je het systeem **`&` + `letter` + `accent` + `;`**. Het accent is dan een van: grave (&agrave;), acute (&eacute;), uml (&euml;), cedil (&ccedil;), circ (&ecirc;), tilde (&ntilde;).

Enkele interessante zijn voor ampersand (`&amp;` &amp;), euro (`&euro;` &euro;), copywright (`&copy;` &copy;), reg (`&reg;` &reg;), trademark (`&trade;` &trade;), less then (`&lt;` &lt;), greater then (`&gt;` &gt;), less then or equals (`&le;` &le;), greater then or equals (`&ge;` &ge;) en non breaking space (`&nbsp;`) bv: <br>
`&nbsp; non breaking&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;space`<br>
&nbsp; non breaking&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;space

Via volgende link vind je een volledige lijst terug: [https://www.freeformatter.com/html-entities.html](https://www.freeformatter.com/html-entities.html)

<!-- ## HTML Forms #TODO -->



### List of useful elements
<details open>
<summary><i><b>Klik hier om de code te zien/verbergen</b></i>🔽</summary>
<p>

```html
<!-- This is a comment in HTML -->

<!-- SECTIONING ELEMENTS -->

<nav>
    The 'nav' element is used to mark up a collection of links to external pages or sections within the current page. As well as being used for the main website navigation, the 'nav' element is also a good fit for things like a table of contents, or a blogroll.
</nav>

<header>Header for webpage</header>

<aside>
    The 'aside' element is used to represent content that is tangibly related to the content surrounding it, but could be considered separate. This includes things like sidebars
</aside>

<main>
    The 'main' element should contain the main content for your web page. All of this content should be unique to the individual page, and should not appear elsewhere on the site. Any content that is repeated on multiple pages (logos, search boxes, footer links, etc.) should not be placed within the 'main' element.

    You should only use one 'main' element on a page, and it shouldn’t be placed within an 'article', 'aside', 'header', 'footer', or 'nav' element.

    <article>
        <header>
            the 'header' element is used to represent the introductory content to an article or web page. This will usually contain a heading element as well as some metadata that’s relevant to the content, such as the post date of a news article for example.

            <h1>Largest Header</h1>
            <h2>Header 2</h2>
            <h3>Header 3</h3>
            <h4>Header 4</h4>
            <h5>Header 5</h5>
            <h6>Smallest Header</h6>

        </header>

        The 'article' element should contain a piece of self-contained content that could be distributed outside the context of the page. This includes things like news articles, blog posts, or user comments.

        You can nest 'article' elements within one another. In this case it’s implied that the nested elements are related to the outer 'article' element.

        <aside>Tangibly related content</aside>
    </article>

    <section>
        The 'section' element is used to represent a group of related content. This is similar to the purpose of an 'article' element with the main difference being that the content within a 'section' element doesn’t necessarily need to make sense out of the context of the page.
        
        It’s advisable to use a heading element ('h1' – 'h6') to define the topic for the section.

        If you just need to group content together for styling purposes you should use a 'div' element rather than a 'section'

        <footer>
            The 'footer' element is used to represent information about a section such as the author, copyright information, or links to related web pages.
            <address>
                This element is not for marking up postal address, but rather for representing the contact information for an article or web page. This could be a link to the author’s website or their email address.
            </address>
        </footer>

    </section>

    Based on content and design, articles can contain sections and/or sections can contain articles.
    
</main>

<footer>
    Footer for webpage
    <address> Link to email author webpage </address>
</footer>


<!-- GROUPING ELEMENTS -->
<div>
    Used for grouping blocks for easy styling. <span>Used for grouping inline content</span>
</div>

<p>Defines a paragraph</p>

<pre>Defines preformatted text</pre>

<blockquote cite="citation_source">
    Specifies a section that is quoted from another source
</blockquote>
<q>For inline (short) quotations</q>

<ol type="I" start="1"> <!-- type="1|a|A|i|I" -->
    <!-- Defines an ordered list. An ordered list can be numerical or alphabetical. -->
    <li>List Item I</li>
    <li>List Item II</li>
    <li>List Item III</li>
</ol>
</ul>
    <!-- Defines an unordered list. Used the same a 'ol' -->
</ul>

<table> <!-- Defines an HTML table -->
  <tr> <!-- Defines a table row -->
    <th>Defines a table head for column</th> <!--  -->
    <th>Header column 2</th>
  </tr>
  <tr>
    <td>Defines a table cell</td>
    <td>Cell row 2, column 2</td>
  </tr>
  <tr>
    <td>Cell row 3, column 1</td>
    <td>Cell row 3, column 2</td>
  </tr>
</table>

<figure>
    <img src="img_source_web/or/local_file.png" alt="alternative text if img src not found" width="auto" max-width="500px"/>
    <!--src="./voorbeeld/realtive/path/img.jpg | C://voorbeeld/absolute/path/img.jpg | https://www.voorbeeld-url.com/img.jpg" -->
    <figcaption>Image caption</figcation>
</figure>

<!-- TEXT-LEVEL SEMANTICS -->

All simple text is displayed without line breaks.
But 'br' creates
<br/> a line break.<br/><br/>

<a href="link_to_webpage/or/local_file" target="_blank">Link text<a> <!-- target="_blank | _self | _parent | _top" -->
<!--href="./voorbeeld/realtive/path | C://voorbeeld/absolute/path | https://www.voorbeeld-url.com" --><br/><br/>

The <em>em-tag</em> is used to define emphasized text. The content inside is typically displayed in italic.<br/><br/>

The <i>i-tag</i> defines a part of text in an alternate voice or mood. The content inside is typically displayed in italic.<br/><br/>
<!-- Use the <i> element only when there is not a more appropriate semantic element -->

The <strong>strong-tag</strong> is used to define text with strong importance. The content inside is typically displayed in bold.<br/><br/>

The <b>b-tag</b> specifies bold text without any extra importance.<br/><br/>

The <small>small-tag</small> defines smaller text (like copyright and other side-comments).<br/><br/>

The <s>s-tag</s> specifies text that is no longer correct, accurate or relevant. The text will be displayed with a line through it.<br/><br/>

The <cite>cite-tag</cite> defines the title of a creative work (e.g. a book, a poem, a song, a movie, a painting, a sculpture, etc.).<br/><br/>

<p>
The <dfn>dfn-tag</dfn>  stands for the "definition element", and it specifies a term that is going to be defined within the content.
</p>

The <abbr title="abbreviation">ABBR</abbr>-tag defines an abbreviation or an acronym.<br/><br/>

The <time datetime="2024-02-18 19:00">time-tag</time> defines a specific time (or datetime).<br/><br/>

The <code>code-tag</code> is used to define a piece of computer code. The content inside is displayed in the browser's default monospace font.<br/><br/>

The <var>var-tag</var> is used to defines a variable in programming or in a mathematical expression. The content inside is typically displayed in italic.<br/><br/>

<!-- FORMS AND INPUTS -->
<form>
    fieldset
    label
    input text
        type number, password,email, radio, checkbox, submit, button, file (accept="image/png, image/jpeg")
        Placeholder
        value
        name
        id
    radiobutton
    checkbox
    dropdown met select en option (met value attr)
    textarea
</form>

<!-- EXTRA -->
-button
-symbols
-Details + summary
-icons


```

</p>
</details>

[bron1](https://www.w3schools.com/tags), [bron2](https://blog.teamtreehouse.com/use-html5-sectioning-elements), [bron3](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/HTML5.html)

### Een voorbeeld mappenstructuur voor je webpagina's
```
root/
|
+---index.html
|
+---html/
    |
    +--- about/
    |    |
    |    +--- about.html
    |
    +--- contact/
    |    |
    |    +--- contact.html
    ...
+--- assets/
    |
    +--- images/
        |
        +--- image1.png
...
```

## Common website layouts

<figure>
<img src="/img/common-website-layouts.jpg" alt="drawing" style="max-height: 46em;"/>
<figcaption>4 Common website layouts with HTML-elements <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ecurtisdesigns.com%2Fweb-layout-design%2F&psig=AOvVaw1sO2aRTXVQnLjp0IMXVzpu&ust=1709382800202000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMjp4KWJ04QDFQAAAAAdAAAAABAa">bron</a></figcation>
</figure>

### HTML vs HTML5

HTML5 is de nieuwere versie van HTML met een aantal nuttige voordelen. Zo is HTML5 zeer vrijgevend gezind in het weglaten van bepaalde attributen en gebruikt HTML5 default waarden voor attributen die nodig zijn maar niet specifiek uitgetyped werden. In XHTML was de basisstructuur ook vrij uitgebreid, maar gelukkig is dit sinds HTML 5 terug sterk vereenvoudigd. Bijvoorbeeld:

```html
<link href="CSS/main.css" rel="stylesheet" type="text/css" />
```
HTML5:
```html
<link href=CSS/main.css rel=stylesheet >
```
Merk op dat in het HTML5 voorbeeld geen "/" heeft voor het sluitende groter dan teken, geen quotes gebruikt voor de value van het attribuut 'href' en 'rel' en er geen attribuut 'type' gedefinieerd is. HTML5 zal hier echter niet moeilijk over doen.  

> <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
> In het algemeen is het wel een goede strategie om je HTML bestand zo specifiek mogelijk te coderen om problemen in een later stadium te vermijden.

Aangezien HTML5 dus gewoon de nieuwere versie is van HTML gaan we dit gebruiken.

## Formulieren

Met de HTML die we tot nu toe gezien hebben, kan je wel informatieve pagina's maken, maar de bezoeker kan niks anders dan dingen bekijken en links aanklikken. Om reacties of andere gegevens op te vragen, heb je formulieren nodig. In dit stuk behandelen we de opmaak van formulieren, maar we kunnen de ingevoerde gegevens nog niet verwerken.

### Formulieropbouw

Een formulier bestaat steeds uit een verzameling invoerelementen. Omdat er bovendien verschillende formulieren op één webpagina kunnen staan, moet je de bij elkaar horende formulierelementen groeperen onder een tag
```html
...
<form> 
    <!-- verschillende formulierelementen --> 
</form>
...
```
De `form`-tag heeft normaal ook nog de attributen `method`, `action` en `name`, maar binnen deze cursus gebruiken we die niet en laten we die dus achterwege. (De functionaliteit van die attributen gaan we zelf voorzien met behulp van JavaScript) Binnen de `form`-tag kunnen dan verschillende elementen komen. Dit zijn bijna allemaal "replaced tags", dus zonder innerHTML en met een `/>`-sluiting van de tag.

**Attributen van de form**: twee belangrijke, de _method_ en de _action_.<br>
- De _method_ beschrijft op welke manier de gegevens doorgestuurd worden naar het script dat de formulierinhoud moet verwerken. Er zijn twee mogelijkheden:
    - **GET**: hierbij worden de gegevens in de URL gecodeerd en wordt de formulierinhoud dus zichtbaar in de URL. Een ander belangrijk nadeel is dat de lengte van de data beperkt is.
    - **POST**: bij deze methode worden de gegevens in een envelope ingepakt en zo doorgegeven. De lengte is nu in principe onbeperkt. Deze methode wordt het meeste gebruikt.
- De **action** bevat de URL van het script dat het formulier zal moeten verwerken. Dit script kan in eender welke taal geschreven zijn, maar heel dikwijls is dit PHP. Wanneer je geen action-attribuut definieert, wordt het formulier naar de huidige pagina doorgestuurd. Zolang je puur in HTML werkt, geeft dit de indruk dat het formulier gereset wordt.

**Text**: <br>
Het eenvoudigste en ook meest gebruikte invoerelement is gewoon het één-regel lange tekstvak. De code hiervoor is `<input type="text" />`. De belangrijkste attributen zijn – naast het `id` – de `size` en de `maxlength`, die respectievelijk het aantal zichtbare letters bevatten en het maximaal aantal letters dat ingegeven kan worden. Je kan ook het type meegeven zoals onder andere: `email`, `password`, `number` ... <br>
Bijvoorbeeld: `<input type="text" />` geeft <br>
<input type="text" />

## Opdrachten
1. Maak een HTML-bestand en noem het portfolio.html
2. Geef de titel van je webpagina de naam "portfolio".
3. Voeg jezelf toe als auteur van de webpagina
4. Gebruik het header element om de onderstaande structuur aan te brengen aan je webpagina.
    - Expertise
    - Over mij
    - Mijn projecten
    - Technische vaardigheden en CV
    - Contact
5. Gebruik de relevante html elementen om het volgende toe te voegen aan je webpagina: voeg boven de header expertise een welkomstbericht toe. (Voor inspiratie voor het tekstje kan je ChatGPT gebruiken, de vormgeving doe je ZELF). Emphasize een aantal inspirerende woorden door ze in het vetgedrukt/schuin te zetten.
6. Voeg ook een mooie afbeelding toe die je online ophaalt. Gebruik hiervoor het 'figure' element en voeg een caption toe
7. Plaats de welkomsttekst binnenin een div en geef die div de klasse naam 'welcometext'.
8. Geef in de Expertise sectie een lijst waarin je je eigen vaardigheden in de verf zet. (je kan ook inspiratie opdoen op andere portfolio websites).
9. Plaats in de Expertise sectie ook een link naar de sectie Technische vaardigheden en CV
10. Plaats in de 'Over mij' je favoriete quote van je lievelingsfilm/-boek in de Over mij sectie. Gebruik hier het juiste element voor.
11. Geef ook wat meer informatie over jezelf en plaats minstens één belangrijke zin in een span en geef die de id 'important-sentence'.
12. Plaats hier ook een afbeelding (de afbeelding moet je lokaal hebben staan)
13. Maak onder de sectie 'Mijn projecten' subsecties voor alle projecten die je al eens gemaakt hebt. Bijvoorbeeld je project van ELSY van het eerste jaar, je PES project, eigen andere projecten …
14. Onder technische vaardigheden maak je een tabel met je verschillende opleidingen in (naam opleiding, startjaar, eindjaar). Voeg ook een lijst met beheerste talen toe en link hier ergens naar  volgende webpagina: [https://detaalbrigade.nl/taalniveaus/](https://detaalbrigade.nl/taalniveaus/ )
15. Breng wat meer structuur aan in je teksten met divs, paragrafen en line breaks. Voeg ook eens wat symbolen via hun html-code toe waar nuttig. Gebruik verschillende achtergrond kleurtjes om te bekijken hoe de verschillende structuren werken (doe dit ook voor je span).
16. Gebruik inputs boxen, knoppen, checkboxen, … om een contactformulier aan te maken. Je vindt hier ontelbare voorbeelden van op het internet. 
17. Neem nu je 'Contact' sectie en plaats die in een nieuw bestand genaamd 'contact.html' en plaats deze in de subfolder genaamd 'contact'.
    - Maak een gepast formulier aan voor deze webpagina. 
18. Maak footer aan waarmee je navigeert naar je 'contact' page van je website.
19. Voeg in je head een link toe naar fa-icons zodat je die icoontjes kan gebruiken: 
<br/>`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">`
20. Voeg aan je footer ook een link toe via een icoon naar je Github profiel en een icoon voor je linkedIn profiel (indien je dat hebt)

## Test jezelf

Klik [hier](https://www.w3schools.com/html/html_quiz.asp) om jezelf te testen met de online HTML quiz van w3schools. Of klik [hier](https://www.w3schools.com/html/html_exercises.asp) voor wat extra oefeningen.