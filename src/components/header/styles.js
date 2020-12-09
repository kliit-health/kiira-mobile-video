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
  backButton: {
    transform: [{rotate: '180deg'}],
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

export const modifiers = {};
