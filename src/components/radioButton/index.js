import React, { useState, useEffect, useMemo, Fragment } from "react";
import { shape, object, bool, string, func, number } from "prop-types";
import { View, TouchableOpacity, Animated, Text } from "react-native";
import { generateIdentifier, mergeStyles } from "../../utils/functions";
import defaultStyles, { modifiers } from "./styles";

const RadioButton = ({
	styles: customStyles,
	id,
	onPress,
	selected,
	boxed,
	animationConfig,
	label,
}) => {
	const initialState = new Animated.Value(0);
	const [animationState, setAnimationState] = useState(initialState);

	useEffect(() => {
		selected ? startAnimation() : setAnimationState(initialState);
	}, [selected]);

	const startAnimation = () => {
		const { duration, useNativeDriver } = animationConfig;
		Animated.timing(animationState, {
			toValue: 1,
			duration,
			useNativeDriver,
		}).start();
	};

	const handlePress = () => {
		onPress(label, id);
	};

	const styles = {
		root: mergeStyles([
			defaultStyles.root,
			[modifiers.boxed.root, boxed],
			[modifiers.selected.root, selected],
			customStyles.root,
		]),
		ring: mergeStyles([
			defaultStyles.ring,
			[modifiers.selected.ring, selected],
			customStyles.ring,
		]),
		circle: mergeStyles([
			defaultStyles.circle,
			[modifiers.selected.circle, selected],
			customStyles.circle,
		]),
		label: mergeStyles([
			defaultStyles.label,
			[modifiers.selected.label, selected],
			customStyles.label,
		]),
	};

	return (
		<TouchableOpacity
			onPress={handlePress}
			style={styles.root}
			activeOpacity={1}
		>
			<View style={styles.ring}>
				<Animated.View
					style={{
						opacity: animationState,
					}}
				>
					<View style={styles.circle} />
				</Animated.View>
			</View>
			<Text style={styles.label}>{label}</Text>
		</TouchableOpacity>
	);
};

RadioButton.propTypes = {
	styles: shape({
		root: object,
		ring: object,
		circle: object,
		label: object,
	}),
	label: string,
	id: string,
	onPress: func,
	selected: bool,
	boxed: bool,
	animationConfig: shape({
		duration: number,
		useNativeDriver: bool,
	}),
};

RadioButton.defaultProps = {
	styles: {},
	label: undefined,
	id: generateIdentifier(),
	onPress: () => {},
	selected: false,
	boxed: false,
	animationConfig: {
		duration: 200,
		useNativeDriver: true,
	},
};

export default RadioButton;
