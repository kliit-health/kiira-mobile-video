import {StyleSheet} from 'react-native';
import Constant from '../../../../../utils/constants';
import metrics from '../../../../../utils/metrices';

let parentPaddingValue = metrics.width * 0.1;
let parentPadding = parentPaddingValue * 2;

const styles = StyleSheet.create({
  buttonContainerStyle: {
    alignSelf: 'center',
    borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
    padding: Constant.App.dimensions.btnPaddingGlobal,
    width: metrics.width - parentPadding,
    backgroundColor: Constant.App.colors.blueColor,
    marginTop: metrics.height * 0.1,
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
    width: metrics.width,
    paddingLeft: parentPaddingValue,
    paddingRight: parentPaddingValue,
    marginTop: metrics.height * 0.02,
  },

  inputTextContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: metrics.width - parentPadding,
    paddingBottom: Platform.OS === 'ios' ? metrics.height * 0.01 : 0,
    marginTop: metrics.height * 0.05,
    borderBottomColor: Constant.App.colors.blackColor,
    borderBottomWidth: 0.5,
  },

  inputTypePasswordStyle: {
    color: Constant.App.colors.blackColor,
    fontSize: Constant.App.textSize.Normal,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    textAlign: 'left',
    width: metrics.width - parentPadding - metrics.width * 0.05,
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
    width: metrics.width,
    paddingLeft: parentPaddingValue,
    paddingRight: parentPaddingValue,
    marginTop: metrics.height * 0.01,
  },

  passwordValidationTextStyle: {
    marginLeft: 3,
    color: Constant.App.colors.blackColor,
    fontSize: Constant.App.textSize.Normal,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    textAlign: 'left',
    width: metrics.width - parentPadding - 15,
  },

  passwordValidChecboxIconStyle: {
    height: 12,
    width: 12,
  },

  titleTextStyle: {
    position: 'absolute',
    alignSelf: 'center',
    textAlign: 'center',
    width: metrics.width,
    color: Constant.App.colors.blackColor,
    fontSize: Constant.App.textSize.Large,
    fontFamily: Constant.App.fontFamily.headerBold,
  },
});

export default styles;
