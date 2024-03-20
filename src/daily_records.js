import React from "react";
import propTypes from "prop-types";

import "./App.css"

import DailyRecord from "./daily_record";
import Spacer from "./spacer";

const recordSeperator = (
    <div style={{ display: 'flex', flexDirection: 'row', width: '100vw' }}>
        <Spacer width="13vw"></Spacer>
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 'auto', width: '90vw' }}>
            <div style={{ borderBottomStyle: 'solid', borderBottomColor: 'grey', borderBottomWidth: '1px', height: '1vw' }}></div>
            <div style={{ height: '1vw' }}></div>
        </div>
    </div>
)

const DailyRecords = ({ date, records }) => {
    const month = date.toLocaleString('en-us', { month: "short" });
    const day = date.toLocaleString('en-us', { day: "numeric" });
    const weekday = date.toLocaleString('en-us', { weekday: "long" });

    return (
        <div>
            <div style={{ width: "100vw", display: 'flex', height: '8vw', alignItems: 'end', justifyItems: 'column', alignContent: 'center' }}>
                <div style={{ width: '100vw', fontWeight: "bold", alignItems: "start", display: "flex", borderBottomStyle: "soild", borderBottomColor: "black" }}>
                    <Spacer width="5vw"></Spacer>
                    {month} {day}, {weekday}
                </div>
            </div>
            <div className="row-broker" >
                <Spacer width="2vw"></Spacer>
                <div className="col-broker" style={{ width: '96vw' }}>
                    <div style={{ borderBottomStyle: 'solid', borderBottomColor: 'grey', borderBottomWidth: '1px', height: '1vw' }}></div>
                    <div style={{ height: '1vw' }}></div>
                </div>
                <Spacer width="2vw"></Spacer>
            </div>
            <div>
                {
                    // iterate
                    records.map((record, index) => {
                        const isLast = index === Object.keys(records).length - 1;

                        return (
                            <div key={index}>
                                {DailyRecord({ record })}
                                {isLast ? null : recordSeperator}
                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}

DailyRecords.propTypes = {
    date: propTypes.instanceOf(Date).isRequired,
    records: propTypes.arrayOf(propTypes.object).isRequired,
};

export default DailyRecords;