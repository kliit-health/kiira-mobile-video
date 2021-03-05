import {StyleSheet} from 'react-native';
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
    marginTop: metrics.height * 0.03,
  },

  buttonTextStyle: {
    textAlign: 'center',
    fontSize: Constant.App.textSize.Normal,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    color: Constant.App.colors.whiteColor,
  },

  contentContainerStyle: {
    padding: parentPaddingValue,
  },

  descriptionTextStyle: {
    paddingTop: metrics.height * 0.03,
    width: metrics.width - parentPadding,
    textAlign: 'center',
    color: Constant.App.colors.blackColor,
    fontSize: Constant.App.textSize.xSmall,
    fontFamily: Constant.App.fontFamily.bodyRegular,
  },

  inputTextParentContainerStyle: {
    flexDirection: 'column',
    width: metrics.width - parentPadding,
    paddingLeft: childPaddingValue,
    paddingRight: childPaddingValue,
    marginTop: metrics.height * 0.02,
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
    width: metrics.width - childPadding,
    fontSize: Constant.App.textSize.Normal,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    textAlign: 'left',
    width: metrics.width - parentPadding,
  },

  inputTypePasswordStyle: {
    color: Constant.App.colors.blackColor,
    fontSize: Constant.App.textSize.Normal,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    textAlign: 'left',
    width: metrics.width - childPadding - metrics.width * 0.05,
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
  },

  passwordHideShowIconStyle: {
    height: metrics.width * 0.05,
    width: metrics.width * 0.05,
    marginTop: metrics.height * 0.02,
  },

  passwordValidationContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: metrics.width - parentPadding,
    paddingLeft: childPaddingValue,
    paddingRight: childPaddingValue,
    marginTop: metrics.height * 0.01,
  },

  passwordValidationTextStyle: {
    marginLeft: 3,
    color: Constant.App.colors.blackColor,
    fontSize: Constant.App.textSize.Normal,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    textAlign: 'left',
    width: metrics.width - childPadding - 15,
  },

  passwordValidChecboxIconStyle: {
    height: 12,
    width: 12,
  },

  referalCodeInputTextContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: metrics.width - childPadding,
    paddingBottom: Platform.OS === 'ios' ? metrics.height * 0.01 : 0,
    borderBottomColor: Constant.App.colors.blackColor,
    borderBottomWidth: 0.5,
  },

  referalCodeInputTypeStyle: {
    color: Constant.App.colors.blackColor,
    width: metrics.width - childPadding,
    fontSize: Constant.App.textSize.Normal,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    textAlign: 'left',
    width: metrics.width - parentPadding,
  },

  termsConditionsTextContainerStyle: {
    marginTop: metrics.height * 0.03,
    width: metrics.width - parentPadding,
    paddingLeft: childPaddingValue,
    paddingRight: childPaddingValue,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },

  termsConditionsTextStyle: {
    marginTop: 2,
    padding: 2,
    textAlign: 'center',
    color: Constant.App.colors.blackColor,
    fontSize: Constant.App.textSize.Small,
    fontFamily: Constant.App.fontFamily.bodyRegular,
  },

  termsConditionsTextHighlightedStyle: {
    padding: 2,
    textAlign: 'center',
    color: Constant.App.colors.blueColor,
    fontSize: Constant.App.textSize.Small,
    fontFamily: Constant.App.fontFamily.bodyRegular,
  },

  titleContainer: {
    fontFamily: Constant.App.fontFamily.headerBold,
    marginTop: metrics.height * 0.05,
    flexDirection: 'column',
    width: metrics.width - parentPadding,
    paddingLeft: childPaddingValue,
    paddingRight: childPaddingValue,
  },

  titleTextStyle: {
    fontFamily: Constant.App.fontFamily.headerBold,
    textAlign: 'center',
    fontSize: Constant.App.textSize.xxLarge,
    color: Constant.App.colors.blackColor,
    width: metrics.width - childPadding,
  },
});

export default styles;
