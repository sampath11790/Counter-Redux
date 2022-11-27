import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterAction } from "../store/Counter";
const Counter = () => {
  const Dispatch = useDispatch();
  const counterval = useSelector((state) => state.counterKey.Counter);
  // console.log(counterval);
  const isCounter = useSelector((state) => state.counterKey.showCounter);
  const toggleCounterHandler = () => {
    // console.log("counterTogle,", counterAction.toggleCounter);
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
      {isCounter && <div className={classes.value}>{counterval}</div>}
      <button onClick={IncrementHandler}>Incrementby </button>
      <button onClick={DecrementHandler}>Decrement by </button>

      <button onClick={incrementAmountHandler}>incrementAmount</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
