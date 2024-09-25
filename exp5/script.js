let interval; 

function setTime(){
  const givenTime = document.getElementById('timeInput').value;
  let containerDisplay = document.getElementById('timer-container');

  if (!givenTime) {
    alert("Please select a valid future date and time.");
    return;
  }
  
  const futureDate = new Date(givenTime);
  let currDate = new Date();
  const differenceInMs = futureDate - currDate;

  if (differenceInMs < 0) {
    clearInterval(interval);
    containerDisplay.innerHTML = `
      <div class="expired">
        <h3 style="color: red;">Expired</h3>
      </div>
    `;
    return;
  }

  updateDisplay(differenceInMs, containerDisplay);
  clearInterval(interval);

  interval = setInterval(() => {
    currDate = new Date();
    const differenceInMs = futureDate - currDate;

    if (differenceInMs < 0) {
      clearInterval(interval);
      containerDisplay.innerHTML = `
        <div class="expired">
          <h3 style="color: red;">Expired</h3>
        </div>
      `;
      return;
    }

    updateDisplay(differenceInMs, containerDisplay);
  }, 1000); 

  function updateDisplay(differenceInMs, containerDisplay) {
    const days = Math.floor(differenceInMs / 1000 / 60 / 60 / 24);
    const hours = Math.floor((differenceInMs / 1000 / 60 / 60) % 24);
    const minutes = Math.floor((differenceInMs / 1000 / 60) % 60);
    const seconds = Math.floor((differenceInMs / 1000) % 60);
  
    containerDisplay.innerHTML = `
      <p class="timerTitle">Remaining Time</p>
      <div class="display">
        <div id="days"><span style="font-size: 38px;">${days}</span> Days</div>
        <div id="hours"><span style="font-size: 38px;">${hours}</span> Hours</div>
        <div id="minutes"><span style="font-size: 38px;">${minutes}</span> Minutes</div>
        <div id="seconds"><span style="font-size: 38px;">${seconds}</span> Seconds</div>
      </div>
    `;
    return;
  }

  return;
}