import React, { useEffect, useRef, useState } from "react";
import "../App.css";

const Stopwatch = () => {
  const [timer, setTimer] = useState(0);

  const totalSeconds = Math.floor(timer/1000);

  const seconds = totalSeconds % 60;
  const minutes = Math.floor(totalSeconds/60) % 60;
  const hours = Math.floor(totalSeconds/3600) % 60;

  const [isRunning, setIsRunning] = useState(false);

  const handleStartTimer = () => {
    setIsRunning(true);
  };
  const handleStopTimer = () => {
    setIsRunning(false);
  };
  const handleResetTimer = () => {
    setIsRunning(false);
    setTimer(0);
  };

  const formatTime = (time) => {
    if(time < 10) {
       return "0"+time;
    }
    return time;
  }

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1000);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  return (
    <div className="container">
      <h1>{formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}</h1>
      <div className="buttons">
        <button onClick={handleStartTimer}>Start</button>
        <button onClick={handleStopTimer}>Stop</button>
        <button onClick={handleResetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
