import React from 'react';
import {View, Text} from 'react-native';

import styles from '../style';

const Summary = ({summary}) => {
  return (
    <View>
      <View style={styles.heading}>
        <Text style={styles.title}>After Visit Summary</Text>
      </View>
      <Text style={styles.notes}>{summary.notes || 'None'}</Text>
    </View>
  );
};

export default Summary;
