import { createStore } from "redux";

const INITIAL_VALUE = {
  counter: 0,
};

const counterReducer = (store = INITIAL_VALUE, action) => {
  //console.log("Action Received", action);
  // // Now, if you click on +1 we will get the output as Action Received {type: 'INCREMENT'};
  // // Now, if you click on -1 we will get the output as Action Received {type: 'DECREMENT'};
  if (action.type === "INCREMENT") {
    return { counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    return { counter: store.counter - 1 };
  } else {
    return store;
  }
};

const counterStore = createStore(counterReducer);

export default counterStore;
