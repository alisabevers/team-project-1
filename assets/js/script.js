var APIKey = "97CtSZ/oPnIXq150EVo/iQ==wz5zY0YtY761DSyg";
var userInput;
var queryURL = "https://api.api-ninjas.com/v1/recipe?query=" + userInput;

var searchBtn = document.getElementById('searchBtn')


function getApi(){

userInput = document.getElementById('searchBox')

fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        console.log(data)
    //   for (var i = 0; i < data.length; i++) {
    //     var listItem = document.createElement('li');
    //     listItem.textContent = data[i];
    //     repoList.appendChild(listItem);
       })};

       searchBtn.addEventListener('click', getApi);