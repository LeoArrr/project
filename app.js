const message = "Hello World";
console.log(message);

let userWins = 0;
let computerWins = 0;

function playGame(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  let result;
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You win!";
    userWins++;
  } else if (userChoice === computerChoice) {
    result = "It's a tie!";
  } else {
    result = "Computer wins!";
    computerWins++;
  }
  const gameResultElement = document.getElementById("game-result");
  if (gameResultElement) {
    gameResultElement.innerText = `You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`;
  }
  if (userWins === 3) {
    alert("Congratulations! You won 3 times. Access granted!");
    window.location.href = "https://github.com/LeoArrr/project";
  } else if (computerWins === 3) {
    alert("Access Denied: You lost 3 times.");
    document.body.innerHTML = `<h1 id="access-denied">Access Denied: You lost 3 times.</h1>`;
  }
  document.body.classList.add("access-denied-body");
}

// Add event listeners to the buttons
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".button-container a");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      let userChoice;
      if (button.querySelector("i.fa-hand-back-fist")) {
        userChoice = "rock";
      } else if (button.querySelector("i.fa-hand")) {
        userChoice = "paper";
      } else if (button.querySelector("i.fa-hand-scissors")) {
        userChoice = "scissors";
      }
      playGame(userChoice);
    });
  });
});
