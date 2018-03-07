import React from "react";
import ReactDOM from "react-dom";
import "babel-polyfill";


import RootComponent from "./components/index";
import Provider from "../src/provider";
import {createStore} from "../src/create-store";
import {rootReducer} from "./reducers";
import {initialState} from "./reducers/initial-state";

const store = createStore(rootReducer, initialState);
const App = () => (
    <div>
        <Provider store={store}>
            <RootComponent/>

        </Provider>
    </div>
);

/* global document */
ReactDOM.render(<App/>, document.getElementById("root"));
