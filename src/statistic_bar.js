import React from 'react';
import PropTypes from 'prop-types';

const StatisticItem = ({ name, unit, amount }) => {
    // 按照金额加逗号分隔
    const amountString = amount.toLocaleString()
    return (
        <div style={{ display: "flex" }}>
            <div style={{ flexDirection: "column" }}>
                <div style={{ display: "flex", justifyContent: 'center', width: "100%", fontSize: "80%" }}>
                    {name}
                </div>
                <div style={{ height: "5px" }}></div>
                <div style={{ display: "flex", justifyContent: 'center', width: "100%", fontSize: "80%" }}>
                    {unit} {amountString}
                </div>
            </div>
        </div>
    )
}

const StatisticBar = ({ expense, income }) => {
    return (
        <div style={{ display: "flex", justifyContent: 'space-between', alignItems: 'center', width: '100vw', height: '8vh' }}>
            <div></div>
            <StatisticItem name="EXPENSE" unit="Yuan" amount={expense} />
            <StatisticItem name="INCOME" unit="Yuan" amount={income} />
            <StatisticItem name="TOTAL" unit="Yuan" amount={income - expense} />
            <div></div>

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