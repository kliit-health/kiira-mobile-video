import React from "react";
import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Container, Header, TextButton, RadioGroup } from "../../components";
import model from "./model";
import intl from "../../utils/localization";
import {
	updateHealthHistory,
	updateHealthHistoryAsync,
} from "../healthHistory/actions";
import styles from "./styles";

const { question, options, dataKey } = model;

const Insurance = ({ navigation }) => {
	const dispatch = useDispatch();
	const { answers } = useSelector(state => state.healthHistory.insurance);

	const handleBackPress = () => {
		navigation.goBack();
	};

	const handleChange = value => {
		dispatch(
			updateHealthHistory({
				insurance: {
					answers: { ...answers, [dataKey]: value },
				},
			})
		);
	};

	const handleSave = () => {
		dispatch(
			updateHealthHistoryAsync({
				insurance: { answers, completed: true },
				navigation,
			})
		);
	};

	return (
		<Container>
			<Header title={intl.en.insurance.title} onBack={handleBackPress} />
			<Text style={styles.question}>{question}</Text>
			<RadioGroup
				data={options}
				onChange={handleChange}
				initialValue={answers[dataKey]}
			/>
			<TextButton
				disabled={!answers[dataKey]}
				styles={{ root: styles.button }}
				onPress={handleSave}
			>
				{intl.en.insurance.save}
			</TextButton>
		</Container>
	);
};

export default Insurance;
