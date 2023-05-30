# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![Project-screenshot](https://github.com/epmateus/Advice-Generator-App/assets/97775852/2fd9af9e-8671-4ec4-a94f-db991a68ed98)

### Links

- Solution URL: (https://github.com/epmateus/Advice-Generator-App)
- Live Site URL: (https://epmateus.github.io/Advice-Generator-App/)

## My process

I started building the structure of the html, put up the basic styles to make it easier to see, and jumped to the javascript.
In the js i got the element button, then advice id and advice description. After getting the html elements, i created a function responsible for getting the API data. I used the async await function for this. Inside the function, after i got the API data, i changed the advice id and advice description using the inner HTML to put into a variable. After that i put the event listener in the giveAdvice function and call it.
Javascript done, i went back to the css for finishing the styles and the responsiveness.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript
- API

### What I learned

I had some problems trying to get the API data. I saw some examples in the internet and the DevQuest files, trying to figure out a way for it, but without success, after quite a time looking for an answer, i had to ask for help. That was my first time seeing the way they taught me in this case (code bellow), but anyways, it was really interesting and usefull to improve my skils and learn new things.


```js
const givenId = `Advice #${adviceContent.slip.id}`;
const givenAdvice = `"${adviceContent.slip.advice}"`;
```

### Continued development

Regardless of the problems I had finding a solution for this challenge, as it was my first time working with API, I really liked it. And I surely will look for improvements in that kind of development.

## Author

| [<img src="https://user-images.githubusercontent.com/97775852/210607293-3b6bd614-0d84-40d2-818a-8d8c9cc2deb3.jpg" width=115><br><sub>Mateus Eduardo Pereira</sub>](https://github.com/epmateus) |
| :---: |

- Website - (https://epmateus.github.io/Portifolio/)
