import React from 'react';
import {useSelector} from 'react-redux';
import {Text, View} from 'react-native';
import {TextButton} from '~/components';
import Image from 'react-native-fast-image';
import {icons, screenNames} from '~/utils/constants';

import styles from './styles';

export default ({onRequestAssistence, onRejectAssistence}) => {
  const lang = useSelector((state) => state.language);

  const handleRequestAssistence = () => {
    onRequestAssistence(screenNames.treatmentBot);
  };

  return (
    <View style={styles.bot.mainContainer}>
      <Image
        resizeMode="contain"
        style={styles.bot.logoImage}
        source={icons.kiiraLogo}
      />
      <View style={styles.bot.contentContainer}>
        <Text style={styles.bot.messageText}>{lang.dashboard.kiira}</Text>
        <View style={styles.bot.messageContainer}>
          <Text style={styles.bot.messageText}>{lang.dashboard.bot}</Text>
        </View>
        <TextButton
          onPress={onRejectAssistence}
          styles={styles.button}
          outlined>
          {lang.dashboard.notFeelingSick}
        </TextButton>
        <TextButton onPress={handleRequestAssistence} outlined>
          {lang.dashboard.nowMention}
        </TextButton>
      </View>
    </View>
  );
};
