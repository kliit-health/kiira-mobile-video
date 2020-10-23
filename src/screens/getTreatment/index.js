import React from "react";
import { View, Text, ScrollView } from "react-native";
import {
	Container,
	Header,
	TextButton,
	Avatar,
	Ratings,
	Linking,
} from "../../components";
import Arrow from "../../svgs/arrow.svg";
import Phone from "../../svgs/phone.svg";
import { Prescriber } from "../../components/icons";
import intl from "../../utils/localization";
import {
	addHashtag,
	formatLanguages,
	calculateRating,
} from "../../utils/functions";
import styles, { modifiers } from "./styles";
import { screenNames } from "../../utils/constants";

const GetTreatment = ({ navigation }) => {
	const details = navigation.getParam("details");
	const { rating, profileInfo, clinicInfo } = details;
	const {
		firstName,
		lastName,
		profileImageUrl,
		bio,
		profession,
		languages,
	} = profileInfo;
	const { specialities, fullName } = profession;
	const { name, city, zipcode, phoneNumber, state } = clinicInfo;

	const handleOnBackPress = () => {
		navigation.goBack();
	};

	const handleOnBookPress = () => {
		navigation.navigate(screenNames.RequestVisit);
	};

	const handleOnHistoryPress = () => {
		navigation.navigate(screenNames.TreatmentHistory, { details });
	};

	return (
		<Container unformatted>
			<Header onBack={handleOnBackPress} />
			<View style={styles.profileContainer}>
				<Avatar border source={profileImageUrl} />
				<View style={styles.detailsContainer}>
					<Text style={styles.nameText}>{`${firstName} ${lastName}`}</Text>
					<Text style={styles.titleText}>{fullName}</Text>
					<Prescriber />
				</View>
				<Ratings styles={modifiers.ratings} value={calculateRating(rating)} />
			</View>
			<View style={styles.buttonsContainer}>
				<TextButton onPress={handleOnHistoryPress} outlined>
					{intl.en.getTreatment.seeHistory}
				</TextButton>
				<View style={styles.divider} />
				<TextButton onPress={handleOnBookPress}>
					{intl.en.getTreatment.bookVisit}
				</TextButton>
			</View>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				style={styles.tagsContainer}
				contentContainerStyle={styles.tagsContentContainer}
			>
				<Text style={styles.tagsText}>{addHashtag(specialities)}</Text>
			</ScrollView>
			<ScrollView contentContainerStyle={styles.detailsContentContainer}>
				<View style={styles.contactContainer}>
					<Linking
						title={`${city}, ${state.value} (${state.code}), ${zipcode} `}
						subtitle={name}
						styles={modifiers.linking}
					>
						<Arrow />
					</Linking>
					<Linking title={phoneNumber} phoneNumber={phoneNumber}>
						<Phone />
					</Linking>
				</View>
				<Text style={styles.sectionTitle}>{intl.en.getTreatment.about}</Text>
				<Text style={{ ...styles.sectionText, paddingBottom: 10 }}>{bio}</Text>
				<Text style={styles.sectionTitle}>
					{intl.en.getTreatment.languages}
				</Text>
				<Text style={styles.sectionText}>{formatLanguages(languages)}</Text>
				<Text style={styles.sectionTitle}>
					{intl.en.getTreatment.specialties}
				</Text>
				<Text style={styles.sectionText}>{specialities}</Text>
			</ScrollView>
		</Container>
	);
};

export default GetTreatment;
