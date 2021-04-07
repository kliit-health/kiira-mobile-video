import {StyleSheet} from 'react-native';
import Constant from 'utils/constants';
import metrices from 'utils/metrices';

let parentPaddingValue = metrices.width * 0.05;
let parentPadding = parentPaddingValue * 2;

const styles = StyleSheet.create({
  buttonContainerStyle: {
    alignSelf: 'center',
    borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
    backgroundColor: Constant.App.colors.azureColor,
    width: '100%',
    paddingBottom: 15,
    paddingTop: 15,
    marginTop: 49,
  },

  buttonTextStyle: {
    textAlign: 'center',
    fontSize: Constant.App.textSize.Normal,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    color: Constant.App.colors.whiteColor,
  },

  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Constant.App.colors.whiteColor,
    marginTop: 35,
  },

  crossBottom: {
    width: 20,
    height: 20,
    marginTop: 12,
    marginLeft: 23,
    marginRight: 23,
    marginBottom: 12,
  },

  expireDateWidh: {
    width: (metrices.width - parentPadding) * 0.225,
    borderBottomWidth: 1,
    borderBottomColor: Constant.App.colors.pinkishGreyColor,
    marginRight: (metrices.width - parentPadding) * 0.125,
  },

  footerTextStyle: {
    textAlign: 'center',
    color: Constant.App.colors.blackTwoColor,
    marginTop: 5,
    fontSize: Constant.App.textSize.Small,
    fontFamily: Constant.App.fontFamily.bodyRegular,
  },

  headerStyle: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: parentPaddingValue * 0.5,
    backgroundColor: Constant.App.colors.whiteColor,
    borderBottomColor: Constant.App.colors.greyBgAsk,
    borderBottomWidth: 3,
  },

  inputTextContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    width: metrices.width - parentPadding,
    marginTop: metrices.height * 0.01,
    marginLeft: 20,
    marginRight: 20,
  },

  inputTextMargin: {marginLeft: 20},

  inputTypeStyle: {
    color: Constant.App.colors.blackColor,
    fontSize: Constant.App.textSize.Normal,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    textAlign: 'left',
    width: (metrices.width - parentPadding) * 0.9,
    borderBottomWidth: 1,
    borderBottomColor: Constant.App.colors.pinkishGreyColor,
  },

  lockImage: {
    marginTop: 24,
    width: 20,
    height: 20,
    alignSelf: 'center',
  },

  parentContainerStyle: {
    backgroundColor: Constant.App.colors.whiteColor,
    flexDirection: 'column',
    width: metrices.width,
    paddingLeft: parentPaddingValue,
    paddingRight: parentPaddingValue,
    marginTop: 20,
  },

  securityCodeWidth: {
    width: (metrices.width - parentPadding) * 0.55,
    borderBottomWidth: 1,
    borderBottomColor: Constant.App.colors.pinkishGreyColor,
  },

  titleTextStyle: {
    textAlign: 'center',
    color: Constant.App.colors.blackTwoColor,
    fontSize: Constant.App.textSize.xLarge,
    fontFamily: Constant.App.fontFamily.headerBold,
  },
});

export default styles;
