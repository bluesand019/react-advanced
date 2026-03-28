import { createStore } from 'redux'

const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "increase":
      return {
        counter: state.counter + 1,
      };
    case "increase_by_amount":
      return {
        counter: state.counter + action.amount,
      };
    case "decrease":
      return {
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;