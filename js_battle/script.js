// Battle Game Project 10/27/2023

//Add an event handler to the button element
document.getElementById("button").onclick = startBattle;

//Definition of the startBattle() Function witch starts the game itself
function startBattle() {
	//Clear any old messages in the document from previous games
	document.getElementById("victory").textContent = "";
	document.getElementById("defeat").textContent = "";

	//Initial prompt for the user input and gets stored in a variable
	let action = window.prompt("In the creepy forest a Troll suddenly appears... \nDo you FIGHT, RUN, or BRIBE the Troll?").toUpperCase();

	//Switch statement to handle the player's choice
	switch(action) {
		case "FIGHT": {
			fightBattle();
			break;
		}//end of case "FIGHT"

		case "RUN": {
			runBattle();
			break;
		}//end of case "RUN"

		case "BRIBE": {
			bribeBattle();
			break;
		}//end of case "BRIBE"

		default: {
			//We're here because the user has not entered a valid choice at the origional prompt
			window.alert("WHOOPS!\nYou entered: " + action + ".\nPlease enter a valid choice of 'FIGHT', 'RUN', or 'BRIBE'");
			startBattle();
			break;
		}//end of default case
	}//end of the switch statement
}//end of the startBattle() definition

//The definition of the fightBattle() function (when you fight the troll)
function fightBattle() {
	//start collecting some user responses with variables
	let skill = window.prompt("Are you a skilled fighter? (YES or NO)").toUpperCase();
	let strong = window.prompt("Can you lift that log? (YES or NO)").toUpperCase();

	//logic that analyzes the responses and creates the outcome
	if(skill === "YES" || strong === "YES") {
		//the user said yes to at least 1 prompt
		document.getElementById("victory").innerHTML = "You have won with either skill or strength!<br/>You survive another day";
		document.getElementById("win").play();
		document.getElementById("button").textContent = "Play Again?";
	} else {
		document.getElementById("defeat").innerHTML = "You have lost because you are weak and can not fight!<br/>Sucka";
		document.getElementById("lose").play();
		document.getElementById("button").textContent = "Play Again?";
	}// end of if...else
}//end of fightBattle()

//The definition of the runBattle() function (if you choose to run)
function runBattle() {
	//Variable to store the user response
	let fast = window.prompt("Can you run fast? (YES or NO)").toUpperCase();

	//Logic to analyze the variable and provide the outcome
	if(fast === "YES") {
		document.getElementById("victory").innerHTML = "You have won with your speed!<br/>You survive another day";
		document.getElementById("win").play();
		document.getElementById("button").textContent = "Play Again?";
	} else {
		document.getElementById("defeat").innerHTML = "You have lost because you are clumsy and can not run!<br/>Sucka";
		document.getElementById("lose").play();
		document.getElementById("button").textContent = "Play Again?";
	}//end of if...else
}//end of runBattle function

//The definition of the bribeBattle() function
function bribeBattle() {
	//variable to store user response
	let cash = window.prompt("Do you have money? (YES or NO)").toUpperCase();
	let goods = window.prompt("Do you have anything of value? (YES or NO)").toUpperCase();

	//Logic to analyize the outcome
	if(cash === "YES" && goods === "YES") {
		document.getElementById("victory").innerHTML = "Toll Troll paid: GO!<br/>You survive another day";
		document.getElementById("win").play();
		document.getElementById("button").textContent = "Play Again?";
	} else {
		document.getElementById("defeat").innerHTML = "You have lost because you have nothing of value for the Troll.";
		document.getElementById("lose").play();
		document.getElementById("button").textContent = "Play Again?";
	}//end of if...else
}//end of the bribeBattle() function

/*
This is what the code would be asking if they have money, and how much money they actually have 
	let amount = window.prompt("How much money do you have?\nPlease enter a NUMERIC value!");
	//check amount against our condition
	if(amount > 80) {
		document.getElementById("victory").innerHTML = "Toll Troll paid: GO!<br/>You survive another day";
		document.getElementById("win").play();
		document.getElementById("button").textContent = "Play Again?";
	} else {
		//user had money, just not enough
		document.getElementById("defeat").innerHTML = "You have lost because you have nothing of value for the Troll.";
		document.getElementById("lose").play();
		document.getElementById("button").textContent = "Play Again?";
	}//end of nested if statement
*/