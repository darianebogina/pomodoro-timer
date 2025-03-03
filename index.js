const slider = document.getElementById("slider");
const textTime = document.getElementById("time-text");
const startBtn = document.getElementById("start-button");
slider.addEventListener("click", setTime);
let timer;

function setTime() {
    textTime.innerHTML = slider.value + ":00";
    if (String(slider.value).length < 2) {
        textTime.innerHTML = "0" + textTime.innerHTML;
    }
}

function startTimer() {
    let timeParts = textTime.textContent.split(":");
    let minutes = Number(timeParts[0]);
    let seconds = Number(timeParts[1]);
    let currentTime = minutes * 60 + seconds;
    
    startBtn.disabled = true;
    slider.disabled = true;

    timer = setInterval(() => {
        if (currentTime <= 0) {
            clearInterval(timer);
            startBtn.disabled = true;
            return;
        }

        currentTime--;
        minutes = Math.floor(currentTime / 60);
        seconds = currentTime % 60;

        if (String(seconds).length < 2) {
            seconds = "0" + seconds;
        }

        if (String(minutes).length < 2) {
            minutes = "0" + minutes;
        }

        textTime.textContent = minutes + ":" + seconds;
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
    if (String(slider.value).length < 2) {
        textTime.innerHTML = "0" + textTime.innerHTML;
    }
    startBtn.disabled = false;
    slider.disabled = false;
}
