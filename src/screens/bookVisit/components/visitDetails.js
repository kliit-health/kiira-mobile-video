import React from "react";
import { View, Text } from "react-native";
import styles from "../style";
import moment from "moment";

const VisitDetails = ({ applyCredit, booked, visitData }) => {
	return (
		<View style={styles.visitDetailsContainer}>
			<View style={styles.visitDetailsWrapper}>
				<Text style={styles.visitDetails}>30 min video call</Text>
			</View>
			<View style={styles.visitDetailsWrapper}>
				<Text style={styles.visitDetails}>
					{moment(visitData.time).format("llll")}
				</Text>
			</View>
			{applyCredit ? (
				<View style={styles.visitDetailsWrapper}>
					<Text style={styles.visitDetails}>{`\t\t\t $60`}</Text>
					<Text style={styles.visitDetails}>{`\t\t\t-$60`}</Text>
					<Text style={{ ...styles.visitDetails, fontWeight: "bold" }}>
						Total Cost: $0
					</Text>
				</View>
			) : (
				<View style={styles.visitDetailsWrapper}>
					<Text style={{ ...styles.visitDetails, fontWeight: "bold" }}>
						Total Cost: $60
					</Text>
				</View>
			)}
			{booked && (
				<Text style={{ ...styles.visitDetails, fontWeight: "bold" }}>
					Your virtual visit has been confirmed
				</Text>
			)}
		</View>
	);
};

export default VisitDetails;
