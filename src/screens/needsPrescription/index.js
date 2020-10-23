import React from "react";
import { View, Text } from "react-native";
import { Header } from "../../components";
import styles from "./style";
import CustomButton from "../../components/customButton";
import { withNavigation } from "react-navigation";
import { useDispatch } from "react-redux";
import { needsPrescription } from "../expertSchedule/action";

const NeedsPresciption = props => {
	const { navigation } = props;
	const dispatch = useDispatch();

	return (
		<View style={styles.container}>
			<Header title="" onBack={() => navigation.goBack()} />
			<Text style={styles.title}>Do you need a prescription?</Text>
			<CustomButton
				buttonStyle={styles.yesContainerStyle}
				textStyle={styles.yesTextStyle}
				onPress={() => {
					navigation.navigate("SelectExpert");
				}}
				text="No"
			/>
			<CustomButton
				buttonStyle={styles.yesContainerStyle}
				textStyle={styles.yesTextStyle}
				onPress={() => {
					dispatch(needsPrescription());
					navigation.navigate("SelectExpert");
				}}
				text="Yes"
			/>
			<CustomButton
				buttonStyle={styles.noContainerStyle}
				textStyle={styles.noTextStyle}
				onPress={() => {
					navigation.navigate("SelectExpert");
				}}
				text="I'm not sure"
			/>
		</View>
	);
};

export default withNavigation(NeedsPresciption);
