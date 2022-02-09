const form = document.querySelector(".main-form") as HTMLFormElement;
const email = document.querySelector(".input-text") as HTMLInputElement;
const error = document.querySelector(".main-form-error") as HTMLSpanElement;
const pattern:RegExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

form.addEventListener('submit', (e:Event) => {
  if (email.value === "" || !email.value.match(pattern)) {
    e.preventDefault();
    error.style.display = "block";
    email.style.border = "1.5px solid hsl(354, 100%, 66%)";
  }
});