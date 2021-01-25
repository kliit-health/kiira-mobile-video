import {text, colors} from '../../utils/constants';

export const modifiers = {
  container: {
    safeAreaBottom: {
      height: 0,
    },
    root: {
      backgroundColor: colors.offWhite,
    },
  },
  button: {
    root: {
      marginBottom: 20,
    },
    text: {
      fontSize: text.size.large,
    },
  },
};
