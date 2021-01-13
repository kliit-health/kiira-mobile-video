import React from 'react';
import {View, Text, Image} from 'react-native';
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
    <View style={styles.expertInfoParentContainerStyle}>
      <View style={styles.expertImageContainer}>
        <Image
          style={styles.expertImage}
          defaultSource={staticImages.profilePlaceholderImg}
          resizeMode="cover"
          source={
            patientInfo.profileInfo.profileImageUrl
              ? {
                  uri: patientInfo.profileInfo.profileImageUrl,
                }
              : staticImages.profilePlaceholderImg
          }
          activeOpacity={0.7}
        />
        <View>
          <View style={styles.myRecentExpertContainerStyle}>
            <View style={styles.expertName}>
              <Text style={styles.expertNameTextStyle}>
                {`${firstName} ${lastName} (${pronouns})`}
              </Text>
            </View>
            <View style={styles.expertProfession}>
              <Text style={styles.expertProfessionTextStyle}>
                Chief Complaint:
              </Text>
            </View>
            <View style={styles.expertProfession}>
              <Text style={styles.expertProfessionTextStyle}>
                {visit.reason}
              </Text>
            </View>
            <View style={{marginTop: 5}}>
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

export default PatientDetails;
