import React from "react";
import PropTypes from "prop-types";

class Provider extends React.Component {
    constructor(props) {
        super(props);
    }

    getChildContext() {
        return {
            dispatch: this.props.store.dispatch,
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
        getState: PropTypes.func
    })
};
Provider.childContextTypes = {
    dispatch: PropTypes.func,
    getState: PropTypes.func
};
export default Provider;