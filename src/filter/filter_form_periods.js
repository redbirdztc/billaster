const PeriodDaily = {
    name: 'DAILY',
    getStartByEnd: (end) => {
        return new Date(end.getFullYear(), end.getMonth(), end.getDate());
    },
    getEndByStart: (start) => {
        return new Date(start.getFullYear(), start.getMonth(), start.getDate(), 23, 59, 59);
    },
    getStartEndFromNow: () => {
        const start = new Date();
        const end = new Date();
        return [start, end];
    }
}

const PeriodWeekly = {
    name: 'WEEKLY',
    getStartByEnd: (end) => {
        const start = new Date(end);
        start.setDate(end.getDate() - end.getDay());
        return start;
    },
    getEndByStart: (start) => {
        const end = new Date(start);
        end.setDate(start.getDate() + 6);
        return end;
    },
    getStartEndFromNow: () => {
        const start = new Date();
        start.setDate(start.getDate() - start.getDay());
        const end = new Date(start);
        end.setDate(start.getDate() + 6);
        return [start, end];
    }
}

const PeriodMonthly = {
    name: 'MONTHLY',
    getStartByEnd: (end) => {
        return new Date(end.getFullYear(), end.getMonth(), 1);
    },
    getEndByStart: (start) => {
        return new Date(start.getFullYear(), start.getMonth() + 1, 0, 23, 59, 59);
    },
    getStartEndFromNow: () => {
        const start = new Date();
        start.setDate(1);
        const end = new Date();
        end.setMonth(end.getMonth() + 1, 0);
        return [start, end];
    },
}

const Period3Months = {
    name: '3 MONTHLY',
    getStartByEnd: (end) => {
        return new Date(end.getFullYear(), end.getMonth() - 2, 1);
    },
    getEndByStart: (start) => {
        return new Date(start.getFullYear(), start.getMonth() + 2, 0, 23, 59, 59);
    },
    getStartEndFromNow: () => {
        const start = new Date();
        start.setMonth(start.getMonth() - 2, 1);
        const end = new Date();
        end.setMonth(end.getMonth() + 2, 0);
        return [start, end];
    }
}

const Period6Months = {
    name: '6 MONTHLY',
    getStartByEnd: (end) => {
        return new Date(end.getFullYear(), end.getMonth() - 5, 1);
    },
    getEndByStart: (start) => {
        return new Date(start.getFullYear(), start.getMonth() + 5, 0, 23, 59, 59);
    },
    getStartEndFromNow: () => {
        const start = new Date();
        start.setMonth(start.getMonth() - 5, 1);
        const end = new Date();
        end.setMonth(end.getMonth() + 5, 0);
        return [start, end];
    }
}

const PeriodYearly = {
    name: 'YEARLY',
    getStartByEnd: (end) => {
        return new Date(end.getFullYear(), 0, 1);
    },
    getEndByStart: (start) => {
        return new Date(start.getFullYear(), 11, 31, 23, 59, 59);
    },
    getStartEndFromNow: () => {
        const start = new Date();
        start.setMonth(0, 1);
        const end = new Date();
        end.setMonth(11, 31);
        return [start, end];
    }
}

const Periods = [
    PeriodDaily,
    PeriodWeekly,
    PeriodMonthly,
    Period3Months,
    Period6Months,
    PeriodYearly
]

export default Periods
export { PeriodDaily, PeriodWeekly, PeriodMonthly, Period3Months, Period6Months, PeriodYearly }