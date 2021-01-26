import React from 'react';
import {View, Text} from 'react-native';

import styles from '../style';

const Physical = ({physical}) => {
  return (
    <View>
      <View style={styles.heading}>
        <Text style={styles.title}>Physical Exam</Text>
      </View>
      <Text style={styles.notes}>{physical.notes || 'None'}</Text>
    </View>
  );
};

export default Physical;
