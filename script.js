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
    // playerSelection = prompt('Enter Your Choice:');
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    computerSelection = getComputerChoice();
    let playResult = '';
    if (playerSelection == computerSelection) {
        playResult = 'Tie Game';
    } else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        playResult = 'You lose,Paper covers Rock.';
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        playResult = 'You win,Rock breaks Scissors!';
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        playResult = 'You win,Paper covers Rock!';
    } else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        playResult = 'You lose,Scissors cuts Paper.';
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        playResult = 'You win, Scissors cuts Paper';
    } else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        playResult = 'You lose,Rock breaks Scissors.'
    } else{console.log('Input has to be rock,paper or scissors.');}
    alert(playResult);
    
    return playerSelection,computerSelection,playResult;
}  




console.log(playRound(prompt('Enter Your Choice:'),getComputerChoice()));