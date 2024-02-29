const cardValues = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createButtons(buttonContainer) {
    buttonContainer.innerHTML = "";

    for (let i = 0; i < cardValues.length; i++) {
        const button = document.createElement("button");
        button.textContent = cardValues[i];
        button.dataset.matched = "false";
        buttonContainer.appendChild(button);
        button.addEventListener("click", handleButtonClick);
    }
}

const buttonContainers = document.getElementsByClassName("button-container")
const countInput = document.getElementById("count");
const resetButton = document.querySelector('.reset-time');
let elapsedTime = 0;
let clickedButton = null;
let timerInterval;



function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        elapsedTime++;
        countInput.value = formatTime(elapsedTime);
    }, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    countInput.value = "";

    shuffleArray(cardValues);
    for (const buttonContainer of buttonContainers) {
        createButtons(buttonContainer);
    }
    clearInterval(timerInterval);
    startTimer();
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${remainingSeconds}`;
}

startTimer();

function handleButtonClick(event) {
    const button = event.target;
    // turns card over no matter what
    button.style.backgroundColor = "aquamarine";
    button.style.color = 'coral';
    // if previously clicked on
    if (clickedButton) {
        // if current clicked = previous clicked
        if (clickedButton !== button && clickedButton.textContent === button.textContent) {
            button.style.backgroundColor = "aquamarine";
            button.style.color = "coral";
            button.dataset.matched = "true";
            button.dataset.matched = "true";
            clickedButton.dataset.matched = "true";
            clickedButton = null;

            if (allButtonsMatched()) {
                clearInterval(timerInterval);
                alert("Congratulations! You matched all the numbers")

            }
        // if current != previous
        } else {

            // after 1 sec flip both back over
            setTimeout(() => {
                clickedButton.style.backgroundColor = "black";
                clickedButton.style.color = "black";
                button.style.backgroundColor = "black";
                button.style.color = "black";
                clickedButton = null;
            }, 1000);
        }
    } else {
        clickedButton = button;
    }
}


function allButtonsMatched() {
    const buttons = document.querySelectorAll('.button-container button');
    for (const button of buttons) {
        if (button.dataset.matched !== "true") {
            return false;
        }
    }
    return true;
}

resetButton.addEventListener("click", resetTimer)
shuffleArray(cardValues);
for (const buttonContainer of buttonContainers) {
    createButtons(buttonContainer);
}

startTimer();

function getPlayerName() {
    return localStorage.getItem('userName') ?? 'Mystery player';
}

function saveTime(time) {
    const userName = this.getPlayerName();
    let times = [];
    const timesText = localStorage.getItem('times')
    if (timesText) {
        times = JSON.parse(timesText);
    }
    times = this.updateTimes(userName, time, times);
    localStorage.setItem('times', JSON.stringify(times));
}

const playerName = getPlayerName();
console.log(playerName)

function updateTimes(userName, time, times) {
    const date = new Date().toLocaleDateString();
    const newTime = {name: userName, time: time, date: date};

    let found = false;
    for (const [i, prevScore] of times.entries()) {
        if (score > prevScore.score) {
            times.splice(i, 0, newTime);
            found = true;
            break;
        }
    }

    if (!found) {
        times.push(newTime);
    }

    if (times.length > 10) {
        times.length = 10;
    }

    return times;
}

setInterval(() => {
    const time = Math.floor(Math.random() * 50);
    const chatText = document.querySelector('#player-messages');
    chatText.innerHTML = `<div class="event"><span class="player-event">Robin</span> timed ${time}</div>` + chatText.innerHTML;
}, 5000);