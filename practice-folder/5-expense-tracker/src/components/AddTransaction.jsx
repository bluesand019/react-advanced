import React from "react";

const AddTransaction = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const fd = new FormData(event.target);
    const transactionType = fd.get("transaction-type");
    const data = Object.fromEntries(fd.entries());
    data.transactionType = transactionType;

    console.log(data);

    event.target.reset();
  };

  return (
    <div className="add-transaction-container">
      <h1>Add Transaction</h1>
      <form className="add-form" onSubmit={handleSubmit}>
        <label htmlFor="amount" id="amount-label">
          AMOUNT
        </label>
        <input
          type="text"
          name="amount"
          id="amount"
          placeholder="$0.0"
          required
        />
        <div className="choices">
          <label htmlFor="expense">Expense</label>
          <input
            type="radio"
            name="transaction-type"
            id="expense"
            value="expense"
            required
          />
          <label htmlFor="income">Income</label>
          <input
            type="radio"
            name="transaction-type"
            id="income"
            value="income"
          />
        </div>
        <button type="submit">Save Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
