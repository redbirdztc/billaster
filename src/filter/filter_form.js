import React from 'react';
import propTypes from 'prop-types';
import Periods from './filter_form_periods';

const FilterForm = ({  curPeriod, onPeriodClick }) => {
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
                            Periods.map((period, index) => {
                                return (
                                    <div key={index} className='flex flex-row' >
                                        <label onClick={(e) => onPeriodClick(e, period)}
                                            style={{
                                                color: curPeriod.name === period.name && "#e50101",
                                                font: curPeriod.name === period.name && "bold"
                                            }}>  {period.name} {curPeriod.name === period.name && "⭕️"}</label>
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
    onPeriodClick: propTypes.func.isRequired,
    curPeriod: propTypes.object.isRequired
}


export default FilterForm;