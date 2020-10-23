import React, { useState, useMemo, useEffect } from "react";
import {
	shape,
	object,
	bool,
	string,
	number,
	func,
	arrayOf,
	oneOfType,
	any,
} from "prop-types";
import { View } from "react-native";
import RadioButton from "../radioButton";
import { useDidMount } from "../../utils/hooks";
import { isEqual } from "lodash";
import { generateIdentifier, mergeStyles } from "../../utils/functions";
import defaultStyles, { modifiers } from "./styles";

/**
 * @desc - Radio Group Component
 * @param { object } styles - A nested styles object, see propTypes for shape.
 * @param { string[] } data - An array of strings to be listed. can be an array of objects too.
 * @param { object[] } data - An array of objects to be listed. can be an array of strings too.
 * @param { string } data[].label - The label string to be displayed. The label string of the selected item will be returned.
 * @param { any } data[].value - Any value. The value of the selected item will be returned.
 * @param { object } initialValue - The initial selected value passed as object or string. Must follow the provied data item format. The index of the initial selected item can be passed instead.
 * @param { number } initialIndex - The initial selected value passed as an index. Must follow the provied data item format. The data item of the initial selected item can be passed instead.
 * @param { function } onChange - A function that will be triggered if a selected item changed. Returns the selected item as the first argument and the second as the index.
 * @param { boolean } boxed - Determines if each radio button will be wrapped on a box. Not available on horizontal mode. Default is true.
 * @param { boolean } horizontal - If true displays the radio group in horizontal. Default is false.
 */

const RadioGroup = ({
	styles: customStyles,
	data,
	initialValue,
	initialIndex,
	onChange,
	boxed,
	horizontal,
}) => {
	const [selected, setSelected] = useState(undefined);
	const [index, setIndex] = useState(undefined);

	useDidMount(() => {
		if (initialValue) {
			setSelected(initialValue);
		}

		if (initialIndex) {
			setSelected(data[initialIndex]);
		}
	});

	useEffect(() => {
		onChange(selected, index);
	}, [selected, index]);

	const handlePress = item => {
		setSelected(item);
		setIndex(index);
	};

	const styles = {
		root: mergeStyles([
			defaultStyles.root,
			[modifiers.horizontal.root, horizontal],
			customStyles.root,
		]),
		button: {
			root: mergeStyles([
				defaultStyles.button,
				[modifiers.boxed.button, boxed],
				[modifiers.horizontal.button, horizontal],
			]),
		},
	};

	const compare = (first, second) => {
		return typeof first === "object"
			? isEqual(first, second)
			: first === second;
	};

	return (
		<View style={styles.root}>
			{data.map((item, index) => {
				const key = generateIdentifier();
				return useMemo(
					() => (
						<RadioButton
							label={typeof item === "object" ? item.label : item}
							selected={compare(item, selected)}
							onPress={() => handlePress(item, index)}
							boxed={horizontal ? false : boxed}
							key={key}
							styles={styles.button}
						/>
					),
					[selected]
				);
			})}
		</View>
	);
};

RadioGroup.propTypes = {
	styles: shape({
		root: object,
		radio: shape({
			root: object,
			ring: object,
			circle: object,
			label: object,
		}),
	}),
	initialIndex: number,
	initialValue: oneOfType([
		string,
		shape({
			label: string,
			value: any,
		}),
	]),
	data: arrayOf(
		oneOfType([
			string,
			shape({
				label: string,
				value: any,
			}),
		])
	),
	onChange: func,
	boxed: bool,
	horizontal: bool,
};

RadioGroup.defaultProps = {
	styles: {},
	initialIndex: undefined,
	initialValue: undefined,
	data: [],
	onChange: () => {},
	boxed: true,
	horizontal: false,
};

export default RadioGroup;
