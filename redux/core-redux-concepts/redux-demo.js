const redux = require("redux");

//should be a pure function
const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "increment":
      return {
        counter: state.counter + 1,
      };
    case "decrement":
      return {
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

const store = redux.createStore(counterReducer); //initialized store, when initializing the reducer gets called once by the default value

console.log(store.getState()); //print the initial default state value

const counterSubscriber = () => {
  const latestState = store.getState(); //get the latest state and store it in latestState
  console.log(latestState); //print the latest state
};

store.subscribe(counterSubscriber); // run counterSubscriber only when any state changes

store.dispatch({ type: "increment" }); // redux updates state when dispatching an action, then it calls subscriber
store.dispatch({ type: "decrement" });
