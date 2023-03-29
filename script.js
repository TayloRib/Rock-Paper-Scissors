alert("Welcome to our rock, paper, scissors game!");

//Array for choices

let countUserWin = 0; 
let countUserLose = 0; 
let countUserTie = 0; 


game();
function game() {

//function that runs random choice
let userChoice = prompt("Please select R, P, or S to start playing.");
let choices = ["R", "P", "S"];
let compChoice = randNum(choices);

function randNum(arr){
    let choice = arr[Math.floor(Math.random() * arr.length)];
    return choice;
}

//win condition messages
function winMessage() {
    countUserWin++;
    alert("Congrats! You won.");
    stats();
}

function loseMessage() {
    countUserLose++;
    alert("Sorry! You lost.");
    stats();
}

function tieMessage() {
    countUserTie++;
    alert("Darn! You tied.");
    stats();
}

function stats() {
    alert("Your Wins: " + countUserWin + "\nYour Loses: " + countUserLose + "\nYour Ties: " + countUserTie)
}


// if statement to display win conditions

if (userChoice === "R" && compChoice === "P" || userChoice === "S" && compChoice === "R" || userChoice === "P" && compChoice === "S") {
    loseMessage();
} else if (userChoice === "R" && compChoice === "S" || userChoice === "S" && compChoice === "P" || userChoice === "P" && compChoice === "R") {
    winMessage();
} else {
    tieMessage();
}

let playAgain = confirm("Play Again?");
    if (playAgain) {
        game();
    } else alert("Thanks for playing!")
}