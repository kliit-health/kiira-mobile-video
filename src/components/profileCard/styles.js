import { StyleSheet } from "react-native";
import { text, colors } from "../../utils/constants";

export default StyleSheet.create({
	root: {
		marginLeft: 20,
		marginRight: 20,
		marginBottom: 20,
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-start",
	},
	detailsBox: {
		flex: 1,
	},
	nameText: {
		fontFamily: text.fontFamily.poppinsRegular,
		fontSize: text.size.large,
		color: colors.black,
	},
	titleText: {
		fontFamily: text.fontFamily.poppinsRegular,
		fontSize: text.size.regular,
		color: colors.charcoal,
	},
	tagsText: {
		fontFamily: text.fontFamily.poppinsRegular,
		fontSize: text.size.medium,
		color: colors.gray,
		paddingVertical: 10,
	},
	actionBox: {
		justifyContent: "flex-end",
		alignItems: "flex-end",
		flexDirection: "row",
		paddingTop: 10,
	},
	labelsBox: {},
});

export const modifiers = {};
