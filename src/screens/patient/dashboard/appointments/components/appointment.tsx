import React, { useState, useEffect } from 'react';
import { View, Platform, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { setCallConfig, getCallToken } from '~/redux/actions/twillio';
import { RootState } from '~/redux/reducers';
import FastImage from 'react-native-fast-image';
import {
    Bold,
    CustomButton,
    CustomText,
    Text,
    Row,
    Line,
    CheckBox,
} from '~/components';
import { showOrHideModal } from '~/components/customModal/action';
import styles from '../style';
import { useDispatch } from 'react-redux';
import { cancelAppointment, setVisit } from '~/redux/reducers/appointments';
import constants, { colors } from '~/utils/constants';
import moment from 'moment';
import { CameraBlack } from '~/svgs';

import {
    checkMultiple,
    request,
    requestMultiple,
    PERMISSIONS,
    RESULTS,
} from 'react-native-permissions';

const Appointment = ({ visit, date, navigation }) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [checked, setChecked] = useState(false);
    const user = useSelector((state: RootState) => state.user);
    const callConfig = useSelector((state: RootState) => state.twillio);
    const { staticImages } = constants.App;

    const { uid, calendarID, reason, id, expert, prepaid } = visit;
    const { credits, duration } = reason.sessionType;
    const data = {
        uid,
        id,
        expert,
        prepaid,
        credits,
    };

    let today = moment().local();
    let daysUntilVisit = Math.abs(
        moment.duration(today.diff(visit.time)).asDays(),
    );

    const sameDay = daysUntilVisit < 1;

    useEffect(() => {
        dispatch(setVisit(visit));
        checkPermissions();
    }, []);

    const checkPermissions = (callback?) => {
        const iosPermissions = [
            PERMISSIONS.IOS.CAMERA,
            PERMISSIONS.IOS.MICROPHONE,
        ];
        const androidPermissions = [
            PERMISSIONS.ANDROID.CAMERA,
            PERMISSIONS.ANDROID.RECORD_AUDIO,
        ];
        checkMultiple(
            Platform.OS === 'ios' ? iosPermissions : androidPermissions,
        ).then(statuses => {
            const [CAMERA, AUDIO] =
                Platform.OS === 'ios' ? iosPermissions : androidPermissions;
            if (
                statuses[CAMERA] === RESULTS.UNAVAILABLE ||
                statuses[AUDIO] === RESULTS.UNAVAILABLE
            ) {
                Alert.alert(
                    'Error',
                    'Hardware to support video calls is not available',
                );
            } else if (
                statuses[CAMERA] === RESULTS.BLOCKED ||
                statuses[AUDIO] === RESULTS.BLOCKED
            ) {
                Alert.alert(
                    'Error',
                    'Permission to access hardware was blocked, please grant manually',
                );
            } else {
                if (
                    statuses[CAMERA] === RESULTS.DENIED &&
                    statuses[AUDIO] === RESULTS.DENIED
                ) {
                    requestMultiple(
                        Platform.OS === 'ios'
                            ? iosPermissions
                            : androidPermissions,
                    ).then(newStatuses => {
                        if (
                            newStatuses[CAMERA] === RESULTS.GRANTED &&
                            newStatuses[AUDIO] === RESULTS.GRANTED
                        ) {
                            callback && callback();
                        } else {
                            Alert.alert(
                                'Error',
                                'One of the permissions was not granted',
                            );
                        }
                    });
                } else if (
                    statuses[CAMERA] === RESULTS.DENIED ||
                    statuses[AUDIO] === RESULTS.DENIED
                ) {
                    request(
                        statuses[CAMERA] === RESULTS.DENIED ? CAMERA : AUDIO,
                    ).then(result => {
                        if (result === RESULTS.GRANTED) {
                            callback && callback();
                        } else {
                            Alert.alert('Error', 'Permission not granted');
                        }
                    });
                } else if (
                    statuses[CAMERA] === RESULTS.GRANTED ||
                    statuses[AUDIO] === RESULTS.GRANTED
                ) {
                    callback && callback();
                }
            }
        });
    };

    const handleSameDay = () =>
        dispatch(
            showOrHideModal(
                'Appointments can not be cancelled or rescheduled if your appointment is within 24 hours.',
            ),
        );

    const handleEndLoad = () => {
        setLoading(false);
    };

    const handleReschedule = () => {
        navigation.navigate('RescheduleVisit', {
            visit,
            date,
            navigation,
            uid,
            calendarID,
        });
    };

    const handleVisitStart = () => {
        dispatch(
            setCallConfig({
                ...callConfig,
                userName: uid,
                roomName: uid,
            }),
        );
        checkPermissions(() => {
            dispatch(getCallToken({ navigation, uid }));
        });
    };

    const VisitTime = () => {
        return (
            <View style={styles.appointment}>
                <Text options={'xxlarge white pad_h'}>
                    {moment(date.date).format('llll')}
                </Text>
            </View>
        );
    };

    const ExpertDetails = () => {
        return (
            <View style={styles.expertContainer}>
                <View style={styles.expertImageContainer}>
                    <FastImage
                        onLoadEnd={handleEndLoad}
                        style={styles.expertImage}
                        resizeMode={'contain'}
                        source={
                            loading
                                ? staticImages.profilePlaceholderImg
                                : {
                                      uri: visit.expert.imageUrl,
                                      priority: FastImage.priority.normal,
                                  }
                        }
                    />
                </View>
                <View style={{ width: '100%', marginTop: 15 }}>
                    <View style={styles.expertName}>
                        <Text options={'xLarge'}>
                            {`${visit.expert.firstName} ${visit.expert.lastName}`}
                        </Text>
                    </View>
                    <View style={styles.expertProfession}>
                        <CustomText style={styles.expertProfessionTextStyle}>
                            {visit.expert.profession}
                        </CustomText>
                    </View>
                </View>
            </View>
        );
    };

    const ModifyVisit = () => {
        return (
            <View style={styles.appointmentModify}>
                <CustomButton
                    buttonStyle={styles.appointmentButtonContainer}
                    textStyle={styles.appointmentButtonText}
                    onPress={() =>
                        sameDay
                            ? handleSameDay()
                            : dispatch(cancelAppointment(data))
                    }
                    text="Cancel"
                />
                <CustomButton
                    buttonStyle={styles.appointmentButtonContainer}
                    textStyle={styles.appointmentButtonText}
                    onPress={() =>
                        sameDay ? handleSameDay() : handleReschedule()
                    }
                    text="Reschedule"
                />
            </View>
        );
    };

    const VisitDetails = () => {
        return (
            <>
                <Row options={'pad_h'}>
                    <CameraBlack />
                    <Text options={'pad_h large'}>
                        <Bold>30 min. Virtual Visit</Bold>
                    </Text>
                </Row>

                <Text options={'pad_h sm_pad_v large light'}>
                    {`Your visit should be starting\n${
                        daysUntilVisit > 0
                            ? `in ${Math.round(daysUntilVisit)} days.`
                            : 'today.'
                    } Please return to this screen and enter the waiting room at least 5 minutes before your appointment time.`}
                </Text>
            </>
        );
    };

    const Disclaimer = () => (
        <Row options={'pad_h'}>
            <CheckBox
                styles={{
                    root: {
                        alignItems: 'flex-start',
                        marginLeft: 15,
                    },
                }}
                key={'Certified'}
                onPress={() => setChecked(!checked)}
                checked={checked}
            />
            <Text options={'blue large light pad_r'}>
                {`I certify that I am currently in the state of ${user.data.profileInfo.state.value} and that this consultation will be conducted while within state boundaries.`}
            </Text>
        </Row>
    );

    return (
        <View style={styles.appointmentContainer}>
            {VisitTime()}
            {ExpertDetails()}
            {ModifyVisit()}
            {VisitDetails()}
            <Line />
            {Disclaimer()}
            <CustomButton
                disabled={!checked}
                buttonStyle={
                    checked ? styles.active : [styles.active, styles.disabled]
                }
                textStyle={styles.activeText}
                onPress={handleVisitStart}
                text="Begin Visit"
            />
        </View>
    );
};

export default Appointment;
