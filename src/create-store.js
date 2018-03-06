export const createStore = function (reducers, initialState = {}) {
    let state = initialState;
    const myReducers = reducers;

    function getState() {
        return state;
    }

    function dispatch(action) {
        console.log(action);
        console.log("stateBefore ", state);
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
        console.log(state);
        return action;
    }


    return {
        dispatch,
        getState
    };

};