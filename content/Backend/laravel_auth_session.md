---
title: "Laravel: authentications and sessions"
weight: 6
author: Arne Duyver
draft: false
---

## Wat verstaan we onder security

In dit deel gaan we het hebben over security in Laravel. Je mag dit zeer breed beschouwen, dit gaat onder andere over form-validation, authentication, cookies, session tokens (data opslaan in sessions),  ...

## Authentication
Voor authentication kunnen we het standaard model `User` gebruiken dat automatisch wordt aangemaakt wanneer we een nieuw Laravel project starten. Een user heeft minstens volgende waarden: `name`, `email`, `password`. Waarbij het email adres uniek moet zijn en alle velden niet null mogen zijn. In de database is de primary key gewoon een auto increment. Merk ook op dat in het `User` model het `password` en een `remember_token` als `$hidden` opgeslagen worden, waardoor het wachtwoord gehashed en veilig opgeslagen wordt in de database, zoals we gezien hebben in [de sectie rond veiligheid](Extra/websecurity.md#wachtwoorden-veilig-opslaan-in-een-database).

Wanneer je een bestaande `$user` hebt, kan je hem/haar inloggen met:
```php
use Illuminate\Support\Facades\Auth;

Auth::login($user);
```
Uitloggen kan dan met:
```php
Auth::logout();
```
Wanneer een user is ingelogd zijn de gegevens van de ingelogde gebruiker op te vragen via:
```php
$name = Auth::user()->name;

// In balde.php wordt dit bijvoorbeeld:
{{ Auth::user()->name; }}
```
De gebruiker wordt opgeslagen in de huidige [`Session`](#session).

### Form validation
Wanneer een nieuwe gebruiker aangemaakt wordt met een form in de vorm van `name`, `email`, `password`, `password_confirmation`. Dan kan je in de frontend al een aantal dingen valideren zoals met behulp van het `type` attribuut voor `email` bijvoorbeeld. Nu willen voor de zekerheid dit ook nog **in de backend valideren**. Dit kan op een simpele manier in Laravel met `$request->validate(...)`.
```php
$validated = $request->validate([
    'name' => 'required|string|max:225',
    'email' => 'required|email|unique:users',
    'password' => 'required|string|min:8|confirmed',
]);

// Indien validated ok, dan wordt de associative array opgeslagen in de variabele $validated en kan je dit simpel gebruiken om bijvoorbeeld een User aan te maken
$user = User::create($validated);
```
_De laatste validator bij `password` is nog een speciale, die kijkt namelijk onmiddelijk na of de waarde overeen komt met die van `password_confirmation`, maar dan moet dat input veld ook die specifieke naam van `_confirmation` hebben._

Indien er bij de `validate()` functie een error opduikt, gebeurt er automatisch een redirect naar de pagina die het HTTP-request stuurde wat de validate opriep (Dit komt omdat `validate` dan een `ValidationException` opwerpt). Hierbij worden dan alle errors meegegeven aan die pagina in de `$errors` variabele. Deze kan je dan displayen op de volgende manier in je blade.php:
```php
@if ($errors->any())
    <ul>
        @foreach ($errors->all() as $error)
            <li>{{ $error }}</li>
        @endforeach
    </ul>
@endif
```

_Voor meer info over de validator opties refereer ik naar [de Laravel documentatie](https://laravel.com/docs/12.x/validation#manually-creating-validators)_

Een user die je juist hebt aangemaakt, zal je natuurlijk rechtstreeks kunnen inloggen, maar wanneer een user wil inloggen met zijn/haar email en wachtwoord zijn we natuurlijk niet zeker dat die gebruiker wel al effectief bestaat. Hiervoor moeten we de `Auth::attempt` functie gebruiken:
```php
$validated = $request->validate([
    'email' => 'required|email',
    'password' => 'required|string',
]);

// Auth::attempt($validated) geeft true terug als die een user kan terugvinden.
if (Auth::attempt($validated)){
    return redirect()->route('home')
}

// We kunnen nu zelf ook een ValidationException opwerpen met eigen messages als we dat willen
throw ValidationException::withMessages([
    'credentials' => 'Sorry, incorrect credentials',
    'keyvoorbeeld' => 'valuevoorbeeld',
]);
```

### Different content for authenticated users and guests
Vaak willen we onze pagina's beschermen zodat je de content alleen te zien krijgt wanneer er een gebruiker is ingelogd, daarvoor kunnen we de `@auth` gebruiken in balde.php:
```php
@auth
    <h1>Welcome to home {{ Auth::user()->name }}</h1>
    <form action="{{ route('logout') }}" method="POST">
        @csrf
        <button type="submit">logout</button>
    </form>
@endauth
```

We kunnen ook specifieke content tonen wanneer er niemand geauthenticeerd is met behulp van `@guest`:
```php
@guest
    <p>Je bent nog niet ingelogd! Klik hieronder om naar de inlogpagina te gaan</p>
    <a href={{ route('login') }}>login</a>
@endguest
```

### Protected routes: auto redirect
Je kan ook automatisch in je `web.php` specifieke routes beschermen zodat je niet naar deze endpoints kan gaan tenzij je ingelogd bent. Ben je niet ingelogd dan wordt je automatisch naar het `login` endpoint gestuurd als dat bestaat. We moeten hiervoor de `middleware('auth')` functie voor gebruiken:
```php
Route::get('/home', function () {
    return view('home');
})->middleware('auth');
```
Je kan ook meerdere routes tegelijk als een groep beveiligen, dat doe je op de volgende manier:
```php
Route::middleware('auth')->group(function () {
    Route::get('/route1', ...);
    Route::get('/route2', ...);
});
```

{{% notice note %}}
Je kan op gelijkaardige manier ook `Controllers` groeperen
{{% /notice %}}

```php
Route::post('/create-user', [UserController::class, "store"])->name("createuser");
Route::get('/login-user', [UserController::class, "show"]);
Route::post('/logout', [UserController::class, "logout"])->name("logout");

// Wordt dan 

Route::controller(UserController::class)->group(function () {
    Route::post('/create-user', "store")->name("createuser");
    Route::get('/login-user', "show");
    Route::post('/logout', "logout")->name("logout");
});
```

### Session
Een session in Laravel is een mechanisme om data tussen verschillende HTTP-verzoeken te bewaren, waardoor een continue gebruikerservaring mogelijk wordt gemaakt. Wanneer een gebruiker inlogt, wordt er een unieke **sessiontoken** gegenereerd. Deze token wordt opgeslagen aan de frontend, meestal in een cookie, en komt overeen met **een record in de backend**(bijvoorbeeld in de database, een bestand of een cacheopslag). Hierdoor kan de applicatie bij elk verzoek controleren bij welke sessie de gebruiker hoort.

Het koppelen van een gebruiker aan een sessie gebeurt door de sessietoken die met elk verzoek wordt meegestuurd te vergelijken met de token die op de server is opgeslagen. Als de tokens overeenkomen, weet Laravel welke sessie (en dus welke gebruiker) aan het verzoek gerelateerd is. Deze sessie bevat vervolgens alle relevante gegevens, zoals authenticatie-informatie en **andere gebruikersspecifieke data**. Zo zorgt Laravel ervoor dat de identiteit van de gebruiker en de bijbehorende sessie consistent en veilig beheerd worden gedurende het gebruik van de applicatie.

#### Session safety
Het is belangrijk dat je tokens ook wijzigt wanneer je ze niet meer wil gebruiken, bijvoorbeeld wanneer een gebruiker uitlogt:
```php
Auth::logout();
// Completely remove all items from session
$request->session()->invalidate();
$request->session()->regenerateToken(); //Regenerates among others the @csrf tokens 
```
Ook wanneer je als een nieuwe gebruiker inlogt is het een goed idee om je een nieuwe token te genereren:
```php
if (Auth::attempt($validated)) {
    $request->session()->regenerate();
    ...      
}
```
#### Werken met session variabelen
Je kan ook eigen data opslaan in een Session zodat die data beschikbaar blijft tijdens de sessie van de gebruiker doorheen alle HTTP requests dat hij/zij doet. De waarden worden als Key-Value pairs opgeslagen:
```php
// Save values
Session::put([
    'key1' => 'value1',
    'key2' => 'value2'
]);
// // OR
// $request->session()->put([
//     'key1' => 'value1',
//     'key2' => 'value2'
// ]);

// Remove multiple keys
Session::forget(['key1', 'key2']);
// Clear all session data
Session::flush();

// Set session variable on a redirect
return redirect()->route('home')->with('key', 'value');

// Check if session has a key
$request->session()->has('key')
// Acces key value of session variable
$request->session('key')
```

In blade.php kan je dan ook aan die waarden geraken, bijvoorbeeld:
```php
@if (session()->has('key'))
    <p><strong>{{ session('key') }}</strong></p>
@endif
```

{{% notice info %}}
<!-- EXSOL -->
**_[Hier](/files/laravel-auth.zip) vind je een zipfolder met een voorbeeld laravel project met authentication._**
{{% /notice %}}

### Cookies
Een cookie is een klein stukje data dat door een webserver naar de webbrowser van een gebruiker wordt gestuurd en **lokaal** (client-side) wordt opgeslagen op het apparaat van de gebruiker. Het wordt gebruikt om informatie tussen meerdere verzoeken of sessies te onthouden, waardoor de server de gebruiker kan herkennen en **gepersonaliseerde ervaringen** (bijvoorbeeld gekozen thema: light/dark) kan bieden.

Cookies bestaan uit een naam, een waarde en verschillende attributen zoals een vervaldatum, domein, pad en beveiligingsvlaggen (zoals Secure en HttpOnly). De vervaldatum bepaalt hoe lang de cookie geldig blijft. Als deze niet is ingesteld, wordt de cookie een "session cookie" genoemd en verdwijnt deze wanneer de browser wordt gesloten. Beveiligingsvlaggen beperken hoe cookies worden verzonden, om het risico op diefstal of misbruik te verminderen.

Hoewel cookies nuttig zijn, brengen ze privacy- en beveiligingsaspecten met zich mee. Omdat ze **client-side** worden opgeslagen, kunnen ze theoretisch worden gelezen of aangepast door de gebruiker of derden. Daarom worden gevoelige gegevens (zoals wachtwoorden) nooit rechtstreeks in cookies opgeslagen. In plaats daarvan worden unieke sessiontokens gebruikt die naar **server-side** data verwijzen. Moderne webapplicaties combineren cookies vaak met andere technieken (zoals sessions) voor een veilige en efficiënte gebruikerservaring.

### Werken met cookies
Voorbeeld:
```php
// Set a cookie (Laravel)
Cookie::queue('theme', 'dark', 60); // Expires in 60 minutes
// Read a cookie
$theme = request()->cookie('theme');
```

## Verschil tussen Sessions en Cookies

| **Kenmerk**            | **Cookies**                              | **Sessions**                              |
|-------------------------|------------------------------------------|-------------------------------------------|
| **Opslaglocatie**       | Client-side (gebruikersbrowser)          | Server-side (bestanden, database, Redis)  |
| **Beveiliging**         | Minder veilig (toegankelijk via browser) | Veiliger (data blijft op de server)       |
| **Levensduur**          | Vervaldatum instelbaar (bijv. 30 dagen) | Verloopt na sluiten browser (standaard)   |
| **Dataformaat**         | Kleine tekstbestanden (max ~4KB)         | Geen vaste limiet (server-afhankelijk)    |
| **Gebruiksvoorbeelden** | Onthouden voorkeuren, tracking           | Inloggegevens, tijdelijke gebruikersdata  |
| **Encryptie**           | Vaak versleuteld (bijv. Laravel default) | Alleen sessie-ID in cookie (data server)  |

**_Samenvatting:_**
- **Cookies** zijn geschikt voor niet-gevoelige data die lang moet blijven bestaan, zoals thema- of taalvoorkeuren.  
- **Sessions** worden gebruikt voor tijdelijke, gevoelige data (zoals inlogstatussen) die niet direct blootgesteld mogen worden.  
- Beide werken samen: een sessie gebruikt een cookie om een unieke ID op te slaan, terwijl de echte data server-side beveiligd blijft.  

## EXTRA:
### Opslag van Session Data in de Database (Laravel)

Wanneer je **sessions via de database driver** (De driver kan je selecteren via de `.env` file) gebruikt in Laravel, worden de key-value pairs opgeslagen in de **`payload` kolom** van de `sessions` tabel. 

```
# .env file example
SESSION_DRIVER=database
SESSION_LIFETIME=120
```

Hier is hoe het werkt:

#### Structuur van de `sessions` Tabel:
| Kolom          | Beschrijving                                                                 |
|----------------|-----------------------------------------------------------------------------|
| `id`           | Unieke sessie-ID (bv. een cryptografisch secure string).                     |
| `user_id`      | ID van de ingelogde gebruiker (indien van toepassing).                      |
| `ip_address`   | IP-adres van de gebruiker.                                                  |
| `user_agent`   | Browser/user agent van de gebruiker.                                        |
| `payload`      | **Hier staan de key-value pairs** (gecodeerd in een *serialized* formaat).  |
| `last_activity`| Timestamp van de laatste interactie.                                        |

#### Belangrijke details:
1. **Payload Kolom**  
   - Bevat alle session data (bv. `user_id`, `cart_items`, etc.) in een **geserialiseerd formaat** (meestal PHP-serialized of JSON).  
   - De data is niet direct leesbaar, maar wordt door Laravel automatisch gedecodeerd.

2. **Encryptie**  
   - Laravel encrypteert de session data standaard (afhankelijk van de configuratie in `config/session.php`).  
   - De `payload` kolom bevat dus **versleutelde data** als encryptie is ingeschakeld.

3. **Alternatieve Drivers**  
   - Bij drivers zoals `file` of `redis` wordt de data elders opgeslagen, maar de structuur blijft vergelijkbaar (key-value pairs in een gecodeerd formaat).

**Voorbeeld van een `payload` (versleuteld):**
```
YTozOntzOjY6Il90b2tlbiI7czo0MDoiTlo5Z0dDaFJtczJ5cX...
```
Dit is een versleutelde string die na decodering de oorspronkelijke key-value pairs bevat.