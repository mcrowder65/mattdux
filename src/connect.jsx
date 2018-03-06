import React, {Component} from "react";


export const connect = ComponentToConnect => {
    class Connect extends Component {
        render() {
            return (
                <ComponentToConnect hi={() => console.log("hi")}/>
            );
        }
    }

    return Connect;
};


