import React from "react";
import { View, TouchableOpacity, Image, Text, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styles from "./style";
import CustomText from "../../../components/customText";
import Language from "../../../utils/localization";
import { signoutApihit } from "../action";
import Constant from "../../../utils/constants";
import { Avatar } from "react-native-elements";

let lang = Language["en"];
const AccountExpert = props => {
	const { navigation } = props;
	const { staticImages } = Constant.App;
	const dispatch = useDispatch();
	const userData = useSelector(state => state.authLoadingReducer.userData);

	return (
		<View style={styles.container}>
			<ScrollView
				keyboardShouldPersistTaps="handled"
				showsVerticalScrollIndicator={false}
			>
				<View style={styles.headerStyle}></View>
				<View style={styles.accountContainer}>
					<Image
						style={styles.accountAvatar}
						defaultSource={staticImages.profilePlaceholderImg}
						source={{ uri: userData.profileInfo.profileImageUrl }}
						activeOpacity={0.7}
					/>
					<Text style={styles.userName}>
						{`${userData.profileInfo.firstName} ${userData.profileInfo.lastName}`}
					</Text>
					<View style={styles.userInfoContainer}>
						<View style={{ alignItems: "center" }}>
							<Text style={styles.userInfoHeading}>BORN</Text>
							<Text>{userData.profileInfo.dob}</Text>
						</View>
						<View style={{ alignItems: "center" }}>
							<Text style={styles.userInfoHeading}>PRONOUNS</Text>
							<Text>{userData.profileInfo.pronouns}</Text>
						</View>
						<View style={{ alignItems: "center" }}>
							<Text style={styles.userInfoHeading}>LICENSE</Text>
							<Text>{userData.profileInfo.state.code}</Text>
						</View>
					</View>
				</View>
				<View style={{ marginTop: 150 }}>
					<TouchableOpacity
						style={styles.itemsParentContainerStyle}
						onPress={() => {
							navigation.navigate(Constant.App.screenNames.SettingExpert);
						}}
					>
						<CustomText style={styles.itemTextStyle}>
							{lang.account.setting}
						</CustomText>
						<Image
							style={{
								width: 20,
								height: 40,
							}}
							resizeMode="contain"
							source={staticImages.rightChevronIcon}
						/>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.itemsParentContainerStyle}
						onPress={() => {
							navigation.navigate(Constant.App.screenNames.UpdateAvailablity);
						}}
					>
						<CustomText style={styles.itemTextStyle}>
							{lang.account.availablity}
						</CustomText>
						<Image
							style={{
								width: 20,
								height: 40,
							}}
							resizeMode="contain"
							source={staticImages.rightChevronIcon}
						/>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.itemsParentContainerStyle}
						onPress={() => {
							navigation.navigate(Constant.App.screenNames.TermsAndConditions);
						}}
					>
						<CustomText style={styles.itemTextStyle}>
							{lang.account.termsPolicies}
						</CustomText>
						<Image
							style={{
								width: 20,
								height: 40,
							}}
							resizeMode="contain"
							source={staticImages.rightChevronIcon}
						/>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.itemsParentContainerStyle}
						onPress={() => {
							navigation.navigate(Constant.App.screenNames.PrivacyPolicy);
						}}
					>
						<CustomText style={styles.itemTextStyle}>
							{lang.account.privacyPolicies}
						</CustomText>
						<Image
							style={{
								width: 20,
								height: 40,
							}}
							resizeMode="contain"
							source={staticImages.rightChevronIcon}
						/>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.logoutParentContainerStyle}
						onPress={() => {
							const payload = {
								navigation,
								isLoaderShow: true,
							};
							dispatch(signoutApihit(payload));
						}}
					>
						<CustomText style={styles.logoutTextStyle}>
							{lang.account.logout}
						</CustomText>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</View>
	);
};

export default AccountExpert;
