import { StyleSheet } from "react-native";
import { colors, text } from "../../utils/constants";

export default StyleSheet.create({
	root: {
		flexDirection: "row",
		alignItems: "center",
	},
	textContainer: {
		maxWidth: "90%",
	},
	title: {
		fontFamily: text.fontFamily.poppinsRegular,
		fontSize: text.size.regular,
		color: colors.blue,
		textAlign: "left",
	},
	subtitle: {
		fontFamily: text.fontFamily.poppinsRegular,
		fontSize: text.size.regular,
		color: colors.blue,
		padding: 0,
	},
	iconContainer: {
		alignItems: "flex-start",
		marginRight: 20,
	},
});
