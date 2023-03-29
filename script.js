alert("Welcome to our rock, paper, scissors game!");

let userChoice = prompt("Please select R, P, or S to start playing.") 

console.log(userChoice)


function winMessage() {
    console.log("Congrats! You won.")
}

function loseMessage() {
    console.log("Sorry! You lost.")
}

function tieMessage() {
    console.log("Darn! You tied.")
}
