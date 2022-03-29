import React, { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList, Alert, StyleSheet } from 'react-native';
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
import NativeModal from 'react-native-modal';

import {
    handleBack,
    handleNavigation,
} from '~/utils/functions/handleNavigation';
import { generateDateInfo } from '~/utils/helper';
import { colors, screenNames, text } from '~/utils/constants';
import metrices from '~/utils/metrices';
import { bookVisitText } from '~/utils/constants';

import moment from 'moment';

import { default as globalStyles } from '~/components/styles';
import { View } from 'react-native-animatable';
import { CustomButton, CustomText } from '~/components';

const { width } = metrices;

const Calendar = ({ navigation }) => {
    const appointments = useSelector((state: RootState) => state.appointments);
    const [showModal, setShowModal] = useState(false);
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
    const RenderModalView = () => {
        return (
            <NativeModal
                backdropColor={'rgba(0, 0, 0, 0.7)'}
                backdropOpacity={0.5}
                onBackdropPress={() => setShowModal(false)}
                isVisible={showModal}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <CustomText style={styles.modalText}>
                            {
                                'This Clinician has no availability'
                            }
                        </CustomText>

                        <CustomButton
                            buttonStyle={styles.button}
                            textStyle={styles.textStyle}
                            text={'OK'}
                            onPress={() => {
                                setShowModal(false);
                                navigation.navigate(screenNames.SelectProvider);
                            }}
                        />
                    </View>
                </View>
            </NativeModal>
        );
    };
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
                appointmentType: visit.details.appointmentTypeID,
            }),
        );

        dispatch(getExpertsData(obj));
        dispatch(setCalendarID(calendarID));
        dispatch(
            getAppointmentsForToday({
                ...current,
                calendarID,
                appointmentType: visit.details.appointmentType,
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
                appointmentType: visit.details.appointmentType,
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
    useEffect(() => {
        const appInterval = setTimeout(() => {
            //When the appointment is settled, wait for 5 seconds and if dates is undefined show modal
            if (!appointments?.dates?.length) {
                setShowModal(true);
            }
        }, 5000)
        return () => {
            //This clears out timeout when the appointments changes
            clearTimeout(appInterval)
        }
    }, [appointments]);

    return (
        <Kiira.Screen>
            <Kiira.Header onBack={handleBack} title="Book Visit" />
            <Kiira.Text options={[pad, medium, light, pad_t]}>{day}</Kiira.Text>
            {showModal && <RenderModalView />}
            <Kiira.Row options={[sm_pad_h, { height: 90 }]}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    keyExtractor={({ date }) => date}
                    data={!!appointments?.dates.length ? appointments.dates : []}
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
                data={appointments.appointments.current }
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

const styles = StyleSheet.create({
    modalView: {
        margin: '5%',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: '2%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '80%',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    button: {
        borderRadius: 20,
        margin: '6%',
        padding: 10,
        elevation: 2,
        backgroundColor: colors.primaryBlue,
        width: '80%',
    },

    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        fontFamily: text.fontFamily.poppinsRegular,
        fontSize: text.size.regular,
        color: colors.black,
        textAlign: 'left',
        margin: '6%',
        lineHeight: 30,
    },
})