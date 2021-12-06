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
} from '~/redux/reducers/appointments';
import { generateDateInfo } from '~/utils/helper';
import styles from './style'; 
import Constant, { tables } from '~/utils/constants'; 
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

const RescheduleVisit = props => {
    const { navigation, visit } = props.navigation.state.params;
    const { calendarID, expert, uid, id, appointmentTypeID } = visit;

    const expertData = useSelector((state:any) => state.appointments.expertData);
    const appointmentData = useSelector((state:any) => state.appointments);
    const today = moment(new Date()).format('YYYY-MM-DD');
    const current = generateDateInfo(today);
    const [day, setDay] = useState(null);
    const [time, setTime] = useState(null);
    const [showSchedule, setShowSchedule] = useState(false);
    const [selectedDate, setSelectedDate] = useState(today);
    const [selectedTime, setSelectedTime] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const obj = {
            expertsParams: { 
                tableName: tables.users, 
                uid: expert.uid,
            },
        };
        const curMonth = moment(`${current.year}-${current.monthNumber}`);
        var addMonth = moment(curMonth).add(1, 'M').format('YYYY-MM');

        dispatch(getExpertsData(obj));
        dispatch(setCalendarID(calendarID));
        dispatch(
            getAppointmentsForToday({
                ...current,
                calendarID,
                appointmentTypeID,
            }),
        );
        dispatch(
            getAppointmentsByDay({ ...current, calendarID, appointmentTypeID }),
        );
        dispatch(
            getAppointmentDates({
                ...current,
                calendarID,
                addMonth,
                appointmentTypeID,
            }),
        );
    }, []);

    const childProps = {
        appointmentTypeID,
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
        setShowSchedule,
        setSelectedDate,
        setSelectedTime,
        setTime,
        showSchedule,
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
            <ScheduleModal {...childProps} />
        </View>
    );
};
export default RescheduleVisit;

// import React, { useState, useEffect } from 'react';
// import { ActivityIndicator, FlatList } from 'react-native';
// import { useSelector, useDispatch } from 'react-redux';
// import {
//     getAppointmentDates,
//     getExpertsData,
//     setCalendarID,
//     getAppointmentsForToday,
// } from '~/redux/reducers/appointments';
// import { RootState } from '~/redux/reducers';
// import moment from 'moment';
// import { Row, Text, Header, Screen, Button } from '~/components';
// import {
//     handleBack,
//     handleNavigation,
// } from '~/utils/functions/handleNavigation';
// import { generateDateInfo } from '~/utils/helper';
// import { default as globalStyles } from '~/components/styles';
// import { colors } from '~/utils/constants';
// import metrices from '~/utils/metrices';

// const { width } = metrices;

// const RescheduleVisit = ({ navigation }) => {
//     const appointments = useSelector((state: RootState) => state.appointments);

//     const {
//         pad,
//         medium,
//         light,
//         pad_t,
//         white_bg,
//         blue,
//         radius_sm,
//         sm_pad_h,
//         sm_pad_v,
//         pad_h,
//         grey_br,
//         blue_br,
//         blue_br_sm,
//         pad_top_none,
//         black,
//     } = globalStyles;

//     const today = moment(new Date()).format('YYYY-MM-DD');
//     const current = generateDateInfo(today);
//     const [day, setDay] = useState(moment(today).format('ll'));
//     const [time, setTime] = useState(null);
//     const { expert, appointment } = navigation.state.params;

//     const dispatch = useDispatch();

//     useEffect(() => {
//         const { calendarID, uid } = expert;
//         const obj = {
//             expertsParams: {
//                 tableName: 'users',
//                 uid,
//             },
//         };

//         let addMonth = moment(`${current.year}-${current.monthNumber}`);
//         addMonth = moment(addMonth).add(1, 'M').format('YYYY-MM');

//         dispatch(
//             getAppointmentDates({
//                 ...current,
//                 calendarID,
//                 addMonth,
//                 appointmentTypeID: appointment.details.appointmentTypeID,
//             }),
//         );

//         dispatch(getExpertsData(obj));
//         dispatch(setCalendarID(calendarID));
//         dispatch(
//             getAppointmentsForToday({
//                 ...current,
//                 calendarID,
//                 appointmentTypeID: appointment.details.appointmentTypeID,
//             }),
//         );
//     }, []);

//     const handlePress = date => {
//         const { calendarID } = expert;
//         setDay(moment(date.date).format('ll'));
//         dispatch(
//             getAppointmentsForToday({
//                 ...date,
//                 calendarID,
//                 appointmentTypeID: appointment.details.appointmentTypeID,
//             }),
//         );
//     };

//     return (
//         <Screen>
//             <Header onBack={handleBack} title="Book Visit" />
//             <Text options={[pad, medium, light, pad_t]}>{day}</Text>
//             <Row options={[sm_pad_h, { height: 90 }]}>
//                 <FlatList
//                     showsHorizontalScrollIndicator={false}
//                     horizontal
//                     keyExtractor={({ date }) => date}
//                     data={appointments.dates}
//                     ListEmptyComponent={() => (
//                         <ActivityIndicator
//                             style={{ marginLeft: width / 2 - 30 }}
//                             size="large"
//                             color={colors.blue}
//                         />
//                     )}
//                     renderItem={({ item }) => {
//                         let date = generateDateInfo(item.date);

//                         return (
//                             <Button
//                                 onPress={() => handlePress(date)}
//                                 style={{
//                                     container: [
//                                         radius_sm,
//                                         white_bg,
//                                         sm_pad_h,
//                                         pad_top_none,
//                                         { width: 65 },
//                                         moment(date.date).format('ll') === day
//                                             ? blue_br
//                                             : grey_br,
//                                     ],
//                                     title: [black],
//                                 }}
//                                 title={`${date.dow} \n\n ${date.day}`}
//                             />
//                         );
//                     }}
//                 />
//             </Row>
//             <Text options={[pad]}>Please select an appointment time</Text>
//             <FlatList
//                 showsVerticalScrollIndicator={false}
//                 contentContainerStyle={{
//                     flexWrap: 'wrap',
//                     flexDirection: 'row',
//                     justifyContent: 'center',
//                 }}
//                 keyExtractor={({ time }) => time}
//                 data={appointments.appointments.current}
//                 ListEmptyComponent={() => (
//                     <ActivityIndicator size="large" color={colors.blue} />
//                 )}
//                 renderItem={({ item }) => {
//                     let current = generateDateInfo(item.time);

//                     return (
//                         <Button
//                             onPress={() => setTime(current)}
//                             style={{
//                                 container: [
//                                     radius_sm,
//                                     white_bg,
//                                     sm_pad_h,
//                                     pad_top_none,
//                                     { width: 100 },
//                                     { margin: 20 },
//                                     time && current.date === time.date
//                                         ? blue_br_sm
//                                         : grey_br,
//                                 ],
//                                 title: [blue],
//                             }}
//                             title={`${current.hour.time} ${current.hour.am_pm}`}
//                         />
//                     );
//                 }}
//             />
//             <Button
//                 onPress={() =>
//                     handleNavigation('Payment', {
//                         expert,
//                         appointment,
//                         day,
//                         time,
//                     })
//                 }
//                 title="Confirm"
//                 style={{ container: [sm_pad_v, pad_h], title: [] }}
//             />
//         </Screen>
//     );
// };

// export default RescheduleVisit;
