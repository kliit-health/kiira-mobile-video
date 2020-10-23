import React from "react";
import { shape, node, object, string, func, bool } from "prop-types";
import { TouchableOpacity, TextInput as Input } from "react-native";
import { colors } from "../../utils/constants";
import Chevron from "../../svgs/chevron.svg";
import defaultStyles from "./styles";
import { View } from "react-native-animatable";

const TextInput = ({
	styles: customStyles,
	placeholder = "Phone Number",
	chevron,
	children,
	onChange,
	onPress,
	multiline,
	value,
	id,
	...rest
}) => {
	const handleChange = value => {
		if (onChange) {
			id ? onChange(value, id) : onChange(value);
		}
	};

	const handlePress = () => {
		if (onPress) {
			id ? onPress(id) : onPress();
		}
	};

	const styles = {
		root: [defaultStyles.root, customStyles.root],
		textInput: [defaultStyles.textInput, customStyles.textInput],
		chevronContainer: [
			defaultStyles.chevronContainer,
			customStyles.chevronContainer,
		],
	};

	return (
		<TouchableOpacity
			activeOpacity={1}
			onPress={handlePress}
			style={styles.root}
		>
			<Input
				pointerEvents={onPress ? "none" : "auto"}
				value={value}
				onChangeText={handleChange}
				placeholder={placeholder}
				style={styles.textInput}
				placeholderTextColor={colors.blueGrey}
				multiline={multiline}
				{...rest}
			/>
			{chevron && (
				<View style={styles.chevronContainer}>
					<Chevron color={colors.gray} />
				</View>
			)}
		</TouchableOpacity>
	);
};

TextInput.propTypes = {
	onPress: func,
	onChange: func,
	children: node,
	value: string,
	chevron: bool,
	placeholder: string,
	multiline: bool,
	styles: shape({
		root: object,
	}),
};

TextInput.defaultProps = {
	onChange: () => {},
	placeholder: undefined,
	value: undefined,
	chevron: false,
	multiline: false,
	styles: {},
};

export default TextInput;
