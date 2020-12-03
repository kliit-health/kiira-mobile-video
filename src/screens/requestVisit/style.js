import { StyleSheet } from 'react-native';
import { text, colors } from '../../utils/constants';
import metrices from '../../utils/metrices';
import { getStatusBarHeight } from '../../components/iPhoneXHelper';

let parentPaddingValue = metrices.DEVICE_WIDTH * 0.1;

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: getStatusBarHeight(),
  },

  itemsParentContainerStyle: {
    flexDirection: 'row',
    paddingLeft: parentPaddingValue,
    paddingRight: parentPaddingValue,
    paddingTop: parentPaddingValue * 0.5,
    paddingBottom: parentPaddingValue * 0.5,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 1.5,
  },
  listItemTitle: {
    color: colors.black,
    fontSize: text.size.regular,
    fontFamily: text.fontFamily.poppinsRegular,
  },
});
