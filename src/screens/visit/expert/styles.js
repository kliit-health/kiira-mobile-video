import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "../../../components/iPhoneXHelper";
import metrics from "../../../utils/metrices";
import Constant from "../../../utils/constants";
import metrices from "../../../utils/metrices";

let parentPaddingValue = metrics.DEVICE_WIDTH * 0.1;
let parentPadding = parentPaddingValue * 2;
let titlePaddingValue = metrics.DEVICE_WIDTH * 0.05;

let childPaddingValue = metrics.DEVICE_WIDTH * 0.03;
var childPadding = parentPadding + childPaddingValue * 2;

const styles = StyleSheet.create({
	dateContainer: {
		flex: 1,
		flexDirection: "row",
		borderBottomWidth: 1,
		borderColor: Constant.App.colors.greyColorText,
		width: metrics.DEVICE_WIDTH * 0.9,
	},

	dateText: {
		fontSize: 18,
		marginVertical: 15,
		fontFamily: Constant.App.fontFamily.bodyRegular,
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

	expertIsPrescriber: {
		flexDirection: "row",
		marginLeft: metrices.DEVICE_WIDTH * 0.22,
	},

	expertImage: {
		bottom: -120,
		left: 10,
		width: 120,
		height: 120,
		padding: 2,
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
		marginLeft: metrices.DEVICE_WIDTH * 0.22,
		fontFamily: Constant.App.fontFamily.bodyRegular,
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

	headerStyle: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		padding: parentPaddingValue * 0.5,
		backgroundColor: Constant.App.colors.whiteColor,
		width: metrics.DEVICE_WIDTH,
	},

	informationContainer: {
		marginHorizontal: 32,
	},

	informationTitle: {
		fontSize: 18,
		marginBottom: 8,
		color: Constant.App.colors.blueColor,
		fontFamily: Constant.App.fontFamily.bodyRegular,
	},

	informationText: {
		fontSize: 16,
		fontFamily: Constant.App.fontFamily.bodyRegular,
	},

	locationImage: {
		height: 35,
		width: 20,
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
		alignSelf: "center",
		justifyContent: "center",
		borderColor: Constant.App.colors.blueColor,
		borderWidth: 1,
		borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
		padding: Constant.App.dimensions.btnPaddingGlobal,
		width: metrics.DEVICE_WIDTH * 0.5,
		height: 42,
		backgroundColor: Constant.App.colors.whiteColor,
	},

	noTextStyle: {
		textAlign: "center",
		fontSize: Constant.App.textSize.Normal,
		fontFamily: Constant.App.fontFamily.bodyRegular,
		color: Constant.App.colors.blueColor,
	},

	parentContainerStyle: {
		flex: 1,
		alignItems: "center",
		marginTop: getStatusBarHeight(),
		flexDirection: "column",
	},

	titleTextStyle: {
		textAlign: "left",
		color: Constant.App.colors.blackColor,
		fontSize: Constant.App.textSize.Large,
		fontFamily: Constant.App.fontFamily.headerBold,
	},

	visitDetailsTitle: {
		backgroundColor: Constant.App.colors.blueColor,
		textAlign: "center",
		fontSize: 16,
		paddingVertical: 10,
		color: Constant.App.colors.whiteColor,
		borderColor: Constant.App.colors.blackColor,
		borderWidth: 1,
		width: metrics.DEVICE_WIDTH * 0.85,
	},

	visitDetailsParentContainer: {
		alignItems: "flex-start",
		backgroundColor: "white",
		width: metrics.DEVICE_WIDTH * 0.85,
		height: 300,
		borderBottomLeftRadius: 25,
		borderBottomRightRadius: 25,
		shadowColor: "rgba(0,0,0, .4)", // IOS
		shadowOffset: { height: 13, width: 1 }, // IOS
		shadowOpacity: 1, // IOS
		shadowRadius: 10, //IOS
		elevation: 2, // Android
		margin: 15,
		borderColor: Constant.App.colors.blueColor,
		borderWidth: 1,
		fontFamily: Constant.App.fontFamily.bodyRegular,
	},
});

export default styles;
