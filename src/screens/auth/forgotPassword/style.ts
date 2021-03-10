import {StyleSheet, Platform} from 'react-native';
import Constant from '../../../utils/constants';
import metrics from '../../../utils/metrices';
import {getStatusBarHeight} from '../../../components/iPhoneXHelper';

let parentPaddingValue = metrics.width * 0.08;
let parentPadding = parentPaddingValue * 2;
let childPaddingValue = metrics.width * 0.03;
let childPadding = parentPadding + childPaddingValue * 2;

const styles = StyleSheet.create({
  backIconStyle: {
    margin: metrics.height * 0.02,
    height: metrics.width * 0.05,
    width: metrics.width * 0.05,
    alignSelf: 'flex-end',
  },

  buttonContainerStyle: {
    alignSelf: 'center',
    borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
    padding: Constant.App.dimensions.btnPaddingGlobal,
    width: metrics.width - childPadding,
    backgroundColor: Constant.App.colors.blueColor,
    marginTop: metrics.height * 0.02,
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

  inputTextContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: metrics.width - childPadding,
    paddingBottom: Platform.OS === 'ios' ? metrics.height * 0.01 : 0,
    borderBottomColor: Constant.App.colors.blackColor,
    borderBottomWidth: 0.5,
  },

  inputTextParentContainerStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: metrics.width - parentPadding,
    paddingLeft: childPaddingValue,
    paddingRight: childPaddingValue,
    marginTop: metrics.height * 0.01,
  },

  inputTypeStyle: {
    color: Constant.App.colors.blackColor,
    fontSize: Constant.App.textSize.Normal,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    textAlign: 'left',
    width: metrics.width - childPadding,
  },

  logoStyle: {
    alignSelf: 'center',
    height: metrics.width * 0.32,
    width: metrics.width * 0.32,
  },

  parentContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: getStatusBarHeight(),
    backgroundColor: Constant.App.colors.whiteColor,
    borderRadius: 25,
    overflow: 'hidden',
  },

  subTitleTextStyle: {
    marginTop: metrics.height * 0.01,
    textAlign: 'center',
    fontSize: Constant.App.textSize.Normal,
    fontFamily: Constant.App.fontFamily.headerRegular,
    color: Constant.App.colors.blackColor,
    width: metrics.width - childPadding,
  },

  titleContainer: {
    marginTop: metrics.height * 0.08,
    flexDirection: 'column',
    width: metrics.width - parentPadding,
    paddingLeft: childPaddingValue,
    paddingRight: childPaddingValue,
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleTextStyle: {
    textAlign: 'center',
    fontSize: Constant.App.textSize.xxLarge,
    fontFamily: Constant.App.fontFamily.headerBold,
    color: Constant.App.colors.blackColor,
    width: metrics.width - childPadding,
  },
});

export default styles;
