// 'use strict';

//DOM
let containerElem = document.getElementById('container');

//STORAGE
let retrievedRecipes = localStorage.getItem('recipes');
let parsedRecipes = JSON.parse(retrievedRecipes);

//RENDER

for (let i = 0; i < parsedRecipes.length; i++) {
  document.getElementById('container').style.visibility = 'visible';
  if (parsedRecipes[i].clicks > 0) {

    let cardTitle = document.createElement('h1');
    containerElem.appendChild(cardTitle);
    cardTitle.textContent = parsedRecipes[i].name;

    let timesChosen = document.createElement('p');
    containerElem.appendChild(timesChosen);
    timesChosen.textContent = `You have chosen this cocktail ${parsedRecipes[i].clicks} time(s)`;

    let cardContent = document.createElement('div');
    containerElem.appendChild(cardContent);

    let cardBio = document.createElement('p');
    cardContent.appendChild(cardBio);
    cardBio.textContent = parsedRecipes[i].bio;

    let cardRecipe = document.createElement('ul');
    cardContent.appendChild(cardRecipe);

    for (let j = 0; j < parsedRecipes[i].recipe.length; j++) {
      let liElem = document.createElement('li');
      cardRecipe.appendChild(liElem);
      liElem.textContent = parsedRecipes[i].recipe[j];
    }
    let blankDiv2 = document.createElement('div');
    cardContent.appendChild(blankDiv2);

    let cardImage = document.createElement('img');
    blankDiv2.appendChild(cardImage);
    cardImage.src = parsedRecipes[i].image;

    let horizontalRule = document.createElement('hr');
    blankDiv2.appendChild(horizontalRule);
  }
  let blankDiv = document.createElement('div');
  containerElem.appendChild(blankDiv);
}
