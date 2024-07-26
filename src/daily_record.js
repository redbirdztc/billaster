
import React from "react";
import propTypes from "prop-types";

import "./App.css"

import CircleButton from "./button_circle";

const DailyRecord = ({ record }) => {
    const { category, account, amount, unit, isExpense } = record;

    // amount 转为保留两位小数的字符串
    const amountStr = amount.toFixed(2);

    return (
        <div className="h-12 flex flex-row justify-between content-center align-center items-center" >
            <div className="w-10 h-fit ">
                <CircleButton icon={category.icon} onClick={() => { }}></CircleButton>
            </div>
            <div className="flex-col ml-2 items-start">
                <div className='font-normal'>{category.code}</div>
                <div className='flex flex-row items-center'>
                    <div className="w-4 h-fit">
                        <CircleButton icon={account.icon} onClick={() => { }}></CircleButton>
                    </div>
                    <span className='ml-2 font-extralight'>{account.code}</span>
                </div>
            </div>
            <div className="ml-auto" style={{ color: isExpense ? 'red' : 'green' }}>{isExpense ? '-' : ''}{unit}{amountStr}</div>
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