import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import { bookAppointment, selectAssessment } from '~/redux/reducers/assessment';

import styles from '../styles';

type ConfirmButtonProps = {
    day: string;
    time: string;
};

const ConfirmButton = ({ day, time }: ConfirmButtonProps): JSX.Element => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.data);

    const {
        details: { calendarID, appointmentType },
    } = useSelector(selectAssessment);

    const data = {
        firstName: user.profileInfo.firstName,
        lastName: user.profileInfo.lastName,
        email: user.profileInfo.email,
        calendarID,
        time,
        reason: 'Health Assessment',
        prescription: false,
        appointmentType,
        uid: user.uid,
        prepaid: false,
        insurance: user.profileInfo.insurance,
        plan: user.profileInfo.insurancePlan,
        complete: false,
        profile: user.profileInfo.profileImageUrl,
        pronouns: user.profileInfo.pronouns,
        phoneNumber: user.profileInfo.phoneNumber,
        dob: user.profileInfo.dob,
        gender: user.profileInfo.gender,
        organizationId: user.organizationId,
        expert: {
            firstName: 'Nick',
            lastName: 'Riviera',
            profession: 'GP',
            imageUrl:
                'https://firebasestorage.googleapis.com/v0/b/kliit-health-dev.appspot.com/o/Kiira%2Fnick.jpeg?alt=media&token=a099e504-f231-4007-99a1-a995452d1ae1',
            rating: 5,
            uid: 'uY0A6EUv2ehuLuJk5qaFsymOWBs2',
        },
    };

    return (
        <View style={styles.confirmContainer}>
            <TouchableOpacity
                onPress={() => dispatch(bookAppointment(data))}
                style={
                    day && time
                        ? styles.confirmButtonSelected
                        : styles.confirmButton
                }
            >
                <Text
                    style={
                        day && time
                            ? styles.confirmButtonSelectedText
                            : styles.confirmButtonText
                    }
                >
                    {'Confirm'}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default ConfirmButton;
