async function loadTimes() {
    let times = [];
    try {
        const response = await fetch('/api/times');
        times = await response.json();
        localStorage.setItem('times', JSON.stringify(times));
    } catch {
        const timesText = localStorage.getItem('times');
        if (timesText) {
            times = JSON.parse(timesText);
        }
    }

        displayTimes(times);
    }

function displayTimes(times) {
    const tableBodyEl = document.querySelector('#times')

    if (times.length) {
        for (const [i, time] of times.entries()) {
            const nameTdEl = document.createElement('td');
            const timeTdEl= document.createElement('td');
            const dateTdEl = document.createElement('td');

            nameTdEl.textContent = time.name;
            timeTdEl.textContent = time.time;
            dateTdEl.textContent = time.date;

            const rowEl = document.createElement('tr');
            rowEl.appendChild(nameTdEl);
            rowEl.appendChild(timeTdEl);
            rowEl.appendChild(dateTdEl);

            tableBodyEl.appendChild(rowEl);
        }
    } else {
        tableBodyEl.innerHTML = '<tr><td colSpan=3>Be the first to play</td></tr>';
    }
}

loadTimes();