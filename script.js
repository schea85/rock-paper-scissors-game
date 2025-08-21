function getComputerChoice() {         
    let computerChoice = Math.floor(Math.random()*3); 
    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
    return computerChoice;
};

function getHumanChoice() {

    let userInput = prompt("Enter rock, paper or scissors");
    if (userInput.toLowerCase() === "rock") {           
        return "rock";
    } else if (userInput.toLowerCase() === "paper") {
        return "paper";
    } else if (userInput.toLowerCase() === "scissors") {
        return "scissors";
    }
    return userInput;
};

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {    
    if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        return "You Lose!  Paper beats Rock.";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        return "You Win!  Rock beats Scissors.";
    } else if (humanChoice === "rock" && computerChoice === "rock") {
        return "It's a tie!  Both Rocks.";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return "You Win!  Paper beats Rock.";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        return "You Lose!  Scissors beats Paper.";
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        return "It's a tie!  Both Papers.";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        return "You Lose!  Rock beats Scissors.";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return "You Win!  Scissors beats Paper.";
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
        return "It's a tie!  Both Scissors.";
    }     
}   




function playGame(){
    
    

    for (let i = 0; i < 5; i++){
        let result = playRound(getHumanChoice(), getComputerChoice());
        console.log(result);
        if (result.includes("win")) {
            humanScore++;
            return `Computer: ${computerScore} | Player: ${humanScore}`;
        } else if (result.includes("lose")) {
            computerScore++;
            return `Computer: ${computerScore} | Player: ${humanScore}`;
        }
    }

    console.log(`_FINAL SCORE_  PLAYER: ${humanScore}, COMPUTER: ${computerScore}.`);
    if (humanScore > computerScore) {
        console.log("YOU WIN!");
    } else if (humanScore < computerScore) {
        console.log("COMPUTER WINS!");
    } else {
        console.log("TIE GAME.");
    }
}

playGame();
