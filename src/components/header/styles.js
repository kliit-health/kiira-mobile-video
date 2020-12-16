import {StyleSheet} from 'react-native';
import {colors, text} from '../../utils/constants';

export default StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    backgroundColor: colors.white,
    height: 50,
    shadowColor: colors.gray,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 10,
    shadowOpacity: 0.1,
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
