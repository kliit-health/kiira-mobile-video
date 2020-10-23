import { StyleSheet } from "react-native";
import Constant from "../../utils/constants";
import metrices from "../../utils/metrices";
import { getStatusBarHeight } from "../../components/iPhoneXHelper";

let parentPaddingValue = metrices.DEVICE_WIDTH * 0.1;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		backgroundColor: Constant.App.colors.offWhiteColor,
		marginTop: getStatusBarHeight(),
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
});

export default styles;
