
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
  // this.image = image;
  this.clicks = 0;
  // Pushes to allRecipes array
  allRecipes.push(this);
}

// Instantiate all recipe objects with constructor function
//Recipe #1
new Recipe('Negroni', 'The negroni cocktail dates back to the early 20th century, when the Italian Count Camillo Negroni ordered an Americano (Italian vermouth, Camapari, and soda water), but with gin instead of soda water. In a mixing glass combine:', ['1 ounce gin of your choice',
  '1 ounce Campari',
  '1 ounce sweet vermouth',
  'Stir with ice and strain into a rocks glass over ice.',
  'Garnish with an expressed orange peel to finish out this lovely easy-drinking cocktail.',
  'Relax and enjoy.'
]);

//Recipe #2
new Recipe('Martinez', 'Rumored to be invented in the port city of Martinez, California in the 19th century, this riff on a classic manhattan is a classy, yet subdued way to end a long day. In a mixing glass combine:', ['1.5 ounces gin of your choice',
  '1.5 ounces of sweet vermouth',
  '.25 ounces of Luxardo maraschino liqueur',
  '2 dashes of Angostura bitters',
  'Stir with ice and strain into a glass, but not before expressing an orange peel onto the drink.',
  'This is a suave and elegant way to unwind after a long day. Cheers.'
]);

//Recipe #3
new Recipe('Saturn', 'Originally called the X-15, but later changed to the Saturn rocket that propelled the Apollo shuttle to the moon, J. “Popo” Galsini invented the Saturn in 1967 for the International Bartender’s Association World Championship. To craft this award-winning cocktail, use a shaker tin to combine:', ['1.25 ounces gin of your choice',
  '.5 ounces of lemon juice',
  '.5 ounces of passionfruit syrup',
  '.25 ounces of falernum (a syrup or liqueur usually using ginger, lime, and almond, and frequently cloves or allspice)',
  '.25 ounces of orgeat (an almond syrup) into a shaker',
  'Once combined add ice to the shaker and shake until frosty. Strain (or just pour directly, it’s your drink after all) into a glass and enjoy the vacation.']);

//Recipe #4
new Recipe('Gin Fizz', 'Fizzes are a cocktail class all to their own, a classic among classics, with the first known instance dating all the way back to the 1876 edition of The Bar-tender’s Guide by Jerry Thomas. This drink is simply a decadent and exciting way to kick off any gathering, big or small. In a shaker tin combine:', ['2 ounces gin of your choice',
  '.75 ounces of lemon juice',
  '.5 ounces simple syrup (equal parts sugar and water)',
  '1 egg white (or .75 ounces of pasteurized egg white from a carton) into a shaker',
  'Enough soda water to bring the wash level of the drink to the top of the glass (about 1 ounce)',
  'At first, shake with ice for about 10-15 seconds',
  'Then, add ice and shake for an additional 8-12 seconds or until you hear the mixture go frothy (it’s hard to explain, but you’ll feel it more than you’ll hear it).',
  'Strain into a glass, and then top with the soda water for a frothy extravagant way to announce to the world that the weekend can officially commence.'
]);

//Recipe #5
new Recipe('Old Fashioned', 'Some would say it’s the king of cocktails, this cocktail’s origins are as murky as it is storied. Sometimes called the first cocktail, sometimes made with a sugar cube, sometimes with simple syrup, this cocktail is always delicious. Whether you are reaching for the old standby of bourbon, or are looking to branch out into something different, perhaps a rye or a scotch, this recipe will craft an easy transition into a quiet evening. In a rocks glass, combine:', ['2 ounces whiskey of your choice',
  '.25 ounces of simple syrup',
  '3-4 dashes of angostura bitters',
  'Add ice to the glass, and stir a few times to dilute and combine. Express an orange peel to round out one of the oldest, coziest cocktails on the books.'
]);

//Recipe #6
new Recipe('Whiskey Highball', 'Some would say it’s the king of cocktails, this cocktail’s origins are as murky as it is storied. Sometimes called the first cocktail, sometimes made with a sugar cube, sometimes with simple syrup, this cocktail is always delicious. Whether you are reaching for the old standby of bourbon, or are looking to branch out into something different, perhaps a rye or a scotch, this recipe will craft an easy transition into a quiet evening. In a rocks glass, combine:', ['2 ounces whiskey of your choice',
  '4 ounces of chilled soda water',
  'Add ice and a citrus garnish if you desire. Kick up your heels, preferably on a patio'
]);

//Recipe #7
new Recipe('Whiskey Sour', 'An absolute classic, the whiskey sour’s origins are a mystery, but the history of the drink dates back to the Lincoln administration, with it’s first appearance coming to us in 1862. Whether constructed in a civil war era gala, or simply a fancy get together with friends, the whiskey sour makes quite the impression. To construct, combine these ingredients into a shaker tin:', ['2 ounces whiskey of your choice',
  '.75 ounces of lemon juice',
  '.5 ounces of simple syrup (equal parts sugar and water)',
  '1 egg white (or .75 ounces of pasteurized egg white from a carton)',
  'First, shake with ice for about 10-15 seconds. Then, add ice and shake for an additional 8-12 seconds or until you hear the mixture go frothy (it’s hard to explain, but you’ll feel it more than you’ll hear it)',
  'Strain into a chilled cocktail glass. Let rest for a moment before placing a couple drops of angostura bitters on the settled egg foam cap. Drag a toothpick through the drops to create a fancy design. Enjoy with friends, strangers, or royalty, you party animal'
]);

//Recipe #8
new Recipe('Manhattan', 'Relatively unchanged from when it was invented in the late 19th century, the Manhattan is a stalwart of many stellar cocktail menus for a reason. Though originally there was a cocktail for each of the five boroughs, the Manhattan stands as the favorite of many fancy drinkers for nearly 200 years. To create this suave party starter in a glass, in a mixing glass, combine:', ['2 ounces whiskey of your choice',
  '1 ounce sweet vermouth',
  '3 dashes angostura bitters',
  'Stir with ice and strain into a chilled cocktail glass. Garnish with an expressed orange peel. Put on your suavest tuxedo or cocktail dress. Conquer the world. It’s party time'
]);

//Recipe #9
new Recipe('Oaxaca Old Fashioned', 'A modern classic, the Oaxaca Old Fashioned is a smoky jaunt to comfort. In 2007 Phil Ward created this delicious citrusy smoky cocktail, and simultaneously kicked off the obsession of mezcal that American drinkers still find themselves in today. To create, in a rocks glass, combine:', ['2 ounces of whatever mezcal or tequila you have on hand (maybe reach for the slightly nicer bottle on this one. You’re just going to have to trust us)',
  '.25 ounces agave nectar',
  '2 dashes orange bitters',
  '2 dashes angostura bitters',
  'Once combined, add ice and stir. Garnish with a piece of orange peel. Sip, relax, and  indulge in the subdued cultural moment of enjoying a trendy craft cocktail from the comfort of your own home'
]);

//Recipe #10
new Recipe('Rosita', 'First appearing in Gary Reagan’s 1991 cocktail book The Bartender’s Bible, the Rosita is a modern classic that is perfectly suited for staying in and avoiding the crowds. A riff on the negroni, this cocktail packs a little bit of a bitter punch, but is tempered by the other ingredients to create a cocktail that other cocktails want to be when they grow up. To make the Rosita, in a mixing glass, combine', ['1.5 reposado tequila of your choice',
  '.5 ounces Campari',
  '.5 ounces dry vermouth',
  '.5 ounces sweet vermouth',
  '3 dashes angostura bitters',
  'Stir with ice and strain into a rocks glass over fresh ice. Garnish with an expressed orange peel. Put on the nearest pair of headphones if any loud noises can be heard and threaten to harsh the tranquil vibes that this drink instills'
]);

//Recipe #11
new Recipe('Margarita', 'Of any cocktail on this site, this drink is a party in a glass. We dare you to drink it and not break out into dance at any point while you drink it. Like many uber popular classic cocktails, the history is murky here. What is known for absolute fact though, is that margaritas are best enjoyed with friends near a body of water. To create, in a shaker tin, combine:', ['2 ounces tequila of your choice',
  '.75 ounces lime juice',
  '.5 ounces lime juice',
  '.25 ounces agave syrup',
  'Shake all ingredients in a shaker tin until diluted and chilled. Pour the entire cocktail (shaken ice and all) into a salt rimmed glass with a wedge of lime as a garnish. Tastes best if you scale up the recipe and serve it at your barbecue. Your friends asked us to say that last part'
]);

//Recipe #12
new Recipe('Paloma', 'A cocktail that has no business being underutilized as it currently is, the paloma has been part of the American cocktail canon since roughly the 1950’s. A perfect fit for any event held in full or dappled sunshine, the paloma is made by, in a highball glass, combining:', ['2 ounces tequila of your choice',
  '.5 ounces lime juice',
  '3-4 ounces grapefruit soda',
  'Once all ingredients are in the glass add ice and a lime wedge garnish. Sip, smile, party, repeat'
]);

//Recipe #13
new Recipe('Corn n Oil', 'Containing neither corn nor oil, this cocktail is a bit of a misnomer. Named due to the fact that the darker colored blackstrap rum tends to float on the lighter colored ingredients of the drink, there is a slight oil visual comparison that could be made. Regardless of naming though, this drink is a lovely way to enjoy a private beach, even if it only exists in your mind. To create, in a rocks glass, combine:', ['2 ounces blackstrap rum',
  '.5 ounces falernum',
  '.5 ounces lime juice',
  '3 dashes angostura bitters',
  'Stir all ingredients with ice and garnish with a lime wedge. Don’t worry about the clock, you’re on island time now'
]);

//Recipe #14
new Recipe('Mai Tai', 'Perhaps the most famous drink in the tiki canon, the Mai Tai is a vacation in a glass. Though the origins of this drink are hotly contested, it was likely created in the 1930’s or 1940’s by Donn Beach or Victor “Trader Vic” Bergeron. Regardless, this drink is best enjoyed on a white sand beach, or at home in your most tropical armchair. To create, in a shaker tin, combine:', ['1.5 ounces white rum of your choice',
  '.75 lime juice',
  '.5 ounces orange curacao',
  '.5 ounces orgeat (an almond syrup)',
  '.5 ounces dark or funky rum (we recommend Appleton 12 if you are going the funky route)',
  'Shake with ice and garnish with a mint sprig that has been slapped to release the essential oils',
  'Optionally: reserve the funky or dark rum and slowly pour over the completed cocktail for a more layered effect'
]);

//Recipe #15
new Recipe('Mojito', 'Within the bartending community, there is something called the mojito effect. It refers to the fact that if a mojito is ordered, 6 or 7 more will be ordered quickly after. Why? Because it looks and tastes delicious, and it is unquestionably one of the best party starter drinks in the game. To create, in a shaker tin, combine:', ['3-4 mint leaves',
  '2 ounces white rum of your choice',
  '.75 ounces lime juice',
  '.5 ounces simple syrup (equal parts sugar and water)',
  'Shake all the ingredients with ice and pour into a highball glass and top with soda water. Garnish with a sprig of mint that has been slapped to release the essential oils, and prepare to make 8 more as your party guests see you sipping yours'
]);

//Recipe #16
new Recipe('Daiquiri', 'Supposedly dating all the way back to 1898, when a mining engineer named Jennings Cox created it in the town of Daiquiri in Cuba, the Daiquiri is one of the great grandaddies of cocktails. While often thought of as a blender abomination that should have been left in the 80’s, a shaken daiquiri is widely regarded as the test of a bartender’s skill. We are confident that this recipe will at least get you as far as entertaining your friends and fellow libators. To create, in a shaker, combine:', ['2 ounces white rum of your choice',
  '.75 ounces lime juice',
  '.5 ounces simple syrup (equal parts sugar and water)',
  'A tiny pinch of salt',
  'Shake with ice and strain into a chilled coupe. Garnish with a lime wheel and graciously receive your award for party starter. You’ve earned it'
]);

//Recipe #17
new Recipe('Martini', 'With a glut of “Martini Bars” through the 80’s and 90’s, it’s okay to think that the martini has to be some big ado with all sorts of flavors and special rims. In actuality the martini is an exercise of simplicity and omission. While everyone has their specific order and opinion on what makes a perfect martini, ours strays a little from the original recipe (probably invented sometime around the Gold Rush), but we think you’ll enjoy it all the same. In a mixing glass combine:', ['2.5 ounces vodka of your choice',
  '1 ounce of dry vermouth (Dolin is an amazing brand for all kinds of vermouth, we recommend using theirs if you have the choice)',
  '2 dashes of orange bitters',
  'Mix with ice until thoroughly chilled, then strain into a chilled coupe, and garnish with an expressed lemon peel. As great as James Bond is, he’s a better spy than a drinker. Skip the shake, it’s far too loud for the peace this coziness this drink achieves',
]);

//Recipe #18
new Recipe('White Russian', 'The stuff of decadence, the White Russian is a riff on the Black Russian, but is actually not Russian at all in origin. Though it is a product of the 60’s, the White Russian found true fame from the 1998 film “The Big Lebowski”. To create, in a rocks glass, combine:', ['2 ounces vodka of your choice',
  '1 ounce of Kahlua, or other coffee liqueur',
  'Add ice and stir, topping with a splash of heavy cream. If you don’t like it, that’s just like, your opinion, man.',
]);

//Recipe #19
new Recipe('Lemon Drop', 'Debuting in the 70’s when it was created by Norman Jay Hobday in San Francisco, the Lemon Drop has become a mainstay in pop-culture and bar menus alike. Famously served to Rachel Ray by Oprah on her show in 2006, the Lemon Drop, with it’s sugared rim and incredible drinkability, is a crowd pleaser among crowd pleasers. To get the party started, in a shaker tin, combine:', ['2 ounces vodka of your choice',
  '.75 ounces lemon juice',
  '.5 ounces simple syrup (equal parts sugar and water)',
  '.25 ounces curacao',
  'Shake all the ingredients with ice and strain into a chilled coupe. Sunshine is optional with this drink, the party is not.'
]);

//Recipe #20
new Recipe('Cosmopolitan', 'The Cosmopolitan is debatably one of the most iconic drinks to come out of the 80’s, and it’s popularity was brought to astronomical heights with Sex and the City. A veritable beacon of a good time, the Cosmopolitan simply oozes party vibes. To create, in a shaker tin, combine:', ['1.5 ounces citron vodka of your choice',
  '.75 ounces orange curacao',
  '.75 ounces lime juice',
  '.5 ounces cranberry juice',
  'Shake all the ingredients with ice and strain into a chilled coup. Garnish with a lime wheel, and embrace your inner Samantha as you take a sip.'
]);

// **************************** EXECUTABLE CODE - HELPER FUNCTIONS ****************************


// Render recipe card
function renderRecipe() {

  // let cardTitle = document.getElementById('title');
  // let cardTitleName = document.getElementById('name');
  // let cardBio = document.getElementById('bio');
  // let cardRecipe = document.getElementById('recipe');
  // let cardImage = document.getElementById('image');
  // let cardIngredients = document.getElementById('ingredients');

  // if (chosenVibe === 'cozy' && chosenSpirit === 'whiskey') {
  //   cardTitleName.textContent = allRecipes[4].name;
  //   cardBio.textContent = allRecipes[4].bio;
  //   for (let i = 0; i < allRecipes[4].recipe.length; i++) {
  //     let liElem = document.createElement('li');
  //     cardIngredients.appendChild(liElem);
  //     liElem.textContent = allRecipes[4].recipe[i];
  //   }
  // }

  switch (chosenVibe) {
    case 'cozy':
      switch (chosenSpirit) {
        case 'gin':
          cardTitleName.textContent = allRecipes[0].name;
          cardBio.textContent = allRecipes[0].bio;
          for (let i = 0; i < allRecipes[0].recipe.length; i++) {
            let liElem = document.createElement('li');
            cardIngredients.appendChild(liElem);
            liElem.textContent = allRecipes[0].recipe[i];
          }
          allRecipes[0].clicks++;
          break;
        case 'whiskey':
          cardTitleName.textContent = allRecipes[4].name;
          cardBio.textContent = allRecipes[4].bio;
          for (let i = 0; i < allRecipes[4].recipe.length; i++) {
            let liElem = document.createElement('li');
            cardIngredients.appendChild(liElem);
            liElem.textContent = allRecipes[4].recipe[i];
          }
          allRecipes[4].clicks++;
          break;
        case 'tequila':
          cardTitleName.textContent = allRecipes[8].name;
          cardBio.textContent = allRecipes[8].bio;
          for (let i = 0; i < allRecipes[8].recipe.length; i++) {
            let liElem = document.createElement('li');
            cardIngredients.appendChild(liElem);
            liElem.textContent = allRecipes[8].recipe[i];
          }
          allRecipes[8].clicks++;
          break;
        case 'rum':
          cardTitleName.textContent = allRecipes[12].name;
          cardBio.textContent = allRecipes[12].bio;
          for (let i = 0; i < allRecipes[12].recipe.length; i++) {
            let liElem = document.createElement('li');
            cardIngredients.appendChild(liElem);
            liElem.textContent = allRecipes[12].recipe[i];
          }
          allRecipes[12].clicks++;
          break;
        case 'vodka':
          cardTitleName.textContent = allRecipes[16].name;
          cardBio.textContent = allRecipes[16].bio;
          for (let i = 0; i < allRecipes[16].recipe.length; i++) {
            let liElem = document.createElement('li');
            cardIngredients.appendChild(liElem);
            liElem.textContent = allRecipes[16].recipe[i];
          }
          allRecipes[16].clicks++;
          break;
      }
      break;

    case 'party':
      switch (chosenSpirit) {
        case 'gin':
          cardTitleName.textContent = allRecipes[3].name;
          cardBio.textContent = allRecipes[3].bio;
          for (let i = 0; i < allRecipes[3].recipe.length; i++) {
            let liElem = document.createElement('li');
            cardIngredients.appendChild(liElem);
            liElem.textContent = allRecipes[3].recipe[i];
          }
          allRecipes[3].clicks++;
          break;
        case 'whiskey':
          cardTitleName.textContent = allRecipes[7].name;
          cardBio.textContent = allRecipes[7].bio;
          for (let i = 0; i < allRecipes[7].recipe.length; i++) {
            let liElem = document.createElement('li');
            cardIngredients.appendChild(liElem);
            liElem.textContent = allRecipes[7].recipe[i];
          }
          allRecipes[7].clicks++;
          break;
        case 'tequila':
          cardTitleName.textContent = allRecipes[11].name;
          cardBio.textContent = allRecipes[11].bio;
          for (let i = 0; i < allRecipes[11].recipe.length; i++) {
            let liElem = document.createElement('li');
            cardIngredients.appendChild(liElem);
            liElem.textContent = allRecipes[11].recipe[i];
          }
          allRecipes[11].clicks++;
          break;
        case 'rum':
          cardTitleName.textContent = allRecipes[14].name;
          cardBio.textContent = allRecipes[14].bio;
          for (let i = 0; i < allRecipes[14].recipe.length; i++) {
            let liElem = document.createElement('li');
            cardIngredients.appendChild(liElem);
            liElem.textContent = allRecipes[14].recipe[i];
          }
          allRecipes[14].clicks++;
          break;
        case 'vodka':
          cardTitleName.textContent = allRecipes[19].name;
          cardBio.textContent = allRecipes[19].bio;
          for (let i = 0; i < allRecipes[19].recipe.length; i++) {
            let liElem = document.createElement('li');
            cardIngredients.appendChild(liElem);
            liElem.textContent = allRecipes[19].recipe[i];
          }
          allRecipes[19].clicks++;
          break;
      }
      break;
  }

  // If-else statements to determine which recipe object will be displayed on the page
  // Write the appropriate recipe card to the DOM
  // Increments "clicks" on that recipe object by 1
  // Send full updated array of objects into local storage - define new variable as stringified allRecipes array and send to localStorage
}

// **************************** EVENT HANDLERS ****************************


// DONE: Event Handler function for submit button
function handleSubmit(event) {
  event.preventDefault();
  userName = event.target.name.value;
  chosenVibe = event.target.vibe.value;
  chosenSpirit = event.target.spirit.value;

  cardIngredients.innerHTML = '';
  renderRecipe();

  //LOCAL STORAGE
  let stringifiedRecipes = JSON.stringify(allRecipes);
  console.log(`allRecipes was stringified`);

  localStorage.setItem('recipes', stringifiedRecipes);
  console.log(`Stringified allRecipe was stored locally in "recipes"`);
}

// **************************** EVENT LISTENERS ****************************

// DONE: Event Listener for submit button

const inputForm = document.getElementById('cocktail-form');
inputForm.addEventListener('submit', handleSubmit);






