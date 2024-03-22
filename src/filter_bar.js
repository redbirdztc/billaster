import React from 'react';

import DateDisplay from './date';
import Button from './button_square';
import Spacer from './spacer';
import { useState } from 'react';

import LeftIcon from './img/left.png';
import RightIcon from './img/right.png';
import SortIcon from './img/sort.png';

const FilterBar = () => {
    const [date, setDate] = useState(new Date());

    const switchToLastMonth = () => {
        setDate(new Date(date.setMonth(date.getMonth() - 1)));

    };
    const switchToNextMonth = () => {
        setDate(new Date(date.setMonth(date.getMonth() + 1)));
    }
    const filterTheResult = () => {
        console.log("filterTheResult")
    }
    const iconSize = "5vw"

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100vw', height: '5vh' }}>
                <Spacer width="18vw" />
                <div style={{ marginRight: 'auto', display: 'flex' }}>
                    <Button onClick={switchToLastMonth} icon={LeftIcon} size={iconSize} />
                </div>
                <div>  {DateDisplay({ date })}</div>

                <div style={{ marginLeft: 'auto', display: 'flex' }}>
                    <Button onClick={switchToNextMonth} icon={RightIcon} size={iconSize} />
                </div>

                <Spacer width="10vw" />
                <Button onClick={filterTheResult} icon={SortIcon} size={iconSize} />
                <Spacer width="5vw" />
            </div>
        </div>
    );
}


export default FilterBar;