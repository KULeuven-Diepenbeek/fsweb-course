---
title: "Laravel: basics"
weight: 4
author: Arne Duyver
draft: false
---

## Why Laravel?
- framework -> templates
  - faster
  - libraries
  - MVC model
  - very popular option -> a lot of information
- more secure -> because php is datasensitive
  - built-in security features
  - automatic integration with database

## Handige VSCode plugins voor Laravel

- [PHP Intelephense](https://marketplace.visualstudio.com/items?itemName=bmewburn.vscode-intelephense-client)
- [Laravel Blade Snippets](https://marketplace.visualstudio.com/items?itemName=onecentlin.laravel-blade)
- [Laravel Extension Pack](https://marketplace.visualstudio.com/items?itemName=onecentlin.laravel-extension-pack)

## Install Laravel

**_De documentatie waar je met al je vragen terecht kan is [hier](https://laravel.com/docs/12.x/readme)_**

##### Edit php.ini file
<br>**line 962**
uncomment (delete semicolon in fromt) extention=zip
<br>**line 930**
uncomment extention=fileinfo
<br>**line 942**
uncomment extention=openssl
<br>**line 944**
uncomment extention=pdo_mysql

##### Add php.exe to path variables (new system variable)
name: PHP <br>
location: C:\xampp\php

##### Add dependency manager: [Composer](https://getcomposer.org/download/)
download .exe <br>
<!-- add to path: C:\ProgramData\ComposerSetup\bin -->

##### Install Laravel using Composer
Met volgende commando kan je Laravel installeren
`$ composer global require laravel/installer`

{{% notice info %}}
**Composer** is een dependency manager voor PHP, die helpt bij het beheren van de externe libraries en pakketten die een project nodig heeft. Composer zorgt ervoor dat alle benodigde dependencies automatisch worden gedownload en bijgewerkt. Het maakt het eenvoudig om nieuwe pakketten toe te voegen en bestaande pakketten te beheren, wat bijdraagt aan een gestroomlijnde en georganiseerde ontwikkelomgeving.
{{% /notice %}}

##### Create laravel project in your project folder
Wanneer laravel correct geinstalleerd is kan je simpelweg een nieuw project aanmaken met:
`$ laravel new <projectName>`. Hierbij kiezen we dan voor de volgende functies:
```
starterkit -> none
Pest -> 0 (testing framework, PHPUnit is ouder) 
Git -> no 

db -> mysql (via XAMPP)
default database migrations -> yes (make sure MySQL server is turned on in XAMPP)
```

Indien het aanmaken van je Laravel project slaagt zonder errors kan je Laravel een lokale server laten draaien op poort 8000 om je website te testen met het commando:
```bash
php artisan serve
```

output:
```bash
PS C:\xampp\htdocs\dashboard\laravel-demo1> php artisan serve             

   INFO  Server running on [http://127.0.0.1:8000].

  Press Ctrl+C to stop the server
```

{{% notice info %}}
**Artisan** is de command-line interface van Laravel, ontworpen om ontwikkelaars te helpen bij het uitvoeren van veelvoorkomende taken zoals het genereren van boilerplate code, het migreren van databases, en het beheren van applicatieconfiguraties.
{{% /notice %}}

### Laravel project structure
Laravel maakt voor jou al een heel deel files en folders aan. Enkele van de belangrijkste zijn:
- de views in `/resources/views`: genaamd `.blade.php`-files. Dit zijn speciale PHP files zodat we op een makkelijke manier andere files erin kunnen includen en onze HTML-code kunnen opsplitsen en meerdere files. Ook kan je met speciale blade syntax aan dataverwerking doen. Zo kan je bijvoorbeeld voor een lijst van users voor elke user de usernaam laten tonen met een `@for`-loop.
- de `web.php`-file in `/routs`. Hierin zal je alle endpoints specifiek moeten vermelden. In tegenstelling tot een simpel php-project worden nu standaard alle files onbeschikbaar gemaakt via de frontend voor de eindgebruiker. Stel dat je dus een `helloworld.blade.php`-view hebt kan je als eindgebruiker toch niet aan deze view geraken met `http://www.mijnwebsite.be/helloworld`. Wil je dat `/helloworld` toch beschikbaar is als endpoint dan moet je hier specifiek een entry voor aanmaken in de `web.php`-file.
- de `public`-folder: Hierin moeten alle files komen die beschikbaar moeten zijn vanuit de frontend bijvoorbeeld CSS-files, JavaScript files, afbeeldingen ... (Je kan aan de bestanden van de folder geraken door `{{ asset('<file_in_de_public_folder>') }}` te gebruiken in je `.blade.php` files bijvoorbeeld) 
- de `.env`-file. Hier plaats je een aantal standaard waarden zodat je in andere delen van de applicatie naar deze file kan verwijzen om de correcte waarde te krijgen. Zo kan je de naam van je app ingeven als de `APP_NAME` environment variable en dit dan gebruiken met `env("APP_NAME")`. Zo kan je op één plaats (namelijk in de env file) de naam van je app aanpassen en overal waar je `env("APP_NAME")` gebruikt zal dit automatisch aangepast worden. Ideaal bijvoorbeeld voor titels en dergelijke. (`.env`-files worden vaak gebruikt om wachtwoorden en api-keys op te slaan. Deze file wordt dan standaard ook niet mee opgenomen in een versiebeheer door de file toe te voegen aan de `.gitignore` file. Om eventueel andere gebruikers toch te tonen hoe zo een file er moet uitzien geef je dan een `.env.example` mee in de versiegeschiedenis waar alle sensitieve data verwisseld is met dummy data)

![laravel-projectstructure](/img/laravel-projectstructure.png)

**Kort overzicht belangrijke folders**
- `app` folder: Application logic
  - `Http` folder: behandelt http-requests met behulp van `Controllers` en `Models`
  - `Models` folder: denk aan modellen in Java
- `database` folder: Alles te doen met de database
  - `factories` folder: Hierin worden files geschreven waarmee je dummy modellen kan aanmaken als PHP objecten
  - `migrations` folder: Hierin komen de files die bepalen hoe je `Models` omgezet moeten worden naar database tables
  - `seeders` folder: Hierin worden files geschreven waarmee je de database tabellen kan vullen met dummy data.
- `public` folder: Alle files die publicly accessible moeten zijn in onze website zoals `javascript`, `css`, `images`
- `resources` folder: Hier komen alle resources in zoals css-files en js-files, maar **let op**: in deze map gaat het over css en js code die nog door andere programma's zoals Tailwind of TypeScript gecompileerd moeten worden naar client-side code. Die code wordt dan gecompileerd naar vanilla css en js files die in je `public`-folder terecht komen!
  - `views` folder: Alle `.blade.php` (alle HTML) files komen hierin, je kan ook met subfolders werken
- `routes` folder: Hierin gaan we al onze endpoints definiëren. Dit is dus hoofdzakelijk server side code.
  - `web.php`: website endpoints die je kan bezoeken 
  - `api.php`: alle HTTP-requests handelen zoals GET, POST, DELETE ...
- `storage` folder: alle log files komen hierin. Niet zo belangrijk voorlopig.
- `tests` folder: alle testen, gaan we niet dieper op in.
- `.env` file: hierin moeten we de gegevens van onze database connectie correct invullen, en kunnen we andere omgevingsvariabelen declareren.

#### Routes: web.php
Zoals hierboven vermeld moeten alle routes/endpoints die beschikbaar moeten zijn voor de eindgebruiker hier gedefinieerd worden. Om beveiligingsredenen moet je `@csrf` vermelden in je form, anders zal je een `419 Page Expired: CSRF token missing or invalid` error krijgen. Je maakt een functie aan die dan de gewenste HTML code returned, dit kan in de vorm van een html-string zijn of in de vorm van een volledige `.blade.php` view. Je kan endpoints ook een specifieke naam meegeven met `->name('denaam')` zodat je met `{{ route('denaam') }}` een verwijzing kan maken naar dat endpoint in een `<a>`-element bijvoorbeeld:
```php
<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
})

Route::get('/test', function () {
    return "<h1>Test</h1>";
})->name("denaam");
```

Je kan ook verschillende parameters opvangen die via GET-requests meegestuurd kunnen worden. Hieronder vind je twee voorbeeld van twee verschillende manieren waarmee je info kan opvangen uit de request. In de eerste methode krijg je de info rechtstreeks uit de URL en in de tweede methode haal je de parameters uit de GET-request zelf. Hiervoor heb je wel een import van de library `Illuminate/Http/Request` nodig.
- Voorbeeld 1: 
```php
Route::get('/test/{name}', function ($name) {
    return "$name";
});
```
- Voorbeeld 2:
```php
use Illuminate\Http\Request;

Route::get('/test2', function (Request $request) {
    return $request->get("name");
});
```

Verder kan je ook data doorgeven aan blade views die dan gebruikt kan worden in de balde.php met `{{ $mijndata }}`
```php
Route::get('/test3', function () {
    $mijndata = "Hello world";
    return view('test3', ["mijndata" => $mijndata]);
});
```

#### Views: blade.php

**Blade** is een krachtige, eenvoudige en flexibele templating engine die standaard wordt meegeleverd met het Laravel PHP-framework. Blade-templates gebruiken een lichte syntaxis die het schrijven van HTML en PHP-code in dezelfde bestanden mogelijk maakt, zonder de noodzaak van complexe PHP-structuren. Dit maakt het eenvoudiger om **dynamische inhoud** te genereren en te beheren. Blade biedt ook handige functies zoals sjabloon-erfenis, secties en weergavecomponenten, waardoor ontwikkelaars herbruikbare en onderhoudbare code kunnen schrijven.

##### Verschillende .blade.php files combineren
Je kan een `layout.blade.php` aanmaken die als een soort template dient voor alle verschillende pagina's op je website. Hierin definieer je dan alles wat op die webpagina's gemeenschappelijk moet zijn zoals header, footer, menu ... In de layout specificeer je (met `@yield('section_naam')`) dan waar content moet komen die kan veranderen tussen de verschillende pagina's. Hier een klein voorbeeld:
```php
<!DOCTYPE html>
<html>
  <head>
    <title>Mijn website</title>
    <link href="{{ asset('style.css') }}" rel="stylesheet">
    <script src="{{ asset('script.js') }}" defer></script>
    @yield('extra_imports')
  </head>

  <body>
    <h1>Mijn website</h1>
    @yield('content')
  </body>
</html>
```
Een individuele webpagina die dan de template gebruikt kan er dan als volgt uitzien:
```php
@extends('layout')

@section('extra_imports')
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" />
@stop

@section('extra_imports')
<p>
  Hier is de specifieke content voor deze webpagina.
</p>
@stop
```

Merk op dat je nu dus heel overzichtelijke code kan schrijven door verschillende delen op te splitsen en dat je het aantal gedupliceerde code sterk verminderd. Zo moet je op zo weinig mogelijk plaatsen iets aanpassen. 

Met `@extends('blade_naam')` geef je aan welke file je wil uitbreiden en met de `@section('section_naam')` en `@stop` kan je dan specifieke content injecteren. Als je gewoon een hele file wil includen kan je `@include('file_name')` gebruiken. Zitten je files in een specifieke directory dan kan je de directories scheiden met een `.` bijvoorbeel `@extends('layouts.layout')` als de `layout.blade.php` in een subfolder `layouts` zit.

Merk bovendien ook op dat je je JavaScript files, CSS files en andere assets zoals images kan opvragen via `{{ asset('path/to/document.extension') }}` Die assets moeten wel in de `public`-folder zitten want anders kan die niet door de client side bereikt worden.

Variabelen die werden doorgegeven aan een parent blade view zijn ook toegankelijk binnenin de children.

Verder kan je nog veel meer doen met die blade files zoals, `if-else` statements toevoegen en/of `for`- en `while`-loops. Een voorbeeld hiervan vind je hieronder:
```php
<!DOCTYPE html>
<html>
<head>
    <title>Blade Control Structures</title>
</head>
<body>
    <h1>User Status</h1>
    @if ($name == "arne")
        <p>Welcome, Admin Arne!</p>
    @elseif ($name == "frank")
        <p>Welcome, Editor Frank!</p>
    @else
        <p>Welcome, Guest!</p>
    @endif

    <h2>For Loop Example</h2>
    @for ($i = 0; $i < 5; $i++)
        <p>Iteration: {{ $i }}</p>
    @endfor

    <h2>While Loop Example</h2>
    @php
        $count = 0;
    @endphp
    @while ($count < 3)
        <p>Count: {{ $count }}</p>
        @php
            $count++;
        @endphp
    @endwhile
</body>
</html>
```

#### Components

Je kan verschillende (korte) `.blade.php` code genereren die als custom snippets dienen binnenin je andere views zoals bijvoorbeeld een `blogpost.blade.php` bevat alle code om een een soort kaartje aan te maken met de blogpost titel, text en auteur. Je kan zo verschillende snippets als `Components` (bouwblokken) waarmee je dan grotere webpagina's kan opbouwen. Meestal groeperen we die components onder een subfolder genaamd `components` in de views folder. 

Bijvoorbeeld:
```php
// Component
{{-- resources/views/components/alert.blade.php --}}
<div class="alert alert-{{ $type }}">
  {{ $message }}
</div>

// Usage
@include('components.alert', ['type' => 'success', 'message' => 'Operation completed!'])
```

In Laravel kan je echter ook specifieke components aanmaken gecombineerd met een PHP Model voor de logica en dan op een zeer beknopte manier gebruiken in je project. Een voorbeeld hiervan kan een mooi gestylede button zijn. Dit gaan we hier echter niet verder bespreken maar je kan wel in [de documentatie](https://laravel.com/docs/12.x/blade#components) een kijkje nemen voor meer info.

### dump(), var_dump() en dd()
Je kan op drie verschillende manieren data "loggen" in Laravel:
- `var_dump($variabelenaam)`: een droge printout met minimale informatie over het type en de waarde van de variabele.
- `dump($variabelenaam)`: een mooier geformatteerde printout van de variabel waarmee je het hele object kan inspecteren.
- `dd($variabelenaam)`: een printout zoals `dump()` maar verdere uitvoering van PHP-code wordt gehalt. Dit kan handig zijn wanneer verdere PHP code een error oproept in Laravel.

### Storing files
Om files of images op te slaan in de backend kan je de functie `storage` gebruiken. Waar en de manier waarop dingen worden opgeslagen kan je terugvinden in de `config/filesystems.php`. Het deel wat we interessant vinden is:
```php
// filesystems.php
...

/*
    |--------------------------------------------------------------------------
    | Filesystem Disks
    |--------------------------------------------------------------------------
    |
    | Below you may configure as many filesystem disks as necessary, and you
    | may even configure multiple disks for the same driver. Examples for
    | most supported storage drivers are configured here for reference.
    |
    | Supported drivers: "local", "ftp", "sftp", "s3"
    |
    */

    'disks' => [

        'local' => [
            'driver' => 'local',
            'root' => storage_path('app/private'),
            'serve' => true,
            'throw' => false,
            'report' => false,
        ],

        'public' => [
            'driver' => 'local',
            'root' => storage_path('app/public'),
            'url' => env('APP_URL').'/storage',
            'visibility' => 'public',
            'throw' => false,
            'report' => false,
        ],
        ...
    ]
...
```

Hierin wordt beschreven dat dingen die je in de Storage opslaat in de `app/private` of `app/public` folder onder de hoofdfolder `storage` terecht komen. Als je zo een file, bijvoorbeeld een afbeelding later ook terug in je html wil gebruiken dan moet die opslaan in de public met:
```php
$imagePath = $request->image->store('images', 'public');
```
De return van `store` geeft je het pad terug waar je de file later dan mee kan terugvinden met bijvoorbeeld: `"/storage/{{ $imagepath }}"`

Om de storage te activeren moet je wel eerst nog het volgende commando gebruiken:
```bash
php artisan storage:link
```

Hieronder een voorbeeld over hoe je met een form een afbeelding kan opslaan en dan kan tonen:
- Form in de view `uploadimage.blade.php`: **Opgelet: je moet nu zeker ook `enctype="multipart/form-data"` als attribuut toevoegen aan je form-tag**
```php

<form action="{{ route('process.imageupload') }}" method="POST" enctype="multipart/form-data">
    @csrf
    <label for="image">image:</label>
    <input type="file" id="image" name="image">
    <button type="submit">upload</button>
</form>

```

- Web.php route die de post-request behandelt:
```php
Route::post('/imageupload', function (Request $request) {

    $request->validate([
        'image' => 'required|image'
    ]);

    $imagePath = $request->image->store('images', 'public');

    return view('showimage', ['imagepath' => $imagePath]);
    
})->name('process.imageupload');
```

- De view om de image te tonen `showimage.blade.php`:
```php
<img src="/storage/{{ $imagepath }}" width="300px" />
```

[Zie ook de documentatie](https://laravel.com/docs/12.x/filesystem#storing-files)