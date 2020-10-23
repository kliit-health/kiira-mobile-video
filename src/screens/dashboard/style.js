import { StyleSheet, Platform } from "react-native";
import Constant from "../../utils/constants";
import metrics from "../../utils/metrices";
import { getStatusBarHeight } from "../../components/iPhoneXHelper";

let parentPaddingValue = metrics.DEVICE_WIDTH * 0.05;
let parentPadding = parentPaddingValue * 2;

const styles = StyleSheet.create({
  badgeContainerStyle: {
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: Constant.App.colors.blueColor,
    borderRadius: metrics.DEVICE_WIDTH * 0.08 * 0.2,
    width: 25,
    height: 25,
    position: "absolute",
    bottom: 0,
    left: 0,
  },

  badgeTextStyle: {
    textAlign: "center",
    color: Constant.App.colors.whiteColor,
    fontSize: Constant.App.textSize.xSmall,
  },

  buttonContainerStyle: {
    alignSelf: "center",
    borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
    padding: Constant.App.dimensions.btnPaddingGlobal,
    width: metrics.DEVICE_WIDTH - parentPadding,
    backgroundColor: Constant.App.colors.blueColor,
    marginTop: metrics.DEVICE_HEIGHT * 0.03,
  },

  buttonTextStyle: {
    textAlign: "center",
    fontSize: Constant.App.textSize.Large,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    color: Constant.App.colors.whiteColor,
  },

  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: getStatusBarHeight(),
  },

  creditTextStyle: {
    paddingLeft: parentPaddingValue + 4,
    color: Constant.App.colors.blueColorCreditText,
    fontSize: Constant.App.textSize.Large,
    fontFamily: Constant.App.fontFamily.headerRegular,
  },

  dashboardContainer: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  dashboardItem: {
    margin: 5,
    textAlign: "center",
    width: metrics.DEVICE_WIDTH * 0.26,
  },

  dashboardItemLogo: {
    height: 105,
    width: 105,
    borderRadius: 10,
    backgroundColor: "#3CAAFF",
    marginBottom: 5,
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 2, // Android
  },

  dashboardItemText: {
    color: "#3CAAFF",
    fontSize: 10,
    textAlign: "center",
  },

  emptyCreditsContainerStyle: {
    marginTop: metrics.DEVICE_HEIGHT * 0.03,
    padding: parentPaddingValue,
    width: metrics.DEVICE_WIDTH - parentPadding,
    backgroundColor: Constant.App.colors.greyBgAsk,
    alignSelf: "center",
    borderRadius: 5,
  },

  emptyCreditsTextStyle: {
    alignSelf: "center",
    marginTop: metrics.DEVICE_HEIGHT * 0.01,
    width: metrics.DEVICE_WIDTH - parentPadding - parentPadding,
    color: Constant.App.colors.blackColor,
    fontSize: Constant.App.textSize.xLarge,
    fontFamily: Constant.App.fontFamily.headerBold,
    fontWeight: "400",
  },

  headingProfileImageParentContainer: {
    width: metrics.DEVICE_WIDTH,
    flexDirection: "row",
    padding: parentPaddingValue,
  },

  headingTextContainerStyle: {
    marginTop: metrics.DEVICE_HEIGHT * 0.03,
    width: metrics.DEVICE_WIDTH - parentPadding - 75,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  headingTextStyle: {
    padding: 2,
    color: Constant.App.colors.blackColor,
    fontSize: Constant.App.textSize.xxxxLarge,
    fontFamily: Constant.App.fontFamily.headerBold,
    fontWeight: "600",
  },

  headingTextHighlightedStyle: {
    padding: 2,
    color: Constant.App.colors.pinkColor,
    fontSize: Constant.App.textSize.xxxxLarge,
    fontFamily: Constant.App.fontFamily.headerBold,
    fontWeight: "600",
  },

  inputTextContainerStyle: {
    marginTop: metrics.DEVICE_HEIGHT * 0.05,
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    width: metrics.DEVICE_WIDTH - parentPadding,
    paddingBottom: Platform.OS === "ios" ? metrics.DEVICE_HEIGHT * 0.01 : 0,
    borderBottomColor: Constant.App.colors.lightGrey,
    borderBottomWidth: 0.5,
  },

  inputTypeStyle: {
    paddingHorizontal: 0,
    color: Constant.App.colors.blackColor,
    width: metrics.DEVICE_WIDTH - parentPadding,
    fontSize: Constant.App.textSize.Large,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    textAlign: "left",
    fontWeight: "200",
    textAlignVertical: "top",
  },

  logoStyle: {
    alignSelf: "flex-start",
    height: metrics.DEVICE_WIDTH * 0.15,
    width: metrics.DEVICE_WIDTH * 0.32,
    marginTop: 30,
    marginLeft: 10,
  },

  profileImgViewStyle: {
    alignItems: "flex-end",
    width: 75,
    height: 75,
  },
});

export default styles;
