import React from "react";
import PropTypes from "prop-types";

class Provider extends React.Component {
    constructor() {
        super();
    }

    getChildContext() {
        return {
            store: this.props.store
        };
    }

    render() {
        return this.props.children;
    }
}

Provider.propTypes = {
    children: PropTypes.any,
    store: PropTypes.any
};
Provider.childContextTypes = {
    store: PropTypes.any
};
export default Provider;