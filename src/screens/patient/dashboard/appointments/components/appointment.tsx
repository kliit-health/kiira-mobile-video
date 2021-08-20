import React, { useState } from 'react';
import { View } from 'react-native';
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
import { cancelAppointment } from '~/redux/reducers/appointments';
import constants from '~/utils/constants';
import moment from 'moment';
import { Camera } from '~/svgs';

const Appointment = ({ visit, date, navigation }) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [checked, setChecked] = useState(false);
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
        navigation.navigate('Visit', {
            uid: visit.expert.uid,
            visit,
        });
    };

    const VisitTime = () => {
        return (
            <View style={styles.appointment}>
                <Text options={'xxlarge white horizontalPad'}>
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
                        <Text options={'large'}>
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
                <Row options={'horizontalPad'}>
                    <Camera />
                    <Text options={'horizontalPad large'}>
                        <Bold>30 min. Virtual Visit</Bold>
                    </Text>
                </Row>

                <Text options={'horizontalPad verticalPad large'}>
                    Your visit should be starting in <Bold>15 minutes. </Bold>
                    Please return to this screen and enter the waiting room at
                    least 5 minutes before your appointment time.
                </Text>
            </>
        );
    };

    const Disclaimer = () => (
        <Row options={'horizontalPad'}>
            <CheckBox
                styles={{ root: { alignItems: 'flex-start', marginLeft: 15 } }}
                key={'Certified'}
                onPress={() => setChecked(!checked)}
                checked={checked}
            />
            <Text options={'blue large'}>
                I certify that I am currently in the state of California and
                that this consultation will be conducted while within state
                boundaries.
            </Text>
        </Row>
    );

    return (
        <View style={styles.appointmentContainer}>
            {VisitTime()}
            {ExpertDetails()}
            {ModifyVisit()}
            <Line />
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
