import React, {Component} from "react";
import PropTypes from "prop-types";
import ReactLoader from "react-loader";

import TextInput from "./text-input";
import Button from "./button";
import {connect} from "../../src/connect";
import {addFetchCount, minusFetchCount, reverse, reverseThisWord, setServerResponse, setTextInput} from "../actions";

class RootComponent extends Component {
    render() {
        return (
            <div>
                <ReactLoader loaded={!this.props.isFetching} length={20} width={20}>
                    {this.props.textInput}<br/>
                    <TextInput value={this.props.textInput} onChange={e => this.props.setTextInput(e.target.value)}/>
                    <Button _onClick={() => this.props.onButtonClick(this.props.textInput)}/>
                    <br/>
                    {this.props.serverResponse}
                </ReactLoader>
            </div>
        );
    }
}

RootComponent.propTypes = {
    textInput: PropTypes.string,
    setTextInput: PropTypes.func,
    isFetching: PropTypes.bool,
    onButtonClick: PropTypes.func,
    serverResponse: PropTypes.string
};

RootComponent.defaultProps = {
    isFetching: false
};

const mapStateToProps = state => {
    return {
        isFetching: state.fetchCount > 0,
        serverResponse: state.serverResponse,
        textInput: state.textInput
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setTextInput: textInput => dispatch(setTextInput(textInput)),
        onButtonClick: () => dispatch(reverse())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RootComponent);