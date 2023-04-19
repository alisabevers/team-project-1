var APIKey = "97CtSZ/oPnIXq150EVo/iQ==wz5zY0YtY761DSyg";
var searchInput = document.querySelector('.searchInput');
var searchbtn = document.querySelector('.searchbtn');

searchbtn.addEventListener('click', function(event){
    event.preventDefault();
    if(searchInput.value == ""){
        return;
    }
 userInput=searchInput.value;
 console.log(userInput);

var userInput;
var recipeQueryURL = "https://api.api-ninjas.com/v1/recipe?query=" + userInput;
var nutritionQueryURL = "https://api.api-ninjas.com/v1/nutrition?query=" + userInput;
var mealButtons = document.querySelector(".mealElements");


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
    for (var i = 0; i < data.length; i++) {
        var popUpContent = data[i].ingredients + "\n" + data[i].instructions;
        var mealBtn = document.createElement("button");
        mealBtn.textContent = data[i].title;
        mealBtn.type = "button";
        mealBtn.className = "list-group-item btn btn-outline-secondary col-6";
        mealBtn.setAttribute("data-bs-toggle", "popover");
        mealBtn.setAttribute("data-bs-title", data[i].title);
        mealBtn.setAttribute("data-bs-content", popUpContent);
        mealBtn.setAttribute("data-bs-trigger", "focus");
        mealButtons.appendChild(mealBtn);
    }
    // function to create the pop-up when clicking the mealBtns
    var popUp = function() {
        'use strict'
        document.querySelectorAll('[data-bs-toggle="popover"]')
        .forEach(popover => {
        new bootstrap.Popover(popover)
    })
    };
    popUp();

    // function to make the pop-up disappear when something else is clicked
    var popover = new bootstrap.Popover('.popover-dismiss', {
        trigger: 'focus'
      })
      popover();

    console.log(data[0].ingredients);
    console.log(data[0].instructions);
});
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
