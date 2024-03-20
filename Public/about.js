function displayJoke(data) {
    const containerEl = document.querySelector('#joke');

    const jokeEl = document.createElement("p");
    jokeEl.classList.add("joke");
    
    jokeEl.textContent = data.content;

    containerEl.appendChile(jokeEl);
}
displayJoke();