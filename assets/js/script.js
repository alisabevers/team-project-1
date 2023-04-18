var APIKey = "97CtSZ/oPnIXq150EVo/iQ==wz5zY0YtY761DSyg";
var searchInput = document.querySelector('.searchInput','#search-container');
var searchbtn = document.querySelector('.searchbtn','#search-container');

searchbtn.addEventListener('click', function(event){
    event.preventDefault();
    console.log("hi");
    if(searchInput.value == ""){
        return;
    }
 userInput = searchInput.value;
 console.log(userInput);

var userInput;
var recipeQueryURL = "https://api.api-ninjas.com/v1/recipe?query=" + userInput;
var nutritionQueryURL = "https://api.api-ninjas.com/v1/nutrition?query=" + userInput;

// fetch call for ingredients and instructions
fetch (recipeQueryURL, {
    headers: {'X-Api-Key': APIKey}
})
.then (function (response) {
    return response.json()
.then (function (data) {
    if (response.status !==200) {
        return;
    }
    console.log(data);
    console.log(data[0].ingredients);
    console.log(data[0].instructions);
})
});

// fetch call for nutritional value of the selected meal
fetch (nutritionQueryURL, {
    headers: {'X-Api-Key': APIKey}
})
.then (function (response) {
    return response.json()
.then (function (data) {
    console.log(data);
    console.log(data[0].calories);
    console.log(data[0].carbohydrates_total_g);
    console.log(data[0].fat_total_g);
    console.log(data[0].protein_g);
    console.log(data[0].serving_size_g);
})
});
})
