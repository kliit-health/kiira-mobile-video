import React, { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList, Alert } from 'react-native';
import * as Kiira from '~/components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '~/redux/reducers';
import {
    getAppointmentDates,
    getExpertsData,
    setCalendarID,
    getAppointmentsForToday,
    setAppointmentDayAndTime,
} from '~/redux/reducers/appointments';

import {
    handleBack,
    handleNavigation,
} from '~/utils/functions/handleNavigation';
import { generateDateInfo } from '~/utils/helper';
import { colors } from '~/utils/constants';
import metrices from '~/utils/metrices';
import { bookVisitText } from '~/utils/constants';

import moment from 'moment';

import { default as globalStyles } from '~/components/styles';
import { View } from 'react-native-animatable';

const { width } = metrices;

const Calendar = () => {
    const appointments = useSelector((state: RootState) => state.appointments);

    const {
        pad,
        medium,
        light,
        pad_t,
        white_bg,
        blue,
        radius_sm,
        sm_pad_h,
        sm_pad_v,
        pad_h,
        grey_br,
        blue_br,
        blue_br_sm,
        pad_top_none,
        black,
    } = globalStyles;

    const { visit } = appointments;

    const today = moment(new Date()).format('YYYY-MM-DD');
    const current = generateDateInfo(today);
    const [day, setDay] = useState(moment(today).format('ll'));
    const [time, setTime] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        const { calendarID, uid } = visit.expert;
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
                appointmentTypeID: visit.details.appointmentTypeID,
            }),
        );

        dispatch(getExpertsData(obj));
        dispatch(setCalendarID(calendarID));
        dispatch(
            getAppointmentsForToday({
                ...current,
                calendarID,
                appointmentTypeID: visit.details.appointmentTypeID,
            }),
        );
    }, []);

    const handlePress = date => {
        const { calendarID } = visit.expert;
        setDay(moment(date.date).format('ll'));
        dispatch(
            getAppointmentsForToday({
                ...date,
                calendarID,
                appointmentTypeID: visit.details.appointmentTypeID,
            }),
        );
    };

    const handleConfirm = () => {
        if(time == null){
            Alert.alert(bookVisitText.message);   
            return;
        }
        dispatch(setAppointmentDayAndTime({ day, time }));
        handleNavigation('Payment');
    };

    return (
        <Kiira.Screen>
            <Kiira.Header onBack={handleBack} title="Book Visit" />
            <Kiira.Text options={[pad, medium, light, pad_t]}>{day}</Kiira.Text>
            <Kiira.Row options={[sm_pad_h, { height: 90 }]}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    keyExtractor={({ date }) => date}
                    data={appointments.dates}
                    ListEmptyComponent={() => (
                        <ActivityIndicator
                            style={{ marginLeft: width / 2 - 30 }}
                            size="large"
                            color={colors.blue}
                        />
                    )}
                    renderItem={({ item, index }) => {
                        let date = generateDateInfo(item.date);

                        return (
                            <Kiira.Button
                                test={'date ' + index}
                                onPress={() => handlePress(date)}
                                style={{
                                    container: [
                                        radius_sm,
                                        white_bg,
                                        sm_pad_h,
                                        pad_top_none,
                                        { width: 65 },
                                        moment(date.date).format('ll') === day
                                            ? blue_br
                                            : grey_br,
                                    ],
                                    title: [black],
                                }}
                                title={`${date.dow} \n\n ${date.day}`}
                            />
                        );
                    }}
                />
            </Kiira.Row>
            <Kiira.Text options={[pad]}>
                { bookVisitText.message }
            </Kiira.Text>
            <View style={{alignItems:'center',justifyContent:'center'}}>
            <FlatList
                numColumns={3}
                initialNumToRender={appointments.appointments.current.length}
                showsVerticalScrollIndicator={false}
                keyExtractor={({ time }) => time}
                data={appointments.appointments.current}
                ListEmptyComponent={() => (
                    <ActivityIndicator size="large" color={colors.blue} />
                )}
                renderItem={({ item, index }) => {
                    let current = generateDateInfo(item.time);
                    return (    
                        <Kiira.Button
                            test={'time ' + index}
                            onPress={() => setTime(current)}
                            style={{
                                container: [
                                    radius_sm,
                                    white_bg,
                                    sm_pad_h,
                                    pad_top_none,
                                    { width: 100 },
                                    { margin: 20 },
                                    time && current.date === time.date
                                        ? blue_br_sm
                                        : grey_br,
                                ],
                                title: [blue],
                            }}
                            title={`${current.hour.time} ${current.hour.am_pm}`}
                        />
                   
                    );
                }}
            />
            </View>
            <Kiira.Button
                test="Confirm Date and Time"
                onPress={handleConfirm}
                disabled={ !time}
                title="Confirm"
                style={{ container: [sm_pad_v, pad_h,{backgroundColor: !day || !time ? colors.disableButtonColor:colors.primaryBlue}], title: [] }}
            />
        </Kiira.Screen>
    );
};

export default Calendar;
