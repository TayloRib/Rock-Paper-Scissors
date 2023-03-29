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
    alert("Congrats! You won.")
}

function loseMessage() {
    alert("Sorry! You lost.")
}

function tieMessage() {
    alert("Darn! You tied.")
}

// if statement

if (userChoice === "R" && compChoice === "P" || userChoice === "S" && compChoice === "R" || userChoice === "P" && compChoice === "S") {
    console.log(loseMessage);
} else if (userChoice === "R" && compChoice === "S" || userChoice === "S" && compChoice === "P" || userChoice === "P" && compChoice === "R") {
    console.log(winMessage);
} else {
    console.log(tieMessage);
}