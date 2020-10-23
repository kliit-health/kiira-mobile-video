import React from "react";
import { View, Image, Text } from "react-native";
import moment from "moment";
import CustomButton from "../../../../components/customButton";
import styles from "../styles";
import { withNavigation } from "react-navigation";

const VisitDetails = ({ navigation, visit, ...props }) => {
	let today = moment().startOf("day");
	let appointment = moment(visit.time).format("YYYY-MM-DD");
	let daysUntilVisit = Math.abs(
		moment.duration(today.diff(appointment)).asDays()
	);

	return (
		<View style={{ alignSelf: "center" }}>
			<View style={styles.visitDetailsParentContainer}>
				<Text style={styles.visitDetailsTitle}>Your Next Appointment</Text>
				<View style={{ flexDirection: "row", margin: 26 }}>
					<View style={styles.expertImageContainer}>
						<Image
							style={styles.locationImage}
							source={require("../../../../../assets/blue_location.jpg")}
							activeOpacity={0.7}
						/>
						<View style={styles.informationContainer}>
							<Text style={styles.informationTitle}>
								Location: Virtual Visit
							</Text>
							<Text style={styles.informationTitle}>Duration: 30 Minutes</Text>
							<Text style={styles.informationText}>{`Your next appointment is ${
								daysUntilVisit > 0 ? `in ${daysUntilVisit} days.` : "today."
							}`}</Text>
						</View>
					</View>
				</View>
				<CustomButton
					buttonStyle={styles.noContainerStyle}
					textStyle={styles.noTextStyle}
					onPress={() => {
						navigation.navigate("ExpertLoginScreen", { visit: visit });
					}}
					text="Enter Waiting Room"
				/>
			</View>
		</View>
	);
};

export default withNavigation(VisitDetails);
