import React, { useState } from "react";
import { Container, Header, TextButton, TextInput } from "../../components";
import { useDidMount } from "../../utils/hooks";
import { View } from "react-native";
import { switchCase } from "../../utils/functions";
import { useDispatch, useSelector } from "react-redux";
import { model, types } from "./model";
import { DatePicker, Picker } from "./components";
import { isNumber } from "lodash";
import { updateHealthHistoryAsync } from "../healthHistory/actions";
import intl from "../../utils/localization";
import styles from "./styles";

const AddChild = ({ navigation }) => {
	const index = navigation.getParam("index");
	const destination = navigation.getParam("destination");

	const dispatch = useDispatch();

	const [details, setDetails] = useState({
		name: "",
		dateOfBirth: "",
		sex: "",
	});

	const { children } = useSelector(
		state => state.healthHistory.children.answers
	);

	useDidMount(() => {
		if (isNumber(index)) {
			setDetails(children[index]);
		}
	});

	const handleTextInput = name => {
		setDetails({
			...details,
			name,
		});
	};

	const handleDatePicker = dateOfBirth => {
		setDetails({
			...details,
			dateOfBirth,
		});
	};

	const handlePicker = sex => {
		setDetails({
			...details,
			sex,
		});
	};

	const handleSave = () => {
		dispatch(
			updateHealthHistoryAsync({
				children: {
					answers: {
						children: isNumber(index)
							? children.map((child, position) =>
									position === index ? details : child
							  )
							: [...children, { ...details }],
					},
					completed: true,
				},
			})
		);
		destination ? navigation.popToTop() : navigation.goBack();
	};

	const handleBackPress = () => {
		navigation.goBack();
	};

	const handleDelete = () => {
		dispatch(
			updateHealthHistoryAsync({
				children: {
					answers: {
						children: children.filter((_, position) => position !== index),
					},
				},
				navigation,
			})
		);
	};

	return (
		<Container>
			<Header title={intl.en.addChild.title} onBack={handleBackPress} />
			{model.map(({ type, dataKey, title, placeholder, options }) =>
				switchCase({
					[types.textInput]: (
						<TextInput
							key={title}
							value={details[dataKey]}
							placeholder={title}
							onChange={handleTextInput}
						/>
					),
					[types.picker]: (
						<Picker
							key={title}
							value={details[dataKey]}
							onSave={handlePicker}
							data={options}
							title={title}
							placeholder={placeholder}
						/>
					),
					[types.datePicker]: (
						<DatePicker
							key={title}
							value={details[dataKey]}
							title={title}
							placeholder={placeholder}
							onSave={handleDatePicker}
						/>
					),
				})(undefined)(type)
			)}
			<View style={styles.navigation}>
				{isNumber(index) && (
					<TextButton outlined onPress={handleDelete}>
						{intl.en.addChild.delete}
					</TextButton>
				)}
				<TextButton
					disabled={Object.entries(details).some(
						([_, value]) => value == false
					)}
					styles={{ root: styles.button }}
					onPress={handleSave}
				>
					{intl.en.addChild.save}
				</TextButton>
			</View>
		</Container>
	);
};

export default AddChild;
