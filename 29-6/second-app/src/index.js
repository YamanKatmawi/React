import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./scss/main.scss";
import App from "./App";
import "./components/icons/lib";
import "fontawesome";
import "react-bootstrap";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
