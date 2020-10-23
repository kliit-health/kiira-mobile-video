import { StyleSheet } from "react-native";
import { colors, text } from "../../../../utils/constants";

export default StyleSheet.create({
	listContainer: {
		backgroundColor: colors.white,
		paddingBottom: 10,
	},
	favoritesItemText: {
		fontFamily: text.fontFamily.poppinsRegular,
		fontSize: text.size.medium,
		color: colors.black,
		paddingTop: 3,
	},
	contentContainer: {
		paddingHorizontal: 20,
		alignItems: "center",
		backgroundColor: colors.white,
	},
	itemSeparator: { width: 20 },
	favoritesItem: {
		alignItems: "center",
	},
});
