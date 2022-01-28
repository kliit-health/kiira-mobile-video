import React from 'react';
import {useSelector} from 'react-redux';
import {Text, View} from 'react-native';
import {Avatar} from '~/components';
import styles from './styles';

export default ({profileInfo}) => {
  const lang = useSelector((state) => state.language); 
  const {firstName, lastName, profileImageUrl} = profileInfo; 
  return (
    <View style={styles.container}>
      <Text
        style={
          styles.title
        }>{`${lang.dashboard.helloName}${firstName}!`}</Text>
      <Avatar size="small" source={profileImageUrl != null ? profileImageUrl : ''} />
    </View>
  );
};
