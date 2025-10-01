let options = ["Rock", "Paper", "Scissors"]

function getComputerChoice(){
    let randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];    
};

function hasPlayerWonTheRound(playerChoice, computerChoice) {
  return (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Scissors" && computerChoice === "Paper") ||
    (playerChoice === "Paper" && computerChoice === "Rock")
  );
};

let playerScore = 0;
let computerScore = 0;

function getRoundResults(userOption) {
  const computerResult = getComputerChoice();
  
  // display computer's choice
  randomComputerResult.innerText = "Computer's Choice: " + computerResult;

  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else if (computerResult === userOption) {
    return `It's a tie! Both chose ${userOption}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
};

let playerScoreTextElement = document.getElementById("player-score");
let computerScoreTextElement = document.getElementById("computer-score");
let roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
let resetBtn = document.getElementById("reset-btn");
resetBtn.style.display = "none";
let computerRockEmoji = document.getElementById("rockEmoji");
let computerPaperEmoji = document.getElementById("paperEmoji");
let computerScissorsEmoji = document.getElementById("scissorsEmoji");
let randomComputerResult = document.getElementById("computer-result");

function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption);
  roundResultsMsg.style.color = "indigo";
  playerScoreTextElement.innerText = playerScore;
  computerScoreTextElement.innerText = computerScore;
  

  if (playerScore === 5){
    winnerMsgElement.innerText = "🎉 Player Wins the Game!";
    winnerMsgElement.style.color = "darkorange";
    roundResultsMsg.style.display = "none";
    resetBtn.style.display = "block";
    optionsContainer.style.display = "none";
    randomComputerResult.innerText = "";
  } else if (computerScore === 5){
    winnerMsgElement.innerText = "💻 Computer Wins the Game!";
    winnerMsgElement.style.color = "darkorange";
    roundResultsMsg.style.display = "none";
    resetBtn.style.display = "block";
    optionsContainer.style.display = "none";
    randomComputerResult.innerText = "";
  }
};

function resetGame(){
    playerScore = 0;
    computerScore = 0;
    playerScoreTextElement.innerText = playerScore;
    computerScoreTextElement.innerText = computerScore;
    resetBtn.style.display = "none";
    optionsContainer.style.display = "";
    winnerMsgElement.textContent = "";
    roundResultsMsg.textContent = "";
    roundResultsMsg.style.display = "block";
    randomComputerResult.innerText = ""
};


resetBtn.addEventListener("click", resetGame);

let rockBtn = document.getElementById("rockBtn");
let paperBtn = document.getElementById("paperBtn");
let scissorsBtn = document.getElementById("scissorsBtn");

rockBtn.addEventListener("click", () => {
    showResults("Rock");
});
paperBtn.addEventListener("click", () => {
    showResults("Paper");
});
scissorsBtn.addEventListener("click", () => {
    showResults("Scissors");
});


/*
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
*/
