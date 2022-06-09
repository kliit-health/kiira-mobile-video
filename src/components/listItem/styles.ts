import { StyleSheet } from 'react-native';
import { colors } from '../../utils/constants';

export default StyleSheet.create({
  root: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    padding: 15,
    paddingVertical: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 1,
  },
  borderStyle: {
    borderColor: colors.greyAccent,
    borderTopWidth: 1,
  },
  borderBottomStyle: {
    borderColor: colors.greyAccent,
    borderBottomWidth: 1,
  },
  chevron: {
    height: 14,
    width: 14,
  },
});
