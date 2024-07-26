import React from "react";
import propTypes from "prop-types";

import DailyRecords from "./daily_records";


const MonthlyRecords = ({ records }) => {
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
        <div className="flex flex-col ml-2 mr-2 items-center w-[96%] h-full">
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