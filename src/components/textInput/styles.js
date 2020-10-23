import { StyleSheet } from "react-native";
import { colors, text } from "../../utils/constants";

export default StyleSheet.create({
	root: {
		borderBottomWidth: 0.3,
		borderBottomColor: colors.lightGrey,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-end",
		minHeight: 50,
		marginBottom: 10,
	},
	textInput: {
		flex: 1,
		padding: 8,
		fontSize: text.size.regular,
		fontFamily: text.fontFamily.poppinsRegular,
	},
	chevronContainer: {
		padding: 8,
	},
});
