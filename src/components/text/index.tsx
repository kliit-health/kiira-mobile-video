import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { colors, text } from '~/utils/constants';

const { size, fontFamily } = text;

const KiiraText = ({ children, options = null }) => {
  return (
    <Text style={options ? [base.default, ...options] : base.default}>
      {children}
    </Text>
  );
};

const base = StyleSheet.create({
  default: {
    fontSize: size.regular,
    fontFamily: fontFamily.poppinsRegular,
    color: colors.black,
  },
});

export default KiiraText;
