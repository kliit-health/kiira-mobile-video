import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import { bookAppointment, selectAssessment } from '~/redux/reducers/assessment';

import styles from './styles';

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
            firstName: 'Candice',
            lastName: 'Fraser',
            profession: 'OBGYN',
            imageUrl:
                'https://firebasestorage.googleapis.com/v0/b/kliit-health-app.appspot.com/o/Kliit%2F158453698551228C511E5-726E-4A6A-B48F-5789FB54A554.jpg?alt=media&token=0e896a21-1c3e-4fb8-b401-a3724d60339b',
            rating: 10,
            uid: '5VTy6Z1Q3XXAF1UP6POtcYwDojk1',
        },
    };

    return (
        <View style={styles.confirmContainer}>
            <TouchableOpacity
                disabled={!day || !time}
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
