import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    getAppointmentDates,
    getExpertsData,
    setCalendarID,
    getAppointmentsForToday,
} from '~/redux/reducers/appointments';
import { RootState } from '~/redux/reducers';
import moment from 'moment';
import { Column, Text, Header, Screen } from '~/components';
import { handleBack } from '~/utils/functions/handleNavigation';
import { generateDateInfo } from '~/utils/helper';

const Calendar = ({ navigation }) => {
    const appointmentData = useSelector(
        (state: RootState) => state.appointments,
    );

    // const {
    //     expertData,
    //     reason: { sessionType },
    // } = appointmentData;

    const today = moment(new Date()).format('YYYY-MM-DD');
    const current = generateDateInfo(today);
    const [day, setDay] = useState(null);
    const [time, setTime] = useState(null);
    const [showShedule, setShowShedule] = useState(false);
    const { expert, appointment } = navigation.state.params;
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const dispatch = useDispatch();
    console.log('EXPERT', expert);
    console.log('APPOINTMENT', appointment);
    useEffect(() => {
        const { calendarID, uid } = expert;
        const obj = {
            expertsParams: {
                tableName: 'users',
                uid,
            },
        };

        let addMonth = moment(`${current.year}-${current.monthNumber}`);
        addMonth = moment(addMonth).add(1, 'M').format('YYYY-MM');

        dispatch(
            getAppointmentDates({
                ...current,
                calendarID,
                addMonth,
                appointmentTypeID: appointment.details.appointmentTypeID,
            }),
        );

        dispatch(getExpertsData(obj));
        dispatch(setCalendarID(calendarID));
        dispatch(
            getAppointmentsForToday({
                ...current,
                calendarID,
                appointmentTypeID: appointment.details.appointmentTypeID,
            }),
        );
    }, []);

    return (
        <Screen>
            <Header onBack={handleBack} title="Book Visit" />
            <Text>{new Date().toLocaleDateString()}</Text>
        </Screen>
    );
};

export default Calendar;
