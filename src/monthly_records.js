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
        {
            date: new Date(new Date().setDate(new Date().getDate() + 1)),
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
        const date = record.date.getDate();
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(record);
        return acc;
    }, {});

    const daily = [];
    Object.keys(recordsByDate).forEach(date => {
        daily.push({ "date": date, "data": recordsByDate[date] });
    });

    // sort daily by date
    daily.sort((a, b) => {
        return b.date - a.date;
    });

    return (
        <div className="col-broker" style={{ width: '96%', height: "100%", alignItems: 'center', marginLeft: '2%', marginRight: '2%' }}>
            {
                daily.map((daily, index) => {
                    return (
                        <div key={index} style={{ width: '100%' }} >
                            {DailyRecords({ date: daily.data[0].date, records: daily.data })}
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