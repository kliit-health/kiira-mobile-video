import React, { useState, useEffect } from 'react';
import Image from 'react-native-fast-image';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { switchCase } from '~/utils/functions';
import { Reminder, Book, Schedule } from './sections';
import styles from './styles';
import { RootState } from '~/redux/reducers';
import moment from 'moment';

enum Action {
    Book,
    Reminder,
    Schedule,
}

const Banner = () => {
    const assessment = useSelector(state => state.user.data);
    const appointments = useSelector((state:RootState) =>state.appointments)
    const [action, setAction] = useState<Action | undefined>(Action.Schedule);

     const getUpcomingAppointments = visits => {
        let upcomingVisits = { title: 'Upcoming Visits', data: [] };   
        visits.forEach(visit => {
            const now = moment();
            var current_time = moment.utc(now, 'YYYY-MM-DD[T]HH:mm[Z]');
            const upcoming = moment.utc(visit.time, 'YYYY-MM-DD[T]HH:mm[Z]').isSameOrAfter(current_time, 'hours');
            upcoming
                ? upcomingVisits.data.push({ visit, isUpcoming: true })
                : null;
        });
    
        return upcomingVisits
    };
    const upcomingAppointments = getUpcomingAppointments(appointments.history)

    useEffect(() => {

        if (appointments.history.length === 0) {
            setAction(Action.Schedule);
        }

        if (appointments.history.length !== 0 && upcomingAppointments.data.length !== 0) {
            setAction(Action.Reminder);
        }

        if (upcomingAppointments.data.length === 0) {
            setAction(Action.Book);
        }
    }, [appointments.history]);

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
