export const createStore = function (reducers, initialState = {}) {
    let state = initialState;
    const myReducers = reducers;
    const subscriptions = [];

    function getState() {
        return state;
    }

    function dispatch(action) {
        if (typeof action === "function") {
            return action(dispatch, getState);
        } else if (typeof myReducers === "function") {
            // just a root function
            state = myReducers(state, action);
        }
        subscriptions.forEach(f => f());
        return action;
    }

    function subscribe(f) {
        subscriptions.push(f);
    }

    return {
        dispatch,
        getState,
        state,
        subscribe
    };

};