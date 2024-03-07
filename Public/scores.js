function loadTimes() {
    let times = [];
    const timesText = localStorage.getItem('times');
    if (timesText) {
        times = JSON.parse(timesText);
    }

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
    }   else {
        tableBodyEl.innerHTML = '<tr><td colSpan=4>Be the first to play</td></tr>';
    }
}
loadTimes();
