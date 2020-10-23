import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import ExpertList from "../../components/expertList";
import { Header } from "../../components";
import styles from "./style";

const SelectExpert = props => {
	const { navigation } = props;
	const dispatch = useDispatch();
	const today = moment(new Date()).format("YYYY-MM-DD");
	const [experts, setExperts] = useState(null);
	const recentExpertData = useSelector(
		state => state.askReducer.recentExpertData
	);

	const userData = useSelector(state => state.authLoadingReducer.userData);

	useEffect(() => {});

	useEffect(() => {
		if (recentExpertData && userData) {
			const filteredExperts = recentExpertData.filter(item => {
				const expert = item.data();
				return (
					expert.profileInfo.state.value === userData.profileInfo.state.value
				);
			});

			setExperts(filteredExperts);
		}
	}, [recentExpertData]);

	const getFirstAppointment = async calendarID => {
		const response = await fetch(
			`http://localhost:5000/availability/times?calendarID=${calendarID}&date=${today}`
		)
			.then(res => res.json())
			.then(data => data);
		console.log("MMM", response);
		return response;
	};

	return (
		<View style={styles.container}>
			<Header title="Request a visit" onBack={() => navigation.goBack()} />
			<ExpertList getFirst={getFirstAppointment} experts={experts} />
		</View>
	);
};

export default SelectExpert;
