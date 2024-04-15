const GameEndEvent = "gameEnd";
const GameStartEvent = "gameStart";

const cardValues = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

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

const buttonContainers = document.getElementsByClassName("button-container");
const countInput = document.getElementById("count");
const resetButton = document.querySelector(".reset-time");
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
const playerNameEl = document.querySelector(".player-name");
playerNameEl.textContent = this.getPlayerName();

startTimer();

function handleButtonClick(event) {
  const button = event.target;
  // turns card over no matter what
  button.style.backgroundColor = "aquamarine";
  button.style.color = "coral";
  // if previously clicked on
  if (clickedButton) {
    // if current clicked = previous clicked
    if (
      clickedButton !== button &&
      clickedButton.textContent === button.textContent
    ) {
      button.style.backgroundColor = "aquamarine";
      button.style.color = "coral";
      button.dataset.matched = "true";
      button.dataset.matched = "true";
      clickedButton.dataset.matched = "true";
      clickedButton = null;

      if (allButtonsMatched()) {
        clearInterval(timerInterval);
        alert("Congratulations! You matched all the numbers");
        saveTime(elapsedTime);
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
  const buttons = document.querySelectorAll("#button-container button");
  for (const button of buttons) {
    if (button.dataset.matched !== "true") {
      return false;
    }
  }
  return true;
}

resetButton.addEventListener("click", resetTimer);
shuffleArray(cardValues);
for (const buttonContainer of buttonContainers) {
  createButtons(buttonContainer);
}

startTimer();

function getPlayerName() {
  return localStorage.getItem("userName") ?? "Mystery player";
}

async function saveTime(time) {
  const userName = getPlayerName();
  const date = new Date().toLocaleDateString();
  const newTime = { name: userName, time: time, date: date };

  try {
    const response = await fetch("/api/time", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newTime),
    });

    this.broadcastEvent(userName, GameEndEvent, newTime);
    const times = await response.json();
    localStorage.setItem("times", JSON.stringify(times));
    updateTimesLocal(newTime);
  } catch {
    this.updateTimesLocal(newTime);
  }
}

const playerName = getPlayerName();
console.log(playerName);

function updateTimesLocal(newTime) {
  let times = [];
  const timesText = localStorage.getItem("times");
  if (timesText) {
    times = JSON.parse(timesText);
  }
  times.forEach((entry, index) => {
    times[index] = {
      name: entry.name,
      times: entry.time,
      date: entry.date,
    };
  });

  times.push(newTime);
  times.sort((a, b) => Number(a.time) - Number(b.time));
  if (times.length > 10) {
    times = times.slice(0, 10);
  }

  localStorage.setItem("times", JSON.stringify(times));
}

// setInterval(() => {
//     const time = Math.floor(Math.random() * 10);
//     const chatText = document.querySelector('#player-messages');
//     chatText.innerHTML = `<div class="event"><span class="player-event">Robin</span> <span class="timed" style="color: white;">timed with ${time} seconds</span></div>` + chatText.innerHTML;
// }, 5000);

async function configureWebSocket() {
  const protocol = window.location.protocol === "http:" ? "ws" : "wss";
  this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
  this.socket.onopen = (event) => {
    this.displayMsg("system", "game", "connected");
  };
  this.socket.onclose = (event) => {
    this.displayMsg("system", "game", "disconnected");
  };
  this.socket.onmessage = async (event) => {
    const msg = JSON.parse(await event.data.text());
    if (msg.type === GameEndEvent) {
      this.displayMsg("player", msg.from, `scored ${msg.value.time}`);
    } else if (msg.type === GameStartEvent) {
      this.displayMsg("player", msg.from, `started a new game`);
    }
  };
}

function displayMsg(cls, from, msg) {
  const chatText = document.querySelector("#player-messages");
  chatText.innerHTML =
    `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` +
    chatText.innerHTML;
}

function broadcastEvent(from, type, value) {
  const event = {
    from: from,
    type: type,
    value: value,
  };
  this.socket.send(JSON.stringify(event));
}
configureWebSocket();
