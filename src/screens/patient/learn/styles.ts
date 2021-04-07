import {StyleSheet} from 'react-native';
import {text, colors} from 'utils/constants';

export default StyleSheet.create({
  bannerContainer: {
    flexDirection: 'row',
    backgroundColor: 'red',
    marginHorizontal: 10,
  },
  bannerTextContainer: {
    flex: 1,
    backgroundColor: colors.azure,
    height: 140,
  },
  bannerText: {
    padding: 14,
    color: colors.white,
    fontSize: text.size.xLarge,
    fontFamily: text.fontFamily.poppinsSemiBold,
  },
  bannerImage: {
    flex: 1,
    height: 140,
  },
  listContainer: {
    padding: 5,
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 5,
  },
  itemTitle: {
    color: colors.charcoal,
    fontSize: text.size.regular,
    fontFamily: text.fontFamily.poppinsRegular,
    textAlign: 'center',
    alignSelf: 'center',
  },
  itemImage: {
    height: 140,
    width: '100%',
  },
});

export const modifiers = {
  button: {
    root: {
      marginTop: 'auto',
    },
  },
  container: {
    safeAreaBottom: {
      height: 0,
    },
  },
};
