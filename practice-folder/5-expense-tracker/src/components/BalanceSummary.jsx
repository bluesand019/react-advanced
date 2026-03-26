import React from "react";
import { useContext } from "react";
import { transactionContext } from "../store/transactionContextProvider";

const BalanceSummary = () => {
  const { transactions } = useContext(transactionContext);
  let totalIncome = 0;
  let totalExpense = 0;
  let totalBalance = 0;
  transactions.forEach(element => {
    if(!element.isExpense) {
      totalIncome+=element.amount;
    }
  })
  transactions.forEach(element => {
    if(element.isExpense) {
      totalExpense+=element.amount;
    }
  })
  totalBalance = totalIncome - totalExpense;
  return (
    <div className="balance-summary">
      <div className="balance border">
        <p>Total Balance</p>
        <p>{totalBalance}</p>
      </div>
      <div className="income border">
        <p>Total Income</p>
        <p>{totalIncome}</p>
      </div>
      <div className="expense border">
        <p>Total Expense</p>
        <p>{totalExpense}</p>
      </div>
    </div>
  );
};

export default BalanceSummary;
