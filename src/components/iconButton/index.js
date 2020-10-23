import React, { cloneElement } from "react";
import { shape, node, object, oneOf, number, func, bool } from "prop-types";
import defaultStyles from "./styles";
import { TouchableOpacity } from "react-native";
import Image from "react-native-fast-image";

const IconButton = ({
	styles: customStyles,
	source,
	resizeMode,
	children,
	disabled,
	activeOpacity,
	onPress,
	...rest
}) => {
	const styles = {
		root: [defaultStyles.root, customStyles.root],
		image: [defaultStyles.image, customStyles.image],
	};

	const handlePress = event => {
		event.preventDefault();
		onPress();
	};

	return (
		<TouchableOpacity
			disabled={disabled}
			activeOpacity={activeOpacity}
			onPress={handlePress}
			style={styles.root}
			{...rest}
		>
			{source ? (
				<Image source={source} style={styles.image} resizeMode={resizeMode} />
			) : (
				cloneElement(children)
			)}
		</TouchableOpacity>
	);
};

IconButton.displayName = "IconButton";

IconButton.propTypes = {
	source: node,
	chidlren: node,
	activeOpacity: number,
	resizeMode: oneOf(["contain", "cover", "stretch", "center", "repeat"]),
	onPress: func,
	disabled: bool,
	styles: shape({
		root: object,
		image: object,
	}),
};

IconButton.defaultProps = {
	styles: {},
	activeOpacity: 1,
	resizeMode: "contain",
	disabled: false,
	onPress: () => {},
};

export default IconButton;
