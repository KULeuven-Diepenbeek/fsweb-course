---
title: "Backend"
weight: 3
author: Arne Duyver
draft: true
---

## [XAMPP](https://www.apachefriends.org/download.html)

XAMPP is een gratis en open-source softwarepakket dat wordt gebruikt om een lokale webserveromgeving op te zetten. Het is een acroniem voor:

- **X** – Standaard voor verschillende besturingssystemen (Windows, macOS, Linux)
- **A** – Apache (de webserver)
- **M** – MySQL (of MariaDB, de database)
- **P** – PHP (de server-side programmeertaal)
- **P** – Perl (een andere scripttaal, minder vaak gebruikt in PHP-ontwikkeling)

### Waarom XAMPP gebruiken?

XAMPP maakt het eenvoudig om een complete ontwikkelomgeving op te zetten zonder dat je losse componenten zoals Apache, MySQL en PHP handmatig hoeft te installeren en configureren. Dit is vooral handig voor PHP-ontwikkeling, omdat je:

- Een lokale testomgeving hebt voordat je code naar een live server uploadt.
- Gemakkelijk databases kunt beheren met phpMyAdmin.
- Extra modules en instellingen kunt aanpassen via de ingebouwde configuratiebestanden.

### Installatie en Gebruik

1. **Download XAMPP** van de officiële website: [https://www.apachefriends.org](https://www.apachefriends.org)
2. **Installeer XAMPP** en selecteer de gewenste componenten (standaard zijn Apache, MySQL en PHP voldoende voor PHP-ontwikkeling).
3. **Start de server** via het XAMPP Control Panel.
4. **Plaats PHP-bestanden** (`index.php`) in de `htdocs/dashboard/mijnproject/`-map binnen de XAMPP-installatiemap.
5. **Toegang tot je projecten** via de browser op [`http://localhost/`](http://localhost/).

Met XAMPP kun je snel en eenvoudig aan de slag met PHP-ontwikkeling zonder afhankelijk te zijn van een externe server.

## Oefening

Installeer `apache2` en `mysql` (MariaDB) ook eens in je WSL (Windows Subsystem for Linux) via de commandline en probeer zonder een GUI interface een database aan te maken en eventueel wat SQL-code uit te voeren. Bovendien kan je hierna een lichtgewicht browser based GUI-tool zoals `adminer` installeren om te interageren met je database.

{{% notice warning %}}
`apache2` (80, 443), `mysql` (3306) en `adminer` (8080) gebruiken een aantal poorten om hun services op te hosten die overeenkomen met de poorten die XAMPP gebruikt op de host. Zorg er dus best voor dat je die services na deze oefening terug stopt met `sudo service <serviceName> stop` en disabled (niet starten bij startup) `sudo systemctl disable <serviceName>`. Als alternatief kan je er ook gewoon voor zorgen dat je WSL uitstaat m.b.v. `wsl --shutdown` te typen in PowerShell.
{{% /notice %}}