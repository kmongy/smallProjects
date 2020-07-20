function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No Gallery Found');
  }
  this.gallery = gallery;
  // select elements
  this.images = Array.from(gallery.querySelectorAll('img'));
  this.modal = document.querySelector('.modal');
  this.prevButton = this.modal.querySelector('.prev');
  this.nextButton = this.modal.querySelector('.next');

  this.showNextImage = this.showNextImage.bind(this);
  this.showPreviousImage = this.showPreviousImage.bind(this);
  this.handleKeyUp = this.handleKeyUp.bind(this);
  this.handleClickOutside = this.handleClickOutside.bind(this);

  // Event Listeners
  this.images.forEach((image) =>
    image.addEventListener('click', (event) =>
      this.showImage(event.currentTarget)
    )
  );
  this.modal.addEventListener('click', this.handleClickOutside);
  this.images.forEach((image) =>
    image.addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        this.showImage(event.currentTarget);
      }
    })
  );
}

Gallery.prototype.showImage = function (imgElement) {
  if (!imgElement) {
    console.info('no image to show');
    return;
  }
  // update modal with this info
  this.modal.querySelector('img').src = imgElement.src;
  this.modal.querySelector('h2').textContent = imgElement.title;
  this.modal.querySelector('figure p').textContent =
    imgElement.dataset.description;
  this.currentImage = imgElement;
  this.openModal();
};

Gallery.prototype.openModal = function () {
  // check if modal is open
  if (this.modal.matches('.open')) {
    console.info('Modal already open');
    return;
  }
  this.modal.classList.add('open');

  // event listeners to be bound when we open the modal
  window.addEventListener('keyup', this.handleKeyUp);
  this.nextButton.addEventListener('click', this.showNextImage);
  this.prevButton.addEventListener('click', this.showPreviousImage);
};

Gallery.prototype.handleClickOutside = function (event) {
  if (event.target === event.currentTarget) {
    this.closeModal();
  }
};

Gallery.prototype.handleKeyUp = function (event) {
  if (event.key === 'Escape') {
    return this.closeModal();
  }
  if (event.key === 'ArrowRight') {
    return this.showNextImage();
  }
  if (event.key === 'ArrowLeft') {
    return this.showPreviousImage();
  }
};

Gallery.prototype.showNextImage = function () {
  this.showImage(
    this.currentImage.nextElementSibling || this.gallery.firstElementChild
  );
};

Gallery.prototype.showPreviousImage = function () {
  this.showImage(
    this.currentImage.previousElementSibling || this.gallery.lastElementChild
  );
};

Gallery.prototype.closeModal = function () {
  this.modal.classList.remove('open');

  window.removeEventListener('keyup', this.handleKeyUp);
  this.nextButton.removeEventListener('click', this.showNextImage);
  this.prevButton.removeEventListener('click', this.showPreviousImage);
};

const gallery1 = new Gallery(document.querySelector('.gallery1'));
const gallery2 = new Gallery(document.querySelector('.gallery2'));
