import { StyleSheet } from "react-native";
import { text, colors } from "../../../../utils/constants";

export const styles = StyleSheet.create({
	flatList: {
		flex: 1,
	},
	flatListContent: {
		flex: 1,
	},
});

export const itemStyles = StyleSheet.create({
	container: {
		padding: 10,
		justifyContent: "flex-start",
		backgroundColor: colors.white,
		borderBottomColor: colors.gray,
		borderBottomWidth: 0.3,
	},
	title: {
		fontFamily: text.fontFamily.poppinsRegular,
		fontSize: text.size.regular,
	},
	lastMessage: {
		fontFamily: text.fontFamily.poppinsRegular,
		fontSize: text.size.medium,
		color: colors.charcoal,
	},
	date: {
		fontFamily: text.fontFamily.poppinsRegular,
		fontSize: text.size.medium,
		color: colors.charcoal,
	},
	detailsContainer: {
		alignItems: "flex-end",
	},
	status: {
		fontFamily: text.fontFamily.poppinsRegular,
		fontSize: text.size.medium,
	},
	messagesContainer: {
		flex: 1,
		paddingRight: 20,
	},
});

export const fallbackStyles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		alignItems: "center",
		justifyContent: "center",
	},
	description: {
		fontFamily: text.fontFamily.poppinsRegular,
		fontSize: text.size.regular,
		textAlign: "center",
		color: colors.charcoal,
	},
});

export const itemModifiers = {
	list: {
		root: {
			height: 75,
		},
	},
};
