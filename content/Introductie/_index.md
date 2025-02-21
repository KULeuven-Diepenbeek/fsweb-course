---
title: "Introductie"
# chapter: true
weight: 1
author: Arne Duyver en Kris Aerts
draft: false
---
<!-- bron: Powerpoint Full Stack Web Development introductie (Kris Aerts) -->

### Full Stack Web Development: 4 belangrijke woorden
- **Development**: hoofddoel = "ontwikkeling" = iets maken &nbsp;&nbsp;&nbsp;&nbsp; _conform profiel IIW_
- **Web**: domein = websites &nbsp;&nbsp;&nbsp;&nbsp; _geen installatie nodig, gemakkelijk te updaten_
- **Stack**: verschillende technologieën als lagen op elkaar &nbsp;&nbsp;&nbsp;&nbsp; _verschillende doelen => verschillende aanpakken_
- **Full**: hoofddoel = "ontwikkeling" = iets maken &nbsp;&nbsp;&nbsp;&nbsp; _verschil met PBA: ook gloednieuwe technologie 'van de toekomst'_

De **'stack'** was er niet altijd. In de beginjaren van de computerwetenschap was er weinig sprake van full stack architectures. Naarmate de technologie evolueerde, ontstond er een **groeiende specialisatie per laag**, waarbij elke laag specifieke taken en verantwoordelijkheden kreeg. Dit leidde tot een periode **van profilatiedrang**, waarin verschillende technologieën en protocollen werden ontwikkeld en getest. Uiteindelijk resulteerde dit in een beweging **naar standaardisatie**, waarbij gemeenschappelijke normen en protocollen werden vastgesteld om interoperabiliteit en efficiëntie te bevorderen. Ondanks deze vooruitgang is de stack **nog steeds in volle ontwikkeling en transitie**, met voortdurende innovaties en verbeteringen. Interessant genoeg zien we tegenwoordig een **trend naar unificatie**, waarbij geïntegreerde oplossingen en full-stack benaderingen in populariteit toenemen, wat de cyclus van technologische evolutie voortzet.

## Een kleine historie: ARPANET en CERN
Op 29 oktober 1969 werd het eerste bericht via het ARPANET verstuurd, een voorloper van het [internet](#het-internet). Deze gebeurtenis markeerde het begin van een nieuw tijdperk in de communicatie. Twintig jaar later, in 1989, stelde **Tim Berners-Lee**, een Britse wetenschapper die bij CERN (het Europees Laboratorium voor deeltjesfysica) werkte, een systeem voor dat later bekend zou worden als het [**World Wide Web (www)**](#world-wide-web). Voor deze naam bestond had het namen zoals "The Information Mine" en later "Mine of Information". Zijn doel was om wetenschappers wereldwijd in staat te stellen informatie gemakkelijk te delen.

<figure>
    <img src="/img/timbernerslee.jpg" style="max-height: 15rem;"/>
    <figcaption>Tim Berners-Lee <a href="https://www.home.cern/science/computing/birth-web/short-history-web">[1]</a></figcation>
</figure>

Berners-Lee bracht in dat jaar een **proposal voor "a large hypertext database with typed links"** en begon aan de implementatie ervan. **Robert Cailliau** (manager van Tim Berners-Lee en een Belg) herschreef het proposal gaande over het World Wide Web samen met Tim Berners-Lee wat later werd gepubliceerd in 1990 onder de titel [_"Information Management: A Proposal"_](https://cds.cern.ch/record/369245/files/dd-89-001.pdf). [[1]](https://www.home.cern/science/computing/birth-web/short-history-web)

<figure>
    <img src="/img/robertcailliau.png" style="max-height: 15rem;"/>
    <figcaption>Robert Cailliau (B, links) <a href="https://www.home.cern/science/computing/birth-web/short-history-web">[1]</a></figcation>
</figure>

Op **6 augustus 1991** werd dan de eerste website gelanceerd, wat de basis legde voor het moderne internet zoals we dat nu kennen. Dankzij deze innovaties bij CERN werd het internet toegankelijk voor een breder publiek en begon het snel te groeien en evolueren tot het internet dat je vandaag de dag kent.

<figure>
  <div style="display: flex; justify-content: space-around; align-items: center;">
    <img src="/img/screenshot1992.png" style="max-width: 99%; border: 2px solid black;"/>
    <img src="/img/screenshot1992_2.png" style="max-width: 99%; border: 2px solid black;"/>
    <img src="/img/screenshot1992_3.png" style="max-width: 99%; border: 2px solid black;"/>
  </div>
  <figcaption>Screenshots van 1992</figcation>
</figure>

In 1991 bestonden er dus slechts drie websites: `CERN`, de `World Wide Web Virtual Library`, een volledig overzicht dat manueel gecureerd werd, en het `Stanford Linear Accelerator Center`, dat werd opgezet na een bezoek aan CERN door Paul Kunz.

Een website bestaat uit **hypertext** dat opgeslagen wordt onder het [_HTML-formaat (HyperText Markup Language)_](/frontend/html_basics/). HTML is gebaseerd op **XML** waardoor alles in **open- en sluit-tags staat die een boomstructuur volgen**. Een HTML-bestand beschrijft **de structuur** van een document (Cfr. wetenschappelijke papers). Met hypertext kan je ook **figuren, videos en links inladen**. Zonder [CSS](/Frontend/css_basics/), wat in de begin jaren nog niet van toepassing was, kiest de browser de vormgeving bv:

<figure>
    <img src="/img/voorbeeldhtml.png" style="max-height: 15rem;"/>
    <figcaption>Voorbeeld HTML</figcation>
</figure>

## Het client-server model

Het client-server model is een architectuurprincipe waarbij taken en verantwoordelijkheden worden verdeeld tussen twee soorten entiteiten: `clients` en [`servers`](#een-server). In dit model fungeert de client als **de gebruiker of het apparaat dat verzoeken indient voor diensten of middelen**, terwijl de server deze **verzoeken verwerkt en de gevraagde diensten of middelen levert**. Het internet werk volgens dit model waarbij een [webbrowser](#webbrowser) (client) een verzoek stuurt naar een webserver om een webpagina op te halen. De server ontvangt het verzoek, verwerkt het en stuurt de benodigde gegevens terug naar de client, die deze vervolgens weergeeft. Dit model biedt schaalbaarheid, omdat meerdere clients tegelijkertijd verbinding kunnen maken met een enkele server, en flexibiliteit, omdat servers verschillende soorten diensten kunnen aanbieden aan verschillende clients. Nog een groot voordeel werd hierboven al aangehaald namelijk dat je slecht op 1 plaats (de server) je files moet updaten om veranderingen aan je webpagina tot aan de gebruiker te krijgen. Dit is helemaal anders voor software pakketten bijvoorbeeld waarbij elke gebruiker zelf een nieuwe versie moet downloaden en installeren indien die beschikbaar is.

<figure>
  <div style="display: flex; justify-content: space-around; align-items: center;">
    <img src="/img/clientservermodel_1.png" style="max-width: 99%; border: 2px solid black;"/>
    <img src="/img/clientservermodel_2.png" style="max-width: 99%; border: 2px solid black;"/>
  </div>
  <figcaption>Client-server model <a href="https://www.guru99.com/">[2]</a></figcation>
</figure>

Hieronder vind je in grote lijnen alle stappen die ondernomen worden zodat je uiteindelijk je gewenste website te zien krijgt:
1. Je geef de nodige [**URL**](#url) van je website in in je webbrowser.
2. Je voert zo met je webbrowser een [**HTTP-request**](#http-request) uit, meestal van het type GET. Dit verzoek vraagt om de inhoud van een specifieke webpagina.
3. De webbrowser gebruikt [DNS (Domain Name System) servers](#dns-server) om de domeinnaam om te zetten in een [**IP-adres**](#ip-adres), zodat je computer weet waar hij de server kan vinden die de websitebestanden beheert.
4. Je computer maakt een verbinding met de server via het internet. Dit gebeurt meestal via een reeks routers en netwerken die de gegevenspakketten naar de juiste bestemming sturen.
5. De server (de backend) ontvangt het HTTP-verzoek en stuurt de nodige frontend code (ook wel client-side code genoemd) terug naar de computer van de gebruiker. Deze code bestaat meestal uit HTML, CSS en [JavaScript](/Frontend/javaScript_basics/).
6. De webbrowser op je computer ontvangt de frontend code en begint met het renderen van de webpagina. Dit houdt in dat de HTML-structuur wordt opgebouwd, de CSS wordt toegepast om de pagina op te maken, en de JavaScript wordt uitgevoerd om interactieve elementen te laden.
7. Zodra de pagina volledig is geladen, kan de gebruiker ermee interageren. Dit kan variëren van het klikken op links en knoppen tot het invullen van formulieren en het uitvoeren van zoekopdrachten.
8. (Tijdens het gebruik van de webpagina kunnen er asynchrone verzoeken, zoals `AJAX`, worden uitgevoerd om extra gegevens van de server op te halen zonder de hele pagina te vernieuwen. Dit zorgt voor een dynamische en responsieve gebruikerservaring.)

## Verdere evolutie in de jaren 90 
**1992**: 50 a 60 sites. Volgens Guido Van Rossem (ontwerper Python).

**Eind 1993**: 623 websites. Volgens Matthew Gray van MIT (World Wide Web Wanderer). Websites zoals: ALIWEB (eerste zoekmachine), Bloomberg, IMDb, Internet Underground Music Archive, NASA, MTV, photo.net, Trojan Room coffee pot (Eerste webcam. Checken of de koffie klaar is), Wired.com ...

**Midden 1994**: 2738 websites. **Einde 1994**: al meer dan 10 000 websites, met onder andere: Apple, Microsoft, Pizzahut, Purple.com ...

_Via de [Waybackmachine](https://archive.org/web/) kan je sites bekijken zoals ze er op een bepaalde datum uitzagen in het verleden_

<!-- ## De allereerste browsers
- [WorldWideWeb browser](https://worldwideweb.cern.ch/)
- 1991: [violaWWW 0.8](https://en.wikipedia.org/wiki/ViolaWWW)
- 1993: [NCSA Mosaic] (https://en.wikipedia.org/wiki/Mosaic_(web_browser)) - door Marc Andreessen tot 07/01/1997, versie 3.0
- 15/12/1994: [Netscape Navigator](https://en.wikipedia.org/wiki/Netscape_Navigator) - Tot 20/2/2008, versie 9.0.0.6 

Browser wars
-->

## Webstandaarden
**HTML5** (HyperText Markup Language 5) is de nieuwste versie van de standaardtaal voor het structureren en presenteren van inhoud op het web. Het introduceert nieuwe elementen en API's die multimedia, grafische weergave en interactieve inhoud ondersteunen zonder de noodzaak van externe plug-ins. 

**ECMAScript** is de standaard waarop JavaScript is gebaseerd. Het definieert de specificaties voor scriptingtalen en zorgt voor consistentie en interoperabiliteit tussen verschillende implementaties van JavaScript.<br /> 
**JavaScript** zelf is een veelzijdige programmeertaal die wordt gebruikt om dynamische en interactieve webpagina's te creëren. Het stelt ontwikkelaars in staat om client-side scripts te schrijven die reageren op gebruikersinvoer, gegevens manipuleren en de gebruikerservaring verbeteren. 

## De eerste stack
De eerste echte vorm van een stack doet denken aan het Model-View-Controller (MVC) patroon, dat we al gezien hebben in het vak Software-ontwerp in Java bij de eerstejaars studenten van de opleiding Industriële Ingenieurswetenschappen (1BA IIW). Dit patroon helpt bij het creëren van duurzame software door de applicatie op te splitsen in modules met gescheiden verantwoordelijkheden.

Meer concreet kan je HTML, wat de inhoud en structuur bepaalt, vergelijken met het Model. CSS wat de styling voorziet, kan je zien als de View en JavaScript wat voor de interactie met de gebruiker zorgt als de Controller.

Een duidelijk voorbeeld wat weergeeft wat de kracht van **CSS** kan zijn en hoe je eenzelfde HTML-bestand een compleet ander gevoel kan geven met styling vind je op [csszengarden](https://www.csszengarden.com/). Verder kan je met CSS ervoor zorgen dat je website voldoet aan de eisen van een **Responsive Design** wat belangrijker wordt nu we meer en meer met verschillende devices met verschillende soorten schermen websites opvragen.

Met **JavaScript** kan je dan weer gebruikersinteractie verzorgen zoals **Formuliervalidatie en verwerking** of **Asynchrone communicatie**. Dat laatste is essentieel om een performante en responsive website te garanderen. Door gebruik te maken van technieken zoals AJAX (Asynchronous JavaScript and XML) en Fetch API, kunnen we gegevens van de server ophalen en verwerken zonder de hele pagina te herladen. Dit zorgt voor een soepelere gebruikerservaring, omdat de gebruiker niet hoeft te wachten op volledige pagina-verversingen. Bovendien maakt asynchrone communicatie het mogelijk om **meerdere verzoeken tegelijkertijd** af te handelen, wat de efficiëntie van de applicatie verhoogt. Hierdoor kunnen we real-time updates en dynamische inhoud bieden.

## Uitbreiding van de stack: de backend
Een webserver, zoals Apache, Nginx of Xitami, speelt een belangrijke rol in het hosten van websites en het beheren van de communicatie tussen de gebruiker en de server. Deze servers kunnen op een veilige manier **verbinding maken met databases** en andere systemen om dynamische inhoud te leveren.

In de vroege jaren '90 werd de **Common Gateway Interface (CGI)** geïntroduceerd als een manier om externe software, geschreven in talen zoals C en Perl, te integreren met webservers. Dit maakte het mogelijk om dynamische webpagina's te genereren op basis van gebruikersinvoer.

Later werden modules binnen de webserver zelf populairder, zoals PHP en ASP, die direct in de webserver konden worden geïntegreerd voor betere prestaties en eenvoudiger beheer.

Daarnaast zijn er taalafhankelijke servers ontwikkeld die specifiek zijn ontworpen voor bepaalde programmeertalen. Voorbeelden hiervan zijn Tomcat voor Java, Flask voor Python en Laravel voor PHP. Deze servers bieden geoptimaliseerde omgevingen voor het uitvoeren van applicaties geschreven in hun respectieve talen, wat de ontwikkeling en het onderhoud van webapplicaties vereenvoudigt.

## Een Full Stack met XAMPP
XAMPP is een gratis en open-source cross-platform full stack webserver oplossing, ontwikkeld door Apache Friends. Het is een acroniem dat staat voor **Cross-Platform, Apache, MySQL, PHP, en Perl**. XAMPP biedt een eenvoudige manier om een lokale webserver op te zetten op je eigen computer, wat ideaal is voor het ontwikkelen en testen van webapplicaties voordat ze naar een live server worden verplaatst.[6](https://www.apachefriends.org/index.html), [7](https://sourceforge.net/projects/xampp/)

### Belangrijkste Componenten van XAMPP
1. **Apache HTTP Server**: De webserver die HTTP-verzoeken afhandelt en webpagina's levert aan gebruikers.
2. **MariaDB**: Een relationele database die wordt gebruikt voor het opslaan en beheren van gegevens.
3. **PHP**: Een server-side scripting taal die wordt gebruikt voor het ontwikkelen van dynamische webpagina's.
4. **Perl**: Een programmeertaal die vaak wordt gebruikt voor tekstverwerking en systeembeheer.

### Voordelen van XAMPP
- **Eenvoudige Installatie**: XAMPP kan snel en eenvoudig worden geïnstalleerd op verschillende besturingssystemen, zoals Windows, Linux en macOS.
- **Gebruiksvriendelijk**: Het bevat een controlepaneel waarmee je gemakkelijk de verschillende componenten kunt starten en stoppen.
- **Veelzijdigheid**: Naast de basiscomponenten biedt XAMPP ook ondersteuning voor populaire webapplicaties zoals WordPress en Joomla.

Door de eenvoud en veelzijdigheid van XAMPP kunnen ontwikkelaars snel een WAMP (Windows, Apache, MySQL, PHP) of LAMP (Linux, Apache, MySQL, PHP) stack opzetten en direct aan de slag gaan met het bouwen en testen van hun projecten.[8](https://www.educba.com/what-is-xampp/)

## PHP
PHP, wat staat voor Hypertext Preprocessor, is een populaire server-side scripting taal die speciaal is ontworpen voor webontwikkeling. Hier zijn enkele kernpunten over PHP:
- **Server-side**: PHP wordt uitgevoerd op de server, wat betekent dat de code wordt verwerkt op de server voordat de resulterende HTML naar de browser van de gebruiker wordt gestuurd.
- **Dynamische webpagina's**: PHP maakt het mogelijk om dynamische inhoud te genereren, zoals het ophalen van gegevens uit een database en deze weergeven op een webpagina.
- **Gemakkelijk te leren**: PHP heeft een relatief lage leercurve, waardoor het toegankelijk is voor beginners.
- **Goed ondersteund**: PHP wordt ondersteund door de meeste webservers en kan eenvoudig worden geïntegreerd met verschillende databases, zoals MySQL.
- **Open source**: PHP is gratis te gebruiken en heeft een grote gemeenschap die bijdraagt aan de ontwikkeling en ondersteuning ervan.

Bovendien is PHP ook lightweight. Dit kan op verschillende manieren geïnterpreteerd worden: kleine footprint, beperkte features, gemakkelijk te leren (zoals hierboven vermeld), gemakkelijk snel en/of handig om uit te rollen. Alhoewel academici wat neerkijken op PHP maakt de makkelijke leercurve en het simpel uitrollen het toch een zeer interessante optie. ([w3schools PHP](https://www.w3schools.com/php/default.asp))

The full stack met HTML+CSS+JavaScript kan je op verschillende manieren aanmaken bijvoorbeeld met:
- JSP: Java Servlet Pages, dikwijls met Tomcat
- ASP: Active Server Pages: .NET-technologie
- React/ReactNative
- NodeJS
- HTML + CSS + PHP + Javascript

## Werken met een framework
**Definitie van een framework**:
> <cite>"Een universele, herbruikbare software-omgeving die software-ontwikkeling gemakkelijker maakt door enerzijds code aan te bieden en anderzijds een ontwikkelstijl op te leggen"</cite>

Voordelen van werken met een framework zijn: 
- Ontwikkeling gaat sneller
  - Framework kan een aantal taken zelf uitvoeren
- Minder kans op fouten
- Gemakkelijker onderhoud
- Grotere schaalbaarheid
- Veel ingebouwde features
- Legt filosofie/ontwerppatroon/ontwikkelstijl op: **vooral MVC!!**
  - + 	Beschermt ontwikkelaar tegen denkfouten
  - - 	Dwingt je in een weinig flexibele structuur 
  
### Laravel

Het populairste PHP framework is nog steeds Laravel. Dat komt door zijn sterke punten:
- Open source
- Mooie MVC
- Artisan tool die veel code genereert
- Database migraties & seeders
- Object georiënteerde code & beschikbare bibliotheken
- Gemakkelijke authorisatie en authenticatie
- Out-of-the-box ondersteuning voor zowel applicatiebouw als services
- Veel tutorials "Laracasts"   

<figure>
    <img src="/img/mvclaravel.png" style="max-height: 15rem;"/>
    <figcaption>MVC-filosofie van Laravel</figcation>
</figure>

## Evolutie JavaScript

JavaScript is sterk geëvolueerd en wordt nu niet alleen gebruikt voor single page applications in de browser, maar ook als server-side programmeertaal met behulp van **Node.js** bijvoorbeeld. Node.js maakt het mogelijk om JavaScript buiten de browser te draaien, waardoor het geschikt is voor server-side scripting en het bouwen van schaalbare netwerkapplicaties.

Een nieuwe en veelbelovende toevoeging aan het JavaScript-ecosysteem is **Svelte, samen met SvelteKit**. Svelte is een modern framework dat compileert naar **uiterst efficiënte JavaScript**, wat resulteert in snellere en kleinere applicaties. SvelteKit biedt een complete oplossing voor het bouwen van webapplicaties, inclusief **server-side rendering** en statische sitegeneratie, waardoor ontwikkelaars nog meer flexibiliteit en kracht krijgen bij het bouwen van moderne webapplicaties.

<figure>
    <img src="/img/sveltekit.png" style="max-height: 15rem;"/>
    <figcaption>Svelte + Svelte kit = Fast Fun Flexible <a href="https://svelte.dev/blog/sveltekit-2">9</a></figcation>
</figure>

## Termen uitgelegd

##### Het internet:
Het internet is een wereldwijd **netwerk van verbonden computers en servers** dat communicatie en informatie-uitwisseling mogelijk maakt. Het bestaat uit een reeks **protocollen en standaarden** die zorgen voor de overdracht van gegevens. Het internet stelt gebruikers in staat om toegang te krijgen tot een enorme hoeveelheid informatie, diensten en toepassingen, variërend van eenvoudige e-mails tot complexe webapplicaties. Door middel van het internet kunnen mensen wereldwijd met elkaar communiceren, samenwerken en informatie delen, wat het een essentieel onderdeel maakt van het moderne leven en de digitale economie.

**Wat is 'de Cloud' dan?**: De cloud verwijst naar een netwerk van servers die via het internet toegankelijk zijn en een breed scala aan diensten en middelen aanbieden, zoals opslag, databases, netwerken, software en analytische tools.

##### World Wide Web:
Dit is een systeem van onderling verbonden documenten en andere webbronnen, toegankelijk via het internet.  Het WWW maakt gebruik van **hypertext** om documenten te koppelen, waardoor gebruikers via **hyperlinks** van de ene pagina naar de andere kunnen navigeren. Het bestaat uit webpagina's die zijn geschreven in HTML en worden weergegeven door webbrowsers. 

##### Een server
Een server is simpelweg een (krachtige) computer (of systeem) dat middelen, data, diensten of programma's beheert en beschikbaar stelt aan andere computers, de zogenaamde **clients**, via een netwerk. Servers kunnen verschillende rollen vervullen, zoals het **hosten van websites**, het **beheren van e-mailverkeer**, het **opslaan van bestanden** of het **uitvoeren van applicaties**. Ze zijn essentieel voor het functioneren van netwerken en het internet, omdat ze de centrale punten zijn waar gegevens worden verwerkt en gedeeld. Servers draaien vaak gespecialiseerde software die is ontworpen om specifieke taken efficiënt en betrouwbaar uit te voeren.

##### Webbrowser
Dit is een applicatie waarmee gebruikers toegang kunnen krijgen tot en navigeren op het World Wide Web. Het stelt gebruikers in staat om webpagina's te bekijken, multimedia-inhoud af te spelen en online informatie te zoeken. Bekende webbrowsers zijn **Google Chrome, Mozilla Firefox, Microsoft Edge en Safari**. Webbrowsers **interpreteren en tonen HTML-code**, waardoor de inhoud van websites op een gebruiksvriendelijke manier wordt gepresenteerd.

##### URL
Dit is het adres dat wordt gebruikt om een specifieke bron op het internet te vinden. Het bestaat uit verschillende onderdelen die samen aangeven waar de bron zich bevindt en hoe deze kan worden benaderd. Een typische URL ziet er als volgt uit: `https://www.voorbeeld.com/pagina`.
<br />De belangrijkste onderdelen van een URL zijn:
- **Protocol**: Dit geeft aan welke methode wordt gebruikt om toegang te krijgen tot de bron. Bijvoorbeeld `http` of `https` (voor beveiligde verbindingen).
- **Domeinnaam**: Dit is het unieke adres van de website, zoals `voorbeeld.com`, waarbij de `.com` staat voor "commercial" en oorspronkelijk bedoeld was voor commerciële organisaties [3](https://man-man.nl/punt-com-betekenis-domeinnaam/). Landcodes, zoals `.be` voor België of `.de` voor Duitsland, worden aangeduid met _ccTLD's_ (country code top-level domains) en vertegenwoordigen specifieke landen [4](https://www.worldstandards.eu/nl/andere/internetlandcodes/). _Het aantal beschikbare domeinnamen is vast_, en ze worden verdeeld en beheerd door de _Internet Assigned Numbers Authority_ (IANA), die verantwoordelijk is voor de wereldwijde coördinatie van het Domain Name System (DNS). [4](https://www.worldstandards.eu/nl/andere/internetlandcodes/), [5](https://onlinemarketingagency.nl/marketingtermen/domeinnaam/).
- **Pad**: Dit geeft de specifieke locatie van een bestand of pagina op de server aan, zoals /pagina.

Een URL kan ook aanvullende informatie bevatten, zoals een poortnummer, queryparameters en fragmenten, die verdere specificaties geven over hoe de bron moet worden benaderd of weergegeven. (Deze dingen bespreken we verder in deze cursus en in de cursus van _"Cloud Computing"_)

##### HTTP-request
Een HTTP-request is een verzoek dat door een client, zoals een webbrowser, naar een server wordt gestuurd om toegang te krijgen tot een specifieke bron op het internet. Dit is **een protocol dat de regels en standaarden definieert voor de communicatie tussen clients en servers**. **HTTP (HyperText Transfer Protocol)** maakt het mogelijk om webpagina's, afbeeldingen, video's en andere inhoud op te vragen en te ontvangen. Een typisch HTTP-request bevat:
- **Headers**: Deze bevatten metadata over het verzoek, zoals de gebruikte browser, de gewenste taal, en de inhoudstypen die de client accepteert,
- **URL**: Dit is het adres van de bron die de client wil opvragen,
- **Method**: Dit geeft aan welke actie de client wil uitvoeren, zoals GET (gegevens opvragen), POST (gegevens verzenden), PUT (gegevens bijwerken), of DELETE (gegevens verwijderen),
- **Body**: Dit is het gedeelte van het verzoek dat gegevens bevat die naar de server worden gestuurd. In de body kunnen verschillende soorten gegevens worden opgenomen, zoals JSON (JavaScript Object Notation) of XML (eXtensible Markup Language).

De server ontvangt het verzoek, verwerkt het en stuurt een **HTTP-response** terug naar de client met de gevraagde gegevens of een foutmelding indien het verzoek niet kan worden vervuld.<br />
Enkele veelvoorkomende (fout)meldingen zijn:
- _200 OK_: Dit betekent dat het verzoek succesvol is verwerkt en de gevraagde bron is gevonden en teruggestuurd.
- _404 Not Found_: Deze foutmelding geeft aan dat de gevraagde bron niet is gevonden op de server. Dit kan gebeuren als de URL verkeerd is of de bron is verwijderd.
- _301 Moved Permanently_: Dit geeft aan dat de gevraagde bron permanent is verplaatst naar een nieuwe URL. De client moet de nieuwe URL gebruiken voor toekomstige verzoeken.
- _500 Internal Server Error_: Dit betekent dat er een algemene serverfout is opgetreden die het verzoek niet kon verwerken. Dit kan verschillende oorzaken hebben, zoals een fout in de serverconfiguratie of een probleem met de server zelf.
- _403 Forbidden_: Deze foutmelding geeft aan dat de server het verzoek begrijpt, maar weigert het uit te voeren. Dit kan te maken hebben met toegangsrechten of beveiligingsinstellingen.
- _400 Bad Request_: Dit betekent dat de server het verzoek niet kan verwerken vanwege een clientfout, zoals een onjuiste syntax of een ongeldig verzoek.

##### DNS server
Een DNS-server (Domain Name System-server) is een systeem dat domeinnamen vertaalt naar IP-adressen en omgekeerd. Wanneer je een webadres (zoals `www.voorbeeld.com`) in je browser invoert, stuurt je computer een verzoek naar een DNS-server om het bijbehorende **IP-adres** op te zoeken. Dit IP-adres is nodig om de juiste server te vinden en de gevraagde website te laden. DNS-servers fungeren als een soort telefoonboek voor het internet, waardoor gebruikers gemakkelijk toegang kunnen krijgen tot websites zonder de complexe numerieke IP-adressen te hoeven onthouden. Ze spelen een cruciale rol in het functioneren van het internet door ervoor te zorgen dat gegevens efficiënt en correct worden gerouteerd. Een populaire DNS Server is deze van google. Je vind deze terug op het IP-adres `4.4.4.4` of `8.8.8.8`

##### IP adres
Een IP-adres (Internet Protocol-adres) is een uniek numeriek label dat aan elk apparaat in een netwerk wordt toegewezen. Het dient twee hoofdfuncties: identificatie van het host- of netwerkinterface en adressering van de locatie. Er zijn twee soorten IP-adressen: **IPv4**, dat bestaat uit vier groepen cijfers gescheiden door punten (bijv. `192.168.0.1`), en **IPv6**, dat een langere, hexadecimale notatie gebruikt (bijv. 2001:0db8:85a3:0000:0000:8a2e:0370:7334).

**LAN (Local Area Network)** en **WAN (Wide Area Network)** zijn twee soorten netwerken die gebruik maken van IP-adressen, maar er zijn fundamentele verschillen:
- **LAN**: Dit is een netwerk dat een klein geografisch gebied beslaat, zoals een huis, kantoor of school. Apparaten binnen een LAN communiceren direct met elkaar via lokale IP-adressen. Een router binnen een LAN vertaalt deze lokale IP-adressen naar een openbaar IP-adres voor communicatie met externe netwerken.
- **WAN**: Dit is een netwerk dat een groot geografisch gebied beslaat, zoals een stad, land of zelfs de hele wereld. Het internet zelf is een voorbeeld van een WAN. WAN's verbinden meerdere LAN's met elkaar, waardoor apparaten in verschillende LAN's met elkaar kunnen communiceren via openbare IP-adressen.

##### Ports
Een port is een numerieke waarde die wordt gebruikt om **specifieke processen of diensten** op een netwerkapparaat te identificeren. Het fungeert als een **communication-endpoint** voor netwerkverbindingen. Ports zorgen ervoor dat gegevens naar de juiste applicatie of dienst op een apparaat worden gestuurd.

Er zijn twee soorten ports: well-known ports en dynamische of private ports. Well-known ports hebben vaste nummers (0-1023) en worden toegewezen aan veelgebruikte diensten zoals HTTP (port 80) en HTTPS (port 443). Dynamische of private ports (1024-65535) worden meestal toegewezen aan clienttoepassingen en kunnen variëren afhankelijk van de behoeften van de applicatie.

##### Mac adres
Een MAC-adres (Media Access Control-adres) is een uniek identificatienummer dat aan de netwerkinterfacekaart (NIC) van een apparaat is toegewezen. Dit adres bestaat uit 48 bits en wordt meestal weergegeven in zes groepen van twee hexadecimale cijfers, gescheiden door dubbele punten of streepjes (bijv. 00:1A:2B:3C:4D:5E).

Het MAC-adres wordt gebruikt op het datalinkniveau van het OSI-model om apparaten binnen een lokaal netwerk (LAN) te identificeren en te communiceren. In tegenstelling tot IP-adressen, die kunnen veranderen afhankelijk van het netwerk, blijft een MAC-adres constant voor een specifieke netwerkinterface. Dit maakt het een essentieel onderdeel voor netwerkbeheer, beveiliging en het oplossen van netwerkproblemen.