export class Store {

    constructor(reducers, state) {
        this.reducers = reducers;
        this.state = state;
    }

    fireAction(action) {
        //TODO create an action checker
        console.log(typeof this.reducers);
        if (typeof this.reducers === "function") {
            // just a root function
            this.state = this.reducers(this.state, action);
        } else {

            this.state = Object.keys(this.reducers).reduce((accum, reducerKey) => {
                const reducer = this.reducers[reducerKey];
                return {
                    ...accum,
                    [reducerKey]: reducer(this.state[reducerKey], action)
                };
            }, this.state);
        }
    }

}