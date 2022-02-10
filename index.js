"use strict";
const form = document.querySelector(".main-form");
const email = document.querySelector(".input-text");
const error = document.querySelector(".main-form-error");
const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
form.addEventListener('submit', (e) => {
    if (email.value === "" || !email.value.match(pattern)) {
        e.preventDefault();
        error.style.display = "block";
        email.style.border = "1.5px solid hsl(354, 100%, 66%)";
    }
});
/* SVG color change can be done with fill property in CSS
Keeping this here for reference because I worked hard on it.

const icons = document.querySelectorAll(".footer-icon") as NodeListOf<HTMLElement>;
icons.forEach(icon => {
  let svg = icon.childNodes[1] as SVGImageElement;
  icon.onmouseover = () => {
    icon.style.cssText = `
      border: 2px solid hsl(223, 87%, 63%);
      background-color: hsl(223, 87%, 63%);
      cursor: pointer;`;
    svg.setAttribute("fill", "#ffffff");
  }
  icon.onmouseout = () => {
    icon.style.cssText = `
      border: 2px solid hsl(223, 100%, 88%);
      background-color: none;
      cursor: pointer;`;
    svg.setAttribute("fill", "hsl(223, 87%, 63%)");
  }
});

*/
