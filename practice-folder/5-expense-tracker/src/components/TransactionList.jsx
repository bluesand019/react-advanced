import React from "react";
import { useContext } from "react";
import { transactionContext } from "../store/transactionContextProvider";

const TransactionList = () => {
  const { transactions, deleteTransaction } = useContext(transactionContext);

  return (
    <div className="transaction-list-container">
      <h1>All Transactions</h1>
      <div className="transaction-list">
        <ul>
          {transactions.map((element) => {
            return (
              <li>
                <div className="list">
                  <span>
                    {element.title}:{element.isExpense? "-" : "+"}${element.amount}
                  </span>
                  <div className="li-btns">
                    <button onClick={()=>deleteTransaction(element.id)}>Delete</button>
                    <button>Edit</button>
                  </div>
                </div>
              </li>
            );
          })}
          <li>
            <div className="list">
              <span>dummy 1:-$100</span>
              <div className="li-btns">
                <button>Delete</button>
                <button>Edit</button>
              </div>
            </div>
          </li>
          <li>
            <div className="list">
              <span>dummy 2:-$60</span>
              <div className="li-btns">
                <button>Delete</button>
                <button>Edit</button>
              </div>
            </div>
          </li>
          <li>
            <div className="list">
              <span>dummy 3:+$28</span>
              <div className="li-btns">
                <button>Delete</button>
                <button>Edit</button>
              </div>
            </div>
          </li>
          <li>
            <div className="list">
              <span>dummy 4:+$59</span>
              <div className="li-btns">
                <button>Delete</button>
                <button>Edit</button>
              </div>
            </div>
          </li>
          <li>
            <div className="list">
              <span>dummy 5:-$12</span>
              <div className="li-btns">
                <button>Delete</button>
                <button>Edit</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TransactionList;
