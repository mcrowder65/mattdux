import React from "react";
import PropTypes from "prop-types";


const Button = props => {
    return (
        <div>
            <button onClick={props._onClick}>Submit to server</button>
        </div>
    );
};

Button.propTypes = {
    _onClick: PropTypes.func
};

export default Button;