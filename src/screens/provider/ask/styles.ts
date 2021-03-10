import {StyleSheet} from 'react-native';
import {text, colors} from '../../../utils/constants';

export default StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: colors.white,
  },
});

export const modifiers = {
  container: {
    root: {},
  },
  searchBar: {
    root: {
      marginTop: 10,
    },
  },
  button: {
    root: {
      marginHorizontal: 5,
    },
  },
};
