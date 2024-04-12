import React from 'react';

import { Button } from 'react-bootstrap';
import { PairedUpButton} from './button';
import { delay } from './delay';
import { GameEvent, GameNotifier } from './gameNotifier';
import './pairedupGame.css';

export function PairedUpGame(props) {
    const userName = props.userName;
    const button = new Map
}




    async function saveTime(time) {
        const date = new Date().toLocaleDateString();
        const newTime = { name: userName, time: time, date: date };

        try {
            const response = await fetch('/api/score', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(newTime),
            });

            GameNotifier.broadcastEvent(userName, GameEvent.End, newTime);


            const times = await response.json();
            localStorage.setItem('times', JSON.stringify(times));
        } catch {
            updateTimesLocal(newTime);
        }
    }

    function updateTimesLocal(newTime) {
        let times = [];
        const timesText = localStorage.getItem('times');
        if (timesText) {
            times = JSON.parse(timesText);
        }
        times.forEach((entry, index) => {
            times[index] = {
                name: entry.name,
                times: entry.time,
                date: entry.date
            };
        });
    
        times.push(newTime);
        times.sort((a,b) => Number(a.time) - Number(b.time));
        if (times.length > 10) {
            times = times.slice(0,10);
        }
    
        localStorage.setItem('times', JSON.stringify(times));
    }