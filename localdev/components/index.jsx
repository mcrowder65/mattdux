import React from "react";
import PropTypes from "prop-types";
import {connect} from "../../src/connect";
import TextInput from "./text-input";
import {setTextInput} from "../actions";

const RootComponent = props => {
    return (
        <div>
            <TextInput value={props.textInput} onChange={props.setTextInput}/>
        </div>
    );
};

RootComponent.propTypes = {
    textInput: PropTypes.string,
    setTextInput: PropTypes.func
};

const mapStateToProps = state => {
    console.log(state);
    return {
        textInput: state.textInput
    };
};
const mapDispatchToProps = dispatch => {
    console.log("mapDispatchToProps");
    return {
        setTextInput: e => {
            dispatch(setTextInput(e.target.value));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(RootComponent);