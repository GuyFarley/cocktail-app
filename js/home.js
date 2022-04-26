
// Alert - "Are you 21 or older?" "Yes" directs to index.html. "No" directs elsewhere

// **************************** GLOBAL VARIABLES ****************************

let allRecipes = [];

// **************************** DOM REFERENCES ****************************

let cardTitle = document.getElementById('title');
let cardTitleName = document.getElementById('name');
let cardBio = document.getElementById('bio');
let cardRecipe = document.getElementById('recipe');
let cardImage = document.getElementById('image');
let cardIngredients = document.getElementById('ingredients');


// **************************** LOCAL STORAGE ****************************


// **************************** CONSTRUCTOR ****************************

function Recipe(name, bio, recipe, image) {
  this.name = name;
  this.bio = bio;
  this.recipe = recipe;
  this.image = image;
  this.clicks = 0;
  // Pushes to allRecipes array
  allRecipes.push(this);
}

// Instantiate all recipe objects with constructor function
// Vinny

// Includes property for "clicks"

// **************************** EXECUTABLE CODE - HELPER FUNCTIONS ****************************

// Form - Inputs: Radio Buttons for Liquor choices and Vibe choices
// Submit button on form

// Render recipe card
// **************************** EVENT HANDLERS ****************************

// Event Handler function for submit button
// If-else statements to determine which recipe object will be displayed on the page
// Write the appropriate recipe card to the DOM
// Increments "clicks" on that recipe object by 1
// Send full updated array of objects into local storage - define new variable as stringified allRecipes array and send to localStorage


// **************************** EVENT LISTENERS ****************************

// Event Listener for submit button








