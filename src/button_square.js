
import React from 'react';
import PropTypes from 'prop-types';
const SquareButton = ({ icon, onClick, size }) => {
    return (
        <img src={icon} alt="logo" style={{ width: size, height: size }} onClick={onClick}></img>
    );
}

SquareButton.propTypes = {
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    size: PropTypes.string.isRequired
};

export default SquareButton;