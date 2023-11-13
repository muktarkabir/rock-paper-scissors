const rockButton = document.getElementById("rock");
rockButton.addEventListener("click", () => {
	playRound(rockButton.innerText);
});
const paperButton = document.getElementById("paper");
paperButton.addEventListener("click", () => {
	playRound(paperButton.innerText);
});
const scissorsButton = document.getElementById("scissors");
scissorsButton.addEventListener("click", () => {
	playRound(scissorsButton.innerText);
});

const buttons = document.querySelectorAll("button");
const clickSound = document.getElementById("click");
buttons.forEach((button) => {
	button.addEventListener("click", () => {
		clickSound.play();
	});
});

const newGame = document.getElementById("new-game");
let finalMessage = document.querySelector(".result-display > h2");
let playResult = document.querySelector(".round-result > p");

const userScore = document.querySelector("div > .h-s-num");
const compScore = document.querySelector("div > .c-s-num");
let wins;
let losses;
let playing;

function start() {
	wins = 0;
	losses = 0;
	playing = true;

	userScore.innerHTML = 0;
	compScore.innerHTML = 0;

	document.querySelector("body").classList.remove("player--wins");
	document.querySelector("body").classList.remove("player--loses");
	finalMessage.textContent = "Can You Win?";
	playResult.textContent = "";
}
start();
newGame.addEventListener("click", start);

function getComputerChoice() {
	if (playing) {
		let randomChoice = Math.floor(Math.random() * 3) + 1;
		if (randomChoice == 1) {
			return "Rock";
		} else if (randomChoice == 2) {
			return "Paper";
		} else {
			return "Scissors";
		}
	}
}

function playRound(playerSelection, computerSelection) {
	if (playing) {
		computerSelection = getComputerChoice();

		if (playerSelection == computerSelection) {
			finalMessage.textContent = "No winner,It's a Draw.";
		} else if (playerSelection == "Rock" && computerSelection == "Paper") {
			finalMessage.textContent = "You lose,Paper covers Rock.";
		} else if (playerSelection == "Rock" && computerSelection == "Scissors") {
			finalMessage.textContent = "You win,Rock breaks Scissors!";
		} else if (playerSelection == "Paper" && computerSelection == "Rock") {
			finalMessage.textContent = "You win,Paper covers Rock!";
		} else if (playerSelection == "Paper" && computerSelection == "Scissors") {
			finalMessage.textContent = "You lose,Scissors cuts Paper.";
		} else if (playerSelection == "Scissors" && computerSelection == "Paper") {
			finalMessage.textContent = "You win, Scissors cuts Paper!";
		} else if (playerSelection == "Scissors" && computerSelection == "Rock") {
			finalMessage.textContent = "You lose,Rock breaks Scissors.";
		}
		game();
	}
}

function game() {
	if (playing) {
		document.querySelector("div > .h-s-num").innerHTML = wins;
		document.querySelector("div > .c-s-num").innerHTML = losses;
		const winRegex = /You win,*/;
		const loseRegex = /You lose,*/;
		if (winRegex.test(finalMessage.textContent)) {
			document.querySelector("div > .h-s-num").innerHTML = wins += 1;
		} else if (loseRegex.test(finalMessage.textContent)) {
			document.querySelector("div > .c-s-num").innerHTML = losses += 1;
		}
		if (document.querySelector("div > .h-s-num").innerHTML == 5) {
			playing = false;
			document.querySelector("body").classList.add("player--wins");
			finalMessage.textContent = "Congratulations,You Won!";
			playResult.textContent = "You were first to 5.";
		} else if (document.querySelector("div > .c-s-num").innerHTML == 5) {
			playing = false;
			document.querySelector("body").classList.add("player--loses");
			finalMessage.textContent = "You Lost.";
			playResult.textContent = "Computer was first to 5.";
		}
	}
}
