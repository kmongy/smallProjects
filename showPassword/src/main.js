const form = document.querySelector('.password-form');
const passwordField = document.querySelector('.password-field');
const passwordInput = passwordField.querySelector('#password');
const revealPasswordBtn = document.querySelector('.reveal-password-button');
const formSubmit = document.querySelector('.form-submit');
const eyeButton = document.querySelector('.fa-eye');

function revealPassword(event) {
  event.preventDefault();

  if(passwordInput.type === 'password') {
    passwordInput.type = 'text';
    eyeButton.className = 'far fa-eye-slash';
  } else if(passwordInput.type === 'text') {
    passwordInput.type = 'password';
    eyeButton.className = 'far fa-eye';
  }
}

revealPasswordBtn.addEventListener('click', revealPassword);
formSubmit.addEventListener('click', e => e.preventDefault());