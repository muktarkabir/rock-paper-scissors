const rockButton = document.getElementById('rock');
rockButton.addEventListener('click',()=>{playRound(rockButton.innerText)});
const paperButton = document.getElementById('paper');
paperButton.addEventListener('click',()=>{playRound(paperButton.innerText)});
const scissorsButton = document.getElementById('scissors');
scissorsButton.addEventListener('click',()=>{playRound(scissorsButton.innerText)});


let finalMessage = document.querySelector('.result-display > h2');
let playResult = document.querySelector('.round-result > p');
let wins = 0;
let losses = 0;

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
    computerSelection = getComputerChoice();   
    if (playerSelection == computerSelection) {
        playResult.textContent = 'Draw.';
    } else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        playResult.textContent = 'You lose,Paper covers Rock.';
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        playResult.textContent = 'You win,Rock breaks Scissors!';
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        playResult.textContent = 'You win,Paper covers Rock!';
    } else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        playResult.textContent = 'You lose,Scissors cuts Paper.';
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        playResult.textContent = 'You win, Scissors cuts Paper!';
    } else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        playResult.textContent = 'You lose,Rock breaks Scissors.'
    }
    console.log(playResult.textContent);
    game()
    return playResult.textContent;
    
    
}  



function game() {
    let humanScore =document.querySelector('div > .h-s-num').innerHTML = wins;
    let computerScore = document.querySelector('div > .c-s-num').innerHTML = losses;
    const winRegex = /You win,*/;
    const loseRegex = /You lose,*/;

    if (winRegex.test(playResult.textContent)){
        console.log(humanScore);
        document.querySelector('div > .h-s-num').innerHTML = wins +=1;
        console.log(humanScore);
    }else if (loseRegex.test(playResult.textContent)) {
        console.log(computerScore);
        document.querySelector('div > .c-s-num').innerHTML = losses +=1;
        console.log(computerScore);
    } 
    if (document.querySelector('div > .h-s-num').innerHTML == 5) {
        finalMessage.textContent = 'Congratulations,You Won!';
    }else if (document.querySelector('div > .c-s-num').innerHTML == 5){
        finalMessage.textContent = 'Looks like you lost,Play again or something.';
    }
}



const buttons = document.querySelectorAll("button");
const clickSound = document.getElementById("click");
buttons.forEach(button => {
    button.addEventListener("click",()=>{
        clickSound.play();
    });
});
