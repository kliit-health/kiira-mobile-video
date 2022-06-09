import React from 'react';
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Button } from '~/components';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { screenNames } from '~/utils/constants';
import { setAppointmentDetails } from '~/redux/reducers/appointments';
import styles, { buttonStyles } from './styles';

const Schedule = ({ navigation }) => {
  const dispatch = useDispatch();
  const lang = useSelector(state => state.language.schedule, shallowEqual);

  const handleSchedule = () => {
    dispatch(
      setAppointmentDetails({
        reason: 'Health & Wellness Assessment',
        details: {
          appointmentType: '24164653',
          appointmentTypeID: '24164653',
          credits: 0,
          duration: 15,
          price: 0,
          title: 'Health Assessment',
        },
      }),
    );

    navigation.navigate(screenNames.SelectProvider);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.description}>{lang.schedule}</Text>
      <Button
        style={buttonStyles}
        onPress={handleSchedule}
        title={lang.letsDoIt}
      />
    </View>
  );
};

export default withNavigation(Schedule);
