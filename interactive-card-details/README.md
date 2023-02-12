# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- SCSS & custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript
- [Vite](https://vitejs.dev) - Dev & Build Tool

### What I learned

For HTML

1, Use <div class="wrapper"></div> to maintian the exact structure among similar elements. As result, it makes DOM accessing and modifying code simpler and concise.

All the <input> elements are somehow wrapped or nested, due to layout reasons. Keeping the same structure makes navigating and modifying input values and error messages lean and clean.

with this sttructure, starting from any input element, the nextSibilingElement of its parent is the corresponding error message container. This made it possible to use .forEach() and .reduce() to batch process inputs, without having to write specific utility functions for different input element.

For SCSS:

1, Familiarised with background-origin property.

This property allows to control the position of the background relatvie to box-border or box-padding.

It makes it possible to spread the background under paddings.

To see how you can add code snippets, see below:

2, combine cusomized scss variable, calc() and margin to responsively align elements.

For JavaScript:

1, Validating input data using pattern property and constraint validation API.

2, Practised good variable naming conventions and funtion-oriented programing, to make the code easier to read.

3, Learned using element.animation() to initiate animation in javaScript based on submit event.

4, Leanred using "focusout" event to validate user's input,and loging and clearing error messages as they go through the form.

5, Disabled submit button when the form data is not valid.

## Author

- LinkedIn - [Hangyuan Liu](https://www.linkedin.com/in/hangyuan-liu-a9282718b/)
- Frontend Mentor - [@llhyuan](https://www.frontendmentor.io/profile/llhyuan)
