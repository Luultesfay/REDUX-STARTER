///reduxtoolkit advantages
/*-don't have to worry about creating action objects on our own
and about coming up with unique identifiers
and about avoiding typos*/
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload; //payload is afield name That Redux Toolkit give us by default its not up to us to call it payload
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

//adding the second slice that manage the authentication
const intialAuthState = {
  isAuthenticated: false,
};
const authSlice = createSlice({
  name: "Authentication",
  initialState: intialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }, //when we work with multiple Createslice() we shouldand must only have one store
});

export const counterActions = counterSlice.actions; //counterSlice.actions.toggleCounter or increment or decrement  when this methods calls they produce action of objects with type property
export const authActions = authSlice.actions;
export default store;

/*Note
Redux Toolkit has a configureStore() method that simplifies the store setup process. 
configureStore() wraps around the Redux library's createStore() method and the combineReducers() method, 
and handles most of the store setup for us automatically.
*/

/////////////////////////////////////////////////////////////////////////////////
// import { createSlice, configureStore } from "@reduxjs/toolkit";
// const initalState = { counter: 0, ShowCounter: true };
// /*
//createSlice
// A function that accepts an initial state, an object of reducer functions,
// and a "slice name", and automatically generates action creators and action
// types that correspond to the reducers and state.
// */
// const counterSlice = createSlice({
//   name: "counter",
//   initalState,
//   reducers: {
//     increment(state) {
//       //here we passes the existing state  and then mutate the state , note: we  mutate the state wihch is wrong but redux toolkit fixes tis behind the scine using  'immer library'
//       state.counter++; // we can mutate state since this is fixed by immer internally
//     },

//     decrement(state) {
//       state.counter--;
//     },
//     increase(state, action) {
//       state.counter = state.counter + action.payload; //amount changes with payload
//     },
//     toggleCounter(state) {
//       state.ShowCounter = !state.ShowCounter;
//     },
//   },
// });

// /*configureStore(): wraps createStore to provide simplified configuration options and good defaults.
//  It can automatically combine your slice reducers, adds whatever Redux middleware you supply,
//  includes redux-thunk by default, and enables use of the Redux DevTools Extension.*/

// ///ConfigureStore like createStore creates a store but it makes merging multiple reducers into one reducer

// const store = configureStore({ reducer: counterSlice.reducer }); //we create store and passed the reducer function and now we r can access to reducer
// export const counterActions = counterSlice.actions;
// export default store; // export the store and provide to the components

//////the below code replaced by the above code which is the same but shorter and managable
//import { createStore } from "redux";//  we can  delete this one since we have this redux includede in @reduxjs/toolkit
// const counterReducer = (state = initalState, action) => {
//   if (action.type === "increment") {
//     //NOTE:when working with Redux.You should never change the existing state.Instead, always override it by returning a brand new state object.
//     /*
//     //this is wrong   dont mutate existing state like this instead override it by returning it

//     state ++
//     return state

//     ///or
//     state ++
//     return{
//       counter:state.counter
//       ShowCounter: state.ShowCounter,
//     } */
//     //correct way of overriding the existing state  by returning new brand object
//     //note when ever we return we should return exsting state with the modified one   for example here we added in all show counter
//     return {
//       counter: state.counter + 1,
//       ShowCounter: state.ShowCounter,
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       ShowCounter: state.ShowCounter,
//     };
//   }
//   if (action.type === "decerement") {
//     return {
//       counter: state.counter - 1,
//       ShowCounter: state.ShowCounter,
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       counter: state.counter,
//       ShowCounter: !state.ShowCounter,
//     };
//   }
//   return state;
// };
// const store = createStore(counterReducer); //we create store and passed the reducer function on it

// export default store; // export the store and provide to the components
