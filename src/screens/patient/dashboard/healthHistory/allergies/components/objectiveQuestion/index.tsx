import React from 'react';
import {CheckBox} from '~/components';
import {View} from 'react-native';
import styles from './styles';

export const ObjectiveQuestion = ({value, options, onPress}) => {
  const handleOnPress = (item) => {
    onPress(item);
  };

  return (
    <View style={styles.container}>
      {options.map((title) => (
        <CheckBox
          key={title}
          label={title}
          onPress={() => handleOnPress(title)}
          checked={value.some((item) => item === title)}
        />
      ))}
    </View>
  );
};
