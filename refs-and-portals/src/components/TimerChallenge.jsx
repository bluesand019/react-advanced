import React, { useState, useRef } from "react";
import ResultModal from "./ResultModal";

// let timer; -> this is a single instance that is shared among all the component instances

const TimerChallenge = ({ title, targetTime }) => {
  const timer = useRef();
  //unlike variables this doesnt reset the value of timer or reinitialize upon
  //each rendering, it stores the previous timer value. And also it is a
  //different instance in differenct component instances.
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  const handleReset = () => {
    setTimeRemaining(targetTime * 1000);
  };

  const handleStart = () => {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  };

  const handleStop = () => {
    clearInterval(timer.current);
    dialog.current.open();
  };

  return (
    <>
      {
        <ResultModal
          ref={dialog}
          targetTime={targetTime}
          remainingTime={timeRemaining}
          onReset={handleReset}
        />
      }
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className="">
          {timerIsActive ? "Time is running" : "Timer inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
