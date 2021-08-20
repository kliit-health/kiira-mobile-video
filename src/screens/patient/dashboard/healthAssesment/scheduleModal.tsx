import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '~/redux/reducers';
import { withNavigation } from 'react-navigation';
import moment from 'moment';
import {
    ActivityIndicator,
    ScrollView,
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
} from 'react-native';
import { Conditional, Button, CustomButton } from '~/components';
import Agreements from '~/screens/patient/dashboard/appointments';
import ConfirmButton from './confirmButton';

import Constants from '~/utils/constants';
import { generateDateInfo } from '~/utils/helper';
import {
    toggleLoading,
    selectAssessment,
    getAppointmentDates,
    getAppointmentsByDay,
} from '~/redux/reducers/assessment';

import styles from './styles';

const { staticImages } = Constants.App;

const ScheduleModal = ({ navigation }) => {
    const dispatch = useDispatch();
    const [day, setDay] = useState('');
    const [time, setTime] = useState(null);

    const {
        loading,
        current,
        addMonth,
        details: {
            calendarID,
            appointmentType: { appointmentTypeID },
        },
        appointments,
    } = useSelector(selectAssessment);

    const { dates } = appointments;
    const { consentAgreements } = useSelector(state => state.user.data);

    const agreements = useSelector((state: RootState) => state.agreements);
    const hasSigned = consentAgreements.length > 0;

    useEffect(() => {
        dispatch(
            getAppointmentDates({
                ...current,
                calendarID: '5213164',
                addMonth,
                appointmentTypeID,
            }),
        );
    }, []);

    useEffect(() => {
        if (dates.length && !day.length) {
            setDay(dates[0].date);
            dispatch(
                getAppointmentsByDay({
                    ...dates[0],
                    calendarID,
                    appointmentTypeID,
                }),
            );
        }
    }, [dates]);

    const handleClose = () => {
        dispatch(toggleLoading());
        navigation.goBack();
    };

    const handleDateSelection = item => {
        dispatch(
            getAppointmentsByDay({
                ...item,
                calendarID,
                appointmentTypeID,
            }),
        );
        setTime(null);
        setDay(item.date);
    };

    return (
        <View style={styles.showSheduleContainer}>
            <Conditional if={agreements.data && !hasSigned}>
                <Agreements navigation={navigation} />
            </Conditional>
            <TouchableOpacity onPress={handleClose}>
                <Image
                    resizeMode="contain"
                    source={staticImages.rightChevronIcon}
                    style={styles.arrow}
                />
            </TouchableOpacity>
            <View style={styles.dayContainer}>
                <Text style={{ alignSelf: 'flex-start' }}>
                    Select Appointment Date
                </Text>
                <Conditional if={appointments.dates.length}>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={dates}
                        horizontal={true}
                        decelerationRate={'fast'}
                        extraData={day}
                        ListEmptyComponent={
                            <Text
                                style={
                                    (styles.firstAvaliable,
                                    {
                                        alignSelf: 'center',
                                        marginVertical: 5,
                                    })
                                }
                            >
                                No Availability
                            </Text>
                        }
                        renderItem={({ item }) => {
                            item = generateDateInfo(item.date);
                            return (
                                <View style={styles.date}>
                                    <Text
                                        style={
                                            day === item.date
                                                ? styles.dateSelect
                                                : { color: 'black' }
                                        }
                                    >
                                        {item.month}
                                    </Text>
                                    <Button
                                        style={{
                                            container:
                                                day === item.date
                                                    ? styles.dateSelectedContainerStyle
                                                    : styles.dateContainerStyle,
                                            title:
                                                day === item.date
                                                    ? styles.dateSelectedTextStyle
                                                    : styles.dateTextStyle,
                                        }}
                                        onPress={() =>
                                            handleDateSelection(item)
                                        }
                                        title={item.day}
                                    />
                                    <Text
                                        style={
                                            day === item.date
                                                ? [styles.dow, styles.dowSelect]
                                                : styles.dow
                                        }
                                    >
                                        {item.dow}
                                    </Text>
                                </View>
                            );
                        }}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </Conditional>
                <Conditional if={appointments.current}>
                    <View
                        style={{
                            borderColor: 'black',
                            borderBottomWidth: 1,
                            marginTop: 10,
                            paddingBottom: 10,
                        }}
                    >
                        <Text style={styles.subHeader}>
                            Select Appointment Time
                        </Text>
                    </View>
                    <View style={styles.appointmentTimesContainer}>
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                justifyContent: 'space-evenly',
                                marginTop: 10,
                                paddingBottom: 60,
                            }}
                        >
                            <Conditional
                                if={!appointments.current.length && loading}
                            >
                                <View style={{ alignSelf: 'flex-start' }}>
                                    <ActivityIndicator
                                        size="large"
                                        color="#008AFC"
                                    />
                                </View>
                            </Conditional>
                            <Conditional
                                if={!appointments.current.length && !loading}
                            >
                                <Text
                                    style={
                                        (styles.firstAvaliable,
                                        {
                                            alignSelf: 'center',
                                            marginVertical: 5,
                                        })
                                    }
                                >
                                    No Availability
                                </Text>
                            </Conditional>
                            <Conditional if={appointments.current.length}>
                                {appointments.current.map((item, i) => {
                                    const selected = time === item.time;

                                    return (
                                        <CustomButton
                                            key={item.time}
                                            buttonStyle={
                                                selected
                                                    ? styles.dateTimeSelectedSlotContainerStyle
                                                    : styles.dateTimeSlotContainerStyle
                                            }
                                            textStyle={
                                                selected
                                                    ? styles.dateTimeSelectedSlotTextStyle
                                                    : styles.dateTimeSlotTextStyle
                                            }
                                            onPress={() => {
                                                setTime(item.time);
                                            }}
                                            text={moment(item.time).format(
                                                'h:mm a',
                                            )}
                                        />
                                    );
                                })}
                            </Conditional>
                        </ScrollView>
                    </View>
                </Conditional>
            </View>
            <ConfirmButton day={day} time={time} />
        </View>
    );
};

export default withNavigation(ScheduleModal);
