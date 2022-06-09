import { StyleSheet } from 'react-native';
import { colors, text } from '~/utils/constants';

export default StyleSheet.create({
  card: {
    flex: 1,
    width: '100%',
    margin: 10,
    borderRadius: 20,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 5,
    shadowOpacity: 0.1,
    padding: 20,
    borderColor: colors.white,
    alignItems: 'center',
    borderWidth: 3,
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: text.fontFamily.poppinsBold,
    fontSize: text.size.xxLarge,
    color: colors.charcoal,
  },
  price: {
    fontFamily: text.fontFamily.poppinsBold,
    fontSize: text.size.xxxxLarge,
    color: colors.charcoal,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    fontFamily: text.fontFamily.poppinsRegular,
    fontSize: text.size.large,
    color: colors.charcoal,
  },
});

export const modifiers = {
  card: {
    selected: {
      borderColor: colors.blue,
      borderWidth: 3,
    },
    disabled: {
      backgroundColor: colors.pinkGrey,
    },
  },
  title: {
    selected: {
      color: colors.blue,
    },
    disabled: {
      color: colors.blueGrey,
    },
  },
  price: {
    selected: {
      color: colors.blue,
    },
    disabled: {
      color: colors.blueGrey,
    },
  },
  item: {
    selected: {
      color: colors.blue,
    },
    disabled: {
      color: colors.blueGrey,
    },
  },
};
