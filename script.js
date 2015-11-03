var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} 
if (userChoice == computerChoice) {
         document.getElementById("result").innerHTML = "Its a Tie";
    } else if (userChoice == "rock") {
        if (computerChoice == "scissors") {
           document.getElementById("result").innerHTML = "You Win";
        } else {
            document.getElementById("result").innerHTML = "You Lose";
        };
    } else if (userChoice == "paper") {
        if (computerChoice == "rock") {
            document.getElementById("result").innerHTML = "You Win";
        } else {
           document.getElementById("result").innerHTML = "You Lose";
        };
    } else if (userChoice == "scissors") {
        if (computerChoice == "paper") {
           document.getElementById("result").innerHTML = "You Win";
        } else {
            document.getElementById("result").innerHTML = "You Lose";
        };
    };
    
