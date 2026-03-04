let choice = ["rock", "paper", "scissors"];

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let result = document.getElementById("result");
let user_score = document.getElementById("user-score");
let computer_score = document.getElementById("computer-score");
let user_score_value = 0;
let computer_score_value = 0;

function playGame(user_choice) {
  let random_number = Math.floor(Math.random() * 3);
  let computer_choice = choice[random_number];
  if (user_choice === computer_choice) {
    result.innerHTML = "It's a tie! Computer also chose " + computer_choice;
  } else if (
    (user_choice === "rock" && computer_choice === "scissors") ||
    (user_choice === "paper" && computer_choice === "rock") ||
    (user_choice === "scissors" && computer_choice === "paper")
  ) {
    result.innerHTML = "You win! Computer chose " + computer_choice;
    user_score_value++;
    user_score.innerHTML = user_score_value;
  } else {
    result.innerHTML = "You lose! Computer chose " + computer_choice;
    computer_score_value++;
    computer_score.innerHTML = computer_score_value;
  }
}

// rock.addEventListener("click", function () {
//   playGame("rock");
// });

// paper.addEventListener("click", function () {
//   playGame("paper");
// });

// scissors.addEventListener("click", function () {
//   playGame("scissors");
// });
