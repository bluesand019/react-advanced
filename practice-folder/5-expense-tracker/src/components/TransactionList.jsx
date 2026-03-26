import React from "react";
import { useContext } from "react";
import { transactionContext } from "../store/transactionContextProvider";

const TransactionList = ({ setEditMode, setEditingTx }) => {
  const { transactions, deleteTransaction } = useContext(transactionContext);

  return (
    <div className="transaction-list-container">
      <h1>All Transactions</h1>
      <div className="transaction-list">
        {transactions.length > 0 ? (
          <ul>
            {transactions.map((element) => {
              return (
                <li key={element.id}>
                  <div className="list">
                    <span>
                      {element.title}:
                      <span className={element.isExpense ? "red" : "green"}>
                        <b>
                          {element.isExpense ? "-" : "+"}${element.amount}
                        </b>
                      </span>
                    </span>
                    <div className="li-btns">
                      <button onClick={() => deleteTransaction(element.id)}>
                        Delete
                      </button>
                      <button
                        onClick={() => {
                          setEditMode(true);
                          setEditingTx(element);
                        }}
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="no-transactions">No transactions to show!</p>
        )}
      </div>
    </div>
  );
};

export default TransactionList;
