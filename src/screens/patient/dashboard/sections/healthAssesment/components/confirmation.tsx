import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import FastImage from 'react-native-fast-image';
import { withNavigation } from 'react-navigation';

import moment from 'moment';
import Constants from '~/utils/constants';

import styles from '../styles';

const { screenNames } = Constants.App;

const Confirmation = ({ navigation }) => {
    const { assessment } = useSelector(state => state.user.data);

    return (
        <View style={styles.showSheduleContainer}>
            <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
                <Text style={styles.heading}>
                    You are all set for your free 15 minute assessment!
                </Text>
                <FastImage
                    style={styles.expertImage}
                    source={{
                        uri:
                            'https://firebasestorage.googleapis.com/v0/b/kliit-health-app.appspot.com/o/Kliit%2F158453698551228C511E5-726E-4A6A-B48F-5789FB54A554.jpg?alt=media&token=0e896a21-1c3e-4fb8-b401-a3724d60339b',
                    }}
                />
                <Text style={styles.expertTitle}>Dr. Candice Fraser</Text>
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
                        Should you need to cancel, please do so at least 24
                        hours in advance.
                    </Text>
                    <Text style={styles.assessmentText}>
                        Please fill out your health history prior to the
                        session.
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate(screenNames.HealthHistory)
                        }
                        style={styles.fillOutButton}
                    >
                        <Text style={styles.fillOutButtonText}>
                            {'Fill out Health Intake'}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('BottomTab')}
                        style={styles.doneButton}
                    >
                        <Text style={styles.doneButtonText}>{'Done'}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default withNavigation(Confirmation);
