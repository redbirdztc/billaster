import React from 'react';
import propTypes from 'prop-types';

import DateDisplay from './date';
import SquareButton from './button_square';
import { useState } from 'react';

import LeftIcon from './img/left.png';
import RightIcon from './img/right.png';
import SortIcon from './img/sort.png';

const FilterBar = ({ onFilterClicked, setFilterDate }) => {
    const [date, setDate] = useState(new Date());

    const switchToLastMonth = () => {
        const newDate = new Date(date.setMonth(date.getMonth() - 1))
        setDate(newDate);
        setFilterDate(newDate);
    };
    const switchToNextMonth = () => {
        const newDate = new Date(date.setMonth(date.getMonth() + 1))
        setDate(newDate);
        setFilterDate(newDate);
    }

    return (
        <div className='flex justify-center items-center w-full h-12' >
            <div className='ml-20 mr-auto w-5 h-fit content-center' >
                <SquareButton onClick={switchToLastMonth} icon={LeftIcon} />
            </div>
            <div>{DateDisplay({ date })}</div>

            <div className='w-5 h-fit' style={{ marginLeft: 'auto', display: 'flex' }}>
                <SquareButton onClick={switchToNextMonth} icon={RightIcon} />
            </div>

            <div className='w-5 h-fit ml-10 mr-5' >
                <SquareButton onClick={onFilterClicked} icon={SortIcon} />
            </div>
        </div>
    );
}

FilterBar.propTypes = {
    onFilterClicked: propTypes.func.isRequired,
    setFilterDate: propTypes.func.isRequired
}


export default FilterBar;