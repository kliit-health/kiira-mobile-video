import {StyleSheet} from 'react-native';
import Constant from '~/utils/constants';
import metrics from '~/utils/metrices';
import {getStatusBarHeight} from '~/components/iPhoneXHelper';

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

  contentContainerStyle: {
    padding: parentPaddingValue,
  },

  forgotPasswordTextStyle: {
    textAlign: 'center',
    marginTop: metrics.height * 0.02,
    color: Constant.App.colors.blueColor,
    fontSize: Constant.App.textSize.Medium,
    width: metrics.width - parentPadding,
    paddingLeft: childPaddingValue,
    paddingRight: childPaddingValue,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    marginBottom: metrics.height * 0.02,
  },

  inputTextParentContainerStyle: {
    flexDirection: 'column',
    width: metrics.width - parentPadding,
    marginTop: metrics.height * 0.01,
    paddingLeft: childPaddingValue,
    paddingRight: childPaddingValue,
  },

  inputTextContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: metrics.width - childPadding,
    paddingBottom: Platform.OS === 'ios' ? metrics.height * 0.01 : 0,
    marginTop: metrics.height * 0.01,
    borderBottomColor: Constant.App.colors.blackColor,
    borderBottomWidth: 0.5,
  },

  inputTypeStyle: {
    color: Constant.App.colors.blackColor,
    width: metrics.width - parentPadding,
    fontSize: Constant.App.textSize.Normal,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    textAlign: 'left',
    width: metrics.width - childPadding,
  },

  inputTypePasswordStyle: {
    color: Constant.App.colors.blackColor,
    fontSize: Constant.App.textSize.Normal,
    textAlign: 'left',
    width: metrics.width - childPadding - metrics.width * 0.05,
  },

  loginButtonContainerStyle: {
    alignSelf: 'center',
    borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
    padding: Constant.App.dimensions.btnPaddingGlobal,
    width: metrics.width - childPadding,
    backgroundColor: Constant.App.colors.blueColor,
    marginTop: metrics.height * 0.05,
  },

  loginButtonTextStyle: {
    textAlign: 'center',
    fontSize: Constant.App.textSize.Normal,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    color: Constant.App.colors.whiteColor,
  },

  logoStyle: {
    alignSelf: 'center',
    height: metrics.width * 0.2,
    width: metrics.width * 0.2,
  },

  logo2Style: {
    alignSelf: 'center',
    height: metrics.width * 0.35,
    width: metrics.width * 0.35,
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

  passwordHideShowIconStyle: {
    height: metrics.width * 0.05,
    width: metrics.width * 0.05,
    marginTop: metrics.height * 0.02,
  },
});

export default styles;
