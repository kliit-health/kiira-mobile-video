import React from 'react';
import {View, Text} from 'react-native';
import {CheckBox} from 'react-native-elements';

import styles from '../style';

const Surgical = ({surgical}) => {
  return (
    <View>
      <View style={styles.heading}>
        <Text style={styles.title}>Surgical History</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <CheckBox
          center
          key={'Surgical'}
          checkedIcon="check"
          uncheckedIcon="square-o"
          checked={surgical.surgeries}
        />
        <Text>{`Had surgery`}</Text>
      </View>
      {surgical.surgeries && (
        <Text style={styles.notes}>{`Notes: ${surgical.notes}`}</Text>
      )}
    </View>
  );
};

export default Surgical;
