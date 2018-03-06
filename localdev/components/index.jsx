import React from "react";
import PropTypes from "prop-types";
import {connect} from "../../src/connect";
import TextInput from "./text-input";

const RootComponent = props => {
    return (
        <div>
            hi
            <TextInput value={props.textValue} onChange={props.hi}/>
        </div>
    );
};

RootComponent.propTypes = {
    textValue: PropTypes.string
};

export default connect(RootComponent);