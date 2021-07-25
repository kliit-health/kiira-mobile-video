import { StyleSheet } from 'react-native';
import { colors, text } from '~/utils/constants';

export default StyleSheet.create({
  root: {
    padding: 20,
    borderBottomWidth: 0.4,
    borderColor: colors.gray,
    flexDirection: 'row',
    width: '100%',
  },
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  icon: {
    height: 44,
    width: 44,
    borderRadius: 22,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.azure,
  },
  title: {
    fontFamily: text.fontFamily.poppinsRegular,
    fontWeight: '500',
    fontSize: text.size.regular,
    color: colors.black,
    lineHeight: 24,
  },
  description: {
    fontFamily: text.fontFamily.poppinsRegular,
    fontWeight: '400',
    fontSize: text.size.medium,
    color: colors.gray,
    lineHeight: 22,
  },
  chevron: {
    alignSelf: 'center',
    marginHorizontal: 'auto',
  },
});
