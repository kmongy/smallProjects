const todoForm = document.querySelector('.todo-form');
const todosList = document.querySelector('.todos-list');

const items = [];

function handleSubmit(event) {
  event.preventDefault();

  const name = event.currentTarget.item.value; // forms have an item attribute you can access
  const item = {
    name: name,
    id: Date.now(),
    complete: false,
  };

  items.push(item);

  event.target.reset();
  displayItems();
}

function displayItems() {
  const html = items
    .map(
      (item) => `
  <li class="todo-item">
    <input type="checkbox">
    <span class="itemName">${item.name}</span>
    <button aria-label="Remove ${item.name}">&times;</button>
  </li>`
    )
    .join('');

  todosList.innerHTML = html;
  console.log(html);
}

todoForm.addEventListener('submit', handleSubmit);
