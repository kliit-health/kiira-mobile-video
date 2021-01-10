import React from 'react';
import {View, Text} from 'react-native';
import {CheckBox} from 'react-native-elements';

import styles from '../style';

const Pregnancy = ({pregnancy}) => {
  return (
    <View>
      <View style={styles.heading}>
        <Text style={styles.title}>Pregnancy History</Text>
      </View>
      <Text
        style={
          styles.info
        }>{`Pregnancies: ${pregnancy.pregnancies.number}`}</Text>
      <Text
        style={
          styles.info
        }>{`Miscarriages: ${pregnancy.miscarriages.number}`}</Text>
      <Text
        style={
          styles.info
        }>{`Full term deliveries: ${pregnancy.fullTermBirths.number}`}</Text>
      <Text
        style={styles.info}>{`Abortions: ${pregnancy.abortions.number}`}</Text>
      <Text
        style={
          styles.info
        }>{`Cesarean sections: ${pregnancy.cesarean.number}`}</Text>
      <Text
        style={
          styles.info
        }>{`Living Children: ${pregnancy.livingChildren.number}`}</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <CheckBox
          containerStyle={{height: 40}}
          center
          key={'Pregnancy Issues'}
          checkedIcon="check"
          uncheckedIcon="square-o"
          checked={pregnancy.pregnancyIssues.history}
        />
        <Text>{`Pregnancy issues`}</Text>
      </View>
      {pregnancy.pregnancyIssues.history && (
        <Text style={styles.info}>{pregnancy.pregnancyIssues.notes}</Text>
      )}
    </View>
  );
};

export default Pregnancy;
