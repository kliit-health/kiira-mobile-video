import React, { Fragment } from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import CustomButton from "../../../components/customButton";
import styles from "../style";
import Constant from "../../../utils/constants";
import { makeAppointment } from "../action";
import { getAppointmentsList } from "../../appointments/action";

const Buttons = ({
	applyCredit,
	appointmentDetails,
	booked,
	expertData,
	modalVisible,
	navigation,
	setModalVisible,
	setBooked,
}) => {
	const dispatch = useDispatch();

	return (
		<View style={styles.renderButtonsContainer}>
			{booked ? (
				<Fragment>
					<CustomButton
						buttonStyle={styles.yesContainerStyle}
						textStyle={styles.yesTextStyle}
						onPress={() => {
							dispatch(getAppointmentsList({ uid: appointmentDetails.uid }));
							navigation.navigate(Constant.App.screenNames.Appointments);
						}}
						text="Check Upcoming Visits"
					/>
					<CustomButton
						buttonStyle={styles.noContainerStyle}
						textStyle={styles.noTextStyle}
						onPress={() => {
							navigation.navigate(Constant.App.screenNames.ExpertSchedule, {
								uid: expertData.uid,
								calendarID: expertData.calendarID,
							});
						}}
						text="Reschedule Visit  "
					/>
				</Fragment>
			) : !applyCredit ? (
				<Fragment>
					<CustomButton
						buttonStyle={styles.yesContainerStyle}
						textStyle={styles.yesTextStyle}
						onPress={() => {
							navigation.navigate("SelectExpert");
						}}
						text="Pay"
					/>
					<CustomButton
						buttonStyle={styles.noContainerStyle}
						textStyle={styles.noTextStyle}
						onPress={() => {
							setModalVisible(!modalVisible);
						}}
						text="Apply Plan Credit"
					/>
				</Fragment>
			) : (
				<CustomButton
					buttonStyle={styles.yesContainerStyle}
					textStyle={styles.yesTextStyle}
					onPress={() => {
						dispatch(makeAppointment(appointmentDetails));
						setBooked(true);
						navigation.navigate("Dashboard");
					}}
					text="Confirm"
				/>
			)}
		</View>
	);
};

export default Buttons;
