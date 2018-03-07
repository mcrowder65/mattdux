import React from "react";
import {mount} from "enzyme";
import {createStore} from "../src/create-store";
import {rootReducer} from "../localdev/reducers";
import {initialState} from "../localdev/reducers/initial-state";
import Provider from "../src/provider";

import RootComponent from "../localdev/components/index";

const pause = async time => {
    return new Promise(resolve => {
        //eslint-disable-next-line
        setTimeout(() => {
            resolve();
        }, time);
    });
};
describe("test/integration.spec.jsx", () => {
    test("When clicking that button, the reverse of textinput should be returned!", async () => {
        const store = createStore(rootReducer, initialState);
        const comp = mount(
            <Provider store={store}>
                <RootComponent/>
            </Provider>
        );
        comp.find("#textfield").simulate("change", {target: {value: "hello"}});
        comp.find("#button").simulate("click");
        const aDecentAmountOfSeconds = 4000;
        await pause(aDecentAmountOfSeconds);
        expect(store.getState().serverResponse).toEqual("olleh");
    });
    test("when not provided an initialState, it should default to empty object", () => {
        const store = createStore(rootReducer);
        expect(store.getState()).toEqual({});

    });
});