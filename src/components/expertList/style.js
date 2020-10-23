import { StyleSheet, Platform } from "react-native";
import Constant from "../../utils/constants";
import metrics from "../../utils/metrices";
import { getStatusBarHeight } from "../../components/iPhoneXHelper";

let parentPaddingValue = metrics.DEVICE_WIDTH * 0.05;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		marginTop: getStatusBarHeight(),
	},

	expertDetailsCard: {
		alignItems: "center",
		shadowColor: "rgba(0,0,0, .4)", // IOS
		shadowOffset: { height: 13, width: 1 }, // IOS
		shadowOpacity: 1, // IOS
		shadowRadius: 10, //IOS
		elevation: 2, // Android
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
		marginTop: metrics.DEVICE_HEIGHT * 0.01,
		marginLeft:
			Platform.OS === "ios"
				? metrics.DEVICE_WIDTH * 0.15
				: metrics.DEVICE_WIDTH * 0.2,
	},

	expertImage: {
		bottom: -140,
		left: 10,
		width: 100,
		height: 100,
		borderRadius: 50,
		position: "absolute",
	},

	expertImageContainer: {
		flexDirection: "row",
		justifyContent: "flex-start",
		zIndex: 1,
		elevation: 2,
	},

	expertName: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: metrics.DEVICE_HEIGHT * 0.05,
		marginLeft:
			Platform.OS === "ios"
				? metrics.DEVICE_WIDTH * 0.15
				: metrics.DEVICE_WIDTH * 0.2,
	},

	expertNameTextStyle: {
		color: Constant.App.colors.blackColor,
		fontSize: Constant.App.textSize.xLarge,
		fontWeight: "700",
		fontFamily: Constant.App.fontFamily.bodyRegular,
		marginTop: 5,
	},

	expertPrescriberImage: {
		width: 20,
		height: 20,
	},

	expertPrescriberTextStyle: {
		color: Constant.App.colors.blueColor,
		marginLeft: 10,
		marginBottom: 15,
	},

	expertProfession: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginLeft:
			Platform.OS === "ios"
				? metrics.DEVICE_WIDTH * 0.15
				: metrics.DEVICE_WIDTH * 0.2,
	},

	expertProfessionTextStyle: {
		fontSize: Constant.App.textSize.large,
		color: Constant.App.colors.blueGrey,
	},

	expertNameTextStyle: {
		flex: 1,
		marginTop: metrics.DEVICE_HEIGHT * 0.01,
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

	firstAvaliable: {
		fontSize: Constant.App.textSize.Medium,
		marginTop: 10,
		alignSelf: "center",
	},

	firstAvaliableContainer: {
		flexDirection: "row",
		borderTopWidth: 1,
		borderColor: "grey",
		paddingLeft: 50,
		paddingRight: 50,
		alignSelf: "center",
	},

	myRecentExpertContainerStyle: {
		flexDirection: "column",
		marginTop: metrics.DEVICE_HEIGHT * 0.03,
		marginBottom: metrics.DEVICE_HEIGHT * 0.03,
		paddingLeft: parentPaddingValue + 4,
		paddingRight: (parentPaddingValue + 4) * 0.5,
		backgroundColor: "white",
		flex: 1,
		width: 320,
		height: 200,
		borderRadius: 15,
	},
});

export default styles;
