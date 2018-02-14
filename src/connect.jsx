import React from "react";


export const connect = Component => {
    return <Component hi={() => "hi"}/>;
};