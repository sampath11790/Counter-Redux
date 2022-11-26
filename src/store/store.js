// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { Counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.Counter++;
    },
    decrement: (state) => {
      state.Counter++;
    },
    increaseAmount: (state, action) => {
      state.Counter = state.Counter + action.payload;
    },
    toggleCounter: (state) => {
      state.showCounter = !state.showCounter;
    },
  },
});
// const { default: Counter } = require('../components/Counter')
// const countReducer = (state = { Counter: 0 }, action) => {
//   if (action.type === "increment") {
//     return { Counter: state.Counter + 5 };
//   }
//   if (action.type === "decrement") {
//     return { Counter: state.Counter - 5 };
//   }
//   return state;
// };
const Store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterAction = counterSlice.actions;
export default Store;

// const counterSubcription = () => {
//   const getvalue = Store.getListeners();
//   console.log(getvalue);
// };

// Store.subcription(counterSubcription);
// Store.dispatch({ type: "increment" });
// Store.dispatch({ type: "decrement" });
