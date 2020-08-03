const baseEndpoint = 'http://www.recipepuppy.com/api/';
const proxy = 'https://cors-anywhere.herokuapp.com/';
const form = document.querySelector('.search');
const recipesGrid = document.querySelector('.recipes');

async function fetchRecipes(query) {
  const response = await fetch(`${proxy}${baseEndpoint}?q=${query}`);
  const data = await response.json();
  return data;
}

async function handleSubmit(event) {
  event.preventDefault();
  const element = event.currentTarget;
  console.log(element.query.value);
  element.submit.disabled = true;
  const recipes = await fetchRecipes(element.query.value);
  console.log(recipes);
  element.submit.disabled = false;
  displayRecipes(recipes.results);
}

function displayRecipes(recipes) {
  console.log('creating html');
  const html = recipes.map((recipe) => {
    return `
      <div class="recipe">
        <h2>${recipe.title}</h2>
        <p>${recipe.ingredients}</p>
        ${
          recipe.thumbnail &&
          `<img src="${recipe.thumbnail}" alt="${recipe.title}">`
        }
        <a href="${recipe.href}">View Recipe</a>
      </div>
    `;
  });

  recipesGrid.innerHTML = html.join('');
}

form.addEventListener('submit', handleSubmit);
fetchRecipes('pizza');
