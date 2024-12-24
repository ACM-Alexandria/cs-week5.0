import React, { useState, useEffect } from 'react';
import './Timer.css';

const Timer = () => {
  // Countdown timer logic
  const targetDate = new Date("2025-02-01T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());
  const registrationFormLink = "";

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(targetDate - new Date().getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  // Time formatting function
  const formatTime = (time) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <section className="hackathon-event">
      <div className="container">
        <div className="info">
          <h1>CS-Week v5.0</h1>
          <h2>1 - 4 FEB 2025</h2>
          <p>CODE | CREATE | PLAY</p>
          <a href={registrationFormLink} target="_blank"><button className="button">Register Now!</button></a>
        </div>

        {/* Countdown Timer */}
        <div className="right-part">
        {/* <img src="https://res.cloudinary.com/dcevjlqv4/image/upload/v1706690072/hackathon/o1vyqhxcv6yawv10gapw.png" alt="CS-Week v5.0 Hackathon '24" /> */}
          <img src="assets/logo.png" alt="CS-Week v5.0 Hackathon '24" />
          <div className="countdown">
            <div>
              <span>{days}</span> <p>DAYS</p>
            </div>
            <div>
              <span>{hours}</span> <p>HRS</p>
            </div>
            <div>
              <span>{minutes}</span> <p>MINS</p>
            </div>
            <div>
              <span>{seconds}</span> <p>SECS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timer;
