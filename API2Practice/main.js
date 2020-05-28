console.log('Fetching a picture');

fetch('me-Small.jpg')
  .then(response => response.blob())
  .then(blob => {
    console.log(blob);
    document.getElementById('pictureOfMe').src = URL.createObjectURL(blob);
  })
  .catch(error => console.log(error));