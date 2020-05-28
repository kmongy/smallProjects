console.log('Fetching a picture');

fetch('me-Small.jpg')
  .then(response => response.blob()) // need the response to convert to something that's readable - in this case, a blob for an img. Theres' JSON, etc.
  .then(blob => {
    console.log(blob);
    document.getElementById('pictureOfMe').src = URL.createObjectURL(blob); // now get we can use the blob.
  })
  .catch(error => console.log(error));