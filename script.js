// Function to generate a random letter from 'a' to 'z'
function getRandomLetter() {
  // const letters = "abcdefghijklmnopqrstuvwxyz";
  const letters = 'asdf;lkj'
  const randomIndex = Math.floor(Math.random() * letters.length);
  return letters[randomIndex];
}

// Variables to keep track of the current letter, score, and whether the game is active
let currentLetter = getRandomLetter();
let score = 0;
let gameActive = true;

// Function to update the displayed letter and score
function updateDisplay() {
  document.getElementById("letterDisplay").innerText = currentLetter;
  document.getElementById("score").innerText = `${score}`;
}

// Event listener for key presses
document.addEventListener("keydown", function (event) {
  if (gameActive) {
    if (event.key === currentLetter) {
      score++;
      document.getElementById("score").style.color = "green";
      document.getElementById("letterDisplay").classList.toggle("text-primary");
    } else {
      score--;
      document.getElementById("score").style.color = "red";
    }
    // Get a new random letter and update the display
    currentLetter = getRandomLetter();
    updateDisplay();
  }
});

// Initialize display
updateDisplay();
