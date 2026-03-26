import React from "react";
import "../App.css";
import BalanceSummary from "./BalanceSummary";
import TransactionList from "./TransactionList";
import AddTransaction from "./AddTransaction";
import { useState } from "react";

const Hero = () => {
  const [editMode, setEditMode] = useState(false);
  const [editingTx, setEditingTx] = useState(null);
  return (
    <div className="hero">
      <BalanceSummary />
      <section className="transaction-section">
        <TransactionList
          setEditMode={setEditMode}
          setEditingTx={setEditingTx}
        />
        <AddTransaction
          editMode={editMode}
          setEditMode={setEditMode}
          editingTx={editingTx}
          setEditingTx={setEditingTx}
        />
      </section>
    </div>
  );
};

export default Hero;
