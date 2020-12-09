import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constants';

export default StyleSheet.create({
  root: {
    flex: 1,
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
};
