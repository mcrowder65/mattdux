import React from "react";
import PropTypes from "prop-types";

const TextInput = props => {
    return (
        <input type="text" value={props.value} onChange={props.onChange}/>
    );
};

TextInput.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
};
export default TextInput;