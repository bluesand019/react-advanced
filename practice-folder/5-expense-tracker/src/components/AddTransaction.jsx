import React from "react";

const AddTransaction = () => {
  return (
    <div className="add-transaction-container">
      <h1>Add Transaction</h1>
      <form className="add-form">
        <label htmlFor="amount" id="amount-label">AMOUNT</label>
        <input type="text" name="amount" id="amount" placeholder="$0.0" />
        <div className="choices">
          <label htmlFor="expense">Expense</label>
          <input type="radio" name="transaction-type" id="expense" />
          <label htmlFor="income">Income</label>
          <input type="radio" name="transaction-type" id="income" />
        </div>
        <button type="submit">Save Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
