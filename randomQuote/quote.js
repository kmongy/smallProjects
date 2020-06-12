const quotesContainer = document.querySelector('.quotes-container');
const refreshButton = document.querySelector('.refresh');
const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

fetch(url)
  .then((response) => response.json())
  .then((quote) => {
    const p = document.createElement('p');

    p.innerText = quote;
    quotesContainer.appendChild(p);
  })
  .catch((error) => console.log('error'));

function refresh() {
  location.reload();
}

refreshButton.addEventListener('click', refresh);
