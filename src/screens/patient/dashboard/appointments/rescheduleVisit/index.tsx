import React, { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import * as Kiira from '~/components';
import { useSelector, useDispatch } from 'react-redux';
import {
    getAppointmentDates,
    getExpertsData,
    setCalendarID,
    getAppointmentsForToday,
    updateVisit,
} from '~/redux/reducers/appointments';
import { handleBack } from '~/utils/functions/handleNavigation';
import { generateDateInfo } from '~/utils/helper'; 
import { colors } from '~/utils/constants';
import metrices from '~/utils/metrices';  
import moment from 'moment';
import { default as globalStyles } from '~/components/styles';

const { width } = metrices;
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

const RescheduleVisit = props => {
    const appointmentData = useSelector((state:any) => state.appointments);
    const { visit } = props.navigation.state.params;

    const {
        appointmentType: { appointmentType },
    } = visit;

    const today = moment(new Date()).format('YYYY-MM-DD');
    const current = generateDateInfo(today);
    const [day, setDay] = useState(moment(today).format('ll'));
    const [time, setTime] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        const { calendarID, uid } = props.navigation.state.params;
        const obj = { 
            expertsParams: {
                tableName: 'users',
                uid,
            },
        };

        const curMonth = moment(`${current.year}-${current.monthNumber}`);
        var addMonth = moment(curMonth).add(1, 'M').format('YYYY-MM'); 

        dispatch(
            getAppointmentDates({
                ...current,
                calendarID,
                addMonth,
                appointmentType,
            }),
        );

        dispatch(getExpertsData(obj));
        dispatch(setCalendarID(calendarID));
        dispatch(
            getAppointmentsForToday({
                ...current,
                calendarID,
                appointmentType,
            }),
        );
    }, []);

    const handlePress = date => {
        const { calendarID, uid } = props.navigation.state.params;
        setDay(moment(date.date).format('ll'));
        dispatch(
            getAppointmentsForToday({
                ...date,
                calendarID,
                appointmentType,
            }),
        );
    };

    const handleConfirm = () => {
        dispatch(
            updateVisit({
                data: { ...visit, time: time.date },
            }),
        );
    };
    return (
        <Kiira.Screen>
            <Kiira.Header onBack={handleBack} title="Reschedule Visit" />
            <Kiira.Text options={[pad, medium, light, pad_t]}>{day}</Kiira.Text>
            <Kiira.Row options={[sm_pad_h, { height: 90 }]}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    keyExtractor={({ date }) => date}
                    data={appointmentData.dates}
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
                Please select an appointment time
            </Kiira.Text>
            <FlatList
                numColumns={3}
                initialNumToRender={appointmentData.appointments.current.length}
                showsVerticalScrollIndicator={false}
                keyExtractor={({ time }) => time}
                data={appointmentData.appointments.current}
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
            <Kiira.Button
                test="Confirm Date and Time"
                disabled={!time}
                onPress={handleConfirm}
                title="Confirm"
                style={{ container: [sm_pad_v, pad_h,{backgroundColor: !day || !time ? colors.disableButtonColor:colors.primaryBlue}], title: [] }}
            />
        </Kiira.Screen>
    );
};

export default RescheduleVisit;