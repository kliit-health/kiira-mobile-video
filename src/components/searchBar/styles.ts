import { StyleSheet } from 'react-native';
import { text, colors } from '../../utils/constants';

export default StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.3,
    borderTopWidth: 0.3,
    borderTopColor: colors.lightGrey,
    borderBottomColor: colors.lightGrey,
    backgroundColor: colors.white,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 15,
    fontFamily: text.fontFamily.poppinsRegular,
    fontSize: text.size.regular,
    backgroundColor: colors.white,
  },
  iconContainer: {
    margin: 10,
    marginRight: 15,
  },
});
