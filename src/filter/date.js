
import PropTypes from 'prop-types';

const DateDisplay = ({ date, period }) => {
    const year = date.getFullYear();
    const month = date.toLocaleString("en-us", { month: "short" });
    const monthDay = date.getDate();

    switch (period.name) {
        case "DAILY": {
            return `${month} ${monthDay}, ${year}`
        }
        case "WEEKLY": {
            return `${month} ${monthDay}`
        }
        case "MONTHLY":
        case "3 MONTHS":
        case "6 MONTHS": {
            return `${month}, ${year}`
        }
        case "YEARLY": {
            return `${year}`
        }
    }
    return `${month}, ${year}`
}

DateDisplay.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
    period: PropTypes.object.isRequired
}

export default DateDisplay;