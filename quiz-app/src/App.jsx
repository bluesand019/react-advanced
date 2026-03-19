import React from "react";
import Header from "./components/Header.jsx";
import Quiz from "./components/Quiz.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Quiz />
      </main>
    </div>
  );
};

export default App;
