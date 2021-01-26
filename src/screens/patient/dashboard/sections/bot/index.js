import React from 'react';
import {Text, View} from 'react-native';
import {TextButton} from '../../../../../components';
import Image from 'react-native-fast-image';
import {icons, screenNames} from '../../../../../utils/constants';
import intl from '../../../../../utils/localization';

import styles from './styles';

export default ({onRequestAssistence, onRejectAssistence}) => {
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
        <Text style={styles.bot.messageText}>{intl.en.dashboard.kiira}</Text>
        <View style={styles.bot.messageContainer}>
          <Text style={styles.bot.messageText}>{intl.en.dashboard.bot}</Text>
        </View>
        <TextButton
          onPress={onRejectAssistence}
          styles={styles.button}
          outlined>
          {intl.en.dashboard.notFeelingSick}
        </TextButton>
        <TextButton onPress={handleRequestAssistence} outlined>
          {intl.en.dashboard.nowMention}
        </TextButton>
      </View>
    </View>
  );
};
