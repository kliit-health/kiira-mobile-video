import {StyleSheet} from 'react-native';
import {colors, text} from 'utils/constants';

export default StyleSheet.create({
  listContainer: {
    backgroundColor: colors.white,
  },
  favoritesItemText: {
    fontFamily: text.fontFamily.poppinsRegular,
    fontSize: text.size.medium,
    color: colors.black,
    paddingTop: 3,
  },
  contentContainer: {
    paddingHorizontal: 15,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  itemSeparator: {width: 15},
  favoritesItem: {
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 8,
  },
});
