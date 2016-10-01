var inquirer = require('inquirer');

//constructor function to choose a word
function startGame() {
	numGuesses = 9;
wordChoice = wordsList[Math.floor(Math.random() * wordsList.length)];
	lettersInWordChoice = wordChoice.split("");
	numBlanks = lettersInWordChoice.length;
	
}














//select the 'random' word for the game