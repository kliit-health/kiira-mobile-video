import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withNavigation } from 'react-navigation';
import moment from 'moment';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import Constants from '~/utils/constants';

import { toogleModal } from '~/redux/reducers/assessment';

import styles from '../styles';

const { screenNames } = Constants.App;

const Confirmation = ({ navigation }) => {
    const dispatch = useDispatch();
    const { assessment } = useSelector(state => state.user.data);

    return (
        <View style={styles.showSheduleContainer}>
            <Text style={styles.heading}>
                You are all set for your free 15 minute assessment!
            </Text>
            <Image
                style={styles.expertImage}
                source={{
                    uri:
                        'https://firebasestorage.googleapis.com/v0/b/kliit-health-dev.appspot.com/o/Kiira%2Fnick.jpeg?alt=media&token=a099e504-f231-4007-99a1-a995452d1ae1',
                }}
            />
            <Text style={styles.expertTitle}>Dr. Nick Riveria</Text>
            <Text style={styles.assessmentDate}>
                {moment(assessment.time).format('llll')}
            </Text>
            <View>
                <Text style={styles.assessmentText}>
                    Please tap the appointments button on the dashboard 5
                    minutes before your visit in order to start your
                    appointment.
                </Text>
                <Text style={styles.assessmentText}>
                    Should you need to cancel, please do so at least 24 hours in
                    advance.
                </Text>
                <Text style={styles.assessmentText}>
                    Please fill out your health history prior to the session.
                </Text>
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate(screenNames.HealthHistory)}
                style={styles.fillOutButton}
            >
                <Text style={styles.fillOutButtonText}>
                    {'Fill out Health Intake'}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => dispatch(toogleModal())}
                style={styles.doneButton}
            >
                <Text style={styles.doneButtonText}>{'Done'}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default withNavigation(Confirmation);
