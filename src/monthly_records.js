import React from "react";
import propTypes from "prop-types";

import DailyRecords from "./daily_records";

import FoodIcon from "./img/diet.png";
import PiggyBank from "./img/piggy-bank.png";

const MonthlyRecords = ({ records }) => {
    records = [
        {
            date: new Date(),
            category: {
                "icon": FoodIcon,
                "code": "Food"
            },
            account: {
                "icon": PiggyBank,
                "code": "Savings"
            },
            amount: 100,
            unit: "Yuan",
            isExpense: true
        },
        {
            date: new Date(),
            category: {
                "icon": FoodIcon,
                "code": "Food"
            },
            account: {
                "icon": PiggyBank,
                "code": "Savings"
            },
            amount: 100,
            unit: "Yuan",
            isExpense: true
        },
        {
            date: new Date(new Date().setDate(new Date().getDate() - 1)),
            category: {
                "icon": FoodIcon,
                "code": "Food"
            },
            account: {
                "icon": PiggyBank,
                "code": "Savings"
            },
            amount: 100,
            unit: "Yuan",
            isExpense: false
        },
    ]

    // records 按照日期分组并按照日期倒序排序
    const recordsByDate = records.reduce((acc, record) => {
        const date = record.date;
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(record);
        return acc;
    }, {});
    return (
         <div className="col-broker" style={{width:'90vw', height: "90vh", alignItems: 'center',marginLeft:'5vw',marginRight:'5vw' }}>
            {
                Object.keys(recordsByDate).map((date, index) => {
                    return (
                        <div key={index}  style={{width:'100%'}} >
                            {DailyRecords({ date: recordsByDate[date][0].date, records: recordsByDate[date] })}
                        </div>
                    )
                })
            }
        </div>

    )
}

MonthlyRecords.propTypes = {
    records: propTypes.arrayOf(propTypes.object).isRequired,
};


export default MonthlyRecords;