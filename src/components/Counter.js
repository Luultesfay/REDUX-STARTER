import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux"; //useSelector is a custom hook made by the React Redux team. that helps as to select part of the state from the store

const Counter = () => {
  //we pass a function to the useSelector Hook  and that function executed by react-redux
  const counter = useSelector((state) => state.counter); // function which then basically determines which piece of data we wanna extract from our store.
  const Show = useSelector((state) => state.ShowCounter);
  const dispatch = useDispatch(); // useDispatch hook is povided by react-redux  and that hook  give as a 'dispatch function'  to despatch actions to the reducer function ,
  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };
  const IncrementHandler = () => {
    dispatch({ type: "increment" }); //we despatch actions to reducerFn in the store
  };
  const decrementHandler = () => {
    dispatch({ type: "decerement" });
  };
  const increaseHandler = () => {
    dispatch({ type: "increase", amount: 10 }); //we can also add another payload  called amount   this amount should be the same amount with the action.amount in the reducer function
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {/* <div className={classes.value}>-- COUNTER VALUE --</div> */}
      {Show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={IncrementHandler}>increment</button>
        <button onClick={increaseHandler}>increase</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
/*
///NOTE:Now the great thing is that when you use 'useSelector',React Redux will automatically set up a subscription

to the Redux store for this component.So your component will be updated and will receive the latest counter automatically  and If you ever would unmount this component

if it would be removed from the DOM for whatever reason,React Redux would also automatically clear the subscription for you.

So it manages that subscription for you behind the scenes.*/
