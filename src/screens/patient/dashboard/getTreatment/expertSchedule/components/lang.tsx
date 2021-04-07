import React from 'react';
import {useSelector} from 'react-redux';
import {View} from 'react-native';
import CustomText from 'components/customText';
import styles from '../style';

const Languages = ({expertData}) => {
  const lang = useSelector((state) => state.language);

  return (
    <View style={styles.bioContainerStyle}>
      <CustomText style={styles.bioTitleTextStyle}>
        {lang.expertProfile.languages}
      </CustomText>
      <CustomText style={styles.bioTextStyle}>
        {expertData.profileInfo.languages.map((item, key) => `${item.value}  `)}
      </CustomText>
    </View>
  );
};

export default Languages;
