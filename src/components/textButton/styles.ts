import {StyleSheet} from 'react-native';
import {colors, text} from '../../utils/constants';
import metrices from '../../utils/metrices';

export default StyleSheet.create({
  root: {
    maxHeight: 50,
    flex: 1,
    width: metrices.width * 0.8,
    alignSelf: 'center',
    borderRadius: 30,
    backgroundColor: colors.blue,
  },
  touchable: {
    flexDirection: 'row',
    justifyContent: 'center',
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
