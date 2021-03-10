import {StyleSheet} from 'react-native';
import {colors, text} from '../../../../../utils/constants';

export default StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: text.size.regular,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: text.size.small,
    color: colors.charcoal,
  },
  itemContainer: {
    flex: 1,
    marginRight: 20,
    justifyContent: 'space-between',
    height: 40,
  },
});

export const modifiers = {};
