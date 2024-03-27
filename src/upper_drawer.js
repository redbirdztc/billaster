import React from "react";
import PropTypes from "prop-types";

import "./App.css"

const UpperDrawer = ({ movement, maxMovement, children, zIndex, height }) => {
    if (movement > 0) {
        movement = 0
    }

    if (movement < -maxMovement) {
        movement = -maxMovement
    }

    console.log(movement)

    const style = {
        zIndex: zIndex,
        transform: `translateY(calc(${movement}px)) `,
        height: height,
        transformOrigin: "top",
        transition: "transform 0.5s",
    }

    return (
        <div style={style} className="
            w-full
            top-0
            left-0
            absolute
            overflow-hidden">
            {children}
        </div>
    )
}

UpperDrawer.propTypes = {
    movement: PropTypes.number.isRequired,
    maxMovement: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired,
    zIndex: PropTypes.number.isRequired,
    height: PropTypes.string,
}

export default UpperDrawer;