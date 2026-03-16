import React, { useState, useRef } from "react";
import ResultModal from "./ResultModal";

// let timer; -> this is a single instance that is shared among all the component instances

const TimerChallenge = ({ title, targetTime }) => {
  const timer = useRef();
  const dialog = useRef();
  //unlike variables this doesnt reset the value of timer or reinitialize upon
  //each rendering, it stores the previous timer value. And also it is a
  //different instance in differenct component instances.
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  const handleStart = () => {
    setTimerStarted(true);
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.open();
    }, targetTime * 1000);
  };

  const handleStop = () => {
    clearTimeout(timer.current);
  };

  return (
    <>
    {<ResultModal ref={dialog} result="Lost" targetTime={targetTime} />}
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerStarted ? handleStop : handleStart}>
          {timerStarted ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className="">{timerStarted ? "Time is running" : "Timer inactive"}</p>
    </section>
    </>
    
  );
};

export default TimerChallenge;
