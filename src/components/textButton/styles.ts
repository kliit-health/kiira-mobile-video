import { StyleSheet } from 'react-native';
import { colors, text } from '../../utils/constants';

export default StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    maxHeight: 45,
    minHeight: 45,
    borderRadius: 50,
    backgroundColor: colors.blue,
  },
  touchable: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'transparent',
    opacity: 1,
  },
  text: {
    fontFamily: text.fontFamily.poppinsRegular,
    fontSize: text.size.regular,
    color: colors.white,
    fontWeight: '500',
  },
  icon: {
    paddingHorizontal: 20,
  },
});

export const modifiers = {
  link: {
    root: {
      backgroundColor: 'transparent',
    },
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
      borderColor: colors.blue,
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
    root: {},
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
