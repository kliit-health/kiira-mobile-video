import { StyleSheet } from 'react-native';
import { colors, text } from '~/utils/constants';

export default StyleSheet.create({
  container: {
    position: 'relative',
    margin: 16,
    marginTop: 'auto',
    backgroundColor: colors.white,
    flexDirection: 'column',
    borderRadius: 8,
  },
  description: {
    fontFamily: text.fontFamily.poppinsLight,
    color: colors.black,
    fontSize: text.size.xLarge,
    padding: 12,
    paddingRight: 12,
  },
});

export const buttonStyles = StyleSheet.create({
  container: {
    margin: 12,
    marginLeft: 'auto',
  },
});
