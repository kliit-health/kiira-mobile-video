import React from "react";
import { View } from "react-native";
import CustomText from "../../../components/customText";
import Language from "../../../utils/localization";
import styles from "../style";

const lang = Language["en"];

const Specialties = ({ expertData }) => {
	return (
		<View style={styles.bioContainerStyle}>
			<CustomText style={styles.bioTitleTextStyle}>
				{lang.expertProfile.specialties}
			</CustomText>
			<CustomText style={styles.bioTextStyle}>
				{expertData.profileInfo.profession.specialities.map(
					(item, key) => `${item}    `
				)}
			</CustomText>
		</View>
	);
};

export default Specialties;
