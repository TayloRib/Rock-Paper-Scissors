alert("Welcome to our rock, paper, scissors game!");

let userChoice = prompt("Please select R, P, or S to start playing.") 

console.log(userChoice)

//Array for choices
let choices = ["R", "P", "S"];
let countUserWin = 0; 
let countUserLose = 0; 
let countUserTie = 0; 

//function that runs random choice
let compChoice = randNum(choices);
console.log(compChoice);

function randNum(arr){
let choice = arr[Math.floor(Math.random() * arr.length)];
return choice;
}

//win condition messages
function winMessage() {
    countUserWin++;
    alert("Congrats! You won.")
    stats()
}

function loseMessage() {
    countUserLose++;
    alert("Sorry! You lost.")
    stats()
}

function tieMessage() {
    countUserTie++;
    alert("Darn! You tied.")
    stats()
}

function stats() {
    alert("Your Wins: " + countUserWin + "\nYour Loses: " + countUserLose + "\nYour Ties: " + countUserTie)
}

// if statement

if (userChoice === "R" && compChoice === "P" || userChoice === "S" && compChoice === "R" || userChoice === "P" && compChoice === "S") {
    loseMessage();
} else if (userChoice === "R" && compChoice === "S" || userChoice === "S" && compChoice === "P" || userChoice === "P" && compChoice === "R") {
    winMessage();
} else {
    tieMessage();
}

