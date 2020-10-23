import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	centerProductBox: {
		justifyContent: "center",
		paddingHorizontal: 10,
	},

	circle: {
		borderWidth: 1,
		borderRadius: 10000,
		alignItems: "center",
		justifyContent: "center",
	},

	circleFill: {
		borderWidth: 1,
		borderRadius: 10000,
	},

	icon: {
		borderWidth: 1,
		borderRadius: 10000,
		alignItems: "center",
		justifyContent: "center",
	},

	leftProductBox: {
		alignItems: "center",
		justifyContent: "center",
	},

	productBox: {
		flexDirection: "row",
		borderRadius: 7,
		borderWidth: 1,
		paddingHorizontal: 10,
		paddingVertical: 12,
		marginBottom: 10,
	},

	productBoxLess: {
		flexDirection: "row",
		marginTop: 10,
		flex: 1,
	},
});

export default styles;
