import React from "react";
import ReactDOM from "react-dom";
import "babel-polyfill";

import Provider from "../src/provider";
import {createStore} from "../src/create-store";
import {rootReducer} from "./reducers";
import {initialState} from "./reducers/initial-state";

import RootComponent from "./components/index";

const myStore = createStore(rootReducer, initialState);

const App = () => (
    <div>
        <Provider store={myStore}>
            <RootComponent/>
        </Provider>
    </div>
);

/* global document */
ReactDOM.render(<App/>, document.getElementById("root"));
