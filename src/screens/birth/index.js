import React from "react";
import { Container, Header, TextButton } from "../../components";
import { View, Text } from "react-native";
import { useDispatch } from "react-redux";
import intl from "../../utils/localization";
import { screenNames } from "../../utils/constants";
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

const Birth = ({ navigation }) => {
	const dispatch = useDispatch();

	const handleBackPress = () => {
		navigation.goBack();
	};

	const handleConfirm = () => {
		dispatch(
			updateHealthHistoryAsync({
				pregnancyCurrent: initialState,
			})
		);

		dispatch(
			updateHealthHistory({
				pregnancyCurrent: initialState,
			})
		);

		navigation.navigate(screenNames.AddChild, {
			destination: screenNames.Children,
		});
	};

	return (
		<Container>
			<Header title={intl.en.birth.title} onBack={handleBackPress} />
			<Text style={styles.title}>{intl.en.birth.congratulations}</Text>
			<Text style={styles.description}>{intl.en.birth.help}</Text>
			<TextButton styles={{ root: styles.button }} onPress={handleConfirm}>
				{intl.en.loss.confirm}
			</TextButton>
		</Container>
	);
};

export default Birth;
