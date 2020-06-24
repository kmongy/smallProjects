const tableOfContents = document.querySelector('#tableOfContents');
const content = document.querySelector('.content-wrapper');
const headers = content.querySelectorAll('h2');

(function displayTOC() {
  let chapters = [...headers]; //spread the headers to this to change it from a Nodelist to an Array

  let ol = document.createElement('ol');
  let p = document.createElement('p');

  p.classList.add('heading');
  p.innerText = 'Table of Contents';

  chapters.forEach((chapter) => {
    let li = document.createElement('li');

    li.innerText = chapter.innerText;
    ol.appendChild(li);
  });

  tableOfContents.appendChild(p);
  tableOfContents.appendChild(ol);
})();
