import React from "react";
import "../App.css";
import BalanceSummary from "./BalanceSummary";
import TransactionList from "./TransactionList";

const Hero = () => {
  return (
    <div className="hero">
      <BalanceSummary />
      <TransactionList />
    </div>
  );
};

export default Hero;
