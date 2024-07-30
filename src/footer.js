import React from 'react';
import SquareButton from './button/square';
import PropTypes from 'prop-types';

const Footer = ({ btns }) => {
    return (
        <div className='flex flex-row justify-center flex-grow content-between h-full w-full'>
            {btns.map((btn, index) => {
                return (
                    <div key={index} className='h-full w-full flex flex-col items-center'>
                        <div className='h-3/5 w-fit mt-1'>
                            <SquareButton key={index} icon={btn.icon} onClick={btn.onClick} />
                        </div>
                        <div className='text-center text-xs w-fit'>{btn.name}</div>
                    </div>
                )
            })}
        </div>
    )
}

Footer.propTypes = {
    btns: PropTypes.arrayOf(PropTypes.shape(
        {
            name: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired,
            onClick: PropTypes.func.isRequired
        }
    )).isRequired
}

export default Footer;