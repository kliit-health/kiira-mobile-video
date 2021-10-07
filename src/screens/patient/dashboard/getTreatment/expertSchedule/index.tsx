import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, ScrollView } from 'react-native';
import { Header } from '~/components';
import {
    getExpertsData,
    setCalendarID,
    getAppointmentDates,
    getAppointmentsForToday,
} from '~/redux/reducers/appointments';

import { generateDateInfo } from '~/utils/helper';
import styles from './style';
import Constant from '~/utils/constants';
import moment from 'moment';

import {
    ExpertInfo,
    Bio,
    Specialties,
    Languages,
    ClinicInfo,
    Hours,
    ScheduleModal,
} from './components';
import { RootState } from '~/redux/reducers';

const ExpertSchedule = props => {
    const appointmentData = useSelector(
        (state: RootState) => state.appointments,
    );

    const {
        expertData,
        reason: { sessionType },
    } = appointmentData;

    const today = moment(new Date()).format('YYYY-MM-DD');
    const current = generateDateInfo(today);
    const [day, setDay] = useState(null);
    const [time, setTime] = useState(null);
    const [showSchedule, setShowSchedule] = useState(false);
    const { navigation } = props;
    const { uid, calendarID } = navigation.state.params;
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const obj = {
            expertsParams: {
                tableName: Constant.App.firebaseTableNames.users,
                uid: uid,
            },
        };

        let addMonth = moment(`${current.year}-${current.monthNumber}`);
        addMonth = moment(addMonth).add(1, 'M').format('YYYY-MM');

        dispatch(
            getAppointmentDates({
                ...current,
                calendarID,
                addMonth,
                appointmentTypeID: sessionType.appointmentTypeID,
            }),
        );

        dispatch(getExpertsData(obj));
        dispatch(setCalendarID(calendarID));
        dispatch(
            getAppointmentsForToday({
                ...current,
                calendarID,
                appointmentTypeID: sessionType.appointmentTypeID,
            }),
        );
    }, []);

    const childProps = {
        appointmentData,
        calendarID,
        day,
        expertData,
        generateDateInfo,
        navigation,
        selectedDate,
        selectedTime,
        setDay,
        setShowSchedule,
        setSelectedDate,
        setSelectedTime,
        setTime,
        showSchedule,
        time,
        today,
    };

    return (
        <View style={styles.parentContainerStyle}>
            <Header title="Book Visit" onBack={() => navigation.goBack()} />
            <ScrollView
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                {expertData && (
                    <View>
                        <ExpertInfo {...childProps} />
                        <Bio expertData={expertData} />
                        <Specialties expertData={expertData} />
                        <Languages expertData={expertData} />
                        <ClinicInfo expertData={expertData} />
                        <Hours expertData={expertData} />
                    </View>
                )}
            </ScrollView>
            <ScheduleModal {...childProps} />
        </View>
    );
};

export default ExpertSchedule;
