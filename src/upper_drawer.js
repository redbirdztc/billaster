import React from "react";
import PropTypes from "prop-types";

import "./App.css"

const UpperDrawer = ({ height, movement, maxMovement, subElements }) => {
    if (movement > 0) {
        movement = 0
    }

    if (movement < -maxMovement) {
        movement = -maxMovement
    }
    console.log(movement)
    const style = {
        height: height,
        width: "100%",
        position: "absolute",
        top: "0px",
        left: "0px",
        zIndex: "1",
        transform: `translateY(${movement}px) `,
        transformOrigin: "top",
        transition: "transform 0.5s",
        overflow: "hidden",
    }

    return (
        <div style={style} className="App-background ">
            {subElements}
        </div>
    )
}

UpperDrawer.propTypes = {
    height: PropTypes.string.isRequired,
    movement: PropTypes.number.isRequired,
    maxMovement: PropTypes.number.isRequired,
    subElements: PropTypes.arrayOf(PropTypes.element).isRequired,
}

export default UpperDrawer;