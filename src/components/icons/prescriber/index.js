import React from "react";
import { shape, object, number, func } from "prop-types";
import { TouchableOpacity, Image, Text } from "react-native";
import { icons } from "../../../utils/constants";
import defaultStyles from "./styles";

const Prescriber = ({
	styles: customStyles,
	activeOpacity,
	height,
	onPress,
}) => {
	const styles = {
		root: [defaultStyles.root, customStyles.root],
		image: [defaultStyles.image, customStyles.root],
		text: [defaultStyles.text, customStyles.text],
	};

	return (
		<TouchableOpacity
			onPress={onPress}
			activeOpacity={activeOpacity}
			style={styles.root}
		>
			<Image style={styles.image} source={icons.prescriber} />
			<Text style={styles.text}>Prescriber</Text>
		</TouchableOpacity>
	);
};

Prescriber.propTypes = {
	styles: shape({
		root: object,
	}),
	height: number,
	onPress: func,
	activeOpacity: number,
};

Prescriber.defaultProps = {
	styles: {},
	activeOpacity: 1,
	onPress: () => {},
};

export default Prescriber;
