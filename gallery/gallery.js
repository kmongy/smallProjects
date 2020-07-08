function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No Gallery Found');
  }
  // select elements
  const images = Array.from(gallery.querySelectorAll('img'));
  const modal = document.querySelector('.modal');
  const prevButton = modal.querySelector('.prev');
  const nextButton = modal.querySelector('.next');
  let currentImage;

  function showImage(imgElement) {
    if (!imgElement) {
      console.info('no image to show');
      return;
    }
    // update modal with this info
    modal.querySelector('img').src = imgElement.src;
    modal.querySelector('h2').textContent = imgElement.title;
    modal.querySelector('figure p').textContent =
      imgElement.dataset.description;
    currentImage = imgElement;
    openModal();
  }

  function openModal() {
    // check if modal is open
    if (modal.matches('.open')) {
      console.info('Modal already open');
      return;
    }
    modal.classList.add('open');

    // event listeners to be bound when we open the modal
    window.addEventListener('keyup', handleKeyUp);
    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPreviousImage);
  }

  function handleClickOutside(event) {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  }

  function handleKeyUp(event) {
    if (event.key === 'Escape') {
      return closeModal();
    }
    if (event.key === 'ArrowRight') {
      return showNextImage();
    }
    if (event.key === 'ArrowLeft') {
      return showPreviousImage();
    }
  }

  function showNextImage() {
    showImage(currentImage.nextElementSibling || gallery.firstElementChild);
  }

  function showPreviousImage() {
    showImage(currentImage.previousElementSibling || gallery.lastElementChild);
  }

  function closeModal() {
    modal.classList.remove('open');

    window.removeEventListener('keyup', handleKeyUp);
    nextButton.removeEventListener('click', showNextImage);
    prevButton.removeEventListener('click', showPreviousImage);
  }

  // Event Listeners
  images.forEach((image) =>
    image.addEventListener('click', (event) => showImage(event.currentTarget))
  );
  modal.addEventListener('click', handleClickOutside);
  images.forEach((image) =>
    image.addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        showImage(event.currentTarget);
      }
    })
  );
}

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
