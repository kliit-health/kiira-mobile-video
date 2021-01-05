import {StyleSheet} from 'react-native';
import {colors, text} from '../../utils/constants';

export default StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: colors.white,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: colors.offWhite,
  },
  title: {
    position: 'absolute',
    textAlign: 'center',
    left: 0,
    right: 0,
    color: colors.black,
    fontSize: text.size.large,
    fontFamily: text.fontFamily.poppinsRegular,
    fontWeight: '500',
  },
  editButton: {
    flex: 0,
  },
});

export const modifiers = {
  themed: {
    root: {
      backgroundColor: colors.azure,
      height: 70,
      borderBottomRightRadius: 25,
      borderBottomLeftRadius: 25,
    },
    title: {
      color: colors.white,
      fontSize: text.size.xLarge,
    },
    backButton: {
      root: {
        marginLeft: 5,
      },
    },
  },
  backButton: {
    image: {
      transform: [{rotate: '180deg'}],
    },
  },
};
