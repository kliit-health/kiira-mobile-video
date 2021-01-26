import React from 'react';
import {View} from 'react-native';
import PolarButton from '../../../../../../components/polarButton';
import styles from './style';

const PolarQuestion = ({progress}) => (
  <View>
    <View style={styles.buttonContainer}>
      <PolarButton
        variant="yes"
        selected={yes}
        onPress={() => toggleSelection('yes')}
      />
      <PolarButton
        variant="no"
        selected={no}
        onPress={() => toggleSelection('no')}
      />
    </View>
    {progress.textPrompt ? (
      <TextInput
        style={styles.input}
        multiline
        placeholder={progress.textPrompt}
        placeholderTextColor="black"
      />
    ) : (
      <View style={styles.blank} />
    )}
  </View>
);

export default PolarQuestion;
