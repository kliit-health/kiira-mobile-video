import { StyleSheet } from "react-native";
import { text, colors } from "../../utils/constants";

export default StyleSheet.create({
	profileContainer: {
		alignItems: "center",
		padding: 20,
		paddingTop: 10,
		flexDirection: "row",
		backgroundColor: colors.white,
	},
	detailsContainer: {
		flex: 1,
		marginLeft: 20,
		alignItems: "flex-start",
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
		marginRight: 10,
	},
	buttonsContainer: {
		flexDirection: "row",
		padding: 20,
		backgroundColor: colors.white,
		borderBottomColor: colors.gray,
		borderBottomWidth: 0.3,
	},
	divider: {
		width: 20,
	},
});

export const modifiers = {
	linking: { root: { paddingBottom: 5 } },
	ratings: { root: { alignSelf: "flex-start" } },
};
