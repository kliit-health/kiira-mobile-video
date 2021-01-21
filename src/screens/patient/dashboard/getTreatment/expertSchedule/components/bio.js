import React from 'react';
import {View} from 'react-native';
import CustomText from '../../../../../../components/customText';
import Language from '../../../../../../utils/localization';
import styles from '../style';

const lang = Language['en'];

const Bio = ({expertData}) => {
  return (
    <View style={styles.bioContainerStyle}>
      <CustomText style={styles.bioTitleTextStyle}>
        {lang.expertProfile.bio}
      </CustomText>
      <CustomText style={styles.bioTextStyle}>
        {expertData.profileInfo.bio}
      </CustomText>
    </View>
  );
};

export default Bio;
