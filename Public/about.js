function displayPicture() {
    const random = Math.floor(Math.random() * 1000);
    fetch(`https://picsum.photos/v2/list?page=${random}&limit=1`)
        .then((response) => response.json())
        .then((data) => {
            const containerEl = document.querySelector('#picture');

            const width = container.offsetWidth;
            const height = contianerEl.offsetHeight;

            const imgUrl = `https://picsum.photos/id/${data[0].id}/${width}/${height}?grayscale`;
            const imgEl = document.createElement('img');
            imgEl.setAttribute('src', imgUrl);
            containerEl.appendChild(imgEl);
        });
} 
function displayQuote(data) {
    fetch('https://dad-jokes.p.rapidapi.com/random/joke')
    .then((response) => response.json)
    .then((data) => {
        const containerEl = documment.querySelector('#joke');

        const jokeEl = document.createElement('p');
        jokeEl.classList.add('joke');
        const authorEl = document.createElement('p');
        authorEl.classList.add('author');

        jokeEl.textContent = data.content;
        authorEl.textContent = data.author;

        containerEl.appendChild(jokeEl)
        containerEl.appendChild(authorEl);
    })
}