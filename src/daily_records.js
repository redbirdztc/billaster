import React from "react";
import propTypes from "prop-types";

import "./App.css"

import DailyRecord from "./daily_record";
import Spacer from "./spacer";
import HorizontalSeperator from "./horizentol_seperator";

const DailyRecords = ({ date, records }) => {
    const month = date.toLocaleString('en-us', { month: "short" });
    const day = date.toLocaleString('en-us', { day: "numeric" });
    const weekday = date.toLocaleString('en-us', { weekday: "long" });

    const seperator = () => (
        <div style={{ width: "100% - 10vw ", marginLeft: "10vw" }}>
            <HorizontalSeperator height="1px" margin="2vw" color="gray" ></HorizontalSeperator>
        </div>
    )

    const elemetsOfRecords = records.map((record, index) => {
        const isLast = index === Object.keys(records).length - 1;

        return (
            <div key={index}>
                {DailyRecord({ record })}
                {isLast ? null : seperator()}
            </div>
        )
    })

    return (
        <div>
            <div style={{ display: 'flex', height: '8vw', alignItems: 'end', justifyItems: 'column', alignContent: 'center' }}>
                <div style={{ fontWeight: "bold", alignItems: "start", display: "flex", borderBottomStyle: "soild", borderBottomColor: "black" }}>
                    <Spacer width="5vw"></Spacer>
                    {month} {day}, {weekday}
                </div>
            </div>
            <div className="row-broker" >
                {HorizontalSeperator({ height: "1px", margin: "2vw", color: "gray" })}
            </div>
            <div>
                {elemetsOfRecords}
            </div>
        </div>
    )
}

DailyRecords.propTypes = {
    date: propTypes.instanceOf(Date).isRequired,
    records: propTypes.arrayOf(propTypes.object).isRequired,
};

export default DailyRecords;