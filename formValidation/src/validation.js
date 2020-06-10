const mainForm = document.querySelector('.main-form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const formPassword = document.querySelector('#password');
const passwordCheck = document.querySelector('#password-check');
const formButton = document.querySelector('.form-submit-button');

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function submitForm(event) {
  event.preventDefault();
}

formButton.addEventListener('click', submitForm);
