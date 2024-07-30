import React from "react"
import propTypes from 'prop-types';
import MonthlyRecords from './monthly_records';

const RecordsContent = ({ records }) => {
    // filter dataset by date
    return (
        <div className='w-full z-0 left-0 pt-[10rem] pb-[3rem]' >
            {records.length !== 0 ?
                (
                    <div className='App-background' style={{ height: 'calc(100% - 9rem)' }}>
                        <MonthlyRecords records={records} />
                    </div>) :
                (
                    <div className='text-center w-full h-[76vh] font-bold'>
                        {"No Records"}
                    </div>
                )
            }
        </div>
    )
}

RecordsContent.propTypes = {
    records: propTypes.arrayOf(propTypes.object).isRequired
}

export default RecordsContent;