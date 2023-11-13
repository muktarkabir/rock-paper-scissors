function getComputerChoice() {
	let randomChoice = Math.floor(Math.random() * 3) + 1;
	if (randomChoice == 1) {
		return "Rock";
	} else if (randomChoice == 2) {
		return "Paper";
	} else {
		return "Scissors";
	}
}

let playResult = "";
function playRound(playerSelection, computerSelection) {
	let alarm = "Wrong Input.";
	playerSelection = prompt("Enter Rock,Paper or Scissors:");
	playerSelection =
		playerSelection.charAt(0).toUpperCase() +
		playerSelection.slice(1).toLowerCase();
	computerSelection = getComputerChoice();

	if (playerSelection == computerSelection) {
		playResult = "Tie Game.";
	} else if (playerSelection == "Rock" && computerSelection == "Paper") {
		playResult = "You lose,Paper covers Rock.";
	} else if (playerSelection == "Rock" && computerSelection == "Scissors") {
		playResult = "You win,Rock breaks Scissors!";
	} else if (playerSelection == "Paper" && computerSelection == "Rock") {
		playResult = "You win,Paper covers Rock!";
	} else if (playerSelection == "Paper" && computerSelection == "Scissors") {
		playResult = "You lose,Scissors cuts Paper.";
	} else if (playerSelection == "Scissors" && computerSelection == "Paper") {
		playResult = "You win, Scissors cuts Paper!";
	} else if (playerSelection == "Scissors" && computerSelection == "Rock") {
		playResult = "You lose,Rock breaks Scissors.";
	} else {
		alert(alarm);
		return playRound();
	} //returns the function when an input is invalid instead of using a do while.
	alert(playResult);
	console.log(playResult);
	return playResult;
}

function game() {
	let wins = 0;
	let losses = 0;
	let ties = 0;
	let finalMessage = "";

	for (let roundCount = 0; roundCount < 5; roundCount++) {
		playRound();
		if (playResult == "You win,Rock breaks Scissors!") {
			wins += 1;
		} else if (playResult == "You win,Paper covers Rock!") {
			wins += 1;
		} else if (playResult == "You win, Scissors cuts Paper!") {
			wins += 1;
		} else if (playResult == "You lose,Paper covers Rock.") {
			losses += 1;
		} else if (playResult == "You lose,Scissors cuts Paper.") {
			losses += 1;
		} else if (playResult == "You lose,Rock breaks Scissors.") {
			losses += 1;
		} else if (playResult == "Tie Game.") {
			ties += 1;
		}
	}
	if (wins > losses) {
		finalMessage = `Congratulations! You defeated the machine ${wins} to ${losses}.`;
	} else if (losses > wins) {
		finalMessage = `You lost to the Computer ${losses} to ${wins}.`;
	} else {
		finalMessage = "It's a Draw.";
	}
	alert(finalMessage);
	console.log(finalMessage, wins, losses, ties);
}

game();
