import React, {Component} from "react";
import PropTypes from "prop-types";

class Provider extends Component {
    getChildContext() {
        return {
            dispatch: this.props.store.dispatch,
            subscribe: this.props.store.subscribe,
            getState: this.props.store.getState
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
        subscribe: PropTypes.func,
        getState: PropTypes.func
    })
};

Provider.childContextTypes = {
    dispatch: PropTypes.func,
    subscribe: PropTypes.func,
    getState: PropTypes.func
};
export default Provider;