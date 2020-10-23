import React from "react";
import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Container, Header, TextButton, RadioGroup } from "../../components";
import { model } from "./model";
import intl from "../../utils/localization";
import {
	updateHealthHistory,
	updateHealthHistoryAsync,
} from "../healthHistory/actions";
import styles from "./styles";

const PregnancyHistory = ({ navigation }) => {
	const dispatch = useDispatch();

	const { answers } = useSelector(
		state => state.healthHistory.pregnancyHistory
	);

	const handleBackPress = () => {
		navigation.goBack();
	};

	const handleChange = (value, dataKey) => {
		dispatch(
			updateHealthHistory({
				pregnancyHistory: {
					answers: { ...answers, [dataKey]: value },
				},
			})
		);
	};

	const handleSave = () => {
		dispatch(
			updateHealthHistoryAsync({
				pregnancyHistory: { answers, completed: true },
				navigation,
			})
		);
	};

	return (
		<Container>
			<Header title={intl.en.pregnancyHistory.title} onBack={handleBackPress} />
			{model.map(({ question, dataKey, options }) => (
				<View key={dataKey} style={styles.container}>
					<Text style={styles.question}>{question}</Text>
					<RadioGroup
						data={options}
						initialValue={answers[dataKey]}
						onChange={value => handleChange(value, dataKey)}
						horizontal
					/>
				</View>
			))}
			<TextButton
				disabled={Object.values(answers).some(answer => !answer)}
				styles={{ root: styles.button }}
				onPress={handleSave}
			>
				{intl.en.insurance.save}
			</TextButton>
		</Container>
	);
};

export default PregnancyHistory;
