import React from "react";
import PropTypes from "prop-types";

const Provider = props => {
    return (
        <div>
            {props.children}
        </div>
    );
};

Provider.propTypes = {
    children: PropTypes.any
};
export default Provider;