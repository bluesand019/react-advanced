import React, { useState, useRef, useEffect } from "react";
import QUESTIONS from "../Questions";

const Quiz = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const isQuizRunning = useRef(true);

  if (questionIndex > QUESTIONS.length - 1) {
    isQuizRunning.current = false;
  }

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
        <p>time</p>
      <h1>
        {isQuizRunning.current ? QUESTIONS[questionIndex] : "Quiz is over!"}
      </h1>
      <br />
      {isQuizRunning.current && (
        <button onClick={handleQuestionChange}>Next</button>
      )}
    </div>
  );
};

export default Quiz;
