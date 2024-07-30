import React from "react";
import propTypes from "prop-types";

const CenterPopper = ({ children }) => {
    return (
        <div className="fixed inset-0 flex justify-center items-center">
            {children}
        </div>
    );
}

CenterPopper.propTypes = {
    children: propTypes.node.isRequired
}

export default CenterPopper;
