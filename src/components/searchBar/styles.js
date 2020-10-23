import { StyleSheet } from "react-native";
import { text, colors } from "../../utils/constants";

export default StyleSheet.create({
	root: {
		flexDirection: "row",
		alignItems: "center",
		maxHeight: 60,
		backgroundColor: colors.white,
		shadowColor: colors.black,
		shadowOffset: { width: 0, height: 10 },
		shadowRadius: 10,
		shadowOpacity: 0.05,
	},
	textInput: {
		flex: 1,
		paddingHorizontal: 20,
		fontFamily: text.fontFamily.poppinsRegular,
		fontSize: text.size.regular,
	},
	iconContainer: {
		margin: 20,
	},
});
