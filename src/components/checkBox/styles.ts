import { StyleSheet } from "react-native";
import { text } from "../../utils/constants";

export default StyleSheet.create({
	root: {
		flexDirection: "row",
		alignItems: "center",
		paddingBottom: 20,
	},
	text: {
		fontFamily: text.fontFamily.poppinsRegular,
		fontSize: text.size.regular,
		marginLeft: 10,
	},
});
