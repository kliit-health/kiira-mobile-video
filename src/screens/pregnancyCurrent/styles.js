import { StyleSheet } from "react-native";
import { colors, text } from "../../utils/constants";

export default StyleSheet.create({
	mainContainer: {
		flex: 1,
		margin: 20,
	},
	buttonContainer: {
		flex: 1,
		flexDirection: "row",
		backgroundColor: "red",
	},
	buttonText: {
		color: colors.blueGrey,
	},
	date: {
		alignSelf: "center",
		paddingVertical: 10,
		fontSize: text.size.large,
		fontWeight: "600",
	},
	title: {
		fontSize: text.size.regular,
	},
});
