export const createStore = function (reducers, state) {
    let myState = state;
    const myReducers = reducers;
    const fireAction = function (action) {
        if (typeof myReducers === "function") {
            // just a root function
            myState = myReducers(myState, action);
        } else {
            myState = Object.keys(myReducers).reduce((accum, reducerKey) => {
                const reducer = myReducers[reducerKey];
                return {
                    ...accum,
                    [reducerKey]: reducer(myState[reducerKey], action)
                };
            }, myState);
        }
    };

    return {
        fireAction
    };

};