import { createStore } from "redux";
const initalState = { counter: 0, ShowCounter: true };
const counterReducer = (state = initalState, action) => {
  if (action.type === "increment") {
    //NOTE:when working with Redux.You should never change the existing state.Instead, always override it by returning a brand new state object.
    /*
    //this is wrong   dont mutate existing state like this instead override it by returning it
    
    state ++
    return state 
    
    ///or
    state ++
    return{
      counter:state.counter
      ShowCounter: state.ShowCounter,
    } */
    //correct way of overriding the existing state  by returning new brand object
    //note when ever we return we should return exsting state with the modified one   for example here we added in all show counter
    return {
      counter: state.counter + 1,
      ShowCounter: state.ShowCounter,
    };
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      ShowCounter: state.ShowCounter,
    };
  }
  if (action.type === "decerement") {
    return {
      counter: state.counter - 1,
      ShowCounter: state.ShowCounter,
    };
  }
  if (action.type === "toggle") {
    return {
      counter: state.counter,
      ShowCounter: !state.ShowCounter,
    };
  }
  return state;
};
const store = createStore(counterReducer); //we create store and passed the reducer function on it

export default store; // export the store and provide to the components
