import {StyleSheet} from 'react-native';
import {text, colors} from '../../utils/constants';
import metrices from '../../utils/metrices';
import {getStatusBarHeight} from '../../components/iPhoneXHelper';

let parentPaddingValue = metrices.DEVICE_WIDTH * 0.1;

export default StyleSheet.create({
  list: {
    backgroundColor: colors.offWhite,
  },
  listItemTitle: {
    color: colors.black,
    fontSize: text.size.regular,
    fontFamily: text.fontFamily.poppinsRegular,
  },
});
