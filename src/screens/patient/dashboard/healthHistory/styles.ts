import { StyleSheet } from 'react-native';
import { text, colors } from '~/utils/constants';

export default StyleSheet.create({
  title: {
    fontSize: text.size.regular,
  },
  subtitle: {
    fontSize: text.size.small,
  },
  container: {
    backgroundColor: colors.offWhite,
  },
});
