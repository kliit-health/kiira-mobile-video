import React from 'react';
import { Screen, Text } from '~/components';
import { h2, default as globalStyles } from '~/components/styles';
import {Image} from 'react-native';
import styles from '../styles';
import { images } from '~/utils/constants';

 const None = () => {
    return (
        <Screen options={[globalStyles.white_bg, globalStyles.justify_c]} >
            <Image
                style={styles.image}
                resizeMode="contain"
                source={images.penguin}
            />
            <Text options={[h2, globalStyles.center]}>
                {'You have no open chats'}
            </Text>
        </Screen>
    );
};
export default None;