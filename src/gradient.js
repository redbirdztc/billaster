import React from 'react';
import PropTypes from 'prop-types';

const GradientComponent = (width, height) => {
    const style = {
        width: width,
        height: height,
        background: 'linear-gradient(to top, transparent, gray)'
    };

    return <div style={style}></div>;
};

GradientComponent.propTypes = {
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired
};

export default GradientComponent;