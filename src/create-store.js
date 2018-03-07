export function createStore(rootReducer, initialState = {}) {
    let state = initialState;
    const reducers = rootReducer;
    const subscribers = [];

    function subscribe(f) {
        subscribers.push(f);
    }

    function getState() {
        return state;
    }

    function dispatch(action) {
        if (typeof action === "function") {
            return action(dispatch, getState);
        } else if (typeof reducers === "function") {
            state = reducers(state, action);
            subscribers.forEach(f => f());
        }
        return action;
    }

    return {
        getState,
        dispatch,
        subscribe
    };
}

