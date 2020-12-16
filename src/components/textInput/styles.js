import {StyleSheet} from 'react-native';
import {colors, text} from '../../utils/constants';

export default StyleSheet.create({
  root: {
    borderBottomWidth: 0.3,
    borderColor: colors.lightGrey,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  textInput: {
    flex: 1,
    paddingVertical: 4,
    fontSize: text.size.regular,
    fontFamily: text.fontFamily.poppinsRegular,
    justifyContent: 'center',
  },
  chevronContainer: {
    paddingVertical: 4,
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
    root: {
      borderWidth: 1,
      borderBottomWidth: 1,
      borderColor: colors.gray,
      borderRadius: 8,
      padding: 5,
      paddingLeft: 8,
      marginBottom: 14,
    },
    label: {
      marginHorizontal: 5,
      marginBottom: 2,
    },
    textInput: {},
    chevronContainer: {
      padding: 5,
      paddingRight: 5,
    },
  },
};
