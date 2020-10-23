import React from "react";
import { View, Image, Text, Platform, Linking } from "react-native";
import { Header } from "../../components";
import styles from "./style";
import CustomButton from "../../components/customButton";
import { withNavigation } from "react-navigation";

const SOS = props => {
	const { navigation } = props;

	const openDialer = () => {
		let number = "";
		if (Platform.OS === "ios") {
			number = "telprompt:${911}";
		} else {
			number = "tel:${911}";
		}
		Linking.openURL(number);
	};

	return (
		<View style={styles.container}>
			<Header title="SOS" onBack={() => navigation.goBack()} />
			<Image
				style={{
					width: 100,
					height: 100,
					alignSelf: "center",
					marginTop: 20,
				}}
				resizeMode="contain"
				source={require("../../../assets/sos-purple.png")}
			/>
			<Text style={styles.title}>Are you experiencing an emergency?</Text>
			<CustomButton
				buttonStyle={styles.yesContainerStyle}
				textStyle={styles.yesTextStyle}
				onPress={() => {
					openDialer();
				}}
				text="Yes"
			/>
			<CustomButton
				buttonStyle={styles.noContainerStyle}
				textStyle={styles.noTextStyle}
				onPress={() => {
					navigation.goBack();
				}}
				text="No"
			/>
		</View>
	);
};

export default withNavigation(SOS);
