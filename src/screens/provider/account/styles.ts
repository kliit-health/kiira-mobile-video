import {StyleSheet} from 'react-native';
import {text, colors} from 'utils/constants';

export default StyleSheet.create({
  profileContainter: {
    padding: 20,
    position: 'relative',
    backgroundColor: colors.offWhite,
  },
  profileBackground: {
    position: 'absolute',
    top: -50,
    left: 0,
    right: 0,
    height: '100%',
    backgroundColor: colors.azure,
  },
  itemTitle: {
    fontFamily: text.fontFamily.poppinsRegular,
    fontSize: text.size.regular,
  },
  logoutContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

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
    text: {
      fontSize: text.size.large,
    },
  },
};
