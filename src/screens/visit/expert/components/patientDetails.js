import React from 'react';
import {View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import Constant from '../../../../utils/constants';
import moment from 'moment';
import styles from '../styles';

const staticImages = Constant.App;

const PatientDetails = ({visit, patientInfo}) => {
  const {
    profileInfo: {firstName, lastName, pronouns},
  } = patientInfo;

  return (
    <View style={{marginTop: 10}}>
      <View style={styles.patientImageContainer}>
        <FastImage
          style={styles.patientImage}
          defaultSource={staticImages.profilePlaceholderImg}
          source={{uri: patientInfo.profileInfo.profileImageUrl}}
          activeOpacity={0.7}
        />
      </View>
      <View style={styles.parentContainerStyle}>
        <Text
          style={styles.name}>{`${firstName} ${lastName} (${pronouns})`}</Text>
        <Text style={styles.reason}>Chief Complaint: </Text>
        <Text style={styles.reason}>{`${visit.reason}`}</Text>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>
            {moment(visit.time).format('llll')}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PatientDetails;
