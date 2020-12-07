import {StyleSheet} from 'react-native';
import Constant from '../../utils/constants';
import metrices from '../../utils/metrices';

let parentPaddingValue = metrices.DEVICE_WIDTH * 0.1;
let parentPadding = parentPaddingValue * 2;

let childPaddingValue = metrices.DEVICE_WIDTH * 0.03;
var childPadding = parentPadding + childPaddingValue * 2;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: metrices.DEVICE_WIDTH,
    paddingVertical: 40,
    backgroundColor: Constant.App.colors.blueColor,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  headerText: {
    color: Constant.App.colors.whiteColor,
    fontSize: Constant.App.textSize.xxLarge,
    fontFamily: Constant.App.fontFamily.headerBold,
    fontWeight: '500',
  },

  image: {
    justifyContent: 'flex-start',
    marginRight: 35,
    width: 40,
    height: 40,
  },
});

export default styles;
