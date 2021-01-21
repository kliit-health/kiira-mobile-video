import React from "react";
import { Container, Header, TextButton } from "../../components";
import { View, Text } from "react-native";
import { useDispatch } from "react-redux";
import intl from "../../utils/localization";
import {
	updateHealthHistory,
	updateHealthHistoryAsync,
} from "../healthHistory/actions";
import styles from "./styles";

const initialState = {
	answers: {
		dueDate: null,
	},
	completed: false,
};

const Loss = ({ navigation }) => {
	const dispatch = useDispatch();

	const handleBackPress = () => {
		navigation.goBack();
	};

	const handleConfirm = () => {
		dispatch(
			updateHealthHistoryAsync({
				pregnancyCurrent: initialState,
				navigation,
			})
		);

		dispatch(
			updateHealthHistory({
				pregnancyCurrent: initialState,
			})
		);
	};

	return (
		<Container>
			<Header title={intl.en.loss.title} onBack={handleBackPress} />
			<Text style={styles.title}>{intl.en.loss.weAreSorry}</Text>
			<Text style={styles.description}>{intl.en.loss.youAreNotAlone}</Text>
			<Text style={styles.description}>{intl.en.loss.expertsNetwork}</Text>
			<TextButton styles={{ root: styles.button }} onPress={handleConfirm}>
				{intl.en.loss.confirm}
			</TextButton>
		</Container>
	);
};

export default Loss;
