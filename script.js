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
    let playResult = document.querySelector('.round-result > p')
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
    console.log(playResult);
    return playResult;
}  


const rockButton = document.getElementById('rock');
rockButton.addEventListener('click',()=>{playRound('Rock')});
const paperButton = document.getElementById('paper');
paperButton.addEventListener('click',()=>{playRound('Paper')});
const scissorsButton = document.getElementById('scissors');
scissorsButton.addEventListener('click',()=>{playRound('Scissors')});




// function game() {
//     let wins = 0;
//     let losses = 0;
//     let ties = 0;
//     let finalMessage = '';
    
//     for (let roundCount = 0; roundCount < 5; roundCount++) {
//         playRound();
//     if (playResult == 'You win,Rock breaks Scissors!') {
//         wins +=1;
//     }else if (playResult == 'You win,Paper covers Rock!') {
//         wins +=1;
//     }else if (playResult == 'You win, Scissors cuts Paper!') {
//         wins +=1;
//     }else if (playResult == 'You lose,Paper covers Rock.') {
//         losses += 1;
//     }else if (playResult == 'You lose,Scissors cuts Paper.') {
//         losses +=1;
//     }else if (playResult == 'You lose,Rock breaks Scissors.') {
//         losses +=1;
//     }else if (playResult =='Draw.') {
//         ties += 1;
//     } 
    
    
//     }
//     if (wins > losses) {
//         finalMessage = `Congratulations! You defeated the machine ${wins} to ${losses}.` 
//     }else if (losses > wins){
//         finalMessage = `You lost to the Computer ${losses} to ${wins}.`
//     }else{
//         finalMessage = 'It\'s a Draw.';
//     }
//     alert(finalMessage);
//     console.log(finalMessage,wins,losses,ties);
    

// }





const buttons = document.querySelectorAll("button");
const clickSound = document.getElementById("click");
buttons.forEach(button => {
    button.addEventListener("click",()=>{
        clickSound.play();
    });
});
