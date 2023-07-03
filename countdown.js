const countdownTimer = document.getElementById("countdown-timer");
const countdownMessage = document.getElementById("countdown-message");
const countdownForm = document.getElementById("countdown-form");

let countdownInterval;

function startCountdown(event) {
  event.preventDefault();

  const targetDateInput = document.getElementById("target-date");
  const targetTimeInput = document.getElementById("target-time");
  const messageInput = document.getElementById("countdown-message-input");

  const targetDateString = targetDateInput.value;
  const targetTimeString = targetTimeInput.value;

  const targetDateTimeString = `${targetDateString}T${targetTimeString}`;
  const targetDateTime = new Date(targetDateTimeString);

  if (isNaN(targetDateTime)) {
    alert("Please enter a valid date and time!");
    return;
  }

  countdownInterval = setInterval(updateCountdown, 1000, targetDateTime);
  countdownMessage.textContent = messageInput.value;
  countdownForm.reset();
}

function updateCountdown(targetDateTime) {
  const currentDate = new Date();
  const remainingTime = Math.floor((targetDateTime - currentDate) / 1000);

  if (remainingTime <= 0) {
    clearInterval(countdownInterval);
    countdownTimer.textContent = "Countdown Over!";
    return;
  }

  const days = Math.floor(remainingTime / (60 * 60 * 24));
  const hours = Math.floor((remainingTime % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((remainingTime % (60 * 60)) / 60);
  const seconds = remainingTime % 60;

  countdownTimer.textContent = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

countdownForm.addEventListener("submit", startCountdown);
