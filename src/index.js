import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import state from "./redux/state";
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App state={state} />
  </BrowserRouter>,
  document.getElementById("root")
);
