const slider = document.getElementById("slider");
const textTime = document.getElementById("time-text");
const startBtn = document.getElementById("start-button");
slider.addEventListener("click", setTime);

function setTime() {
    textTime.innerHTML = slider.value + ":00";
}

function startTimer() {
    let timeParts = textTime.textContent.split(":");
    let minutes = Number(timeParts[0]);
    let seconds = Number(timeParts[1]);

    let currentTime = minutes * 60 + seconds;
    let timer = setInterval(() => {
        currentTime--;
        minutes = Math.floor(currentTime / 60);
        seconds = currentTime % 60;
        textTime.textContent = minutes + ":" + seconds;
    },
    1000);
}
