import { StyleSheet } from "react-native";
import { text } from "../../utils/constants";

export default StyleSheet.create({
	question: {
		fontFamily: text.fontFamily.poppinsRegular,
		fontSize: text.size.regular,
	},
	button: {
		marginTop: "auto",
	},
	radio: {
		flexDirection: "row",
	},
	container: {
		marginBottom: 20,
	},
});
