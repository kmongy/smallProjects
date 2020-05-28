const url = 'https://randomuser.me/api/?results=20';
const randomUsersUL = document.querySelector('.random-users');

fetch(url)
  .then(response => response.json()) // turn this into JSON
  .then(data => {
    data = data.results; // this returns the results obviously of the array from the API

    return data.map(users => { // returning the results, mapping over it to create elements
      let li = document.createElement('li');
      let img = document.createElement('img');

      img.src = users.picture.medium;

      li.innerHTML = `
        <div class="user-flex-wrapper">
          <img src="${img.src}">
          <p>${users.name.first} ${users.name.last}</p>
          <p>${users.email}</p>
          <p>${users.login.username}</p>
        </div>
        `;
        
      randomUsersUL.appendChild(li);
    });
  })
  .catch(error => console.log(error));