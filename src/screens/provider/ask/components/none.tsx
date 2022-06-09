import React from 'react';
import { Screen, Text } from '~/components';
import { h2, default as globalStyles } from '~/components/styles';
import { Image } from 'react-native';
import styles from '../styles';
import { images } from '~/utils/constants';

const { white_bg, center, justify_c } = globalStyles;

const None = () => {
  return (
    <Screen options={[white_bg, justify_c]}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={images.penguin}
      />
      <Text options={[h2, center]}>{'You have no open chats'}</Text>
    </Screen>
  );
};
export default None;
