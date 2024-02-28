const cardValues= [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i -- ) {
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



for (const buttonContainer of buttonContainers) {
    for (let i = 0; i < cardValues.length; i ++) {
        const button = document.createElement("button");
        button.textContent = cardValues[i];
        buttonContainer.appendChild(button);
        button.addEventListener("click", handleButtonClick)
    }
        
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

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}


    startTimer();