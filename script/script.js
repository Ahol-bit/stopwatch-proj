

// localStorage.setItem('score', JSON.stringify(score));

let miliSecondsPage = document.querySelector('.mili-second');
let secondPage = document.querySelector('.second');
let minutesPage = document.querySelector('.minutes');
const startButton = document.querySelector('.start-button');
const stopButton = document.querySelector('.stop-button');
const buttonPage = document.querySelector('.button-page');
let intervalID;
let intervalSec
let isStart = false;
let startT;
let elapsedPausedTime = 0;

const startStopWatch = (bool) => {
  if (bool === true) {
    // secondTool();
    miliSecondTool();
    startT = new Date().getTime()  - elapsedPausedTime;
    intervalID = setInterval(minuteTool, 1000);
    isStart
  } else if (bool === false) {
    clearInterval(intervalSec);
    clearInterval(intervalID);
    elapsedPausedTime = new Date().getTime() - startT; // calculate elapsed paused time
    intervalID = null; // reset the interval variable
  }

  // clearInterval(intervalID);
}

startButton.addEventListener('click', () => startStopWatch(true));
stopButton.addEventListener('click', () => {
  startStopWatch(false);
  buttonPage.innerHTML = '<button class="reset-button">Reset</button>'
  const resetButton = document.querySelector('.reset-button');
  
  resetButton.addEventListener('click', () => {
    startStopWatch(false);
    elapsedPausedTime = 0;
    miliSecondsPage.innerHTML = '00';
    secondPage.innerHTML = "00";
    minutesPage.innerHTML = '00';
    buttonPage.innerHTML = '';
  })
});






const miliSecondTool = () => {
  intervalSec = setInterval(() => {
    let currentTime = new Date().getTime(); 
    let elapsedTime = currentTime - startT;
    let miliSeconds = Math.floor(elapsedTime / 10) % 100; 
    miliSecondsPage.innerHTML = pad(miliSeconds);
  }, 10);
}

// const secondTool = () => {
//   // let Value1 = 0
//   intervalSec2 = setInterval(() => {
//     let currentTime = new Date().getTime(); 
//     let elapsedTime = currentTime - startT;
    
//   }, 1000);
// }
// let startT = new Date().getTime();
const minuteTool = () => {
  console.log(typeof intervalID);
  let currentTime = new Date().getTime(); 
  let elapsedTime = currentTime - startT;
  let minutes = Math.floor(elapsedTime / 1000 / 60) % 60; 
  let seconds = Math.floor(elapsedTime / 1000) % 60; 
  secondPage.innerHTML = pad(seconds);
  minutesPage.innerHTML = pad(minutes);
}


function pad(number) {
  // add a leading zero if the number is less than 10
  return (number < 10 ? "0" : "") + number;
}





































// let mValue1 = 0
// let mValue2 = 0
// const minuteTool = () => {
//   intervalID = setInterval(() => {
//       minutesPage.innerHTML = `${mValue1++}${mValue2}`
     
//   }, 2000);
// }


// // startStopWatch();

// var startTime; // to keep track of the start time
// var stopwatchInterval; // to keep track of the interval
// var elapsedPausedTime = 0; // to keep track of the elapsed time while stopped

// function startStopwatch() {
//   if (!stopwatchInterval) {
//     startTime = new Date().getTime() - elapsedPausedTime; // get the starting time by subtracting the elapsed paused time from the current time
//     stopwatchInterval = setInterval(updateStopwatch, 1000); // update every second
//   }
// }

// function stopStopwatch() {
//   clearInterval(stopwatchInterval); // stop the interval
//   elapsedPausedTime = new Date().getTime() - startTime; // calculate elapsed paused time
//   stopwatchInterval = null; // reset the interval variable
// }

// function resetStopwatch() {
//   stopStopwatch(); // stop the interval
//   elapsedPausedTime = 0; // reset the elapsed paused time variable
//   document.getElementById("stopwatch").innerHTML = "00:00:00"; // reset the display
// }

// function updateStopwatch() {
//   var currentTime = new Date().getTime(); // get current time in milliseconds
//   var elapsedTime = currentTime - startTime; // calculate elapsed time in milliseconds
//   var seconds = Math.floor(elapsedTime / 1000) % 60; // calculate seconds
//   var minutes = Math.floor(elapsedTime / 1000 / 60) % 60; // calculate minutes
//   var hours = Math.floor(elapsedTime / 1000 / 60 / 60); // calculate hours
//   var displayTime = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds); // format display time
//   document.getElementById("stopwatch").innerHTML = displayTime; // update the display4
//   console.log(minutes);
// }

