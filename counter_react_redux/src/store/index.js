import {createStore} from "redux";


const INITIAL_VALUE = {
    counter : 5
};   


const counterReducer = (store = INITIAL_VALUE, action) => {
    console.log("Action Received", action);
    // // Now, if you click on +1 we will get the output as Action Received {type: 'INCREMENT'};
    // // Now, if you click on -1 we will get the output as Action Received {type: 'DECREMENT'};
    return store;
};


const counterStore = createStore(counterReducer);


export default counterStore;