
// Pulls entire object array out of local storage
// For each object that includes "clicks" > 0, write to Results page with DOM manipulation
// Same JS being used to write one cocktail to index.html after form submission, but wrapped in a for loop to display multiple cards
// "You've selected this cocktail ## of times."
// Else-if no objects have clicks, message for user to go to index and submit form

//DOM
let containerElem = document.getElementById('container');
// let cardTitle = document.getElementById('title');
// let cardTitleName = document.getElementById('name');
// let cardBio = document.getElementById('bio');
// let cardRecipe = document.getElementById('recipe');
// let cardImage = document.getElementById('image');
// let cardIngredients = document.getElementById('ingredients');

//STORAGE
let retrievedRecipes = localStorage.getItem('recipes');
console.log(`Stringified allRecipes was retrieved from storage`);

let parsedRecipes = JSON.parse(retrievedRecipes);
console.log(`Stringified allRecipes was parsed`);

//RENDER
for (let i = 0; i < parsedRecipes.length; i++) {
  if (parsedRecipes[i].clicks > 0) {
    let cardTitle = document.createElement('h1');
    containerElem.appendChild(cardTitle);
    cardTitle.textContent = parsedRecipes[i].name;
    let cardBio = document.createElement('div');
    containerElem.appendChild();
    cardBio.textContent = parsedRecipes[i].bio;
    for (let j = 0; j < parsedRecipes[j].recipe.length; j++) {
      let liElem = document.createElement('li');
      cardIngredients.appendChild(liElem);
      liElem.textContent = parsedRecipes[i].recipe[j];
    }
  }
}