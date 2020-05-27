let request = new XMLHttpRequest();

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function() {
  // Begin accessing JSON data
  let data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      const card = document.createElement('div');
      card.classList.add('card');

      const h1 = document.createElement('h1');
      h1.textContent = movie.title;

      const p = document.createElement('p');
      movie.description = movie.description.substring(0, 400);
      p.textContent = `${movie.description}...`;

      container.appendChild(card);

      card.appendChild(h1);
      card.appendChild(p);
    });
  } else {
    console.log('error');
  }
}

request.send();

const app = document.querySelector('#root');
const logo = document.createElement('img');
logo.src = 'ghibli.png';

const container = document.createElement('div');
container.classList.add('container');

app.appendChild(logo);
app.appendChild(container);