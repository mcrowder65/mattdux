import React, {Component} from "react";
import PropTypes from "prop-types";

class Provider extends Component {
    constructor(p, c) {
        super(p, c);
    }

    getChildContext() {
        return {
            dispatch: this.props.store.dispatch,
            getState: this.props.store.getState,
            subscribe: this.props.store.subscribe
        };
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

Provider.propTypes = {
    store: PropTypes.shape({
        dispatch: PropTypes.func,
        getState: PropTypes.func,
        subscribe: PropTypes.func
    }),
    children: PropTypes.any
};

Provider.childContextTypes = {
    dispatch: PropTypes.func,
    getState: PropTypes.func,
    subscribe: PropTypes.func
};

export default Provider;