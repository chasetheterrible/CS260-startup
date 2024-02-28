const cardValues= [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]

function shuffleArray(array) {
    for (let i = arra.length - 1; i > 0; i -- ) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


shuffleArray(cardValues);

const buttonContainer = document.getElementsByClassName("button-container")

for (let i = 0; i < cardValues.length; i ++) {
    const button = document.createElement("button");
    button.textContent = cardValues[i];
    buttonContainer.appendChild(button);
}