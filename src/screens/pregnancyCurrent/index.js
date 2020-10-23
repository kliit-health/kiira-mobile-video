import React, { Fragment } from "react";
import { Container, Header, TextButton, ListItem } from "../../components";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import moment from "moment";
import plus from "../../svgs/plus.svg";
import intl from "../../utils/localization";
import { screenNames } from "../../utils/constants";
import { model } from "./model";
import styles from "./styles";

const formatDate = date => moment(date).format("ll");

const PregnancyCurrent = ({ navigation }) => {
	const { dueDate } = useSelector(
		state => state.healthHistory.pregnancyCurrent.answers
	);

	const handleAddPregnancy = () => {
		navigation.navigate(screenNames.DueDate);
	};

	const handleBackPress = () => {
		navigation.goBack();
	};

	return (
		<Container unformatted>
			<Header title={intl.en.pregnancyCurrent.title} onBack={handleBackPress} />
			{dueDate ? (
				<Fragment>
					<Text style={styles.date}>{`Due ${formatDate(dueDate)}`}</Text>
					{model.map(({ title, destination }) => (
						<View key={title}>
							<ListItem
								title={title}
								onPress={() => navigation.navigate(destination)}
							>
								<Text style={styles.title}>{title}</Text>
							</ListItem>
						</View>
					))}
				</Fragment>
			) : (
				<View style={styles.mainContainer}>
					<TextButton icon={plus} onPress={handleAddPregnancy} secondary>
						{intl.en.pregnancyCurrent.addPregnancy}
					</TextButton>
				</View>
			)}
		</Container>
	);
};

export default PregnancyCurrent;
