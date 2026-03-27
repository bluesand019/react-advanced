import React from "react";
import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
});

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
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
        updatedItems.push({ ...action.item, quantity: 1 });
      }
      return { ...state, items: updatedItems };
    }
    case "REMOVE_ITEM": {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.id,
      );
      const existingItem = state.items[existingItemIndex];
      const updatedItems = [...state.items];
      if (existingItem.quantity === 1) {
        updatedItems.splice(existingItemIndex, 1); //removes the item at this idx
      } else {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity - 1,
        };
        updatedItems[existingItemIndex] = updatedItem;
      }
      return { ...state, items: updatedItems };
    }
    default:
      return state;
  }
}

export function CartContextProvider({ children }) {
  const [cartStates, dispatchCartAction] = useReducer(cartReducer, {
    items: [],
  });

  function addItem(item) {
    dispatchCartAction({
      type: "ADD_ITEM",
      item,
    });
  }

  function removeItem(id) {
    dispatchCartAction({
      type: "REMOVE_ITEM",
      id,
    });
  }

  const ctxValues = {
    items: cartStates.items,
    addItem,
    removeItem,
  };
  console.log(ctxValues);
  return (
    <CartContext.Provider value={ctxValues}>{children}</CartContext.Provider>
  );
}

export default CartContext;