import React from 'react';
import {View, Text} from 'react-native';
import CheckItem from './common/checkItem';
import {convertCamelCase} from '../../../../utils/helper';

import styles from '../style';

const PMH = ({pmh}) => {
  return (
    <View>
      <View style={styles.heading}>
        <Text style={styles.title}>Past Medical History</Text>
      </View>
      <Text style={styles.subheading}>Health Issues</Text>
      {Object.keys(pmh.disease).map((key) => {
        return (
          <CheckItem
            key={key}
            checked={pmh.disease[key]}
            title={convertCamelCase(key)}
          />
        );
      })}
      <CheckItem
        key="PMH Cancer History"
        checked={pmh.cancer.history}
        title="Cancer history"
        notes={pmh.cancer.notes}
      />
    </View>
  );
};

export default PMH;
