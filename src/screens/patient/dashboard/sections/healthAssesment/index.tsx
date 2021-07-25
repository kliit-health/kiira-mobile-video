import React from 'react';
import { View } from 'react-native';
import { Conditional } from '~/components';
import { useSelector } from 'react-redux';
import moment from 'moment';

import NewUser from './components/newUser';
import Complete from './components/visitComplete';
import Pending from './components/visitPending';

import styles from './styles';

const HealthAssessment = () => {
  const { assessment } = useSelector(state => state.user.data);

  const notScheduled = assessment === undefined || assessment === null;
  const scheduled = assessment && assessment.complete === false;

  const now = moment(new Date());
  const appointment = !notScheduled && moment(assessment.time);
  const daysUntilVisit = moment.duration(now.diff(appointment)).asMinutes();
  const completed = daysUntilVisit >= 0.25;

  return (
    <View style={styles.container}>
      <Conditional if={notScheduled}>
        <NewUser />
      </Conditional>
      <Conditional if={scheduled && !completed}>
        <Pending />
      </Conditional>
      <Conditional if={completed}>
        <Complete />
      </Conditional>
    </View>
  );
};

export default HealthAssessment;
