import React from 'react';
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import FastImage from 'react-native-fast-image';
import moment from 'moment';
import styles from '../styles';

const PatientDetails = ({ navigation }) => {
  const { visit } = navigation.state.params;
  const { firstName, lastName, profile, reason } = visit;
  const chiefComplaint = typeof reason === 'string' ? reason : reason.reason;

  return (
    <View style={styles.expertInfoParentContainerStyle}>
      <View style={styles.expertImageContainer}>
        <FastImage
          style={styles.expertImage}
          resizeMode="cover"
          source={{ uri: profile }}
          activeOpacity={0.7}
        />
        <View>
          <View style={styles.myRecentExpertContainerStyle}>
            <View style={styles.expertName}>
              <Text style={styles.expertNameTextStyle}>
                {`${firstName} ${lastName}`}
              </Text>
            </View>
            <View style={styles.expertProfession}>
              <Text style={styles.expertProfessionTextStyle}>
                Chief Complaint:
              </Text>
            </View>
            <View style={styles.expertProfession}>
              <Text style={styles.expertProfessionTextStyle}>
                {chiefComplaint}
              </Text>
            </View>
            <View style={{ marginTop: 5 }}>
              <Text style={styles.expertProfessionTextStyle}>
                {moment(visit.time).format('llll')}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default withNavigation(PatientDetails);
