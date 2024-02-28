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

let clickedButtons = [];

function handleButtonClick(event) {
    const button = event.target;
    button.classList.toggle("clicked")
    clickedButtons.push(button.textContent);
    if (clickedButtons.length === 2) {
        if (clickedButtons[0] === clickedButtons[1]) {
            alert("Match found!");
        } else {
            setTimeout(() => {
                for (const clickedButton of document.querySelectorAll(".clicked")) {
                    clickedButton.classList.remove("clicked");
                }
            }, 1000);
        }

        clickedButtons = [];
    }
}


for (const buttonContainer of buttonContainers) {
    for (let i = 0; i < cardValues.length; i ++) {
        const button = document.createElement("button");
        button.textContent = cardValues[i];
        buttonContainer.appendChild(button);
        button.addEventListener("click", handleButtonClick)
    }
        
}