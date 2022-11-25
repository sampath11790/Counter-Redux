import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
const Counter = () => {
  const Dispatch = useDispatch();
  const counter = useSelector((state) => state.Counter);
  const toggleCounterHandler = () => {};
  const IncrementHandler = () => {
    Dispatch({ type: "increment" });
  };
  const DecrementHandler = () => {
    Dispatch({ type: "decrement" });
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={IncrementHandler}>Incrementby 5</button>
      <button onClick={DecrementHandler}>Decrement by 5</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
