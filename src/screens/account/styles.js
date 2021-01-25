import {StyleSheet} from 'react-native';
import {text, colors} from '../../utils/constants';

export default StyleSheet.create({
  profileContainter: {
    padding: 20,
    paddingBottom: 20,
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
  planTitle: {
    fontFamily: text.fontFamily.poppinsRegular,
    fontSize: text.size.xLarge,
    color: colors.black,
    alignSelf: 'center',
    textAlign: 'center',
    margin: -10,
    marginBottom: 10,
  },
  logoutContainer: {
    flex: 1,
    alignItems: 'center',
  },
  actionsContainer: {
    flexDirection: 'row',
    marginHorizontal: 40,
    marginBottom: 20,
  },
  divider: {
    width: 20,
  },
  canceledMessage: {
    fontFamily: text.fontFamily.poppinsRegular,
    fontSize: text.size.regular,
    color: colors.red,
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: 20,
  },
  processingMessage: {
    fontFamily: text.fontFamily.poppinsRegular,
    fontSize: text.size.regular,
    color: colors.charcoal,
    alignSelf: 'center',
    textAlign: 'center',
    margin: -10,
    marginBottom: 10,
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
