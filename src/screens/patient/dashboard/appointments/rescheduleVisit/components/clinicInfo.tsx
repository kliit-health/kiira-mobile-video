import React from 'react';
import {useSelector} from 'react-redux';
import {View, TouchableOpacity, Platform, Linking} from 'react-native';
import CustomText from '~/components/customText';
import styles from '../style';

const ClinicInfo = ({expertData}) => {
  const lang = useSelector((state) => state.language);

  return (
    <View style={styles.bioContainerStyle}>
      <CustomText style={styles.bioTitleTextStyle}>
        {lang.expertProfile.clinicInfo}
      </CustomText>
      <CustomText style={styles.bioTextStyleBold}>
        {`${expertData.clinicInfo.name}`}
      </CustomText>
      <CustomText style={styles.bioTextStyle}>
        {`${expertData.clinicInfo.address}\n\n${expertData.clinicInfo.city}, ${expertData.clinicInfo.state.value} ${expertData.clinicInfo.zipcode}\n`}
      </CustomText>
      <TouchableOpacity
        onPress={() => {
          Platform.OS === 'android'
            ? Linking.openURL('tel:' + expertData.clinicInfo.phoneNumber)
            : Linking.openURL('telprompt:' + expertData.clinicInfo.phoneNumber);
        }}>
        <CustomText style={styles.phoneNumberTextStyleBold}>
          {`${expertData.clinicInfo.phoneNumber}`}
        </CustomText>
      </TouchableOpacity>
    </View>
  );
};

export default ClinicInfo;
