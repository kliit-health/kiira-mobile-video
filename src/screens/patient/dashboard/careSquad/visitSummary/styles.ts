import {StyleSheet} from 'react-native';
import {text, colors} from '~/utils/constants';

export default StyleSheet.create({
  root: {
    marginVertical: 5,
  },
  sectionTitle: {
    fontFamily: text.fontFamily.poppinsRegular,
    fontSize: text.size.xLarge,
    color: colors.black,
    fontWeight: '500',
    marginBottom: 10,
  },
  textContainer: {},
  card: {
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 5,
    shadowOpacity: 0.1,
    flex: 1,
    padding: 14,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  detailsTitle: {
    fontFamily: text.fontFamily.poppinsRegular,
    fontSize: text.size.medium,
    color: colors.black,
    marginTop: 5,
  },
  detailsDescription: {
    fontFamily: text.fontFamily.poppinsRegular,
    fontSize: text.size.medium,
    color: colors.charcoal,
  },
});

export const modifiers = {};
