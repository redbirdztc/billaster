import React from "react";
import propTypes from "prop-types";

const Mask = ({ children, zIndex, color, onClick }) => {
    return (
        <div className="fixed inset-0 flex justify-center items-center "
            style={{
                zIndex: zIndex,
                backgroundColor: color + "7f",
            }}
            onClick={onClick}>
            {children}
        </div>
    );
}

Mask.propTypes = {
    children: propTypes.node.isRequired,
    zIndex: propTypes.number.isRequired,
    color: propTypes.string.isRequired,
    onClick: propTypes.func.isRequired
}

export default Mask;