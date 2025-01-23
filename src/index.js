import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store"; // Ensure this path is correct.
import App from "../src/App";
import "./styles/globals.css"; // Ensure the `App` component exists.

ReactDOM.render( <
    Provider store = { store } >
    <
    App / >
    <
    /Provider>,
    document.getElementById("root")
);