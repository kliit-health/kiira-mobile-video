import {StyleSheet} from 'react-native';
import {colors} from 'utils/constants';

export default {
  container: StyleSheet.create({
    root: {
      backgroundColor: colors.white,
    },
    safeAreaBottom: {
      height: 0,
    },
  }),
};
