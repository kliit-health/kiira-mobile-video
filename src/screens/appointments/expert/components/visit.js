import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import moment from 'moment';
import {TimeDisplay} from '../../../../components';
import intl from '../../../../utils/localization';
import styles from './styles';

const Visit = (props) => {
  const {firstName, lastName, reason, time, onPress} = props;

  const handlePress = () => {
    if (onPress) {
      onPress(props);
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.card}
      onPress={handlePress}>
      <View style={styles.outerContainer}>
        <View>
          <Text style={styles.title}>
            {intl.en.expertAppointments.patientName}
          </Text>
          <Text style={styles.subtitle}>{`${firstName} ${lastName}`}</Text>
        </View>
        <View style={styles.innerContainer}>
          <Text numberOfLines={1} style={styles.title}>
            {intl.en.expertAppointments.subject}
          </Text>
          <Text numberOfLines={1} style={styles.subtitle}>
            {reason}
          </Text>
        </View>
      </View>
      <TimeDisplay time={moment(time).format('hh:mm A')} />
    </TouchableOpacity>
  );
};

export default Visit;
