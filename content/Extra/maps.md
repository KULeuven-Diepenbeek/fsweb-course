---
title: "Het gebruik van maps-api's"
weight: 3
author: Arne Duyver
draft: false
---

_bron 1: [Leaflet - An open-source JavaScript library for mobile-friendly interactive maps](https://leafletjs.com/)_</br>
_bron 2: [Google Maps JavaScript API documentatie](https://developers.google.com/maps/documentation/javascript)_</br>
_bron 3: [W3Schools - Leaflet Tutorial](https://www.w3schools.com/graphics/google_maps_intro.asp)_

## Interactieve kaarten in websites

Het integreren van een interactieve kaart in een website is een veelvoorkomende taak in moderne webontwikkeling. Denk aan webshops die de locatie van een winkel tonen, apps die routes berekenen, of dashboards die geografische data visualiseren. Er zijn twee veelgebruikte opties: **Leaflet**, een open-source en gratis bibliotheek, en de **Google Maps API**, een krachtige betaalde service van Google.

| | Leaflet | Google Maps API |
|---|---|---|
| **Prijs** | Volledig gratis en open-source | Betalend boven een bepaalde drempel |
| **Kaartdata** | OpenStreetMap (standaard) of andere tile providers | Google Maps kaartdata |
| **Gemak** | Eenvoudig te starten, geen account nodig | API-sleutel vereist, uitgebreide documentatie |
| **Functionaliteit** | Lichtgewicht, uitbreidbaar via plugins | Zeer uitgebreid (routing, Places, Street View, ...) |

{{% notice info %}}
Voor academische en persoonlijke projecten is **Leaflet** met OpenStreetMap-data een uitstekende keuze: er is geen registratie nodig en er zijn geen kosten aan verbonden. De **Google Maps API** biedt meer functies maar vereist een Google-account en een betaalkaart voor registratie. Google geeft wel een maandelijks gratis krediet van $200, wat voor veel kleine projecten voldoende is.
{{% /notice %}}

---

## Leaflet

[Leaflet](https://leafletjs.com/) is een lichtgewichte, open-source JavaScript-bibliotheek voor het maken van interactieve kaarten. Het is de populairste open-source kaartbibliotheek en wordt gebruikt door websites als GitHub, Flickr en OpenStreetMap.

### Leaflet toevoegen aan je project

Je kan Leaflet op twee manieren opnemen in je project: via een CDN of door de bestanden lokaal te installeren. De eenvoudigste manier is via de CDN. Voeg volgende regels toe aan de `<head>` van je HTML-bestand:

```html
<head>
    <!-- Leaflet CSS -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
    <!-- Leaflet JavaScript -->
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
</head>
```

{{% notice warning %}}
Het is belangrijk dat je het CSS-bestand **vóór** het JavaScript-bestand laadt. Als je het CSS-bestand vergeet, ziet de kaart er niet correct uit: de tiles worden verkeerd gepositioneerd en de zoom-knoppen zijn onzichtbaar.
{{% /notice %}}

### Je eerste Leaflet-kaart

Een Leaflet-kaart heeft een container-element in je HTML nodig. Voeg een `<div>` toe met een `id` en een expliciete hoogte in je CSS, want een `<div>` is standaard 0 pixels hoog.

**HTML:**
```html
<div id="kaart"></div>
```

**CSS:**
```css
#kaart {
    height: 400px;
    width: 100%;
}
```

**JavaScript:**
```javascript
// 1. Maak de kaart aan en centreer op een coördinaat [lat, lon], zoomniveau
const kaart = L.map('kaart').setView([50.925385347781784, 5.392290118354094], 13); // UHasselt

// 2. Voeg een tile layer toe (de kaartafbeeldingen = de achtergrond van de kaart)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(kaart);
```

{{% notice info %}}
De `setView`-methode verwacht als eerste argument een array met respectievelijk de **breedtegraad** (latitude) en de **lengtegraad** (longitude), en als tweede argument het **zoomniveau** (1 = wereld, 18 = straatniveau). Coördinaten van plaatsen kan je gemakkelijk vinden via [openstreetmap.org](https://www.openstreetmap.org) door rechtstreeks op een punt te klikken.
{{% /notice %}}

### Markers, Popups en Circles

Leaflet maakt het eenvoudig om visuele elementen op de kaart te plaatsen.

#### Marker
Een marker wijst een punt aan op de kaart. Je kan er ook een popup aan koppelen die verschijnt wanneer de gebruiker op de marker klikt.

```javascript
const marker = L.marker([50.925385347781784, 5.392290118354094]).addTo(kaart);
marker.bindPopup('<b>Brussel</b><br>Hoofdstad van België.').openPopup();
```

#### Circle
Een cirkel visualiseert een gebied rondom een punt. Je geeft de straal op in meters.

```javascript
const cirkel = L.circle([50.925385347781784, 5.392290118354094], {
    color: 'red',      // randkleur
    fillColor: '#f03',  // vulkleur
    fillOpacity: 0.3,
    radius: 500         // straal in meters
}).addTo(kaart);
cirkel.bindPopup('Ik ben een cirkel met een straal van 500m.');
```

#### Polygon
Een polygon tekent een veelhoek door meerdere coördinaten met elkaar te verbinden.

```javascript
const polygon = L.polygon([
    [50.925385347781784, 5.392290118354094],
    [50.92893379263277, 5.395375800431507],
    [50.92788749805288, 5.385541994768053]
], { color: 'blue' }).addTo(kaart);
polygon.bindPopup('Ik ben een polygon.');
```

### Werken met GeoJSON

Leaflet heeft ingebouwde ondersteuning voor het **GeoJSON**-formaat, een standaard formaat om geografische data in JSON voor te stellen. Dit is handig wanneer je geografische data vanuit een API of database wil tonen.

```javascript
const geojsonData = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [5.385541994768053, 50.92788749805288]// Let op: GeoJSON gebruikt [lon, lat]!
            },
            "properties": {
                "naam": "Brussel",
                "beschrijving": "Hoofdstad van België"
            }
        }
    ]
};

L.geoJSON(geojsonData, {
    onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.naam) {
            layer.bindPopup(feature.properties.naam + ': ' + feature.properties.beschrijving);
        }
    }
}).addTo(kaart);
```

{{% notice warning %}}
Let op het verschil in volgorde van coördinaten: Leaflet gebruikt `[latitude, longitude]`, maar het GeoJSON-formaat omgekeerd: `[longitude, latitude]`. Dit is een veelgemaakte fout!
{{% /notice %}}

### Events afhandelen

Je kan reageren op gebruikersinteracties, zoals klikken op de kaart.

```javascript
kaart.on('click', function (event) {
    const latlng = event.latlng;
    L.popup()
        .setLatLng(latlng)
        .setContent('Je klikte op: ' + latlng.lat.toFixed(5) + ', ' + latlng.lng.toFixed(5))
        .openOn(kaart);
});
```

### Aangepaste marker-iconen

Standaard gebruikt Leaflet een blauw marker-icoontje. Je kan dit vervangen door een eigen afbeelding via `L.icon`.

```javascript
const mijnIcoon = L.icon({
    iconUrl: './img/mijn-marker.png',
    iconSize: [38, 38],        // breedte en hoogte in pixels
    iconAnchor: [19, 38],      // het punt van het icoon dat overeenkomt met de coördinaat
    popupAnchor: [0, -38]      // positie van de popup t.o.v. het iconAnchor
});

L.marker([50.925385347781784, 5.392290118354094], { icon: mijnIcoon }).addTo(kaart);
```

### De locatie van de gebruiker tonen

Moderne browsers bieden de **Geolocation API** aan waarmee je met JavaScript de huidige locatie van de gebruiker kan opvragen. De browser vraagt hiervoor eerst toestemming aan de gebruiker. Combineer je dit met Leaflet, dan kan je automatisch een marker plaatsen op de positie van de gebruiker en de kaart daarop centreren.

```javascript
// navigator.geolocation is ingebouwd in de browser, geen extra library nodig
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        function (positie) {
            const lat = positie.coords.latitude;
            const lng = positie.coords.longitude;
            const nauwkeurigheid = positie.coords.accuracy; // in meters

            // Centreer de kaart op de gebruiker
            kaart.setView([lat, lng], 16);

            // Marker op de gebruikerslocatie
            L.marker([lat, lng])
                .addTo(kaart)
                .bindPopup('📍 Jij bevindt je hier!<br>Nauwkeurigheid: ~' + Math.round(nauwkeurigheid) + ' m')
                .openPopup();

            // Optioneel: cirkel om nauwkeurigheid te visualiseren
            L.circle([lat, lng], {
                radius: nauwkeurigheid,
                color: '#3388ff',
                fillColor: '#3388ff',
                fillOpacity: 0.1
            }).addTo(kaart);
        },
        function (fout) {
            // Wordt opgeroepen als de gebruiker toestemming weigert of er een fout optreedt
            alert('Locatie kon niet worden bepaald: ' + fout.message);
        }
    );
} else {
    alert('Geolocatie wordt niet ondersteund door deze browser.');
}
```

{{% notice info %}}
`navigator.geolocation.getCurrentPosition()` verwacht twee callback-functies als argument: één die wordt uitgevoerd bij **succes** (met een `Position`-object) en één bij **fout** (met een `PositionError`-object). Het `coords`-object bevat naast `latitude` en `longitude` ook `accuracy` (nauwkeurigheid in meters), en optioneel `altitude`, `speed` en `heading`.
{{% /notice %}}

{{% notice warning %}}
De Geolocation API werkt **alleen over HTTPS** (of op `localhost`). Op een gewone `http://`-verbinding zal de browser de toestemming weigeren of de API helemaal niet beschikbaar stellen. Zorg dus dat je website via HTTPS wordt geserveerd als je deze functionaliteit wil gebruiken in productie.
{{% /notice %}}

### Locatie simuleren in Chrome DevTools

Tijdens ontwikkeling wil je de geolocation-functionaliteit vaak testen zonder je fysiek te verplaatsen. Chrome DevTools laat je een **nep-locatie** instellen zodat de browser een specifieke coördinaat teruggeeft alsof je daar bent.

**Stap voor stap:**

1. In de chrome developper tools, onder het tabblad **Sensors** vind je de sectie **Location**.
2. Kies in het dropdownmenu een vooraf ingestelde locatie, of kies **Other...** en vul zelf een **Latitude** en **Longitude** in.
3. Ververs de pagina of roep `getCurrentPosition()` opnieuw op — de browser gebruikt nu de nep-locatie.

![Chrome DevTools Sensors tab met locatie-override](https://i.sstatic.net/VskVY.png)

{{% notice info %}}
De **Sensors**-tab in DevTools laat je naast locatie ook andere hardware-sensoren simuleren, zoals oriëntatie (gyroscoop) en aanraakschermen. Dit is nuttig voor het testen van mobiele functionaliteit op een desktop.
{{% /notice %}}

Je kan ook snel een locatie kopiëren via [openstreetmap.org](https://www.openstreetmap.org): rechtsklik op een punt op de kaart en kies **Show address** of **Centre map here** — de coördinaten verschijnen in de URL als `#map=zoom/lat/lng`.

### Volledig (klein) Leaflet-voorbeeld

Hieronder vind je een volledig HTML-bestand dat alle bovenstaande elementen combineert:

```html
<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="utf-8" />
    <title>Leaflet Kaart</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
    <style>
        #kaart { height: 500px; width: 100%; }
    </style>
</head>
<body>
    <h1>Mijn Leaflet kaart</h1>
    <div id="kaart"></div>

    <script>
        const kaart = L.map('kaart').setView([50.8503, 4.3517], 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(kaart);

        // Marker met popup
        L.marker([50.8503, 4.3517])
            .addTo(kaart)
            .bindPopup('<b>Brussel</b><br>Hoofdstad van België.')
            .openPopup();

        // Cirkel
        L.circle([50.925385347781784, 5.392290118354094], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.3,
            radius: 300
        }).addTo(kaart).bindPopup('Een rode cirkel.');

        // Klik-event
        kaart.on('click', function (e) {
            L.popup()
                .setLatLng(e.latlng)
                .setContent('Coördinaten: ' + e.latlng.lat.toFixed(4) + ', ' + e.latlng.lng.toFixed(4))
                .openOn(kaart);
        });
    </script>
</body>
</html>
```

Via deze [knop](/files/map-example.html) kan je ook een voorbeeld html bestand downloaden/openen dat een iets uitgebreidere versie is van het voorbeeld hierboven.

---

## Google Maps API

De [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript) biedt toegang tot de volledige functionaliteit van Google Maps in je eigen website en ondersteunt naast basiskaarten ook routing, plaatsen zoeken en Street View. De API vereist een API-sleutel die je aanmaakt via de [Google Cloud Console](https://console.cloud.google.com/). Google biedt een gratis krediet van $200 per maand, wat voor de meeste kleine projecten voldoende is, maar je hebt wel een betaalkaart nodig om te registreren. De syntaxis verschilt van Leaflet: coördinaten worden als objecten `{ lat: ..., lng: ... }` meegegeven, markers worden aangemaakt via `new google.maps.Marker()` en events worden gekoppeld via `addListener()` in plaats van `on()`.

{{% notice warning %}}
Sla je API-sleutel **nooit op in publieke repositories** (zoals GitHub)! Gebruik omgevingsvariabelen of server-side rendering om je sleutel verborgen te houden, en beperk de sleutel tot specifieke domeinen en API's via de Google Cloud Console.
{{% /notice %}}

---

## Leaflet vs Google Maps: een vergelijking

Hieronder een overzicht van de syntaxverschillen om je te helpen de overgang tussen beide API's te maken.

| Concept | Leaflet | Google Maps |
|---|---|---|
| Kaart aanmaken | `L.map('id').setView([lat, lng], zoom)` | `new google.maps.Map(el, { center: {lat, lng}, zoom })` |
| Tile layer | `L.tileLayer(url).addTo(kaart)` | Ingebouwd in de API |
| Marker | `L.marker([lat, lng]).addTo(kaart)` | `new google.maps.Marker({ position: {lat, lng}, map })` |
| Popup/InfoWindow | `marker.bindPopup('tekst')` | `new google.maps.InfoWindow({ content: 'tekst' })` |
| Cirkel | `L.circle([lat, lng], { radius }).addTo(kaart)` | `new google.maps.Circle({ center: {lat, lng}, radius, map })` |
| Klik-event | `kaart.on('click', fn)` | `kaart.addListener('click', fn)` |
| Coördinaat (klik) | `event.latlng.lat` (property) | `event.latLng.lat()` (methode) |

{{% notice note %}}
Beide bibliotheken bieden **veel meer** functionaliteit dan hier beschreven. Zo biedt Leaflet een uitgebreid plugin-ecosysteem voor onder andere clustering van markers, heatmaps en routing. Google Maps biedt via andere API's de mogelijkheid om routes te berekenen (`Directions API`), adressen op te zoeken (`Geocoding API`) en nabijgelegen plaatsen te vinden (`Places API`). Raadpleeg de officiële documentatie voor een volledig overzicht.
{{% /notice %}}

---

## Routebeschrijvingen

Er zijn twee aanpakken om routes te tonen in je webapplicatie: een **interactieve route op een Leaflet-kaart** via een plugin, of een **eenvoudige link** die Google Maps opent in een nieuw tabblad. Welke aanpak je kiest hangt af van je vereisten: wil je de route ingebed in je eigen pagina, of volstaat een knopje dat de gebruiker doorstuurt?

### Routing in Leaflet met Leaflet Routing Machine

[Leaflet Routing Machine](https://www.liedman.net/leaflet-routing-machine/) is een plugin die routing toevoegt aan Leaflet. Standaard gebruikt het **OSRM** (Open Source Routing Machine) als routing-backend — volledig gratis en zonder API-sleutel.

**Stap 1: Plugin laden via CDN**

Voeg de CSS en JavaScript van de plugin toe **na** de Leaflet-bestanden:

```html
<head>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
    <!-- Leaflet Routing Machine -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet-routing-machine@3.2.12/dist/leaflet-routing-machine.css" />
    <script src="https://unpkg.com/leaflet-routing-machine@3.2.12/dist/leaflet-routing-machine.js"></script>
</head>
```

**Stap 2: Route aanmaken**

```javascript
const kaart = L.map('kaart').setView([50.9254, 5.3923], 10);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(kaart);

L.Routing.control({
    waypoints: [
        L.latLng(50.9254, 5.3923), // vertrekpunt: UHasselt
        L.latLng(50.8503, 4.3517)  // bestemming: Brussel
    ],
    routeWhileDragging: true       // route herbereken terwijl je waypoints versleept
}).addTo(kaart);
```

Dit toont automatisch een route op de kaart én een zijpaneel met stap-voor-stap instructies. De waypoints zijn versleepbaar zodat de gebruiker de route kan aanpassen.

{{% notice info %}}
Je kan meer dan twee waypoints opgeven — voeg extra `L.latLng(...)`-elementen toe aan de `waypoints`-array om tussenstops in te lassen.
{{% /notice %}}

{{% notice warning %}}
De OSRM demo-server die standaard gebruikt wordt (`router.project-osrm.org`) is **alleen bedoeld voor ontwikkeling en testing**. Voor productie-gebruik moet je een eigen OSRM-instantie hosten of een betaalde routing-service zoals [Mapbox Directions](https://docs.mapbox.com/api/navigation/directions/) gebruiken.
{{% /notice %}}

---

### Eenvoudige link naar Google Maps

Je hebt **geen API-sleutel en geen JavaScript** nodig om een klikbare link te maken die Google Maps opent met een kant-en-klare route. Google biedt hiervoor een speciale URL-structuur aan via de [Maps URLs-documentatie](https://developers.google.com/maps/documentation/urls/get-started). Dit is ideaal voor situaties waar je niet een volledige kaart wil inbedden, maar de gebruiker simpelweg wil doorsturen — denk aan een "Plan je route"-knop op een contactpagina.

**URL-structuur:**

```
https://www.google.com/maps/dir/?api=1&destination=<bestemming>
```

| Parameter | Beschrijving |
|---|---|
| `api=1` | Verplicht — geeft aan dat je de URL-API gebruikt |
| `destination` | Bestemming als coördinaten (`lat,lng`) of als adres |
| `origin` | Vertrekpunt (optioneel — als je dit weglaat, gebruikt Google Maps de locatie van de gebruiker) |
| `travelmode` | Reismodus: `driving` (auto), `walking` (te voet), `bicycling` (fiets) of `transit` (openbaar vervoer) |

**Bestemming als coördinaten:**
```html
<a href="https://www.google.com/maps/dir/?api=1&destination=50.8503,4.3517" target="_blank" rel="noopener">
  Open route in Google Maps
</a>
```

**Bestemming als adres:**
```html
<a href="https://www.google.com/maps/dir/?api=1&destination=Grote+Markt+1,+1000+Brussel" target="_blank" rel="noopener">
  Route naar de Grote Markt
</a>
```

**Vertrekpunt én bestemming én reismodus:**
```html
<a href="https://www.google.com/maps/dir/?api=1&origin=50.9254,5.3923&destination=50.8503,4.3517&travelmode=driving" target="_blank" rel="noopener">
  Route van UHasselt naar Brussel (auto)
</a>
```

{{% notice info %}}
Gebruik `target="_blank"` om de kaart in een nieuw tabblad te openen, zodat de gebruiker je website niet verliest. Voeg altijd `rel="noopener"` toe bij `target="_blank"` om een beveiligingsrisico te vermijden waarbij de nieuwe pagina toegang zou kunnen krijgen tot het `window`-object van je eigen pagina.
{{% /notice %}}

{{% notice tip %}}
Spaties in adressen vervang je door `+` of `%20`. Coördinaten schrijf je als `breedtegraad,lengtegraad` (zonder spatie na de komma). Je kan coördinaten snel opzoeken via [openstreetmap.org](https://www.openstreetmap.org) of via Google Maps zelf door op een punt te rechtsklikken.
{{% /notice %}}