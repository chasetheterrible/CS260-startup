import React, { useEffect } from "react";

import "./pairedupGame.css";

export function PairedUpGame(props) {
  const userName = props.userName;
  const button = new Map();

  const [cardValues, setCardValues] = React.useState(shuffleArray());
  useEffect(() => {
    createButtons();
  }, []);

  function shuffleArray() {
    const array = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  function createButtons() {
    const buttonContainer = document.getElementById("button-container");
    buttonContainer.innerHTML = "";

    for (let i = 0; i < cardValues.length; i++) {
      const button = document.createElement("button");
      button.textContent = cardValues[i];
      button.dataset.matched = "false";
      buttonContainer.appendChild(button);
      button.addEventListener("click", handleButtonClick);
    }
  }
  let clickedButton = null;
  let timerInterval;
  let elapsedTime = 0;
  function handleButtonClick(event) {
    const button = event.target;
    button.style.backgroundColor = "aquamarine";
    button.style.color = "coral";
    if (clickedButton) {
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
          //   saveTime(elapsedTime);
        }
      } else {
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

  return (
    <main className="bg-secondary">
      <div className="players">
        Player:
        <span className="player-name"></span>
        <div id="player-messages">
          <div className="event">
            <span className="player-event">Alex</span>
            <span className="player-data"> started a new game</span>
          </div>
          <div className="event">
            <span className="player-event">John</span>
            <span className="player-data">
              {" "}
              got all the pairs in 38 seconds
            </span>
          </div>
        </div>
      </div>

      <div className="game-timer">
        <label for="count">Time</label>
        <input type="text" id="count" readOnly />
        <button className="reset-time">Reset</button>
      </div>

      <div className="game">
        <div id="button-container"></div>
      </div>
    </main>
  );
}
