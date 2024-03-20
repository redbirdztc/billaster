
import React from "react";
import propTypes from "prop-types";

import "./App.css"

import CircleButton from "./button_circle";
import Spacer from "./spacer";

const DailyRecord = ({ record }) => {
    const { category, account, amount, unit, isExpense } = record;
    const iconSize = '5vw'

    // amount 转为保留两位小数的字符串
    const amountStr = amount.toFixed(2);

    return (
        <div className="row-broker" style={{ alignContent: 'center', justifyContent: 'space-between', alignItems: "center", height: "10vw" }}>
            <Spacer width="5vw"></Spacer>
            <CircleButton icon={category.icon} size="8vw" onClick={() => { }} ></CircleButton>
            <Spacer width="2vw"></Spacer>
            <div className="col-broker" style={{ alignItems: "start" }}>
                <div>{category.code}</div>
                <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'left' }}>
                    <CircleButton icon={account.icon} size={iconSize} onClick={() => { }}></CircleButton>
                    <Spacer width="2vw"></Spacer>
                    <span>{account.code}</span>
                </div>
            </div>
            <div style={{ marginLeft: 'auto', color: isExpense ? 'red' : 'green' }}>{isExpense ? '-' : ''}{unit}{amountStr}</div>
            <Spacer width="5vw"></Spacer>
        </div>
    );
};

DailyRecord.propTypes = {
    record: propTypes.shape({
        category: propTypes.object.isRequired,
        account: propTypes.object.isRequired,
        amount: propTypes.number.isRequired,
        unit: propTypes.string.isRequired,
        isExpense: propTypes.bool.isRequired,
    }).isRequired,
};

export default DailyRecord;