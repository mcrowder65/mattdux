import React from "react";
import PropTypes from "prop-types";


const Button = props => {
    return (
        <div>
            <button id={props._id} onClick={props._onClick}>Submit to server</button>
        </div>
    );
};

Button.propTypes = {
    _onClick: PropTypes.func,
    _id: PropTypes.any
};

export default Button;