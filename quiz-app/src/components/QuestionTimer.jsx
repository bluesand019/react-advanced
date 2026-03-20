import React, { useState } from "react";
import { useEffect } from "react";

const QuestionTimer = ({ timeout, onTimeout }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("Setting timeout");
    const timer = setTimeout(onTimeout, timeout);
    return () => {
        clearTimeout(timer);
    }
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log("Setting interval");
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <progress id="question-time" max={timeout} value={remainingTime} />;
};

export default QuestionTimer;
