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
