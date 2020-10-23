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
	},
	divider: {
		width: 20,
	},
	tagsText: {
		fontFamily: text.fontFamily.poppinsRegular,
		fontSize: text.size.medium,
		color: colors.charcoal,
	},
	tagsContainer: {
		borderWidth: 0.3,
		borderColor: colors.gray,
		backgroundColor: colors.white,
		minHeight: 45,
	},
	tagsContentContainer: {
		paddingHorizontal: 20,
		alignItems: "center",
		backgroundColor: colors.white,
		justifyContent: "center",
	},
	contactContainer: {
		marginBottom: 10,
	},
	sectionTitle: {
		fontFamily: text.fontFamily.poppinsSemiBold,
		fontSize: text.size.large,
		paddingVertical: 10,
	},
	sectionText: {
		fontFamily: text.fontFamily.poppinsRegular,
		fontSize: text.size.regular,
		textAlign: "auto",
		color: colors.charcoal,
		paddingBottom: 20,
	},

	detailsContentContainer: {
		padding: 20,
		paddingBottom: 0,
	},
});

export const modifiers = {
	linking: { root: { paddingBottom: 5 } },
	ratings: { root: { alignSelf: "flex-start" } },
};
