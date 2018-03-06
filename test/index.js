const {createStore} = require("../src/create-store");

const rootReducer = (state, action) => {
    if (action.type === "SET") {
        return {
            ...state,
            input: action.input
        };
    }
    return state;
};
const store = createStore(rootReducer, {input: ""});
console.log(store.getState());

store.dispatch({type: "SET", input: "hello"});
console.log(store.getState());
