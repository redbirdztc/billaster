import React from "react";
import propTypes from "prop-types";

const HorizontalSeperator = ({ height ,margin,color }) => {
    return (
        <div style={{width:"100%",height:height, marginTop:margin,marginBottom:margin,backgroundColor:color?color:"gray"}}></div>
    )
}

HorizontalSeperator.propTypes = {
    height: propTypes.string.isRequired,
    margin: propTypes.string.isRequired,
    color: propTypes.string,
};

export default HorizontalSeperator;