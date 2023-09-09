function getComputerChoice() {
let randomChoice = Math.floor(Math.random()*3) + 1;
if (randomChoice == 1) {
    return 'Rock'
}else if (randomChoice == 2) {
    return 'Paper'
}else {
    return 'Scissors'}
}
function playRound(playerSelection,computerSelection){
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    computerSelection = getComputerChoice();
    if (playerSelection == computerSelection) {
        console.log('Tie Game');
    } else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        console.log('You lose,Paper beats Rock.');
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        console.log('You win,Rock beats Scissors.');
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        console.log('You win,Paper beats Rock.');
    } else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        console.log('You lose,Scissors beats Paper.');
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        console.log('You win, Scissors beats Paper');
    } else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        console.log('CYou lose,Rock beats Scissors.');
    } else{console.log('Invalid Selection');}

    return playerSelection,computerSelection;
    
}  

playerSelection = "rock";
computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));