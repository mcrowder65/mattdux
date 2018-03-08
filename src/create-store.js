export function createStore(rootReducer, initialState) {
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
            action(dispatch, getState);
        } else {
            state = reducers(state, action);
            subscribers.forEach(f => f());
        }
    }

    return {
        getState,
        dispatch,
        subscribe
    };
}