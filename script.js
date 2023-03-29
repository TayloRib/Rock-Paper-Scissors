alert("Welcome to our rock, paper, scissors game!");

let userChoice = prompt("Please select R, P, or S to start playing.") 

console.log(userChoice)

//Array for choices
let choices = ["R", "P", "S"];

//function that runs random choice
let compChoice = randNum(choices);
console.log(compChoice);


function randNum(arr){
let choice = arr[Math.floor(Math.random() * arr.length)];
return choice;
}

//win condition messages
function winMessage() {
    console.log("Congrats! You won.")
}

function loseMessage() {
    console.log("Sorry! You lost.")
}

function tieMessage() {
    console.log("Darn! You tied.")
}

// if statement

if ((userChoice === "R") && (compChoice === "P")) {
    console.log(loseMessage);
}

if ((userChoice === "R") && (compChoice === "R")) {
    console.log(tieMessage);
}

if ((userChoice === "R") && (compChoice === "S")) {
    console.log(winMessage);
}
