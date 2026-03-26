import { createContext, useReducer, useState } from "react";

export const transactionContext = createContext({
  transactions: [],
  addTransaction: () => {},
  deleteTransaction: () => {},
  updateTransaction: () => {},
});

function transactionReducer(state, action) {
  switch (action.type) {
    case "ADD_TRANSACTION":
      const newTransaction = {
        id: Date.now() + "",
        title: action.payload.title,
        amount: action.payload.amount,
        isExpense: action.payload.isExpense,
      };
      return {
        ...state,
        transactions: [newTransaction, ...state.transactions],
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter((item) => {
          return item.id !== action.payload.id;
        }),
      };
    case "UPDATE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.map((element) => {
          if (element.id === action.payload.id) {
            return { ...element, ...action.payload.updatedData };
          }
          return element;
        }),
      };
    default:
      return state;
  }
}

export default function TransactionContextProvider({ children }) {
  // states and methods
  const [transactionState, transactionDispatch] = useReducer(
    transactionReducer,
    {
      transactions: [],
    },
  );
  function handleAddTransaction(title, amount, isExpense) {
    transactionDispatch({
      type: "ADD_TRANSACTION",
      payload: { title, amount: amount, isExpense },
    });
  }
  function handleDeleteTransaction(id) {
    transactionDispatch({
      type: "DELETE_TRANSACTION",
      payload: {
        id,
      },
    });
  }
  function handleUpdateTransaction(id, title, amount, isExpense) {
    transactionDispatch({
      type: "UPDATE_TRANSACTION",
      payload: {
        id: id,
        updatedData: {
          title,
          amount,
          isExpense,
        },
      },
    });
  }
  const ctxValue = {
    transactions: transactionState.transactions,
    addTransaction: handleAddTransaction,
    deleteTransaction: handleDeleteTransaction,
    updateTransaction: handleUpdateTransaction,
  };
  return (
    <transactionContext.Provider value={ctxValue}>
      {children}
    </transactionContext.Provider>
  );
}
