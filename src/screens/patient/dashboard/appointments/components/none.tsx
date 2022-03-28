import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '~/redux/reducers';
import { Column, TextButton } from '~/components';
import { Image, Platform, Text } from 'react-native';
import { handleNavigation } from '~/utils/functions';
import { images, screenNames } from '~/utils/constants';
import styles from '../style';
import { default as globalStyles } from '~/components/styles';

const { pad_h, blue_bg, space_between } = globalStyles;

export const None = ({pastSelected}) => {
    const lang = useSelector((state: RootState) => state.language);
 
    return (
        <Column options={[blue_bg, pad_h, space_between]}>
            <Image
                style={styles.image}
                resizeMode="contain"
                source={images.penguin}
            />
            <Text style={styles.title}>{pastSelected ? lang.appointments.noPastVisits : lang.appointments.noVisits}</Text>
            <TextButton
                styles={Platform.OS == 'android' ? { root: { marginTop: 'auto',marginBottom:'3%' } }: { root: { marginTop: 'auto'} }}
                onPress={() => handleNavigation(screenNames.Book)}
            >
                {lang.appointments.scheduleAppointment}
            </TextButton>
        </Column>
    );
};
