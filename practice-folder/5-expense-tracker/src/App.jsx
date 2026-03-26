import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import transactionContextProvider from "./store/transactionContextProvider";

const App = () => {
  return (
    <>
      <Navbar />
      <transactionContextProvider>
        <Hero />
      </transactionContextProvider>
    </>
  );
};

export default App;
