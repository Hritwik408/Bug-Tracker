import React from "react";
import ReactDOM from "react-dom";
//import './index.css';
import App from "./App";
import { Provider } from "react-redux";
import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
//import reportWebVitals from './reportWebVitals';
//redux configure

import authReducer from "./Controllers/Redux/authslice";
import bugReducer from "./Controllers/Redux/bugslice";
import useReducer from "./Controllers/Redux/userslice";

const reducer = combineReducers({
  auth: authReducer,
  bug: bugReducer,
  user: useReducer
});

const store = configureStore({
  reducer
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
