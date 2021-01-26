import {StyleSheet} from 'react-native';
import {colors} from '../../../../../utils/constants';

export default StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: colors.offWhite,
  },
});

export const modifiers = {
  saveButton: {
    root: {
      marginTop: 'auto',
    },
  },
};
