import { StyleSheet } from "react-native";
import metrics from "../../utils/metrices";
import Constant from "../../utils/constants";
import { getStatusBarHeight } from "../../components/iPhoneXHelper";

let parentPaddingValue = metrics.DEVICE_WIDTH * 0.1;
let parentPadding = parentPaddingValue * 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: Constant.App.colors.offWhiteColor,
    marginTop: getStatusBarHeight(),
  },

  headerStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: parentPaddingValue * 0.5,
    backgroundColor: Constant.App.colors.whiteColor,
    borderBottomColor: Constant.App.colors.greyBgAsk,
    borderBottomWidth: 3,
  },

  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  sectionContainerStyle: {
    paddingLeft: parentPaddingValue,
    paddingRight: parentPaddingValue,
    paddingTop: parentPaddingValue,
    flexDirection: "column",
    justifyContent: "center",
    width: metrics.DEVICE_WIDTH,
  },

  sectionTextStyle: {
    width: metrics.DEVICE_WIDTH - parentPadding,
    marginTop: metrics.DEVICE_HEIGHT * 0.02,
    color: Constant.App.colors.blackColor,
    fontSize: Constant.App.textSize.Medium,
    fontFamily: Constant.App.fontFamily.bodyRegular,
  },

  sectionTextStyleBold: {
    width: metrics.DEVICE_WIDTH - parentPadding,
    marginTop: metrics.DEVICE_HEIGHT * 0.02,
    color: Constant.App.colors.blackColor,
    fontSize: Constant.App.textSize.Medium,
    fontFamily: Constant.App.fontFamily.headerBold,
    fontWeight: "500",
  },

  sectionTitleTextStyle: {
    width: metrics.DEVICE_WIDTH - parentPadding,
    color: Constant.App.colors.blackColor,
    fontSize: Constant.App.textSize.xLarge,
    fontFamily: Constant.App.fontFamily.headerBold,
    fontWeight: "500",
  },

  titleTextStyle: {
    textAlign: "left",
    color: Constant.App.colors.blackColor,
    fontSize: Constant.App.textSize.Large,
    fontFamily: Constant.App.fontFamily.headerBold,
  },
});

export default styles;
