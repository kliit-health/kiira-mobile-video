import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, ScrollView } from "react-native";
import { Header } from "../../components";
import {
	getExpertsData,
	setCalendarID,
	getAppointmentsByDay,
	getAppointmentDates,
	getAppointmentsForToday,
} from "./action";
import { generateDateInfo } from "../../utils/helper";
import styles from "./style";
import Constant from "../../utils/constants";
import moment from "moment";

import {
	ExpertInfo,
	Bio,
	Specialties,
	Languages,
	ClinicInfo,
	Hours,
	SheduleModal,
} from "./components";

const ExpertSchedule = props => {
	const expertData = useSelector(
		state => state.expertProfileReducer.expertData
	);

	const appointmentData = useSelector(state => state.expertScheduleReducer);

	const today = moment(new Date()).format("YYYY-MM-DD");
	const current = generateDateInfo(today);
	const [day, setDay] = useState(null);
	const [time, setTime] = useState(null);
	const [showShedule, setShowShedule] = useState(false);
	const { navigation } = props;
	const { uid, calendarID } = navigation.state.params;
	const [selectedDate, setSelectedDate] = useState(today);
	const [selectedTime, setSelectedTime] = useState(null);
	const dispatch = useDispatch();

	useEffect(() => {
		const obj = {
			expertsParams: {
				tableName: Constant.App.firebaseTableNames.users,
				uid: uid,
			},
		};

		let addMonth = moment(`${current.year}-${current.monthNumber}`);
		addMonth = moment(addMonth).add(1, "M").format("YYYY-MM");

		dispatch(getExpertsData(obj));
		dispatch(setCalendarID(calendarID));
		dispatch(getAppointmentsForToday({ ...current, calendarID }));
		dispatch(getAppointmentsByDay({ ...current, calendarID }));
		dispatch(getAppointmentDates({ ...current, calendarID, addMonth }));
	}, []);

	const childProps = {
		appointmentData,
		calendarID,
		day,
		expertData,
		generateDateInfo,
		navigation,
		selectedDate,
		selectedTime,
		setDay,
		setShowShedule,
		setSelectedDate,
		setSelectedTime,
		setTime,
		showShedule,
		time,
		today,
	};

	return (
		<View style={styles.parentContainerStyle}>
			<Header title="" onBack={() => navigation.goBack()} />
			<ScrollView
				keyboardShouldPersistTaps="handled"
				showsVerticalScrollIndicator={false}
			>
				{expertData && (
					<View>
						<ExpertInfo {...childProps} />
						<Bio expertData={expertData} />
						<Specialties expertData={expertData} />
						<Languages expertData={expertData} />
						<ClinicInfo expertData={expertData} />
						<Hours expertData={expertData} />
					</View>
				)}
			</ScrollView>
			<SheduleModal {...childProps} />
		</View>
	);
};

export default ExpertSchedule;
