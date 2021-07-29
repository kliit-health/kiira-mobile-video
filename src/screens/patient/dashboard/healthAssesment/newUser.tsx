import React from 'react';
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Button } from '~/components';
import { newUser } from './models';
import styles from './styles';

const NewUser = ({ navigation }) => {
  const handleNavigation = () => {
    navigation.navigate('HealthAssessmentSchedule');
  };

  return (
    <View style={styles.newUser}>
      <Text style={styles.title}>{newUser.title}</Text>
      <Button text={newUser.button} onPress={handleNavigation} />
    </View>
  );
};

export default withNavigation(NewUser);
