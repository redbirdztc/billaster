import React from 'react';
import PropTypes from 'prop-types';

const StatisticItem = ({ name, unit, amount }) => {
    // 按照金额加逗号分隔
    const amountString = amount.toLocaleString()
    return (
        <div className='flex flex-col justify-center'>
            <div className="w-full flex justify-center text-sm" >
                {name}
            </div>
            <div className='flex content-center justify-center w-full text-sm'>
                {unit} {amountString}
            </div>
        </div>
    )
}

const StatisticBar = ({ expense, income }) => {
    return (
        <div className='flex w-full justify-center h-12'>
            <div className='w-1/3'>
                <StatisticItem name="EXPENSE" unit="Yuan" amount={expense} />
            </div>
            <div className='w-1/3'>
                <StatisticItem name="INCOME" unit="Yuan" amount={income} />
            </div>
            <div className='w-1/3'>
                <StatisticItem name="TOTAL" unit="Yuan" amount={income - expense} />
            </div>

        </div >
    );
}

// validate props
StatisticItem.propTypes = {
    name: PropTypes.string.isRequired,
    unit: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
}

StatisticBar.propTypes = {
    expense: PropTypes.number.isRequired,
    income: PropTypes.number.isRequired,
}



export default StatisticBar;