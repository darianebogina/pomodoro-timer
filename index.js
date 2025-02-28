const slider = document.getElementById("slider");
const textTime = document.getElementById("time-text");
const startBtn = document.getElementById("start-button");
slider.addEventListener("click", setTime);
let timer;

function setTime() {
    textTime.innerHTML = slider.value + ":00";
}

function startTimer() {
    let timeParts = textTime.textContent.split(":");
    let minutes = Number(timeParts[0]);
    let seconds = Number(timeParts[1]);
    let currentTime = minutes * 60 + seconds;
    
    startBtn.disabled = true;

    timer = setInterval(() => {
        currentTime--;
        minutes = Math.floor(currentTime / 60);
        seconds = currentTime % 60;
        textTime.textContent = minutes + ":" + seconds;
        if (currentTime <= 0) {
            clearInterval(timer);
            startBtn.disabled = false;
        }
    },
        10);
}

function stopTimer() {
    clearInterval(timer);
    startBtn.disabled = false;
}

function resetTimer() {
    clearInterval(timer);
    textTime.innerHTML = slider.value + ":00";
    startBtn.disabled = false;
}
