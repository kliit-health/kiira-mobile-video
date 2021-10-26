import React from 'react';
import { View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';

import styles from './style';

const PatientCard = ({ visit, patientInfo }) => {
  const { firstName, lastName, reason, profile } = visit;
  const chiefComplaint = typeof reason === 'string' ? reason : reason.reason;

  return (
    <View style={styles.profileContainer}>
      <FastImage
        defaultSource={require('../../../../../../../assets/profile_img_placeholder.png')}
        containerStyle={{ alignSelf: 'center' }}
        style={styles.profileImage}
        source={{
          uri: patientInfo ? profile : '',
        }}
        activeOpacity={0.7}
      />
      <View>
        <Text style={styles.name}>{`${firstName} ${lastName}`}</Text>
        <Text style={styles.reason}>Chief Complaint:</Text>
        <Text style={styles.reason}>{`${chiefComplaint}`}</Text>
      </View>
    </View>
  );
};

export default PatientCard;
