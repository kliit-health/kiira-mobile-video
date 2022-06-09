import React from 'react';
import { View, StyleSheet } from 'react-native';

const Row = ({ children, options = null }) => {
  return (
    <View style={options ? [base.default, ...options] : base.default}>
      {children}
    </View>
  );
};

const base = StyleSheet.create({
  default: {
    flexDirection: 'row',
  },
});

export default Row;
