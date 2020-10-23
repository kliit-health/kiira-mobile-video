import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchCase } from "../../utils/functions";
import intl from "../../utils/localization";
import { units } from "../../utils/constants";
import { model, types } from "./model";
import { Container, Header, TextInput, TextButton } from "../../components";
import { Picker, DatePicker } from "./components";
import {
	updateHealthHistory,
	updateHealthHistoryAsync,
} from "../healthHistory/actions";
import styles from "./styles";

const BasicInfo = ({ navigation }) => {
	const dispatch = useDispatch();
	const { answers } = useSelector(state => state.healthHistory.basicInfo);

	const dispatchUpdate = (dataKey, data) => {
		dispatch(
			updateHealthHistory({
				basicInfo: {
					answers: { ...answers, [dataKey]: data },
				},
			})
		);
	};

	const handleTextInputChange = (dataKey, data) => {
		dispatchUpdate(dataKey, data);
	};

	const handlePickerSave = (dataKey, data) => {
		dispatchUpdate(dataKey, data);
	};

	const handleDatePickerSave = (dataKey, data) => {
		dispatchUpdate(dataKey, data);
	};

	const handleOnBackPress = () => {
		navigation.goBack();
	};

	const handleSave = () => {
		dispatch(
			updateHealthHistoryAsync({
				basicInfo: { answers, completed: true },
				navigation,
			})
		);
	};

	return (
		<Container>
			<Header title={intl.en.basicInfo.title} onBack={handleOnBackPress} />
			{model.map(({ type, dataKey, title, placeholder }) =>
				switchCase({
					[types.textInput]: (
						<TextInput
							key={title}
							value={answers[dataKey]}
							placeholder={title}
							onChange={value => handleTextInputChange(dataKey, value)}
						/>
					),
					[types.picker]: (
						<Picker
							key={title}
							value={answers[dataKey]}
							onSave={value => handlePickerSave(dataKey, value)}
							data={units[dataKey]}
							title={title}
							placeholder={placeholder}
						/>
					),
					[types.datePicker]: (
						<DatePicker
							key={title}
							value={answers[dataKey]}
							title={title}
							placeholder={placeholder}
							onSave={value => handleDatePickerSave(dataKey, value)}
						/>
					),
				})(undefined)(type)
			)}
			<TextButton
				styles={{ root: styles.button }}
				onPress={handleSave}
				disabled={Object.values(answers).every(answer => !answer)}
			>
				{intl.en.basicInfo.save}
			</TextButton>
		</Container>
	);
};

export default BasicInfo;
