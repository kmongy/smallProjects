const form = document.querySelector('.password-form');
const passwordField = document.querySelector('.password-field');
const passwordInput = passwordField.querySelector('#password');
const revealPasswordBtn = document.querySelector('.reveal-password-button');
const formSubmit = document.querySelector('.form-submit');

function revealPassword(event) {
  event.preventDefault();

  if(passwordInput.type === 'password') {
    passwordInput.type = 'text';
  } else if(passwordInput.type === 'text') {
    passwordInput.type = 'password';
  }
}

revealPasswordBtn.addEventListener('click', revealPassword);
formSubmit.addEventListener('click', e => e.preventDefault());