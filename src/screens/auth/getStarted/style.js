import {StyleSheet} from 'react-native';
import Constant from '../../../utils/constants';
import metrics from '../../../utils/metrices';
import {getStatusBarHeight} from '../../../components/iPhoneXHelper';

let parentPaddingValue = metrics.width * 0.08;
let parentPadding = parentPaddingValue * 2;
let childPaddingValue = metrics.width * 0.03;
let childPadding = parentPadding + childPaddingValue * 2;

const styles = StyleSheet.create({
  buttonContainerStyle: {
    alignSelf: 'center',
    borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
    padding: Constant.App.dimensions.btnPaddingGlobal,
    width: metrics.width - childPadding,
    backgroundColor: Constant.App.colors.blueColor,
    marginTop: metrics.height * 0.06,
  },

  buttonTextStyle: {
    textAlign: 'center',
    fontSize: Constant.App.textSize.Normal,
    color: Constant.App.colors.whiteColor,
    fontFamily: Constant.App.fontFamily.bodyRegular,
  },

  contentContainerStyle: {
    padding: parentPaddingValue,
  },

  parentContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: getStatusBarHeight(),
  },

  logoStyle: {
    marginTop: metrics.height * 0.04,
    alignSelf: 'center',
    height: metrics.width * 0.32,
    width: metrics.width * 0.32,
  },

  titleContainer: {
    marginTop: metrics.height * 0.05,
    flexDirection: 'column',
    width: metrics.width - parentPadding,
    paddingLeft: childPaddingValue,
    paddingRight: childPaddingValue,
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleTextStyle: {
    textAlign: 'center',
    fontSize: Constant.App.textSize.xxxLarge,
    fontFamily: Constant.App.fontFamily.headerBold,
    color: Constant.App.colors.blackColor,
    width: metrics.width - childPadding,
  },

  subTitleTextStyle: {
    marginTop: metrics.height * 0.02,
    textAlign: 'center',
    fontSize: Constant.App.textSize.xxLarge,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    color: Constant.App.colors.blackColor,
    width: metrics.width - childPadding,
  },
});

export default styles;
