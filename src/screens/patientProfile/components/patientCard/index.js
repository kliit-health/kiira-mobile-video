import React from 'react';
import {View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';

import styles from './style';

const PatientCard = ({visit, patientInfo}) => {
  return (
    <View style={styles.profileContainer}>
      <FastImage
        defaultSource={require('../../../../../assets/profile_img_placeholder.png')}
        containerStyle={{alignSelf: 'center'}}
        style={styles.profileImage}
        source={{uri: patientInfo.profileInfo.profileImageUrl}}
        activeOpacity={0.7}
      />
      <View>
        <Text style={styles.name}>
          {`${visit.firstName} ${visit.lastName}`}
        </Text>
        <Text style={styles.reason}>Chief Complaint:</Text>
        <Text style={styles.reason}>{`${visit.reason}`}</Text>
      </View>
    </View>
  );
};

export default PatientCard;
