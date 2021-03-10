import {StyleSheet} from 'react-native';
import {colors, text} from '../../utils/constants';

export default StyleSheet.create({
  root: {},
  touchable: {
    borderBottomWidth: 0.3,
    borderColor: colors.lightGrey,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  textInput: {
    flex: 1,
    height: 40,
    paddingVertical: 4,
    fontSize: text.size.regular,
    fontFamily: text.fontFamily.poppinsRegular,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  chevronContainer: {
    alignSelf: 'center',
    marginRight: 10,
  },
  label: {
    fontSize: text.size.regular,
    fontWeight: '500',
    color: colors.charcoal,
    fontFamily: text.fontFamily.poppinsRegular,
  },
});

export const modifiers = {
  outlined: {
    touchable: {
      borderWidth: 1,
      borderBottomWidth: 1,
      borderColor: colors.gray,
      borderRadius: 8,
      marginBottom: 14,
    },
    label: {
      marginHorizontal: 5,
      marginBottom: 0,
    },
    textInput: {
      height: 45,
    },
    chevronContainer: {
      padding: 5,
      paddingRight: 5,
    },
  },
};
