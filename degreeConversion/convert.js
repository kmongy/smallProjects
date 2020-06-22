const tempForm = document.querySelector('.temperature-form');
const formBtn = tempForm.querySelector('.calculate');
const initialFahrenheit = tempForm.querySelector('#fahrenheit-input');
const initialCelsius = tempForm.querySelector('#celsius-input');

const fahrenheitOutput = document.querySelector('.fahrenheit-to-celsius');
const celsiusOutput = document.querySelector('.celsius-to-fahrenheit');

function calculateDegrees(event) {
  event.preventDefault();

  if (initialFahrenheit.value) {
    convertToCelsius();
  } else if (initialFahrenheit.value === '') {
    console.log('test');
  }

  if (initialCelsius.value) {
    convertToFahrenheit();
  } else if (initialCelsius.value === '') {
    console.log('test');
  }
}

function convertToFahrenheit(celsius) {
  celsius = initialCelsius.value;
  let conversion = (celsius * 1.8 + 32).toFixed(1);

  celsiusOutput.innerHTML = `
  <p>Your Celsius value was ${celsius}</p>
  <p class="fahrenheit-output">${conversion}&#176; Fahrenheit</p>
  `;
}

function convertToCelsius(fahrenheit) {
  fahrenheit = initialFahrenheit.value;
  let conversion = ((fahrenheit - 32) / 1.8).toFixed(1);

  fahrenheitOutput.innerHTML = `
  <p>Your Fahrenheit value was ${fahrenheit}</p>
  <p class="celsius-output">${conversion}&#176; Celsius</p>
  `;
}

tempForm.addEventListener('submit', calculateDegrees);
