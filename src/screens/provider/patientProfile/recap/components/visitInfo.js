import React, {Fragment} from 'react';
import {View, Text} from 'react-native';
import moment from 'moment';

import styles from '../style';

const VisitInfo = ({visit, lockTime}) => {
  return (
    <Fragment>
      <View style={styles.heading}>
        <Text style={styles.title}>Visit Information</Text>
      </View>
      <Text
        style={
          styles.info
        }>{`Patient: ${visit.firstName} ${visit.lastName}`}</Text>
      <Text style={styles.info}>{`Date & Time ${moment(visit.time).format(
        'llll',
      )}`}</Text>
      <Text
        style={
          styles.info
        }>{`Provider: ${visit.expert.firstName} ${visit.expert.lastName}`}</Text>
      {lockTime && (
        <Text style={styles.info}>{`Record locked: ${moment
          .unix(lockTime.seconds)
          .format('llll')}`}</Text>
      )}
      <View style={styles.heading}>
        <Text style={styles.title}>Chief Complaint</Text>
      </View>
      <Text style={styles.info}>{visit.reason}</Text>
    </Fragment>
  );
};

export default VisitInfo;
