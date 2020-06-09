const accordion = document.querySelector('.accordion');
const itemsForDropdown = accordion.querySelectorAll('.accordion-wrapper');
const accordionHeading = accordion.querySelectorAll('.accordion__header');

function toggleText() {
  const thisItem = this.parentNode;

  itemsForDropdown.forEach(item => {
    if (thisItem === item) {
      thisItem.classList.toggle('open');
      return;
    }

    item.classList.remove('open');
  });
}

accordionHeading.forEach(dropdownItem => dropdownItem.addEventListener('click', toggleText));