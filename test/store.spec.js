import {Store} from "../src/store";

const two = 2;

describe("test/store.spec.js", () => {
    describe("constructor", () => {
        test("initialize reducers", () => {
            const myReducers = {
                hello: state => {
                    return state;
                }
            };

            const myStore = new Store(myReducers);
            expect(myStore.reducers).toEqual(myReducers);
        });
    });
    describe("fireAction", () => {
        test("fire valid action should mutate state", () => {
            const myReducers = {
                message: (state, action) => {
                    if (action.type === "SET_MESSAGE") {
                        return action.message;
                    }
                    return state;
                }
            };
            const initialState = {
                message: "hello world"
            };
            const store = new Store(myReducers, initialState);
            expect(store.state).toEqual(initialState);
            const message = "a new message";
            const action = {
                type: "SET_MESSAGE",
                message
            };
            store.fireAction(action);
            expect(store.state.message).toEqual(action.message);
        });
        test("a filter", () => {
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
            const store = new Store(myReducers, initialState);
            expect(store.state).toEqual(initialState);
            const action = {
                type: "REMOVE_MESSAGE",
                messageId: "messageTwo"
            };
            store.fireAction(action);
            expect(store.state.messages).toEqual([initialState.messages[0], initialState.messages[two]]);
        });
        test("just a function", () => {
            const rootReducer = (state, action) => {
                if (action.type === "REMOVE_MESSAGE") {
                    return {
                        ...state,
                        messages: state.messages.filter(m => action.messageId !== m.messageId)
                    };
                }
                return state;
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
            const store = new Store(rootReducer, initialState);
            expect(store.state).toEqual(initialState);
            const action = {
                type: "REMOVE_MESSAGE",
                messageId: "messageTwo"
            };
            store.fireAction(action);
            expect(store.state.messages).toEqual([initialState.messages[0], initialState.messages[two]]);
        });
    });
});
