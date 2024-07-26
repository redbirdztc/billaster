import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';


const FilterForm = ({ filterResult }) => {
    const [curPeriod, setCurPeriod] = useState('DAILY');
    const period = [
        'DAILY',
        'WEEKLY',
        'MONTHLY',
        '3 MONTHS',
        '6 MONTHS',
        'YEARLY'
    ]


    useEffect(() => {
        filterResult(curPeriod);
    }, [curPeriod])
    return (
        <div className='flex flex-col justify-center'>
            <div className='font-bold text-center mb-2'>Display Option</div>
            <div className='flex flex-col w-full'>
                <div className='flex flex-row w-full justify-evenly'>
                    <div className='flex flex-col w-full'>
                        View Mode:
                    </div>
                    <div className='flex flex-col w-full'>
                        {
                            period.map((item, index) => {
                                return (
                                    <div key={index} className='flex flex-row' >
                                        <label onClick={(e) => { e.stopPropagation(); setCurPeriod(item) }}
                                            style={{
                                                color: curPeriod === item && "green",
                                                font: curPeriod === item && "bold"
                                            }}>  {item} {curPeriod === item && "⭕️"}</label>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

FilterForm.propTypes = {
    filterResult: propTypes.func.isRequired
}


export default FilterForm;