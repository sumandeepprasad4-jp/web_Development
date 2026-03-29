// function play(user) {
//   let options = ['rock', 'paper', 'scissors'];
//   let computer = options[Math.floor(Math.random() * 3)];

//   if (user === computer) {
//     result = "Draw!";
//   } else if (
//     (user === 'rock' && computer === 'scissors') ||
//     (user === 'paper' && computer === 'rock') ||
//     (user === 'scissors' && computer === 'paper')
//   ) {
//     result = "You Win!";
//   } else {
//     result = "You Lose!";
//   }

//   document.getElementById("result").innerText =
//     `You: ${user} | Computer: ${computer} → ${result}`;
// }

// let number = Math.floor(Math.random() * 100) + 1;

// function guessNumber() {
//   let guess = document.getElementById("guess").value;

//   if (guess == number) {
//     result = "Correct!";
//   } else if (guess < number) {
//     result = "Too Low!";
//   } else {
//     result = "Too High!";
//   }

//   document.getElementById("result").innerText = result;
// }


// let score = 0;

// function checkAnswer(answer) {
//   if (answer === "correct") {
//     score++;
//   }
//   alert("Score: " + score);
// }