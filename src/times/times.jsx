import React from "react";

import "./times.css";

export function Times() {
  const [times, setTimes] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/times")
      .then((response) => response.json())
      .then((times) => {
        setTimes(times);
        localStorage.setItem("times", JSON.stringify(times));
      })
      .catch(() => {
        const timesText = localStorage.getItem("times");
        if (timesText) {
          setTimes(JSON.parse(timesText));
        }
      });
  }, []);

  const timeRows = [];
  if (times.length) {
    for (const [i, time] of times.entries()) {
      timeRows.push(
        <tr key={i}>
          <td>{i}</td>
          <td>{time.name.split("@")[0]}</td>
          <td>{time.time}</td>
          <td>{time.date}</td>
        </tr>
      );
    }
  } else {
    timeRows.push(
      <tr key="0">
        <td colSpan="4">Be the first to Play</td>
      </tr>
    );
  }

  return (
    <main className="container-fluid bg-secondary text-center">
      <table className="table table-striped table">
        <thead className="table table-secondary">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Time(sec)</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody id="times">{timeRows}</tbody>
      </table>
    </main>
  );
}
