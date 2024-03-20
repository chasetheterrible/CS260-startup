function displayJoke(data) {
    const containerEl = document.querySelector('#joke');

    const jokeEl = document.createElement("p");
    jokeEl.classList.add("joke");
    
    jokeEl.textContent = data.content;

    containerEl.appendChile(jokeEl);
}

function callService(url, displayCallback) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            displayCallback(data);
        });
}

const random = Math.floor(math.random() * 1000);
callService('https://api.chucknorris.io/jokes/random?category=dev', displayJoke);