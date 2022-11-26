import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterAction } from "../store/store";
const Counter = () => {
  const Dispatch = useDispatch();
  const counter = useSelector((state) => state.Counter);
  const showCounter = useSelector((state) => state.showCounter);
  const toggleCounterHandler = () => {
    Dispatch(counterAction.toggleCounter());
  };
  const IncrementHandler = () => {
    Dispatch(counterAction.increment());
  };
  const DecrementHandler = () => {
    Dispatch(counterAction.decrement());
  };
  const incrementAmountHandler = () => {
    Dispatch(counterAction.increaseAmount(5));
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {!showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={IncrementHandler}>Incrementby </button>
      <button onClick={DecrementHandler}>Decrement by </button>

      <button onClick={incrementAmountHandler}>incrementAmount</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
