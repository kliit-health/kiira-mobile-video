import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constants';

export default StyleSheet.create({
  root: {
    backgroundColor: colors.white,
    flex: 1,
  },
  safeAreaTop: {
    backgroundColor: colors.white,
  },
  container: {
    padding: 20,
    flex: 1,
  },
});

export const modifiers = {
  unformatted: {
    container: {
      padding: 0,
    },
  },
  themed: {
    safeAreaTop: {
      backgroundColor: colors.azure,
    },
    safeAreaBottom: {
      backgroundColor: colors.white,
    },
  },
};
