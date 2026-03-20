import React, { useState, useRef } from "react";
import QUESTIONS from "../Questions";

const Quiz = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const isQuizRunning = useRef(true);

  if (questionIndex > QUESTIONS.length-1) {
    isQuizRunning.current = false; // ✅ assign value directly
  }

  const handleQuestionChange = () => {
    setQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1);
  };

  return (
    <div className="quiz-container">
      <h1>
        {isQuizRunning.current ? QUESTIONS[questionIndex] : "Quiz is over!"}
      </h1>
      <br />
      { isQuizRunning.current && <button onClick={handleQuestionChange}>Next</button>
      }
    </div>
  );
};

export default Quiz;