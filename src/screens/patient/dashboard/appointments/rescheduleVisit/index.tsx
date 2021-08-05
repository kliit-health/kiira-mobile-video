import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, ScrollView } from 'react-native';
import { Header } from '~/components';
import {
    getExpertsData,
    setCalendarID,
    getAppointmentsByDay,
    getAppointmentDates,
    getAppointmentsForToday,
} from './action';
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
    SheduleModal,
} from './components';

const RescheduleVisit = props => {
    const { navigation, visit } = props.navigation.state.params;
    const {
        calendarID,
        expert,
        uid,
        id,
        appointmentType: { appointmentType },
    } = visit;

    const expertData = useSelector(state => state.expertProfile.expertData);

    const appointmentData = useSelector(state => state.expertSchedule);
    const today = moment(new Date()).format('YYYY-MM-DD');
    const current = generateDateInfo(today);
    const [day, setDay] = useState(null);
    const [time, setTime] = useState(null);
    const [showShedule, setShowShedule] = useState(false);
    const [selectedDate, setSelectedDate] = useState(today);
    const [selectedTime, setSelectedTime] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const obj = {
            expertsParams: {
                tableName: Constant.App.firebaseTableNames.users,
                uid: expert.uid,
            },
        };
        let addMonth = moment(`${current.year}-${current.monthNumber}`);
        addMonth = moment(addMonth).add(1, 'M').format('YYYY-MM');

        dispatch(getExpertsData(obj));
        dispatch(setCalendarID(calendarID));
        dispatch(
            getAppointmentsForToday({
                ...current,
                calendarID,
                appointmentType,
            }),
        );
        dispatch(
            getAppointmentsByDay({ ...current, calendarID, appointmentType }),
        );
        dispatch(
            getAppointmentDates({
                ...current,
                calendarID,
                addMonth,
                appointmentType,
            }),
        );
    }, []);

    const childProps = {
        appointmentType,
        appointmentData,
        calendarID,
        day,
        expert,
        expertData,
        generateDateInfo,
        id,
        navigation,
        selectedDate,
        selectedTime,
        setDay,
        setShowShedule,
        setSelectedDate,
        setSelectedTime,
        setTime,
        showShedule,
        time,
        today,
        uid,
        visit,
    };
    return (
        <View style={styles.parentContainerStyle}>
            <Header
                title="Reschedule Visit"
                onBack={() => navigation.goBack()}
            />
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
            <SheduleModal {...childProps} />
        </View>
    );
};
export default RescheduleVisit;
