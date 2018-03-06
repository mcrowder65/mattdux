import React from "react";
import {mount} from "enzyme";
import Comp from "../src/comp";
import {connect} from "../src/connect";
import Provider from "../src/provider";
import {createStore} from "../src/create-store";

describe("test/connect.spec.jsx", () => {
    test("standard connect should make hi() return hi", () => {
        const comp = mount(connect(Comp));
        expect(comp.props().hi()).toEqual("hi");
    });
    test("connect a provider should give a store", () => {
        const myReducers = {
            messages: (state, action) => {
                if (action.type === "REMOVE_MESSAGE") {
                    return state.filter(m => action.messageId !== m.messageId);
                }
                return state;
            }
        };
        const initialState = {
            messages: [{
                messageId: "messageOne",
                message: "hello world"
            }, {
                messageId: "messageTwo",
                message: "this is the second message"
            }, {
                messageId: "messageThree",
                message: "this, three it is"
            }]
        };
        const store = new createStore(myReducers, initialState);
        const provided = mount(
            <Provider store={store}>
                <Comp/>
            </Provider>
        );
        console.log(provided);
    });
});