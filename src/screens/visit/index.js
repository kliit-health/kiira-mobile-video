import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, ScrollView } from "react-native";
import { Header } from "../../components";
import { withNavigation } from "react-navigation";
import { ExpertInfo, VisitDetails } from "./components";
import { getExpertsData } from "../expertSchedule/action";
import Constant from "../../utils/constants";
import styles from "./styles";

const Visit = props => {
	const dispatch = useDispatch();
	const { navigation } = props;
	const { uid, visit } = props.navigation.state.params;
	const expertData = useSelector(
		state => state.expertProfileReducer.expertData
	);

	const params = {
		expertsParams: {
			tableName: Constant.App.firebaseTableNames.users,
			uid,
		},
	};

	useEffect(() => {
		dispatch(getExpertsData(params));
	}, []);

	return (
		<View style={styles.parentContainerStyle}>
			<ScrollView
				keyboardShouldPersistTaps="handled"
				showsVerticalScrollIndicator={false}
			>
				{expertData && (
					<View>
						<Header
							title="Appointment Details"
							onBack={() => navigation.goBack()}
						/>
						<ExpertInfo expertData={expertData} visit={visit} />

						<VisitDetails visit={visit} />
					</View>
				)}
			</ScrollView>
		</View>
	);
};

export default withNavigation(Visit);
