import React, { useState, useEffect, useRef } from "react";
import "./pairedupGame.css";

let timerInterval;

export function PairedUpGame(props) {
  // State variables
  const userName = props.userName;
  const [cardValues, setCardValues] = useState(shuffleArray());
  const [elapsedTime, setElapsedTime] = useState(0);
  const [countValue, setCountValue] = useState(0);
  const elapsedTimeRef = useRef(0); // useRef for accessing latest value of elapsedTime
  const [clickedButton, setClickedButton] = useState(null);

  // useEffect to create buttons and start timer when component mounts
  useEffect(() => {
    createButtons();
    startTimer();
    return () => clearInterval(timerInterval);
  }, []);

  useEffect(() => {
    setCountValue(formatTime(elapsedTime));
  }, [elapsedTime]);

  // Function to shuffle the card values
  function shuffleArray() {
    const array = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Function to create buttons
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
    return cardValues.map((value, index) => (
      <button ke={index} onClick={() => handleButtonClick(value)}>
        {value}
      </button>
    ));
  }

  // Function to handle button click
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
        setClickedButton(null);

        if (allButtonsMatched()) {
          clearInterval(timerInterval);
          alert("Congratulations! You matched all the numbers");
          saveTime(elapsedTime);
        }
      } else {
        setTimeout(() => {
          clickedButton.style.backgroundColor = "black";
          clickedButton.style.color = "black";
          button.style.backgroundColor = "black";
          button.style.color = "black";
          setClickedButton(null);
        }, 1000);
      }
    } else {
      setClickedButton(button);
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
      elapsedTimeRef.current = elapsedTimeRef.current + 1;
      setElapsedTime((prevElapsedTime) => prevElapsedTime + 1); // Update state
      setCountValue(formatTime(elapsedTimeRef.current));
    }, 1000);
  }

  function resetTimer() {
    clearInterval(timerInterval);
    setElapsedTime(0);
    const newCardValues = shuffleArray();
    setCardValues(newCardValues);
    createButtons();
    startTimer();
    // GameNotifier.broadcastEvent(userName, GameEvent.Start, {});
  }

  // Function to format time
  function formatTime(seconds) {
    const remainingSeconds = seconds % 60;
    return `${remainingSeconds}`;
  }

  async function saveTime(time) {
    const date = new Date().toLocaleDateString();
    const newTime = { name: userName, time: time, date: date };

    try {
      const response = await fetch("/api/time", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newTime),
      });

      GameNotifier.broadcastEvent(userName, GameEvent.End, newTime);
      const times = await response.json();
      localStorage.setItem("times", JSON.stringify(times));
    } catch {
      updateTimesLocal(newTime);
    }
  }

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

  return (
    <main className="bg-secondary">
      <div className="game-timer">
        <label htmlFor="count">Time</label>
        <input type="text" id="count" value={countValue} readOnly />
        <button className="reset-time" onClick={resetTimer}>
          Reset
        </button>
      </div>

      <div className="game">
        <div id="button-container"></div>
      </div>
    </main>
  );
}
