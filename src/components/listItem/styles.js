import {StyleSheet} from 'react-native';
import {colors, text} from '../../utils/constants';
import {metrices} from '../../utils/metrices';

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
  chevron: {
    height: 14,
    width: 14,
  },
});
