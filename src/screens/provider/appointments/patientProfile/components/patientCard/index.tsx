import React from 'react';
import { View, Text } from 'react-native';
import FastImage from 'react-native-fast-image'; 
import Constant from '~/utils/constants';
import styles from './style'; 

const PatientCard = ({ visit, patientInfo }) => {
    const { staticImages } = Constant.App;

    return (
        <View style={styles.profileContainer}>
            <FastImage  
                resizeMode='cover'
                style={[styles.profileImage, {opacity: 0.7}]}
                source={
                    patientInfo && visit && visit.profile ? {uri:  visit.profile} : staticImages.profilePlaceholderImg
                } 
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
