import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '~/redux/reducers';
import { View } from 'react-native';
import CustomText from '~/components/customText';
import styles from '../style';

const Hours = ({ expertData }) => {
    const lang = useSelector((state: RootState) => state.language);

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
