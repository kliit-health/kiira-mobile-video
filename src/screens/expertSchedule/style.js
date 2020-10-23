import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "../../components/iPhoneXHelper";
import metrics from "../../utils/metrices";
import Constant from "../../utils/constants";
import metrices from "../../utils/metrices";

let parentPaddingValue = metrics.DEVICE_WIDTH * 0.1;
let parentPadding = parentPaddingValue * 2;
let titlePaddingValue = metrics.DEVICE_WIDTH * 0.05;

let childPaddingValue = metrics.DEVICE_WIDTH * 0.03;
var childPadding = parentPadding + childPaddingValue * 2;

const styles = StyleSheet.create({
	backContainerStyle: {
		alignSelf: "flex-start",
		marginTop: 3,
	},

	bioContainerStyle: {
		paddingLeft: parentPaddingValue,
		paddingRight: parentPaddingValue,
		paddingTop: parentPaddingValue,
		flexDirection: "column",
		justifyContent: "center",
		width: metrics.DEVICE_WIDTH,
	},

	bioTextStyle: {
		width: metrics.DEVICE_WIDTH - parentPadding,
		marginTop: metrics.DEVICE_HEIGHT * 0.02,
		color: Constant.App.colors.blackColor,
		fontSize: Constant.App.textSize.Medium,
		fontFamily: Constant.App.fontFamily.bodyRegular,
	},

	bioTextStyleBold: {
		width: metrics.DEVICE_WIDTH - parentPadding,
		marginTop: metrics.DEVICE_HEIGHT * 0.02,
		color: Constant.App.colors.blackColor,
		fontSize: Constant.App.textSize.Medium,
		fontFamily: Constant.App.fontFamily.headerBold,
		fontWeight: "500",
	},

	bioTitleTextStyle: {
		width: metrics.DEVICE_WIDTH - parentPadding,
		color: Constant.App.colors.blackColor,
		fontSize: Constant.App.textSize.xLarge,
		fontFamily: Constant.App.fontFamily.headerBold,
		fontWeight: "500",
	},

	closeSheduleContainerStyle: {
		flexDirection: "row",
		justifyContent: "flex-end",
		marginTop: 3,
	},

	dateContainerStyle: {
		alignSelf: "center",
		borderColor: Constant.App.colors.blueColor,
		borderWidth: 1,
		borderRadius: 50,
		padding: 8,
		backgroundColor: Constant.App.colors.whiteColor,
		marginVertical: metrics.DEVICE_HEIGHT * 0.015,
	},

	dateSelectedContainerStyle: {
		alignSelf: "center",
		borderColor: Constant.App.colors.blueColor,
		borderWidth: 1,
		borderRadius: 50,
		padding: 8,
		backgroundColor: Constant.App.colors.blueColor,
		marginVertical: metrics.DEVICE_HEIGHT * 0.015,
	},

	dateTextStyle: {
		textAlign: "center",
		width: 18,
	},

	dateSelectedTextStyle: {
		textAlign: "center",
		color: Constant.App.colors.whiteColor,
		width: 18,
	},

	dateTimeSlotContainerStyle: {
		alignSelf: "flex-start",
		flexDirection: "row",
		borderColor: Constant.App.colors.blueColor,
		borderWidth: 1,
		borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
		padding: Constant.App.dimensions.btnPaddingGlobal,
		width: metrics.DEVICE_WIDTH * 0.28,
		height: 44,
		backgroundColor: Constant.App.colors.whiteColor,
		marginTop: metrics.DEVICE_HEIGHT * 0.02,
		marginRight: 5,
	},

	dateTimeSelectedSlotContainerStyle: {
		alignSelf: "flex-start",
		flexDirection: "row",
		borderColor: Constant.App.colors.blueColor,
		borderWidth: 1,
		borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
		padding: Constant.App.dimensions.btnPaddingGlobal,
		width: metrics.DEVICE_WIDTH * 0.28,
		height: 44,
		backgroundColor: Constant.App.colors.blueColor,
		marginTop: metrics.DEVICE_HEIGHT * 0.02,
		marginRight: 5,
	},

	dateTimeSlotTextStyle: {
		fontSize: Constant.App.textSize.Normal,
		fontFamily: Constant.App.fontFamily.bodyRegular,
		color: Constant.App.colors.blueColor,
	},

	dateTimeSelectedSlotTextStyle: {
		fontSize: Constant.App.textSize.Normal,
		fontFamily: Constant.App.fontFamily.bodyRegular,
		color: Constant.App.colors.whiteColor,
	},

	expertDetailsCard: {
		width: metrics.DEVICE_WIDTH,
	},

	expertIsOffline: {
		width: 18,
		height: 18,
		top: 40,
		left: 20,
		borderRadius: 8,
		backgroundColor: Constant.App.colors.grayColor,
		position: "absolute",
	},

	expertIsOnline: {
		width: 18,
		height: 18,
		top: 40,
		left: 20,
		borderRadius: 8,
		backgroundColor: Constant.App.colors.greenColor,
		position: "absolute",
	},

	expertIsPrescriber: {
		flexDirection: "row",
		marginLeft: metrices.DEVICE_WIDTH * 0.22,
	},

	expertImage: {
		bottom: -130,
		left: 10,
		width: 120,
		height: 120,

		borderRadius: 60,
		borderWidth: 2,
		borderColor: Constant.App.colors.blueColor,
		position: "absolute",
	},

	expertImageContainer: {
		flexDirection: "row",
		justifyContent: "flex-start",
		zIndex: 1,
	},

	expertName: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginLeft: metrics.DEVICE_WIDTH * 0.22,
	},

	expertNameTextStyle: {
		color: Constant.App.colors.blackColor,
		fontSize: 35,
		fontFamily: Constant.App.fontFamily.bodyRegular,
	},

	expertPrescriberImage: {
		width: 20,
		height: 20,
	},

	expertPrescriberTextStyle: {
		color: Constant.App.colors.blueColor,
		marginLeft: 10,
	},

	expertProfession: {
		flexDirection: "row",
		marginLeft: metrices.DEVICE_WIDTH * 0.22,
		marginVertical: 5,
	},

	expertProfessionTextStyle: {
		fontSize: Constant.App.textSize.xxlarge,
		color: Constant.App.colors.blueGrey,
		marginRight: 10,
	},

	expertNameTextStyle: {
		flex: 1,
		marginTop: metrics.DEVICE_HEIGHT * 0.025,
		fontSize: Constant.App.textSize.Large,
		fontFamily: Constant.App.fontFamily.bodyRegular,
	},

	expertRatingImage: {
		width: 20,
		height: 20,
		padding: 5,
	},

	expertRatingTextStyle: {
		fontSize: Constant.App.textSize.Large,
		color: Constant.App.colors.blueGrey,
	},

	expertInfoParentContainerStyle: {
		backgroundColor: Constant.App.colors.whiteColor,
		paddingLeft: parentPaddingValue * 0.2,
		paddingRight: parentPaddingValue * 0.2,
		paddingBottom: parentPaddingValue * 0.2,
		paddingTop: parentPaddingValue * 0.2,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: metrics.DEVICE_WIDTH,
	},

	expertInfoProfessionTextStyle: {
		color: Constant.App.colors.blackColor,
		fontSize: Constant.App.textSize.Small,
		fontFamily: Constant.App.fontFamily.bodyRegular,
		fontWeight: "200",
	},

	hoursContainerStyle: {
		padding: parentPaddingValue,
		flexDirection: "column",
		justifyContent: "center",
		width: metrics.DEVICE_WIDTH,
	},

	parentContainerStyle: {
		flex: 1,
		marginTop: getStatusBarHeight(),
		backgroundColor: Constant.App.colors.greyBgAsk,
		flexDirection: "column",
	},

	phoneNumberTextStyleBold: {
		color: Constant.App.colors.blueColor,
		fontSize: Constant.App.textSize.Medium,
		fontFamily: Constant.App.fontFamily.bodyRegular,
	},

	titleContainerStyle: {
		backgroundColor: Constant.App.colors.whiteColor,
		padding: titlePaddingValue,
		flexDirection: "column",
		width: metrics.DEVICE_WIDTH,
		alignItems: "center",
		justifyContent: "center",
	},

	firstAvaliable: {
		fontSize: Constant.App.textSize.Large,
		fontWeight: "500",
		alignSelf: "flex-start",
		justifyContent: "flex-end",
	},

	myRecentExpertContainerStyle: {
		flexDirection: "column",
		paddingLeft: parentPaddingValue + 4,
		paddingRight: (parentPaddingValue + 4) * 0.5,
		backgroundColor: "white",
		flex: 1,
		width: 320,
		height: 150,
		borderRadius: 15,
	},

	noContainerStyle: {
		justifyContent: "center",
		borderColor: Constant.App.colors.blueColor,
		borderWidth: 1,
		borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
		padding: Constant.App.dimensions.btnPaddingGlobal,
		width: metrics.DEVICE_WIDTH * 0.5,
		height: 40,
		backgroundColor: Constant.App.colors.whiteColor,
	},

	noSelectedContainerStyle: {
		justifyContent: "center",
		borderColor: Constant.App.colors.blueColor,
		borderWidth: 1,
		borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
		padding: Constant.App.dimensions.btnPaddingGlobal,
		width: metrics.DEVICE_WIDTH * 0.5,
		height: 40,
		backgroundColor: Constant.App.colors.blueColor,
	},

	noSelectedTextStyle: {
		textAlign: "center",
		fontSize: Constant.App.textSize.Normal,
		fontFamily: Constant.App.fontFamily.bodyRegular,
		color: Constant.App.colors.whiteColor,
	},

	noTextStyle: {
		textAlign: "center",
		fontSize: Constant.App.textSize.Normal,
		fontFamily: Constant.App.fontFamily.bodyRegular,
		color: Constant.App.colors.blueColor,
	},

	sheduleContainer: {
		flexDirection: "column",
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		position: "absolute",
		bottom: 0,
		backgroundColor: "white",
		width: metrics.DEVICE_WIDTH,
		padding: 40,
		backgroundColor: "white",
		borderRadius: 12,
		borderColor: "lightgrey",
		borderWidth: 1,
		height: 40,
		shadowOffset: { width: 0, height: 2 },
		shadowColor: "#000000",
		shadowOpacity: 1,
		shadowRadius: 7,
	},

	showSheduleContainer: {
		flexDirection: "column",
		height: metrics.DEVICE_HEIGHT * 0.75,
		justifyContent: "flex-end",
		alignItems: "center",
		position: "absolute",
		bottom: 0,
		backgroundColor: "white",
		width: metrics.DEVICE_WIDTH,
		padding: 20,
		backgroundColor: "white",
		borderRadius: 12,
		borderColor: "lightgrey",
		borderWidth: 1,
		shadowOffset: { width: 0, height: 2 },
		shadowColor: "#000000",
		shadowOpacity: 1,
		shadowRadius: 7,
	},

	timeSlotContainerStyle: {
		borderColor: Constant.App.colors.blueColor,
		borderWidth: 1,
		borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
		padding: Constant.App.dimensions.btnPaddingGlobal,
		width: metrics.DEVICE_WIDTH * 0.28,
		height: 40,
		backgroundColor: Constant.App.colors.whiteColor,
		marginTop: metrics.DEVICE_HEIGHT * 0.02,
		marginRight: 15,
	},

	timeSlotTextStyle: {
		textAlign: "center",
		fontSize: Constant.App.textSize.Normal,
		fontFamily: Constant.App.fontFamily.bodyRegular,
		color: Constant.App.colors.blueColor,
	},
});

export default styles;
