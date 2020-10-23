import { StyleSheet } from "react-native";
import Constant from "../../utils/constants";
import metrices from "../../utils/metrices";
import { getStatusBarHeight } from "../../components/iPhoneXHelper";

let parentPaddingValue = metrices.DEVICE_WIDTH * 0.1;
let parentPadding = parentPaddingValue * 2;

let childPaddingValue = metrices.DEVICE_WIDTH * 0.03;
let childPadding = parentPadding + childPaddingValue * 2;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		backgroundColor: "white",
		marginTop: getStatusBarHeight(),
	},

	headerStyle: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		padding: parentPaddingValue * 0.5,
		backgroundColor: Constant.App.colors.whiteColor,
	},

	noContainerStyle: {
		alignSelf: "center",
		borderColor: Constant.App.colors.blueColor,
		borderWidth: 1,
		borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
		padding: Constant.App.dimensions.btnPaddingGlobal,
		width: metrices.DEVICE_WIDTH - childPadding,
		backgroundColor: Constant.App.colors.whiteColor,
		marginTop: metrices.DEVICE_HEIGHT * 0.03,
	},

	noTextStyle: {
		textAlign: "center",
		fontSize: Constant.App.textSize.Normal,
		fontFamily: Constant.App.fontFamily.bodyRegular,
		color: Constant.App.colors.blueColor,
	},

	title: {
		textAlign: "center",
		fontSize: 40,
		fontWeight: "bold",
		margin: 30,
	},

	yesContainerStyle: {
		alignSelf: "center",
		borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
		padding: Constant.App.dimensions.btnPaddingGlobal,
		width: metrices.DEVICE_WIDTH - childPadding,
		backgroundColor: Constant.App.colors.blueColor,
		marginTop: metrices.DEVICE_HEIGHT * 0.03,
	},

	yesTextStyle: {
		textAlign: "center",
		fontSize: Constant.App.textSize.Normal,
		fontFamily: Constant.App.fontFamily.bodyRegular,
		color: Constant.App.colors.whiteColor,
	},
});

export default styles;
