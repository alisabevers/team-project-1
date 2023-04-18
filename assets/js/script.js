var APIKey = "97CtSZ/oPnIXq150EVo/iQ==wz5zY0YtY761DSyg";
var userInput;
var recipeQueryURL = "https://api.api-ninjas.com/v1/recipe?query=" + userInput;
var nutritionQueryURL = "https://api.api-ninjas.com/v1/nutrition?query=" + userInput;


fetch (recipeQueryURL, {
    headers: {'X-Api-Key': APIKey}
})
.then(function (response) {
    return response.json()
.then (function (data) {
    console.log(data);
})
});

// 


var searchInput = document.querySelector('.searchInput');
var searchbtn = document.querySelector('.searchbtn');


searchbtn.addEventListener('click', function(event){
    event.preventDefault();
    if(searchInput.value == ""){
        return;
    }
 userInput=searchInput.value;
 console.log(userInput);
})
