import React from 'react';
import {View} from 'react-native';
import CustomText from '../../../../../../components/customText';
import Language from '../../../../../../utils/localization';
import styles from '../style';

const lang = Language['en'];

const Hours = ({expertData}) => {
  return (
    <View style={styles.hoursContainerStyle}>
      <CustomText style={styles.bioTitleTextStyle}>
        {lang.expertProfile.hours}
      </CustomText>
      <CustomText style={styles.bioTextStyle}>
        {expertData.clinicInfo.hours.map((item, key) =>
          item.startTime && item.endTime
            ? `${item.day}: ${item.startTime} - ${item.endTime}\n\n`
            : `${item.day}: ${lang.expertProfile.closed}\n\n`,
        )}
      </CustomText>
    </View>
  );
};

export default Hours;
