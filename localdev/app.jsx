import React from "react";
import ReactDOM from "react-dom";
import "babel-polyfill";

import Provider from "../src/Provider";

import RootComponent from "./components/index";
import {createStore} from "../src/create-store";
import {initialState} from "./reducers/initial-state";
import {rootReducer} from "./reducers";

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
