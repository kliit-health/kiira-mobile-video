import React from 'react';
import {Text, View} from 'react-native';
import styles from '../../style';

const Warning = () => (
  <View style={styles.container}>
    <View style={styles.warning}>
      <Text style={styles.title}>Important !</Text>
      <Text style={styles.subtitle}>
        Once confirmed you will be unable to edit this record please carefully
        review before confirming.
      </Text>
      <Text style={styles.subtitle}>
        To edit press back and fill out section again.
      </Text>
    </View>
  </View>
);

export default Warning;
