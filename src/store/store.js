import { createStore } from "redux";
// const { default: Counter } = require('../components/Counter')
const countReducer = (state = { Counter: 0 }, action) => {
  if (action.type === "increment") {
    return { Counter: state.Counter + 1 };
  }
  if (action.type === "decrement") {
    return { Counter: state.Counter - 1 };
  }
  return state;
};
const Store = createStore(countReducer);
export default Store;

// const counterSubcription = () => {
//   const getvalue = Store.getListeners();
//   console.log(getvalue);
// };

// Store.subcription(counterSubcription);
// Store.dispatch({ type: "increment" });
// Store.dispatch({ type: "decrement" });
