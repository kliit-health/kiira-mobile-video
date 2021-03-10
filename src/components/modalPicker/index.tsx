import React, { useState, useMemo } from "react";
import { View, Text } from "react-native";
import { shape, object, func, arrayOf, string, number } from "prop-types";
import TextButton from "../textButton";
import Modal from "../modal";
import { WheelPicker } from "react-native-wheel-picker-android";
import defaultStyles from "./styles";

const ModalPicker = ({
	styles: customStyles,
	visible,
	data,
	title,
	selectedItem,
	onSave,
	onBackdropPress,
}) => {
	const [index, setIndex] = useState(0);

	const handleOnItemSelect = index => {
		setIndex(index);
	};

	const handleOnSave = () => {
		onSave(data[index]);
		setIndex(0);
	};

	const styles = {
		container: [defaultStyles.container, customStyles.container],
		title: [defaultStyles.title, customStyles.title],
		button: { root: defaultStyles.button },
		picker: [defaultStyles.picker, customStyles.picker],
	};

	return (
		<Modal onBackdropPress={onBackdropPress} visible={visible}>
			<View style={styles.container}>
				<Text style={styles.title}>{title}</Text>
				<View style={styles.picker}>
					{useMemo(
						() => (
							<WheelPicker
								data={data}
								selectedItem={selectedItem}
								onItemSelected={handleOnItemSelect}
							/>
						),
						[data]
					)}
				</View>
				<TextButton onPress={handleOnSave}>Save</TextButton>
			</View>
		</Modal>
	);
};

ModalPicker.propTypes = {
	styles: shape({
		container: object,
		title: object,
		picker: object,
		button: object,
	}),
	data: arrayOf(string).isRequired,
	onSave: func.isRequired,
	onBackgroundPress: func,
	title: string,
	selectedItem: number,
};

ModalPicker.defaultProps = {
	styles: {},
	onBackgroundPress: () => {},
	title: undefined,
	selectedItem: undefined,
};

export default ModalPicker;
