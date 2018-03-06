import React from "react";
import PropTypes from "prop-types";

class Provider extends React.Component {
    constructor(props) {
        super(props);
    }

    getChildContext() {
        return {
            store: this.props.store
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
    store: PropTypes.any
};
Provider.childContextTypes = {
    store: PropTypes.any
};
export default Provider;