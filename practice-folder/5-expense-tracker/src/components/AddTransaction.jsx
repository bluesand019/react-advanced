import React, { useState } from "react";
import { useContext } from "react";
import { transactionContext } from "../store/transactionContextProvider";

const AddTransaction = ({ editMode, setEditMode, editingTx, setEditingTx }) => {
  // const [editMode, setEditMode] = useState(false);
  // const [editingTx, setEditingTx] = useState(null);
  const { addTransaction, updateTransaction } = useContext(transactionContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const fd = new FormData(event.target);
    const transactionType = fd.get("transaction-type");
    const data = Object.fromEntries(fd.entries());
    data.transactionType = transactionType;

    // console.log(data);
    const title = data.title;
    const amount = +data.amount;
    const isExpense = data["transaction-type"] === "expense";

    if (editMode && editingTx) {
      updateTransaction(
        editingTx.id,
        title,
        amount,
        isExpense,
      );
      setEditMode(false);
      setEditingTx(null);
    } else {
      addTransaction(title, amount, isExpense);
    }

    event.target.reset();
  };

  return (
    <div className="add-transaction-container">
      <h1>Add Transaction</h1>
      <form className="add-form" onSubmit={handleSubmit}>
        <label htmlFor="title" id="title-label">
          TITLE
        </label>
        <input
          type="text"
          name="title"
          defaultValue={editMode ? editingTx.title : ""}
          id="title"
          placeholder="Enter transaction title..."
          required
        />
        <label htmlFor="amount" id="amount-label">
          AMOUNT
        </label>
        <input
          type="text"
          name="amount"
          defaultValue={editMode ? editingTx.amount : ""}
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
        <button type="submit">{!editMode? "Save Transaction" : "Update Transaction"}</button>
      </form>
    </div>
  );
};

export default AddTransaction;
