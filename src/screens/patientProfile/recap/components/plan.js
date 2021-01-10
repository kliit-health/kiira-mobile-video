import React from 'react';
import {View, Text} from 'react-native';

import styles from '../style';

const Plan = ({plan}) => {
  return (
    <View>
      <View style={styles.heading}>
        <Text style={styles.title}>Assessment / Plan</Text>
      </View>
      <Text style={styles.notes}>{plan.notes || 'None'}</Text>
    </View>
  );
};

export default Plan;
