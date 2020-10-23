import { StyleSheet } from "react-native";
import { colors, text } from "../../utils/constants";
import { metrices } from "../../utils/metrices";

export default StyleSheet.create({
	root: {
		backgroundColor: colors.white,
		flexDirection: "row",
		padding: 20,
		paddingVertical: 20,
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 1.5,
	},
	chevron: {
		height: 16,
		width: 16,
	},
});
