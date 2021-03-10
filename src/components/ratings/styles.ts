import { StyleSheet } from "react-native";
import { text, colors } from "../../utils/constants";

export default StyleSheet.create({
	root: {
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		marginTop: 2,
		fontFamily: text.fontFamily.poppinsRegular,
		fontSize: text.size.regular,
	},
	starContainer: {
		marginRight: 3,
		marginTop: 2,
	},
});

export const modifiers = {
	multistar: {
		root: {
			flexDirection: "row",
		},
	},
};
