import moment from 'moment';

export const getSections = visits => {
    let upcomingVisits = { title: 'Upcoming Visits', data: [] };
    let pastVisits = { title: 'Past Visits', data: [] };
    let result = [];

    visits.forEach(visit => {
        const now = moment();
        const past = moment.unix(visit.time).isBefore(now, 'hours');
        past
            ? pastVisits.data.push({ visit, isUpcoming: false })
            : upcomingVisits.data.push({ visit, isUpcoming: true });
    });

    if (upcomingVisits.data.length > 0) {
        result.push(upcomingVisits);
    }

    if (pastVisits.data.length > 0) {
        result.push(pastVisits);
    }
    return result;
};

export const formatTime = (time: number, duration: number) => {
    const momentTime = moment.unix(time);
    return [
        {
            primary: momentTime.format('ddd'),
            secondary: momentTime.format('MMM Do'),
        },
        {
            primary: momentTime.format('h:mm'),
            secondary: momentTime.format('a'),
        },
        {
            primary: duration,
            secondary: 'min',
        },
    ];
};
