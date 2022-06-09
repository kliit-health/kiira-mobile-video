import { StyleSheet } from 'react-native';
import { text, colors } from '~/utils/constants';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.primaryBlue,
    marginTop: 'auto',
    borderRadius: 50,
  },
  title: {
    fontFamily: text.fontFamily.poppinsRegular,
    color: colors.white,
    fontSize: text.size.regular,
    textAlign: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
});
