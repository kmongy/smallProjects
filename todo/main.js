const todoForm = document.querySelector('.todo-form');
const todosList = document.querySelector('.todos-list');

let items = [];

function handleSubmit(event) {
  event.preventDefault();

  const name = event.currentTarget.item.value; // forms have an item attribute you can access
  if (!name) {
    return; // basically to get rid of blank entries
  }
  const item = {
    name: name,
    id: Date.now(),
    complete: false,
  };

  items.push(item);

  event.target.reset();
  todosList.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
  const html = items
    .map(
      (item) => `
  <li class="todo-item">
    <input value="${item.id}" type="checkbox" ${item.complete ? 'checked' : ''}>
    <span class="itemName">${item.name}</span>
    <button value="${item.id}" aria-label="Remove ${item.name}">&times;</button>
  </li>`
    )
    .join('');

  todosList.innerHTML = html;
}

function mirrorToLocalStorage() {
  localStorage.setItem('items', JSON.stringify(items));
}

function restoreFromLocalStorage() {
  const lsItems = JSON.parse(localStorage.getItem('items'));
  if (lsItems.length) {
    items.push(...lsItems);
    todosList.dispatchEvent(new CustomEvent('itemsUpdated'));
  }
}

function deleteItem(id) {
  items = items.filter((item) => item.id !== id);
  todosList.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markAsComplete(id) {
  const itemRef = items.find((item) => item.id === id);
  console.log(itemRef);
  itemRef.complete = !itemRef.complete; // turning it on and off
  todosList.dispatchEvent(new CustomEvent('itemsUpdated'));
}

todoForm.addEventListener('submit', handleSubmit);
todosList.addEventListener('itemsUpdated', displayItems);
todosList.addEventListener('itemsUpdated', mirrorToLocalStorage);
todosList.addEventListener('click', function (event) {
  const id = parseInt(event.target.value);
  if (event.target.matches('button')) {
    deleteItem(id);
  }
  if (event.target.matches('input[type="checkbox"]')) {
    markAsComplete(id);
  }
});

restoreFromLocalStorage();
