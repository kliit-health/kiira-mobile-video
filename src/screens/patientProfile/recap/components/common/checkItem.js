import React, {Fragment} from 'react';
import {View, Text} from 'react-native';
import {CheckBox} from 'react-native-elements';

import styles from '../../style';

const CheckItem = ({key, checked, title, notes = null}) => {
  return (
    <Fragment>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <CheckBox
          containerStyle={{height: 40}}
          center
          key={key}
          checkedIcon="check"
          uncheckedIcon="square-o"
          checked={checked}
        />
        <Text>{title}</Text>
      </View>
      {checked && notes !== null && (
        <Text style={styles.notes}>{`Notes: ${notes}`}</Text>
      )}
    </Fragment>
  );
};

export default CheckItem;
