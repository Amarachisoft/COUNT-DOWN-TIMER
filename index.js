const countdownElement = document.getElementById("countdown");

let seconds = 720; // 10 minutes in seconds
let intervalId = null;

function startCountdown() {
  intervalId = setInterval(() => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    countdownElement.textContent = `${minutes
      .toString()
      .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;

    seconds--;

    if (seconds <= 0) {
      clearInterval(intervalId);
      countdownElement.textContent = "Time's up!";
    }
  }, 1000); // 1000ms = 1s
}
