import React from "react";
import "../App.css";
import BalanceSummary from "./BalanceSummary";
import TransactionList from "./TransactionList";
import AddTransaction from "./AddTransaction";

const Hero = () => {
  return (
    <div className="hero">
      <BalanceSummary />
      <section className="transaction-section">
        <TransactionList />
        <AddTransaction />
      </section>
    </div>
  );
};

export default Hero;
