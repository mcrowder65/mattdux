import React, {Component} from "react";
import PropTypes from "prop-types";


export const connect = (mapStateToProps, mapDispatchToProps) => {
    return ComponentToConnect => {


        class Connect extends Component {

            mapState() {
                return mapStateToProps(this.context.getState());
            }

            mapDispatch() {
                return mapDispatchToProps(this.context.dispatch, this.context.getState);
            }

            componentDidMount() {
                this.context.subscribe(this.forceUpdate.bind(this));
            }

            render() {
                return <ComponentToConnect {...this.mapState()} {...this.mapDispatch()}/>;
            }
        }

        Connect.contextTypes = {
            dispatch: PropTypes.func,
            subscribe: PropTypes.func,
            getState: PropTypes.func
        };

        return Connect;
    };
};