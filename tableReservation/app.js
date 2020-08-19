import './main.scss';

const form = document.querySelector('#table-reservation');
const decrement = document.querySelector('.decrement');
const increment = document.querySelector('.increment');
const input = document.querySelector('input[name="reservation"]');
const errorMessage = document.querySelector('.error-message');

function buttonInteraction(event) {
  if (event.target.className === 'decrement') {
    if (input.value > 1) {
      input.value--;
    }
  } else if (input.value >= 6) {
    errorMessage.innerText =
      'Unfortunately, we cannot reserve parties with over 6 people';
  } else {
    input.value++;
  }
}

form.addEventListener('submit', (event) => event.preventDefault());
decrement.addEventListener('click', buttonInteraction);
increment.addEventListener('click', buttonInteraction);
