const emailInput = document.getElementById("email-input");
const errorSpan = document.getElementById("error-span");
const signUpStart = document.getElementById("sign-up-start");
const subscribeButton = document.getElementById("subscribe-button");
const signUpEnd = document.getElementById("sign-up-end");
const dismissButton = document.getElementById("dismiss-button");
const emailSpan = document.getElementById("email-span");

subscribeButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (emailInput.value.toString().includes("@")) {
    signUpStart.classList.remove("enabled");
    signUpStart.classList.add("disabled");

    signUpEnd.classList.remove("disabled");
    signUpEnd.classList.add("enabled");

    emailSpan.innerText = emailInput.value;
  } else {
    errorSpan.classList.remove("disabled");
    errorSpan.classList.add("enabled");

    emailInput.classList.remove("sign-up-start__input");
    emailInput.classList.add("sign-up-start__input--error");
  }
});

dismissButton.addEventListener("click", () => {
  emailInput.classList.remove("sign-up-start__input--error");
  emailInput.classList.add("sign-up-start__input");
  emailInput.value = "";
  emailSpan.innerText = "";
  errorSpan.classList.remove("enabled");
  errorSpan.classList.add("disabled");

  signUpEnd.classList.remove("enabled");
  signUpEnd.classList.add("disabled");

  signUpStart.classList.remove("disabled");
  signUpStart.classList.add("enabled");
});
