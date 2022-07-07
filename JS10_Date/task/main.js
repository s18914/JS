const startBtn = document.querySelector(".start");
const resetBtn = document.querySelector(".reset");
let isWorking = false;

const timeDiv = document.querySelector('.time div');

let time;

const startFn = () => {
  
  if(isWorking){
    isWorking = false;
    startBtn.textContent = "Start";
  } else {
    isWorking = true;
    startBtn.textContent = "Stop";

    if(time === 0 || time === undefined) 
      time = new Date().getTime();

    let change = setInterval(() => {
      if(isWorking){
        const nowTime = (new Date().getTime()) - time;
        prepareAnswer(nowTime);
      } else {
        clearInterval(change);
      }
      
    }, 10)
  }
}

function prepareAnswer(n) {
  const s = Math.floor(n / 1000);
  const ms = Math.floor(n - s*1000);
  timeDiv.innerHTML = `${s}.${ms}`;
}

const resetFn = () => {
  isWorking = false;
  timeDiv.innerHTML = "---";
  time = 0;
}

startBtn.addEventListener("click", startFn);
resetBtn.addEventListener("click", resetFn);