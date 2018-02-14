import React from "react";
import PropTypes from "prop-types";

class Provider extends React.Component {
    constructor() {
        super();
    }

    getChildContext() {
        return {
            message: "hello world!"
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
    message: PropTypes.string
};
export default Provider;