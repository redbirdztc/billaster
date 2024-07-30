
import React from 'react';
import PropTypes from 'prop-types';


const SquareButton = ({ icon, onClick }) => {
    return (
        <img src={icon} alt="logo" className='w-full h-full' onClick={onClick}></img>
    );
}

SquareButton.propTypes = {
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default SquareButton;