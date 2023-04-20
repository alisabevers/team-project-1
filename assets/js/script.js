var APIKey = "97CtSZ/oPnIXq150EVo/iQ==wz5zY0YtY761DSyg";
var searchInput = document.querySelector('.searchInput');
var searchbtn = document.querySelector('.searchbtn');
var mealButtons = document.querySelector(".mealElements");
var nutritionEl = document.querySelector(".nutrition");

document.addEventListener("click", function(event) {
    if (event.target.className.includes("mealsName")) {
        console.log(event.target.textContent);
        nutritionAPI(event.target.textContent);
    }
})


function recipeAPI(userInput) {
    var recipeQueryURL = "https://api.api-ninjas.com/v1/recipe?query=" + userInput;
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
    
    mealButtons.innerHTML= "";
    for (var i = 0; i < data.length; i++) {
        var mealBtn = document.createElement("button");
        var popUpContent = "You will need: " + data[i].ingredients + "Preparation: " + data[i].instructions;
        mealBtn.textContent = data[i].title;
        mealBtn.type = "button";
        mealBtn.className = "mealsName list-group-item btn btn-outline-secondary col-6";
        mealBtn.setAttribute("data-bs-custom-class", "custom-popup");
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
};

function nutritionAPI(userInput) {
    var nutritionQueryURL = "https://api.api-ninjas.com/v1/nutrition?query=" + userInput;
    // fetch call for nutritional value of the selected meal
fetch (nutritionQueryURL, {
    headers: {'X-Api-Key': APIKey}
})
.then (function (response) {
    return response.json()
.then (function (nutrition) {
    for (var i = 0; i , i < nutrition.length; i++) {
        var nutrish = document.createElement("p");
        nutrish.textContent = `${nutrition[i].calories} ${nutrition[i].carbohydrates_total_g} ${nutrition[i].fat_total_g} ${nutrition[i].protein_g} ${nutrition[i].serving_size_g}`;
        // mealBtn.className = "list-group-item btn btn-outline-secondary col-6";
        // mealBtn.setAttribute("data-bs-custom-class", "custom-popup");
        // nutrish.setAttribute("data-bs-toggle", "popover");
        // mealBtn.setAttribute("data-bs-title", data[i].title);
        // nutrish.setAttribute("data-bs-content", popUpContent2);
        // mealBtn.setAttribute("data-bs-trigger", "focus");
        nutritionEl.appendChild(nutrish);
    }
    console.log(nutrition);
    // console.log(nutrition[i].calories);
    // console.log(nutrition[i].carbohydrates_total_g);
    // console.log(nutrition[i].fat_total_g);
    // console.log(nutrition[i].protein_g);
    // console.log(nutrition[i].serving_size_g);
})
});
}


searchbtn.addEventListener('click', function(event){
    event.preventDefault();
    if(searchInput.value == ""){
        return;
    }
 var userInput=searchInput.value;
 console.log(userInput);
 recipeAPI(userInput);
//  nutritionAPI(userInput);
});