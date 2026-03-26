import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TransactionContextProvider from "./store/transactionContextProvider";

const App = () => {
  return (
    <>
      <Navbar />
      <TransactionContextProvider>
        <Hero />
      </TransactionContextProvider>
    </>
  );
};

export default App;
