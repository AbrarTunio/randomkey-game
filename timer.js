let timer;
let timeLeft = 300; // Timer set for 2 minutes (120 seconds)

// Function to start the timer
function startTimer() {
  timer = setInterval(function () {
    timeLeft--;
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById("timer").innerText = `Time: ${String(
      minutes
    ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      gameActive = false; // Disable the game when the timer runs out
    }
  }, 1000);
}

// Function to restart the game and timer
function restartGame() {
  clearInterval(timer);
  timeLeft = 120; // Reset time
  gameActive = true; // Enable the game
  startTimer(); // Restart the timer
  currentLetter = getRandomLetter(); // Get a new random letter
  score = 0; // Reset the score
  updateDisplay(); // Update the display
}

// Start the timer initially
startTimer();

// Event listener for restart button
document.getElementById("restartButton").addEventListener("click", restartGame);
