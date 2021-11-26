import React from 'react';
import { View, Text } from 'react-native';
import FastImage from 'react-native-fast-image'; 
import styles from './style'; 

const PatientCard = ({ visit, patientInfo }) => {
    const defaultImage = require('../../../../../../../assets/profile_img_placeholder.png')
    return (
        <View style={styles.profileContainer}>
            <FastImage  
                resizeMode='center'
                style={[styles.profileImage, {opacity: 0.7}]}
                source={{
                    uri: patientInfo && visit && visit.profile ? visit.profile : defaultImage,
                }} 
            />
            <View>
                <Text style={styles.name}>
                    {`${visit.firstName} ${visit.lastName}`}
                </Text>
                <Text style={styles.reason}>Chief Complaint:</Text>
                <Text style={styles.reason}>{`${visit.reason ? visit.reason.reason: ""}`}</Text>
            </View>
        </View>
    );
};

export default PatientCard;
