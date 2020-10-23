import React from "react";
import {
	View,
	TouchableOpacity,
	FlatList,
	Platform,
	Image,
} from "react-native";
import { withNavigation } from "react-navigation";
import CustomText from "../../components/customText";
import styles from "./style";
import Constant from "../../utils/constants";
import Language from "../../utils/localization";

const ExpertList = ({ navigation, getFirst, experts }) => {
	let Lang = Language["en"];
	const { staticImages } = Constant.App;

	return (
		<FlatList
			showsVerticalScrollIndicator={false}
			keyboardDismissMode={Platform.OS === "ios" ? "none" : "on-drag"}
			keyboardShouldPersistTaps={Platform.OS === "ios" ? "never" : "always"}
			data={experts}
			decelerationRate={"fast"}
			renderItem={({ item, index }) => {
				item = item.data();
				console.log(item);
				return (
					<TouchableOpacity
						onPress={() => {
							navigation.navigate(Constant.App.screenNames.ExpertSchedule, {
								uid: item.uid,
								calendarID: item.calendarID,
							});
						}}
					>
						<View style={styles.expertImageContainer}>
							<Image
								style={styles.expertImage}
								defaultSource={staticImages.profilePlaceholderImg}
								source={
									item.profileInfo.profileImageUrl
										? {
												uri: item.profileInfo.profileImageUrl,
										  }
										: staticImages.profilePlaceholderImg
								}
								activeOpacity={0.7}
							/>
							{item.isOnline ? (
								<View style={styles.expertIsOnline} />
							) : (
								<View style={styles.expertIsOffline} />
							)}
						</View>
						<View style={styles.expertDetailsCard}>
							<View style={styles.myRecentExpertContainerStyle}>
								<View style={styles.expertName}>
									<CustomText style={styles.expertNameTextStyle}>
										{`${item.profileInfo.firstName} ${item.profileInfo.lastName}`}
									</CustomText>
									<CustomText>
										<Image
											style={styles.expertRatingImage}
											source={require("../../../assets/yellow_star.png")}
											resizeMode="contain"
										/>
									</CustomText>
								</View>
								<View style={styles.expertProfession}>
									<CustomText style={styles.expertProfessionTextStyle}>
										{item.profileInfo.profession.fullName}
									</CustomText>
									<CustomText style={styles.expertRatingTextStyle}>
										{(item.rating / 2).toFixed(1)}
									</CustomText>
								</View>
								<View style={styles.expertIsPrescriber}>
									<View>
										<Image
											style={styles.expertPrescriberImage}
											source={require("../../../assets/rx.png")}
											resizeMode="contain"
										/>
									</View>

									<CustomText style={styles.expertPrescriberTextStyle}>
										{Lang.expertProfile.prescriber}
									</CustomText>
								</View>
								<View style={styles.firstAvaliableContainer}>
									{/* <CustomText style={styles.firstAvaliable}>
										{"Test"}
									</CustomText> */}
								</View>
							</View>
						</View>
					</TouchableOpacity>
				);
			}}
			keyExtractor={index => index.data().uid}
		/>
	);
};

export default withNavigation(ExpertList);
