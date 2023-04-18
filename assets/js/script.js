var APIKey = "97CtSZ/oPnIXq150EVo/iQ==wz5zY0YtY761DSyg";
var userInput = "chicken";
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