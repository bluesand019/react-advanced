import React from "react";
import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
});

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id,
      );
      const updatedItems = [...state.items];
      if (existingItemIndex > -1) {
        const updatedItem = {
          ...state.items[existingItemIndex],
          quantity: state.items[existingItemIndex].quantity + 1,
        };
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems.push({ ...action.time, quantity: 1 });
      }
      return { ...state, items: updatedItems };

    case "REMOVE_ITEM":
    default:
      return state;
  }
}

export function CartContextProvider({ children }) {
  useReducer(cartReducer, { items: [] });
  return <CartContext.Provider>{children}</CartContext.Provider>;
}

export default CartContext;
