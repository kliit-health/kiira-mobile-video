import {StyleSheet} from 'react-native';
import {colors, text} from '../../../../utils/constants';

export default StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});

export const modifiers = {
  loading: {
    loadingContainer: {
      display: 'none',
    },
  },
};
