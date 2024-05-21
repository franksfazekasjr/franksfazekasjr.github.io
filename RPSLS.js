function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }
  
  function hasPlayerWonTheRound(player, computer) {
    return (
      (player === "Rock" && (computer === "Scissors" || computer === "Lizard")) ||
      (player === "Scissors" && (computer === "Paper" || computer === "Lizard")) ||
      (player === "Paper" && (computer === "Rock" || computer === "Spock")) ||
      (player === "Lizard" && (computer === "Paper" || computer === "Spock")) ||
      (player === "Spock" && (computer === "Rock" || computer === "Scissors"))
    );
  }
  
  let playerScore = 0;
  let computerScore = 0;
  
  function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();
  
    if (hasPlayerWonTheRound(userOption, computerResult)) {
      playerScore++;
      return `Player wins! ${userOption} beats ${computerResult}`;
    } else if (computerResult === userOption) {
      return `It's a tie! Both chose ${userOption}`;
    } else {
      computerScore++;
      return `Computer wins! ${computerResult} beats ${userOption}`;
    }
  }
  
  const playerScoreSpanElement = document.getElementById("player-score");
  const computerScoreSpanElement = document.getElementById("computer-score");
  const roundResultsMsg = document.getElementById("results-msg");
  const winnerMsgElement = document.getElementById("winner-msg");
  const optionsContainer = document.querySelector(".options-container");
  const resetGameBtn = document.getElementById("reset-game-btn");
  
  function showResults(userOption) {
    roundResultsMsg.innerText = getRoundResults(userOption);
    computerScoreSpanElement.innerText = computerScore;
    playerScoreSpanElement.innerText = playerScore;
  
    if (playerScore === 3 || computerScore === 3) {
      winnerMsgElement.innerText = `${
        playerScore === 3 ? "Player" : "Computer"
      } has won the game!`;
  
      resetGameBtn.style.display = "block";
      optionsContainer.style.display = "none";
    }
  
  };
  function resetGame() {
    playerScore = 0;
    playerScoreSpanElement.innerText = "0";
    computerScore = 0;
    computerScoreSpanElement.innerText = "0";
    resetGameBtn.style.display = 'none';
    optionsContainer.style.display = 'block';
    roundResultsMsg.innerText = '';
    winnerMsgElement.innerText = '';
  };
  
  resetGameBtn.addEventListener("click", resetGame);
  
  const rockBtn = document.getElementById("rock-btn");
  const paperBtn = document.getElementById("paper-btn");
  const scissorsBtn = document.getElementById("scissors-btn");
  const lizardBtn = document.getElementById("lizard-btn");
  const spockBtn = document.getElementById("spock-btn");
  
  rockBtn.addEventListener("click", function () {
    showResults("Rock");
  });
  
  paperBtn.addEventListener("click", function () {
    showResults("Paper");
  });
  
  scissorsBtn.addEventListener("click", function () {
    showResults("Scissors");
  });

  lizardBtn.addEventListener("click", function () {
    showResults("Lizard");
  });

  spockBtn.addEventListener("click", function () {
    showResults("Spock");
  });