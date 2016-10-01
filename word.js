//require inquirer
var inquirer = require('inquirer');

//contains methods that check letters guessed vs selected word

var wordsList = ["pumpkin", "ghost", "witch", "skeleton", "zombie"];
var wordChoice = "";
var lettersInWordChoice = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongGuesses = [];

//game counter
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;







//methods for checking letters guessed against the chosen word, constructor file