# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [https://vladmidir.github.io/news-homepage-main-bootstrap/](https://vladmidir.github.io/news-homepage-main-bootstrap/)
- Live Site URL: [https://vladmidir.github.io/news-homepage-main-bootstrap/](https://vladmidir.github.io/news-homepage-main-bootstrap/)

## My process

### Built with

- Bootstrap 3
- Semantic HTML5 markup
- CSS custom properties
- Javascript

### What I learned

Learned Bootstrap grid and some Bootstrap 3 classes like btn and list-group.
```html
<div class="container container-fluid row col-*screen-size*-*col-size* list-group list-group-item navbar btn "></div>
```


Redoing this challenge also improved my understanding of how to structure the HTML document.
I now understand when to use elements like article, section, ul, ol.


I also learned how to properly manipulate CSS using javascript.
To set the CSS classes of an element using javascript I used object.className. This modifies the HTML class attribute.
```js
object.className = "class1 class2 class3";
```
For this technique to work responsively, I used javascript window.onload and window.onresize events. 
```js
window.onload = () => {
  if (window.innerWidth >= 1200){
    //hide mobile elemnts
  }
  else {
    //show mobile elemnts
  }
}
```
This replaces some of the CSS code I would normally use.
```css
@media = (max-width: 1199px){
  /*show mobile elements*/
}
```

### Continued development
In the future, I want to do some more challenges with Bootstrap. Maybe use a newer version of Bootstrap,
as they have more features.

I may also redo some of my other challenges.

Lastly, I did not make this challenge fully accessible with aria-labelledby. I may fix this in the future.