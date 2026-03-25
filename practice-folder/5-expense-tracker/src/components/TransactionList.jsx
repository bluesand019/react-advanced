import React from "react";

const TransactionList = () => {
  return (
    <div className="transaction-list-container">
      <h1>All Transactions</h1>
      <div className="transaction-list">
        <ul>
          <li>
            <div className="list">
              <span>dummy 1</span>
              <div className="li-btns">
                <button>Delete</button>
                <button>Edit</button>
              </div>
            </div>
          </li>
          <li>
            <div className="list">
              <span>dummy 2</span>
              <div className="li-btns">
                <button>Delete</button>
                <button>Edit</button>
              </div>
            </div>
          </li>
          <li>
            <div className="list">
              <span>dummy 3</span>
              <div className="li-btns">
                <button>Delete</button>
                <button>Edit</button>
              </div>
            </div>
          </li>
          <li>
            <div className="list">
              <span>dummy 4</span>
              <div className="li-btns">
                <button>Delete</button>
                <button>Edit</button>
              </div>
            </div>
          </li>
          <li>
            <div className="list">
              <span>dummy 5</span>
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
