---
title: "Advanced CSS"
weight: 5
author: Arne Duyver
draft: false
---

_bron 1: Responsive Web Design with HTML5 and CSS - 4th edition - Ben Frain_</br>
_bron 2: [W3Schools](https://www.w3schools.com/html/default.asp)_

## Quicktip

Je css code spreiden over meerdere stylesheets is mogelijk door in je `main.css` andere CSS-bestanden te importeren. Je kan bijvoorbeeld al je animation klassen in een aparte `animations.css` plaatsen en dat bestand dan importeren met onderstaande code in je `main.css`:

```css
@import "animations.css";
```

## Transformations
Met CSS-transformaties kun je elementen verplaatsen, roteren, schalen en scheef trekken. Volgende 2D-transformaties zijn beschikbaar:
- `translate()`
- `rotate()`
- `scaleX()`
- `scaleY()`
- `scale()`
- `skewX()`
- `skewY()`
- `skew()`
- `matrix()`

Examples:
```css
div {
  transform: translate(50px, 100px);
  transform: rotate(20deg);
  transform: rotate(-20deg);
  transform: scale(2, 3);
  transform: scale(0.5, 0.5);
  /* transform: scaleX(2);
  transform: scaleY(3); */
  transform: skew(20deg, 10deg);
  /* transform: skewX(20deg);
  transform: skewY(20deg); */
}
```

### Matrix
De methode `matrix()` combineert alle 2D-transformatiemethoden in één. De `matrix()` methode neemt zes parameters, die wiskundige functies bevatten, waarmee je elementen kunt roteren, schalen, verplaatsen (vertalen) en schuin houden.

De parameters zijn als volgt: `matrix(scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY())`
```css
div{
  transform: matrix(1, -0.3, 0, 1, 0, 0);
}
```

## Transitions
Met CSS-overgangen kun je de waarden van eigenschappen soepel veranderen gedurende een bepaalde tijd.
We bespreken de volgende overgang properties:
- `transition`
- `transition-delay`
- `transition-duration`
- `transition-property`
- `transition-timing-function`

Om een transition effect te maken, moet je twee dingen specificeren:
1. de CSS-property waaraan u een effect wilt toevoegen
2. de duur van het effect
_Opmerking: Als het onderdeel duur niet wordt opgegeven, heeft de overgang geen effect, omdat de standaardwaarde 0 is._

Example:
```css
div {
  width: 100px;
  height: 100px;
  background: red;
  transition: width 2s;
}
div:hover {
  width: 300px;
}
```

Je kan de transition properties apart definiëren of allemaal samen in een shorthand:
```css
div {
  transition-property: width;
  transition-duration: 2s;
  transition-timing-function: linear;
  transition-delay: 1s;
}
/* Shorthand */
div {
  transition: width 2s linear 1s;
}
```

Voor de transition-timing-function zijn er een aantal mogelijkheden. (**In de developper tools van je browser kan je met deze waarden spelen en de gewenste beziercurve kopiëren**):
- **`ease`** - specifies a transition effect with a slow start, then fast, then end slowly (this is default)
- **`linear`** - specifies a transition effect with the same speed from start to end
- **`ease-in`** - specifies a transition effect with a slow start
- **`ease-out`** - specifies a transition effect with a slow end
- **`ease-in-out`** - specifies a transition effect with a slow start and end
- **`cubic-bezier(n,n,n,n)`** - lets you define your own values in a cubic-bezier function

## Animations

