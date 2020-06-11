const mainForm = document.querySelector('.main-form');
const name = document.querySelector('#name');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const formPassword = document.querySelector('#password');
const passwordCheck = document.querySelector('#password-check');

// const formButton = document.querySelector('.form-submit-button');
const revealPasswordBtn = document.querySelector('.reveal');
const revealPasswordCheckBtn = document.querySelector('.reveal-check');

function submitForm(event) {
  event.preventDefault();

  checkRequired([name, username, email, formPassword, passwordCheck]);
  checkLength(username, 5);
  checkLength(formPassword, 8);
  validateEmail(email);
}

function error(input, message) {
  const formErrorHandling = input.parentElement;
  const errorMessageSpan = formErrorHandling.querySelector('.error-message');

  formErrorHandling.className = 'inner-form-wrapper error';
  errorMessageSpan.innerText = message;
}

function success(input) {
  const formHandlingSuccess = input.parentElement;
  formHandlingSuccess.className = 'inner-form-wrapper success';
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

function checkLength(input, minLength) {
  if (input.value.length < minLength) {
    error(input, `${input.id} must be at least ${minLength} characters`);
  }
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(email.value.trim())) {
    success(email);
  } else {
    error(email, 'Please enter a valid email');
  }
}

function revealPassword(event) {
  event.preventDefault();
}

mainForm.addEventListener('submit', submitForm);
revealPasswordBtn.addEventListener('click', revealPassword);
revealPasswordCheckBtn.addEventListener('click', revealPassword);
