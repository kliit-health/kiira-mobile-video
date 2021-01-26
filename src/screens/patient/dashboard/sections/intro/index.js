import React from 'react';
import {Text, View} from 'react-native';
import {Avatar} from '../../../../../components';
import intl from '../../../../../utils/localization';
import styles from './styles';

export default ({displayName, profileImageUrl}) => (
  <View style={styles.container}>
    <Text
      style={
        styles.title
      }>{`${intl.en.dashboard.helloName}${displayName}!`}</Text>
    <Avatar size="small" source={profileImageUrl} />
  </View>
);
