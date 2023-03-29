//alert("Welcome to our rock, paper, scissors game!");

//let userChoice = prompt("Please pick R, P, or S");
    //use popup window to allow user to pick R,P, or S
    //store result in a variable called userChoice
    //TODO: EDGE CASE: what happens if the user picks another letter?
    //TODO: EDGE CASE: what happens if they use a lowercase letter

//TODO: randomly select computer choice, store in variable
let choices = ["R", "P", "S"];

let compChoice = randNum(choices);
console.log(compChoice);


function randNum(arr){
let choice = arr[Math.floor(Math.random() * arr.length)];
return choice;
}


    //TODO: possible choices include R, P, or S,
    //TODO: store in variable called compChoice

//TODO: compare user and computer choice
//TODO: display results of game
    // TODO: if user = rock and comp = scissors or user = scissors and comp = paper or user = paper and comp = rock, user wins
    // TODO: if user = rock and comp = paper or user = scissors and comp = roce or user = paper and comp = scissors, comp wins
    // TODO: if user = rock and comp = rock or user = scissors and comp = scissors or user = paper and comp = paper, tie

//TODO: display stats
    //TODO: track wins, losses and ties
    //TODO: display all three in one screen

//TODO: ask user if they want to play again
    //TODO: if they say yes, restart whole game
    //TODO: if they say no, stop doing anything