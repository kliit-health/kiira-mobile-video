import React, { useState, useEffect } from 'react';
import Image from 'react-native-fast-image';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { switchCase } from '~/utils/functions';
import { Reminder, Book, Schedule } from './sections';
import styles from './styles';
import moment from 'moment';
import { RootState } from '~/redux/reducers';


enum Action {
    Book,
    Reminder,
    Schedule,
}

const Banner = () => {
    const assessment = useSelector((state: any) => state.user.data.assessment);
    const appointments = useSelector((state:RootState) =>state.appointments)
    const [action, setAction] = useState<Action | undefined>(Action.Schedule);
    const getUpcomingAppointments = visits => {
        let upcomingVisits = { title: 'Upcoming Visits', data: [] };   
        visits.forEach(visit => {
            const now = moment();
            var current_time = moment.utc(now, 'YYYY-MM-DD[T]HH:mm[Z]');
            const upcoming = moment.utc(visit.time, 'YYYY-MM-DD[T]HH:mm[Z]').isSameOrAfter(current_time, 'hours');
            if(upcoming) upcomingVisits.data.push({ visit, isUpcoming: true })

        });

        return upcomingVisits
    };
    const upcomingAppointments = getUpcomingAppointments(appointments.history)

    useEffect(() => {
        if (!assessment) {
            setAction(Action.Schedule);
        }

        if (assessment && !assessment.complete || assessment === null  && upcomingAppointments.data.length > 0) {
            setAction(Action.Reminder);
        }

        if (assessment && assessment.complete || assessment === null  && upcomingAppointments.data.length === 0) {
            setAction(Action.Book);
        }
    }, [assessment]);

    return (
        <View style={styles.container}>
            <Image
                resizeMode="cover"
                style={styles.background}
                source={require('~/assets/images/banner-background.png')}
            />
            {switchCase({
                [Action.Book]: <Book />,
                [Action.Reminder]: <Reminder />,
                [Action.Schedule]: <Schedule />,
            })(null)(action)}
        </View>
    );
};

export default Banner;
