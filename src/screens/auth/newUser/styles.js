import {StyleSheet} from 'react-native';
import Constant from '../../../utils/constants';
import metrices from '../../../utils/metrices';

let parentPaddingValue = metrices.DEVICE_WIDTH * 0.1;
let parentPadding = parentPaddingValue * 2;

const styles = StyleSheet.create({
  agreementButtonContainerStyle: {
    alignSelf: 'center',
    borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
    padding: 10,
    width: metrices.DEVICE_WIDTH - parentPadding,
    backgroundColor: Constant.App.colors.blueColor,
    marginTop: 20,
  },

  buttonContainerStyle: {
    alignSelf: 'center',
    borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
    padding: Constant.App.dimensions.btnPaddingGlobal,
    width: metrices.DEVICE_WIDTH - parentPadding,
    backgroundColor: Constant.App.colors.blueColor,
    marginTop: metrices.DEVICE_HEIGHT * 0.1,
  },

  buttonTextStyle: {
    textAlign: 'center',
    fontSize: Constant.App.textSize.Normal,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    color: Constant.App.colors.whiteColor,
  },

  cancelTextStyle: {
    textAlign: 'left',
    alignSelf: 'center',
    color: Constant.App.colors.blackColor,
    fontSize: Constant.App.textSize.Medium,
    fontFamily: Constant.App.fontFamily.bodyRegular,
  },

  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Constant.App.colors.whiteColor,
    marginTop: 35,
  },

  disabledButtonContainerStyle: {
    alignSelf: 'center',
    borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
    padding: Constant.App.dimensions.btnPaddingGlobal,
    width: metrices.DEVICE_WIDTH - parentPadding,
    backgroundColor: Constant.App.colors.grayColor,
    marginTop: metrices.DEVICE_HEIGHT * 0.1,
  },

  headerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: parentPaddingValue * 0.5,
    backgroundColor: Constant.App.colors.whiteColor,
    borderBottomColor: Constant.App.colors.greyBgAsk,
    borderBottomWidth: 3,
  },

  inputTextParentContainerStyle: {
    flexDirection: 'column',
    width: metrices.DEVICE_WIDTH,
    paddingLeft: parentPaddingValue,
    paddingRight: parentPaddingValue,
    marginTop: metrices.DEVICE_HEIGHT * 0.02,
  },

  inputTextContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: metrices.DEVICE_WIDTH - parentPadding,
    paddingBottom: Platform.OS === 'ios' ? metrices.DEVICE_HEIGHT * 0.01 : 0,
    marginTop: metrices.DEVICE_HEIGHT * 0.05,
    borderBottomColor: Constant.App.colors.blackColor,
    borderBottomWidth: 0.5,
  },

  inputTypePasswordStyle: {
    color: Constant.App.colors.blackColor,
    fontSize: Constant.App.textSize.Normal,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    textAlign: 'left',
    width: metrices.DEVICE_WIDTH - parentPadding - metrices.DEVICE_WIDTH * 0.05,
  },

  passwordHideShowIconStyle: {
    height: metrices.DEVICE_WIDTH * 0.05,
    width: metrices.DEVICE_WIDTH * 0.05,
    marginTop: metrices.DEVICE_HEIGHT * 0.02,
  },

  passwordValidationContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: metrices.DEVICE_WIDTH,
    paddingLeft: parentPaddingValue,
    paddingRight: parentPaddingValue,
    marginTop: metrices.DEVICE_HEIGHT * 0.01,
  },

  passwordValidationTextStyle: {
    marginLeft: 3,
    color: Constant.App.colors.blackColor,
    fontSize: Constant.App.textSize.Normal,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    textAlign: 'left',
    width: metrices.DEVICE_WIDTH - parentPadding - 15,
  },

  passwordValidChecboxIconStyle: {
    height: 12,
    width: 12,
  },

  pronounsParentContainerStyle: {
    width: metrices.DEVICE_WIDTH,
    backgroundColor: Constant.App.colors.whiteColor,
    paddingLeft: parentPaddingValue,
    paddingRight: parentPaddingValue,
    paddingTop: metrices.DEVICE_HEIGHT * 0.03,
    paddingBottom: metrices.DEVICE_HEIGHT * 0.03,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: Constant.App.colors.lightGrey,
    borderBottomWidth: 0.5,
  },

  pronounsTitleTextStyle: {
    color: Constant.App.colors.blackColor,
    fontSize: Constant.App.textSize.Large,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    textAlign: 'left',
    width: metrices.DEVICE_WIDTH - parentPadding,
  },

  pronounsContainerStyle: {
    marginTop: metrices.DEVICE_HEIGHT * 0.02,
    width: metrices.DEVICE_WIDTH - parentPadding,
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
    width: metrices.DEVICE_WIDTH - parentPadding - metrices.DEVICE_WIDTH * 0.05,
  },

  pronounsChecboxIconStyle: {
    height: metrices.DEVICE_WIDTH * 0.05,
    width: metrices.DEVICE_WIDTH * 0.05,
  },

  titleTextStyle: {
    position: 'absolute',
    alignSelf: 'center',
    textAlign: 'center',
    width: metrices.DEVICE_WIDTH,
    color: Constant.App.colors.blackColor,
    fontSize: Constant.App.textSize.Large,
    fontFamily: Constant.App.fontFamily.headerBold,
  },
});

export default styles;
