/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import "./Timer.css"; // Import the CSS file

const Timer = () => {
  const [time, setTime] = useState(0); // Time in milliseconds
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      setIsPaused(false);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10); // Increment every 10 ms
      }, 10);
    } else if (isPaused) {
      setIsPaused(false);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
  };

  const pauseTimer = () => {
    if (isRunning) {
      setIsPaused(true);
      clearInterval(intervalRef.current);
    }
  };

  const resetTimer = () => {
    setIsRunning(false);
    setIsPaused(false);
    clearInterval(intervalRef.current);
    setTime(0);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const formatTime = () => {
    const hours = String(Math.floor(time / 3600000)).padStart(2, "0");
    const minutes = String(Math.floor((time % 3600000) / 60000)).padStart(
      2,
      "0"
    );
    const seconds = String(Math.floor((time % 60000) / 1000)).padStart(2, "0");
    const milliseconds = String(time % 1000)
      .padStart(3, "0")
      .slice(0, 2); // Show only two digits
    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <div className="timer-container">
      <h1 className="timer-text">Timer: {formatTime()}</h1>
      <div className="button-container">
        <button
          className="button start-button"
          onClick={startTimer}
          disabled={isRunning && !isPaused}
        >
          {isRunning && isPaused ? "Resume" : "Start"}
        </button>
        <button
          className="button pause-button"
          onClick={pauseTimer}
          disabled={!isRunning || isPaused}
        >
          Pause
        </button>
        <button className="button reset-button" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
