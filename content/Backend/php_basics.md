---
title: "PHP: Hypertext Preprocessing"
weight: 1
author: Arne Duyver
draft: false
---

_bron 1: Responsive Web Design with HTML5 and CSS - 4th edition - Ben Frain_</br>
_bron 2: [W3Schools](https://www.w3schools.com/php/default.asp)_


## PHP: Hypertext Preprocessing

We gaan met PHP leren:
- dynamische webpagina's maken
- onze website te beveiligen
- te communiceren met een database

PHP is een scripting language die voornamelijk ontworpen werd en gebruikt wordt voor webdevelopment. De PHP code kan onmiddellijk in HTML geïntegreerd worden en wordt uitgevoerd aan de serverside. Aangezien de code aan de serverside uitgevoerd wordt, blijft de broncode verborgen voor de client (goed voor de veiligheid).

PHP is al een oudere taal maar wordt nog steeds gebruikt in ongeveer 78% van alle websites (Python 2%). Er worden ook nog steeds updates geproduceerd. PHP is namelijk specifiek ontwikkeld voor webdevelopment en Python is een meer all-round language, wat dit verschil meer verklaard. Dit wil niet zeggen dat je enkel webapplicaties kan maken met PHP, Je kan ook standalone applicaties maken maar hiervoor wordt PHP minder gebruikt. Enkele prominenten bedrijven die nog PHP gebruiken als deel van hun backend zijn: Facebook, Wikipedia, Canva ...

Om PHP te leren gaan we gebruik maken van [XAMPP](https://www.apachefriends.org/). Met behulp van XAMPP kunnen we op onze pc een lokale server laten draaien die onze backend implementeerd en onze website gaat kunnen displayen. Later gaan we PHP zien gebruikt worden in het populaire framework Laravel. Laravel gaat voor ons al veel organisatorisch werk verrichten.


### De PHP syntax

Een PHP file kan ook enkel HTML code bevatten. Je kan dus gewoon bij alle documenten met de `.html` extentie de extentie vervangen door `.php`. Om dan effectief PHP code te laten uitvoeren, gebruik je volgende syntax: 
```php
<html>
<head>...</head>
<body>
  <?php
    //Je php-code komt hier
  ?>
</body>
</html>
```

Je kan ook pure PHP-code gebruiken in je `.php` file (Bijvoorbeeld een pagina dient enkel voor dataprocessing maar bevat geen visuele elementen om te tonen). Je opent dan ook nog met `<?php` maar de sluitingstag wordt dan weggelaten:

```php
<?php
//Je php-code komt hier
```

PHP statements eindigen met een `;`. Sommige keywords zoals `if`,`else`, `while`, `echo`, ..., classes, functions en user-defined functions zijn niet hoofdlettergevoelig. Zo zijn onderstaande statements identiek:
```php
<?php
ECHO "Hello World!<br>";
echo "Hello World!<br>";
EcHo "Hello World!<br>";
?>
```

MAAR alle variabele namen zijn wel hoofdlettergevoelig. `$color` is niet hetzelfde als `$COLOR` is niet hetzelfde als `$Color`.

Je kan op verschillende manieren **comments** schrijven in PHP:
```php
// This is a single-line comment

# This is also a single-line comment

/* This is a
multi-line comment */
```
Je kan single line comments ook gebruiken vlak achter een statement op dezelfde lijn: `echo "Welcome Home!"; // Outputs a welcome message` <br />
En je kan zelfs multiline comments gebruiken om sommige inwendige stukken code te laten negeren: `$x = 5 /* + 15 */ + 5;`

#### Variabelen
Een variabele declareren in PHP is zeer gelijkaardig als in andere niet sterk getypeerde talen zoals Python, maar elke variabele start met een `$`. En wordt ook met een `$` begonnen wanneer je de variabele wil gebruiken (Denk eraan dat ze hoofdletter gevoelig zijn):
```php
$x = 5;
$name = "John";

echo "I love $name!";
```

PHP is **loosely typed** wat wil zeggen dat je in PHP niet expliciet de datatype van een variabele hoeft te declareren. Dit betekent dat:
- _Automatische typeconversie:_ PHP bepaalt automatisch het datatype van een variabele op basis van de waarde die eraan wordt toegekend. Hierdoor kan dezelfde variabele verschillende typen waarden bevatten gedurende de levensduur van de applicatie.
- _Flexibiliteit:_ Omdat je niet vastzit aan één datatype, kun je sneller prototypen en minder code schrijven. **Bijvoorbeeld, een variabele kan eerst een getal bevatten en later een tekst.**
- _Impliciete conversies:_ PHP voert impliciete conversies uit tussen types wanneer dat nodig is, wat soms tot onverwachte resultaten kan leiden als je hier niet op let.

PHP ondersteunt volgende data types: `String`, `Integer`, `Float` (floating point numbers - also called double), `Boolean` (`true` of `false`), `Array`, `Object`, `NULL` (`null`), `Resource`.

_Het speciale type `Resource` is geen echt data type. Het is het opslaan van een verwijzing naar functies en bronnen die extern zijn naar PHP. Een voorbeeld van het gebruik van het data type van de resource is een database-call. We zullen het hier voorlopig niet over het resource type hebben, omdat voorlopig buiten de scope valt._

Om het data type en de waarde van een variabele te displayen in je HTML, kan je de `var_dump` functie gebruiken:
```php
$name = "John";
vardump($name);
```

Je kan ook naar een bepaald type **casten** met bijvoorbeeld:
```php
$x = 5;
$x = (string) $x;
var_dump($x);
```

Met `(unset)` kan je casten naar NULL.

> If a value is 0, NULL, false, or empty, the (bool) converts it into false, otherwise true. Even -1 converts to true.

Variabelen in PHP kunnen overal in het script gedeclareerd worden. De scope van de variabele is het deel van het script waar naar de variabele gerefereerd kan worden. Er zijn drie verschillende scopes:
- **local**: Een variabele die binnen een functie is aangegeven, heeft een LOCAL SCOPE en is alleen toegankelijk binnen die functie:
```php
function myTest() {
  $x = 5; // local scope
  echo "<p>Variable x inside function is: $x</p>";
}
myTest();

// using x outside the function will generate an error
echo "<p>Variable x outside function is: $x</p>";
```
- **global**: Een variabele die buiten een functie is aangegeven, heeft een GLOBAL SCOPE en is alleen toegankelijk buiten een functie.
```php
$x = 5; // global scope

function myTest() {
  // using x inside this function will generate an error
  echo "<p>Variable x inside function is: $x</p>";
}
myTest();

echo "<p>Variable x outside function is: $x</p>";
```
  - Je moet het keyword `global` gebruiken om naar een global variabele te refereren binnenin een functie:
  ```php
    $x = 5;
  $y = 10;

  function myTest() {
    global $x, $y;
    $y = $x + $y;
  }

  myTest();
  echo $y; // outputs 15
  ```
- **static**: Meestal wil je dat je locale variabelen gedeletet worden wanneer je functie klaar is, maar in sommige gevallen wil je ze toch nog behouden om later te gebruiken. Dit kan je doen met behulp van het keyword `static`:
```php
function myTest() {
  static $x = 0;
  echo $x;
  $x++;
}

myTest();
myTest();
myTest();
```

#### Printing
In PHP kan je op twee basis manieren dingen outputten als HTML code: `echo` en `print`. De verschillen zijn klein: `echo` heeft geen return value, terwijl `print` een return value van `1` heeft, zodat deze in uitdrukkingen kan worden gebruikt.

Je kan `echo` en `print` met of zonder haakjes gebruiken:
```php
echo "Hello";
//same as:
echo("Hello");

print "Hello";
//same as:
print("Hello");
```

Om Strings te outputten kan je single of double quotes gebruiken maar ze werken op een lichtjes andere manier:
- Met dubbele quotes kan je variabelen rechtstreeks gebruiken in de String
- Met single quotes moet je de `.`-operator gebruiken
```php
$txt1 = "Learn PHP";
$txt2 = "W3Schools.com";

echo '<h2>' . $txt1 . '</h2>';
echo '<p>Study PHP at ' . $txt2 . '</p>';
```

#### Strings

Enkele functionaliteiten op Strings:
- `strlen(string)`: geeft de lengte van een String terug.
- `str_word_count(string)`: geeft het aantal woorden in een String terug.
- `strpos(string, substring)`: geeft de index van het eerste character van de match terug, indien geen match gevonden werd, returned de functie FALSE.
- `strtoupper(string)`: returned je string in upper case.
- `strtolower(string)`: returned je string in lower case.
- `str_replace(substring, replacement, string)`: verwisseld de opgegeven substring met de replacement string in de opgegeven string.
- `strrev(string)`: draait je string om.
- `trim(string)`: verwijderd alle witruimte vooraan en achteraan de string.
- `explode(seperator, string)`: vormt de string om in een array op basis van de opgegeven seperator bv. `" "`.
- Je kan Strings samenhangen met de `.`-operator bv. `"hello" . " " . "world"`.
- `substr(string, startindex, length)`: sliced je string in een substring met opgegeven startindex en length. Wanneer je geen length specificeert wordt tot het einde gesliced. Met een negatieve startindex slice je van achter naar voor. (index 0 is het eerste character, index -1 is het laatste character). Met een negatieve lengte geef je aan tot hoever voor het laatste character je wil slicen.
- Je kan speciale characters escapen met een `\`.

#### Numbers

Speciale types buiten de normale `Integer` en `Float` zijn de `Number Strings` en `Infinity` en `NaN`.

Enkele predefined constants zijn:
- `PHP_INT_MAX`: The largest integer supported
- `PHP_INT_MIN`: The smallest integer supported
- `PHP_INT_SIZE`: The size of an integer in bytes
- `PHP_FLOAT_MAX`: The largest representable floating point number
- `PHP_FLOAT_MIN`: The smallest representable positive floating point number
- `PHP_FLOAT_DIG`: The number of decimal digits that can be rounded into a float and back without precision loss
- `PHP_FLOAT_EPSILON`: The smallest representable positive number x, so that `x + 1.0 != 1.0`

Enkele functies:
- `is_int(number)`, `is_integer(number)`, `is_long(number)`: checken allemaal of het type van number, integer is.
- `is_float(number)`, `is_double(number)`: checken beide of het type van number, float is.
- `is_finite(number)`: checkt of het number finite is. 
- `is_infinite(number)`: checkt of het number infinite is. (groter dan `PHP_FLOAT_MAX`)
- `is_nan(number)`: checkt of number wel een nummer is.
- `is_numeric(string)`: checkt of een variabele numeric is, dus ook strings of een som van een string number met een integer ...

Je kan weer **casting** gebruiken om omvormingen te doen.

#### Math 

```php
echo(pi());

echo(min(0, 150, 30, 20, -8, -200));
echo(max(0, 150, 30, 20, -8, -200));

echo(abs(-6.7));

echo(sqrt(64));

echo(round(0.60));
echo(round(0.49));

echo(rand());

echo(rand(10, 100)); // a random integer between 10 and 100 (inclusive)
```

#### Constants

Een constant is een identificatie (naam) voor een eenvoudige waarde. De waarde kan niet worden gewijzigd tijdens het script. In tegenstelling tot variabelen zijn constants automatisch global in het hele script.
```php
define("GREETING", "Welcome to W3Schools.com!");
echo GREETING;

// OR

const MYCAR = "Volvo";
echo MYCAR;
```

Belangrijk: `const` kan niet worden gebruikt in een block scope, zoals in een functie of binnen een `IF` -block. `define` wel.

PHP heeft enkele predefined constants (Magic Constants):
- `__CLASS__`: If used inside a class, the class name is returned.	
- `__DIR__`: The directory of the file.	
- `__FILE__`: The file name including the full path.	
- `__FUNCTION__`: If inside a function, the function name is returned.	
- `__LINE__`: The current line number.	
- `__METHOD__`: If used inside a function that belongs to a class, both class and function name is returned.	
- `__NAMESPACE__`: If used inside a namespace, the name of the namespace is returned.	
- `__TRAIT__`: If used inside a trait, the trait name is returned.	
- `ClassName::class`: Returns the name of the specified class and the name of the namespace, if any.

#### Arrays

Er bestaan drie soorten arrays in PHP:
- Indexed array: array met een numeric index.
- Associative array: array met named keys.
- Multidimensional array die een of meerdere arrays bevat.

**Je kan verschillende types in dezelfde array steken.**

Enkele functies:
- `count(arr)`: telt het aantal items in arr.
- `array_push(arr, item)`: voeg het item toe aan de indexed array arr.
- `array_pop(arr)`: verwijder het laatste item van de array.
- `array_shift(arr)`: verwijder het eerste item uit de array.
- `array_splice(arr, startindex, length)`: verwijder een deel items uit de array startend bij startindex en verwijder dat length aantal items.
- `unset(arr[indexOrKey])`: delete dat item uit de array. Kan ook een lijst van items zijn gesplitst door komma's.
- `array_diff(arr, [lijst values van keys]);`: returned een nieuwe lijst met de items verwijderd uit de opgegeven lijst uit de associative array arr.
- sort arrays op een specifieke manier met: `sort()`, `rsort()`, `asort()`, `ksort()` `arsort()` of `krsort()`
- lijst met nog meer [array functions](https://www.w3schools.com/php/php_arrays_functions.asp)

**Indexed array**:
```php
$cars = array("Volvo", "BMW", "Toyota");
// OF
$cars = ["Volvo", "BMW", "Toyota"];
// OF 
$cars = [
  "Volvo",
  "BMW",
  "Toyota"
];
echo $cars[0];

$cars = array("Volvo", "BMW", "Toyota");
$cars[1] = "Ford";
var_dump($cars);

$cars = array("Volvo", "BMW", "Toyota");
foreach ($cars as $x) {
  echo "$x <br>";
}
```

**Associative array**:
```php
$car = array("brand"=>"Ford", "model"=>"Mustang", "year"=>1964);
echo $car["model"];

$car = array("brand"=>"Ford", "model"=>"Mustang", "year"=>1964);
$car["year"] = 2024;
var_dump($car);

$car = array("brand"=>"Ford", "model"=>"Mustang", "year"=>1964);
foreach ($car as $x => $y) {
  echo "$x: $y <br>";
}
```

#### Functions

>PHP has over 1000 built-in functions that can be called directly, from within a script, to perform a specific task.
>Please check out our PHP reference for a complete overview of the [PHP built-in functions](https://www.w3schools.com/php/php_ref_overview.asp).

Zelf functies definiëren en gebruiken:
```php
function myMessage($fname) {
  echo "Hello $fname!";
  return 'ok';
}

$result = myMessage("Mark");
echo $result
```

#### Operators, if ... else ... elseif, switch, for, while ...
- [Operators](https://www.w3schools.com/php/php_operators.asp)
```php
if (condition) {
  code to be executed if this condition is true;
} elseif (condition) {
  // code to be executed if first condition is false and this condition is true;
} else {
  // code to be executed if all conditions are false;
}

$b = $a < 10 ? "Hello" : "Good Bye"; //Shorthanded if else


switch (expression) {
  case label1:
    //code block
    break;
  case label2:
    //code block;
    break;
  case label3:
    //code block
    break;
  default:
    //code block


  $i = 1;
  while ($i < 6) {
    echo $i;
    $i++;
  }

  $i = 1;
  do {
    echo $i;
    $i++;
  } while ($i < 6);

  for (expression1, expression2, expression3) {
    // code block
  }
    for ($x = 0; $x <= 10; $x++) {
    echo "The number is: $x <br>";
  }

  $colors = array("red", "green", "blue", "yellow");
  foreach ($colors as $x) {
    echo "$x <br>";
  }
}
```

#### Super Globals
Sommige vooraf gedefinieerde variabelen in PHP zijn "Superglobals", wat betekent dat ze altijd toegankelijk zijn, ongeacht de scope - en je kan ze oproepen vanuit elke functie, klasse of bestand zonder iets speciaals te hoeven doen.

`$GLOBALS`, `$_SERVER`, `$_REQUEST`, `$_POST`, `$_GET`, `$_FILES`, `$_ENV`, `$_COOKIE`, `$_SESSION`

_We gaan hier verder nog een aantal van bespreken._

## Opdrachten
1. Overloop de PHP [Tutorials](https://www.w3schools.com/php/default.asp) op W3Schools. 
2. Maak op W3Schools.com de [exercises](https://www.w3schools.com/php/php_exercises.asp) rond php (Je mag advanced php overslaan).
3. Maak op W3Schools de PHP [Quiz](https://www.w3schools.com/php/php_quiz.asp). (Sommige antwoorden hebben we nog niet gezien, maar 90% wel)
4. Een lijst met kleine oefeningen om je PHP skills te testen:
  - Schrijf een functie die de discriminant van een tweedegraads veelterm berekend en voer wat testjes uit om te zien of je oplossing klopt
  - Schrijf een functie met parameters aantal minuten en aantal seconden dat iemand nodig had om 1 km afstand af te leggen en bereken de snelheid per uur.
  - Schrijf een functie dat een getal als parameter krijgt en afdrukt of de sinus van het getal groter is dan de cosinus of omgekeerd.
  - Schrijf een functie die drie parameters neemt: twee functies (f en g) en een waarde (x) en die een boolean teruggeeft die vertelt of f en g commutatief zijn in x. De functie moet dus teruggeven of f(g(x)) == g(f(x)).
  - Maak een lijst met de getallen 2, 4, 6 en eentje met de getallen 1, 3, 5, 7 en vergelijk som, product, gemiddelde en mediaan van beide lijsten. Tel de twee lijsten van hierboven bij elkaar op als dit lukt. Maak een lijst met de getallen 4, 2, 1 en eentje met de getallen 1, 2, 4. Tel beide bij elkaar op en bereken van het resultaat het cumulatief product.
  - Schrijf een functie die drie parameters neemt: Een ondergrens voor een bereik (inbegrepen in het bereik), Een bovengrens voor een bereik (niet inbegrepen, zoals bij de range), Een getal. De functie moet een lijst terug geven met alle getallen in het bereik die een veelvoud zijn van het getal.
5. Bedenk zelf even waarom je niet op een simpele manier input van de gebruiker kan opvragen en verwerken in PHP, door bijvoorbeeld een input field uit te lezen.

### PHP Forms

PHP is een server-side programmeertaal. Dit betekent dat de PHP-code op de server wordt uitgevoerd **voordat** de output (HTML) naar de gebruiker wordt gestuurd. Hierdoor is het niet mogelijk om tijdens de uitvoering van een PHP-script direct interactief input van de gebruiker op te vragen, zoals je dat wellicht in een command-line applicatie zou doen. 

Daarnaast werkt het web via het HTTP-protocol, waarbij er een duidelijke scheiding is tussen de verzoeken van de gebruiker en de antwoorden van de server. Er is geen doorlopende verbinding waarin je interactief input kunt verwerken tijdens de uitvoering van je code.

#### Waarom gebruiken we HTML Forms?

Om toch gebruikersinput te verkrijgen, maken we gebruik van HTML formulieren. Hierbij verloopt de interactie in twee stappen:

1. **De inputpagina:** De gebruiker vult een HTML-formulier in op een webpagina.
2. **De verwerkende pagina:** Na het verzenden van het formulier wordt een PHP-script aangeroepen (bijvoorbeeld via de `POST` of `GET` methode) dat de ingevoerde data verwerkt.

## Voorbeeld: HTML Formulier en PHP Verwerking

**HTML Formulier (`index.html`)**
```html
<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <title>Gebruikersinput</title>
</head>
<body>
    <form action="verwerk.php" method="post">
        <label for="naam">Naam:</label>
        <input type="text" id="naam" name="naam">
        <br>
        <input type="submit" value="Verzenden">
    </form>
</body>
</html>
```

In dit voorbeeld wordt een formulier gepresenteerd waarin de gebruiker zijn naam kan invullen. Het formulier stuurt de data via de `POST` methode naar het php script `verwerk.php`.

**PHP Script (`verwerk.php`)**
```php
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Zorgt voor een veilige verwerking van de gebruikersinput
    $naam = $_POST["naam"];
    echo "Hallo, " . $naam . "!";
} else {
    echo "Geen gegevens ontvangen.";
}
?>
```

Je kan from submission ook laten redirecten naar de eigen pagina met `action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>"`

### De PHP superglobals $_GET en $_POST

In bovenstaande voorbeeld kan je zien dat de naam opgevraagd wordt door de globale variabele `$_POST` te gebruiken. Dit is een speciale variabele waar alle info ingestoken wordt van een POST-request wanneer die pagina opgeroepen werd op die manier. Op gelijkaardige manier kan je de superglobal `$_GET` gebruiken.

Zowel GET en POST maken een array maken (bijv. Array (key1 => waarde1, key2 => waarde2, key3 => waarde3, ...)). Deze array bevat key/value pairs, waarbij de keys de `name` van de form control elements zijn en values de input van de gebruiker of de waarde van `value`.

Via een simpele if-statement zoals hierboven te zien is kunnen we opvragen wat de methode was waarmee het PHP-script werd opgeroepen zo kunnen we in een script meerdere soorten calls opvangen en verwerken.

### Security: Form validation

Security is zeer belangrijk in PHP omdat je anders kwetsbaar zal zijn voor simpele aanvallen die je hele website op stelten kan zetten. Een voorbeeld hiervan is de **Cross-Site Scripting attack** (XSS) waarbij je eigen HTML/PHP code doorgeeft met een input en zo dus je eigen code kan laten runnen op de host server (WAT ABSOLUUT NO DONE IS). Daarom gaan we elke waarde die we van een gebruiker uitlezen eerst preprocessen met de functie `htmlspecialchars()` om alle HTML-tags te laten processen als text en niet als code.

Vaak willen we ook nog onnodige tekens strippen (extra witruimte, tab, newline) van de gebruikers input, dit kan je doen met de `trim()`-functie.

Backslashes willen we meestal ook niet dus kunnen we verwijderen met `stripslashes()`.

Deze drie dingen zouden we dan op de volgende manier kunnen combineren om simpel en snel alle data te valideren. Bijvoorbeeld:
```php
// define variables and set to empty values
$name = $email = $website = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = test_input($_POST["name"]);
  $email = test_input($_POST["email"]);
  $website = test_input($_POST["website"]);
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
```

Verdere form validation zoals required fields of checken of een email adres klopt, kan je in de HTML-code zelf steken via de properties van het `input`-element: `required` en `type=email` bijvoorbeeld, maar dit kan ook in de backend. En op beide plaatsen is zelfs nog beter want een gebruiker kan altijd met de frontend gaan prutsen (bijvoorbeeld het `required` attribuut toch verwijderen en dan posten wat ook een valid POST-request zal opleveren maar als je PHP code hier wel een waarde required zal je een error krijgen). Meer info over hoe je die form validation in PHP best aanpakt, vind je [hier](https://www.w3schools.com/php/php_form_required.asp)

## Opdrachten
1. Pas de functies uit de voorgaande opgaven aan zodat de parameters in een form worden opgevraagd en dan het correct antwoord teruggeven.
2. Gebruik een HTML form, POST-method en PHP om een rekenmachine webpagina te maken. (layout en concrete werking mag je zelf kiezen)
