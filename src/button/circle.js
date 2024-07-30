
import React from 'react';
import PropTypes from 'prop-types';

const CircleButton = ({ icon, onClick }) => {
    return (
        <img src={icon} alt="logo" className={`w-full h-full rounded-full`} onClick={onClick} ></img>
    );
}

CircleButton.propTypes = {
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default CircleButton;