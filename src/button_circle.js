
import React from 'react';
import PropTypes from 'prop-types';
const CircleButton = ({ icon, onClick, size }) => {
    return (
        <img src={icon} alt="logo" style={{ width: size, height: size, borderRadius: size }} onClick={onClick} ></img>
    );
}

CircleButton.propTypes = {
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    size: PropTypes.string.isRequired
};

export default CircleButton;