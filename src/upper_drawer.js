import React from "react";
import PropTypes from "prop-types";

import "./App.css"

const UpperDrawer = ({ movement, children, height, boxShadow }) => {
    const style = {
        transform: `translateY(calc(${-movement}px)) `,
        height: height,
        transformOrigin: "top",
        transition: "transform 0.1s",
        boxShadow: boxShadow
    }

    console.log(movement)
    return (
        <div style={style} className="
            w-full
            top-0
            left-0
            overflow-hidden
            fixed
            z-10">
            {children}
        </div>
    )
}

UpperDrawer.propTypes = {
    movement: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired,
    height: PropTypes.string,
    boxShadow: PropTypes.string,
    zIndex: PropTypes.number
}

export default UpperDrawer;