import React, { useEffect, useState } from "react";
import "./Home.css";
import "aviner\Avenir-Phoenix\src\App.css";
import Clock from "../../components/Clock";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("May 4,2023 ").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // Stop Timer

        clearInterval(interval.current);
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  }, []);

  return (
    // <div className="d-flex" style={{ height: "100vh", backgroundColor: "black",width:"" }}>
      <div
        className="d-flex flex-column justify-content-center align-items-lg-start align-items-center p-5 " 
        style={{ height: "100vh", backgroundColor: "black",width:"" }} 
      >
        <div>
          <p className="fs-1">AVENIR</p>
        </div>
        <div>
          <p className="fs-2">Tag Line</p>
        </div>
        <Clock
          timerDays={timerDays}
          timerHours={timerHours}
          timerMinutes={timerMinutes}
          timerSeconds={timerSeconds}
        />
      </div>
      
    // </div>
  );
}

export default Home;
