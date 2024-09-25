// Set the end date for the countdown (YYYY-MM-DD HH:MM:SS)
let endDate = new Date('2024-10-01T00:00:00').getTime();

// Update the countdown every 1 second
let timer = setInterval(function() {
  // Get the current date and time
  let now = new Date().getTime();

  // Find the time difference between now and the end date
  let timeRemaining = endDate - now;

  // Calculate the days, hours, minutes, and seconds remaining
  let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the result
  document.getElementById("timer").innerHTML = 
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // Check if the countdown is over and display "expired"
  if (timeRemaining < 0) {
    clearInterval(timer);
    document.getElementById("timer").innerHTML = "";
    document.getElementById("expired").innerHTML = "<p>Expired</p>";
  }
}, 1000);
