import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { Counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.Counter++;
    },
    decrement(state) {
      state.Counter--;
    },
    increaseAmount(state, action) {
      state.Counter = state.Counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterAction = counterSlice.actions;
export default counterSlice;
