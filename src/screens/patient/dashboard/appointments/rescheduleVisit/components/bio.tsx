import React from 'react';
import {useSelector} from 'react-redux';
import {View} from 'react-native';
import CustomText from '../../../../../../components/customText';
import styles from '../style';

const Bio = ({expertData}) => {
  const lang = useSelector((state) => state.language);

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
