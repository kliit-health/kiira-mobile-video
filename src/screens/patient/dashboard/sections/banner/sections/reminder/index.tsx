import React from 'react';
import moment from 'moment';
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import { shallowEqual, useSelector } from 'react-redux';
import { Button } from '~/components';
import { route } from '~/utils/constants';
import styles, { buttonStyles } from './styles';

const Reminder = ({ navigation }) => {
  const lang = useSelector(state => state.language.reminder, shallowEqual);
  const assessment = useSelector(state => state.user.data.assessment);

  const handleView = () => {
    navigation.navigate(route.appointments);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.description}>{lang.nexAppointment}</Text>
      <View style={styles.appointment}>
        {assessment && (
          <Text style={styles.time}>
            {moment(assessment.time).format('llll')}
          </Text>
        )}
        <Button style={buttonStyles} onPress={handleView} title={lang.view} />
      </View>
    </View>
  );
};

export default withNavigation(Reminder);
