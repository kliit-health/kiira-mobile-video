import {StyleSheet, Platform} from 'react-native';
import Constant from 'utils/constants';
import metrics from 'utils/metrices';
import {getStatusBarHeight} from 'components/iPhoneXHelper';

let parentPaddingValue = metrics.width * 0.08;
let parentPadding = parentPaddingValue * 2;
let childPaddingValue = metrics.width * 0.03;
let childPadding = parentPadding + childPaddingValue * 2;

const styles = StyleSheet.create({
  birthDayContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: metrics.width - childPadding,
    marginTop: metrics.height * 0.03,
    borderBottomColor: Constant.App.colors.blackColor,
    borderBottomWidth: 0.5,
    paddingBottom: metrics.height * 0.01,
  },

  birthDayTextStyle: {
    color: Constant.App.colors.blackColor,
    fontSize: Constant.App.textSize.Normal,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    textAlign: 'left',
    alignSelf: 'center',
    width: metrics.width - childPadding,
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

  cameraIconContainerStyle: {
    alignItems: 'center',
    backgroundColor: Constant.App.colors.blueColor,
    borderRadius: metrics.width * 0.08 * 0.5,
    height: metrics.width * 0.08,
    width: metrics.width * 0.08,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    right: metrics.width * 0.32 - metrics.width * 0.32 * 0.2,
  },

  cameraIconStyle: {
    height: metrics.width * 0.04,
    width: metrics.width * 0.04,
  },

  contentContainerStyle: {
    padding: parentPaddingValue,
  },

  dropDownIconStyle: {
    height: metrics.width * 0.04,
    width: metrics.width * 0.04,
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
    justifyContent: 'space-between',
    width: metrics.width - childPadding,
    marginTop: metrics.height * 0.01,
  },

  inputTextFirstNameContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: (metrics.width - childPadding) * 0.47,
    paddingBottom: Platform.OS === 'ios' ? metrics.height * 0.01 : 0,
    borderBottomColor: Constant.App.colors.blackColor,
    borderBottomWidth: 0.5,
  },

  inputTypeStyle: {
    color: Constant.App.colors.blackColor,
    fontSize: Constant.App.textSize.Normal,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    textAlign: 'left',
    width: (metrics.width - childPadding) * 0.47,
  },

  parentContainerStyle: {
    flex: 1,
    marginTop: getStatusBarHeight(),
  },

  profileImgViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: metrics.width - parentPadding,
  },

  pronounsParentContainerStyle: {
    marginTop: metrics.height * 0.03,
    width: metrics.width - parentPadding,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  pronounsTitleTextStyle: {
    color: Constant.App.colors.blackColor,
    fontSize: Constant.App.textSize.Large,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    textAlign: 'left',
    width: metrics.width - parentPadding,
  },

  pronounsContainerStyle: {
    marginTop: metrics.height * 0.02,
    width: metrics.width - parentPadding,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  pronounsTextStyle: {
    paddingLeft: 10,
    color: Constant.App.colors.blackColor,
    fontSize: Constant.App.textSize.Normal,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    textAlign: 'left',
    width: metrics.width - parentPadding - metrics.width * 0.05,
  },

  pronounsChecboxIconStyle: {
    height: metrics.width * 0.05,
    width: metrics.width * 0.05,
  },

  stateDropDownContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: metrics.width - childPadding,
    marginTop: metrics.height * 0.03,
    borderBottomColor: Constant.App.colors.blackColor,
    borderBottomWidth: 0.5,
    paddingBottom: metrics.height * 0.01,
  },

  stateDropDownTextStyle: {
    color: Constant.App.colors.blackColor,
    fontSize: Constant.App.textSize.Normal,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    textAlign: 'left',
    alignSelf: 'center',
    width: metrics.width - childPadding - metrics.width * 0.05,
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

  termsConditionsTextContainerStyle: {
    marginTop: metrics.height * 0.03,
    marginBottom: metrics.height * 0.03,
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
});

export default styles;
