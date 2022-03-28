import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { Provider } from "react-redux"; //we import provider from the redux-react and  wrap the higest order comoponent which is App the parent component
import store from "./store/indexStore"; //we also import store  and we have to setup the store prop and assign a value  store   store={store}
//now the setup Provider with store prop and with its value  and wraping the   app component ,so all the  components in react can now acces the store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
