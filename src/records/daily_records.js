import React from "react";
import propTypes from "prop-types";
import Divider from '@mui/material/Divider';
import DailyRecord from "./daily_record";

const DailyRecords = ({ date, records }) => {
    const month = date.toLocaleString('en-us', { month: "short" });
    const day = date.toLocaleString('en-us', { day: "numeric" });
    const weekday = date.toLocaleString('en-us', { weekday: "long" });

    const elementsOfRecords = records.map((record, index) => {
        const isLast = index === Object.keys(records).length - 1;

        return (
            <div key={index}>
                {DailyRecord({ record })}
                {isLast ? null : <div className="w-auto ml-10 mt-1 mb-1"><Divider /></div>}
            </div>
        )
    })

    return (
        <div>
            <div className="flex h-[8vw] items-end  ">
                <div className="flex flex-row font-bold items-start justify-start ml-3" >
                    {month} {day}, {weekday}
                </div>
            </div>
            <div className="flex flex-row mt-1 mb-1 h-px w-full bg-zinc-600" >

            </div>
            <div className="ml-3 mr-3" >
                {elementsOfRecords}
            </div>
        </div>
    )
}

DailyRecords.propTypes = {
    date: propTypes.instanceOf(Date).isRequired,
    records: propTypes.arrayOf(propTypes.object).isRequired,
};

export default DailyRecords;