import { StyleSheet, Platform } from "react-native";
import Constant from "../../../utils/constants";
import metrices from "../../../utils/metrices";
import { getStatusBarHeight } from "../../../components/iPhoneXHelper";

let parentPaddingValue = metrices.DEVICE_WIDTH * 0.1;
let parentPadding = parentPaddingValue * 2;

export const AVATAR_SIZE = 111;

const styles = StyleSheet.create({
	accountAvatar: {
		position: "absolute",
		top: -85,
		left: 110,
		width: AVATAR_SIZE,
		height: AVATAR_SIZE,
		borderRadius: 50,
	},

	accountContainer: {
		backgroundColor: "white",
		width: 330,
		height: 200,
		position: "absolute",
		top: 120,
		left: 45,
		zIndex: 1,
		justifyContent: "space-evenly",
		alignItems: "center",
		borderRadius: 12,
		borderColor: "lightgrey",
		borderWidth: 1,
		marginHorizontal: 5,
		shadowOffset: { width: 0, height: 2 },
		shadowColor: "#000000",
		shadowOpacity: 1,
		shadowRadius: 7,
	},

	accountPlanContainer: {
		height: 250,
		backgroundColor: "#e5e5ea",
		alignItems: "center",
		justifyContent: "flex-end",
		paddingBottom: 20,
	},

	container: {
		flex: 1,
		flexDirection: "column",
		backgroundColor: Constant.App.colors.offWhiteColor,
	},

	creditTextStyle: {
		textAlign: "left",
		paddingTop: 10,
		color: Constant.App.colors.whiteColor,
		fontSize: Constant.App.textSize.Large,
		fontFamily: Constant.App.fontFamily.headerBold,
		fontWeight: "500",
	},

	genderTextStyle: {
		textAlign: "left",
		paddingTop: 5,
		color: Constant.App.colors.whiteColor,
		fontSize: Constant.App.textSize.Normal,
		fontFamily: Constant.App.fontFamily.bodyRegular,
	},

	headerStyle: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingLeft: parentPaddingValue,
		paddingRight: parentPaddingValue * 0.5,
		backgroundColor: Constant.App.colors.blueColor,
		paddingTop:
			Platform.OS == "ios"
				? getStatusBarHeight() + metrices.DEVICE_HEIGHT * 0.05
				: metrices.DEVICE_HEIGHT * 0.05,
		paddingBottom: metrices.DEVICE_HEIGHT * 0.15,
	},

	itemsParentContainerStyle: {
		backgroundColor: Constant.App.colors.whiteColor,
		flexDirection: "row",
		paddingLeft: parentPaddingValue,
		paddingRight: parentPaddingValue,
		paddingTop: parentPaddingValue * 0.5,
		paddingBottom: parentPaddingValue * 0.5,
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 1.5,
	},

	itemTextStyle: {
		textAlign: "left",
		paddingTop: 5,
		color: Constant.App.colors.blackColor,
		fontSize: Constant.App.textSize.Normal,
		fontFamily: Constant.App.fontFamily.bodyRegular,
	},

	logoutParentContainerStyle: {
		marginTop: metrices.DEVICE_WIDTH * 0.1,
	},

	logoutTextStyle: {
		textAlign: "center",
		paddingTop: 10,
		color: Constant.App.colors.redColorLogout,
		fontSize: Constant.App.textSize.xLarge,
		width: metrices.DEVICE_WIDTH,
		fontFamily: Constant.App.fontFamily.bodyRegular,
	},

	nameTextStyle: {
		textAlign: "left",
		color: Constant.App.colors.whiteColor,
		fontSize: Constant.App.textSize.xLarge,
		fontFamily: Constant.App.fontFamily.headerBold,
	},

	profileImageParentContainerStyle: {
		flexDirection: "column",
	},

	profileInfoParentContainerStyle: {
		flexDirection: "column",
		alignSelf: "center",
		width: metrices.DEVICE_WIDTH - 120 - parentPadding,
	},

	userName: {
		fontSize: 25,
		fontWeight: "bold",
		fontFamily: Constant.App.fontFamily.avenirBook,
	},

	userInfoContainer: {
		flexDirection: "row",
		justifyContent: "space-evenly",
		width: 330,
	},

	userInfoHeading: {
		fontFamily: Constant.App.fontFamily.avenirBook,
		fontSize: 12,
		marginBottom: 5,
		color: "grey",
	},
});

export default styles;
