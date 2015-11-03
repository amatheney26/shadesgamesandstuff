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
    if (computerChoice == "rock") {
    		document.getElementById('comc')
    .innerHTML = '<img src="http://www.geneseo.edu/sites/default/files/images/grinding_rock_stone.gif" />';
    else if (computerChoice == "paper") {
    		document.getElementById('comc')
    .innerHTML = '<img src="https://goo.gl/L6JHmz" />';
    }else{
    			document.getElementById('comc')
    .innerHTML = '<img src="http://goo.gl/DOsCFm" />';
    };
    
    if (userChoice == "rock") {
    	document.getElementById('playc')
    .innerHTML = '<img src="http://www.geneseo.edu/sites/default/files/images/grinding_rock_stone.gif" />';
    }
    else if (userChoice == "paper") {
    	document.getElementById('playc')
    .innerHTML = '<img src="https://goo.gl/L6JHmz" />';
    }else{
    			document.getElementById('playc')
    .innerHTML = '<img src="http://goo.gl/DOsCFm" />';
    };
    	
    
    
    
