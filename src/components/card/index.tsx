import React from "react";
import { shape, object, node } from "prop-types";
import { View } from "react-native";
import { cloneChild, cloneChildren } from "../../utils/functions";
import defaultStyles from "./styles";

const Card = ({ styles: customStyles, children, avatarLayout }) => {
	const styles = {
		root: [defaultStyles.root, customStyles.root],
		avatarContainer: [
			defaultStyles.avatarContainer,
			customStyles.avatarContainer,
		],
		detailsContainer: [
			defaultStyles.detailsContainer,
			customStyles.detailsContainer,
		],
		background: [
			defaultStyles.background,
			avatarLayout && {
				marginLeft: avatarLayout.width / 2,
				paddingLeft: avatarLayout.width / 2,
			},
			customStyles.background,
		],
	};

	return (
		<View style={styles.root}>
			<View style={styles.avatarContainer}>
				{cloneChild({ children, name: "Avatar" })}
			</View>
			<View style={styles.background}>
				<View style={styles.detailsContainer}>
					{cloneChildren({ children, blacklist: ["Avatar"] })}
				</View>
			</View>
		</View>
	);
};

Card.propTypes = {
	styles: shape({
		root: object,
	}),
	children: node,
	avatarLayout: object,
};

Card.defaultProps = {
	styles: {},
	avatarLayout: undefined,
};

export default Card;
