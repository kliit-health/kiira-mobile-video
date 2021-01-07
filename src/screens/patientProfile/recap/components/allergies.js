import React from 'react';
import {View, Text} from 'react-native';
import CheckItem from './common/checkItem';

import styles from '../style';

const Allergies = ({allergies}) => {
  return (
    <View>
      <View style={styles.heading}>
        <Text style={styles.title}>Allergies</Text>
      </View>
      <CheckItem
        key="Allergic"
        checked={allergies.allergic}
        title="Has allergies"
        notes={allergies.notes}
      />
    </View>
  );
};

export default Allergies;
