const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");

const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

let playerScore = 0;
let computerScore = 0;

function getRandomComputerResult() {
  const options = ["Камень", "Бумага", "Ножницы"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}
function hasPlayerWonTheRound(player, computer) {
  return (
    (player === "Камень" && computer === "Ножницы") ||
    (player === "Ножницы" && computer === "Бумага") ||
    (player === "Бумага" && computer === "Камень")
  );
}

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();
  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Ты выиграл! ${userOption} бьёт ${computerResult}`;
  } else if (computerResult === userOption) {
    return `Это ничья! Оба выбрали ${userOption}`;
  } else {
    computerScore++;
    return `Я выиграл! ${computerResult} бьёт ${userOption}`;
  }
}


function showResults(userOption) {
  const result = getRoundResults(userOption);
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;
  roundResultsMsg.innerText = result; 
  if (playerScore === 3 || computerScore === 3) {   
    winnerMsgElement.innerText = `${
      playerScore === 3 ? "Игрок" : "Я"
    } выиграл!`;
    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }
}

function resetGame() {
  playerScoreSpanElement.innerText = "0";
  computerScoreSpanElement.innerText = "0";
   playerScore  = 0;
  computerScore   = 0;
  resetGameBtn.style.display = "none";
  optionsContainer.style.display = "block";
  winnerMsgElement.innerText = "";
  roundResultsMsg.innerText = "";
}

resetGameBtn.addEventListener("click", resetGame);

rockBtn.addEventListener("click", function () {
  showResults("Камень");
});

paperBtn.addEventListener("click", function () {
  showResults("Бумага");
});

scissorsBtn.addEventListener("click", function () {
  showResults("Ножницы");
});
