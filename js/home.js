
// Alert - "Are you 21 or older?" "Yes" directs to index.html. "No" directs elsewhere

// **************************** GLOBAL VARIABLES ****************************

let allRecipes = [];

let userName;
let chosenVibe;
let chosenSpirit;

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
new Recipe('Negroni', 'The negroni cocktail dates back to the early 20th century, when the Italian Count Camillo Negroni ordered an Americano (Italian vermouth, Camapari, and soda water), but with gin instead of soda water. In a mixing glass combine:', ['1 ounce gin of your choice',
  '1 ounce Campari',
  '1 ounce sweet vermouth',
  'Stir with ice and strain into a rocks glass over ice.',
  'Garnish with an expressed orange peel to finish out this lovely easy-drinking cocktail.',
  'Relax and enjoy.'
]);

new Recipe('Martinez', 'Rumored to be invented in the port city of Martinez, California in the 19th century, this riff on a classic manhattan is a classy, yet subdued way to end a long day. In a mixing glass combine:', ['1.5 ounces gin of your choice',
  '1.5 ounces of sweet vermouth',
  '.25 ounces of Luxardo maraschino liqueur',
  '2 dashes of Angostura bitters',
  'Stir with ice and strain into a glass, but not before expressing an orange peel onto the drink.',
  'This is a suave and elegant way to unwind after a long day. Cheers.'
]);

new Recipe('Saturn', 'Originally called the X-15, but later changed to the Saturn rocket that propelled the Apollo shuttle to the moon, J. “Popo” Galsini invented the Saturn in 1967 for the International Bartender’s Association World Championship. To craft this award-winning cocktail, use a shaker tin to combine:', ['1.25 ounces gin of your choice',
  '.5 ounces of lemon juice',
  '.5 ounces of passionfruit syrup',
  '.25 ounces of falernum (a syrup or liqueur usually using ginger, lime, and almond, and frequently cloves or allspice)',
  '.25 ounces of orgeat (an almond syrup) into a shaker',
  'Once combined add ice to the shaker and shake until frosty. Strain (or just pour directly, it’s your drink after all) into a glass and enjoy the vacation.']);

new Recipe('Gin Fizz', 'Fizzes are a cocktail class all to their own, a classic among classics, with the first known instance dating all the way back to the 1876 edition of The Bar-tender’s Guide by Jerry Thomas. This drink is simply a decadent and exciting way to kick off any gathering, big or small. In a shaker tin combine:', ['2 ounces gin of your choice',
  '.75 ounces of lemon juice',
  '.5 ounces simple syrup (equal parts sugar and water)',
  '1 egg white (or .75 ounces of pasteurized egg white from a carton) into a shaker',
  'Enough soda water to bring the wash level of the drink to the top of the glass (about 1 ounce)',
  'At first, shake with ice for about 10-15 seconds',
  'Then, add ice and shake for an additional 8-12 seconds or until you hear the mixture go frothy (it’s hard to explain, but you’ll feel it more than you’ll hear it).',
  'Strain into a glass, and then top with the soda water for a frothy extravagant way to announce to the world that the weekend can officially commence.'
]);

new Recipe('Old Fashioned', 'Some would say it’s the king of cocktails, this cocktail’s origins are as murky as it is storied. Sometimes called the first cocktail, sometimes made with a sugar cube, sometimes with simple syrup, this cocktail is always delicious. Whether you are reaching for the old standby of bourbon, or are looking to branch out into something different, perhaps a rye or a scotch, this recipe will craft an easy transition into a quiet evening. In a rocks glass, combine:', ['2 ounces whiskey of your choice',
  '.25 ounces of simple syrup',
  '3-4 dashes of angostura bitters',
  'Add ice to the glass, and stir a few times to dilute and combine. Express an orange peel to round out one of the oldest, coziest cocktails on the books.'
]);

new Recipe('Whiskey Highball', 'Some would say it’s the king of cocktails, this cocktail’s origins are as murky as it is storied. Sometimes called the first cocktail, sometimes made with a sugar cube, sometimes with simple syrup, this cocktail is always delicious. Whether you are reaching for the old standby of bourbon, or are looking to branch out into something different, perhaps a rye or a scotch, this recipe will craft an easy transition into a quiet evening. In a rocks glass, combine:', ['2 ounces whiskey of your choice',
  '.25 ounces of simple syrup',
  '3-4 dashes of angostura bitters',
  'Add ice to the glass, and stir a few times to dilute and combine. Express an orange peel to round out one of the oldest, coziest cocktails on the books.'
]);


// **************************** EXECUTABLE CODE - HELPER FUNCTIONS ****************************

// Render recipe card

// **************************** EVENT HANDLERS ****************************

function renderRecipe() {
  // If-else statements to determine which recipe object will be displayed on the page
  // Write the appropriate recipe card to the DOM
  // Increments "clicks" on that recipe object by 1
  // Send full updated array of objects into local storage - define new variable as stringified allRecipes array and send to localStorage
}

// DONE: Event Handler function for submit button
function handleSubmit(event) {
  event.preventDefault();
  userName = event.target.name.value;
  chosenVibe = event.target.vibe.value;
  chosenSpirit = event.target.spirit.value;

  renderRecipe();
}

// **************************** EVENT LISTENERS ****************************

// DONE: Event Listener for submit button

const inputForm = document.getElementById('cocktail-form');
inputForm.addEventListener('submit', handleSubmit);






