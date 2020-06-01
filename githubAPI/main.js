const url = "https://api.github.com/users/kmongy";
const userData = document.querySelector('.user-data');

fetch(url)
.then(response => response.json())
.then(user => {
  console.log(user);
  const ul = document.createElement('ul');
  
  ul.innerHTML = `
  <li>User Bio: ${user.bio}</li>
  <li>Login: ${user.login}</li>
  <li>Name: ${user.name}</li>
  <li>Public Repos: ${user.public_repos}</li>
  <li>Twitter: ${user.twitter_username}</li>
  `
  userData.appendChild(ul);

})
.catch(error => console.log(error));