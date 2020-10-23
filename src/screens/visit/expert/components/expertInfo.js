import React from "react";
import { View, Image, Text } from "react-native";
import Constant from "../../../../utils/constants";
import moment from "moment";
import styles from "../styles";

const staticImages = Constant.App;

const ExpertInfo = ({ expertData, visit, patientInfo }) => {
	console.log("DETAILS", patientInfo);
	return (
		<View style={{ marginTop: 10 }}>
			<View style={styles.expertImageContainer}>
				<Image
					style={styles.expertImage}
					defaultSource={staticImages.profilePlaceholderImg}
					source={
						patientInfo.profileInfo.profileImageUrl
							? {
									uri: patientInfo.profileInfo.profileImageUrl,
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
							{`${patientInfo.profileInfo.firstName} ${patientInfo.profileInfo.lastName}`}
						</Text>
					</View>
					<View style={styles.expertName}>
						<Text style={styles.expertNameTextStyle}>
							{`Reason for visit: ${visit.reason}`}
						</Text>
					</View>
					{/* <View style={styles.expertProfession}>
						<CustomText style={styles.expertProfessionTextStyle}>
							{expertData.profileInfo.profession.shortName}
						</CustomText>
						<View>
							<Image
								style={styles.expertPrescriberImage}
								source={require("../../../../../assets/rx.png")}
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
					</View> */}
				</View>
				<View style={styles.dateContainer}>
					<Text style={styles.dateText}>
						{moment(visit.time).format("llll")}
					</Text>
				</View>
			</View>
		</View>
	);
};

export default ExpertInfo;
