import React from 'react';
import { SafeAreaView } from 'react-native';
import { StyleSheet } from 'react-native';
import { colors } from '~/utils/constants';

const Screen = ({ children, options = null, test = '' }) => {
  return (
    <>
      <SafeAreaView style={options ? [base.top, ...options] : base.top} />
      <SafeAreaView
        testID={test}
        style={options ? [base.bottom, ...options] : base.bottom}>
        {children}
      </SafeAreaView>
    </>
  );
};

const base = StyleSheet.create({
  top: {
    flex: 0,
    backgroundColor: colors.white,
  },

  bottom: {
    flex: 1,
    backgroundColor: colors.babyBlue,
  },
});

export default Screen;
