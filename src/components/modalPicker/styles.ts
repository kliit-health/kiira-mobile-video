import { StyleSheet, Dimensions } from "react-native";
import { colors, text } from "../../utils/constants";

const deviceHeight = Dimensions.get("window").height;

export default StyleSheet.create({
	container: {
		flexDirection: "column",
		margin: 30,
	},
	title: {
		fontFamily: text.fontFamily.poppinsRegular,
		fontSize: text.size.regular,
		alignSelf: "center",
	},
	picker: {
		marginBottom: 80,
		marginTop: 10,
		alignItems: "center",
	},
	button: {
		alignSelf: "center",
	},
});
