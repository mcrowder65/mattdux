import React from "react";
import PropTypes from "prop-types";

const TextInput = props => {
    return (
        <input id={props._id} type="text" value={props.value} onChange={props.onChange}/>
    );
};

TextInput.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    _id: PropTypes.string
};
export default TextInput;