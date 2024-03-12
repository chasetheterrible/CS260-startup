function displayQuote(data) {
    fetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((response) => response.json())
    .then((data) => {
        const containerEl = document.querySelector('#joke');

        const jokeEl = document.createElement('p');
        jokeEl.classList.add('joke');
        const authorEl = document.createElement('p');
        authorEl.classList.add('author');

        jokeEl.textContent = data.value;

        containerEl.appendChild(jokeEl)
        containerEl.appendChild(authorEl);

        console.log(data.value)
        console.log(data)
    });
}


displayQuote();