import React from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import intl from "../../utils/localization";
import { model } from "./model";
import { Container, Header, TextInput, TextButton } from "../../components";
import {
	updateHealthHistory,
	updateHealthHistoryAsync,
} from "../healthHistory/actions";
import styles from "./styles";

const Medications = ({ navigation }) => {
	const dispatch = useDispatch();
	const { answers } = useSelector(state => state.healthHistory.medications);

	const dispatchUpdate = (dataKey, data) => {
		dispatch(
			updateHealthHistory({
				medications: {
					answers: { ...answers, [dataKey]: data },
				},
			})
		);
	};

	const handleTextInputChange = (dataKey, data) => {
		dispatchUpdate(dataKey, data);
	};

	const handleOnBackPress = () => {
		navigation.goBack();
	};

	const handleSave = () => {
		dispatch(
			updateHealthHistoryAsync({
				medications: { answers, completed: true },
				navigation,
			})
		);
	};

	return (
		<Container>
			<Header title={intl.en.medications.title} onBack={handleOnBackPress} />
			{model.map(({ dataKey, placeholder }) => (
				<View key={dataKey} style={styles.container}>
					<TextInput
						value={answers[dataKey]}
						placeholder={placeholder}
						onChange={value => handleTextInputChange(dataKey, value)}
						multiline
					/>
				</View>
			))}
			<TextButton
				styles={{ root: styles.button }}
				onPress={handleSave}
				disabled={Object.values(answers).every(answer => !answer)}
			>
				{intl.en.medications.save}
			</TextButton>
		</Container>
	);
};

export default Medications;
