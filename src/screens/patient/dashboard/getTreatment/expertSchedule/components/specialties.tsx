import React from 'react';
import {useSelector} from 'react-redux';
import {View} from 'react-native';
import CustomText from '~/components/customText';
import styles from '../style';

const Specialties = ({expertData}) => {
  const lang = useSelector((state) => state.language);

  return (
    <View style={styles.bioContainerStyle}>
      <CustomText style={styles.bioTitleTextStyle}>
        {lang.expertProfile.specialties}
      </CustomText>
      <CustomText style={styles.bioTextStyle}>
        {expertData.profileInfo.profession.specialities.map(
          (item, key) => `${item}    `,
        )}
      </CustomText>
    </View>
  );
};

export default Specialties;
