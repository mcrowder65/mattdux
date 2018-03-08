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

const initialState = {
    input: "hello"
};
const store = createStore(rootReducer, initialState);

console.log(store.getState());

store.dispatch({type: "SET", input: "hello world"});
console.log(store.getState());

