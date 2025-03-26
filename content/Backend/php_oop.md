---
title: "OOP in PHP"
weight: 2
author: Arne Duyver
draft: false
---

_bron 1: Responsive Web Design with HTML5 and CSS - 4th edition - Ben Frain_</br>
_bron 2: [W3Schools](https://www.w3schools.com/php/default.asp)_


## [Object Oriented Programming in PHP](https://www.w3schools.com/php/php_oop_classes_objects.asp)

```php
<?php
// DEFINE CLASS
class Fruit {
  // Constants
  const HEALTHY_MESSAGE = "Don't forget to eat fruit";

  // Properties
  public $name;
  public $color;

  // Static Property
  public static $staticProp = "Hi there";

  // Constructor
  function __construct($name) {
    $this->name = $name;
  }

  // Methods
  function set_name($name) {
    $this->name = $name;
  }
  function get_name() : string {
    return $this->name;
  }

  public function healthy_message() {
    echo self::HEALTHY_MESSAGE;
  }

  // Static Methods
  public static function welcome() {
    echo "Hello World!";
  }
}
//USAGE

$apple = new Fruit("Apple", "red");
$banana = new Fruit();
$banana->set_name('Banana');

echo $apple->get_name();
echo "<br>";
echo $banana->get_name();
var_dump($apple instanceof Fruit);

echo Fruit::HEALTHY_MESSAGE;
$apple->healthy_message();

Fruit::welcome();

echo Fruit::$staticProp;
?>
```

Net als in Java heb je verschillende access modifiers:
- `public`: De property of method is overal toegankelijk. Dit is de default waarde.
- `protected`: De property of method is toegankelijk binnen de klasse en via klassen die zijn derived van die klasse
- `private`: De property of method is ENKEL toegankelijk binnen de klas

### Erving

```php
<?php
class Fruit {
  public $name;
  public $color;
  public function __construct($name, $color) {
    $this->name = $name;
    $this->color = $color;
  }
  public function intro() {
    echo "The fruit is {$this->name} and the color is {$this->color}.";
  }
}

// Strawberry is inherited from Fruit
class Strawberry extends Fruit {
  public function message() {
    echo "Am I a fruit or a berry? ";
  }
}
$strawberry = new Strawberry("Strawberry", "red");
$strawberry->message();
$strawberry->intro();
?>
```

> The `final` keyword can be used to prevent class inheritance or to prevent method overriding.

```php
<?php
final class Fruit {
  // some code
}

// will result in error
class Strawberry extends Fruit {
  // some code
}

class Fruit2 {
  final public function intro() {
    // some code
  }
}

class Strawberry2 extends Fruit2 {
  // will result in error
  public function intro() {
    // some code
  }
}
?>
```

### Extra

- [Destructor](https://www.w3schools.com/php/php_oop_destructor.asp)
- [Namespaces](https://www.w3schools.com/php/php_namespaces.asp)
- [Iterables](https://www.w3schools.com/php/php_iterables.asp)
- [Traits](https://www.w3schools.com/php/php_oop_traits.asp)
- [Abstract classes](https://www.w3schools.com/php/php_oop_classes_abstract.asp)
- [Interfaces](https://www.w3schools.com/php/php_oop_interfaces.asp)

### Opdrachten
- Maak een Rugzak klasse, waar je met behulp van een form items kan insteken. Een rugzak heeft een maximum volume en een maximum gewicht. Elk item (ook een klasse) dat je in de rugzak wil steken moet dus ook een volume en gewicht hebben. Voeg ook voldoende feedback voor de gebruiker toe om aan te geven wat er achter de schermen gebeurt.
- Maak een Radio klasse waar je het volume, de frequentie en huidige zender kan instellen. Zorg ook voor 3 snelkeuze zenders die je dan kan instellen. Hoe je dit precies wil implementeren mag je zelf invullen.
- Maak een Lovetester klasse dat gebruikt kan worden met een form, waarbij je 2 namen ingeeft en er wordt een score gegeven tussen 0 en 100. De logica hierachter mag je zelf kiezen, maar doe ook wat form-validatie.
- Implementeer de tekstbased game van [hier](https://github.com/ArneDuyver/ses-monstergame-java-start) en probeer het spel uit te breiden zodat je eventueel een wapen kan kiezen, je je eigen kracht nummer kan instellen ...

## [Connect to database + security demos](https://github.com/KULeuven-Diepenbeek/fsweb-demos-exercises-student/tree/main/11_backend_php-demos)

Je kan de folders in bovenstaande link kopiëren naar je map `xampp/htdocs/dashboard/` en dan onderstaande links gebruiken om de demo's zelf te testen.

3. [Basic store in database](http://localhost/dashboard/backend_php-demo3/)
4. [Search in database](http://localhost/dashboard/backend_php-demo4/) 
5. supabase (nvt)
6. [Sessions](http://localhost/dashboard/backend_php-demo6/) 
7. [Session security](http://localhost/dashboard/backend_php-demo7/) 
8. [Password security](http://localhost/dashboard/backend_php-demo8/)

## Opdrachten
1. Maak een volledig werkende signup, signin website die gebruik maakt van session-storage om bij te houden welke gebruiker is ingelogd. Zorg voor login, logout, change pwd. Zorg ervoor dat wachtwoorden veilig opgslagen worden in de database. De index.php moet je automatisch redirecten naar de login/signup page als je er nog geen gebruiker ingelogd is.