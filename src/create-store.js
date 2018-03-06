export const createStore = function (reducers, initialState = {}) {
    let state = initialState;
    const myReducers = reducers;
    const subscriptions = [];

    function getState() {
        return state;
    }

    function dispatch(action) {
        if (typeof myReducers === "function") {
            // just a root function
            state = myReducers(state, action);
        } else {
            state = Object.keys(myReducers).reduce((accum, reducerKey) => {
                const reducer = myReducers[reducerKey];
                return {
                    ...accum,
                    [reducerKey]: reducer(state[reducerKey], action)
                };
            }, state);
        }
        subscriptions.forEach(f => {
            f();
        });
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