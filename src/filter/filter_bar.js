import React from 'react';
import propTypes from 'prop-types';

import DateDisplay from '../records/date';
import SquareButton from '../button/square';

import LeftIcon from './img/left.png';
import RightIcon from './img/right.png';
import SortIcon from './img/sort.png';

const FilterBar = ({ onFilterClicked, setStartDate, setEndDate, startDate, endDate, period }) => {
    const prevFunc = () => {
        // end date's last second
        const end = new Date(startDate.getTime() - 1000);
        setStartDate(period.getStartByEnd(end));
        setEndDate(end);
    }

    const nextFunc = () => {
        // start date's first second
        const start = new Date(endDate.getTime() + 1000);
        setStartDate(start);
        setEndDate(period.getEndByStart(start));
    }

    let displayedDate;

    console.log(startDate)
    console.log(endDate)
    switch (period.name) {
        case "DAILY":
        case "MONTHLY":
        case "YEARLY": {
            displayedDate = DateDisplay({ date: startDate, period })
            break;
        }
        case "3 MONTHS":
        case "6 MONTHS":
        case "WEEKLY": {
            displayedDate = `${DateDisplay({ date: startDate, period })} - ${DateDisplay({ date: endDate, period })}`
        }
    }

    return (
        <div className='flex justify-center items-center w-full h-12' >
            <div className='ml-20 mr-auto w-5 h-fit content-center' >
                <SquareButton onClick={prevFunc} icon={LeftIcon} />
            </div>
            <div>{displayedDate}</div>

            <div className='w-5 h-fit' style={{ marginLeft: 'auto', display: 'flex' }}>
                <SquareButton onClick={nextFunc} icon={RightIcon} />
            </div>

            <div className='w-5 h-fit ml-10 mr-5' >
                <SquareButton onClick={onFilterClicked} icon={SortIcon} />
            </div>
        </div>
    );
}

FilterBar.propTypes = {
    onFilterClicked: propTypes.func.isRequired,
    setStartDate: propTypes.func.isRequired,
    setEndDate: propTypes.func.isRequired,
    startDate: propTypes.instanceOf(Date).isRequired,
    endDate: propTypes.instanceOf(Date).isRequired,
    period: propTypes.object.isRequired
}


export default FilterBar;