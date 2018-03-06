import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "../../src/connect";
import TextInput from "./text-input";
import {setTextInput} from "../actions";

class RootComponent extends Component {
    render() {
        return (
            <div>
                {this.props.textInput}<br/>
                <TextInput value={this.props.textInput} onChange={this.props.setTextInput}/>
            </div>
        );
    }
}

RootComponent.propTypes = {
    textInput: PropTypes.string,
    setTextInput: PropTypes.func
};

const mapStateToProps = state => {
    return {
        textInput: state.textInput
    };
};
const mapDispatchToProps = dispatch => {
    return {
        setTextInput: e => {
            dispatch(setTextInput(e.target.value));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(RootComponent);