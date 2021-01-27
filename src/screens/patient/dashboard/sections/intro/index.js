import React from 'react';
import {useSelector} from 'react-redux';
import {Text, View} from 'react-native';
import {Avatar} from '../../../../../components';
import styles from './styles';

export default ({displayName, profileImageUrl}) => {
  const lang = useSelector((state) => state.language);

  return (
    <View style={styles.container}>
      <Text
        style={
          styles.title
        }>{`${lang.dashboard.helloName}${displayName}!`}</Text>
      <Avatar size="small" source={profileImageUrl} />
    </View>
  );
};
