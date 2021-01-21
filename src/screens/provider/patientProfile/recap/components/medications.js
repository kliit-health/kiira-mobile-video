import React from 'react';
import {View, Text} from 'react-native';
import CheckItem from './common/checkItem';

import styles from '../style';

const Medications = ({medications}) => {
  return (
    <View>
      <View style={styles.heading}>
        <Text style={styles.title}>Medications</Text>
      </View>
      <CheckItem
        key="Medications"
        checked={medications.history}
        title="Taking Medication"
        notes={medications.notes}
      />
    </View>
  );
};

export default Medications;
