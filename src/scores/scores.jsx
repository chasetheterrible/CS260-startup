import React from 'react';

import './scores.css';

export function Times() {
    const [times, setTimes] = React.useState([]);

React.useEffect(() => {
    fetch('/api/times')
        .then((response) => response.json())
        .then((times) => {
            setTimes(times);
            localStorage.setItem('times', JSON.stringify(times));
        })
        .catch(() => {
            const timesText = localStorage.getItem('times');
            if (timesText) {
                setTimes(JSON.parse(timesText));
            }
        });
}, []);

}