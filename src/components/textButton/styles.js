import {StyleSheet} from 'react-native';
import {colors, text} from '../../utils/constants';

export default StyleSheet.create({
  root: {
    maxHeight: 50,
    flex: 1,
  },
  touchable: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: colors.blue,
    backgroundColor: colors.blue,
    opacity: 1,
  },
  text: {
    fontFamily: text.fontFamily.poppinsRegular,
    fontSize: text.size.regular,
    color: colors.white,
    padding: 10,
    fontWeight: '500',
  },
  icon: {
    paddingHorizontal: 20,
  },
});

export const modifiers = {
  link: {
    root: {},
    touchable: {
      backgroundColor: 'transparent',
      borderWidth: 0,
    },
    text: {
      color: colors.blue,
      fontSize: text.size.large,
    },
  },

  outlined: {
    touchable: {
      backgroundColor: colors.white,
    },
    text: {
      color: colors.blue,
    },
  },
  hidden: {
    root: {
      opacity: 0,
    },
  },
  disabled: {
    root: {
      opacity: 0.4,
    },
  },
  secondary: {
    text: {
      color: colors.blueGrey,
    },
    touchable: {
      borderRadius: 4,
      borderColor: colors.blueGrey,
      backgroundColor: colors.white,
      justifyContent: 'flex-start',
    },
  },
};
