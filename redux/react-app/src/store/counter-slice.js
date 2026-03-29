import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increase(state) {
      //we can mutate states in here because redux toolkit will automatically
      // handle it and change it to immutable code internally
      state.counter++;
    },
    increase_by_amount(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrease(state) {
      state.counter--;
    },
    toggle_counter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer; 