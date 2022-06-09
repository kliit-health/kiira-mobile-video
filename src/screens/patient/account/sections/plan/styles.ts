import { StyleSheet } from 'react-native';
import { text, colors } from '~/utils/constants';

export default StyleSheet.create({
  planTitle: {
    fontFamily: text.fontFamily.poppinsRegular,
    fontSize: text.size.xLarge,
    color: colors.black,
    alignSelf: 'center',
    textAlign: 'center',
    margin: -10,
    marginBottom: 10,
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
