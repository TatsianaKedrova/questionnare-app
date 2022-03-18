import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { CssBaseline } from "@mui/material";
import AppContextWrapper from "./AppContextWrapper";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <CssBaseline />
        <AppContextWrapper />
      </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
