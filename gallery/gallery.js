function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No Gallery Found');
  }
  console.log(gallery);
}

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
