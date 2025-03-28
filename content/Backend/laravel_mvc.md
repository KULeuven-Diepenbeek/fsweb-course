---
title: "Laravel: MVC en Database"
weight: 5
author: Arne Duyver
draft: false
---

## Laravel MVC en Database

Je zal je wellicht nog herinneren dat we in het vak Software Ontwerp in Java er op gehamerd werd dat we een goede architecture willen gebruiken voor onze applicaties om ze meer leesbaar, onderhoudbaar, schaalbaar, ... te maken. In Java gebruikten we het **Model-View-Controller** (MVC) principe waarbij de logica van onze applicatie gedefinieerd stond in Modellen, wat de gebruiker te zien krijgt gedefinieerd stond in de Views en de interactie van de gebruiker met de modellen nooit rechtstreeks gebeurde maar altijd via een Controller die dan ook voor een update van de views ging zorgen. We hebben geluk want deze architectuur zit nu ook al sterk verweven in het Laravel framework. De Views (`.blade.php`) hebben we hierboven al besproken en nu gaan we verder met de Controller (`PHP class`). Hierna zullen we het over de Modellen (`PHP class`) hebben aangezien we het tegelijk over database integratie moeten hebben, aangezien Model creation en database migration sterk verweven zijn in Laravel.

### Controllers

In webapplicaties gemaakt met PHP gaat de interactie met de gebruiker voornamelijk via HTTP-requests verlopen. De logica van wat er juist bij welke request moet gebeuren gaan we nu organiseren in aparte Controller klassen. Een controller is meestal gekoppeld aan een Model, maar je kan echter ook een standalone controller maken in Laravel met het volgende commando: `php artisan make:controller TestController`

Er wordt een `TestController.php`-klasse aangemaakt in de `app/Http/controllers`-directory, met al de correcte boilerplate code. Hieronder zie je een voorbeeld van de implementatie van deze TestController die een GET-request behandelt waar enkel een `naam`-parameter is meegegeven:
```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{
    public function handleNameRequest(Request $request)
    {
        $name = $request->get("name");
        dump($request);
        return view('hi', ['name_example' => $name]);
    }
}
```

Om deze functionaliteit te gebruiken in onze `web.php`, waar we nu dus **geen logica gaan schrijven maar enkel de requests gaan forwarden naar de juiste controller functie**, moeten we de controller klasse importeren en gebruiken op de volgende manier:
```php
<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Http\Controllers\TestController;

Route::get('/process-form-controller', [TestController::class, 'handleNameRequest']);


// ZONDER CONTROLLER
Route::get('/process-form', function (Request $request) {
    $name = $request->get("name");
    dump($request);
    return view('hi', ['name_example' => $name]);
});

```

### Database

**_Zorg ervoor dat je MySQL database van XAMPP aanstaat_**

We hebben bij het aanmaken van ons Laravel project al aangeduid dat we een database willen connecteren. Er wordt dan ook specifiek voor dat Laravel project een database gecreëerd in je database onder `laravel -> project_naam`. Indien je gewenst kan je ook eerst zelf deze database aanmaken. We gaan zo dadelijk ook nog zien hoe je eventueel een andere database kan koppelen. 

Alle info om een correcte verbinding te maken wordt opgeslagen in de `.env`-file. Krijg je een error, dan moet je dus kijken of alle instellingen voor jouw database hier correct ingevuld zijn. De waarden die hier staan worden gebruikt in de `config/database.php` file. Hieronder vind je een voorbeeld:
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=database_naam
DB_USERNAME=root
DB_PASSWORD=
```

Door de `DB_DATABASE=` variabele dus een andere waarde te geven kan je connecteren met een andere database. 

Om je connectie met de database te testen kan je `php artisan migrate:status` gebruiken. Dit geeft een error als er een probleem is.

Heb je een wijziging aangebracht aan de instellingen van je database in de .env file of heb je migration tables gewijzigd, verwijderd of toegevoegd? Gebruik dan `php artisan migrate` om die wijzigingen te synchroniseren met de database.

### Models
Nu gaan we een model aanmaken in Laravel. Aangezien de link tussen modellen en de database zo groot is gaan we bijna altijd ook onmiddellijk een migration table mee laten genereren met de `-m` flag. (Migration tables zijn files waarin we uitleggen hoe de link tussen het model en de database tabel moet gelegd worden. Hierover meer hieronder):
```bash
php artisan make:model <modelName> -m
```

Er wordt een model klasse aangemaakt in `app/Models` en een bijhorende migration file in `database/migrations`.

We geven hieronder een voorbeeld voor een `Student` model dat we al verder uitgewerkt hebben met de juiste datamembers:
```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    // Define the primary key (studnr instead of default 'id')
    protected $primaryKey = 'studnr';

    // Fields that can be mass-assigned
    protected $fillable = [
        'voornaam',
        'naam',
        'goedBezig',
    ];

    // Cast 'goedBezig' to boolean
    protected $casts = [
        'goedBezig' => 'boolean',
    ];
}
```

**Merk op dat we in het model al rekening houden met hoe de modellen opgeslagen worden in de database:**
- We geven de attributen mee maar specificeren hun rol binnen de tabel ook zo wordt de `studnr` de `$primaryKey`.
- Andere attributen/kolommen geven we op onder `$fillable`
- Databases zoals MySQL slaan booleans op als integers (0/1) of true/false (afhankelijk van de driver). Door `$casts = ['goedBezig' => 'boolean'];` te gebruiken verzekeren we dat de waar geconverteerd wordt naar een PHP boolean bij het ophalen uit de database en de waarde als een integer wordt opgeslagen in de database.

Merk op dat je hier geen info vind over bijvoorbeeld het type van `naam` en `voornaam`. Dit is allemaal gespecificeerd binnenin de `migration table`

### Migration tables
De migration table die bij voorgaande voorbeeld hoort hebben we aangevuld om te passen bij het `Student` model en ziet er als volgt uit:
```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('students', function (Blueprint $table) {
            // Custom primary key (studnr) as auto-incrementing integer
            $table->integer('studnr')->autoIncrement()->primary();
            
            // voornaam (string, NOT NULL)
            $table->string('voornaam')->nullable(false);
            
            // naam (string, nullable)
            $table->string('naam')->nullable();
            
            // goedBezig (boolean with default value)
            $table->boolean('goedBezig')->default(false);
            
            // Timestamps (created_at and updated_at)
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('students');
    }
};
```

**BELANGRIJIK** voer `php artisan migrate` uit om de wijzigingen te synchroniseren met de database!

{{% notice note %}}
Met het commando: `php artisan migrate:rollback` kan je de `down` functies van je laatst gemigreerde migration tables oproepen die in de meeste gevallen een `drop table if exists` gaan doen. Wil je van een specifieke migration table de rollback oproepen dan moet je ook het path naar de file meegeven bv. `php artisan migrate:rollback --path=database/migrations/2025_03_26_111505_create_students_table.php`
{{% /notice %}}

Je kan nu studenten createn, readen, updaten en deleten (C-R-U-D)  met onderstaande PHP code:
```php
// Create student
$student = Student::create([
    'voornaam' => 'John',
    'naam' => 'Doe',
    'goedBezig' => true,
]);

  // CREATE is a special function which is analogous to:
$student = new Student([
    'voornaam' => 'John',
    'achternaam' => 'Doe',
    'goedBezig' => true,
]);
$student->save();

// Read: Query students
$students = Student::where('goedBezig', true)->get();

// Update student
  //$data (bv. ['voornaam' => 'Jan', 'goedBezig' => false])
  // Zoek de student
$student = Student::find($studnr);
  // Update de velden
$student->update($data);

// Delete student
  // Zoek de student
$student = Student::find($studnr);
  // Verwijderen
$student->delete();
```

**_Nog veel meer info over migration tables vind je in de [documentatie](https://laravel.com/docs/12.x/migrations#migration-structure)!_**

{{% notice note %}}
Wil je niet dat je Primary key ook autoincrement dan moet je `autoIncrement()` verwijderen uit je migration table en `public $incrementing = false;` toevoegen aan je model.
{{% /notice %}}

### Api routes: Controller
Wanneer we bijvoorbeeld achtergrond logica willen laten draaien zonder noodzakelijk de view aan te passen worden dit meestal api-endpoints genoemd (Application Programming Interface) Die endpoints die we hiervoor aanspreken steken we dan meestal in een `api.web` file in de `routes` folder. Je kan de endpoints dan bereiken via `/api/endpoint`. In het algemeen:
- `web.php` voor web forms, Blade views en stateful interactions.
- `api.php` voor stateless API endpoints.

{{% notice info %}}
Om de api.php file te laten genereren en alle instellingen correct te zetten moet je `php artisan install:api` gebruiken.<br/>
Bovendien kan je met `php artisan route:list` bekijken welke endpoints allemaal beschikbaar zijn voor je Laravel webapplicatie
{{% /notice %}}

Zo kunnen we voor het studenten voorbeeld een `/studenten` endpoint hebben met formulieren om studenten aan te maken, op te vragen, te updaten en te deleten. De route `/studenten` komt dan in de `web.php` te staan aangezien deze de view teruggeeft met de verschillende forms, maar de endpoints die door de forms opgeroepen worden, zitten dan in de `api.php` bv. `/api/create_student`, `/api/get_students`, `/api/update_student`, `/api/delete_student`

Aangezien je dus vaak acties wil uitvoeren op de modellen heb je vaak een controller om die acties uit te voeren. De controller heeft dan een naamgeving in de aard van `ModelnaamController`. Je kan nu rechtstreeks bij het aanmaken van een model ook nog een leeg controller skeleton voor dat model laten genereren met de `-c` flag:
```bash
php artisan make:model ModelNaam -mc
```

{{% notice note %}}
Je kan zelfs nog meer heavy lifting over laten aan Laravel/artisan door de `-cr` flag te gebruiken wat een `Resource Controller`-klasse aanmaakt waar ook al boilerplate code voor CRUD methoden aanwezig zijn.
{{% /notice %}}

#### Een simpele CRUD application

Een voorbeeld van hoe de api.php en Controller kunnen samenwerken vind je hieronder:
- Routes
```php
// Send a student object to a controller method
use App\Http\Controllers\StudentController;
use Illuminate\Support\Facades\Route;

Route::get('/students/{student}', [StudentController::class, 'show']);
```
- Controller
```php
public function show(Student $student)
{
  // De $student wordt automatisch opgehaald op basis van studnr
  dd(response()->json($student));
}
```

##### Oefening 
Maak de nodige views, controllers, modellen, migration tables en routes aan om het voorbeeld van een CRUD aan te maken voor de gedemonstreerde `Student`-klasse in Laravel

<!-- EXSOL -->
_**<span style="color: #03C03C;">Solution:</span>**_
Een voorbeeld oplossing voor deze oefening (met ook een factory en een seeder voor de Student klasse) vind je in [deze zip folder](/files/laravel-crud.zip).

### Factory
Een **factory** in Laravel is een hulpmiddel om *nepdata* te genereren voor test- of ontwikkeldoeleinden. Het definieert hoe een model (bijv. een `Student`) automatisch aangemaakt kan worden met realistische, willekeurige waarden.

Waarvoor gebruik je het? 
- **Testen**: Snel data maken voor unit- of featuretests.
- **Database vullen**: Bijv. via seeders [(`php artisan db:seed`)](#seeders).
- **Prototypes bouwen**: Zonder handmatige data-invoer.

Je kan voor bestaande modellen een Factory aanmaken met het volgende commando: `php artisan make:factory ModelNaamFactory --model=ModelNaam`. **_Het is echter ook belangrijk dat je de trait `HasFactory` toevoegd aan je model_**
```php
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Student extends Model
{
  use HasFactory; // Add this trait
  ...
}
```

Voor het `Student`-model wordt er dan bijvoorbeeld een `StudentFactory.php` file aangemaakt in de directory `database/factories/`. En voor onze Student klasse zal die er als volgt uitzien:
```php
<?php

namespace Database\Factories;

use App\Models\Student;
use Illuminate\Database\Eloquent\Factories\Factory;

class StudentFactory extends Factory
{
    protected $model = Student::class;

    public function definition()
    {
        return [
            'voornaam' => $this->faker->firstName(),
            'naam' => $this->faker->lastName(),
            'goedBezig' => $this->faker->boolean(),
        ];
    }
}
```

{{% notice info %}}
Stel dat je geen autoincrement primary key hebt dan zou je deze op de volgende manier kunnen fabriceren: `'studnr' => $this->faker->unique()->numberBetween(1000, 2000),` bijvoorbeeld waarbij zeker `unique()` belangrijk is.
{{% /notice %}}

**Hoe werkt het?** Met de _faker library_ kan je geloofwaardige fake data aanmaken zoals namen, achternamen, emails, wachtwoorden ... (meer info [hier](https://fakerphp.org/)).<br />
Om dan deze factory te gebruiken om een **PHP object** aan te maken, kan je volgende syntax gebruiken:
```php
Student::factory()->make();
```

{{% notice info %}}
Met `make()` wordt enkel een **PHP object** aangemaakt. Als je in de plaats hiervan `create()` gebruikt, dan wordt het object ook onmiddellijk in de database gestoken.
{{% /notice %}}

Wil je dan toch nog zelf enkele vaste waarden kiezen zoals de `goedBezig` bijvoorbeeld kan je dit als parameter meegeven:
```php
Student::factory()->make(['goedBezig' => true]);
```

Je kan zelfs eenvoudig een lijst van **PHP objecten** aanmaken met de `count`-functie:
```php
Student::factory()->count(10)->make();
```

_We gaan deze functionaliteit vooral in seeders gebruiken om snel dummy data in onze database te steken!_

### Seeder
Een **seeder** in Laravel is een tool om _testdata_ in een database te laden. Het wordt vaak gecombineerd met factories om automatisch dummygegevens aan te maken, bijvoorbeeld voor ontwikkel-, test- of demodoelen.

Je maakt een seeder aan met: `php artisan make:seeder ModelNaamSeeder`. Er wordt bijvoorbeeld een `StudentSeeder.php` file aangemaakt in de directory `database/seeders/`. Een seeder voor het `Student`-model ziet er zo uit:  
```php
<?php

namespace Database\Seeders;

use App\Models\Student;
use Illuminate\Database\Seeder;

class StudentSeeder extends Seeder
{
    public function run()
    {
        // Maak 10 studenten aan via de factory
        Student::factory()
            ->count(10)
            ->create();
    }
}
```

{{% notice info %}}
Belangrijk bij seeders:
Gebruik `create()` in plaats van `make()` om data persistent in de database op te slaan.
{{% /notice %}}

**Hoe activeer je het?** Voer `php artisan db:seed` uit om alle seeders te draaien. Voor een specifieke seeder: `php artisan db:seed --class=StudentSeeder`

{{% notice warning %}}
**Let op bij unieke velden:** Gebruik `unique()` in je factory (bijv. voor `studnr`) om dubbele entries te voorkomen. Seeders falen anders tijdens herhaald gebruik!
{{% /notice %}}

**Extra functionaliteit:** Seeders kunnen ook bestaande data gebruiken (bijv. CSV-bestanden inladen). Combineer met `Model::updateOrCreate()` om dubbele data te vermijden. Hier gaan we niet dieper op in.

#### Seeders combineren
Combineer meerdere seeders via de `DatabaseSeeder`-klasse:
```php
public function run()
{
    $this->call([
        StudentSeeder::class,
        CursusSeeder::class,
    ]);
}
```

Op die manier moet je maar één seeder klasse activeren om je hele applicatie van dummy data te voorzien.


## Database met relaties

We tonen dit aan de hand van volgend project dat je [hier](/files/laravel-dbrelations.zip) kan terugvinden als zip bestand.

**Belangrijk** is nu wel dat je niet alle migrations tegelijk uitvoert maar via de `--path=database/migrations/name.php` flag één na één de correcte migrations uitvoert zodat je geen problemen krijgt met de _Foreign Key Constraints_. In dit project dus eerst Opleiding en Vak, daarna Student en als laatste student_vak.

De relaties die hier dus belangrijk zijn:
- is de one-to-many relation tussen Opleiding en Student
- en de many-to-many relation tussen Vak en Student

Voor die many-to-many relation moeten we nu ook een aparte tabel voorzien in de database. Hiervoor moeten we dus ook een migration table aanmaken (die nu niet gekoppeld is aan een specifiek model). Je kan een migration table aanmaken met volgend commando: `php artisan make:migration create_table_name_table`. Volgens conventie is de naam "create_" + "table name" + "_table". Voor bovenstaande project wordt dit bijvoorbeeld:
```bash
php artisan make:migration create_student_vak_table
```

Bekijk het project om erachter te komen hoe je dit correct weergeeft in de corresponderende Models, Migration tables, Factories en Seeders.

{{% notice info %}}
De manier waarop je hier werk met de Object to Table mapping komt heel sterk overeen met dezelfde tool die we hiervoor in Java kunnen gebruiken JPA/Hibernate, wat we in de cursus _Databases_ nog te zien gaan krijgen.
{{% /notice %}}

