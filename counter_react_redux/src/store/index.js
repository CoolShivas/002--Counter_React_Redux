import { createStore } from "redux";
import Privacy from "../components/PrivacyMsg";

const INITIAL_VALUE = {
  counter: 0,
  privacy: false,
};

const counterReducer = (store = INITIAL_VALUE, action) => {
  //console.log("Action Received", action);
  // // Now, if you click on +1 we will get the output as Action Received {type: 'INCREMENT'};
  // // Now, if you click on -1 we will get the output as Action Received {type: 'DECREMENT'};
  if (action.type === "INCREMENT") {
    return {
      counter: store.counter + 1,
      privacy: store.privacy,
    };
  } else if (action.type === "DECREMENT") {
    return {
      counter: store.counter - 1,
      privacy: store.privacy,
    };
  } else if (action.type === "ADDITION") {
    return {
      counter: store.counter + action.payload.num,
      privacy: store.privacy,
    };
  } else if (action.type === "SUBTRACTION") {
    return {
      counter: store.counter - action.payload.num,
      privacy: store.privacy,
    };
  } else if (action.type === "PRIVACY_TOGGLE") {
    return {
      counter: store.counter, // And Counter value is remain same here as it is;
      privacy: !store.privacy, // Now privacy is true ;
    };
  } else {
    return store;
  }
};

const counterStore = createStore(counterReducer);

export default counterStore;
