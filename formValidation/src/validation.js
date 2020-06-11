const mainForm = document.querySelector('.main-form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const formPassword = document.querySelector('#password');
const passwordCheck = document.querySelector('#password-check');

const formButton = document.querySelector('.form-submit-button');
const revealPasswordBtn = document.querySelector('.reveal');
const revealPasswordCheckBtn = document.querySelector('.reveal-check');

function submitForm(event) {
  event.preventDefault();

  checkRequired([username, email, formPassword, passwordCheck]);
}

function error(input, message) {
  const formErrorHandling = input.parentElement;
  const errorMessageSpan = formErrorHandling.querySelector('.error-message');

  formErrorHandling.className = 'inner-form-wrapper error';
  errorMessageSpan.innerText = message;
}

function success(input) {
  const formHandlingSuccess = input.parentElement;
  formHandlingSuccess.className = 'inner-form-wrapper';
}

function checkRequired(inputArray) {
  inputArray.forEach((input) => {
    if (input.value.trim() === '') {
      error(input, `${input.id} is required`);
    } else {
      success(input);
    }
  });
}

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function revealPassword(event) {
  event.preventDefault();
}

mainForm.addEventListener('submit', submitForm);
revealPasswordBtn.addEventListener('click', revealPassword);
revealPasswordCheckBtn.addEventListener('click', revealPassword);
