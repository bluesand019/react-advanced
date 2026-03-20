import React, { useState, useRef, useEffect } from "react";
import QUESTIONS from "../Questions";

const Quiz = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const isQuizRunning = questionIndex < QUESTIONS.length;
  const [countDown, setCountdown] = useState(5000);

  useEffect(() => {
    if (!isQuizRunning) {
        setCountdown(0);
        return;
    }
    setCountdown(5000);
    const interval = setInterval(() => {
      setCountdown(prevCountDown => {
        if(prevCountDown <= 0) return 0;
        return prevCountDown - 1000;
    });
    }, 1000);
    return () => {
        clearInterval(interval);
    };
  }, [questionIndex, isQuizRunning]);

  useEffect(() => {
    if (!isQuizRunning) return;

    const timer = setTimeout(() => {
      setQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [isQuizRunning, questionIndex]);

  const handleQuestionChange = () => {
    setQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1);
  };

  return (
    <div className="quiz-container">
      <p>time: {countDown/1000} </p>
      <h1>
        {isQuizRunning ? QUESTIONS[questionIndex] : "Quiz is over!"}
      </h1>
      <br />
      {isQuizRunning && (
        <button onClick={handleQuestionChange}>Next</button>
      )}
    </div>
  );
};

export default Quiz;
