import React, {Component} from "react";
import PropTypes from "prop-types";

export const connect = (mapStateToProps, mapDispatchToProps) => ComponentToConnect => {
    class Connect extends Component {

        mapState() {
            return mapStateToProps(this.context.getState());
        }

        mapDispatch() {
            return mapDispatchToProps(this.context.dispatch);
        }

        componentDidMount() {
            this.context.subscribe(() => this.forceUpdate());
        }

        render() {
            return (
                <ComponentToConnect {...this.mapState()} {...this.mapDispatch()}/>
            );
        }
    }

    Connect.contextTypes = {
        dispatch: PropTypes.func,
        getState: PropTypes.func,
        subscribe: PropTypes.func
    };
    return Connect;
};

