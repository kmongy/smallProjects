const tempForm = document.querySelector('.temperature-form');
const formBtn = tempForm.querySelector('.calculate');
const initialFahrenheit = tempForm.querySelector('#fahrenheit-input');
const initialCelsius = tempForm.querySelector('#celsius-input');

function calculateDegrees(event) {
  event.preventDefault();

  convertToCelsius();
  convertToFahrenheit();
}

function convertToFahrenheit(celsius, fahrenheit) {
  fahrenheit = initialFahrenheit.value;
  celsius = initialCelsius.value;

  console.log((celsius * 1.8 + 32).toFixed(0));
}

function convertToCelsius(fahrenheit, celsius) {
  fahrenheit = initialFahrenheit.value;
  celsius = initialCelsius.value;

  console.log(((fahrenheit - 32) / 1.8).toFixed(0));
}

tempForm.addEventListener('submit', calculateDegrees);
