import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '~/redux/reducers';
import { Column, TextButton } from '~/components';
import { Image, Platform, Text } from 'react-native';
import { handleNavigation } from '~/utils/functions';
import { images, screenNames } from '~/utils/constants';
import styles from '../style';
import { default as globalStyles } from '~/components/styles';

export const None = () => {
    const lang = useSelector((state: RootState) => state.language);

    return (
        <Column options={[globalStyles.blue_bg, globalStyles.pad_h, globalStyles.space_between]}>
            <Image
                style={styles.image}
                resizeMode="contain"
                source={images.penguin}
            />
            <Text style={styles.title}>{lang.appointments.noVisits}</Text>
            <TextButton
                styles={Platform.OS == 'android' ? { root: { marginTop: 'auto',marginBottom:'3%' } }: { root: { marginTop: 'auto'} }}
                onPress={() => handleNavigation(screenNames.Book)}
            >
                {lang.appointments.scheduleAppointment}
            </TextButton>
        </Column>
    );
};
