import React from 'react';
import PropTypes from 'prop-types';

const StatisticItem = ({ name, amount }) => {
    return (
        <div className='flex flex-col justify-center'>
            <div className="w-full flex justify-center text-sm" >
                {name}
            </div>
            <div className='flex content-center justify-center w-full text-sm'>
                {amount}
            </div>
        </div>
    )
}

const StatisticBar = ({ content }) => {
    const count = content.length;
    return (
        < div className='flex w-full justify-evenly h-12' >
            {content.map((item, index) => {
                return (
                    <div key={index} className={'w-1/' + count}>
                        <StatisticItem name={item[0]} amount={item[1]} />
                    </div>
                )
            })}
        </div >
    )

}



// validate props
StatisticItem.propTypes = {
    name: PropTypes.string.isRequired,

    amount: PropTypes.string.isRequired
}

StatisticBar.propTypes = {
    content: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired
}



export default StatisticBar;