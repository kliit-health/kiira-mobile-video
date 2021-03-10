import React from 'react';
import {View, Text} from 'react-native';
import CheckItem from './common/checkItem';
import {convertCamelCase} from '../../../../../../utils/helper';

import styles from '../style';

const Family = ({family}) => {
  let sorted = Object.keys(family.illnesses).sort();

  return (
    <View>
      <View style={styles.heading}>
        <Text style={styles.title}>Family Medical History</Text>
      </View>
      <Text style={styles.subheading}>Health Issues</Text>
      {sorted.map((key) => {
        return (
          <CheckItem
            key={key}
            checked={family.illnesses[key]}
            title={convertCamelCase(key)}
          />
        );
      })}
      <CheckItem
        key="Cancer History"
        checked={family.cancer.history}
        title="Cancer history"
        notes={family.cancer.notes}
      />
      <View>
        <Text style={styles.subheading}>Diseases / Syndromes</Text>
        <Text style={styles.notes}>{family.rareDisease.notes || 'None'}</Text>
      </View>
    </View>
  );
};

export default Family;
