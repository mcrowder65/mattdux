import React from "react";
import PropTypes from "prop-types";

class Provider extends React.Component {
    constructor(props, c) {
        super(props, c);
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
    children: PropTypes.any,
    store: PropTypes.shape({
        dispatch: PropTypes.func,
        getState: PropTypes.func,
        subscribe: PropTypes.func
    })
};
Provider.childContextTypes = {
    dispatch: PropTypes.func,
    getState: PropTypes.func,
    subscribe: PropTypes.func
};
export default Provider;