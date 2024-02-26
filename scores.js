function loadScores() {
    let times = [];
    const timesText = localStorage.getItem('times');
    if (timesText) {
        times = JSON.parse(scoresText);
    }

    const tableBodyEl = document.querySelector('#times')

    if (times.length) {
        for (const [i, time] of times.entries()) {
            const positionTdEl= document.createElement('td');
            const nameTdEl = document.createElement('td');
            const timeTdEl= document.createElement('td');
            const dateTdEl = document.createElement('td');
        } 
    }


}