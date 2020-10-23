import React from "react";
import { View, Text, FlatList, Image, ActivityIndicator } from "react-native";
import { useDispatch } from "react-redux";
import CustomButton from "../../../components/customButton";
import CustomText from "../../../components/customText";
import { Rating } from "react-native-elements";
import Language from "../../../utils/localization";
import Constant from "../../../utils/constants";
import styles from "../style";
import { getAppointmentsByDay, setAppointmentTime } from "../action";
import moment from "moment";

const lang = Language["en"];
const { staticImages } = Constant.App;

const ExpertInfo = ({
	expertData,
	appointmentData,
	setShowShedule,
	showShedule,
	generateDateInfo,
	setSelectedDate,
	today,
	setSelectedTime,
	setDay,
	setTime,
}) => {
	const dispatch = useDispatch();
	const { calendarID, appointments } = appointmentData;

	return (
		<View>
			<View style={styles.expertImageContainer}>
				<Image
					style={styles.expertImage}
					defaultSource={staticImages.profilePlaceholderImg}
					source={
						expertData.profileInfo.profileImageUrl
							? {
									uri: expertData.profileInfo.profileImageUrl,
							  }
							: staticImages.profilePlaceholderImg
					}
					activeOpacity={0.7}
				/>
			</View>
			<View style={styles.expertInfoParentContainerStyle}>
				<View style={styles.myRecentExpertContainerStyle}>
					<View style={styles.expertName}>
						<Text style={styles.expertNameTextStyle}>
							{`${expertData.profileInfo.firstName} ${expertData.profileInfo.lastName}`}
						</Text>
					</View>
					<View style={styles.expertProfession}>
						<CustomText style={styles.expertProfessionTextStyle}>
							{expertData.profileInfo.profession.shortName}
						</CustomText>

						<View>
							<Image
								style={styles.expertPrescriberImage}
								source={require("../../../../assets/rx.png")}
								resizeMode="contain"
							/>
						</View>

						<CustomText style={styles.expertPrescriberTextStyle}>
							{lang.expertProfile.prescriber}
						</CustomText>
					</View>
					<View style={styles.expertIsPrescriber}>
						<Rating
							imageSize={20}
							readonly
							startingValue={parseFloat(expertData.rating / 2)}
						/>
					</View>
				</View>
				<CustomText style={styles.firstAvaliable}>
					Today's Availability
				</CustomText>
				{appointmentData.appointments.today.length ? (
					<FlatList
						showsHorizontalScrollIndicator={false}
						keyboardDismissMode={Platform.OS === "ios" ? "none" : "on-drag"}
						keyboardShouldPersistTaps={
							Platform.OS === "ios" ? "never" : "always"
						}
						data={appointmentData.appointments.today}
						horizontal={true}
						decelerationRate={"fast"}
						renderItem={({ item, index }) => {
							return (
								<CustomButton
									buttonStyle={styles.timeSlotContainerStyle}
									textStyle={styles.timeSlotTextStyle}
									onPress={() => {
										var date = generateDateInfo(item);
										setShowShedule(!showShedule);
										dispatch(getAppointmentsByDay({ ...date, calendarID }));
										dispatch(setAppointmentTime(item.time));
										setSelectedDate(today);
										setSelectedTime(index);
										setDay(date);
										setTime(item.time);
									}}
									text={moment(item.time).format("h:mm a")}
								/>
							);
						}}
						keyExtractor={(item, index) => index.toString()}
					/>
				) : appointments.todayLoading &&
				  !appointmentData.appointments.today.length ? (
					<ActivityIndicator size="large" />
				) : (
					<CustomText style={styles.firstAvaliable}>No appointments</CustomText>
				)}
			</View>
		</View>
	);
};

export default ExpertInfo;
