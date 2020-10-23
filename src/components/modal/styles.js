import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../utils/constants";

const deviceHeight = Dimensions.get("window").height;

export default StyleSheet.create({
	root: {
		position: "absolute",
		margin: 0,
		bottom: 0,
		width: "100%",
		backgroundColor: colors.white,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
	},
});
