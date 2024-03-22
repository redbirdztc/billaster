
import React from 'react';
import PropTypes from 'prop-types';

const DateDisplay = ({ date }) => {

    const dateObj = new Date(date);

    const month = dateObj.toLocaleString("en-us", { month: "long" });
    const year = dateObj.getFullYear();

    return (
        <span>{month}, {year}</span>
    )
}

DateDisplay.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired
}

export default DateDisplay;