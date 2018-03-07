import {createStore} from "../src/create-store";

const rootReducer = (state, action) => {
    if (action.type === "SET") {
        return {
            ...state,
            input: action.input
        };
    }

    return state;
};

const store = createStore(rootReducer);

console.log(store.getState().input);
store.dispatch({type: "SET", input: "hello"});
console.log(store.getState().input);

store.dispatch({type: "SET", input: "hello world"});
console.log(store.getState().input);
