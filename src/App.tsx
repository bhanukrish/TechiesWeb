import React, { useEffect, useState, useRef } from "react";
import logo from "./logo.svg";
import title from "./Title.png";
import "./App.css";

function App() {
  const [cDate, setCDate] = useState("");
  const intervalRef: { current: NodeJS.Timeout | null } = useRef(null);
  useEffect(() => {
    const countDown = () => {
      // Set the date we're counting down to
      let countDownDate = new Date("Dec 31, 2022 00:00:00").getTime();

      // Update the count down every 1 second
      // Get today's date and time
      let now = new Date().getTime();

      // Find the distance between now and the count down date
      let distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      let display =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

      // If the count down is finished, write some text
      if (distance < 0) {
        display = "EXPIRED";
      }
      setCDate(display);
    };
    const id = setInterval(countDown, 1000);
    intervalRef.current = id;
    return () => {
      clearInterval(intervalRef.current as NodeJS.Timeout);
    };
  }, [intervalRef]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={title} className="App-title" alt="title" />
        <a
          className="App-link"
          href="https://techieshive.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Comming Soon
        </a>
        <p className="App-timer">{cDate}</p>
      </header>
    </div>
  );
}

export default App;
