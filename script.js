var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} alert("Computer: " + computerChoice);
alert("You picked: " + userChoice); 

if (userChoice == computerChoice) {
        alert ("Tie!");
    } else if (userChoice == "rock") {
        if (computerChoice == "scissors") {
            alert ("You win!");
        } else {
            alert ("You lose.");
        };
    } else if (userChoice == "paper") {
        if (computerChoice == "rock") {
            alert ("You win!");
        } else {
            alert ("You lose.");
        };
    } else if (userChoice == "scissors") {
        if (computerChoice == "paper") {
            alert ("You win!");
        } else {
            alert ("You lose");
        };
    };
