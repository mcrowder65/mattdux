import React from "react";
import PropTypes from "prop-types";

const Comp = (props, context) => {
    console.log(context);
    return (
        <div>
            {context.message}
        </div>
    );
};

Comp.contextTypes = {
    store: PropTypes.any
};
export default Comp;