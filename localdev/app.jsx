import React from "react";
import ReactDOM from "react-dom";
import "babel-polyfill";


import RootComponent from "./components/index";

const App = () => (
    <div>
        <RootComponent/>
    </div>
);

/* global document */
ReactDOM.render(<App/>, document.getElementById("root"));
